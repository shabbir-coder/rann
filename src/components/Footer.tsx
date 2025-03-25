"use client";

import { FaPhone, FaEnvelopeOpen } from "react-icons/fa6";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer
            className="footer">
            <div className="footer-content">
                {/* Address Section */}
                <div className="footer-section">
                    <h5 className="footer-heading">Address</h5>
                    <div className="footer-info">
                        <p className="footer-text">
                            <FaPhone className="footer-icon" /> +919521265253
                        </p>
                        <p className="footer-text">
                            <FaEnvelopeOpen className="footer-icon" /> info@therannutsav.com
                        </p>
                    </div>
                    <div className="footer-social">
                        <a className="social-link" href="#">
                            <FaFacebookF />
                        </a>
                        <a className="social-link" href="#">
                            <FaYoutube />
                        </a>
                        <a className="social-link" href="#">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                {/* Quick Links (Optional) */}
                {/* <div className="footer-section">
                    <h5 className="footer-heading">Quick Links</h5>
                    <div className="footer-links">
                        {["About Us", "Contact Us", "Our Services", "Terms & Condition", "Support"].map((link, index) => (
                            <a key={index} className="footer-link" href="#">{link}</a>
                        ))}
                    </div>
                </div> */}

                {/* Newsletter (Optional) */}
                {/* <div className="footer-section">
                    <h5 className="footer-heading">Newsletter</h5>
                    <p className="footer-text">Stay updated with our latest news and offers.</p>
                    <div className="newsletter-form">
                        <input className="newsletter-input" type="email" placeholder="Your email" />
                        <button className="newsletter-button">Sign Up</button>
                    </div>
                </div> */}
            </div>

            {/* Copyright Section */}
            <div className="footer-copyright">
                <div className="copyright-text">
                    &copy; <a className="copyright-link" href="#">Your Site Name</a>, All Rights Reserved.
                </div>
                {/* <div className="copyright-text">
                    Designed By <a className="copyright-link" href="https://htmlcodex.com">HTML Codex</a>
                    <br />
                    Distributed By: <a className="copyright-link" href="https://themewagon.com">ThemeWagon</a>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;