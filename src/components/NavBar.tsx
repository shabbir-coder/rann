"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileAttractionsOpen, setMobileAttractionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setMobileAttractionsOpen(false);
    }
  };

  const toggleMobileAttractions = () => {
    setMobileAttractionsOpen(!mobileAttractionsOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-4 px-lg-5 ${isScrolled ? 'shadow-sm' : ''}`}>
        <Link href="/" className="navbar-brand p-0">
          <Image 
            className="img-fluid me-3" 
            src="/img/RN-2024-pink.png" 
            width={150} 
            height={100} 
            alt="Icon" 
            loading="lazy" 
          />
        </Link>
        
        {/* Animated Mobile Toggle Button */}
        <button 
          type="button" 
          className="navbar-toggler me-2" 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Desktop Menu */}
        <div className="collapse navbar-collapse py-4 py-lg-0" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            <Link href="/" shallow={true} className={`nav-item nav-link ${pathname === "/" ? "active" : ""}`}>Home</Link>
            <Link href="/packages" shallow={true} className={`nav-item nav-link ${pathname === "/packages" ? "active" : ""}`}>Packages</Link>
            <Link href="/contact-us" shallow={true} className={`nav-item nav-link ${pathname === "/contact-us" ? "active" : ""}`}>Contact Us</Link>
            <Link href="/accomodation" shallow={true} className={`nav-item nav-link ${pathname === "/accomodation" ? "active" : ""}`}>Accomodation</Link>
            <Link href="/special-dates" shallow={true} className={`nav-item nav-link ${pathname === "/special-dates" ? "active" : ""}`}>Special Dates</Link>
            <div className="nav-item dropdown">
              <a
                href="#"
                className={`nav-link dropdown-toggle ${pathname.startsWith("/attractions") ? "active" : ""}`}
                data-bs-toggle="dropdown"
              >Attractions</a>
              <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                <Link href="/attractions/nature" className={`dropdown-item ${pathname === "/attractions/nature" ? "active" : ""}`}>
                  Nature
                </Link>
                <Link href="/attractions/architecture" className={`dropdown-item ${pathname === "/attractions/architecture" ? "active" : ""}`}>
                  Architecture
                </Link>
                <Link href="/attractions/culture" className={`dropdown-item ${pathname === "/attractions/culture" ? "active" : ""}`}>
                  Culture
                </Link>
              </div>
            </div>
          </div>
          <a href="/booking" className="btn btn-primary">Book Now<FaArrowRight className="ms-3"/></a>
        </div>
      </nav>

      {/* Mobile Offcanvas Menu */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}></div>
      <div className={`mobile-offcanvas ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="offcanvas-header">
          <button 
            className="close-btn" 
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>
        <div className="offcanvas-body">
          <div className="mobile-nav">
            <Link href="/" className={`mobile-nav-item ${pathname === "/" ? "active" : ""}`} onClick={toggleMobileMenu}>Home</Link>
            <Link href="/packages" className={`mobile-nav-item ${pathname === "/packages" ? "active" : ""}`} onClick={toggleMobileMenu}>Packages</Link>
            <Link href="/contact-us" className={`mobile-nav-item ${pathname === "/contact-us" ? "active" : ""}`} onClick={toggleMobileMenu}>Contact Us</Link>
            <Link href="/accomodation" className={`mobile-nav-item ${pathname === "/accomodation" ? "active" : ""}`} onClick={toggleMobileMenu}>Accomodation</Link>
            <Link href="/special-dates" className={`mobile-nav-item ${pathname === "/special-dates" ? "active" : ""}`} onClick={toggleMobileMenu}>Special Dates</Link>
            
            <div className="mobile-dropdown">
              <div 
                className={`mobile-dropdown-toggle ${pathname.startsWith("/attractions") ? "active" : ""}`}
                onClick={toggleMobileAttractions}
              >
                Attractions
                <span className={`dropdown-arrow ${mobileAttractionsOpen ? 'open' : ''}`}></span>
              </div>
              <div className={`mobile-dropdown-menu ${mobileAttractionsOpen ? 'open' : ''}`}>
                <Link 
                  href="/attractions/nature" 
                  className={`mobile-dropdown-item ${pathname === "/attractions/nature" ? "active" : ""}`}
                  onClick={toggleMobileMenu}
                >
                  Nature
                </Link>
                <Link 
                  href="/attractions/architecture" 
                  className={`mobile-dropdown-item ${pathname === "/attractions/architecture" ? "active" : ""}`}
                  onClick={toggleMobileMenu}
                >
                  Architecture
                </Link>
                <Link 
                  href="/attractions/culture" 
                  className={`mobile-dropdown-item ${pathname === "/attractions/culture" ? "active" : ""}`}
                  onClick={toggleMobileMenu}
                >
                  Culture
                </Link>
              </div>
            </div> 
            
            <a href="/booking" className="mobile-book-btn" onClick={toggleMobileMenu}>
              Book Now <FaArrowRight className="ms-2"/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;