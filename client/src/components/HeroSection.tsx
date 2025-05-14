import { Button } from "@/components/ui/button";
import { MotionDiv, fadeIn, slideInFromLeft, slideInFromRight } from '@/components/ui/motion';

export default function HeroSection() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-28 pb-16 md:py-32 gradient-bg relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <MotionDiv 
            className="md:w-1/2 mb-12 md:mb-0 z-10"
            {...slideInFromLeft()}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              One Shoe.<br />
              <span className="text-primary">All Sports.</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg">
              Introducing the world's first truly modular athletic shoe with interchangeable soles.
              Switch from trail to court to street in seconds.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#waitlist" 
                onClick={(e) => handleScrollTo(e, 'waitlist')}
              >
                <Button size="lg" className="px-8 py-4 rounded-full h-auto btn-hover transition-all text-lg w-full sm:w-auto">
                  Join Waitlist
                </Button>
              </a>
              <a 
                href="#demo" 
                onClick={(e) => handleScrollTo(e, 'demo')}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-4 rounded-full border-primary text-primary hover:bg-primary/5 h-auto transition-all text-lg w-full sm:w-auto"
                >
                  See How It Works
                </Button>
              </a>
            </div>
          </MotionDiv>
          
          <MotionDiv 
            className="md:w-1/2 relative z-10"
            {...slideInFromRight(0.2)}
          >
            <img 
              src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80" 
              alt="Arisole modular shoe" 
              className="w-full h-auto rounded-2xl shadow-2xl transform hover:rotate-1 transition-transform duration-500" 
            />
            <MotionDiv 
              className="absolute -bottom-6 -right-6 bg-secondary text-white rounded-full p-4 shadow-lg"
              {...fadeIn(0.5)}
            >
              <span className="font-bold">Revolutionary</span>
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
