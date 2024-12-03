import React, { useEffect } from 'react';

const AIGame: React.FC = () => {
  const connectWallet = async () => {
    const { WalletAdapterNetwork, PhantomWalletAdapter } = window['@solana/wallet-adapter'] as any;
    const { Connection, clusterApiUrl } = window['@solana/web3.js'] as any;

    const network = WalletAdapterNetwork.Mainnet; // Change to 'Testnet' for testing
    const connection = new Connection(clusterApiUrl(network));
    const phantomWallet = new PhantomWalletAdapter();

    if (!phantomWallet.connected) {
      try {
        await phantomWallet.connect();
        const publicKey = phantomWallet.publicKey.toString();
        console.log('Connected to wallet:', publicKey);
        alert('Connected wallet: ' + publicKey);
      } catch (err) {
        console.error('Failed to connect wallet:', err);
      }
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <div className="bg-black/60 rounded-xl backdrop-blur-md border border-red-500/20 p-6  mx-auto">
      <h1 className="text-xl font-bold text-red-400">Live Chat with Mici</h1>
      <iframe 
        src="https://vvaifu.fun/character/674ababc24f878eda0c2ce62" 
        width="100%" 
        height="1000px" 
        scrolling='no'
        style={{ border: 'none' }} 
        allowFullScreen>
      </iframe>
    </div>
  );
};

export default AIGame;
