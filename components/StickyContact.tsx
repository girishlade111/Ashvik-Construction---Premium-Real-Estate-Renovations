
import React from 'react';
import { WhatsAppIcon, PhoneIcon } from './IconComponents';

const StickyContact: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transform hover:scale-110 transition-all duration-300"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
      <a
        href="tel:+919876543210"
        aria-label="Call us"
        className="bg-[#D4AF37] text-black p-3 rounded-full shadow-lg hover:bg-[#b89a31] transform hover:scale-110 transition-all duration-300"
      >
        <PhoneIcon className="w-7 h-7" />
      </a>
    </div>
  );
};

export default StickyContact;
