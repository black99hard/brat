import React from 'react';

const Terminal: React.FC = () => {
  return (
    <div className="fixed top-4 right-4 w-64 h-32 bg-black/80 border border-red-500/30 rounded-lg overflow-hidden font-mono text-xs">
      <div className="bg-red-950/50 px-2 py-1 text-red-400 flex items-center">
        <span className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500/60"></span>
          <span className="w-2 h-2 rounded-full bg-red-500/40"></span>
          <span className="w-2 h-2 rounded-full bg-red-500/20"></span>
        </span>
        <span className="ml-2">BRAT.terminal</span>
      </div>
      <div className="p-2 text-red-400/80 leading-relaxed">
        <span className="text-red-500">$</span> initializing BRAT protocol...
        <br />
        <span className="text-red-500">$</span> connecting to neural network...
        <br />
        <span className="text-red-500">$</span> <span className="animate-pulse">_</span>
      </div>
    </div>
  );
};

export default Terminal;