import { Card, CardContent } from "@/components/ui/card";
import { MotionDiv, fadeIn, staggerContainer } from '@/components/ui/motion';
import { Bolt, Leaf, Medal } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <MotionDiv {...fadeIn(delay)}>
      <Card className="bg-light hover:shadow-md transition-shadow">
        <CardContent className="p-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            {icon}
          </div>
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </CardContent>
      </Card>
    </MotionDiv>
  );
}

export default function IntroSection() {
  const features = [
    {
      icon: <Bolt className="text-primary text-2xl" />,
      title: "Versatility",
      description: "Switch between sports without switching shoes. From trail running to tennis, all in one footwear system."
    },
    {
      icon: <Leaf className="text-primary text-2xl" />,
      title: "Sustainability",
      description: "Replace only what wears out. Reduce waste and environmental impact while saving money over time."
    },
    {
      icon: <Medal className="text-primary text-2xl" />,
      title: "Performance",
      description: "Each sole is engineered for specific sports with no compromise on performance, grip, or comfort."
    }
  ];

  return (
    <section id="product" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <MotionDiv className="text-center max-w-3xl mx-auto mb-16" {...fadeIn()}>
          <h2 className="text-4xl font-bold mb-6">Redefining Athletic Footwear</h2>
          <p className="text-lg text-gray-700">
            Arisole combines innovative design with practical functionality to create a shoe that adapts to your lifestyle.
            One shoe base, multiple detachable soles, endless possibilities.
          </p>
        </MotionDiv>
        
        <MotionDiv 
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.2}
            />
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}
