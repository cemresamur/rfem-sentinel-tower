import { useState } from 'react';
import { Filter, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ElementWithMetrics } from '@/types/rfem';
import { cn } from '@/lib/utils';

interface ElementsTableProps {
  elements: ElementWithMetrics[];
  onCreateTask: (element: ElementWithMetrics) => void;
}

export function ElementsTable({ elements, onCreateTask }: ElementsTableProps) {
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [utilizationMin, setUtilizationMin] = useState<string>('');
  const [exceededOnly, setExceededOnly] = useState(false);

  const filteredElements = elements.filter((element) => {
    if (typeFilter !== 'all' && element.type !== typeFilter) return false;
    if (utilizationMin && element.utilization && element.utilization < parseFloat(utilizationMin))
      return false;
    if (exceededOnly && (!element.utilization || element.utilization <= 0.95)) return false;
    return true;
  });

  const getRiskBadge = (utilization?: number) => {
    if (!utilization) return null;
    if (utilization >= 0.95)
      return (
        <Badge className="bg-risk-critical text-white">Critical</Badge>
      );
    if (utilization >= 0.85)
      return <Badge className="bg-risk-medium text-white">High</Badge>;
    return <Badge className="bg-risk-safe text-white">Safe</Badge>;
  };

  const types = Array.from(new Set(elements.map((e) => e.type)));

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {types.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Input
          type="number"
          step="0.01"
          placeholder="Min Utilization"
          value={utilizationMin}
          onChange={(e) => setUtilizationMin(e.target.value)}
          className="w-40"
        />

        <Button
          variant={exceededOnly ? 'default' : 'outline'}
          onClick={() => setExceededOnly(!exceededOnly)}
          size="sm"
        >
          Exceeded Only
        </Button>

        <div className="ml-auto text-sm text-muted-foreground">
          {filteredElements.length} of {elements.length} elements
        </div>
      </div>

      {/* Table */}
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Element</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Utilization</TableHead>
              <TableHead>Deflection</TableHead>
              <TableHead>Von Mises</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Recommendation</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredElements.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                  No elements found matching filters
                </TableCell>
              </TableRow>
            ) : (
              filteredElements.map((element) => (
                <TableRow key={element.id}>
                  <TableCell className="font-medium">{element.label}</TableCell>
                  <TableCell>{element.type}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {element.utilization ? (
                        <>
                          <span>{(element.utilization * 100).toFixed(1)}%</span>
                          {getRiskBadge(element.utilization)}
                        </>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    {element.deflection_mm ? `${element.deflection_mm} mm` : '—'}
                  </TableCell>
                  <TableCell>
                    {element.von_mises_mpa ? `${element.von_mises_mpa} MPa` : '—'}
                  </TableCell>
                  <TableCell>{element.location || '—'}</TableCell>
                  <TableCell className="max-w-xs truncate">
                    {element.recommendation || '—'}
                  </TableCell>
                  <TableCell className="text-right">
                    {element.recommendation && (
                      <Button
                        onClick={() => onCreateTask(element)}
                        variant="outline"
                        size="sm"
                      >
                        <Plus className="h-4 w-4 mr-1" />
                        Task
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
