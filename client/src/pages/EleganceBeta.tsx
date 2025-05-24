import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MotionDiv, fadeIn, slideInFromLeft, slideInFromRight, scaleIn } from '@/components/ui/motion';
import { 
  Sparkles, 
  Heart, 
  Zap, 
  Target, 
  RotateCcw,
  Activity,
  Star,
  ChevronLeft,
  ChevronRight,
  Crown,
  Palette,
  BarChart3,
  ArrowRight,
  Globe
} from 'lucide-react';
import { useLocation } from 'wouter';

interface HeelDesign {
  id: string;
  name: string;
  style: string;
  height: string;
  occasion: string;
  comfort: number;
  elegance: number;
  stability: number;
  image: string;
  description: string;
}

const heelDesigns: HeelDesign[] = [
  {
    id: 'aurora',
    name: 'Aurora Elite',
    style: 'Pointed Stiletto',
    height: '4.5"',
    occasion: 'Evening Events',
    comfort: 92,
    elegance: 98,
    stability: 85,
    image: '/elegance-heels.jpg',
    description: 'AI-enhanced iridescent finish with adaptive pressure zones'
  },
  {
    id: 'celestial',
    name: 'Celestial Grace',
    style: 'Block Heel',
    height: '3"',
    occasion: 'Professional',
    comfort: 95,
    elegance: 88,
    stability: 96,
    image: '/elegance-heels.jpg',
    description: 'Smart cushioning with posture-correcting arch support'
  },
  {
    id: 'quantum',
    name: 'Quantum Luxe',
    style: 'Platform Stiletto',
    height: '5"',
    occasion: 'Red Carpet',
    comfort: 89,
    elegance: 99,
    stability: 82,
    image: '/elegance-heels.jpg',
    description: 'Holographic accents with neural balance enhancement'
  },
  {
    id: 'ethereal',
    name: 'Ethereal Comfort',
    style: 'Kitten Heel',
    height: '2"',
    occasion: 'Daily Elegance',
    comfort: 98,
    elegance: 85,
    stability: 98,
    image: '/elegance-heels.jpg',
    description: 'Biomimetic sole with all-day comfort technology'
  }
];

interface UserProfile {
  height: number[];
  archType: string;
  heelPreference: string;
  wearDuration: number[];
  posture: string;
  occasion: string;
}

export default function EleganceBeta() {
  const [, setLocation] = useLocation();
  const [activeDesign, setActiveDesign] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    height: [165],
    archType: '',
    heelPreference: '',
    wearDuration: [4],
    posture: '',
    occasion: ''
  });

  const [recommendations, setRecommendations] = useState({
    idealHeight: 3.5,
    archSupport: 'Medium-High',
    cushioning: 85,
    balanceScore: 92
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationAngle(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Simulate AI analysis when profile changes
    if (userProfile.height[0] && userProfile.archType && userProfile.heelPreference) {
      const timer = setTimeout(() => {
        setRecommendations({
          idealHeight: userProfile.wearDuration[0] > 6 ? 2.5 : 4.0,
          archSupport: userProfile.archType === 'high' ? 'High' : userProfile.archType === 'low' ? 'Extra-High' : 'Medium',
          cushioning: Math.max(70, 95 - userProfile.wearDuration[0] * 3),
          balanceScore: Math.max(80, 100 - userProfile.height[0] * 0.1 - userProfile.wearDuration[0] * 2)
        });
        setAnalysisComplete(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [userProfile]);

  const nextDesign = () => {
    setActiveDesign((prev) => (prev + 1) % heelDesigns.length);
  };

  const prevDesign = () => {
    setActiveDesign((prev) => (prev - 1 + heelDesigns.length) % heelDesigns.length);
  };

  const currentDesign = heelDesigns[activeDesign];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100/30 to-pink-100/30"></div>
        <div className="container mx-auto px-6 py-16 relative">
          <MotionDiv {...fadeIn(0.1)} className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full mb-8 border border-rose-200">
              <Crown className="h-5 w-5 text-rose-500 mr-3" />
              <span className="text-rose-700 font-medium">FashionTech Preview</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-light bg-gradient-to-r from-rose-600 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-8 tracking-tight">
              Arisole Elegance Beta
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Where artificial intelligence meets timeless elegance. Experience the future of luxury footwear 
              with AI-optimized stilettos that adapt to your unique biomechanics and style preferences.
            </p>
          </MotionDiv>

          {/* Hero Image */}
          <MotionDiv {...scaleIn(0.3)} className="max-w-4xl mx-auto mb-16">
            <div className="relative">
              <img 
                src="/elegance-heels.jpg" 
                alt="AI-Enhanced Elegance Heels" 
                className="w-full h-auto rounded-3xl shadow-2xl" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-light mb-2">AI-Enhanced Aurora Collection</h3>
                <p className="text-white/90">Smart materials meet luxury design</p>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-16">
        <Tabs defaultValue="designer" className="space-y-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-rose-50/50 backdrop-blur-sm border border-rose-100">
            <TabsTrigger value="designer" className="data-[state=active]:bg-white data-[state=active]:shadow-lg">
              <Palette className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">AI Designer</span>
            </TabsTrigger>
            <TabsTrigger value="balance" className="data-[state=active]:bg-white data-[state=active]:shadow-lg">
              <Activity className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Balance Engine</span>
            </TabsTrigger>
            <TabsTrigger value="posture" className="data-[state=active]:bg-white data-[state=active]:shadow-lg">
              <Target className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Posture Sync</span>
            </TabsTrigger>
            <TabsTrigger value="gallery" className="data-[state=active]:bg-white data-[state=active]:shadow-lg">
              <Star className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Gallery</span>
            </TabsTrigger>
          </TabsList>

          {/* AI Comfort Designer */}
          <TabsContent value="designer" className="space-y-8">
            <MotionDiv {...slideInFromLeft(0.2)}>
              <Card className="bg-white/80 backdrop-blur-lg border-rose-100 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-t-lg">
                  <CardTitle className="flex items-center text-2xl text-rose-800">
                    <Palette className="mr-3 h-6 w-6" />
                    AI Comfort Designer
                  </CardTitle>
                  <CardDescription className="text-rose-600">
                    Input your preferences and watch our AI create the perfect heel profile for you
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-3 block">
                          Height: {userProfile.height[0]} cm
                        </label>
                        <Slider
                          value={userProfile.height}
                          onValueChange={(value) => setUserProfile(prev => ({...prev, height: value}))}
                          max={190}
                          min={150}
                          step={1}
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-3 block">
                          Foot Arch Type
                        </label>
                        <Select onValueChange={(value) => setUserProfile(prev => ({...prev, archType: value}))}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select your arch type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low Arch (Flat Feet)</SelectItem>
                            <SelectItem value="normal">Normal Arch</SelectItem>
                            <SelectItem value="high">High Arch</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-3 block">
                          Preferred Heel Style
                        </label>
                        <Select onValueChange={(value) => setUserProfile(prev => ({...prev, heelPreference: value}))}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Choose your heel preference" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="stiletto">Stiletto (3-5")</SelectItem>
                            <SelectItem value="block">Block Heel (2-4")</SelectItem>
                            <SelectItem value="kitten">Kitten Heel (1-2")</SelectItem>
                            <SelectItem value="platform">Platform (4-6")</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-3 block">
                          Intended Wear Duration: {userProfile.wearDuration[0]} hours
                        </label>
                        <Slider
                          value={userProfile.wearDuration}
                          onValueChange={(value) => setUserProfile(prev => ({...prev, wearDuration: value}))}
                          max={12}
                          min={1}
                          step={0.5}
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-3 block">
                          Primary Occasion
                        </label>
                        <Select onValueChange={(value) => setUserProfile(prev => ({...prev, occasion: value}))}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select primary use" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="professional">Professional/Office</SelectItem>
                            <SelectItem value="evening">Evening Events</SelectItem>
                            <SelectItem value="formal">Formal Occasions</SelectItem>
                            <SelectItem value="daily">Daily Elegance</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-100">
                        <h3 className="text-lg font-semibold text-rose-800 mb-4 flex items-center">
                          <Sparkles className="mr-2 h-5 w-5" />
                          AI Analysis Results
                        </h3>
                        
                        {analysisComplete ? (
                          <MotionDiv {...fadeIn(0.3)} className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Ideal Heel Height</span>
                              <Badge className="bg-rose-500 text-white">
                                {recommendations.idealHeight}"
                              </Badge>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Arch Support</span>
                                <span className="text-sm font-medium text-rose-600">
                                  {recommendations.archSupport}
                                </span>
                              </div>
                              <Progress value={75} className="h-2" />
                            </div>

                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Cushioning Level</span>
                                <span className="text-sm font-medium text-rose-600">
                                  {recommendations.cushioning}%
                                </span>
                              </div>
                              <Progress value={recommendations.cushioning} className="h-2" />
                            </div>

                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Balance Score</span>
                                <span className="text-sm font-medium text-rose-600">
                                  {recommendations.balanceScore}%
                                </span>
                              </div>
                              <Progress value={recommendations.balanceScore} className="h-2" />
                            </div>

                            <div className="mt-6 p-4 bg-white rounded-lg border border-rose-200">
                              <h4 className="font-medium text-rose-800 mb-2">Personalized Recommendation</h4>
                              <p className="text-sm text-gray-600">
                                Based on your profile, we recommend a {recommendations.idealHeight}" heel with 
                                {recommendations.archSupport.toLowerCase()} arch support for optimal comfort and style.
                              </p>
                            </div>
                          </MotionDiv>
                        ) : (
                          <div className="text-center py-8">
                            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Zap className="h-8 w-8 text-rose-500 animate-pulse" />
                            </div>
                            <p className="text-gray-600">Complete your profile for AI recommendations</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          </TabsContent>

          {/* Smart Balance Engine */}
          <TabsContent value="balance" className="space-y-8">
            <MotionDiv {...slideInFromRight(0.2)}>
              <Card className="bg-white/80 backdrop-blur-lg border-rose-100 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-t-lg">
                  <CardTitle className="flex items-center text-2xl text-rose-800">
                    <Activity className="mr-3 h-6 w-6" />
                    Smart Balance Engine
                  </CardTitle>
                  <CardDescription className="text-rose-600">
                    Real-time pressure zone analysis and posture correction visualization
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center">
                        <h3 className="text-lg font-semibold mb-6">3D Foot Analysis</h3>
                        <div 
                          className="w-48 h-48 mx-auto bg-gradient-to-br from-rose-200 to-pink-300 rounded-full flex items-center justify-center relative overflow-hidden"
                          style={{ transform: `rotateY(${rotationAngle}deg)` }}
                        >
                          <div className="text-white font-semibold">
                            <div className="text-sm mb-2">Foot Model</div>
                            <div className="text-xs">Analyzing...</div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-rose-400/20 to-transparent"></div>
                          {/* Pressure point indicators */}
                          <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                          <div className="absolute center w-4 h-4 bg-green-400 rounded-full animate-pulse" style={{top: '45%', left: '45%'}}></div>
                        </div>
                        <div className="mt-6 flex justify-center">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-rose-200 text-rose-600 hover:bg-rose-50"
                          >
                            <RotateCcw className="mr-2 h-4 w-4" />
                            Reset Analysis
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-rose-800">Pressure Zone Analysis</h3>
                      
                      <div className="space-y-4">
                        {[
                          { zone: 'Heel', pressure: 85, color: 'bg-red-400', status: 'High Pressure' },
                          { zone: 'Arch', pressure: 45, color: 'bg-yellow-400', status: 'Optimal' },
                          { zone: 'Ball of Foot', pressure: 75, color: 'bg-orange-400', status: 'Moderate' },
                          { zone: 'Toes', pressure: 30, color: 'bg-green-400', status: 'Low Pressure' }
                        ].map((item, index) => (
                          <MotionDiv 
                            key={item.zone}
                            {...fadeIn(0.1 * index)}
                            className="flex items-center justify-between p-4 bg-white rounded-lg border border-rose-100"
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                              <div>
                                <div className="font-medium text-gray-800">{item.zone}</div>
                                <div className="text-sm text-gray-600">{item.status}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold text-rose-600">{item.pressure}%</div>
                              <Progress value={item.pressure} className="w-20 h-2 mt-1" />
                            </div>
                          </MotionDiv>
                        ))}
                      </div>

                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                        <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                          <Heart className="mr-2 h-4 w-4" />
                          Balance Optimization
                        </h4>
                        <div className="space-y-2 text-sm text-green-700">
                          <div className="flex items-center justify-between">
                            <span>Stability Score</span>
                            <Badge className="bg-green-500 text-white">92%</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Posture Correction</span>
                            <Badge className="bg-green-500 text-white">Active</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Comfort Rating</span>
                            <Badge className="bg-green-500 text-white">9.4/10</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          </TabsContent>

          {/* Posture Sync Assistant */}
          <TabsContent value="posture" className="space-y-8">
            <MotionDiv {...fadeIn(0.2)}>
              <Card className="bg-white/80 backdrop-blur-lg border-rose-100 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-t-lg">
                  <CardTitle className="flex items-center text-2xl text-rose-800">
                    <Target className="mr-3 h-6 w-6" />
                    Posture Sync Assistant
                  </CardTitle>
                  <CardDescription className="text-rose-600">
                    AI-powered biomechanics analysis for perfect heel recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <BarChart3 className="h-8 w-8 text-white" />
                        </div>
                        <h4 className="font-semibold mb-3 text-blue-800">Everyday Wear</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Recommended Height:</span>
                            <span className="font-semibold">2-3"</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Stability:</span>
                            <span className="font-semibold text-green-600">95%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Comfort Duration:</span>
                            <span className="font-semibold">8+ hours</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Crown className="h-8 w-8 text-white" />
                        </div>
                        <h4 className="font-semibold mb-3 text-purple-800">Formal Events</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Recommended Height:</span>
                            <span className="font-semibold">4-5"</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Elegance:</span>
                            <span className="font-semibold text-pink-600">98%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Comfort Duration:</span>
                            <span className="font-semibold">4-6 hours</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-rose-50 to-red-50 border-rose-200">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Star className="h-8 w-8 text-white" />
                        </div>
                        <h4 className="font-semibold mb-3 text-rose-800">Special Occasions</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Recommended Height:</span>
                            <span className="font-semibold">5-6"</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Drama:</span>
                            <span className="font-semibold text-purple-600">99%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Comfort Duration:</span>
                            <span className="font-semibold">2-4 hours</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-200">
                    <h3 className="text-xl font-semibold text-rose-800 mb-6 text-center">
                      AI Biomechanics Insights
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-800">Posture Analysis</h4>
                        <div className="space-y-3">
                          {[
                            { metric: 'Spinal Alignment', score: 94, optimal: true },
                            { metric: 'Hip Balance', score: 89, optimal: true },
                            { metric: 'Weight Distribution', score: 92, optimal: true },
                            { metric: 'Ankle Stability', score: 87, optimal: false }
                          ].map((item, index) => (
                            <div key={item.metric} className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">{item.metric}</span>
                              <div className="flex items-center space-x-2">
                                <Progress value={item.score} className="w-20 h-2" />
                                <Badge variant={item.optimal ? "default" : "secondary"} className="text-xs">
                                  {item.score}%
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-800">Smart Recommendations</h4>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                            <div className="text-sm">
                              <div className="font-medium">Perfect for your gait</div>
                              <div className="text-gray-600">Block heels recommended for extended wear</div>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                            <div className="text-sm">
                              <div className="font-medium">Arch support optimized</div>
                              <div className="text-gray-600">Medium-high support detected as ideal</div>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                            <div className="text-sm">
                              <div className="font-medium">Balance enhancement</div>
                              <div className="text-gray-600">AI cushioning will adapt to your stride</div>
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

          {/* Fashion Meets Science Gallery */}
          <TabsContent value="gallery" className="space-y-8">
            <MotionDiv {...scaleIn(0.2)}>
              <Card className="bg-white/80 backdrop-blur-lg border-rose-100 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-t-lg">
                  <CardTitle className="flex items-center text-2xl text-rose-800">
                    <Star className="mr-3 h-6 w-6" />
                    Fashion Meets Science Gallery
                  </CardTitle>
                  <CardDescription className="text-rose-600">
                    Explore our AI-designed heel collection where elegance meets innovation
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="relative">
                    <div className="flex items-center justify-between mb-8">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={prevDesign}
                        className="border-rose-200 text-rose-600 hover:bg-rose-50"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      
                      <div className="text-center">
                        <Badge className="bg-rose-500 text-white mb-2">
                          {activeDesign + 1} of {heelDesigns.length}
                        </Badge>
                        <h3 className="text-lg font-semibold text-rose-800">{currentDesign.name}</h3>
                      </div>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={nextDesign}
                        className="border-rose-200 text-rose-600 hover:bg-rose-50"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>

                    <MotionDiv 
                      key={activeDesign}
                      {...fadeIn(0.3)}
                      className="grid md:grid-cols-2 gap-8"
                    >
                      <div className="space-y-6">
                        <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden">
                          <img 
                            src={currentDesign.image} 
                            alt={currentDesign.name}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-semibold text-rose-800 mb-2">{currentDesign.name}</h4>
                          <p className="text-gray-600 mb-4">{currentDesign.description}</p>
                          
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div>
                              <span className="text-sm text-gray-600">Style:</span>
                              <div className="font-medium">{currentDesign.style}</div>
                            </div>
                            <div>
                              <span className="text-sm text-gray-600">Height:</span>
                              <div className="font-medium">{currentDesign.height}</div>
                            </div>
                            <div>
                              <span className="text-sm text-gray-600">Best For:</span>
                              <div className="font-medium">{currentDesign.occasion}</div>
                            </div>
                            <div>
                              <span className="text-sm text-gray-600">AI Enhanced:</span>
                              <div className="font-medium text-rose-600">Yes</div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h5 className="font-semibold text-gray-800">Performance Metrics</h5>
                          
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm text-gray-600">Comfort</span>
                                <span className="text-sm font-medium">{currentDesign.comfort}%</span>
                              </div>
                              <Progress value={currentDesign.comfort} className="h-2" />
                            </div>
                            
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm text-gray-600">Elegance</span>
                                <span className="text-sm font-medium">{currentDesign.elegance}%</span>
                              </div>
                              <Progress value={currentDesign.elegance} className="h-2" />
                            </div>
                            
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm text-gray-600">Stability</span>
                                <span className="text-sm font-medium">{currentDesign.stability}%</span>
                              </div>
                              <Progress value={currentDesign.stability} className="h-2" />
                            </div>
                          </div>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white">
                          <Heart className="mr-2 h-4 w-4" />
                          Add to Wishlist
                        </Button>
                      </div>
                    </MotionDiv>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <MotionDiv {...fadeIn(0.4)} className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 text-white border-0 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <CardContent className="relative p-12">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full mb-6">
                  <Globe className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Launching Worldwide</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-tight">
                  Be First to Experience
                  <br />
                  <span className="font-semibold">Tech-Enhanced Elegance</span>
                </h2>
                
                <p className="text-xl mb-8 opacity-90 leading-relaxed">
                  Join our exclusive waitlist and be among the first to experience the future of luxury footwear. 
                  Where artificial intelligence meets timeless elegance.
                </p>
                
                <Button 
                  size="lg"
                  onClick={() => setLocation('/auth')}
                  className="bg-white text-rose-600 hover:bg-gray-100 font-semibold px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Join the Elegance Revolution
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
                
                <div className="mt-8 text-sm opacity-80">
                  <span>✨ Early access • 🎁 Exclusive previews • 💎 Beta pricing</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </MotionDiv>
      </div>
    </div>
  );
}