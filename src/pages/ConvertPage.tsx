import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConversionTool from "@/components/ConversionTool";
import NotFound from "./NotFound";

const toolConfigs: Record<string, {
  fromFormat: string;
  toFormat: string;
  title: string;
  description: string;
}> = {
  "pdf-to-word": {
    fromFormat: "pdf",
    toFormat: "docx",
    title: "PDF to Word Converter",
    description: "Convert your PDF documents to editable Word files with perfect formatting"
  },
  "pdf-to-excel": {
    fromFormat: "pdf",
    toFormat: "xlsx",
    title: "PDF to Excel Converter",
    description: "Extract tables and data from PDFs into Excel spreadsheets"
  },
  "pdf-to-ppt": {
    fromFormat: "pdf",
    toFormat: "pptx",
    title: "PDF to PowerPoint Converter",
    description: "Transform PDF slides into editable PowerPoint presentations"
  },
  "pdf-to-jpg": {
    fromFormat: "pdf",
    toFormat: "jpg",
    title: "PDF to JPG Converter",
    description: "Convert PDF pages to high-quality JPG images"
  },
  "word-to-pdf": {
    fromFormat: "docx",
    toFormat: "pdf",
    title: "Word to PDF Converter",
    description: "Convert Word documents to PDF format while preserving formatting"
  },
  "excel-to-pdf": {
    fromFormat: "xlsx",
    toFormat: "pdf",
    title: "Excel to PDF Converter",
    description: "Convert Excel spreadsheets to PDF format"
  },
  "ppt-to-pdf": {
    fromFormat: "pptx",
    toFormat: "pdf",
    title: "PowerPoint to PDF Converter",
    description: "Convert PowerPoint presentations to PDF format"
  },
  "jpg-to-png": {
    fromFormat: "jpg",
    toFormat: "png",
    title: "JPG to PNG Converter",
    description: "Convert JPG images to PNG format with transparency support"
  },
  "mp4-to-mp3": {
    fromFormat: "mp4",
    toFormat: "mp3",
    title: "MP4 to MP3 Converter",
    description: "Extract high-quality audio from video files"
  }
};

const ConvertPage = () => {
  const { toolId } = useParams<{ toolId: string }>();
  
  if (!toolId || !toolConfigs[toolId]) {
    return <NotFound />;
  }

  const config = toolConfigs[toolId];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-8">
        <ConversionTool
          toolId={toolId}
          fromFormat={config.fromFormat}
          toFormat={config.toFormat}
          title={config.title}
          description={config.description}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ConvertPage;