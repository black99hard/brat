import React from 'react';
import { TrendingUp, Users, Wallet, Clock } from 'lucide-react';

const TokenStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl mx-auto">
      {[
        {
          icon: <TrendingUp className="w-6 h-6" />,
          label: 'Market Cap',
          value: '$1.5M',
        },
        {
          icon: <Users className="w-6 h-6" />,
          label: 'Holders',
          value: '2,164',
        },
        {
          icon: <Wallet className="w-6 h-6" />,
          label: 'Liquidity',
          value: '$46K',
        },
        {
          icon: <Clock className="w-6 h-6" />,
          label: 'Total locked liquidity',
          value: '100%',
        },
      ].map((stat, index) => (
        <div
          key={index}
          className="bg-black/40 backdrop-blur-md border border-red-500/10 rounded-xl p-4
                     flex items-center space-x-4 transform hover:scale-105 transition-all
                     hover:border-red-500/30"
        >
          <div className="p-3 bg-red-500/10 rounded-lg text-red-400">
            {stat.icon}
          </div>
          <div>
            <p className="text-gray-400 text-sm">{stat.label}</p>
            <p className="text-xl font-bold text-red-400">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TokenStats;