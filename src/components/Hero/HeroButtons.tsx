import React from 'react';

const HeroButtons: React.FC = () => {
  return (
    <div className="flex gap-6 mt-8">
      <a
        href="https://medium.com/@huangmey1510/brat-a-revolutionary-hidden-solana-gem-awaiting-to-be-discovered-19c55326de63"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative px-8 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-all duration-300 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        <span className="relative">Learn More</span>
      </a>
      <a
        href="#chat"
        className="group relative px-8 py-3 bg-black/40 hover:bg-black/60 text-gray-300 rounded-lg transition-all duration-300 overflow-hidden border border-red-500/20"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        <span className="relative">Chat with BRAT</span>
      </a>
    </div>
  );
};

export default HeroButtons;