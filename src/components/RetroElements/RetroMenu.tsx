import React from 'react';
import { Menu, ChevronRight, ExternalLink } from 'lucide-react';

const RetroMenu: React.FC = () => {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 space-y-2">
      {['About', 'Stats', 'Chat',].map((item, index) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="group flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronRight className="w-4 h-4" />
          </span>
          <span className="font-mono text-sm">{`0${index + 1} ${item}`}</span>
        </a>
      ))}
      <a
        href="https://medium.com/@huangmey1510/brat-a-revolutionary-hidden-solana-gem-awaiting-to-be-discovered-19c55326de63"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
      >
        <span className="opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink className="w-4 h-4" />
        </span>
        <span className="font-mono text-sm">04 Docs</span>
      </a>
    </div>
  );
};

export default RetroMenu;