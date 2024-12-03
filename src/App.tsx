import React from 'react';
import { Send, TwitterIcon, LineChartIcon, BarChart} from 'lucide-react';
import MatrixRain from './components/MatrixRain';
import ParticleBackground from './components/ParticleBackground';
import GridBackground from './components/RetroElements/GridBackground';
import Terminal from './components/RetroElements/Terminal';
import RetroMenu from './components/RetroElements/RetroMenu';
import AIGame from './components/AIGame';
import TokenStats from './components/TokenStats';
import Hero from './components/Hero/Hero';
import AboutSection from './components/About/AboutSection';
import ContractAddress from './components/ContractAddress';
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-red-950 relative">
      <GridBackground />
      <MatrixRain />
      <ParticleBackground />
      <Terminal />
      <RetroMenu />
      <Analytics />
      <Hero />

      <div id="stats" className="container mx-auto px-4 py-16">
        <div className="retro-header mb-12">
          <div className="flex items-center gap-2 justify-center">
            <div className="h-px bg-red-500/50 w-16"></div>
            <h2 className="text-2xl font-mono text-red-400">TOKEN_STATS</h2>
            <div className="h-px bg-red-500/50 w-16"></div>
          </div>
        </div>
        <TokenStats />
        <ContractAddress />
      </div>

      <div id="about" className="container mx-auto px-4 py-16">
        <div className="retro-header mb-12">
          <div className="flex items-center gap-2 justify-center">
            <div className="h-px bg-red-500/50 w-16"></div>
            <h2 className="text-2xl font-mono text-red-400">ABOUT_BRAT</h2>
            <div className="h-px bg-red-500/50 w-16"></div>
          </div>
        </div>
        <AboutSection />

        <div id="chat" className="mb-16 mt-24">
          <div className="retro-header mb-12">
            <div className="flex items-center gap-2 justify-center">
              <div className="h-px bg-red-500/50 w-16"></div>
              <h2 className="text-2xl font-mono text-red-400">NEURAL_LINK</h2>
              <div className="h-px bg-red-500/50 w-16"></div>
            </div>
          </div>
          <AIGame />
        </div>

        <div className="mt-16 flex justify-center space-x-6">
          <a 
            href="https://x.com/bruisedbadly" 
            className="text-red-400 hover:text-red-300 transition-colors transform hover:scale-110 duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="w-8 h-8" />
          </a>
          <a 
            href="https://t.me/micibrat" 
            className="text-red-400 hover:text-red-300 transition-colors transform hover:scale-110 duration-300"
          >
            <Send className="w-8 h-8" />
          </a>
          <a 
            href="https://dexscreener.com/solana/7wnvfyth3e4m4dgwezyhg44ayygn9ve6fvcaajjqmhg5" 
            className="text-red-400 hover:text-red-300 transition-colors transform hover:scale-110 duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
             <LineChartIcon className="w-8 h-8" />
          </a>
          <a 
            href="https://www.dextools.io/app/en/solana/pair-explorer/7WnvFyth3E4M4DgwEzYHg44ayyGn9ve6fvcaAJJQmHG5?t=1733170065312" 
            className="text-red-400 hover:text-red-300 transition-colors transform hover:scale-110 duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
             <BarChart className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;