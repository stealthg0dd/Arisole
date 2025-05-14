import { Card, CardContent } from "@/components/ui/card";
import { MotionDiv, fadeIn, staggerContainer } from '@/components/ui/motion';
import { Star } from "lucide-react";

interface TestimonialProps {
  image: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  delay?: number;
}

function Testimonial({ image, name, role, content, rating, delay = 0 }: TestimonialProps) {
  return (
    <MotionDiv {...fadeIn(delay)}>
      <Card className="bg-white shadow-md">
        <CardContent className="p-8">
          <div className="flex items-center mb-6">
            <img 
              src={image} 
              alt={name} 
              className="w-16 h-16 rounded-full object-cover mr-4" 
            />
            <div>
              <h3 className="font-bold text-xl">{name}</h3>
              <p className="text-gray-600">{role}</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">{content}</p>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`${i < rating ? 'fill-current' : 'stroke-current'} h-5 w-5`}
                fill={i < rating ? 'currentColor' : 'none'}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </MotionDiv>
  );
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      image: "https://pixabay.com/get/g38f14a12a405925029ca67850d77562cd1786823b7f1cacce2ddbffd625faae39a6d95ef0c1ad42a74fab700e555d9141a92420970f4a5d4189a5faa3b877e01_1280.jpg",
      name: "Emma T.",
      role: "Trail Runner",
      content: "\"I was skeptical at first, but the trail sole performs just as well as my dedicated trail runners. The convenience of switching to street shoes after a run is game-changing.\"",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      name: "Marcus J.",
      role: "Tennis Coach",
      content: "\"The tennis sole gives excellent court grip and stability. I can switch to walking shoes after practice without carrying an extra pair. Brilliant concept!\"",
      rating: 4.5
    },
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      name: "Sophia R.",
      role: "Fitness Instructor",
      content: "\"Teaching classes all day means different shoes for different activities. Arisole has simplified my life and saved space in my gym bag. Love the quick change system!\"",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <MotionDiv className="text-center max-w-3xl mx-auto mb-16" {...fadeIn()}>
          <h2 className="text-4xl font-bold mb-6">What Our Testers Say</h2>
          <p className="text-lg text-gray-700">
            We've been testing prototypes with athletes from various disciplines. Here's what they think.
          </p>
        </MotionDiv>
        
        <MotionDiv
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              rating={testimonial.rating}
              delay={index * 0.2}
            />
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}
