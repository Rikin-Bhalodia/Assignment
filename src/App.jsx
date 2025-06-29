import { useState, useEffect } from 'react'
import PaymentMethods from './components/PaymentMethods'
import AddCardForm from './components/AddCardForm'
import GiftCards from './components/GiftCards'
import Tabs from './components/Tabs'

const demoGiftCodes = ['WELCOME50', 'FRIEND10', 'SAVE25', 'TRENDIES100'];
const LS_KEY = 'trendies_cards';

function App() {
  const [tab, setTab] = useState('payment');
  const [cards, setCards] = useState([]);
  const [showAddCard, setShowAddCard] = useState(false);
  const [editCard, setEditCard] = useState(null); // card object or null
  const [giftCode, setGiftCode] = useState('');
  const [giftStatus, setGiftStatus] = useState(null); // null | 'success' | 'error'
  const [giftMessage, setGiftMessage] = useState('');

  // Load cards from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(LS_KEY);
    if (stored) {
      try {
        const parsedCards = JSON.parse(stored);
        setCards(parsedCards);
      } catch (error) {
        console.error('Error parsing stored cards:', error);
        localStorage.removeItem(LS_KEY);
        setCards([]);
      }
    }
  }, []);

  // Save cards to localStorage on change
  useEffect(() => {
    if (cards.length > 0) {
      localStorage.setItem(LS_KEY, JSON.stringify(cards));
    } else {
      localStorage.removeItem(LS_KEY);
    }
  }, [cards]);

  // Payment Methods Section
  const handleSetPreferred = (id) => {
    setCards(cards.map(card => ({ ...card, preferred: card.id === id })));
  };
  const handleDeleteCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };
  const handleMuteCard = (id) => {
    setCards(cards.map(card => card.id === id ? { ...card, muted: !card.muted } : card));
  };
  const handleAddCard = (card) => {
    setCards([
      ...cards.map(c => ({ ...c, preferred: card.preferred ? false : c.preferred })),
      { ...card, id: Date.now() },
    ]);
    setShowAddCard(false);
  };
  const handleEditCard = (card) => {
    setEditCard(card);
  };
  const handleUpdateCard = (updatedCard) => {
    setCards(cards.map(card =>
      card.id === updatedCard.id
        ? { ...updatedCard }
        : (updatedCard.preferred ? { ...card, preferred: false } : card)
    ));
    setEditCard(null);
  };

  // Gift Card Section
  const handleRedeemGift = () => {
    if (demoGiftCodes.includes(giftCode.trim().toUpperCase())) {
      setGiftStatus('success');
      setGiftMessage(`$${giftCode.match(/\d+/)?.[0] || '50'} credit added to your account`);
    } else {
      setGiftStatus('error');
      setGiftMessage('Invalid gift card code. Please check your code and try again.');
    }
  };
  const handleGiftInput = (e) => {
    setGiftCode(e.target.value);
    setGiftStatus(null);
    setGiftMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 py-8 px-2 md:px-0 transition-colors duration-500">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">Trendies Wallet</h1>
        <p className="text-gray-500 mb-6">Manage your payment methods and gift cards</p>
        <Tabs tab={tab} setTab={setTab} />
        <div className="bg-white rounded-2xl shadow p-6 transition-all duration-300">
          {tab === 'payment' ? (
            <PaymentMethods
              cards={cards}
              onSetPreferred={handleSetPreferred}
              onDelete={handleDeleteCard}
              onMute={handleMuteCard}
              onAddCard={() => setShowAddCard(true)}
              onEdit={handleEditCard}
            />
          ) : (
            <GiftCards
              code={giftCode}
              onInput={handleGiftInput}
              onRedeem={handleRedeemGift}
              status={giftStatus}
              message={giftMessage}
              demoCodes={demoGiftCodes}
            />
          )}
        </div>
        {showAddCard && (
          <AddCardForm
            onClose={() => setShowAddCard(false)}
            onAdd={handleAddCard}
          />
        )}
        {editCard && (
          <AddCardForm
            onClose={() => setEditCard(null)}
            onAdd={handleUpdateCard}
            editCard={editCard}
            isEdit
          />
        )}
      </div>
      {/* Google Material Icons CDN */}
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
    </div>
  );
}

export default App
