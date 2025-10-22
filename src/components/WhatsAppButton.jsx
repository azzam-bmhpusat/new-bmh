import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '6285697779888';
  const message = 'Halo, saya ingin bertanya tentang layanan BMH';

  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 flex items-center justify-center transition duration-1000 rounded-full shadow-lg bg-emerald-400 bottom-6 right-6 w-14 h-14 hover:bg-emerald-500 hover:focus:outline-2 hover:focus:outline-offset-2 hover:focus:lime-400 animate-bounce"
      aria-label="Chat WhatsApp"
    >
      <FaWhatsapp className="text-2xl text-white" />
    </a>
  );
};

export default WhatsAppButton;
