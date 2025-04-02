"use client";
import Head from 'next/head';
import HeaderBanner from '@/components/HeaderBanner';
import PackageCards from '@/components/ProductsCards';
import PriceTable from '@/components/PriceTable';
import { useState } from 'react';
import ItinerarySection from '@/components/ItinerarySection';
import CancellationPolicy from '@/components/CancellationPolicy';

export default function Packages() {
  const packagesList = [
    {
      id: 1,
      image: '/img/pr1.jpg',
      name: '1 Night / 2 days',
      places: 'Dhordo',
      itinerary: 'Lunch, Activities, Sunset point, Cultural Shows, Yoga ',
      price: '₹5,500/pp',
    },
    {
      id: 2,
      image: '/img/pr3.jpg',
      name: '2 Night / 3 days',
      places: 'Dhordo, Kala Dungar',
      itinerary: 'All of Day 1 and Kala Dungar and sightseeing',
      price: '₹11,000/pp',
    },
    {
      id: 3,
      image: '/img/pr7.jpg',
      name: '3 Night / 4 days',
      places: 'Dhordo, Kala Dungar, Dholavira',
      itinerary: 'All of Day 1, 2 and Dholavira (Road to heaven) ',
      price: '₹14,500/pp',
    },
    {
      id: 4,
      image: '/img/pr5.jpg',
      name: '4 Night / 5 days',
      places: 'Dhordo, Kala Dungar, Dholavira, Nirona Village ',
      itinerary: 'All of Day 1, 2, 3 and Visit Nirona Village',
      price: '₹19,000/pp',
    },
  ];

  const tariffData = [
    {
      title: "Tariff for Nov 2024, Feb & March 2025 (Excluding Full Moon)",
      data: [
        {
          roomType: "Super Premium Tent",
          prices: [
            { nights: 1, rate: 9500, extraMattress: 5000 },
            { nights: 2, rate: 18000, extraMattress: 10000 },
            { nights: 3, rate: 25500, extraMattress: 15000 },
            { nights: 4, rate: 23500, extraMattress: 20000 },
          ],
        },
        {
          roomType: "Premium Tent",
          prices: [
            { nights: 1, rate: 8500, extraMattress: 5000 },
            { nights: 2, rate: 16000, extraMattress: 10000 },
            { nights: 3, rate: 23000, extraMattress: 15000 },
            { nights: 4, rate: 29500, extraMattress: 20000 },
          ],
        },
        {
          roomType: "Deluxe AC Swiss Cottage",
          prices: [
            { nights: 1, rate: 7500, extraMattress: 5000 },
            { nights: 2, rate: 14000, extraMattress: 10000 },
            { nights: 3, rate: 20000, extraMattress: 15000 },
            { nights: 4, rate: 25500, extraMattress: 20000 },
          ],
        },
        {
          roomType: "Non AC Swiss Cottage",
          prices: [
            { nights: 1, rate: 5500, extraMattress: 4000 },
            { nights: 2, rate: 11000, extraMattress: 8000 },
            { nights: 3, rate: 14500, extraMattress: 12000 },
            { nights: 4, rate: 19000, extraMattress: 16000 },
          ],
        },
      ],
    },
    {
      title: "Tariff for Nov 2024, Feb & March 2025 (Full Moon) & Dec & Jan (Excluding Full Moon & Christmas Period)",
      data: [
        {
          roomType: "Super Premium Tent",
          prices: [
            { nights: 1, rate: 11500, extraMattress: 5500 },
            { nights: 2, rate: 21500, extraMattress: 11000 },
            { nights: 3, rate: 31000, extraMattress: 16500 },
            { nights: 4, rate: 41000, extraMattress: 22000 },
          ],
        },
        {
          roomType: "Premium Tent",
          prices: [
            { nights: 1, rate: 10500, extraMattress: 5500 },
            { nights: 2, rate: 19500, extraMattress: 11000 },
            { nights: 3, rate: 28500, extraMattress: 16500 },
            { nights: 4, rate: 37500, extraMattress: 22000 },
          ],
        },
        {
          roomType: "Deluxe AC Swiss Cottage",
          prices: [
            { nights: 1, rate: 9000, extraMattress: 5500 },
            { nights: 2, rate: 16500, extraMattress: 11000 },
            { nights: 3, rate: 23000, extraMattress: 16500 },
            { nights: 4, rate: 30000, extraMattress: 22000 },
          ],
        },
        {
          roomType: "Non AC Swiss Cottage",
          prices: [
            { nights: 1, rate: 7500, extraMattress: 4500 },
            { nights: 2, rate: 13500, extraMattress: 9000 },
            { nights: 3, rate: 17500, extraMattress: 13500 },
            { nights: 4, rate: 23000, extraMattress: 18000 },
          ],
        },
      ],
    },
    {
      title: "Tariff for Dec 2024 & Jan 2025 (20th Dec 2024 - 31st Dec 2024) & Full Moon",
      data: [
        {
          roomType: "Super Premium Tent",
          prices: [
            { nights: 1, rate: 13000, extraMattress: 5500 },
            { nights: 2, rate: 23500, extraMattress: 11000 },
            { nights: 3, rate: 34000, extraMattress: 16500 },
            { nights: 4, rate: 44000, extraMattress: 22000 },
          ],
        },
        {
          roomType: "Premium Tent",
          prices: [
            { nights: 1, rate: 12000, extraMattress: 5500 },
            { nights: 2, rate: 21500, extraMattress: 11000 },
            { nights: 3, rate: 31000, extraMattress: 16500 },
            { nights: 4, rate: 40000, extraMattress: 22000 },
          ],
        },
        {
          roomType: "Deluxe AC Swiss Cottage",
          prices: [
            { nights: 1, rate: 10500, extraMattress: 5500 },
            { nights: 2, rate: 18500, extraMattress: 11000 },
            { nights: 3, rate: 25500, extraMattress: 16500 },
            { nights: 4, rate: 34500, extraMattress: 22000 },
          ],
        },
        {
          roomType: "Non AC Swiss Cottage",
          prices: [
            { nights: 1, rate: 8500, extraMattress: 4500 },
            { nights: 2, rate: 15000, extraMattress: 9000 },
            { nights: 3, rate: 21500, extraMattress: 13500 },
            { nights: 4, rate: 29500, extraMattress: 18000 },
          ],
        },
      ],
    },
    {
      title: "All Days",
      data: [
        {
          roomType: "Darbar Suite (4 Pax)",
          prices: [
            { nights: 1, rate: 55000, extraMattress: 15000 },
            { nights: 2, rate: 105000, extraMattress: 22500 },
            { nights: 3, rate: 141000, extraMattress: 30000 },
            { nights: 4, rate: 176000, extraMattress: 37500 },
          ],
        },
        {
          roomType: "Rajwadi Suite (2 Pax)",
          prices: [
            { nights: 1, rate: 35000, extraMattress: 10000 },
            { nights: 2, rate: 65000, extraMattress: 15000 },
            { nights: 3, rate: 90000, extraMattress: 22500 },
            { nights: 4, rate: 122500, extraMattress: 30000 },
          ],
        },
      ],
    },
  ]
  
  const [selectedNight, setSelectedNight] = useState<number | null>(1);

  const handlePackageSelect = (nightIndex: number) => {
    setSelectedNight(nightIndex);
  };

  return (
    <>
      <Head>
        <title>Tours and Travels - Packages</title>
      </Head>
      <HeaderBanner
        bgImage="/img/_RC10943.jpg" // Change to your image path
        title="Our Packages"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Packages" }
        ]}
      />
      <PackageCards packages={packagesList} selectedNight={selectedNight} onSelect={handlePackageSelect}/>
      <PriceTable tariffData={tariffData} selectedNight={selectedNight} onSelect={handlePackageSelect}/>
      <ItinerarySection />
      <CancellationPolicy />
    </>
  );
}