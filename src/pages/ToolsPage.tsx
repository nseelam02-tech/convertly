import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolsGrid from "@/components/ToolsGrid";

const ToolsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              File Conversion Tools
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional-grade file conversion tools for all your needs. 
              Convert PDFs, images, audio, and video files with ease.
            </p>
          </div>
          <ToolsGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ToolsPage;