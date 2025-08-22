import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ToolsGrid from "@/components/ToolsGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ToolsGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
