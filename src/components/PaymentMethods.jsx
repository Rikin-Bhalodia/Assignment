import React from 'react';
import Button from './common/Button';

const PaymentMethods = ({ cards, onSetPreferred, onDelete, onAddCard, onEdit }) => (
  <div>
    <div className="flex justify-between items-center mb-4">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Payment Methods</h2>
        <p className="text-sm text-gray-500">Manage your saved cards and payment preferences</p>
      </div>
      <Button
        variant="gradient"
        className="px-5"
        onClick={onAddCard}
      >
        + Add Card
      </Button>
    </div>
    <div className="space-y-4">
      {cards.map(card => (
        <div
          key={card.id}
          className={`flex items-center justify-between p-4 rounded-xl border ${card.preferred ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'} bg-gray-50 transition-shadow duration-200 hover:shadow-lg`}
        >
          <div className="flex gap-4 items-center">
            <span className="text-3xl text-gray-400 material-symbols-outlined">credit_card</span>
            <div>
              <div className="flex gap-2 items-center">
                <span className="font-semibold text-gray-900">Card</span>
                {card.preferred && (
                  <span className="px-2 py-0.5 text-xs font-semibold bg-gray-200 rounded">Preferred</span>
                )}
              </div>
              <div className="font-mono text-lg tracking-widest text-gray-700">**** **** **** {card.cardNumber.slice(-4)  }</div>
              <div className="text-xs text-gray-400">Expires {card.expiry} &bull; {card.name}</div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            {!card.preferred && (
              <button
                className="p-2 rounded cursor-pointer hover:bg-gray-200"
                title="Set as preferred"
                onClick={() => onSetPreferred(card.id)}
              >
                <span className="text-yellow-500 material-symbols-outlined">star</span>
              </button>
            )}
            <button
              className="p-2 text-blue-500 rounded cursor-pointer hover:bg-blue-100"
              title="Edit card"
              onClick={() => onEdit(card)}
            >
              <span className="material-symbols-outlined">edit</span>
            </button>
            <button
              className="p-2 text-red-500 rounded cursor-pointer hover:bg-red-100"
              title="Delete card"
              onClick={() => onDelete(card.id)}
            >
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PaymentMethods; 