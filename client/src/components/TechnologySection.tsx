import { Card, CardContent } from "@/components/ui/card";
import { MotionDiv, fadeIn, slideInFromLeft, slideInFromRight } from '@/components/ui/motion';
import { Play, Check } from "lucide-react";

export default function TechnologySection() {
  const techPoints = [
    "Advanced composite materials provide durability with minimal weight",
    "Biomechanical research ensures natural movement patterns for each activity",
    "Weather-resistant treatments keep performance consistent in all conditions",
    "Anti-microbial linings prevent odor buildup during multi-sport use"
  ];

  return (
    <section id="technology" className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <MotionDiv className="text-center max-w-3xl mx-auto mb-16" {...fadeIn()}>
          <h2 className="text-4xl font-bold mb-6">Revolutionary Technology</h2>
          <p className="text-lg text-white/80">
            The Arisole system is built on years of research and development, combining cutting-edge materials science with innovative design.
          </p>
        </MotionDiv>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <MotionDiv 
            className="col-span-1 lg:col-span-2"
            {...slideInFromLeft()}
          >
            <Card className="bg-white/10 backdrop-blur-md rounded-3xl h-full border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">See Arisole in Action</h3>
                <div className="aspect-video bg-black/20 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-center p-8">
                    <Play className="h-12 w-12 mx-auto mb-4" />
                    <p className="font-medium">Product demonstration video</p>
                    <p className="text-sm text-white/60 mt-2">See how quickly you can switch soles for different activities</p>
                  </div>
                </div>
                <p className="text-white/80">
                  Our patent-pending modular system allows for quick transitions between activities without sacrificing performance.
                  Each component is designed with specific sports and terrains in mind, ensuring optimal performance across all activities.
                </p>
              </CardContent>
            </Card>
          </MotionDiv>
          
          <MotionDiv {...slideInFromRight(0.2)}>
            <Card className="bg-white/10 backdrop-blur-md rounded-3xl h-full border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">The Science Behind Arisole</h3>
                <ul className="space-y-4">
                  {techPoints.map((point, index) => (
                    <MotionDiv 
                      key={index}
                      {...fadeIn(0.3 + index * 0.1)}
                    >
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                          <Check className="h-4 w-4" />
                        </div>
                        <p>{point}</p>
                      </li>
                    </MotionDiv>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
