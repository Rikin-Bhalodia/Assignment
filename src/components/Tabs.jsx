import React from 'react';
import Button from './common/Button';

const Tabs = ({ tab, setTab }) => (
  <div className="flex bg-white rounded-lg shadow-sm overflow-hidden mb-6">
    <Button
      variant={tab === 'payment' ? 'gradient' : ''}
      className={`flex-1 py-3 text-center text-base font-medium flex items-center justify-center gap-2 rounded-none ${tab === 'payment' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:bg-gray-50'}`}
      onClick={() => setTab('payment')}
    >
      <span className="material-symbols-outlined text-lg">credit_card</span> Payment Methods
    </Button>
    <Button
      variant={tab === 'gift' ? 'gradient' : ''}
      className={`flex-1 py-3 text-center text-base font-medium flex items-center justify-center gap-2 rounded-none ${tab === 'gift' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:bg-gray-50'}`}
      onClick={() => setTab('gift')}
    >
      <span className="material-symbols-outlined text-lg">card_giftcard</span> Gift Cards
    </Button>
  </div>
);

export default Tabs; 