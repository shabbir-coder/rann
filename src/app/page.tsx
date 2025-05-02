/* eslint-disable @next/next/no-page-custom-font */
"use client"
import "@fortawesome/fontawesome-free/css/all.min.css";
import MainSection from '@/components/MainSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import RoomsSection from '@/components/RoomsSection';
import EnquiryPopup from "@/components/enquiryPopup";
// import "bootstrap/dist/css/bootstrap.min.css";

// import Spinner from '@/components/Spinner';
// import Hero from '../components/Hero';
// import Footer from '../components/Footer';

export default function Home() {

  return (
    <>
      <MainSection />
      <AboutSection />
      {/* <FactsSection /> */}
      <ServicesSection />
      <GallerySection />
      <RoomsSection />
      <EnquiryPopup />    
    </>
  );
}