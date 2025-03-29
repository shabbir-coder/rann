"use client";
import { useParams } from 'next/navigation';
import { motion } from "framer-motion";
import Head from 'next/head';
import HeaderBanner from '@/components/HeaderBanner';
import Image from "next/image";
import { FiMail, FiCalendar } from "react-icons/fi";
import { useEffect } from 'react';

export default function ActivitiesPage() {
  const param = useParams();
  const { category } = param;

  const data ={
    nature: {
      headerImage: "/img/_RC10943.jpg",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Nature" }],
      title: "Where one location multiplies into many destinations",
      subTitle: "Discover the simple joys of life here amid the seaside, palaces reminiscent of glorious past, mountains that offer you a glimpse of the neighbouring nation, rural charms of Kutch villages, replete with mud houses, mud paintings and unique pottery.",
      info: [
        {
          title: "White Desert",
          image: "/img/nature/white_desert.jpg",
          description: "A geographical marvel that continues to leave its beholders awestruck, Kutch is surrounded by the Gulf of Kachchh, Great Rann and Little Rann, which remain dry with white mud and white salt during summer and transform into islands during monsoon, owing to its proximity to the sea and rivers."
        },
        {
          title: "Kala Dungar",
          image: "/img/nature/kala_dungar.jpg",
          description: "25 kms north of Khavda, the top of Kala Dungar i.e. the Black Hills is the highest point in Kutch, at 462 m, where you feel like you are at the edge of the earth."
        },
        {
          title: "Mandvi Beach",
          image: "/img/nature/mandvi_beach.jpg",
          description: "One of the finest beaches on Gujarat’s coastline – this beach is perfect for a family getaway. Enjoy fresh coconuts, swim in very pleasant waters, and behold a magnificent view of the coastline as the sun cools its heels in the sea."
        },
        {
          title: "Kadiya Dhro",
          image: "/img/nature/kadiya_dhro.jpg",
          description: "It is a synonym of vibrancy and newness, colorful and simple yet fulfilling. The gushing waters over the decades have created a mesmerizing natural rock art. It is a scenic delight with the beauty of a barren yet intriguing desert."
        },
        {
          title: "Dholavira Fossil Park",
          image: "/img/nature/dholavira_fossil_park.jpg",
          description: "If you are seeking a tent city experience, then White Rann – The Tent City, Dholavira is certainly the ideal place for you. It is a Harappan-themed experience, steeped in history and culture, where you and your loved ones can enjoy the true essence of Dholavira’s golden legacy."
        }
      ]
    },
    architecture: {
      headerImage: "/img/_RC10943.jpg",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Architecture" }],
      title: "Architectural Marvels of Kutch",
      subTitle: "Explore the heritage and grandeur of Kutch through its palaces, forts, and ancient temples that tell tales of the past.",
      info: [
        {
          title: "Vijay Vilas Palace",
          image: "/img/architecture/vijay_vilas_palace.jpg",
          description: "Built in 1929 by Maharao Vijay Singh, the palace is an eclectic blend of architectural styles, offering a panoramic view of the sea and is a favorite destination of Hindi filmmakers."
        },
        {
          title: "Swaminarayan Temple",
          image: "/img/architecture/swaminarayan_temple.jpg",
          description: "Expanding a 35,000 sq. feet area, this intricately designed Swaminarayan Temple has 7 arching pinnacles with one central dome, 25 minor domes and 258 pillars."
        },
        {
          title: "Aina Mahal",
          image: "/img/architecture/aina_mahal.jpg",
          description: "An 18th-century palace built by Maharao Lakhpatji, known for its intricate mirror work and Indo-European architecture."
        },
        {
          title: "Prag Mahal",
          image: "/img/architecture/prag_mahal.jpg",
          description: "A palace with a tall clock tower and stunning European-style architecture, built in the 19th century."
        },
        {
          title: "Lakhpat Fort & Gurudwara",
          image: "/img/architecture/lakhpat_fort.jpg",
          description: "A ghost town with historic walls, old structures, and religious significance, offering a glimpse into Kutch’s past."
        }
      ]
    },
    culture: {
      headerImage: "/img/_RC10943.jpg",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Culture" }],
      title: "Cultural Heritage of Kutch",
      subTitle: "Experience the rich traditions, crafts, and folk heritage of Kutch through its villages, art forms, and festivals.",
      info: [
        {
          title: "Kutch Museum",
          image: "/img/culture/kutch_museum.jpg",
          description: "The oldest museum in Gujarat, showcasing Kutch’s tribal culture, textiles, coins, and ancient scripts."
        },
        {
          title: "Bhujodi Handicrafts Village",
          image: "/img/culture/bhujodi.jpg",
          description: "A village famous for Ajrakh block printing, Bandhani tie-dye, and intricate handwoven textiles."
        },
        {
          title: "Smritivan Earthquake Memorial",
          image: "/img/culture/smritivan.jpg",
          description: "A tribute to the victims of the 2001 earthquake, with an immersive exhibition and hilltop view."
        },
        {
          title: "Mata no Madh",
          image: "/img/culture/mata_no_madh.jpg",
          description: "A famous temple dedicated to Ashapura Mata, the Kuldevi of Kutch."
        },
        {
          title: "Hodka & Dhordo Villages",
          image: "/img/culture/hodka_dhordo.jpg",
          description: "Traditional Kutchi villages where you can experience local lifestyles and stay in beautiful mud huts (Bhungas)."
        },
        {
          title: "Rann Utsav Festival Grounds",
          image: "/img/culture/rann_utsav.jpg",
          description: "The center of celebrations where tourists enjoy cultural performances, camel rides, and local cuisine."
        }
      ]
    }
  }
  
  type CategoryType = "nature" | "architecture" | "culture";
  const categoryKey = category as CategoryType;
  const selectedData = data[categoryKey] || data["nature"];

  useEffect(() => {
    console.log(category)
  }, [category])
  

  // Use the category to display different content
  return (
    <>
    <Head>
      <title>{selectedData.title} - Kutch</title>
    </Head>
    <HeaderBanner
        bgImage={selectedData.headerImage}
        title={selectedData.title}
        breadcrumbs={selectedData.breadcrumb}
      />

    <div className="container">
      <h4 className="text-2xl font-bold mb-4 border-left">&nbsp;{selectedData.title}</h4>
      <p className='text-dark mb-0 fs-5 fs-md-6 lh-base'>{selectedData.subTitle}</p>
    </div>

    <div className="container px-3 px-md-4 px-lg-5 pb-5">
      {selectedData.info.map((place, index) => (
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
                src={place.image}
                alt={place.title}
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
              <h3 className="text-dark mb-2 mb-md-3 fw-bold display-6">{place.title}</h3>
              <p className="text-secondary mb-3 mb-md-4 fs-6 lh-base" dangerouslySetInnerHTML={{ __html: place.description }} />
              
              <div className="d-flex flex-wrap gap-2 gap-md-3 mb-3 mb-md-4">
                <button className="btn btn-outline-primary d-flex align-items-center gap-2 px-3 px-md-4 py-2">
                  <FiMail /> Inquiry Now
                </button>
                <button className="btn btn-primary d-flex align-items-center gap-2 px-3 px-md-4 py-2">
                  <FiCalendar /> Book Now
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  </>
  );
}