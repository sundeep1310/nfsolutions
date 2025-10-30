import React from 'react';
import Image from 'next/image';

const FloatingContacts = () => {
  return (
    <div className="fixed left-[15px] top-[75%] z-50 flex flex-col gap-[6px]">
      {/* WhatsAppIcon */}
      <a
        href="https://wa.me/YOUR_PHONE_NUMBER"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white rounded-full w-[60px] h-[60px] flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <Image
          src="/whatsapp.svg"
          alt="WhatsApp"
          width={60}
          height={60}
          className="object-contain"
        />
      </a>

      {/* Phone Icon */}
      <a
        href="tel:YOUR_PHONE_NUMBER" 
        className="bg-white rounded-full w-[60px] h-[60px] flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-110 "
        aria-label="Call us"
      >
        <Image
          src="/phone.svg"
          alt="Phone"
          width={60}
          height={60}
          className="object-contain"
        />
      </a>
    </div>
  );
};

export default FloatingContacts;