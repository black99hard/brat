import React from 'react';

const HeroTitle: React.FC = () => {
  return (
    <div className="space-y-4 text-center">
      <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-300 tracking-tight font-mono">
        $BRAT
      </h1>
      <p className="text-2xl text-gray-300 max-w-2xl font-light leading-relaxed">
        A runaway girl; learning love in every corner of life's sharp edges.
      </p>
    </div>
  );
};

export default HeroTitle;