import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaCalendar, FaPhone, FaClock } from "react-icons/fa6";


const Header = () => {
  return (
    <header>
      <div className="container-fluid bg-light p-0 wow fadeIn" data-wow-delay="0.1s">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <FaCalendar className="text-primary me-2"/>
              <h6 className="text-primary fw-bold m-0">Nov 2025 to March 2026</h6>
            </div>
            
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center py-3 me-2">
              <FaClock className="text-primary me-2" />
              <h6 className="text-primary fw-bold m-0">24/7</h6>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <FaPhone className="text-primary me-2" />
              <h6 className="text-primary fw-bold m-0">+919521265253</h6>
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