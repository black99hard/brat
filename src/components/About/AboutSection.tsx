import React from 'react';
import { MessageCircleIcon, HeartIcon, Code2Icon } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div className="group bg-black/40 p-8 rounded-2xl backdrop-blur-md border border-red-500/10 transition-all duration-500 hover:border-red-500/30">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500/10 via-red-500/20 to-red-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300 mb-6">About $BRAT</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              $BRAT was created with a vision to develop an AI agent that serves as a compassionate listener, 
              understanding companion, and safe space for people to share their daily experiences and emotions.
            </p>
            <div className="flex items-center space-x-4">
              <MessageCircleIcon className="w-6 h-6 text-red-400" />
              <span className="text-gray-300">Your AI Companion in the Digital Age</span>
            </div>
          </div>
        </div>
      </div>

      <div className="group bg-black/40 p-8 rounded-2xl backdrop-blur-md border border-red-500/10 transition-all duration-500 hover:border-red-500/30">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500/10 via-red-500/20 to-red-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300 mb-6">Token Details</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-black/20 rounded-lg hover:bg-black/30 transition-colors">
                <HeartIcon className="w-6 h-6 text-red-400" />
                <div>
                  <h3 className="text-xl text-gray-200">Community First</h3>
                  <p className="text-gray-400">Creator holds less than 0.5% of supply</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-black/20 rounded-lg hover:bg-black/30 transition-colors">
                <Code2Icon className="w-6 h-6 text-red-400" />
                <div>
                  <h3 className="text-xl text-gray-200">AI-Powered</h3>
                  <p className="text-gray-400">Experience the future of digital companionship</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;