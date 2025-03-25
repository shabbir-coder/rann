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
          <Image className="img-fluid me-3" src="/img/RN-2024-pink.png" width={200} height={100} alt="Icon" loading="lazy" />
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
            <Link href="/gallery" shallow={true} className={`nav-item nav-link ${pathname === "/gallery" ? "active" : ""}`}>Gallery</Link>
            <Link href="/activities" shallow={true} className={`nav-item nav-link ${pathname === "/activities" ? "active" : ""}`}>Activities</Link>
          </div>
          <a href="" className="btn btn-primary">Book Now<FaArrowRight className="ms-3"/></a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;