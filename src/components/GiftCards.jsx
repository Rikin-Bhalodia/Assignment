import React from 'react';
import Button from './common/Button';
import Input from './common/Input';

const GiftCards = ({ code, onInput, onRedeem, status, message, demoCodes }) => (
  <div>
    <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
      <span className="material-symbols-outlined text-2xl">card_giftcard</span> Redeem Gift Card
    </h2>
    <p className="text-gray-500 text-sm mb-4">Enter your gift card code to add credit to your Trendies account</p>
    <div className="mb-6">
      <Input
        value={code}
        onChange={onInput}
        placeholder="Enter your gift card code"
        className="mb-2"
      />
      <Button
        className={`w-full ${status === 'success' ? 'bg-green-500 text-white' : status === 'error' ? 'bg-red-500 text-white' : ''}`}
        variant={status === 'success' || status === 'error' ? undefined : 'gradient'}
        onClick={onRedeem}
      >
        Redeem Gift Card
      </Button>
      {status === 'success' && (
        <div className="mt-4 bg-green-50 border border-green-200 text-green-700 rounded-lg p-3 text-center animate-fadeInUp">
          <span className="font-semibold">Welcome gift card redeemed successfully!</span><br />
          {message}
        </div>
      )}
      {status === 'error' && (
        <div className="mt-4 bg-red-50 border border-red-200 text-red-700 rounded-lg p-3 text-center animate-fadeInUp">
          <span className="font-semibold">{message}</span>
        </div>
      )}
    </div>
    <div>
      <h3 className="text-gray-700 font-semibold mb-2">Demo Gift Codes</h3>
      <p className="text-gray-400 text-xs mb-2">Use these codes to test the redemption feature</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {demoCodes.map(code => (
          <div key={code} className="bg-gray-100 rounded px-2 py-1 text-center font-mono text-sm select-all cursor-pointer hover:bg-gray-200 transition-colors duration-200">{code}</div>
        ))}
      </div>
    </div>
  </div>
);

export default GiftCards; 