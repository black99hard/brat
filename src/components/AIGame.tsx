import React, { useState, useEffect } from 'react';
import { BrainCircuit, Send } from 'lucide-react';
import Groq from "groq-sdk";

const apiKey = import.meta.env.VITE_GROQ_API_KEY;
const groq = apiKey ? new Groq({ apiKey, dangerouslyAllowBrowser: true }) : null;

const AIGame: React.FC = () => {
  const initialMessage = { text: "Hello, I'm Mici. Share your thoughts with me...", isAI: true };
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState<Array<{ text: string; isAI: boolean }>>(
    JSON.parse(localStorage.getItem('conversation') || '[]').length > 0 
      ? JSON.parse(localStorage.getItem('conversation') || '[]') 
      : [initialMessage]
  );
  const [thinking, setThinking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rateLimit, setRateLimit] = useState(false);
  
  useEffect(() => {
    localStorage.setItem('conversation', JSON.stringify(conversation));
  }, [conversation]);

  const getAIResponse = async (input: string) => {
    if (!groq) {
      setError("AI API key is missing. Please check your configuration.");
      return "Sorry, I couldn't process your request.";
    }

    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: input,
          },
        ],
        model: "llama3-8b-8192",
      });
      return chatCompletion.choices[0]?.message?.content || "";
    } catch (err) {
      setError("Failed to get response from AI. Please try again.");
      console.error(err);
      return "Sorry, I couldn't process your request.";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    if (rateLimit) {
      setError("Please wait before sending another message.");
      return;
    }

    setConversation(prev => [...prev, { text: userInput, isAI: false }]);
    setUserInput('');
    setThinking(true);
    setRateLimit(true);

    const response = await getAIResponse(userInput);
    setConversation(prev => [...prev, { text: response, isAI: true }]);
    setThinking(false);
    setRateLimit(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSubmit(e as any);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [userInput]);

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
        {error && <div className="text-red-500">{error}</div>}
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
