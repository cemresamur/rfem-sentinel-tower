import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ElementWithMetrics } from '@/types/rfem';

interface CreateTaskDialogProps {
  element: ElementWithMetrics | null;
  modelId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (task: { model_id: string; element_id: number; issue_type: string; recommendation: string }) => void;
}

export function CreateTaskDialog({
  element,
  modelId,
  open,
  onOpenChange,
  onSubmit,
}: CreateTaskDialogProps) {
  const [issueType, setIssueType] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!element) return;

    onSubmit({
      model_id: modelId,
      element_id: element.id,
      issue_type: issueType || 'Structural Concern',
      recommendation: recommendation || element.recommendation || '',
    });

    // Reset form
    setIssueType('');
    setRecommendation('');
    onOpenChange(false);
  };

  if (!element) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create Site Task</DialogTitle>
            <DialogDescription>
              Create a new task for addressing structural issues with {element.label}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="element">Element</Label>
              <Input id="element" value={element.label} disabled />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={element.location || 'Not specified'}
                disabled
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="issue-type">Issue Type</Label>
              <Input
                id="issue-type"
                placeholder="e.g., Utilization Exceedance"
                value={issueType}
                onChange={(e) => setIssueType(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="recommendation">Recommendation</Label>
              <Textarea
                id="recommendation"
                placeholder="Enter action to be taken..."
                value={recommendation}
                onChange={(e) => setRecommendation(e.target.value)}
                rows={4}
                defaultValue={element.recommendation}
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Create Task</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
