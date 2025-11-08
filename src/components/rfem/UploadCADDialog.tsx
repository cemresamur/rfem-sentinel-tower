import { useState, useRef } from 'react';
import { Upload, File, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

interface UploadCADDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpload: (file: File) => void;
}

export function UploadCADDialog({ open, onOpenChange, onUpload }: UploadCADDialogProps) {
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const acceptedFormats = '.dwg,.dxf,.ifc,.rf6,.rvt,.nwd,.nwc,.dgn,.skp';

  const handleFileSelect = (file: File) => {
    const extension = file.name.toLowerCase().split('.').pop();
    const validExtensions = ['dwg', 'dxf', 'ifc', 'rf6', 'rvt', 'nwd', 'nwc', 'dgn', 'skp'];

    if (!extension || !validExtensions.includes(extension)) {
      toast({
        title: 'Invalid File Type',
        description: `Please upload a valid CAD file (${acceptedFormats})`,
        variant: 'destructive',
      });
      return;
    }

    setSelectedFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleSubmit = () => {
    if (selectedFile) {
      onUpload(selectedFile);
      setSelectedFile(null);
      onOpenChange(false);
      toast({
        title: 'Model Uploaded',
        description: `${selectedFile.name} uploaded successfully`,
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Upload BIM/CAD Model</DialogTitle>
          <DialogDescription>
            Upload BIM (.ifc, .rvt, .nwd, .nwc, .dgn, .skp), AutoCAD (.dwg, .dxf), or RFEM (.rf6) files for analysis
          </DialogDescription>
        </DialogHeader>

        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isDragging ? 'border-primary bg-primary/5' : 'border-border'
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
        >
          {selectedFile ? (
            <div className="flex items-center justify-between p-4 bg-accent rounded-md">
              <div className="flex items-center gap-3">
                <File className="h-8 w-8 text-primary" />
                <div className="text-left">
                  <p className="font-medium">{selectedFile.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedFile(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <>
              <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg font-medium mb-2">
                Drop your CAD file here
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                or click to browse
              </p>
              <Button
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
              >
                Select File
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept={acceptedFormats}
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFileSelect(file);
                }}
              />
            </>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={!selectedFile}>
            Upload
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
