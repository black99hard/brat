import React from 'react';

const HeroImage: React.FC = () => {
  return (
    <div className="relative w-48 h-48 mb-8">
      <div className="absolute inset-0 bg-red-500/30 rounded-2xl rotate-6 transform-gpu"></div>
      <div className="absolute inset-0 bg-red-500/20 rounded-2xl -rotate-6 transform-gpu"></div>
      <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-red-500/50 shadow-lg shadow-red-500/20">
        <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent"></div>
        <img 
          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=400&h=400" 
          alt="AI Art"
          className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-700"
        />
      </div>
    </div>
  );
};

export default HeroImage;