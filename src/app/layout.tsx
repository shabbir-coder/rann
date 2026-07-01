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
      "Rann Utsav Gujarat 2026-27 | White Rann Festival | Book Tent City",
    template: "%s | Rann Utsav Gujarat",
  },

  description:
    "Explore the beauty of Rann Utsav Gujarat 2026-27 with Tent City stays, White Rann sightseeing, cultural programs, local cuisine and unforgettable desert experiences in Kutch. Book your Rann Utsav package online.",

  applicationName: "Rann Utsav Gujarat",

  keywords: [
    "Rann Utsav",
    "Rann Utsav Gujarat",
    "Rann Utsav 2026",
    "Rann Utsav 2027",
    "White Rann Festival",
    "White Rann",
    "White Desert Gujarat",
    "Rann of Kutch",
    "Rann Utsav Booking",
    "Book Rann Utsav",
    "Tent City Dhordo",
    "Tent City Gujarat",
    "Dhordo Tent Booking",
    "Luxury Tent Booking",
    "Rann Utsav Packages",
    "Rann Utsav Price",
    "Rann Utsav Accommodation",
    "Kutch Tourism",
    "Gujarat Tourism",
    "Kutch Festival",
    "Desert Festival Gujarat",
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
      "Rann Utsav Gujarat 2026-27 | White Rann Festival | Book Tent City",

    description:
      "Explore the beauty of Rann Utsav Gujarat with Tent City stays, White Rann sightseeing, cultural programs, local cuisine and unforgettable desert experiences in Kutch.",

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