import Head from "next/head";
import Image from "next/image";

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

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Rannutsav - Gallery</title>
      </Head>
      <div className="container-xxl py-5">
        <div className="container">
          {/* Header Section */}
          <div className="row g-5 mb-5 align-items-end">
            <div className="col-12">
              <p>
                <span className="text-primary me-2">#</span>Our Gallery
              </p>
              <h1 className="display-5 mb-0">
                Let’s See Some{" "}
                <span className="text-primary cursive-regular">Rann Utsav</span>{" "}
                Moments
              </h1>
            </div>
            {/* <div className="col-lg-4 text-lg-end">
              <a className="btn btn-primary py-3 px-5" href="#">Explore More</a>
            </div> */}
          </div>

          <div className="row">
            {images.map((image, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="image-container">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
