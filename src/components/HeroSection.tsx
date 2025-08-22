import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-gradient py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Convert Anything,
            <br />
            <span className="text-primary">Anywhere</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your files instantly with our powerful online converter. 
            PDFs, images, audio, and video - all in one place, all secure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button asChild className="btn-hero">
              <Link to="/tools">
                Start Converting
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" asChild className="btn-secondary">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary-light rounded-full p-4 mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">Convert files in seconds with our optimized processing</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary-light rounded-full p-4 mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">100% Secure</h3>
              <p className="text-muted-foreground">Your files are encrypted and deleted after 15 minutes</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary-light rounded-full p-4 mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">24/7 Available</h3>
              <p className="text-muted-foreground">Access our tools anytime, anywhere, on any device</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;