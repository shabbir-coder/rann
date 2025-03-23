
export const metadata = {
  title: "Tours and Travels - Packages",
};

import ContactUsForm from '@/components/ContactUsForm';
import ContactUsProps from '@/components/ContactUsProps';
import HeaderBanner from '@/components/HeaderBanner';
// import { motion } from "framer-motion";
// import { FaLocationDot,FaPhone , FaEnvelopeOpen } from "react-icons/fa6";


// import ContactForm from '../../components/ContactForm';
// import Footer from '../../components/Footer';

export default function ContactUs() {
  return (
    <>
      <HeaderBanner
        bgImage="/img/_RC10943.jpg" // Change to your image path
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" }
        ]}
      />
      <div className="py-2">
        <div className="container">
          <ContactUsProps/>
          <ContactUsForm />
        </div>
      </div>
   {/* <div className="py-5">
      <div className="container">
        <div className="row g-4 mb-5">
          {[
            {
              icon: <FaLocationDot className="text-primary" />,
              title: "Address",
              text: "123 Street, New York, USA",
              delay: 0.1,
            },
            {
              icon: <FaPhone className="text-primary" />,
              title: "Call Now",
              text: "+012 345 6789",
              delay: 0.3,
            },
            {
              icon: <FaEnvelopeOpen className="text-primary" />,
              title: "Mail Now",
              text: "info@example.com",
              delay: 0.5,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="col-lg-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.delay }}
            >
              <div className="h-100 bg-light d-flex align-items-center p-5">
                <div className="btn-lg-square bg-white flex-shrink-0">{item.icon}</div>
                <div className="ms-4">
                  <p className="mb-2">
                    <span className="text-primary me-2">#</span>
                    {item.title}
                  </p>
                  <h5 className="mb-0">{item.text}</h5>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="row g-5"
        >
          <div className="col-lg-6">
            <p>
              <span className="text-primary me-2">#</span>Contact Us
            </p>
            <h1 className="display-5 mb-4">Have Any Query? Please Contact Us!</h1>
            <p className="mb-4">
              The contact form is currently inactive. Get a functional and working contact form
              with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code, and
              you&apos;re done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.
            </p>

            <form>
              <div className="row g-3">
                {[
                  { id: "name", label: "Full Name", type: "text" },
                  { id: "email", label: "Your Email", type: "email" },
                  { id: "number", label: "Phone Number", type: "number" },
                ].map((field, index) => (
                  <motion.div
                    key={field.id}
                    className="col-md-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="form-floating">
                      <input type={field.type} className="form-control bg-light border-0" id={field.id} placeholder={field.label} />
                      <label htmlFor={field.id}>{field.label}</label>
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  className="col-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="form-floating">
                    <select id="month-select" className="form-control bg-light border-0">
                      <option value="" disabled hidden>
                        Select Month to travel
                      </option>
                      {["September", "October", "November", "December", "January", "February", "March"].map((month) => (
                        <option key={month} value={month.toLowerCase()}>
                          {month}
                        </option>
                      ))}
                    </select>
                    <label htmlFor="month-select">Select a Month:</label>
                  </div>
                </motion.div>

                <motion.div
                  className="col-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="form-floating">
                    <textarea className="form-control bg-light border-0" placeholder="Leave a message here" id="message" style={{ height: "100px" }}></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </motion.div>

                <motion.div
                  className="col-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Get a Call
                  </button>
                </motion.div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div> */}
    </>
  );
}