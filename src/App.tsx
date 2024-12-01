import React from 'react';
import { GithubIcon, TwitterIcon } from 'lucide-react';
import MatrixRain from './components/MatrixRain';
import ParticleBackground from './components/ParticleBackground';
import AIGame from './components/AIGame';
import TokenStats from './components/TokenStats';
import Hero from './components/Hero/Hero';
import AboutSection from './components/About/AboutSection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-red-950 relative">
      <MatrixRain />
      <ParticleBackground />
      
      <Hero />

      <div id="stats" className="container mx-auto px-4 py-16">
        <TokenStats />
      </div>

      <div id="about" className="container mx-auto px-4 py-16">
        <AboutSection />

        <div id="chat" className="mb-16 mt-24">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300 text-center mb-8">
            Connect with BRAT
          </h2>
          <AIGame />
        </div>

        <div className="mt-16 flex justify-center space-x-6">
          <a 
            href="https://twitter.com/mici" 
            className="text-red-400 hover:text-red-300 transition-colors transform hover:scale-110 duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="w-8 h-8" />
          </a>
          <a 
            href="#" 
            className="text-red-400 hover:text-red-300 transition-colors transform hover:scale-110 duration-300"
          >
            <GithubIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;