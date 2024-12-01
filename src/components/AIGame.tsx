import React, { useState, useEffect } from 'react';
import { BrainCircuit, Send } from 'lucide-react';

const AIGame: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState<Array<{ text: string; isAI: boolean }>>([
    { text: "Hello, I'm Mici. Share your thoughts with me...", isAI: true }
  ]);
  const [thinking, setThinking] = useState(false);

  const aiResponses = [
    "I understand how you feel. Life's edges can be sharp, but they shape us.",
    "Sometimes running away leads us to where we need to be.",
    "In every corner of the digital world, there's a chance for connection.",
    "Your journey matters. Tell me more about what brings you here.",
    "The matrix of life is complex, but you're not navigating it alone."
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setConversation(prev => [...prev, { text: userInput, isAI: false }]);
    setUserInput('');
    setThinking(true);

    setTimeout(() => {
      const response = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      setConversation(prev => [...prev, { text: response, isAI: true }]);
      setThinking(false);
    }, 1500);
  };

  return (
    <div className="bg-black/60 rounded-xl backdrop-blur-md border border-red-500/20 p-6 w-full max-w-2xl mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <BrainCircuit className="w-6 h-6 text-red-400" />
        <h3 className="text-xl font-bold text-red-400">AI Companion Interface</h3>
      </div>
      
      <div className="h-80 overflow-y-auto mb-4 space-y-4 scrollbar-thin scrollbar-thumb-red-500/50">
        {conversation.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.isAI ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                msg.isAI
                  ? 'bg-red-950/40 text-gray-200'
                  : 'bg-red-500/20 text-gray-100'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {thinking && (
          <div className="flex justify-start">
            <div className="bg-red-950/40 text-gray-200 p-3 rounded-lg">
              <span className="animate-pulse">Thinking...</span>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="flex-1 bg-black/40 border border-red-500/20 rounded-lg px-4 py-2 text-gray-100 focus:outline-none focus:border-red-500/50"
          placeholder="Share your thoughts..."
        />
        <button
          type="submit"
          className="bg-red-500/20 hover:bg-red-500/30 text-red-400 px-4 py-2 rounded-lg transition-colors"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default AIGame;