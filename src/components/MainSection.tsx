"use client";

import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from "react";
import Autoplay from 'embla-carousel-autoplay'
import { motion } from "framer-motion";


const MainSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true}, [ Autoplay()] )

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

    return (
      <div className="container-fluid bg-dark p-0 mb-5">
        <motion.div className="position-absolute mt-5 ms-3" style={{ zIndex: 10 }}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
          <h1
            className="display-4 text-primary mb-2"
            style={{ fontFamily: "Dancing Script, cursive"}}>
              Utsav-e-Rann
            </h1>
            <h4 className="text-dark oooh-baby-regular fw-bold mb-5">
              The majestic Rann of Kutch awaits you
            </h4>
          <div className="mt-3">
            <a href="" className="btn btn-primary btn-ripple py-sm-3 px-3 px-sm-5">
              Get Call
            </a>
          </div>
        </motion.div>
        <motion.div 
         initial={{ x: -50, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="owl-carousel header-carousel">
            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                <div className="embla__slide">
                  <Image
                    className="img-fluid"
                    src="/img/bg1-lg.jpg"
                    alt="Slide 1"
                    width={800}
                    height={560}
                    style={{ width: '100%', height: '560px', objectFit: 'cover' }}
                  />
                </div>
                <div className="embla__slide">
                  <Image
                    className="img-fluid"
                    src="/img/Rann-Utsav.jpg"
                    alt="Slide 33"
                    width={800}
                    height={560}
                    style={{ width: '100%', height: '560px', objectFit: 'cover' }}
                  />
                </div>
                <div className="embla__slide">
                  <Image
                    className="img-fluid"
                    src="/img/bg2-lg.jpg"
                    alt="Slide 2"
                    width={800}
                    height={560}
                    style={{ width: '100%', height: '560px', objectFit: 'cover' }}
                  />
                </div>
                <div className="embla__slide">
                  <Image
                    className="img-fluid"
                    src="/img/bg4-lg.jpg"
                    alt="Slide 4"
                    width={800}
                    height={560}
                    style={{ width: '100%', height: '560px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
    </div>
    );
  };
  
  export default MainSection;