"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
  
    setFormData((prev) => ({
      ...prev,
      [id]: value, // ✅ TypeScript will now recognize this as valid
    }));
  };

  const getError = (field: string) => errors[field] || "";

  
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = "Full Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email";
    if (!formData.phone || formData.phone.length < 10) newErrors.phone = "Enter a valid phone number";
    if (!formData.message) newErrors.message = "Enquiry message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="row g-5"
    >
      <div className="col-lg-6">
        <p><span className="text-primary me-2">#</span>Contact Us</p>
        <h1 className="display-5 mb-4">Have Any Query? Please Contact Us!</h1>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            {/* First row: First Name and Phone Number */}
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className={`form-control bg-light border-0 ${getError("name") ? "is-invalid" : ""}`}
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="First Name"
                />
                <label htmlFor="name">First Name</label>
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="number"
                  className={`form-control bg-light border-0 ${getError("phone") ? "is-invalid" : ""}`}
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                />
                <label htmlFor="phone">Phone Number</label>
                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
              </div>
            </div>
            {/* Second row: Email full width */}
            <div className="col-12">
              <div className="form-floating">
                <input
                  type="email"
                  className={`form-control bg-light border-0 ${getError("email") ? "is-invalid" : ""}`}
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                />
                <label htmlFor="email">Your Email</label>
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
            </div>


            <div className="col-12">
              <div className="form-floating">
                <textarea
                  className={`form-control bg-light border-0 ${errors.message ? "is-invalid" : ""}`}
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Leave an enquiry message here"
                  style={{ height: "100px" }}
                ></textarea>
                <label htmlFor="message">Enquiry Message</label>
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>
            </div>

            <div className="col-12">
              <button className="btn btn-primary w-100 py-3" type="submit">Get a Call</button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-lg-6">
        <div className="map-container" style={{ height: '100%' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.552488356904!2d69.5051299!3d23.798945099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3951b7157fd00077%3A0x327dda157acd4bb9!2sRann%20Utsav%20-%20The%20Tent%20City!5e0!3m2!1sen!2sin!4v1766756649832!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUsForm;
