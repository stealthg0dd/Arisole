import { motion, MotionProps } from "framer-motion";
import React from "react";

export type MotionDivProps = React.HTMLAttributes<HTMLDivElement> & MotionProps;

export const MotionDiv: React.FC<MotionDivProps> = ({ children, ...props }) => {
  return <motion.div {...props}>{children}</motion.div>;
};

// Common animations
export const fadeIn = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
});

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const slideInFromLeft = (delay: number = 0) => ({
  initial: { opacity: 0, x: -50 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
});

export const slideInFromRight = (delay: number = 0) => ({
  initial: { opacity: 0, x: 50 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
});

export const scaleIn = (delay: number = 0) => ({
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      delay,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
});
