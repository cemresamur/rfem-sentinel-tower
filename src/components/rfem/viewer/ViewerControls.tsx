import { Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function ViewerControls() {
  return (
    <Card className="mb-4">
      <CardContent className="pt-4">
        <div className="flex items-start gap-3">
          <Info className="h-5 w-5 text-primary mt-0.5" />
          <div className="flex-1">
            <p className="font-medium mb-2">3D Viewer Controls</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-medium">Rotate:</span> Click and drag
              </div>
              <div>
                <span className="font-medium">Zoom:</span> Scroll wheel
              </div>
              <div>
                <span className="font-medium">Pan:</span> Right-click and drag
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t">
          <p className="font-medium mb-2 text-sm">Heatmap Legend</p>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-risk-critical text-white shadow-[0_0_16px_hsl(var(--risk-critical)/0.6)]">Critical ≥95%</Badge>
            <Badge className="bg-risk-high text-white shadow-[0_0_16px_hsl(var(--risk-high)/0.6)]">High ≥85%</Badge>
            <Badge className="bg-risk-medium text-white shadow-[0_0_16px_hsl(var(--risk-medium)/0.6)]">Medium ≥70%</Badge>
            <Badge className="bg-risk-low text-white shadow-[0_0_14px_hsl(var(--risk-low)/0.5)]">Low ≥50%</Badge>
            <Badge className="bg-risk-safe text-white shadow-[0_0_14px_hsl(var(--risk-safe)/0.5)]">Safe &lt;50%</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
