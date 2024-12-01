import React from 'react';
import { ChevronDown } from 'lucide-react';
import HeroImage from './HeroImage';
import HeroTitle from './HeroTitle';
import HeroButtons from './HeroButtons';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-black/40 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-red-950/10 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative">
        <div className="flex flex-col items-center text-center space-y-8">
          <HeroImage />
          <HeroTitle />
          <HeroButtons />
        </div>
      </div>

      <ChevronDown 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-8 text-red-400 animate-bounce cursor-pointer hover:text-red-300 transition-colors"
        onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
      />
    </div>
  );
};

export default Hero;