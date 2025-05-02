'use client';

import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { Modal } from 'bootstrap';

interface FormData {
  name: string;
  email: string;
  phone: string;
  month: string;
  package: string;
}

interface FormErrors extends Record<string, string | undefined> {
  name?: string;
  email?: string;
  phone?: string;
  month?: string;
  package?: string;
}

const EnquiryPopup = forwardRef((props, ref) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    month: '',
    package: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const modalRef = useRef<Modal | null>(null);
  const modalElementRef = useRef<HTMLDivElement | null>(null);

  // Expose the openModal function to parent components
  useImperativeHandle(ref, () => ({
    openModal: () => {
      modalRef.current?.show();
    }
  }));

  // Initialize modal
  useEffect(() => {
    const element = document.getElementById('enquiryModal');
    if (element && !modalRef.current) {
      modalElementRef.current = element as HTMLDivElement;
      modalRef.current = new Modal(element);
      
      // Auto-show after 2 seconds
      const timer = setTimeout(() => {
        modalRef.current?.show();
      }, 2000);

      return () => {
        clearTimeout(timer);
        modalRef.current?.dispose();
      };
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.month) newErrors.month = 'Please select a month';
    if (!formData.package) newErrors.package = 'Please select a package';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setTimeout(() => {
        modalRef.current?.hide();
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          month: '',
          package: ''
        });
      }, 2000);
    }
  };

  const openModal = () => {
    modalRef.current?.show();
  };

  return (
    <>
      {/* Manual trigger button - can be placed anywhere */}
      <button 
        onClick={openModal}
        className="btn btn-primary d-none d-md-inline-block"
        style={{ backgroundColor: '#b82e88', border: 'none' }}
      >
        Enquire Now
      </button>

      {/* Modal */}
      <div className="modal fade" id="enquiryModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header border-0 pb-0">
              <button 
                type="button" 
                className="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-4 p-md-5">
              <div className="row">
                {/* Left Side - Image */}
                <div className="col-md-6 d-none d-md-block">
                  <div 
                    className="enquiry-image-container rounded-4 h-100"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1582977311977-9d8d8579f68f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '100%',
                      position: 'relative'
                    }}
                  >
                    <div 
                      className="enquiry-image-overlay rounded-4 p-4 d-flex flex-column justify-content-end"
                      style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                        height: '100%'
                      }}
                    >
                      <h3 className="text-white mb-3">Experience the Magic of Rann Utsav</h3>
                      <ul className="text-white list-unstyled">
                        <li className="mb-2"><i className="fas fa-check-circle me-2"></i> Cultural Performances</li>
                        <li className="mb-2"><i className="fas fa-check-circle me-2"></i> White Desert Camping</li>
                        <li className="mb-2"><i className="fas fa-check-circle me-2"></i> Traditional Gujarati Cuisine</li>
                        <li className="mb-2"><i className="fas fa-check-circle me-2"></i> Adventure Activities</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Right Side - Form */}
                <div className="col-md-6">
                  <h2 className="modal-title mb-4 text-center text-md-start">
                    <span style={{ color: '#b82e88' }}>Plan Your</span> Rann Utsav Trip
                  </h2>
                  
                  {isSubmitted ? (
                    <div className="text-center py-4">
                      <i className="fas fa-check-circle text-success mb-3" style={{ fontSize: '3rem' }}></i>
                      <h4>Thank You!</h4>
                      <p>We&apos;ll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input
                          type="text"
                          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                      </div>
                      
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                          type="email"
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      </div>
                      
                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                        />
                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                      </div>
                      
                      <div className="mb-3">
                        <label htmlFor="month" className="form-label">Preferred Travel Month</label>
                        <select
                          className={`form-select ${errors.month ? 'is-invalid' : ''}`}
                          id="month"
                          name="month"
                          value={formData.month}
                          onChange={handleChange}
                        >
                          <option value="" disabled>Select month</option>
                          <option value="November">November</option>
                          <option value="December">December</option>
                          <option value="January">January</option>
                          <option value="February">February</option>
                        </select>
                        {errors.month && <div className="invalid-feedback">{errors.month}</div>}
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="package" className="form-label">Package Interested In</label>
                        <select
                          className={`form-select ${errors.package ? 'is-invalid' : ''}`}
                          id="package"
                          name="package"
                          value={formData.package}
                          onChange={handleChange}
                        >
                          <option value="" disabled>Select package</option>
                          <option value="Tent City">Tent City Experience</option>
                          <option value="Deluxe">Deluxe Package</option>
                          <option value="Premium">Premium Package</option>
                          <option value="Custom">Custom Package</option>
                        </select>
                        {errors.package && <div className="invalid-feedback">{errors.package}</div>}
                      </div>
                      
                      <button 
                        type="submit" 
                        className="btn btn-primary w-100 py-3"
                        style={{ backgroundColor: '#b82e88', border: 'none' }}
                      >
                        Submit Enquiry
                        <i className="fas fa-paper-plane ms-2"></i>
                      </button>
                      
                      <p className="text-muted small mt-3 text-center">
                        We&apos;ll get back to you within 24 hours
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

EnquiryPopup.displayName = 'EnquiryPopup';

export default EnquiryPopup;