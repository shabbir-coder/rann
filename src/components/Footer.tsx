"use client";

import Link from "next/link";
import { FaPhone, FaEnvelopeOpen } from "react-icons/fa6";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

export const Footer = () => {
    const pageLinks = [
        { href: "/", label: "Home" },
        { href: "/accommodation", label: "Accommodation" },
        { href: "/activities", label: "Activities" },
        { href: "/attractions", label: "Attractions" },
        // { href: "/booking", label: "Booking" },
        { href: "/contact-us", label: "Contact Us" },
        { href: "/gallery", label: "Gallery" },
        { href: "/packages", label: "Packages" },
        { href: "/special-dates", label: "Special Dates" }
    ];

    const quickLinks = [
        // { href: "/booking", label: "Book Now" },
        { href: "/packages", label: "Tour Packages" },
        { href: "/gallery", label: "Photo Gallery" },
        { href: "/contact-us", label: "Enquiry" },
        { href: "/accommodation", label: "Room Types" },
        { href: "/activities", label: "Activities" },
        { href: "/attractions", label: "Nearby Attractions" }
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    {/* Page Links Column */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="footer-heading">Pages</h5>
                        <div className="footer-links">
                            {pageLinks.map((link, index) => (
                                <Link key={index} href={link.href} className="footer-link">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="footer-heading">Quick Links</h5>
                        <div className="footer-links">
                            {quickLinks.map((link, index) => (
                                <Link key={index} href={link.href} className="footer-link">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info Column */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="footer-heading">Contact Info</h5>
                        <div className="footer-info">
                            <p className="footer-text">
                                <FaPhone className="footer-icon" />
                                <a href="tel:+919521265253" className="footer-link">+919521265253</a>
                            </p>
                            <p className="footer-text">
                                <FaEnvelopeOpen className="footer-icon" />
                                <a href="mailto:info@therannutsav.com" className="footer-link">info@therannutsav.com</a>
                            </p>
                        </div>
                    </div>

                    {/* Social Links Column */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="footer-heading">Follow Us</h5>
                        <div className="footer-social">
                            <a className="social-link" href="#" aria-label="Facebook">
                                <FaFacebookF />
                            </a>
                            <a className="social-link" href="#" aria-label="YouTube">
                                <FaYoutube />
                            </a>
                            <a className="social-link" href="#" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-copyright">
                <div className="container">
                    <div className="copyright-text">
                        &copy; {new Date().getFullYear()} Rann Utsav Tent City Dhordo. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;