import { TrendingUp, AlertTriangle, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnalysisSummary } from '@/types/rfem';

interface KPICardsProps {
  summary: AnalysisSummary;
}

export function KPICards({ summary }: KPICardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Max Utilization</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{(summary.max_util * 100).toFixed(1)}%</div>
          <p className="text-xs text-muted-foreground mt-1">
            {summary.max_util > 0.95 ? (
              <span className="text-destructive">Critical threshold exceeded</span>
            ) : summary.max_util > 0.85 ? (
              <span className="text-warning">Approaching limit</span>
            ) : (
              <span className="text-success">Within safe limits</span>
            )}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Max Deflection</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{summary.max_defl_mm} mm</div>
          <p className="text-xs text-muted-foreground mt-1">Maximum recorded deflection</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Exceedances</CardTitle>
          <AlertTriangle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{summary.exceed_count}</div>
          <p className="text-xs text-muted-foreground mt-1">
            {summary.exceed_count === 0 ? 'No issues detected' : 'Requiring attention'}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
