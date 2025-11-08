import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { HeatmapData } from '@/types/rfem';
import { cn } from '@/lib/utils';

interface RiskHeatmapProps {
  heatmap: HeatmapData[];
  onElementClick?: (elementId: number) => void;
}

export function RiskHeatmap({ heatmap, onElementClick }: RiskHeatmapProps) {
  const getRiskLevel = (util: number) => {
    if (util >= 0.95) return { label: 'Critical', color: 'risk-critical' };
    if (util >= 0.85) return { label: 'High', color: 'risk-high' };
    if (util >= 0.70) return { label: 'Medium', color: 'risk-medium' };
    if (util >= 0.50) return { label: 'Low', color: 'risk-low' };
    return { label: 'Safe', color: 'risk-safe' };
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Risk Heatmap</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {heatmap.map((item) => {
            const risk = getRiskLevel(item.util);
            return (
              <button
                key={item.element_id}
                onClick={() => onElementClick?.(item.element_id)}
                className="w-full flex items-center justify-between p-3 rounded-md border hover:bg-accent transition-colors"
              >
                <span className="font-medium">Element #{item.element_id}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">
                    {(item.util * 100).toFixed(1)}%
                  </span>
                  <Badge
                    className={cn(
                      'min-w-20',
                      risk.color === 'risk-critical' && 'bg-risk-critical text-white',
                      risk.color === 'risk-high' && 'bg-risk-high text-white',
                      risk.color === 'risk-medium' && 'bg-risk-medium text-white',
                      risk.color === 'risk-low' && 'bg-risk-low text-white',
                      risk.color === 'risk-safe' && 'bg-risk-safe text-white'
                    )}
                  >
                    {risk.label}
                  </Badge>
                </div>
              </button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
