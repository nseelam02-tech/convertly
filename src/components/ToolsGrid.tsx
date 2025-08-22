import { Link } from "react-router-dom";
import { 
  FileText, 
  FileSpreadsheet, 
  Presentation, 
  Image, 
  FileImage,
  Music,
  Video,
  ArrowLeftRight
} from "lucide-react";

const tools = [
  {
    id: "pdf-to-word",
    title: "PDF to Word",
    description: "Convert PDF documents to editable Word files",
    icon: FileText,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    id: "pdf-to-excel",
    title: "PDF to Excel",
    description: "Extract tables and data from PDF to Excel",
    icon: FileSpreadsheet,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    id: "pdf-to-ppt",
    title: "PDF to PowerPoint",
    description: "Convert PDF slides to PowerPoint presentations",
    icon: Presentation,
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    id: "pdf-to-jpg",
    title: "PDF to JPG",
    description: "Convert PDF pages to high-quality JPG images",
    icon: FileImage,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    id: "word-to-pdf",
    title: "Word to PDF",
    description: "Convert Word documents to PDF format",
    icon: FileText,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    id: "excel-to-pdf",
    title: "Excel to PDF",
    description: "Convert Excel spreadsheets to PDF",
    icon: FileSpreadsheet,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    id: "ppt-to-pdf",
    title: "PowerPoint to PDF",
    description: "Convert presentations to PDF format",
    icon: Presentation,
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    id: "jpg-to-png",
    title: "JPG to PNG",
    description: "Convert JPG images to PNG format",
    icon: Image,
    color: "text-pink-600",
    bgColor: "bg-pink-50"
  },
  {
    id: "mp4-to-mp3",
    title: "MP4 to MP3",
    description: "Extract audio from video files",
    icon: Music,
    color: "text-red-600",
    bgColor: "bg-red-50"
  }
];

const ToolsGrid = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Choose Your Conversion Tool
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select from our comprehensive collection of file conversion tools. 
            Fast, secure, and reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <Link
                key={tool.id}
                to={`/convert/${tool.id}`}
                className="tool-card group"
              >
                <div className="flex items-center mb-4">
                  <div className={`${tool.bgColor} rounded-lg p-3 mr-4 group-hover:scale-110 transition-transform duration-200`}>
                    <IconComponent className={`h-6 w-6 ${tool.color}`} />
                  </div>
                  <ArrowLeftRight className="h-4 w-4 text-muted-foreground" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                  {tool.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tool.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToolsGrid;