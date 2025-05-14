import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MotionDiv, fadeIn } from '@/components/ui/motion';
import { Dumbbell, Mountain, Tablet, Landmark } from 'lucide-react';

interface SoleOption {
  id: string;
  icon: React.ReactNode;
  name: string;
  image: string;
  description: string;
}

export default function SoleSwitcherDemo() {
  const soleOptions: SoleOption[] = [
    {
      id: 'trail',
      icon: <Mountain className="text-primary mr-2" />,
      name: 'Trail Running',
      image: 'https://images.unsplash.com/photo-1584545284372-f22510eb7c26?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80',
      description: 'Deep lugs and aggressive tread pattern designed for maximum traction on uneven and slippery surfaces.'
    },
    {
      id: 'tennis',
      icon: <Tablet className="text-primary mr-2" />,
      name: 'Tennis',
      image: 'https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80',
      description: 'Flat, durable rubber with optimized court grip pattern for quick lateral movements and stability.'
    },
    {
      id: 'street',
      icon: <Landmark className="text-primary mr-2" />,
      name: 'Street',
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80',
      description: 'Lightweight, comfortable design with subtle tread pattern perfect for everyday urban wear.'
    },
    {
      id: 'gym',
      icon: <Dumbbell className="text-primary mr-2" />,
      name: 'Gym',
      image: 'https://pixabay.com/get/g082089d6099b88313f65fd95cef6cbd9c4156d9b0a59b37ff7320ef98e8255d16a45c6baa8a95fa93fbc050977595a813f6958b3c214313a78e130548b95a87a_1280.jpg',
      description: 'Flexible, cushioned design with zoned traction for varied workout movements and floor surfaces.'
    }
  ];

  const shoeImages = {
    trail: '/arisole-shoe.png',
    tennis: '/arisole-shoe.png',
    street: '/arisole-shoe.png',
    gym: '/arisole-shoe.png'
  };

  const [activeSole, setActiveSole] = useState<string>('trail');

  const handleSoleChange = (soleId: string) => {
    setActiveSole(soleId);
  };

  const getActiveSoleData = () => {
    return soleOptions.find(sole => sole.id === activeSole);
  };

  const activeSoleData = getActiveSoleData();

  return (
    <section id="demo" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <MotionDiv className="text-center max-w-3xl mx-auto mb-16" {...fadeIn()}>
          <h2 className="text-4xl font-bold mb-6">Switch Soles in Seconds</h2>
          <p className="text-lg text-gray-700">
            Our patented click-lock system makes changing soles as easy as changing your mind.
            Select a sport below to see how Arisole adapts.
          </p>
        </MotionDiv>
        
        <Card className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-6xl mx-auto">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 md:pr-8">
                <MotionDiv
                  key={activeSole}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={shoeImages[activeSole as keyof typeof shoeImages]} 
                    alt={`Arisole shoe with ${activeSoleData?.name} sole`}
                    className="w-full h-auto rounded-2xl shadow-lg mb-6" 
                  />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">{activeSoleData?.name} Sole</h3>
                    <p className="text-gray-700">{activeSoleData?.description}</p>
                  </div>
                </MotionDiv>
              </div>
              
              <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-xl font-bold mb-4">Select Your Sport</h3>
                <div className="grid grid-cols-2 gap-4">
                  {soleOptions.map((option) => (
                    <div 
                      key={option.id}
                      className={`sole-option cursor-pointer bg-white border-2 ${activeSole === option.id ? 'border-primary active' : 'border-gray-200'} rounded-xl p-4`}
                      onClick={() => handleSoleChange(option.id)}
                    >
                      <div className="flex items-center mb-3">
                        {option.icon}
                        <h4 className="font-bold">{option.name}</h4>
                      </div>
                      <img 
                        src={option.image} 
                        alt={`${option.name} sole`} 
                        className="w-full h-32 object-cover rounded-lg" 
                      />
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-light rounded-xl">
                  <h3 className="font-bold mb-2">How It Works:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Twist the heel lock to release the current sole</li>
                    <li>Remove the old sole by sliding backward</li>
                    <li>Align the new sole with the guide pins</li>
                    <li>Push forward and twist the heel lock to secure</li>
                  </ol>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
