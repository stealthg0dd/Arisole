import { MotionDiv, fadeIn } from '@/components/ui/motion';
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import LogoImage from './LogoImage';

export default function Footer() {
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#232323] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <MotionDiv className="md:col-span-2" {...fadeIn(0.1)}>
            <a href="#" className="inline-block mb-6">
              <LogoImage className="h-20 w-auto mb-4" darkMode={true} />
            </a>
            <p className="text-white/70 mb-6 max-w-md">
              Revolutionizing athletic footwear with the world's first truly modular shoe system.
              One shoe base, multiple detachable soles, endless possibilities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube />
              </a>
            </div>
          </MotionDiv>
          
          <MotionDiv {...fadeIn(0.2)}>
            <h3 className="font-bold text-xl mb-6">Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#product" 
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={(e) => handleNavLinkClick(e, '#product')}
                >
                  Product
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={(e) => handleNavLinkClick(e, '#features')}
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#technology" 
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={(e) => handleNavLinkClick(e, '#technology')}
                >
                  Technology
                </a>
              </li>
              <li>
                <a 
                  href="#sustainability" 
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={(e) => handleNavLinkClick(e, '#sustainability')}
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a 
                  href="#waitlist" 
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={(e) => handleNavLinkClick(e, '#waitlist')}
                >
                  Join Waitlist
                </a>
              </li>
            </ul>
          </MotionDiv>
          
          <MotionDiv {...fadeIn(0.3)}>
            <h3 className="font-bold text-xl mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="text-white/70">hello@arisole.com</li>
              <li className="text-white/70">+1 (555) 123-4567</li>
              <li className="text-white/70">
                123 Innovation Way<br />
                San Francisco, CA 94103
              </li>
            </ul>
          </MotionDiv>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Arisole. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
