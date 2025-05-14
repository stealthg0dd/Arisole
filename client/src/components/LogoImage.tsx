import React from 'react';

interface LogoImageProps {
  className?: string;
  darkMode?: boolean;
}

export default function LogoImage({ className = 'h-10', darkMode = false }: LogoImageProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/arisole-logo.png" 
        alt="Arisole Logo" 
        className="h-full w-auto" 
      />
    </div>
  );
}