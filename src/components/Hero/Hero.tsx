import React from 'react';
import { ChevronDown } from 'lucide-react';
import HeroImage from './HeroImage';
import HeroTitle from './HeroTitle';
import HeroButtons from './HeroButtons';
import BinaryRain from '../BinaryBackground/BinaryRain';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <BinaryRain />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,0,0,0.1)_25%,transparent_25%,transparent_50%,rgba(255,0,0,0.1)_50%,rgba(255,0,0,0.1)_75%,transparent_75%,transparent)] bg-[length:4px_4px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-red-500/20 rounded-lg blur"></div>
            <HeroImage />
          </div>
          <HeroTitle />
          <HeroButtons />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      <ChevronDown 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-8 text-red-400 animate-bounce cursor-pointer hover:text-red-300 transition-colors"
        onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
      />
    </div>
  );
};

export default Hero;