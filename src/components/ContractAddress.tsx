import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const ContractAddress = () => {
  const [copied, setCopied] = useState(false);
  const tokenAddress = "8CLsURizURUKvapqq85F4zZWtDeqUZAiFubPyTFBEkgq";

  // Function to shorten address
  const shortenAddress = (address: string) => {
    return `${address.slice(0, 99)}...${address.slice(-4)}`;
  };

  const copyAddress = async () => {
    await navigator.clipboard.writeText(tokenAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="bg-black/40 backdrop-blur-md  border-red-500/10 rounded-xl p-4 mt-4
                     d-flex align-item  space-x-4 transform hover:scale-105 transition-all
                     hover:border-red-500/30"
    >
      <p className="text-gray-400 text-sm m-3">Contract Address</p>
      <div className="flex items-center space-x-2 bg-black/40 p-3 rounded-lg border border-red-500/10 hover:bg-red-500/20 transition-all duration-300">
        <code className="text-xl font-bold text-red-400 overflow-hidden" title={tokenAddress}>
          {shortenAddress(tokenAddress)}
        </code>
        <button
          onClick={copyAddress}
          className="p-2 rounded transition-all duration-300"
          aria-label="Copy contract address"
          title="Copy full address"
        >
          {copied ? (
            <Check className="w-4 h-4 text-red-500 " />
          ) : (
            <Copy className="w-4 h-4 text-red-500" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ContractAddress;