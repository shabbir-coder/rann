"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const services = [
  {
    id: 1,
    img: "/icons/cafe.png",
    title: "Cafe",
    description: "Enjoy fresh coffee and snacks in a cozy setting.",
    delay: 0.3,
  },
  {
    id: 2,
    img: "/icons/exhibition.png",
    title: "Art & Craft",
    description: "Explore unique handmade crafts and artworks.",
    delay: 0.5,
  },
  {
    id: 3,
    img: "/icons/meeting.png",
    title: "Meeting Rooms",
    description: "Spacious and well-equipped rooms for meetings.",
    delay: 0.7,
  },
  {
    id: 4,
    img: "/icons/merry-go-round.png",
    title: "Kids Play Area",
    description: "Safe and fun space for kids to enjoy.",
    delay: 1.0,
  },
  {
    id: 5,
    img: "/icons/spa.png",
    title: "Rejuvenation Center",
    description: "Relax with spa treatments and therapies.",
    delay: 0.3,
  },
  {
    id: 6,
    img: "/icons/paragliding.png",
    title: "Adventure",
    description: "Thrilling activities for an adrenaline rush.",
    delay: 0.5,
  },
  {
    id: 7,
    img: "/icons/shopper.png",
    title: "Haat Bazaar",
    description: "Shop for local handicrafts and souvenirs.",
    delay: 0.7,
  },
  {
    id: 8,
    img: "/icons/sightseeing.png",
    title: "Sightseeing",
    description: "Discover breathtaking locations and views.",
    delay: 1.0,
  },
];

const ServicesSection = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        {/* Header Section */}
        <motion.div
          className="row g-5 mb-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="col-12">
            <p>
              <span className="text-primary me-2">#</span>Our Services
            </p>
            <h1 className="display-5 mb-0">Services and Facilities</h1>
          </div>
        </motion.div>

        {/* Services Marquee */}
        <Marquee
          speed={30}
          direction="left"
          loop={0}
          pauseOnHover={true}
          gradient={false}
        >
          <div className="d-flex align-items-center flex-nowrap">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-item text-center mx-4"
                // style={{ minWidth: '200px', flexShrink: 0 }}
              >
                <Image
                  className="img-fluid icon-image mb-3"
                  src={service.img}
                  alt={service.title}
                  width={100}
                  height={100}
                />
                <h5 className="mb-2">{service.title}</h5>
                <span className="d-none d-md-block">{service.description}</span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default ServicesSection;
