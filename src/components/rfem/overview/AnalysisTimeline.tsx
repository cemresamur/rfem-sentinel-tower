import { CheckCircle2, Circle, XCircle, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TimelineEvent {
  label: string;
  status: 'completed' | 'active' | 'pending' | 'failed';
  timestamp?: string;
}

interface AnalysisTimelineProps {
  status: 'running' | 'succeeded' | 'failed' | 'idle';
  currentStep?: number;
}

export function AnalysisTimeline({ status, currentStep = 0 }: AnalysisTimelineProps) {
  const getEvents = (): TimelineEvent[] => {
    const baseEvents = [
      { label: 'Analysis Queued', status: 'completed' as const },
      { label: 'Model Assembly', status: 'pending' as const },
      { label: 'Load Application', status: 'pending' as const },
      { label: 'Calculations', status: 'pending' as const },
      { label: 'Results Generation', status: 'pending' as const },
    ];

    if (status === 'idle') return baseEvents;

    return baseEvents.map((event, index) => {
      if (status === 'failed' && index === currentStep) {
        return { ...event, status: 'failed' as const };
      }
      if (index < currentStep) {
        return { ...event, status: 'completed' as const };
      }
      if (index === currentStep && status === 'running') {
        return { ...event, status: 'active' as const };
      }
      if (status === 'succeeded') {
        return { ...event, status: 'completed' as const };
      }
      return event;
    });
  };

  const events = getEvents();

  const getIcon = (eventStatus: TimelineEvent['status']) => {
    switch (eventStatus) {
      case 'completed':
        return <CheckCircle2 className="h-5 w-5 text-success" />;
      case 'active':
        return <Loader2 className="h-5 w-5 text-primary animate-spin" />;
      case 'failed':
        return <XCircle className="h-5 w-5 text-destructive" />;
      default:
        return <Circle className="h-5 w-5 text-muted-foreground" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Analysis Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0">{getIcon(event.status)}</div>
              <div className="flex-1 min-w-0">
                <p
                  className={cn(
                    'text-sm font-medium',
                    event.status === 'active' && 'text-primary',
                    event.status === 'failed' && 'text-destructive',
                    event.status === 'pending' && 'text-muted-foreground'
                  )}
                >
                  {event.label}
                </p>
                {event.timestamp && (
                  <p className="text-xs text-muted-foreground mt-0.5">{event.timestamp}</p>
                )}
              </div>
              {index < events.length - 1 && (
                <div className="w-px h-8 bg-border absolute left-[26px] mt-6" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
