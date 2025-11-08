import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Exceedance } from '@/types/rfem';

interface ReportsTabProps {
  reportUrl?: string;
  exceedances?: Exceedance[];
}

export function ReportsTab({ reportUrl, exceedances }: ReportsTabProps) {
  const exportToCSV = () => {
    if (!exceedances || exceedances.length === 0) return;

    const headers = ['Element ID', 'Type', 'Value', 'Limit', 'Location', 'Recommendation'];
    const rows = exceedances.map((exc) => [
      exc.element_id,
      exc.type,
      exc.value,
      exc.limit,
      exc.location,
      exc.recommendation,
    ]);

    const csv = [
      headers.join(','),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(',')),
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'exceedances.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* PDF Report */}
      {reportUrl && (
        <Card>
          <CardHeader>
            <CardTitle>RFEM Analysis Report</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-16 h-20 bg-muted rounded flex items-center justify-center">
                <FileText className="h-8 w-8 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Analysis Report.pdf</p>
                <p className="text-sm text-muted-foreground">Complete structural analysis results</p>
              </div>
              <Button asChild>
                <a href={reportUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </a>
              </Button>
            </div>
            <div className="border rounded-md p-4 bg-muted/30">
              <p className="text-sm text-muted-foreground">
                Report preview not available. Click Download to view the full report.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* CSV Export */}
      <Card>
        <CardHeader>
          <CardTitle>Export Data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Exceedances CSV</p>
              <p className="text-sm text-muted-foreground">
                Export all exceedances to a spreadsheet-compatible format
              </p>
            </div>
            <Button
              onClick={exportToCSV}
              disabled={!exceedances || exceedances.length === 0}
              variant="outline"
            >
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </CardContent>
      </Card>

      {!reportUrl && (!exceedances || exceedances.length === 0) && (
        <div className="text-center py-12 text-muted-foreground">
          <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>No reports available yet</p>
          <p className="text-sm mt-1">Run an analysis to generate reports</p>
        </div>
      )}
    </div>
  );
}
