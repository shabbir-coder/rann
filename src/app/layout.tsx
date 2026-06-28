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
    default: "Official Rann Utsav Tent City Dhordo 2025-26 | Book Luxury Tents",
    template: "%s | Rann Utsav Gujarat",
  },

  description:
    "Book Official Rann Utsav Tent City Dhordo 2025-26 packages. Experience luxury tents, White Rann, cultural performances, local cuisine, sightseeing and unforgettable desert adventures in Kutch, Gujarat.",

  applicationName: "Rann Utsav Gujarat",

  keywords: [
    "Rann Utsav",
    "Rann Utsav Gujarat",
    "Rann Utsav 2025",
    "Rann Utsav 2026",
    "Rann Utsav Booking",
    "Rann Utsav Online Booking",
    "Tent City Dhordo",
    "Dhordo Tent Booking",
    "White Rann",
    "White Desert Gujarat",
    "Rann of Kutch",
    "Kutch Tourism",
    "Luxury Tent Booking",
    "Rann Utsav Packages",
    "Rann Utsav Price",
    "Rann Utsav Accommodation",
    "Kutch Festival",
    "Gujarat Tourism",
    "White Rann Festival",
    "Dhordo Gujarat",
    "Rann Utsav Official",
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
      "Official Rann Utsav Tent City Dhordo 2025-26 | Book Luxury Tents",

    description:
      "Book luxury tents at Tent City Dhordo for Rann Utsav 2025-26. Enjoy White Rann, cultural performances, sightseeing, delicious Gujarati cuisine and premium accommodation.",

    images: [
      {
        url: "/img/Dhordo_0471.jpg",
        width: 1200,
        height: 630,
        alt: "Official Rann Utsav Tent City Dhordo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Official Rann Utsav Tent City Dhordo 2025-26 | Book Online",

    description:
      "Book luxury tents in Tent City Dhordo for Rann Utsav Gujarat 2025-26.",

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
              name: "Rann Utsav Tent City Dhordo 2025-26",

              startDate: "2025-11-01",
              endDate: "2026-02-28",

              eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",

              eventStatus:
                "https://schema.org/EventScheduled",

              image: [
                "https://www.rannutsavgujarat.net/img/Dhordo_0471.jpg",
              ],

              description:
                "Official Rann Utsav Tent City booking in Dhordo, Gujarat. Luxury tents, cultural performances, White Rann sightseeing and delicious Gujarati cuisine.",

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