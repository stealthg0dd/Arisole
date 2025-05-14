import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MotionDiv, fadeIn } from '@/components/ui/motion';
import { ChevronDown } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  index: number;
}

function FaqItem({ question, answer, index }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MotionDiv {...fadeIn(0.1 * index)}>
      <Card className="bg-white rounded-xl shadow-sm overflow-hidden">
        <button 
          className="w-full text-left px-6 py-4 flex justify-between items-center"
          onClick={toggleOpen}
        >
          <h3 className="font-bold text-lg">{question}</h3>
          <ChevronDown className={`text-primary transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <MotionDiv
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CardContent className="px-6 pb-6 pt-0">
              <p className="text-gray-700">{answer}</p>
            </CardContent>
          </MotionDiv>
        )}
      </Card>
    </MotionDiv>
  );
}

export default function FaqSection() {
  const faqs = [
    {
      question: "How long does it take to switch soles?",
      answer: "Once you're familiar with the system, changing soles takes less than 30 seconds. Our patented click-lock mechanism makes it quick and effortless, with no tools required."
    },
    {
      question: "Are the soles as durable as traditional shoes?",
      answer: "Yes! We've engineered our soles with the same materials and construction techniques used in high-performance single-purpose athletic shoes. In our testing, Arisole soles have equal or better durability compared to traditional shoes."
    },
    {
      question: "How secure is the connection between sole and shoe?",
      answer: "Very secure. Our patented locking mechanism has been tested under extreme conditions and withstands forces up to 4x what would be experienced during intense athletic activity. The soles will not detach during normal use."
    },
    {
      question: "When will Arisole be available for purchase?",
      answer: "We're planning to launch in Q3 this year, with early access for waitlist members beginning 4 weeks before the general release. Join the waitlist to be among the first to experience Arisole."
    },
    {
      question: "What sole options will be available at launch?",
      answer: "The initial launch will include four sole options: Trail Running, Tennis/Court, Gym/Training, and Casual/Street. Additional specialized soles will be released quarterly based on customer feedback and demand."
    }
  ];

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <MotionDiv className="text-center max-w-3xl mx-auto mb-16" {...fadeIn()}>
          <h2 className="text-4xl font-bold mb-6">Common Questions</h2>
          <p className="text-lg text-gray-700">
            Everything you need to know about Arisole's revolutionary modular shoe system.
          </p>
        </MotionDiv>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FaqItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
