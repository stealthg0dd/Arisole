import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MotionDiv, fadeIn, slideInFromLeft, slideInFromRight, scaleIn } from '@/components/ui/motion';
import { 
  Zap, 
  Brain, 
  Target, 
  Leaf, 
  MessageCircle,
  Activity,
  Mountain,
  Dumbbell,
  Trophy,
  Users,
  Gauge,
  Sparkles,
  Scan,
  TrendingDown,
  TreePine,
  Recycle,
  Bot,
  ChevronRight,
  Play,
  Pause
} from 'lucide-react';
import { useLocation } from 'wouter';

interface SportMode {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  terrain: string;
  adaptations: {
    flexibility: number;
    grip: number;
    cushioning: number;
    stability: number;
  };
  description: string;
}

const sportModes: SportMode[] = [
  {
    id: 'trail',
    name: 'Trail Running',
    icon: <Mountain className="h-6 w-6" />,
    color: 'from-green-400 to-emerald-600',
    terrain: 'Rocky, uneven surfaces',
    adaptations: { flexibility: 75, grip: 95, cushioning: 80, stability: 90 },
    description: 'Maximum grip and stability for challenging terrain'
  },
  {
    id: 'tennis',
    name: 'Tennis',
    icon: <Trophy className="h-6 w-6" />,
    color: 'from-orange-400 to-red-500',
    terrain: 'Court surfaces',
    adaptations: { flexibility: 85, grip: 85, cushioning: 70, stability: 95 },
    description: 'Quick lateral movements and court-specific traction'
  },
  {
    id: 'gym',
    name: 'Gym Training',
    icon: <Dumbbell className="h-6 w-6" />,
    color: 'from-blue-400 to-purple-600',
    terrain: 'Indoor floors',
    adaptations: { flexibility: 95, grip: 70, cushioning: 85, stability: 80 },
    description: 'Versatile performance for varied workout movements'
  },
  {
    id: 'street',
    name: 'Street Walking',
    icon: <Users className="h-6 w-6" />,
    color: 'from-gray-400 to-gray-600',
    terrain: 'Urban pavements',
    adaptations: { flexibility: 80, grip: 60, cushioning: 90, stability: 75 },
    description: 'Comfort-focused for daily urban adventures'
  }
];

const ecoMetrics = {
  carbonSaved: 2.3,
  wasteReduced: 78,
  materialsRecycled: 94,
  energySaved: 45
};

export default function ArisoleLab() {
  const [selectedMode, setSelectedMode] = useState<SportMode>(sportModes[0]);
  const [scanProgress, setScanProgress] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [predictiveMode, setPredictiveMode] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: 'Welcome to Arisole Lab! I\'m here to help you explore our revolutionary modular shoe technology. What would you like to know?' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [, setLocation] = useLocation();

  const startFootScan = () => {
    setIsScanning(true);
    setScanProgress(0);
  };

  useEffect(() => {
    if (isScanning && scanProgress < 100) {
      const timer = setTimeout(() => {
        setScanProgress(prev => {
          const newProgress = prev + Math.random() * 12 + 3;
          if (newProgress >= 100) {
            setIsScanning(false);
            return 100;
          }
          return newProgress;
        });
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isScanning, scanProgress]);

  const handleSendMessage = () => {
    if (!userInput.trim()) return;
    
    const newMessages = [
      ...chatMessages,
      { role: 'user', content: userInput },
      { 
        role: 'assistant', 
        content: getAIResponse(userInput) 
      }
    ];
    setChatMessages(newMessages);
    setUserInput('');
  };

  const getAIResponse = (input: string) => {
    const responses = {
      sustainability: "Arisole reduces waste by 78% compared to traditional shoes. Our modular design means you only replace worn components, not the entire shoe!",
      performance: "Our AdaptIQ™ technology adjusts sole configuration in real-time, optimizing for your specific activity and movement patterns.",
      technology: "We use smart materials that respond to pressure, temperature, and motion data to provide the perfect fit for any sport.",
      default: "That's a great question! Our modular system revolutionizes how we think about athletic footwear. Would you like to know more about our sustainability impact or performance features?"
    };

    const lowercaseInput = input.toLowerCase();
    if (lowercaseInput.includes('sustain') || lowercaseInput.includes('eco') || lowercaseInput.includes('environment')) {
      return responses.sustainability;
    } else if (lowercaseInput.includes('perform') || lowercaseInput.includes('sport') || lowercaseInput.includes('adapt')) {
      return responses.performance;
    } else if (lowercaseInput.includes('tech') || lowercaseInput.includes('how') || lowercaseInput.includes('work')) {
      return responses.technology;
    }
    return responses.default;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5"></div>
        <div className="container mx-auto px-6 py-16 relative">
          <MotionDiv {...fadeIn(0.1)} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-primary mr-2" />
              <span className="text-primary font-medium">Experience the Future</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-primary to-blue-600 bg-clip-text text-transparent mb-6">
              Arisole Lab
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Step into tomorrow's footwear today. Our interactive lab showcases the revolutionary technology 
              that makes Arisole the world's first truly adaptive modular sports shoe.
            </p>
          </MotionDiv>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-16">
        <Tabs defaultValue="customizer" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-white/50 backdrop-blur-sm border border-white/20">
            <TabsTrigger value="customizer" className="data-[state=active]:bg-white data-[state=active]:shadow-lg">
              <Target className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Customizer</span>
            </TabsTrigger>
            <TabsTrigger value="smartfit" className="data-[state=active]:bg-white data-[state=active]:shadow-lg">
              <Brain className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Smart Fit</span>
            </TabsTrigger>
            <TabsTrigger value="motion" className="data-[state=active]:bg-white data-[state=active]:shadow-lg">
              <Activity className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Motion AI</span>
            </TabsTrigger>
            <TabsTrigger value="eco" className="data-[state=active]:bg-white data-[state=active]:shadow-lg">
              <Leaf className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Eco Impact</span>
            </TabsTrigger>
            <TabsTrigger value="assistant" className="data-[state=active]:bg-white data-[state=active]:shadow-lg">
              <MessageCircle className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Assistant</span>
            </TabsTrigger>
          </TabsList>

          {/* Interactive Sole Customizer */}
          <TabsContent value="customizer" className="space-y-8">
            <MotionDiv {...slideInFromLeft(0.2)}>
              <Card className="bg-white/70 backdrop-blur-lg border-white/30 shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Target className="mr-3 h-6 w-6 text-primary" />
                    Interactive Sole Customizer
                  </CardTitle>
                  <CardDescription>
                    Select your sport and watch the sole adapt in real-time to optimize performance
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Sport Mode Selection */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {sportModes.map((mode, index) => (
                      <MotionDiv
                        key={mode.id}
                        {...scaleIn(index * 0.1)}
                        className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                          selectedMode.id === mode.id
                            ? `border-primary bg-gradient-to-br ${mode.color} text-white shadow-lg scale-105`
                            : 'border-gray-200 bg-white/50 hover:bg-white/80 hover:border-primary/50'
                        }`}
                        onClick={() => setSelectedMode(mode)}
                      >
                        <div className="text-center space-y-3">
                          <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center ${
                            selectedMode.id === mode.id ? 'bg-white/20' : 'bg-primary/10'
                          }`}>
                            {mode.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold">{mode.name}</h3>
                            <p className={`text-xs ${selectedMode.id === mode.id ? 'text-white/80' : 'text-gray-600'}`}>
                              {mode.terrain}
                            </p>
                          </div>
                        </div>
                      </MotionDiv>
                    ))}
                  </div>

                  {/* Adaptation Visualization */}
                  <MotionDiv {...fadeIn(0.3)} className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold">Sole Adaptations for {selectedMode.name}</h3>
                      <div className="space-y-4">
                        {Object.entries(selectedMode.adaptations).map(([key, value]) => (
                          <div key={key} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="capitalize font-medium">{key}</span>
                              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                                {value}%
                              </Badge>
                            </div>
                            <Progress value={value} className="h-3" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative">
                      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <img 
                            src="/arisole-shoe.png" 
                            alt="Arisole shoe adapting" 
                            className="w-48 h-auto mx-auto transform transition-transform duration-500 hover:scale-110" 
                          />
                          <div className="space-y-2">
                            <p className="font-medium text-gray-800">{selectedMode.description}</p>
                            <div className="flex items-center justify-center space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                              <span className="text-sm text-gray-600">Adapting...</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </MotionDiv>
                </CardContent>
              </Card>
            </MotionDiv>
          </TabsContent>

          {/* Smart Fit AI */}
          <TabsContent value="smartfit" className="space-y-8">
            <MotionDiv {...slideInFromRight(0.2)}>
              <Card className="bg-white/70 backdrop-blur-lg border-white/30 shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Brain className="mr-3 h-6 w-6 text-primary" />
                    Smart Fit AI
                  </CardTitle>
                  <CardDescription>
                    Advanced foot scanning and AI-powered fit recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full flex items-center justify-center mb-4">
                          <Scan className="h-16 w-16 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">3D Foot Analysis</h3>
                        <p className="text-gray-600 mb-6">
                          Our AI scans your foot geometry, pressure points, and gait pattern to create the perfect fit
                        </p>
                        <Button 
                          onClick={startFootScan}
                          disabled={isScanning}
                          className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90"
                        >
                          {isScanning ? (
                            <>
                              <Gauge className="mr-2 h-4 w-4 animate-spin" />
                              Scanning...
                            </>
                          ) : (
                            <>
                              <Scan className="mr-2 h-4 w-4" />
                              Start Foot Scan
                            </>
                          )}
                        </Button>
                      </div>

                      {scanProgress > 0 && (
                        <MotionDiv {...fadeIn(0.2)} className="space-y-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary mb-2">
                              {Math.round(scanProgress)}%
                            </div>
                            <Progress value={scanProgress} className="h-2" />
                          </div>
                          
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center justify-between">
                              <span>Measuring foot dimensions...</span>
                              <Badge variant={scanProgress > 25 ? "default" : "secondary"}>
                                {scanProgress > 25 ? "Complete" : "Processing"}
                              </Badge>
                            </div>
                            <div className="flex items-center justify-between">
                              <span>Analyzing pressure points...</span>
                              <Badge variant={scanProgress > 50 ? "default" : "secondary"}>
                                {scanProgress > 50 ? "Complete" : "Processing"}
                              </Badge>
                            </div>
                            <div className="flex items-center justify-between">
                              <span>Calculating gait pattern...</span>
                              <Badge variant={scanProgress > 75 ? "default" : "secondary"}>
                                {scanProgress > 75 ? "Complete" : "Processing"}
                              </Badge>
                            </div>
                            <div className="flex items-center justify-between">
                              <span>Generating recommendations...</span>
                              <Badge variant={scanProgress >= 100 ? "default" : "secondary"}>
                                {scanProgress >= 100 ? "Complete" : "Processing"}
                              </Badge>
                            </div>
                          </div>

                          {scanProgress >= 100 && (
                            <MotionDiv {...scaleIn(0.3)} className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                              <h4 className="font-semibold text-green-800 mb-2">Scan Complete!</h4>
                              <p className="text-sm text-green-700 mb-3">
                                Your ideal Arisole configuration has been calculated based on your unique foot profile.
                              </p>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <span className="font-medium">Recommended Size:</span>
                                  <div className="text-primary font-bold">US 9.5</div>
                                </div>
                                <div>
                                  <span className="font-medium">Arch Support:</span>
                                  <div className="text-primary font-bold">Medium+</div>
                                </div>
                                <div>
                                  <span className="font-medium">Preferred Activities:</span>
                                  <div className="text-primary font-bold">Trail, Gym</div>
                                </div>
                                <div>
                                  <span className="font-medium">Fit Confidence:</span>
                                  <div className="text-primary font-bold">98%</div>
                                </div>
                              </div>
                            </MotionDiv>
                          )}
                        </MotionDiv>
                      )}
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold">AI Recommendations</h3>
                      <div className="space-y-4">
                        {[
                          { title: "Optimal Sole Configuration", value: "Trail + Street Hybrid", icon: <Target className="h-4 w-4" /> },
                          { title: "Predicted Comfort Score", value: "9.7/10", icon: <Sparkles className="h-4 w-4" /> },
                          { title: "Performance Improvement", value: "+23%", icon: <TrendingDown className="h-4 w-4 rotate-180" /> },
                          { title: "Injury Risk Reduction", value: "-34%", icon: <Zap className="h-4 w-4" /> }
                        ].map((item, index) => (
                          <MotionDiv 
                            key={item.title}
                            {...fadeIn(0.1 * index)}
                            className="flex items-center justify-between p-4 bg-white/50 rounded-lg border border-gray-200"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="p-2 bg-primary/10 rounded-full text-primary">
                                {item.icon}
                              </div>
                              <span className="font-medium">{item.title}</span>
                            </div>
                            <Badge className="bg-primary text-white">{item.value}</Badge>
                          </MotionDiv>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          </TabsContent>

          {/* Motion Prediction Module */}
          <TabsContent value="motion" className="space-y-8">
            <MotionDiv {...fadeIn(0.2)}>
              <Card className="bg-white/70 backdrop-blur-lg border-white/30 shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Activity className="mr-3 h-6 w-6 text-primary" />
                    Motion Prediction Module
                  </CardTitle>
                  <CardDescription>
                    Real-time adaptation based on movement patterns and terrain sensing
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Predictive Mode</h3>
                    <Button
                      onClick={() => setPredictiveMode(!predictiveMode)}
                      variant={predictiveMode ? "default" : "outline"}
                      className={predictiveMode ? "bg-primary" : ""}
                    >
                      {predictiveMode ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
                      {predictiveMode ? "Active" : "Activate"}
                    </Button>
                  </div>

                  {predictiveMode && (
                    <MotionDiv {...slideInFromLeft(0.3)} className="grid md:grid-cols-3 gap-6">
                      <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                        <CardContent className="p-6 text-center">
                          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Gauge className="h-6 w-6 text-white animate-pulse" />
                          </div>
                          <h4 className="font-semibold mb-2">Terrain Analysis</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Detecting surface changes and adjusting traction
                          </p>
                          <div className="text-2xl font-bold text-blue-600">Rough Trail</div>
                        </CardContent>
                      </Card>

                      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                        <CardContent className="p-6 text-center">
                          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Activity className="h-6 w-6 text-white animate-bounce" />
                          </div>
                          <h4 className="font-semibold mb-2">Gait Tracking</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Monitoring stride and adapting cushioning
                          </p>
                          <div className="text-2xl font-bold text-green-600">165 SPM</div>
                        </CardContent>
                      </Card>

                      <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
                        <CardContent className="p-6 text-center">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Zap className="h-6 w-6 text-white animate-pulse" />
                          </div>
                          <h4 className="font-semibold mb-2">Impact Force</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Adjusting shock absorption in real-time
                          </p>
                          <div className="text-2xl font-bold text-orange-600">2.1x BW</div>
                        </CardContent>
                      </Card>
                    </MotionDiv>
                  )}

                  <div className="bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-2xl p-8">
                    <h3 className="text-xl font-semibold mb-4">How It Works</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        {
                          step: "1",
                          title: "Sensor Network",
                          description: "Advanced sensors monitor pressure, motion, and environment in real-time"
                        },
                        {
                          step: "2", 
                          title: "AI Processing",
                          description: "Machine learning algorithms predict optimal sole configuration for next steps"
                        },
                        {
                          step: "3",
                          title: "Instant Adaptation",
                          description: "Micro-motors adjust sole properties within milliseconds for perfect performance"
                        }
                      ].map((item, index) => (
                        <MotionDiv key={item.step} {...fadeIn(0.1 * index)} className="text-center">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                            {item.step}
                          </div>
                          <h4 className="font-semibold mb-2">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </MotionDiv>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          </TabsContent>

          {/* Eco Impact Dashboard */}
          <TabsContent value="eco" className="space-y-8">
            <MotionDiv {...slideInFromRight(0.2)}>
              <Card className="bg-white/70 backdrop-blur-lg border-white/30 shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Leaf className="mr-3 h-6 w-6 text-green-600" />
                    Eco Impact Dashboard
                  </CardTitle>
                  <CardDescription>
                    See how Arisole is revolutionizing sustainable footwear
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      {
                        icon: <TrendingDown className="h-8 w-8 text-green-500" />,
                        value: `${ecoMetrics.carbonSaved}kg`,
                        label: "CO₂ Saved per Pair",
                        color: "from-green-400 to-emerald-600"
                      },
                      {
                        icon: <Recycle className="h-8 w-8 text-blue-500" />,
                        value: `${ecoMetrics.wasteReduced}%`,
                        label: "Waste Reduction",
                        color: "from-blue-400 to-cyan-600"
                      },
                      {
                        icon: <TreePine className="h-8 w-8 text-emerald-500" />,
                        value: `${ecoMetrics.materialsRecycled}%`,
                        label: "Recycled Materials",
                        color: "from-emerald-400 to-green-600"
                      },
                      {
                        icon: <Zap className="h-8 w-8 text-yellow-500" />,
                        value: `${ecoMetrics.energySaved}%`,
                        label: "Energy Efficiency",
                        color: "from-yellow-400 to-orange-600"
                      }
                    ].map((metric, index) => (
                      <MotionDiv 
                        key={metric.label}
                        {...scaleIn(index * 0.1)}
                        className="text-center"
                      >
                        <Card className={`bg-gradient-to-br ${metric.color} text-white border-0 shadow-lg`}>
                          <CardContent className="p-6">
                            <div className="flex justify-center mb-4">
                              {metric.icon}
                            </div>
                            <div className="text-3xl font-bold mb-2">{metric.value}</div>
                            <div className="text-sm opacity-90">{metric.label}</div>
                          </CardContent>
                        </Card>
                      </MotionDiv>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
                    <h3 className="text-xl font-semibold mb-6 text-center">Your Environmental Impact</h3>
                    <div className="max-w-2xl mx-auto">
                      <div className="space-y-6">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-green-600 mb-2">1 Arisole Pair</div>
                          <div className="text-gray-600">Replaces 3-4 traditional sports shoes</div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white/70 rounded-lg p-6 text-center">
                            <h4 className="font-semibold mb-3 text-red-600">Traditional Shoes</h4>
                            <div className="space-y-2 text-sm">
                              <div>❌ 4 pairs needed</div>
                              <div>❌ 12kg CO₂ emissions</div>
                              <div>❌ Non-recyclable waste</div>
                              <div>❌ Frequent replacements</div>
                            </div>
                          </div>
                          
                          <div className="bg-white/70 rounded-lg p-6 text-center">
                            <h4 className="font-semibold mb-3 text-green-600">Arisole System</h4>
                            <div className="space-y-2 text-sm">
                              <div>✅ 1 modular pair</div>
                              <div>✅ 2.3kg CO₂ emissions</div>
                              <div>✅ 94% recyclable</div>
                              <div>✅ Component-based updates</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          </TabsContent>

          {/* FutureFit Assistant */}
          <TabsContent value="assistant" className="space-y-8">
            <MotionDiv {...fadeIn(0.2)}>
              <Card className="bg-white/70 backdrop-blur-lg border-white/30 shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Bot className="mr-3 h-6 w-6 text-primary" />
                    FutureFit Assistant
                  </CardTitle>
                  <CardDescription>
                    Your AI guide to understanding Arisole technology
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="h-96 overflow-y-auto bg-gray-50 rounded-lg p-4 space-y-4">
                      {chatMessages.map((message, index) => (
                        <MotionDiv 
                          key={index}
                          {...fadeIn(0.1)}
                          className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.role === 'user' 
                              ? 'bg-primary text-white' 
                              : 'bg-white border border-gray-200'
                          }`}>
                            <p className="text-sm">{message.content}</p>
                          </div>
                        </MotionDiv>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Ask about sustainability, performance, or technology..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      />
                      <Button onClick={handleSendMessage} className="px-6">
                        Send
                      </Button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {[
                        "How does AdaptIQ work?",
                        "Sustainability benefits?",
                        "Performance improvements?",
                        "Technology overview?"
                      ].map((suggestion) => (
                        <Button
                          key={suggestion}
                          variant="outline"
                          size="sm"
                          onClick={() => setUserInput(suggestion)}
                          className="text-xs"
                        >
                          {suggestion}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <MotionDiv {...fadeIn(0.4)} className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary to-blue-600 text-white border-0 shadow-2xl">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Step Into the Future?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join the Arisole movement and be among the first to experience revolutionary modular footwear technology.
              </p>
              <Button 
                size="lg"
                onClick={() => setLocation('/auth')}
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
              >
                Join the Arisole Movement – Sign Up for Beta Access
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </MotionDiv>
      </div>
    </div>
  );
}