import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaClock } from "react-icons/fa6";


const Header = () => {
  return (
    <header>
      <div className="container-fluid bg-light p-0 wow fadeIn" data-wow-delay="0.1s">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <FaLocationDot className="text-primary me-2"/>
              <small>Kalupur, Dreams Destinations, Ahmedabad</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3">
              <FaClock className="text-primary me-2" />
              <small>Mon - Sat : 09:00 AM - 09:00 PM</small>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <FaPhone className="text-primary me-2" />
              <small>+919521265253</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <a className="btn btn-sm-square icon-box bg-white text-primary me-1" href="">
                <FaFacebookF />
              </a>
              <a className="btn btn-sm-square icon-box bg-white text-primary me-1" href="">
                <FaYoutube />
              </a>
              <a className="btn btn-sm-square icon-box bg-white text-primary me-0" href="">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;