import React from 'react';

const HeroTitle: React.FC = () => {
  return (
    <div className="space-y-4 text-center relative">
      <div className="relative inline-block">
        <div className="absolute -inset-1 bg-red-500/20 rounded-lg blur"></div>
        <h1 className="relative text-8xl font-bold text-red-500 tracking-tight font-mono glitch-text">
          $BRAT
        </h1>
      </div>
      <div className="relative">
        <div className="absolute -inset-1 bg-red-500/10 rounded-lg blur-sm"></div>
        <p className="relative text-2xl text-gray-300 max-w-2xl font-light leading-relaxed font-mono">
          A runaway girl; learning love in every corner of life's sharp edges.
        </p>
      </div>
      <div className="flex justify-center gap-2 text-red-500/60 font-mono text-sm">
        {Array.from('SYSTEM_INITIALIZED').map((char, i) => (
          <span key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HeroTitle;