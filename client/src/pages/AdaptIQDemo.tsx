import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { MotionDiv, fadeIn, slideInFromLeft, slideInFromRight } from '@/components/ui/motion';
import { 
  Brain, 
  Activity, 
  Target, 
  Zap, 
  Mountain, 
  Dumbbell, 
  Trophy,
  ArrowLeft,
  CheckCircle,
  TrendingUp,
  Gauge
} from 'lucide-react';

interface SportProfile {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  terrainType: string;
  impactLevel: 'Low' | 'Medium' | 'High';
  flexibility: number;
  stability: number;
  traction: number;
}

const sportProfiles: SportProfile[] = [
  {
    id: 'trail',
    name: 'Trail Running',
    icon: <Mountain className="h-6 w-6" />,
    color: 'bg-green-500',
    terrainType: 'Uneven, rocky terrain',
    impactLevel: 'High',
    flexibility: 70,
    stability: 85,
    traction: 95
  },
  {
    id: 'gym',
    name: 'Gym Training',
    icon: <Dumbbell className="h-6 w-6" />,
    color: 'bg-blue-500',
    terrainType: 'Flat, stable surfaces',
    impactLevel: 'Medium',
    flexibility: 90,
    stability: 75,
    traction: 60
  },
  {
    id: 'tennis',
    name: 'Tennis',
    icon: <Trophy className="h-6 w-6" />,
    color: 'bg-orange-500',
    terrainType: 'Court surfaces',
    impactLevel: 'High',
    flexibility: 85,
    stability: 90,
    traction: 85
  }
];

export default function AdaptIQDemo() {
  const { currentUser } = useAuth();
  const [, setLocation] = useLocation();
  const [selectedSport, setSelectedSport] = useState<SportProfile>(sportProfiles[0]);
  const [simulationProgress, setSimulationProgress] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [userWeight, setUserWeight] = useState([70]);
  const [runningPace, setRunningPace] = useState([7]);
  const [adaptationComplete, setAdaptationComplete] = useState(false);

  const startSimulation = () => {
    setIsSimulating(true);
    setSimulationProgress(0);
    setAdaptationComplete(false);
  };

  useEffect(() => {
    if (isSimulating && simulationProgress < 100) {
      const timer = setTimeout(() => {
        setSimulationProgress(prev => {
          const newProgress = prev + Math.random() * 15 + 5;
          if (newProgress >= 100) {
            setIsSimulating(false);
            setAdaptationComplete(true);
            return 100;
          }
          return newProgress;
        });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isSimulating, simulationProgress]);

  // Redirect if not authenticated
  if (!currentUser) {
    setLocation('/auth');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <MotionDiv {...fadeIn(0.1)} className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={() => setLocation('/dashboard')}
              className="text-white hover:bg-white/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AdaptIQ™ Neural Simulator
              </h1>
              <p className="text-gray-300">
                AI-powered sole adaptation technology
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-blue-400" />
            <span className="text-sm text-gray-300">Neural Network Active</span>
          </div>
        </MotionDiv>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sport Selection */}
          <MotionDiv {...slideInFromLeft(0.2)} className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Target className="mr-2 h-5 w-5" />
                  Select Your Sport
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Choose your activity for personalized adaptation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {sportProfiles.map((sport) => (
                  <div
                    key={sport.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedSport.id === sport.id
                        ? 'border-blue-400 bg-blue-400/20'
                        : 'border-white/20 hover:border-white/40 bg-white/5'
                    }`}
                    onClick={() => setSelectedSport(sport)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full ${sport.color} text-white`}>
                        {sport.icon}
                      </div>
                      <div>
                        <div className="font-medium text-white">{sport.name}</div>
                        <div className="text-sm text-gray-300">{sport.terrainType}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* User Parameters */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Activity className="mr-2 h-5 w-5" />
                  Your Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm text-gray-300 mb-2 block">
                    Weight: {userWeight[0]} kg
                  </label>
                  <Slider
                    value={userWeight}
                    onValueChange={setUserWeight}
                    max={120}
                    min={40}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-300 mb-2 block">
                    Pace: {runningPace[0]} min/km
                  </label>
                  <Slider
                    value={runningPace}
                    onValueChange={setRunningPace}
                    max={12}
                    min={3}
                    step={0.5}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>
          </MotionDiv>

          {/* Simulation Display */}
          <MotionDiv {...fadeIn(0.3)} className="lg:col-span-2 space-y-6">
            {/* Current Sport Analysis */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <div className={`p-2 rounded-full ${selectedSport.color} text-white mr-3`}>
                    {selectedSport.icon}
                  </div>
                  {selectedSport.name} Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">
                      {selectedSport.flexibility}%
                    </div>
                    <div className="text-sm text-gray-300">Flexibility</div>
                    <Progress value={selectedSport.flexibility} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      {selectedSport.stability}%
                    </div>
                    <div className="text-sm text-gray-300">Stability</div>
                    <Progress value={selectedSport.stability} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">
                      {selectedSport.traction}%
                    </div>
                    <div className="text-sm text-gray-300">Traction</div>
                    <Progress value={selectedSport.traction} className="mt-2" />
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm text-gray-300">Impact Level</div>
                    <Badge variant={selectedSport.impactLevel === 'High' ? 'destructive' : 'secondary'}>
                      {selectedSport.impactLevel}
                    </Badge>
                  </div>
                  <div>
                    <div className="text-sm text-gray-300">Terrain</div>
                    <div className="text-white font-medium">{selectedSport.terrainType}</div>
                  </div>
                </div>

                <Button 
                  onClick={startSimulation} 
                  disabled={isSimulating}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                >
                  {isSimulating ? (
                    <>
                      <Zap className="mr-2 h-4 w-4 animate-pulse" />
                      Running Neural Adaptation...
                    </>
                  ) : (
                    <>
                      <Brain className="mr-2 h-4 w-4" />
                      Start AdaptIQ™ Simulation
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Simulation Progress */}
            {(isSimulating || adaptationComplete) && (
              <MotionDiv {...slideInFromRight(0.1)}>
                <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Gauge className="mr-2 h-5 w-5" />
                      Neural Adaptation Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Analyzing gait pattern...</span>
                      <CheckCircle className={`h-5 w-5 ${simulationProgress > 25 ? 'text-green-400' : 'text-gray-400'}`} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Calculating optimal sole configuration...</span>
                      <CheckCircle className={`h-5 w-5 ${simulationProgress > 50 ? 'text-green-400' : 'text-gray-400'}`} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Adjusting micro-tensioners...</span>
                      <CheckCircle className={`h-5 w-5 ${simulationProgress > 75 ? 'text-green-400' : 'text-gray-400'}`} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Finalizing adaptation matrix...</span>
                      <CheckCircle className={`h-5 w-5 ${simulationProgress >= 100 ? 'text-green-400' : 'text-gray-400'}`} />
                    </div>
                    
                    <Progress value={simulationProgress} className="mt-4" />
                    <div className="text-center text-sm text-gray-300">
                      {Math.round(simulationProgress)}% Complete
                    </div>

                    {adaptationComplete && (
                      <MotionDiv {...fadeIn(0.5)} className="mt-6 p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-400/30">
                        <div className="flex items-center space-x-3 mb-3">
                          <CheckCircle className="h-6 w-6 text-green-400" />
                          <div className="text-lg font-semibold text-white">
                            Adaptation Complete!
                          </div>
                        </div>
                        <div className="text-sm text-gray-300 mb-4">
                          Your AdaptIQ™ sole has been optimized for {selectedSport.name.toLowerCase()}. 
                          Performance improvements predicted:
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="h-4 w-4 text-green-400" />
                            <span className="text-sm text-white">+23% Energy Return</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="h-4 w-4 text-blue-400" />
                            <span className="text-sm text-white">+18% Stability</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="h-4 w-4 text-purple-400" />
                            <span className="text-sm text-white">+31% Traction</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="h-4 w-4 text-orange-400" />
                            <span className="text-sm text-white">-15% Impact Force</span>
                          </div>
                        </div>
                      </MotionDiv>
                    )}
                  </CardContent>
                </Card>
              </MotionDiv>
            )}
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}