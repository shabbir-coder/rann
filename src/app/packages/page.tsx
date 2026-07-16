"use client";
import Head from 'next/head';
import HeaderBanner from '@/components/HeaderBanner';
import PriceTable from '@/components/PriceTable';
import { useState } from 'react';
import ItinerarySection from '@/components/ItinerarySection';
import CancellationPolicy from '@/components/CancellationPolicy';

const tariffData = [
  {
    title: "Tariff for November, February & March 2026-27 (Excluding Full Moon & Diwali)",
    data: [
      {
        roomType: "Super Premium Tent",
        prices: [
          { nights: 1, rate: 10300, extraMattress: 5500 },
          { nights: 2, rate: 20600, extraMattress: 11000 },
          { nights: 3, rate: 30900, extraMattress: 16500 },
        ],
      },
      {
        roomType: "Premium Tent",
        prices: [
          { nights: 1, rate: 9300, extraMattress: 5500 },
          { nights: 2, rate: 18600, extraMattress: 11000 },
          { nights: 3, rate: 27900, extraMattress: 16500 },
        ],
      },
      {
        roomType: "Deluxe AC Swiss Cottage",
        prices: [
          { nights: 1, rate: 8300, extraMattress: 4500 },
          { nights: 2, rate: 16600, extraMattress: 9000 },
          { nights: 3, rate: 24900, extraMattress: 13500 },
        ],
      },
      {
        roomType: "Non AC Swiss Cottage",
        prices: [
          { nights: 1, rate: 6300, extraMattress: 4500 },
          { nights: 2, rate: 12600, extraMattress: 9000 },
          { nights: 3, rate: 18900, extraMattress: 13500 },
        ],
      },
    ],
  },
  {
    title:
      "Tariff for November & February 2026-27 (Full Moon & Diwali: 8th-14th Nov) and December & January (Excluding Full Moon & Christmas Week)",
    data: [
      {
        roomType: "Super Premium Tent",
        prices: [
          { nights: 1, rate: 12300, extraMattress: 6000 },
          { nights: 2, rate: 24100, extraMattress: 12000 },
          { nights: 3, rate: 35400, extraMattress: 18000 },
        ],
      },
      {
        roomType: "Premium Tent",
        prices: [
          { nights: 1, rate: 11300, extraMattress: 6000 },
          { nights: 2, rate: 22100, extraMattress: 12000 },
          { nights: 3, rate: 32400, extraMattress: 18000 },
        ],
      },
      {
        roomType: "Deluxe AC Swiss Cottage",
        prices: [
          { nights: 1, rate: 10300, extraMattress: 5000 },
          { nights: 2, rate: 20100, extraMattress: 10000 },
          { nights: 3, rate: 29400, extraMattress: 15000 },
        ],
      },
      {
        roomType: "Non AC Swiss Cottage",
        prices: [
          { nights: 1, rate: 8300, extraMattress: 5000 },
          { nights: 2, rate: 16100, extraMattress: 10000 },
          { nights: 3, rate: 23400, extraMattress: 15000 },
        ],
      },
    ],
  },
  {
    title: "Tariff for December & January (Full Moon & Christmas: 18th Dec 2026 - 2nd Jan 2027)",
    data: [
      {
        roomType: "Super Premium Tent",
        prices: [
          { nights: 1, rate: 14300, extraMattress: 6000 },
          { nights: 2, rate: 26600, extraMattress: 12000 },
          { nights: 3, rate: 38900, extraMattress: 18000 },
        ],
      },
      {
        roomType: "Premium Tent",
        prices: [
          { nights: 1, rate: 13300, extraMattress: 6000 },
          { nights: 2, rate: 24600, extraMattress: 12000 },
          { nights: 3, rate: 35900, extraMattress: 18000 },
        ],
      },
      {
        roomType: "Deluxe AC Swiss Cottage",
        prices: [
          { nights: 1, rate: 12300, extraMattress: 5000 },
          { nights: 2, rate: 22600, extraMattress: 10000 },
          { nights: 3, rate: 32900, extraMattress: 15000 },
        ],
      },
      {
        roomType: "Non AC Swiss Cottage",
        prices: [
          { nights: 1, rate: 10300, extraMattress: 5000 },
          { nights: 2, rate: 18600, extraMattress: 10000 },
          { nights: 3, rate: 26900, extraMattress: 15000 },
        ],
      },
    ],
  },
  {
    title: "All Days (1st November 2026 to 7th March 2027)",
    data: [
      {
        roomType: "Darbar Suite (4 Pax)",
        prices: [
          { nights: 1, rate: 70000, extraMattress: 7750 },
          { nights: 2, rate: 140000, extraMattress: 15500 },
          { nights: 3, rate: 210000, extraMattress: 23250 },
        ],
      },
      {
        roomType: "Rajwadi Suite (2 Pax)",
        prices: [
          { nights: 1, rate: 35000, extraMattress: 7750 },
          { nights: 2, rate: 70000, extraMattress: 15500 },
          { nights: 3, rate: 105000, extraMattress: 23250 },
        ],
      },
    ],
  },
];

export default function Packages() {
  const [selectedNight, setSelectedNight] = useState<number | null>(1);

  const handlePackageSelect = (nightIndex: number) => {
    setSelectedNight(nightIndex);
  };

  return (
    <>
      <Head>
        <title>Rannutsav - Packages</title>
      </Head>
      <HeaderBanner
        bgImage="/img/bg1-lg.jpg"
        title="Our Packages"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Packages" }
        ]}
      />
      <PriceTable tariffData={tariffData} selectedNight={selectedNight} onSelect={handlePackageSelect}/>
      <ItinerarySection />
      <CancellationPolicy />
    </>
  );
}