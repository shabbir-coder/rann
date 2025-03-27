"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const pathname = usePathname();

    return (
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-4 px-lg-5" data-wow-delay="0.1s">
        <Link href="/" className="navbar-brand p-0">
          <Image className="img-fluid me-3" src="/img/RN-2024-pink.png" width={150} height={100} alt="Icon" loading="lazy" />
        </Link>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse py-4 py-lg-0" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            <Link href="/" shallow={true} className={`nav-item nav-link ${pathname === "/" ? "active" : ""}`}>Home</Link>
            <Link href="/packages" shallow={true} className={`nav-item nav-link ${pathname === "/packages" ? "active" : ""}`}>Packages</Link>
            <Link href="/contact-us" shallow={true} className={`nav-item nav-link ${pathname === "/contact-us" ? "active" : ""}`}>Contact Us</Link>
            <Link href="/accomodation" shallow={true} className={`nav-item nav-link ${pathname === "/accomodation" ? "active" : ""}`}>Accomodation</Link>
            <Link href="/special-dates" shallow={true} className={`nav-item nav-link ${pathname === "/special-dates" ? "active" : ""}`}>Special Dates</Link>
            <Link href="/activities" shallow={true} className={`nav-item nav-link ${pathname === "/activities" ? "active" : ""}`}>Activities</Link>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                >Attractions</a>
              <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                <Link href="/attractions/nature" className={`nav-item nav-link ${pathname.startsWith("/nature") ? "active" : ""}`}>
                  Nature
                </Link>
                <Link href="/attractions/architecture" className={`nav-item nav-link ${pathname.startsWith("/architecture") ? "active" : ""}`}>
                  Architecture
                </Link>
                <Link href="/attractions/culture" className={`nav-item nav-link ${pathname.startsWith("/culture") ? "active" : ""}`}>
                  Culture
                </Link>
              </div>
            </div>
          </div>
          <a href="" className="btn btn-primary">Book Now<FaArrowRight className="ms-3"/></a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;