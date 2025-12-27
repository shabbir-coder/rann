"use client";
import { useState } from 'react';

const ShowMoreSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const aboveFold = "Rann Utsav Tour Packages – Experience the White Desert of Kutch\nExperience the magical beauty of the White Rann of Kutch with our expertly curated Rann Utsav tour packages of 1Day/2Night, 2Day/3Night, 3Day/4Night. Celebrated at the iconic Rann Utsav Tent City near Dhordo, Gujarat, this world-famous festival transforms the vast salt desert into a vibrant celebration of culture, music, art, and tradition. From breathtaking sunsets to moonlit nights over the white desert, Rann Utsav offers a truly unforgettable travel experience.\nOur Rann Utsav Gujarat packages are thoughtfully designed to offer the perfect blend of comfort, cultural immersion, and adventure. Stay in beautifully crafted premium and deluxe tents, enjoy authentic Kutchi cuisine, witness captivating folk performances, and explore the rich heritage of Kutch. Whether you are traveling with family, planning a romantic getaway, or visiting with a group, Rann Utsav promises warmth, hospitality, and lifelong memories.\nWith seamless arrangements including accommodation, meals, transfers, sightseeing, and festival activities, we ensure a smooth, stress-free, and enriching journey to India’s most celebrated desert festival.";

  const belowFold = "Why Book Your Rann Utsav Tour With Us?\nBooking your Rann Utsav tour package with us means choosing trusted expertise, transparent pricing, and personalized service. We focus on delivering authentic experiences at the Rann Utsav Tent City Dhordo, ensuring comfort, convenience, and complete peace of mind throughout your journey.\nOur experienced team assists you at every step — from selecting the right tent category and travel dates to planning sightseeing and activities. With strong local knowledge, on-ground support, and attention to detail, we ensure your visit to the White Desert of Kutch becomes a memorable holiday rather than just a trip.\n\nWhat Activities Can You Enjoy at Rann Utsav?\nRann Utsav offers a wide range of cultural and adventure experiences that make every day exciting. Visitors can explore the endless White Rann, which looks especially stunning during sunrise and full moon nights. Adventure lovers can enjoy camel cart rides, desert safaris, paramotoring, and ATV rides across the salt desert.\nCultural evenings come alive with traditional Garba, folk dances, live music, and storytelling performances that showcase Gujarat’s vibrant heritage. Guests can also shop at colorful handicraft bazaars featuring Kutchi embroidery, textiles, pottery, and handmade souvenirs. Guided excursions to Kala Dungar, India Bridge, and nearby artisan villages and sightseeings further enhance the complete Rann Utsav Gujarat experience.\n\nWhen Is the Best Time to Visit Rann Utsav Tent City?\nThe best time to visit Rann Utsav Tent City is during the winter months, generally from November to February, when the weather is pleasant and ideal for outdoor activities. This season allows travelers to comfortably enjoy sightseeing, cultural programs, and desert adventures.\nFull moon nights are particularly popular, as the White Rann of Kutch glows beautifully under the moonlight, creating a surreal and unforgettable atmosphere. Since Rann Utsav attracts travelers from across India and abroad, early booking of your Rann Utsav tour package is highly recommended.\n\nWhat Makes Rann Utsav a Must-Visit Destination in Gujarat?\nRann Utsav stands out as one of Gujarat’s most iconic travel experiences, offering a rare combination of natural beauty and cultural richness. The endless white salt desert, colorful traditions, warm hospitality, and festive atmosphere make it a destination unlike any other in India.\nA stay at the Rann Utsav Tent City Dhordo allows travelers to disconnect from daily life and immerse themselves in a world of culture, celebration, and breathtaking landscapes. Whether you seek relaxation, photography, adventure, or cultural exploration, Rann Utsav delivers an experience that stays with you long after your journey ends.";

  return (
    <section className="show-more-section">
      <div className="container">
        <div className="text-center">
          <div className="text-start">
            <p className="text-muted lh-base" style={{ whiteSpace: 'pre-line', fontSize: '12px' }}>
              <strong className="fw-bold">{aboveFold.split('\n')[0]}</strong><br />
              {aboveFold.split('\n').slice(1).join('\n')}
            </p>
            {!isExpanded && (
              <button
                className="btn btn-primary mb-3"
                onClick={() => setIsExpanded(true)}
              >
                Read More
              </button>
            )}
            {isExpanded && (
              <>
                <p className="text-muted lh-base" style={{ whiteSpace: 'pre-line', fontSize: '12px' }}>
                  {belowFold}
                </p>
                <button
                  className="btn btn-primary mb-3"
                  onClick={() => setIsExpanded(false)}
                >
                  Read Less
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowMoreSection;