'use client';

import { useEnquiry } from './EnquiryContext';

const FloatingEnquiryButton = () => {
  const { openModal } = useEnquiry();

  const handleClick = () => {
    openModal();
  };

  return (
    <button
      onClick={handleClick}
      className="floating-enquiry-btn"
      aria-label="Open Enquiry Form"
    >
      <i className="fas fa-envelope"></i>
    </button>
  );
};

export default FloatingEnquiryButton;