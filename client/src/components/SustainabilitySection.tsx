import { MotionDiv, fadeIn, slideInFromLeft, slideInFromRight } from '@/components/ui/motion';
import { Recycle, Leaf, Package } from "lucide-react";

interface SustainabilityFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

function SustainabilityFeature({ icon, title, description, delay = 0 }: SustainabilityFeatureProps) {
  return (
    <MotionDiv 
      className="flex items-start"
      {...fadeIn(delay)}
    >
      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </MotionDiv>
  );
}

export default function SustainabilitySection() {
  const sustainabilityFeatures = [
    {
      icon: <Recycle className="text-green-600" />,
      title: "Reduced Waste",
      description: "Replace only what wears out instead of entire shoes. Our modular design reduces landfill waste by up to 80%."
    },
    {
      icon: <Leaf className="text-green-600" />,
      title: "Eco-Friendly Materials",
      description: "Recycled and responsibly sourced materials are used throughout, including reclaimed ocean plastic in our laces."
    },
    {
      icon: <Package className="text-green-600" />,
      title: "Sustainable Packaging",
      description: "All packaging is plastic-free and made from 100% post-consumer recycled materials. No extra boxes needed."
    }
  ];

  return (
    <section id="sustainability" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <MotionDiv 
            className="md:w-1/2 mb-12 md:mb-0 md:pr-12"
            {...slideInFromLeft()}
          >
            <h2 className="text-4xl font-bold mb-6">Sustainability By Design</h2>
            <p className="text-lg text-gray-700 mb-8">
              The average athlete buys multiple pairs of sport-specific shoes, creating unnecessary waste.
              Arisole reduces your environmental footprint while saving you money.
            </p>
            
            <div className="space-y-6">
              {sustainabilityFeatures.map((feature, index) => (
                <SustainabilityFeature
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={0.2 * index}
                />
              ))}
            </div>
          </MotionDiv>
          
          <MotionDiv 
            className="md:w-1/2"
            {...slideInFromRight(0.2)}
          >
            <img 
              src="https://pixabay.com/get/g1389e41962d626ef5a072f4e0dd03f7fbf301c9c975a16dfa88a3ff66cd2843ff89448005648cd5fc5e10739fb23650ff1278ec5c189ce26046ab28837458d9d_1280.jpg" 
              alt="Sustainable shoe design" 
              className="w-full h-auto rounded-3xl shadow-2xl" 
            />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
