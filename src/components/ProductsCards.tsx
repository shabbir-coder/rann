"use client"
import React from 'react';
// import { FaTent } from "react-icons/fa6";
// import { HiClipboardList } from "react-icons/hi";
import { motion } from "framer-motion";
import Image from 'next/image';

// Define the type for package data
interface Package {
  id: number;
  image: string;
  name: string;
  places: string;
  itinerary: string;
  price: string;
}

// Define the props for the component
interface PackageCardsProps {
  packages: Package[];
  selectedNight: number | null;
  onSelect: (nightIndex: number) => void;
}

export default function PackageCards({ packages, selectedNight, onSelect }: PackageCardsProps) {

  const handleCardClick = (id: number) => {
    onSelect(id)
  };

  return (
    <div className="card-container">
      {packages.map((pkg) => (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.4 }}
          key={pkg.id}
          className={`card ${selectedNight === pkg.id ? 'active' : ''}`}
          onClick={() => handleCardClick(pkg.id)}
        >
          <div className="image-section">
            <Image src={pkg.image} alt={pkg.name} width={100} height={80} />
          </div>
          <div className="content-section">
            <h3 className="package-name">{pkg.name}</h3>
            {/* <p className="places">
            <FaTent className='text-secondary'/>
              &nbsp;{pkg.places}</p>
            <p className="itinerary">
              <HiClipboardList/>
              &nbsp;{pkg.itinerary}</p> */}
              <div className="bottom-section">
                <p className="price">Starting from <span>₹{pkg.price}</span></p>
                <button className="book-now">Book Now</button>
              </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}