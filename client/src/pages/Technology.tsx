import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MotionDiv, fadeIn, slideInFromLeft, slideInFromRight, scaleIn } from '@/components/ui/motion';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Settings, 
  Activity,
  Target,
  Layers,
  Gauge,
  Smartphone,
  Wifi,
  RotateCcw,
  ArrowRight
} from 'lucide-react';
import { useLocation } from 'wouter';

export default function Technology() {
  const [, setLocation] = useLocation();
  const [activeDemo, setActiveDemo] = useState('neural');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5"></div>
        <div className="container mx-auto px-6 py-20 relative">
          <MotionDiv {...fadeIn(0.1)} className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full mb-8">
              <Brain className="h-5 w-5 text-primary mr-3" />
              <span className="text-primary font-medium">Advanced Technology</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-primary to-blue-600 bg-clip-text text-transparent mb-8">
              The Science Behind Arisole
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover how our revolutionary neural insole, modular base system, and AI-powered comfort calibration 
              work together to create the most adaptive footwear ever engineered.
            </p>
          </MotionDiv>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-16">
        {/* Core Technologies */}
        <MotionDiv {...fadeIn(0.2)} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Revolutionary Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Four groundbreaking innovations working in perfect harmony
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8" />,
                title: "Neural Insole",
                description: "AI-powered sensors that learn your gait patterns and adapt in real-time",
                color: "from-blue-400 to-blue-600"
              },
              {
                icon: <Layers className="h-8 w-8" />,
                title: "Modular Base System",
                description: "Interchangeable sole modules for different activities and terrains",
                color: "from-primary to-orange-600"
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Smart Insole Sensors",
                description: "Pressure-sensitive technology monitoring every step for optimal comfort",
                color: "from-green-400 to-emerald-600"
              },
              {
                icon: <Settings className="h-8 w-8" />,
                title: "Comfort Calibration",
                description: "Automated adjustments based on activity, terrain, and personal preferences",
                color: "from-purple-400 to-purple-600"
              }
            ].map((tech, index) => (
              <MotionDiv key={tech.title} {...scaleIn(index * 0.1)} className="text-center">
                <Card className="h-full bg-white/50 backdrop-blur-sm border-gray-200 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${tech.color} flex items-center justify-center text-white mx-auto mb-6`}>
                      {tech.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{tech.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Interactive Technology Demo */}
        <MotionDiv {...slideInFromLeft(0.3)} className="mb-20">
          <Card className="bg-white/80 backdrop-blur-lg border-gray-200 shadow-xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl text-gray-900 mb-4">
                Interactive Technology Explorer
              </CardTitle>
              <CardDescription className="text-lg">
                Dive deep into how each component works together to create the perfect step
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <Tabs value={activeDemo} onValueChange={setActiveDemo} className="space-y-8">
                <TabsList className="grid w-full grid-cols-4 bg-gray-100">
                  <TabsTrigger value="neural" className="data-[state=active]:bg-white">
                    <Brain className="h-4 w-4 mr-2" />
                    Neural AI
                  </TabsTrigger>
                  <TabsTrigger value="modular" className="data-[state=active]:bg-white">
                    <Layers className="h-4 w-4 mr-2" />
                    Modular System
                  </TabsTrigger>
                  <TabsTrigger value="sensors" className="data-[state=active]:bg-white">
                    <Activity className="h-4 w-4 mr-2" />
                    Smart Sensors
                  </TabsTrigger>
                  <TabsTrigger value="calibration" className="data-[state=active]:bg-white">
                    <Gauge className="h-4 w-4 mr-2" />
                    Auto-Calibration
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="neural" className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-gray-900">Neural Insole Technology</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Our advanced neural network processes thousands of data points per second, learning your unique 
                        movement patterns and adapting the shoe's response to optimize comfort and performance.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                          <span className="font-medium">Learning Algorithm</span>
                          <Badge className="bg-blue-500">Active</Badge>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                          <span className="font-medium">Gait Analysis</span>
                          <Badge className="bg-blue-500">Real-time</Badge>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                          <span className="font-medium">Adaptation Speed</span>
                          <Badge className="bg-blue-500">Under 100ms</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <Brain className="h-16 w-16 text-white animate-pulse" />
                      </div>
                      <h4 className="text-lg font-semibold text-blue-800 mb-2">Neural Processing Unit</h4>
                      <p className="text-blue-600 text-sm">Processing 10,000+ data points per second</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="modular" className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-gray-900">Modular Base System</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Revolutionary quick-connect system allows instant sole swapping. Magnetic locks and precision 
                        engineering ensure perfect alignment and secure attachment every time.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                          <span className="font-medium">Connection Type</span>
                          <Badge className="bg-primary">Magnetic Lock</Badge>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                          <span className="font-medium">Swap Time</span>
                          <Badge className="bg-primary">3 seconds</Badge>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                          <span className="font-medium">Sole Options</span>
                          <Badge className="bg-primary">12+ variants</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-primary to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <Layers className="h-16 w-16 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-orange-800 mb-2">Modular Architecture</h4>
                      <p className="text-orange-600 text-sm">Engineered for infinite adaptability</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="sensors" className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-gray-900">Smart Insole Sensors</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Micro-sensors distributed throughout the insole capture pressure patterns, temperature, and 
                        movement data. This information feeds our AI to provide personalized comfort optimization.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                          <span className="font-medium">Pressure Points</span>
                          <Badge className="bg-green-500">64 sensors</Badge>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                          <span className="font-medium">Temperature Monitoring</span>
                          <Badge className="bg-green-500">±0.1°C accuracy</Badge>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                          <span className="font-medium">Motion Detection</span>
                          <Badge className="bg-green-500">6-axis IMU</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <Activity className="h-16 w-16 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-green-800 mb-2">Sensor Network</h4>
                      <p className="text-green-600 text-sm">Monitoring every step in real-time</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="calibration" className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-gray-900">Comfort Calibration System</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Automated micro-adjustments to cushioning, support, and flexibility based on your activity, 
                        terrain, and personal comfort preferences. The system learns and improves with every step.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                          <span className="font-medium">Adjustment Range</span>
                          <Badge className="bg-purple-500">30-100% firmness</Badge>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                          <span className="font-medium">Response Time</span>
                          <Badge className="bg-purple-500">50ms</Badge>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                          <span className="font-medium">Learning Curve</span>
                          <Badge className="bg-purple-500">7-day optimization</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <Gauge className="h-16 w-16 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-purple-800 mb-2">Auto-Calibration</h4>
                      <p className="text-purple-600 text-sm">Continuous comfort optimization</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </MotionDiv>

        {/* 3D Shoe Model Placeholder */}
        <MotionDiv {...slideInFromRight(0.4)} className="mb-20">
          <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200">
            <CardContent className="p-12 text-center">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Interactive 3D Shoe Model
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Experience our technology in action with our interactive 3D visualization
                </p>
                
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl flex items-center justify-center mb-8">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                      <RotateCcw className="h-12 w-12 text-primary animate-spin" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800">3D Model Loading...</h4>
                    <p className="text-gray-600">Interactive shoe visualization coming soon</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Rotate View", icon: <RotateCcw className="h-4 w-4" /> },
                    { label: "Sole Layers", icon: <Layers className="h-4 w-4" /> },
                    { label: "Sensor Map", icon: <Activity className="h-4 w-4" /> },
                    { label: "Tech Details", icon: <Cpu className="h-4 w-4" /> }
                  ].map((feature) => (
                    <Button key={feature.label} variant="outline" className="flex items-center space-x-2">
                      {feature.icon}
                      <span>{feature.label}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </MotionDiv>

        {/* App Integration */}
        <MotionDiv {...fadeIn(0.5)} className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Seamless App Integration
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                The Arisole companion app puts complete control at your fingertips. Monitor performance, 
                customize settings, and receive real-time insights about your footwear experience.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: <Smartphone className="h-5 w-5" />, text: "Real-time performance monitoring" },
                  { icon: <Wifi className="h-5 w-5" />, text: "Wireless firmware updates" },
                  { icon: <Target className="h-5 w-5" />, text: "Personalized comfort profiles" },
                  { icon: <Zap className="h-5 w-5" />, text: "Activity-based auto-switching" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      {feature.icon}
                    </div>
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Download App (Coming Soon)
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-2xl p-8">
              <div className="aspect-square bg-white rounded-xl shadow-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Smartphone className="h-24 w-24 text-primary mx-auto" />
                  <h4 className="text-xl font-semibold text-gray-800">Arisole App</h4>
                  <p className="text-gray-600">Your footwear control center</p>
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>

        {/* CTA Section */}
        <MotionDiv {...scaleIn(0.6)} className="text-center">
          <Card className="bg-gradient-to-r from-primary to-blue-600 text-white border-0 shadow-2xl">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of innovators who are already experiencing the next generation of footwear technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => setLocation('/lab')}
                  className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4"
                >
                  Try Interactive Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  onClick={() => setLocation('/auth')}
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-semibold px-8 py-4"
                >
                  Join Beta Program
                </Button>
              </div>
            </CardContent>
          </Card>
        </MotionDiv>
      </div>
    </div>
  );
}