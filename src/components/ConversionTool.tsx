import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  File, 
  CheckCircle, 
  Download, 
  ArrowRight,
  X
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ConversionToolProps {
  toolId: string;
  fromFormat: string;
  toFormat: string;
  title: string;
  description: string;
}

const ConversionTool = ({ toolId, fromFormat, toFormat, title, description }: ConversionToolProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const { toast } = useToast();

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(prev => [...prev, ...droppedFiles]);
    
    toast({
      title: "Files added",
      description: `${droppedFiles.length} file(s) ready for conversion`,
    });
  }, [toast]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...selectedFiles]);
      
      toast({
        title: "Files added",
        description: `${selectedFiles.length} file(s) ready for conversion`,
      });
    }
  }, [toast]);

  const removeFile = useCallback((index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  }, []);

  const startConversion = useCallback(async () => {
    if (files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please select files to convert",
        variant: "destructive",
      });
      return;
    }

    setIsConverting(true);
    setProgress(0);

    // Simulate conversion progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsConverting(false);
          setIsComplete(true);
          toast({
            title: "Conversion complete!",
            description: "Your files are ready for download",
          });
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 300);
  }, [files, toast]);

  const downloadFiles = useCallback(() => {
    // Simulate download
    toast({
      title: "Download started",
      description: "Your converted files are being downloaded",
    });
    
    // Reset for new conversion
    setTimeout(() => {
      setFiles([]);
      setIsComplete(false);
      setProgress(0);
    }, 2000);
  }, [toast]);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          {title}
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          {description}
        </p>
        <div className="flex items-center justify-center space-x-3 text-sm text-muted-foreground">
          <span className="bg-surface px-3 py-1 rounded-full font-medium">
            {fromFormat.toUpperCase()}
          </span>
          <ArrowRight className="h-4 w-4" />
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full font-medium">
            {toFormat.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Upload Area */}
      {!isComplete && (
        <div
          className={`upload-area ${dragOver ? 'dragover' : ''} mb-8`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Drop your files here
          </h3>
          <p className="text-muted-foreground mb-6">
            or click to browse your computer
          </p>
          
          <input
            type="file"
            multiple
            onChange={handleFileSelect}
            className="hidden"
            id="file-upload"
            accept={`.${fromFormat}`}
          />
          
          <label htmlFor="file-upload">
            <Button asChild className="btn-hero cursor-pointer">
              <span>Choose Files</span>
            </Button>
          </label>
          
          <p className="text-xs text-muted-foreground mt-4">
            Supports {fromFormat.toUpperCase()} files up to 100MB each
          </p>
        </div>
      )}

      {/* File List */}
      {files.length > 0 && !isComplete && (
        <div className="bg-surface rounded-xl p-6 mb-8">
          <h3 className="font-semibold text-foreground mb-4">
            Selected Files ({files.length})
          </h3>
          <div className="space-y-3">
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-background rounded-lg p-3">
                <div className="flex items-center space-x-3">
                  <File className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground text-sm">{file.name}</p>
                    <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFile(index)}
                  className="text-muted-foreground hover:text-destructive"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Conversion Progress */}
      {isConverting && (
        <div className="bg-surface rounded-xl p-8 mb-8 text-center">
          <div className="mb-6">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Converting Your Files...
            </h3>
            <p className="text-muted-foreground">
              Please wait while we process your {files.length} file(s)
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <Progress value={progress} className="mb-2" />
            <p className="text-sm text-muted-foreground">
              {Math.round(progress)}% complete
            </p>
          </div>
        </div>
      )}

      {/* Conversion Complete */}
      {isComplete && (
        <div className="bg-success/10 border border-success/20 rounded-xl p-8 text-center">
          <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Conversion Complete!
          </h3>
          <p className="text-muted-foreground mb-8">
            Your {files.length} file(s) have been successfully converted to {toFormat.toUpperCase()}
          </p>
          
          <Button onClick={downloadFiles} className="btn-hero">
            <Download className="mr-2 h-5 w-5" />
            Download Converted Files
          </Button>
          
          <p className="text-xs text-muted-foreground mt-4">
            Files will be automatically deleted in 15 minutes for your security
          </p>
        </div>
      )}

      {/* Convert Button */}
      {files.length > 0 && !isConverting && !isComplete && (
        <div className="text-center">
          <Button onClick={startConversion} className="btn-hero">
            Convert {files.length} File{files.length > 1 ? 's' : ''}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ConversionTool;