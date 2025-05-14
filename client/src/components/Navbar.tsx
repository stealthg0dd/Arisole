import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { MotionDiv } from '@/components/ui/motion';
import LogoImage from './LogoImage';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`sticky-nav fixed w-full z-50 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <LogoImage className="h-12 md:h-16 w-auto" />
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#product" 
            className="font-medium hover:text-primary transition-colors"
            onClick={(e) => handleNavLinkClick(e, '#product')}
          >
            Product
          </a>
          <a 
            href="#features" 
            className="font-medium hover:text-primary transition-colors"
            onClick={(e) => handleNavLinkClick(e, '#features')}
          >
            Features
          </a>
          <a 
            href="#technology" 
            className="font-medium hover:text-primary transition-colors"
            onClick={(e) => handleNavLinkClick(e, '#technology')}
          >
            Technology
          </a>
          <a 
            href="#sustainability" 
            className="font-medium hover:text-primary transition-colors"
            onClick={(e) => handleNavLinkClick(e, '#sustainability')}
          >
            Sustainability
          </a>
        </div>
        
        <div>
          <a 
            href="#waitlist" 
            className="hidden md:inline-block"
            onClick={(e) => handleNavLinkClick(e, '#waitlist')}
          >
            <Button className="rounded-full btn-hover transition-all">
              Join Waitlist
            </Button>
          </a>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <MotionDiv
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white shadow-lg absolute w-full"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a 
              href="#product" 
              className="font-medium hover:text-primary transition-colors"
              onClick={(e) => handleNavLinkClick(e, '#product')}
            >
              Product
            </a>
            <a 
              href="#features" 
              className="font-medium hover:text-primary transition-colors"
              onClick={(e) => handleNavLinkClick(e, '#features')}
            >
              Features
            </a>
            <a 
              href="#technology" 
              className="font-medium hover:text-primary transition-colors"
              onClick={(e) => handleNavLinkClick(e, '#technology')}
            >
              Technology
            </a>
            <a 
              href="#sustainability" 
              className="font-medium hover:text-primary transition-colors"
              onClick={(e) => handleNavLinkClick(e, '#sustainability')}
            >
              Sustainability
            </a>
            <a 
              href="#waitlist" 
              onClick={(e) => handleNavLinkClick(e, '#waitlist')}
            >
              <Button className="w-full rounded-full">Join Waitlist</Button>
            </a>
          </div>
        </MotionDiv>
      )}
    </nav>
  );
}
