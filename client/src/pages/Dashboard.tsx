import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MotionDiv, fadeIn, staggerContainer } from '@/components/ui/motion';
import { User, Package, Settings, Star, Calendar, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      await logout();
      toast({
        title: "Signed out",
        description: "You've been successfully signed out.",
      });
      setLocation('/');
    } catch (error) {
      toast({
        title: "Error signing out",
        description: "There was an error signing you out.",
        variant: "destructive",
      });
    }
  };

  const handleTryAdaptIQ = () => {
    setLocation('/adaptiq-demo');
  };

  const userInitials = currentUser?.displayName
    ? currentUser.displayName.split(' ').map(n => n[0]).join('').toUpperCase()
    : currentUser?.email?.[0]?.toUpperCase() || 'U';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 py-8">
        <MotionDiv {...fadeIn(0.1)}>
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back, {currentUser?.displayName || 'User'}!
              </h1>
              <p className="text-gray-600">
                Your Arisole journey continues here
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button onClick={handleTryAdaptIQ} className="bg-primary hover:bg-primary/90">
                Try AdaptIQ™ Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                Sign Out
              </Button>
            </div>
          </div>
        </MotionDiv>

        <MotionDiv {...staggerContainer} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <MotionDiv {...fadeIn(0.2)} className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={currentUser?.photoURL || ''} />
                  <AvatarFallback className="text-xl bg-primary text-white">
                    {userInitials}
                  </AvatarFallback>
                </Avatar>
                <CardTitle>{currentUser?.displayName || 'User'}</CardTitle>
                <CardDescription>{currentUser?.email}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Member since</span>
                  <Badge variant="secondary">
                    {currentUser?.metadata?.creationTime 
                      ? new Date(currentUser.metadata.creationTime).toLocaleDateString()
                      : 'Today'
                    }
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Account status</span>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>
                <Button variant="outline" className="w-full">
                  <Settings className="mr-2 h-4 w-4" />
                  Account Settings
                </Button>
              </CardContent>
            </Card>
          </MotionDiv>

          {/* Main Content */}
          <MotionDiv {...fadeIn(0.3)} className="lg:col-span-2">
            <Tabs defaultValue="orders" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="orders">My Orders</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
              </TabsList>
              
              <TabsContent value="orders" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Package className="mr-2 h-5 w-5" />
                      Recent Orders
                    </CardTitle>
                    <CardDescription>
                      Track your Arisole purchases and experiences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <Package className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">No orders yet</h3>
                      <p className="text-gray-600 mb-6">
                        You haven't placed any orders yet. Join our waitlist to be notified when Arisole becomes available!
                      </p>
                      <Button onClick={() => setLocation('/#waitlist')}>
                        Join Waitlist
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="preferences" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Star className="mr-2 h-5 w-5" />
                      Sport Preferences
                    </CardTitle>
                    <CardDescription>
                      Tell us about your favorite activities to personalize your AdaptIQ™ experience
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { name: 'Trail Running', selected: true },
                        { name: 'Tennis', selected: false },
                        { name: 'Gym Training', selected: true },
                        { name: 'Street Walking', selected: false },
                        { name: 'Basketball', selected: false },
                        { name: 'Hiking', selected: true }
                      ].map((sport, index) => (
                        <div 
                          key={sport.name}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            sport.selected 
                              ? 'border-primary bg-primary/5' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="text-center">
                            <div className="text-sm font-medium">{sport.name}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6">
                      Save Preferences
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </MotionDiv>
        </MotionDiv>

        {/* Quick Actions */}
        <MotionDiv {...fadeIn(0.4)} className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={handleTryAdaptIQ}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Try AdaptIQ™ Demo</h3>
                <p className="text-sm text-gray-600">
                  Experience the future of adaptive footwear technology
                </p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Schedule Fitting</h3>
                <p className="text-sm text-gray-600">
                  Book a personalized fitting session at our lab
                </p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-sm text-gray-600">
                  Connect with other Arisole beta testers
                </p>
              </CardContent>
            </Card>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}