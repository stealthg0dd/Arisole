import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MotionDiv, fadeIn } from '@/components/ui/motion';
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  primaryActivity: z.string().min(1, {
    message: "Please select your primary activity.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function WaitlistSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      primaryActivity: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest('POST', '/api/waitlist', data);
      toast({
        title: "Waitlist Joined!",
        description: "You're now on the waitlist for Arisole. We'll be in touch!",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your information. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <MotionDiv
          className="max-w-4xl mx-auto bg-primary rounded-3xl shadow-xl overflow-hidden"
          {...fadeIn()}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 relative">
              <img 
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80" 
                alt="Arisole in use" 
                className="w-full h-full object-cover object-center" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent md:bg-gradient-to-r md:from-primary/90 md:to-transparent flex items-end md:items-center p-8">
                <h2 className="text-3xl font-bold text-white md:hidden">Be the First to Experience Arisole</h2>
              </div>
            </div>
            
            <div className="md:w-3/5 p-8 md:p-12 bg-primary">
              <h2 className="text-3xl font-bold text-white mb-6 hidden md:block">Be the First to Experience Arisole</h2>
              <p className="text-white/80 mb-8">
                Join our exclusive waitlist for early access to the limited first production run.
                Early supporters receive 30% off and a complimentary extra sole of your choice.
              </p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-medium">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="Your name" 
                            className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-secondary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-medium">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email" 
                            placeholder="you@example.com" 
                            className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-secondary" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="primaryActivity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-medium">Primary Activity</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-secondary">
                              <SelectValue placeholder="Select your main sport" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="trail">Trail Running</SelectItem>
                            <SelectItem value="tennis">Tennis</SelectItem>
                            <SelectItem value="gym">Gym/Fitness</SelectItem>
                            <SelectItem value="walking">Walking</SelectItem>
                            <SelectItem value="casual">Casual/Street</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      className="w-full bg-secondary text-white font-bold py-4 px-6 rounded-lg hover:bg-secondary/90 transition-colors h-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Joining..." : "Join the Waitlist"}
                    </Button>
                  </div>
                  
                  <p className="text-white/60 text-sm text-center mt-4">
                    By joining, you'll receive product updates and launch information.
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
