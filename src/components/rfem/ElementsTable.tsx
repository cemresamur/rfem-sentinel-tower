import { useState } from 'react';
import { Filter, Plus, ChevronDown, ChevronRight, Clock, AlertTriangle } from 'lucide-react';
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
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

  const filteredElements = elements.filter((element) => {
    if (typeFilter !== 'all' && element.type !== typeFilter) return false;
    if (utilizationMin && element.utilization && element.utilization < parseFloat(utilizationMin))
      return false;
    if (exceededOnly && (!element.utilization || element.utilization <= 0.95)) return false;
    return true;
  });

  const toggleRow = (elementId: number) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(elementId)) {
      newExpanded.delete(elementId);
    } else {
      newExpanded.add(elementId);
    }
    setExpandedRows(newExpanded);
  };

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

  const getPriorityBadge = (priority: 'high' | 'medium' | 'low') => {
    const styles = {
      high: 'bg-red-100 text-red-800 border-red-300',
      medium: 'bg-yellow-100 text-yellow-800 border-yellow-300',
      low: 'bg-green-100 text-green-800 border-green-300',
    };
    return <Badge variant="outline" className={styles[priority]}>{priority.toUpperCase()}</Badge>;
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
                <>
                  <TableRow key={element.id} className={expandedRows.has(element.id) ? 'border-b-0' : ''}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        {element.workerTasks && element.workerTasks.length > 0 && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0"
                            onClick={() => toggleRow(element.id)}
                          >
                            {expandedRows.has(element.id) ? (
                              <ChevronDown className="h-4 w-4" />
                            ) : (
                              <ChevronRight className="h-4 w-4" />
                            )}
                          </Button>
                        )}
                        {element.label}
                      </div>
                    </TableCell>
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
                  {expandedRows.has(element.id) && element.workerTasks && element.workerTasks.length > 0 && (
                    <TableRow key={`${element.id}-tasks`} className="bg-muted/30">
                      <TableCell colSpan={8} className="p-0">
                        <div className="px-6 py-4 space-y-3">
                          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                            <AlertTriangle className="h-4 w-4 text-orange-500" />
                            Worker Tasks to Fix This Element
                          </div>
                          <div className="space-y-2">
                            {element.workerTasks.map((task) => (
                              <div
                                key={task.id}
                                className="flex items-start gap-3 p-3 bg-background rounded-lg border"
                              >
                                <div className="flex-1 space-y-1">
                                  <div className="flex items-center gap-2">
                                    {getPriorityBadge(task.priority)}
                                    <span className="text-sm font-medium">{task.description}</span>
                                  </div>
                                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Clock className="h-3 w-3" />
                                    Estimated: {task.estimatedHours}h
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
