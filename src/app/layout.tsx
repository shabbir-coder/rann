/* eslint-disable @typescript-eslint/no-unused-vars */
import "../styles/globals.css";
import "../styles/bootstrap.min.css";
import { ReactNode } from "react";
import { Metadata } from "next";

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
      "Rann Utsav Gujarat 2026-27 | White Rann Festival | Book Tent City Dhordo",
    template: "%s | Rann Utsav Gujarat",
  },

  description:
    "Book Rann Utsav Gujarat 2026-27 packages with Tent City Dhordo stays, White Rann of Kutch sightseeing, cultural programs, local Kutchi cuisine and desert safari experiences. Compare prices and reserve your Rann Utsav tour online.",

  applicationName: "Rann Utsav Gujarat",

  keywords: [
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

    // Tent City / Dhordo
    "Rann Utsav Tent City",
    "Tent City Dhordo",
    "Dhordo Tent Booking",
    "Luxury Tent Booking",
    "Dhordo Gujarat",
    "Dhordo Village Kutch",
    "Tent City Dholavira",

    // White Rann / Desert
    "White Rann Festival",
    "White Rann of Kutch",
    "White Desert Gujarat",
    "Kachchh White Desert",

    // Rann of Kutch generic (high volume)
    "Rann of Kutch",
    "Rann of Kutch Festival",
    "Rann of Kutch Packages",
    "Great Rann of Kutch",
    "Little Rann of Kutch",
    "Rann of Kachchh",

    // Kutch / Gujarat tourism
    "Kutch Festival",
    "Kachchh Festival",
    "Kutch Tour Packages",
    "Kutch Travel Packages",
    "Kutch Holiday Packages",
    "Gujarat Kutch Tour Packages",
    "Kutch Tourism",
    "Gujarat Tourism",
    "Desert Festival Gujarat",

    // Travel/route intent
    "Ahmedabad to Kutch",
    "Dholavira Tent City",
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
      "Rann Utsav Gujarat 2026-27 | White Rann Festival | Book Tent City Dhordo",

    description:
      "Book Rann Utsav Gujarat packages with Tent City Dhordo stays, White Rann of Kutch sightseeing, cultural programs and desert experiences in Kutch.",

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
      "Rann Utsav Gujarat 2026-27 | White Rann Festival | Book Online",

    description:
      "Explore Tent City, White Rann, cultural programs and local cuisine. Book your Rann Utsav Gujarat package online.",

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