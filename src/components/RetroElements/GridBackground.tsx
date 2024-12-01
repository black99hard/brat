import React from 'react';

const GridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      ></div>
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.8) 100%)'
        }}
      ></div>
    </div>
  );
};

export default GridBackground;