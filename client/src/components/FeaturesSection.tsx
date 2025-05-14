import { Card, CardContent } from "@/components/ui/card";
import { MotionDiv, fadeIn, slideInFromLeft, slideInFromRight } from '@/components/ui/motion';
import { Feather, Lock, Wind, Terminal } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <Card className="p-6 bg-light rounded-xl hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
            {icon}
          </div>
          <h3 className="font-bold text-xl">{title}</h3>
        </div>
        <p className="text-gray-700">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function FeaturesSection() {
  const features = [
    {
      icon: <Terminal className="text-primary" />,
      title: "Breathable Upper",
      description: "Lightweight engineered mesh provides ventilation while maintaining structure and support."
    },
    {
      icon: <Lock className="text-primary" />,
      title: "Secure Lock System",
      description: "Patented click-lock mechanism ensures soles stay firmly attached during intense activity."
    },
    {
      icon: <Feather className="text-primary" />,
      title: "Lightweight Design",
      description: "Advanced materials keep weight to a minimum without sacrificing durability or performance."
    },
    {
      icon: <Wind className="text-primary" />,
      title: "Responsive Cushioning",
      description: "Energy-returning midsole adapts to each sport's specific impact and movement patterns."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <MotionDiv className="text-center max-w-3xl mx-auto mb-16" {...fadeIn()}>
          <h2 className="text-4xl font-bold mb-6">Built For Performance</h2>
          <p className="text-lg text-gray-700">
            Every aspect of Arisole is engineered to provide maximum performance, comfort, and durability.
          </p>
        </MotionDiv>
        
        <div className="flex flex-col md:flex-row items-center">
          <MotionDiv className="md:w-1/2 md:pr-12 mb-10 md:mb-0" {...slideInFromLeft()}>
            <div className="aspect-square rounded-3xl overflow-hidden relative">
              <img 
                src="https://pixabay.com/get/gdb5d71857db9903cbed8236282ed17daa9f8f12e25850b89b1fe94b99398f7208add8b1ba85719db2760394eb28a3d80b2276081c0716968bebeae66376a1d47_1280.jpg" 
                alt="Arisole in action" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8">
                  <span className="text-white font-bold text-xl">Engineered for Every Activity</span>
                </div>
              </div>
            </div>
          </MotionDiv>
          
          <MotionDiv className="md:w-1/2" {...slideInFromRight(0.2)}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <MotionDiv 
                  key={index} 
                  {...fadeIn(0.2 + index * 0.1)}
                >
                  <Feature
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
