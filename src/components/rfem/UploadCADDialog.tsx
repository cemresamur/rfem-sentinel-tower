import { useState, useRef } from 'react';
import { Upload, File, X, FileType, Box, Building2, Layers, Grid3x3, Cylinder } from 'lucide-react';
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

  const getFileTypeInfo = (filename: string) => {
    const ext = filename.toLowerCase().split('.').pop() || '';
    const configs = {
      dwg: { icon: FileType, color: 'text-red-500', bg: 'bg-red-50', label: 'AutoCAD Drawing' },
      dxf: { icon: FileType, color: 'text-red-400', bg: 'bg-red-50', label: 'AutoCAD Exchange' },
      ifc: { icon: Building2, color: 'text-blue-500', bg: 'bg-blue-50', label: 'IFC BIM' },
      rvt: { icon: Building2, color: 'text-orange-500', bg: 'bg-orange-50', label: 'Revit' },
      nwd: { icon: Layers, color: 'text-green-500', bg: 'bg-green-50', label: 'Navisworks' },
      nwc: { icon: Layers, color: 'text-green-400', bg: 'bg-green-50', label: 'Navisworks Cache' },
      dgn: { icon: Grid3x3, color: 'text-purple-500', bg: 'bg-purple-50', label: 'MicroStation' },
      skp: { icon: Box, color: 'text-cyan-500', bg: 'bg-cyan-50', label: 'SketchUp' },
      rf6: { icon: Cylinder, color: 'text-indigo-500', bg: 'bg-indigo-50', label: 'RFEM' },
    };
    return configs[ext as keyof typeof configs] || { icon: File, color: 'text-muted-foreground', bg: 'bg-muted', label: 'Unknown' };
  };

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
            (() => {
              const fileInfo = getFileTypeInfo(selectedFile.name);
              const FileIcon = fileInfo.icon;
              return (
                <div className="flex items-center justify-between p-4 bg-background border-2 border-primary/20 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${fileInfo.bg}`}>
                      <FileIcon className={`h-8 w-8 ${fileInfo.color}`} />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-foreground">{selectedFile.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded ${fileInfo.bg} ${fileInfo.color}`}>
                          {fileInfo.label}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </span>
                      </div>
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
              );
            })()
          ) : (
            <>
              <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg font-medium mb-2">
                Drop your BIM/CAD file here
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                or click to browse
              </p>
              
              <div className="grid grid-cols-3 gap-2 mb-4 max-w-md mx-auto">
                {[
                  { ext: 'dwg', label: 'DWG', icon: FileType, color: 'text-red-500' },
                  { ext: 'ifc', label: 'IFC', icon: Building2, color: 'text-blue-500' },
                  { ext: 'rvt', label: 'RVT', icon: Building2, color: 'text-orange-500' },
                  { ext: 'nwd', label: 'NWD', icon: Layers, color: 'text-green-500' },
                  { ext: 'dgn', label: 'DGN', icon: Grid3x3, color: 'text-purple-500' },
                  { ext: 'skp', label: 'SKP', icon: Box, color: 'text-cyan-500' },
                ].map(({ ext, label, icon: Icon, color }) => (
                  <div key={ext} className="flex flex-col items-center gap-1 p-2 rounded-md bg-muted/50">
                    <Icon className={`h-5 w-5 ${color}`} />
                    <span className="text-xs font-medium text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>

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
