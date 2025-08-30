/* eslint-disable @typescript-eslint/no-unused-vars */
import '../styles/globals.css';
import '../styles/bootstrap.min.css';
import { ReactNode } from 'react';

import BootstrapClient from "@/utils/BootstrapClient";
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
    <head>
    <meta charSet="utf-8" />
        <title>Official Rann Utsav Tent City Dhordo 2025-26</title>

          <meta
          name="description"
          content="Book your stay at Rann Utsav Tent City Dhordo 2025-26. Luxury tents, traditional food, cultural programs & White Rann views. Reserve today!"
        />
        <meta
          name="keywords"
          content="
          Rann Utsav Tent City, Rann Utsav Booking, Rann Utsav Tents, Rann Utsav City, Tent City Dhordo 2025, Rann Utsav Tent 2025-26, Rann Utsav Packages, Rann Utsav Online Booking, Rann Utsav Tent Price, Rann Utsav Accommodation, Dhordo Tent City Booking, Rann Utsav Festival 2025, Rann Utsav Festival 2026, Kutch Rann Utsav Tent City, Rann Utsav Gujarat Tourism, Rann Utsav Luxury Tents, Rann Utsav Dhordo Camp, White Rann Tent City, Rann Utsav Cultural Programs, Rann Utsav Food and Stay, Book Rann Utsav Tent Online
          "
        />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta name="google-site-verification" content="X-r2tcgRjSIYWoM6zAyziozpunBrPLMkbdMHASoKtJM" />
        
        <link rel="canonical" href="https://www.rannutsaftentcity.net/" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Official Rann Utsav Tent City Dhordo 2025-26" />
        <meta
          property="og:description"
          content="Discover the vibrant spirit of Rann Utsav – luxury tents, cultural programs & breathtaking White Rann views. Book now!"
        />
        <meta property="og:url" content="https://www.rannutsaftentcity.net/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/img/Dhordo_0471.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Official Rann Utsav Tent City Dhordo 2025-26" />
        <meta
          name="twitter:description"
          content="Book your Rann Utsav Tent City 2025-26 stay. Luxury tents, food & White Rann views."
        />
        <meta name="twitter:image" content="/img/Dhordo_0471.jpg" />


        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Quicksand:wght@600;700&display=swap" rel="stylesheet" />
        
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
                {/* Structured Data - Event Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Rann Utsav Tent City Dhordo 2025-26",
            "startDate": "2025-11-01",
            "endDate": "2026-02-28",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventScheduled",
            "location": {
              "@type": "Place",
              "name": "Tent City Dhordo",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dhordo",
                "addressRegion": "Gujarat",
                "addressCountry": "IN"
              }
            },
            "image": "https://www.rannutsaftentcity.net/og-image.jpg",
            "description": "Book luxury tents at Rann Utsav Tent City Dhordo 2025-26. Traditional food, cultural programs & White Rann views.",
            "offers": {
              "@type": "Offer",
              "url": "https://www.rannutsaftentcity.net/booking",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            }
          })
        }} />
    </head>
    <body>
      <BootstrapClient />
      <Header />
      <Navbar />
      {children}
      <Footer />
    </body>
  </html>
  );
}