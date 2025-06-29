import React from 'react';

const variants = {
  gradient: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md hover:from-blue-600 hover:to-purple-600',
  danger: 'bg-red-500 text-white hover:bg-red-600',
  default: 'bg-black text-white hover:bg-gray-800',
};

const Button = ({ variant = 'default', className = '', children, ...props }) => (
  <button
    className={`py-2 px-4 rounded-lg transition-all duration-200 cursor-pointer ${variants[variant] || variants.default} ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button; 