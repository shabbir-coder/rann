/* eslint-disable @typescript-eslint/no-unused-vars */
import '../styles/globals.css';
import '../styles/bootstrap.min.css'
import { ReactNode } from 'react';

import BootstrapClient from "@/utils/BootstrapClient";
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
    <Head>
    <meta charSet="utf-8" />
        <title>Tours and Travels - Home</title>
        <meta name="description" content="Discover amazing tours and travel packages with Tours and Travels. Book your dream vacation today!" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="" name="keywords" />
        <meta content="" name="description" />
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
    </Head>
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