/* eslint-disable @next/next/no-page-custom-font */
"use client"
import "@fortawesome/fontawesome-free/css/all.min.css";
import MainSection from '@/components/MainSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import RoomsSection from '@/components/RoomsSection';
import FaqSection from '@/components/FaqSection';
import ShowMoreSection from '@/components/ShowMoreSection';

export default function Home() {

  return (
    <>
      <MainSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <RoomsSection />
      <FaqSection />
      <ShowMoreSection />
    </>
  );
}