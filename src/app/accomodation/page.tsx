"use client";
import HeaderBanner from '@/components/HeaderBanner';
import Head from 'next/head';
import Image from 'next/image';
import { FiCalendar, FiCheckCircle, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Accomodation() {
  const suites = [
    {
      title: "Darbari Suite",
      image: "/img/rooms/Darbari-Accomodation.jpg",
      description:
        "Experience regal splendor at the Darbari Suite during your stay at <span class='text-primary fw-bold'>Rann Utsav</span>. This majestic accommodation offers lavish interiors, exquisite furnishings, and premium amenities including climate control, entertainment systems, and a refreshment station, complemented by a cozy campfire seating area.",
      features: [
        "Spread across 1,000 sq. ft.",
        "Living Room",
        "Two Bedrooms",
        "King-sized beds",
        "Dressing room",
        "Private dining area",
        "Royal sofas",
        "Luxury toiletries",
        "Tea/Coffee Maker",
        "Privilege Transfers",
        "Fast Check-in"
      ],
    },
    {
      title: "Rajwadi Suite",
      image: "/img/rooms/Rajwadi-Accomodation.jpg",
      description:
        "The Rajwadi Suite at <span class='text-primary fw-bold'>Rann Utsav</span> presents a magnificent retreat featuring a grand living space with royal seating, an elegant master bedroom, ample wardrobe area, modern bathroom facilities, exclusive dining space, and a charming outdoor campfire lounge with contemporary comforts.",
      features: [
        "Spread across 900 sq. ft.",
        "Dressing Room",
        "Living Room",
        "Bedroom",
        "Royal sofa set",
        "Luxury toiletries",
        "Tea/Coffee Maker",
        "Privilege Transfers",
        "Express Check-in"
      ],
    },
    {
      title: "Super Premium Tents",
      image: "/img/rooms/Super-Premium-Accomodation.jpg",
      description:
        "Discover the ultimate glamping experience at <span class='text-primary fw-bold'>Rann Utsav</span>'s Super Premium Tents, offering seamless access to all festival attractions while providing luxurious comfort in beautifully appointed temporary accommodations.",
      features: [
        "Easy accessibility to entire <span class='text-primary fw-bold'>Rann Utsav</span>",
        "Spread across 473 sq. ft.",
        "Cozy Sitting Area",
        "Double Bed",
        "Spacious Front Porch",
        "Luxury Toiletries",
        "Air Conditioner",
        "Tea/Coffee Maker",
        "Attached Bathroom",
      ],
    },
    {
      title: "Premium Tents",
      image: "/img/rooms/Premium-Accomodation.jpg",
      description:
        "The Premium Tents at <span class='text-primary fw-bold'>Rann Utsav</span> feature sumptuous decor, premium fabrics, and climate control to ensure your comfort after days filled with cultural exploration and desert adventures.",
      features: [
        "Spread across 473 sq. ft.",
        "Cozy Sitting Area",
        "Double Bed",
        "Attached Bathroom",
        "Spacious Front Porch",
        "Luxury Toiletries",
        "Air Conditioner",
        "Tea/Coffee Maker",
      ],
    },
    {
      title: "Deluxe AC Swiss Cottages",
      image: "/img/rooms/Deluxe-AC-Accomodation.jpg",
      description:
        "Nestled within the <span class='text-primary fw-bold'>Rann Utsav</span> grounds, these cottages combine sophisticated design with modern amenities, offering a peaceful sanctuary to relax after experiencing the vibrant festival activities.",
      features: [
        "Spread across 387 sq. ft.",
        "Cozy Sitting Area",
        "Twin Bed",
        "Attached Bathroom",
        "Spacious Front Porch",
        "Luxury Toiletries",
        "Air Conditioner",
        "Tea/Coffee Maker",
      ],
    },
    {
      title: "Non AC Swiss Cottages",
      image: "/img/rooms/Non-AC-Accomodation.jpg",
      description:
        "These charming cottages at <span class='text-primary fw-bold'>Rann Utsav</span> provide a comfortable, authentic stay with traditional decor elements, perfect for those who prefer natural ventilation during the pleasant winter months.",
      features: [
        "Spread across 387 sq. ft.",
        "Conveniences & Luxuries",
        "Twin Bed",
        "Attached Bathroom",
        "Spacious Front Porch",
        "Luxury Toiletries",
      ],
    }
  ];

  return (
    <>
      <Head>
        <title>Tours and Travels - Accomodation</title>
      </Head>
      <HeaderBanner
        bgImage="/img/_RC10943.jpg"
        title="Accomodations"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Accomodations" }
        ]}
      />
      <div className="container">
        <h4 className="text-2xl font-bold mb-4 border-left">&nbsp;Accomodations</h4>
        <p className='text-dark mb-0 fs-5 fs-md-6 lh-base'>Wake up to the golden glow of the <span className='text-primary fw-bold'>Rann of Kutch</span> as the morning sun paints the white desert in breathtaking hues. Sip on a steaming cup of tea outside your luxurious tent while soaking in the beauty of <span className='text-primary fw-bold'>Rann Utsav</span>, a celebration of culture, art, and adventure. Wander through the vibrant Tent City, where warm hospitality meets traditional craftsmanship, and indulge in authentic local cuisines served amidst regal interiors and elegant furnishings. Experience the charm of a world-class tented stay, offering unmatched comfort and a glimpse into Gujarat&apos;s rich heritage, making your visit truly unforgettable.</p>
      </div>

      <div className="container px-3 px-md-4 px-lg-5 pb-5">
        {suites.map((suite, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`row g-2 g-md-5 my-4 my-md-5 align-items-center ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}
          >
            <div className="col-12 col-lg-6 mb-3 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="overflow-hidden rounded-4 shadow-lg"
              >
                <Image
                  src={suite.image}
                  alt={suite.title}
                  width={800}
                  height={500}
                  className="img-fluid w-100 hover-zoom"
                  style={{ objectFit: 'cover', minHeight: '300px' }}

                />
              </motion.div>
            </div>
            
            <div className="col-12 col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="h-100 p-3 p-md-4"
              >
                <h3 className="text-dark mb-2 mb-md-3 fw-bold display-6">{suite.title}</h3>
                <p className="text-secondary mb-3 mb-md-4 fs-6 lh-base" dangerouslySetInnerHTML={{ __html: suite.description }} />
                
                <div className="d-flex flex-wrap gap-2 gap-md-3 mb-3 mb-md-4">
                  <button className="btn btn-outline-primary d-flex align-items-center gap-2 px-3 px-md-4 py-2">
                    <FiMail /> Inquiry Now
                  </button>
                  <button className="btn btn-primary d-flex align-items-center gap-2 px-3 px-md-4 py-2">
                    <FiCalendar /> Book Now
                  </button>
                </div>

                <div className="border-top border-bottom border-light py-3 mb-3">
                  <div className="row g-2 g-md-3">
                    {suite.features.map((feature, i) => (
                      <div key={i} className="col-12 col-sm-6 d-flex align-items-center">
                        <span className="text-secondary me-2 flex-shrink-0"><FiCheckCircle size={16} /></span>
                        <span 
                          className="text-secondary fs-6 lh-sm"
                          dangerouslySetInnerHTML={{ __html: feature }} 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}