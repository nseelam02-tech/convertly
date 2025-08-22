import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <FileText className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Convertly</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/tools" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Tools
            </Link>
            <Link 
              to="/pricing" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Pricing
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="btn-hero">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-surface">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/tools"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tools
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" asChild>
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                    Login
                  </Link>
                </Button>
                <Button asChild className="btn-hero">
                  <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                    Sign Up
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;