import { useState } from 'react';
import { Search, Upload, FileText, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Model } from '@/types/rfem';

interface ModelsSidebarProps {
  models: Model[];
  selectedModel: Model | null;
  onSelectModel: (model: Model) => void;
  onUpload: () => void;
}

export function ModelsSidebar({ models, selectedModel, onSelectModel, onUpload }: ModelsSidebarProps) {
  const [search, setSearch] = useState('');

  const filteredModels = models.filter((model) =>
    model.name.toLowerCase().includes(search.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="w-72 bg-sidebar border-r border-sidebar-border flex flex-col h-screen">
      <div className="p-4 border-b border-sidebar-border">
        <h2 className="text-lg font-semibold text-sidebar-foreground mb-4">Models</h2>
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-sidebar-foreground/50" />
          <Input
            placeholder="Search models..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 bg-sidebar-accent border-sidebar-border text-sidebar-foreground placeholder:text-sidebar-foreground/50"
          />
        </div>
        <Button onClick={onUpload} className="w-full" variant="default">
          <Upload className="mr-2 h-4 w-4" />
          Upload Model
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2">
          {filteredModels.length === 0 ? (
            <div className="text-center py-8 text-sidebar-foreground/60 text-sm">
              No models found
            </div>
          ) : (
            filteredModels.map((model) => (
              <button
                key={model.id}
                onClick={() => onSelectModel(model)}
                className={cn(
                  'w-full text-left p-3 rounded-md mb-1 transition-colors',
                  'hover:bg-sidebar-accent',
                  selectedModel?.id === model.id
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                    : 'text-sidebar-foreground'
                )}
              >
                <div className="flex items-start gap-2">
                  <FileText className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{model.name}</div>
                    <div className="flex items-center gap-1 text-xs opacity-70 mt-1">
                      <Clock className="h-3 w-3" />
                      {formatDate(model.updated_at)}
                    </div>
                  </div>
                </div>
              </button>
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
