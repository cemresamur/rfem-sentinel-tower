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
    <div className="control-panel rounded-lg p-6 mb-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Load Case */}
        <div className="control-section rounded-md">
          <div className="control-label mb-3">
            <span className="status-indicator"></span>
            <span>Load Case</span>
          </div>
          <Input
            id="load-case"
            value={loadCase}
            onChange={(e) => onLoadCaseChange(e.target.value)}
            placeholder="e.g., LIVE_LIFT"
            className="control-input h-12 text-base font-mono"
          />
        </div>

        {/* Thresholds */}
        <div className="control-section rounded-md">
          <div className="control-label mb-3">
            <span className="status-indicator"></span>
            <span>Thresholds</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <Label htmlFor="util" className="text-[10px] text-glow-primary/70 uppercase tracking-wider block mb-1">
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
                className="control-input h-10 text-sm"
              />
            </div>
            <div>
              <Label htmlFor="defl" className="text-[10px] text-glow-primary/70 uppercase tracking-wider block mb-1">
                Defl mm
              </Label>
              <Input
                id="defl"
                type="number"
                value={thresholds.deflection_mm}
                onChange={(e) =>
                  onThresholdsChange({ ...thresholds, deflection_mm: parseFloat(e.target.value) })
                }
                className="control-input h-10 text-sm"
              />
            </div>
            <div>
              <Label htmlFor="stress" className="text-[10px] text-glow-primary/70 uppercase tracking-wider block mb-1">
                MPa
              </Label>
              <Input
                id="stress"
                type="number"
                value={thresholds.von_mises_mpa}
                onChange={(e) =>
                  onThresholdsChange({ ...thresholds, von_mises_mpa: parseFloat(e.target.value) })
                }
                className="control-input h-10 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Member Loads */}
        <div className="control-section rounded-md">
          <div className="flex items-center justify-between mb-3">
            <div className="control-label">
              <span className="status-indicator"></span>
              <span>Member Loads</span>
            </div>
            <Button onClick={addLoadRow} variant="default" size="sm" className="h-7 text-xs">
              <Plus className="h-3 w-3 mr-1" />
              Add
            </Button>
          </div>
          <div className="space-y-2 max-h-24 overflow-y-auto pr-1">
            {memberLoads.map((load, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  type="number"
                  placeholder="Member ID"
                  value={load.member_id ?? ''}
                  onChange={(e) =>
                    updateLoadRow(index, 'member_id', e.target.value ? parseInt(e.target.value) : null)
                  }
                  className="control-input flex-1 h-9 text-sm"
                />
                <Input
                  type="number"
                  placeholder="Fy (N)"
                  value={load.fy ?? ''}
                  onChange={(e) =>
                    updateLoadRow(index, 'fy', e.target.value ? parseFloat(e.target.value) : null)
                  }
                  className="control-input flex-1 h-9 text-sm"
                />
                <Button
                  onClick={() => removeLoadRow(index)}
                  variant="ghost"
                  size="sm"
                  className="px-2 h-9 hover:bg-destructive/20 hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
