'use client';

import { createContext, useContext, useRef, ReactNode } from 'react';
import EnquiryPopup from './enquiryPopup';

interface EnquiryContextType {
  openModal: () => void;
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

export const useEnquiry = () => {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error('useEnquiry must be used within EnquiryProvider');
  }
  return context;
};

interface EnquiryProviderProps {
  children: ReactNode;
}

export const EnquiryProvider = ({ children }: EnquiryProviderProps) => {
  const enquiryRef = useRef<{ openModal: () => void }>(null);

  const openModal = () => {
    enquiryRef.current?.openModal();
  };

  return (
    <EnquiryContext.Provider value={{ openModal }}>
      {children}
      <EnquiryPopup ref={enquiryRef} />
    </EnquiryContext.Provider>
  );
};