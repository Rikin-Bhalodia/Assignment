import React from 'react';

const Modal = ({ children, onClose }) => (
    <div className="fixed inset-0  backdrop-blur-md bg-white/30  flex items-center justify-center z-50">
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-lg relative animate-fadeInUp border border-gray-200">
      <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer" onClick={onClose}>
        <span className="material-symbols-outlined">close</span>
      </button>
      {children}
    </div>
    <style>{`
      .animate-fadeInUp {
        animation: fadeInUp 0.4s cubic-bezier(.39,.575,.565,1) both;
      }
      @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(40px); }
        100% { opacity: 1; transform: translateY(0); }
      }
    `}</style>
  </div>
);

export default Modal; 