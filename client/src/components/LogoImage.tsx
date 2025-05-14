import React from 'react';

interface LogoImageProps {
  className?: string;
  darkMode?: boolean;
}

export default function LogoImage({ className = 'h-10', darkMode = false }: LogoImageProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="font-black text-xl md:text-2xl tracking-wider relative">
        <span className={darkMode ? "text-white" : "text-foreground"}>ARI</span>
        <span className="text-primary">SOLE</span>
        <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary/80"></div>
      </span>
    </div>
  );
}