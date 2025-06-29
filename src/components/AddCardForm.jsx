import React, { useState, useEffect } from 'react';
import Modal from './common/Modal';
import Input from './common/Input';
import Button from './common/Button';

const AddCardForm = ({ onClose, onAdd, editCard, isEdit }) => {
  const [form, setForm] = useState({
    name: '',
    number: '',
    month: '',
    year: '',
    cvv: '',
    preferred: false,
  });

  console.log({ form, editCard });

  useEffect(() => {
    if (isEdit && editCard) {
      const [month, year] = editCard.expiry.split('/');
      setForm({
        name: editCard.name,
        number: editCard.cardNumber,
        month,
        year,
        cvv: editCard.cvv,
        preferred: editCard.preferred,
        id: editCard.id,
      });
    }
  }, [isEdit, editCard]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };
  const handleNumberChange = (e) => {
    const value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
    const formatted = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    if (formatted.length <= 19) {
      handleChange({
        target: {
          name: 'number',
          value: formatted
        }
      });
    }
  };

  const formatDisplayNumber = (number) => {
    if (!number) return '';
    const cleanNumber = number.replace(/\s/g, '').replace(/\D/g, '');
    if (cleanNumber.length <= 4) return cleanNumber;
    return '**** **** **** ' + cleanNumber.slice(-4);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.number || !form.month || !form.year || !form.cvv) return;
    const cardData = {
      cardNumber: form.number,
      expiry: `${form.month}/${form.year}`,
      name: form.name,
      preferred: form.preferred,
      muted: false,
      cvv: form.cvv
    };
    if (isEdit && editCard) {
      cardData.id = editCard.id;
      onAdd(cardData);
    } else {
      onAdd(cardData);
    }
  };
  return (
    <Modal onClose={onClose} className="bg-white/30">
      <h2 className="mb-4 text-2xl font-bold text-gray-900">{isEdit ? 'Edit Card' : 'Add New Card'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Cardholder Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
        />
        <Input
          label="Card Number"
          name="number"
          value={form.number}
          onChange={handleNumberChange}
          placeholder="1234 5678 9012 3456"
          maxLength={19}
          required
        // disabled={isEdit}
        />
        <div className="flex gap-2">
          <div className="flex-1">
            <label className="block mb-1 font-medium text-gray-700">Month</label>
            <select
              name="month"
              value={form.month}
              onChange={handleChange}
              className="px-3 py-2 w-full rounded-lg border border-gray-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white/70"
              required
            // disabled={isEdit}
            >
              <option value="">Month</option>
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={String(i + 1).padStart(2, '0')}>{String(i + 1).padStart(2, '0')}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block mb-1 font-medium text-gray-700">Year</label>
            <select
              name="year"
              value={form.year}
              onChange={handleChange}
              className="px-3 py-2 w-full rounded-lg border border-gray-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white/70"
              required
            // disabled={isEdit}
            >
              <option value="">Year</option>
              {[...Array(15)].map((_, i) => {
                const year = new Date().getFullYear() + i;
                return <option key={year} value={String(year)}>{year}</option>;
              })}
            </select>
          </div>
          <div className="flex-1">
            <Input
              label="CVV"
              name="cvv"
              value={form.cvv}
              onChange={handleChange}
              placeholder="123"
              maxLength={3}
              required
            />
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            name="preferred"
            checked={form.preferred}
            onChange={handleChange}
            id="preferred"
            className="cursor-pointer"
          />
          <label htmlFor="preferred" className="text-gray-700 cursor-pointer">Set as preferred payment method</label>
        </div>
        <div className="flex gap-2 mt-6">
          <Button type="button" className="flex-1" variant="default" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" className="flex-1" variant="gradient">
            {isEdit ? 'Update Card' : 'Add Card'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddCardForm; 