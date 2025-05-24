import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut, Brain } from "lucide-react";
import { MotionDiv } from '@/components/ui/motion';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation } from 'wouter';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import LogoImage from './LogoImage';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentUser, logout } = useAuth();
  const [, setLocation] = useLocation();

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
          <Button 
            onClick={() => setLocation('/lab')}
            variant="ghost"
            className="font-medium hover:text-primary transition-colors px-0 h-auto bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent hover:from-primary/80 hover:to-blue-500/80"
          >
            <Brain className="mr-2 h-4 w-4" />
            Arisole Lab
          </Button>
          <a 
            href="#sustainability" 
            className="font-medium hover:text-primary transition-colors"
            onClick={(e) => handleNavLinkClick(e, '#sustainability')}
          >
            Sustainability
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          {currentUser ? (
            <>
              {/* Authenticated User Menu */}
              <Button 
                onClick={() => setLocation('/adaptiq-demo')}
                className="hidden md:inline-flex rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                <Brain className="mr-2 h-4 w-4" />
                AdaptIQ™ Demo
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={currentUser.photoURL || ''} alt={currentUser.displayName || ''} />
                      <AvatarFallback className="bg-primary text-white">
                        {currentUser.displayName ? currentUser.displayName[0].toUpperCase() : currentUser.email?.[0]?.toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      {currentUser.displayName && (
                        <p className="font-medium">{currentUser.displayName}</p>
                      )}
                      {currentUser.email && (
                        <p className="w-[200px] truncate text-sm text-muted-foreground">
                          {currentUser.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setLocation('/dashboard')}>
                    <User className="mr-2 h-4 w-4" />
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLocation('/adaptiq-demo')}>
                    <Brain className="mr-2 h-4 w-4" />
                    AdaptIQ™ Demo
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              {/* Guest User Buttons */}
              <a 
                href="#waitlist" 
                className="hidden md:inline-block"
                onClick={(e) => handleNavLinkClick(e, '#waitlist')}
              >
                <Button variant="outline" className="rounded-full">
                  Join Waitlist
                </Button>
              </a>
              <Button 
                onClick={() => setLocation('/auth')}
                className="hidden md:inline-flex rounded-full btn-hover transition-all"
              >
                Sign In
              </Button>
            </>
          )}
          
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
            <Button 
              onClick={() => { setLocation('/lab'); setMobileMenuOpen(false); }}
              variant="outline"
              className="w-full rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/30"
            >
              <Brain className="mr-2 h-4 w-4" />
              Arisole Lab
            </Button>
            <a 
              href="#sustainability" 
              className="font-medium hover:text-primary transition-colors"
              onClick={(e) => handleNavLinkClick(e, '#sustainability')}
            >
              Sustainability
            </a>
            
            {currentUser ? (
              <>
                <Button 
                  onClick={() => { setLocation('/dashboard'); setMobileMenuOpen(false); }}
                  variant="outline" 
                  className="w-full rounded-full"
                >
                  <User className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
                <Button 
                  onClick={() => { setLocation('/adaptiq-demo'); setMobileMenuOpen(false); }}
                  className="w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                >
                  <Brain className="mr-2 h-4 w-4" />
                  AdaptIQ™ Demo
                </Button>
                <Button 
                  onClick={() => { logout(); setMobileMenuOpen(false); }}
                  variant="destructive" 
                  className="w-full rounded-full"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <a 
                  href="#waitlist" 
                  onClick={(e) => handleNavLinkClick(e, '#waitlist')}
                >
                  <Button variant="outline" className="w-full rounded-full">Join Waitlist</Button>
                </a>
                <Button 
                  onClick={() => { setLocation('/auth'); setMobileMenuOpen(false); }}
                  className="w-full rounded-full"
                >
                  Sign In
                </Button>
              </>
            )}
          </div>
        </MotionDiv>
      )}
    </nav>
  );
}
