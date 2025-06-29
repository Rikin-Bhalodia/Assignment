import React from 'react';

const Input = React.forwardRef(({ label, error, className = '', ...props }, ref) => (
  <div className="mb-2">
    {label && <label className="block text-gray-700 font-medium mb-1">{label}</label>}
    <input
      ref={ref}
      className={`w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white/70 ${error ? 'border-red-400' : ''} ${className}`}
      {...props}
    />
    {error && <div className="text-xs text-red-500 mt-1">{error}</div>}
  </div>
));

export default Input; 