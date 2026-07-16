/* eslint-disable @typescript-eslint/no-unused-vars */
import "../styles/globals.css";
import "../styles/bootstrap.min.css";
import { ReactNode } from "react";
import { Metadata } from "next";
import Script from "next/script";

import BootstrapClient from "@/utils/BootstrapClient";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { EnquiryProvider } from "@/components/EnquiryContext";
import FloatingEnquiryButton from "@/components/FloatingEnquiryButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rannutsavgujarat.net"),

  title: {
    default:
      "Rann Utsav Gujarat 2026-27 | Rann of Kutch Festival | White Rann Tent City Dhordo",
    template: "%s | Rann Utsav Gujarat",
  },

  description:
    "Visit the Rann of Kutch (Rann of Kachchh) at Rann Utsav Gujarat 2026-27. Book Tent City Dhordo stays, White Rann of Kutch sightseeing, cultural programs, Kutchi cuisine & desert safari. Compare prices and reserve your Great Rann of Kutch tour online.",

  applicationName: "Rann Utsav Gujarat",

  keywords: [
    // Highest volume (500K) — Rann of Kutch core cluster
    "Rann of Kutch",
    "Rann of Kachchh",
    "Great Rann of Kutch",
    "Great Rann of Kutch Gujarat",
    "Gujarat Kutch Rann",
    "Kachchh Ka Ran",
    "Kutch Ka Rann",
    "Kutch Ka Rann Gujarat",
    "Bhuj and Kutch",
    "Rann of Kutch Desert",

    // High volume (50K)
    "Rannutsav",
    "Rann of Kutch Festival",
    "Great Rann of Kutch Festival",
    "Gujarat Rann of Kutch Festival",
    "Rann of Kachchh Festival",
    "Rann of Kutch Fest",

    // Brand / primary
    "Rann Utsav",
    "Rann Utsav Gujarat",
    "Rann Utsav 2026",
    "Rann Utsav 2027",
    "Rann Utsav Booking",
    "Book Rann Utsav",
    "Rann Utsav Package",
    "Rann Utsav Packages",
    "Rann Utsav Price",
    "Rann Utsav Accommodation",
    "Rann Utsav Tent City",
    "Rann Utsav Dates",
    "Rann Utsav Start Date",

    // Tent City / Dhordo
    "Tent City Dhordo",
    "Dhordo Tent Booking",
    "Dhordo Gujarat",
    "Dhordo Kutch",
    "Dhordo Village",
    "Dhordo Village Kutch",
    "Tent City Dholavira",
    "Dholavira Tent City",

    // White Rann / Desert
    "White Rann Festival",
    "White Rann of Kutch",
    "White Desert Gujarat",
    "Kachchh White Desert",
    "White Desert in Kutch",
    "White Desert in Bhuj",
    "Kutch Safed Rann",
    "Salt Desert Gujarat",

    // Kutch / Gujarat tourism
    "Kutch Festival",
    "Kachchh Festival",
    "Kutch Tour Packages",
    "Kutch Travel Packages",
    "Kutch Holiday Packages",
    "Gujarat Kutch Tour Packages",
    "Kutch Tourism",
    "Gujarat Tourism",
    "Little Rann of Kutch",
    "Little Rann of Kachchh",
    "Chota Rann of Kutch",
    "Kite Festival Rann of Kutch",
    "Full Moon Rann Utsav",

    // Travel/route intent
    "Ahmedabad to Kutch",
    "Ahmedabad to Rann of Kutch",
    "Bhuj Rann of Kutch",
    "Dholavira Rann of Kutch",
  ],

  authors: [
    {
      name: "Rann Utsav Gujarat",
      url: "https://www.rannutsavgujarat.net",
    },
  ],

  creator: "Rann Utsav Gujarat",
  publisher: "Rann Utsav Gujarat",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.rannutsavgujarat.net",
    siteName: "Rann Utsav Gujarat",

    title:
      "Rann Utsav 2026-27 | Rann of Kutch Festival | White Rann Tent City Dhordo",

    description:
      "Visit the Rann of Kutch at Rann Utsav Gujarat 2026-27. Book Tent City Dhordo stays, White Rann of Kutch sightseeing, cultural programs and desert experiences in Kutch.",

    images: [
      {
        url: "/img/Dhordo_0471.jpg",
        width: 1200,
        height: 630,
        alt: "Rann Utsav Tent City Dhordo White Rann",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Rann Utsav 2026-27 | Rann of Kutch Festival | Book Online",

    description:
      "Explore the Rann of Kutch, Tent City, White Rann, cultural programs and local cuisine. Book your Rann Utsav Gujarat package online.",

    images: ["/img/Dhordo_0471.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  verification: {
    google: "X-r2tcgRjSIYWoM6zAyziozpunBrPLMkbdMHASoKtJM",
  },

  category: "Travel",

  referrer: "origin-when-cross-origin",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Quicksand:wght@500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Icons */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#ffffff" />

        {/* Secure Privacy - consent banner script, loaded as early as possible */}
        <Script
          src="https://app.secureprivacy.ai/script/6a5735316f27920a373dae5f.js"
          strategy="beforeInteractive"
        />

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZPJZKJGZEN"
          strategy="afterInteractive"
        />
        <Script id="google-tag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZPJZKJGZEN');
          `}
        </Script>
      </head>

      <body>
        <BootstrapClient />

        <EnquiryProvider>
          <Header />
          <Navbar />
          {children}
          <Footer />
          <FloatingEnquiryButton />
        </EnquiryProvider>

        {/* Event Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Rann Utsav Gujarat 2026-27",

              startDate: "2026-09-01",
              endDate: "2027-02-28",

              eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",

              eventStatus:
                "https://schema.org/EventScheduled",

              image: [
                "https://www.rannutsavgujarat.net/img/Dhordo_0471.jpg",
              ],

              description:
                "Explore Rann Utsav Gujarat 2026-27 with Tent City accommodation, White Rann sightseeing, cultural performances, local cuisine and unforgettable desert experiences in Kutch.",

              location: {
                "@type": "Place",
                name: "Tent City Dhordo",

                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Dhordo",
                  addressRegion: "Gujarat",
                  postalCode: "370510",
                  addressCountry: "IN",
                },
              },

              organizer: {
                "@type": "Organization",
                name: "Rann Utsav Gujarat",
                url: "https://www.rannutsavgujarat.net",
              },

              offers: {
                "@type": "Offer",
                url: "https://www.rannutsavgujarat.net/packages",
                availability: "https://schema.org/InStock",
                priceCurrency: "INR",
              },
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Rann Utsav Gujarat",
              url: "https://www.rannutsavgujarat.net",
              logo:
                "https://www.rannutsavgujarat.net/img/logo.png",
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  );
}