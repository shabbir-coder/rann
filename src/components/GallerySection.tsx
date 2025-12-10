"use client";

import { motion } from "framer-motion";
// import Image from "next/image";
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const images = [
  { src: "/img/SpeakingAloud-Incredible-India.jpg", alt: "Animal 1" },
  {
    src: "/img/RESIZEDshopping-complex-within-the-tent-city-at-Dhordho-in-Kutch-rann-utsav-outlook-traveller-1.jpg",
    alt: "Animal 2",
  },
  { src: "/img/kite_Festival.jpg", alt: "Animal 3" },
  { src: "/img/Evoke-Tent-City-1-scaled.jpg", alt: "Animal 4" },
  { src: "/img/6A1A4234.jpg", alt: "Animal 5" },
  { src: "/img/1_.jpg", alt: "Animal 6" },
  { src: "/img/_DSC5516.jpg", alt: "Animal 7" },
  { src: "/img/_0EP5635.jpg", alt: "Animal 8" },
  { src: "/img/_MG_0261copy.jpg", alt: "Animal 9" },
];

const GallerySection = () => {
  return (
    <section className="gallery-section">
      <div className="container-xxl py-5">
        <div className="container">
          {/* Header Section */}
          <motion.div
            className="row g-5 mb-5 align-items-end"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="col-lg-8">
              <p>
                <span className="text-primary me-2">#</span>Our Gallery
              </p>
              <h1 className="display-5 mb-0">
                Let’s See Some{" "}
                <span className="text-primary cursive-regular">Rann Utsav</span>{" "}
                Moments
              </h1>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link className="btn btn-primary py-3 px-5" href="/gallery">
                Explore More
              </Link>
            </div>
          </motion.div>

          <div className="row g-3">
            <div className="col-md-6">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                modules={[Autoplay]}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    {/* <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={800}
                                        height={600}
                                        className=""
                                    /> */}
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="img-fluid"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="d-flex justify-content-center flex-column col-md-6">
              {/* <div className=""> */}
              <h3>Gallery Highlights</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
