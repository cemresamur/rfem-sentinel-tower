import { Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { MemberLoad, Thresholds } from '@/types/rfem';

interface ConfigurationBarProps {
  loadCase: string;
  thresholds: Thresholds;
  memberLoads: MemberLoad[];
  onLoadCaseChange: (value: string) => void;
  onThresholdsChange: (thresholds: Thresholds) => void;
  onMemberLoadsChange: (loads: MemberLoad[]) => void;
}

export function ConfigurationBar({
  loadCase,
  thresholds,
  memberLoads,
  onLoadCaseChange,
  onThresholdsChange,
  onMemberLoadsChange,
}: ConfigurationBarProps) {
  const addLoadRow = () => {
    onMemberLoadsChange([...memberLoads, { member_id: null, fy: null }]);
  };

  const removeLoadRow = (index: number) => {
    onMemberLoadsChange(memberLoads.filter((_, i) => i !== index));
  };

  const updateLoadRow = (index: number, field: keyof MemberLoad, value: number | null) => {
    const updated = [...memberLoads];
    updated[index] = { ...updated[index], [field]: value };
    onMemberLoadsChange(updated);
  };

  return (
    <Card className="p-4 border-b">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Load Case */}
        <div>
          <Label htmlFor="load-case">Load Case</Label>
          <Input
            id="load-case"
            value={loadCase}
            onChange={(e) => onLoadCaseChange(e.target.value)}
            placeholder="e.g., LIVE_LIFT"
          />
        </div>

        {/* Thresholds */}
        <div>
          <Label className="mb-2 block">Thresholds</Label>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <Label htmlFor="util" className="text-xs text-muted-foreground">
                Util %
              </Label>
              <Input
                id="util"
                type="number"
                step="0.01"
                value={thresholds.utilization}
                onChange={(e) =>
                  onThresholdsChange({ ...thresholds, utilization: parseFloat(e.target.value) })
                }
              />
            </div>
            <div>
              <Label htmlFor="defl" className="text-xs text-muted-foreground">
                Defl mm
              </Label>
              <Input
                id="defl"
                type="number"
                value={thresholds.deflection_mm}
                onChange={(e) =>
                  onThresholdsChange({ ...thresholds, deflection_mm: parseFloat(e.target.value) })
                }
              />
            </div>
            <div>
              <Label htmlFor="stress" className="text-xs text-muted-foreground">
                MPa
              </Label>
              <Input
                id="stress"
                type="number"
                value={thresholds.von_mises_mpa}
                onChange={(e) =>
                  onThresholdsChange({ ...thresholds, von_mises_mpa: parseFloat(e.target.value) })
                }
              />
            </div>
          </div>
        </div>

        {/* Member Loads */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <Label>Member Loads</Label>
            <Button onClick={addLoadRow} variant="outline" size="sm">
              <Plus className="h-3 w-3 mr-1" />
              Add
            </Button>
          </div>
          <div className="space-y-2 max-h-24 overflow-y-auto">
            {memberLoads.map((load, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  type="number"
                  placeholder="Member ID"
                  value={load.member_id ?? ''}
                  onChange={(e) =>
                    updateLoadRow(index, 'member_id', e.target.value ? parseInt(e.target.value) : null)
                  }
                  className="flex-1"
                />
                <Input
                  type="number"
                  placeholder="Fy (N)"
                  value={load.fy ?? ''}
                  onChange={(e) =>
                    updateLoadRow(index, 'fy', e.target.value ? parseFloat(e.target.value) : null)
                  }
                  className="flex-1"
                />
                <Button
                  onClick={() => removeLoadRow(index)}
                  variant="ghost"
                  size="sm"
                  className="px-2"
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
