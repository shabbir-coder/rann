import Image from 'next/image';

const AboutSection = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <p>
              <span className="text-primary me-2">#</span>Welcome To Rann Utsav
            </p>
            <h1 className="display-5 mb-4 cursive-regular">
              Rann Utsav
              <br />
              <span className="text-primary">The Tent City</span>
            </h1>
            <p className="mb-4">
              Rann Utsav started as a small three-day festival and has now grown into a grand 100-day celebration in <span className='text-primary fw-bold cursive-regular' style={{fontSize: '20px'}}>Dhordo</span>, a village near the White Rann of Kutch. Every year, a beautiful tent city is set up, offering visitors a unique experience in the middle of the desert.  
              <br /> <br />
              This festival was first introduced by Hon’ble Prime Minister Shri Narendra Modi when he was the Chief Minister of Gujarat, with the goal of sharing Kutch’s beauty with the world.  
              <br /> <br />
              Visitors enjoy folk music, dance, adventure activities, and local handicrafts. Whether you want to relax under the moonlit desert sky or enjoy the lively cultural performances, <span className='text-primary fw-bold cursive-regular' style={{ fontSize: '20px'}}>Rann Utsav</span> has something special for everyone.
            </p>
            {/* <h5 className="mb-3">
              <i className="far fa-check-circle text-primary me-3"></i>Free Car
              Parking
            </h5>
            <h5 className="mb-3">
              <i className="far fa-check-circle text-primary me-3"></i>Natural
              Environment
            </h5>
            <h5 className="mb-3">
              <i className="far fa-check-circle text-primary me-3"></i>Professional
              Guide & Security
            </h5>
            <h5 className="mb-3">
              <i className="far fa-check-circle text-primary me-3"></i>World Best
              Animals
            </h5> */}
            {/* <Link href="/about" className="btn btn-primary py-3 px-5 mt-3">
              Read More
            </Link> */}
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="img-border">
              <Image
                src="/img/Dhordo_0471.jpg"
                alt="About Zoofari"
                width={600}
                height={400}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;