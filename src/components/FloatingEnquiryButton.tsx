'use client';

import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const FloatingEnquiryButton = () => {
  return (
    <div className="floating-buttons">
      <a
        href="tel:+919521265253"
        className="floating-btn phone-btn"
        aria-label="Call us"
      >
        <FaPhone style={{ transform: 'scaleX(-1)' }} />
      </a>
      <a
        href="https://wa.me/919521265253"
        target="_blank"
        className="floating-btn whatsapp-btn"
        aria-label="WhatsApp us"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default FloatingEnquiryButton;