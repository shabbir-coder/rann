"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    month: "",
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
    if (!formData.month) newErrors.month = "Please select a month";
    if (!formData.message) newErrors.message = "Message cannot be empty";
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
            {[
              { id: "name", label: "Full Name", type: "text" },
              { id: "email", label: "Your Email", type: "email" },
              { id: "phone", label: "Phone Number", type: "number" },
            ].map((field) => (
              <div key={field.id} className="col-md-6">
                <div className="form-floating">
                <input
                    type={field.type}
                    className={`form-control bg-light border-0 ${getError(field.id) ? "is-invalid" : ""}`}
                    id={field.id as keyof typeof formData} // ✅ Ensure TypeScript understands it's a valid key
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                    placeholder={field.label}
                    />
                  <label htmlFor={field.id}>{field.label}</label>
                  {errors[field.id] && <div className="invalid-feedback">{errors[field.id]}</div>}
                </div>
              </div>
            ))}

            <div className="col-md-6">
              <div className="form-floating">
                <select
                  id="month"
                  className={`form-control bg-light border-0 ${errors.month ? "is-invalid" : ""}`}
                  value={formData.month}
                  onChange={handleChange}
                >
                  <option value="" disabled hidden>Select Month to travel</option>
                  {["September", "October", "November", "December", "January", "February", "March"].map((month) => (
                    <option key={month} value={month.toLowerCase()}>{month}</option>
                  ))}
                </select>
                <label htmlFor="month">Select a Month:</label>
                {errors.month && <div className="invalid-feedback">{errors.month}</div>}
              </div>
            </div>

            <div className="col-12">
              <div className="form-floating">
                <textarea
                  className={`form-control bg-light border-0 ${errors.message ? "is-invalid" : ""}`}
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Leave a message here"
                  style={{ height: "100px" }}
                ></textarea>
                <label htmlFor="message">Message</label>
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>
            </div>

            <div className="col-12">
              <button className="btn btn-primary w-100 py-3" type="submit">Get a Call</button>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactUsForm;
