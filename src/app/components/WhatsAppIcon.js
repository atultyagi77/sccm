// components/WhatsAppIcon.js
// import Link from 'next/link';
import React from 'react'


const WhatsAppIcon = () => {
  const phoneNumber = '9193210809'; // phone number
  const message = `Hello, I'm interested in learning more about your coaching services. Please provide details. Thank you!`; 
  return (
    <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} target="_blank"  rel="noopener noreferrer">
      <img className="h-12" src="/assets/whatsapp.png" alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppIcon;
