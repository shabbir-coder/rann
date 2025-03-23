"use client";

import { motion } from "framer-motion";
import { FaLocationDot, FaPhone, FaEnvelopeOpen } from "react-icons/fa6";

const contactData = [
  {
    icon: <FaLocationDot className="text-primary" />,
    title: "Address",
    text: "Kalupur, Dreams Destinations, Ahmedabad",
    delay: 0.5,
  },
  {
    icon: <FaPhone className="text-primary" />,
    title: "Call Now",
    text: "+919521265253",
    link: "tel:+919521265253",
    delay: 0.5,
  },
  {
    icon: <FaEnvelopeOpen className="text-primary" />,
    title: "Mail Now",
    text: "info@therannutsav.com",
    link: "mailto:info@therannutsav.com",
    delay: 0.5,
  },
];

const ContactUsProps = () => {
  return (
    <div className="row g-4 mb-5">
      {contactData.map((item, index) => (
        <motion.div
          key={index}
          className="col-lg-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: item.delay }}
        >
          <div className="h-100 bg-light d-flex align-items-center p-3">
            <div className="btn-lg-square flex-shrink-0">{item.icon}</div>
            <div className="ms-4">
              <p className="mb-2">
                <span className="text-primary me-2">#</span>
                {item.title}
              </p>
              {item.link ? (
                <h5 className="mb-0">
                  <a href={item.link} className="text-dark text-decoration-none">
                    {item.text}
                  </a>
                </h5>
              ) : (
                <h5 className="mb-0">{item.text}</h5>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactUsProps;
