"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Complete Package Data
const PACKAGES = [
  {
    id: 1,
    image: '/img/pr1.jpg',
    name: '1 Night / 2 days',
    code: '1N2D',
    price: '₹5,500/pp',
  },
  {
    id: 2,
    image: '/img/pr3.jpg',
    name: '2 Night / 3 days',
    code: '2N3D',
    price: '₹11,000/pp',
  },
  {
    id: 3,
    image: '/img/pr7.jpg',
    name: '3 Night / 4 days',
    code: '3N4D',
    price: '₹14,500/pp',
  },
  {
    id: 4,
    image: '/img/pr5.jpg',
    name: '4 Night / 5 days',
    code: '4N5D',
    price: '₹19,000/pp',
  },
];

// Complete Tent Options
const TENT_OPTIONS = [
    {
      id: 1,
      name: "Darbari Suite",
      image: "/img/rooms/Darbari-Accomodation.jpg",
      code: 'DS'
    },
    {
      id: 2,
      name: "Rajwadi Suite",
      image: "/img/rooms/Rajwadi-Accomodation.jpg",
      code: 'RS'
    },
    {
      id: 3,
      name: "Super Premium Tents",
      image: "/img/rooms/Super-Premium-Accomodation.jpg",
      code: 'SPT'
    },
    {
      id: 4,
      name: "Premium Tents",
      image: "/img/rooms/Premium-Accomodation.jpg",
      code: 'PT'
    },
    {
      id: 5,
      name: "Deluxe AC Swiss Cottages",
      image: "/img/rooms/Deluxe-AC-Accomodation.jpg",
      code: 'DASC'
    },
    {
      id: 6,
      name: "Non AC Swiss Cottages",
      image: "/img/rooms/Non-AC-Accomodation.jpg",
      code: 'NASC'
    }
  ];

const BookingForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    package: "",
    checkInDate: "",
    adults: '1',
    children: 0,
    tentType: "",
    guestData: {
      name: "",
      dob: "",
      address: "",
      city: "",
      state: "",
      isdCode: "91",
      phone: "",
      email: "",
      gender: "",
      idProof: "",
      idNumber: ""
    },
    specialRequests: ""
  });

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3)); // 3 is the last step index
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const validateStep = (step: number) => {
    switch(step) {
      case 0: return !!formData.package;
      case 1: return !!formData.checkInDate && !!formData.tentType;
      case 2: return validateGuestData();
      default: return true;
    }
  };

  const validateGuestData = () => {
    const { guestData } = formData;
    return (
      guestData.name && 
      guestData.dob && 
      guestData.gender && 
      guestData.idProof && 
      guestData.idNumber &&
      guestData.email &&
      guestData.address &&
      guestData.city &&
      guestData.state
    );
  };

  const updateGuestData = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      guestData: {
        ...prev.guestData,
        [field]: value
      }
    }));
  };

  return (
    <div className="booking-container">
      <header className="booking-header">
        <h1 className="booking-title">Book Your Rann Utsav Experience</h1>
        
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${(currentStep / 3) * 100}%` }} // 3 steps total
            />
          </div>
          {["Select Package", "Choose Dates", "Guest Details", "Review"].map((label, index) => (
            <div 
              key={label} 
              className={`progress-step ${currentStep >= index ? 'active' : ''}`}
            >
              <div className="step-number">{index + 1}</div>
              <span className="step-label">{label}</span>
            </div>
          ))}
        </div>
      </header>

      <main className="booking-content">
        <AnimatePresence mode="wait">
          {/* Package Selection Step */}
          {currentStep === 0 && (
            <motion.div
              key="package"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="booking-step"
            >
              <h2 className="section-title">Select Your Package</h2>
              <div className="package-grid">
                {PACKAGES.map(pkg => (
                  <div
                    key={pkg.id}
                    className={`package-card ${formData.package === pkg.code ? 'selected' : ''}`}
                    onClick={() => setFormData({ ...formData, package: pkg.code })}
                  >
                    {formData.package === pkg.code && (
                      <div className="selected-indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                    <img src={pkg.image} alt={pkg.name} className="package-image" />
                    <div className="package-content">
                      <h3>{pkg.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Dates & Accommodation Step */}
          {currentStep === 1 && (
            <motion.div
              key="dates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="booking-step"
            >
            <h2 className="section-title">Dates & Accommodation</h2>
            
            <div className="row">
              <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label className="form-label">Number of Adults</label>
                    {/* <select
                      className="form-selectz"
                      value={formData.adults}
                      onChange={(e) => setFormData({ ...formData, adults: parseInt(e.target.value) })}
                    >
                      {[1, 2, 3, 4].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select> */}
                    <input type="number" className="form-input" 
                      value={formData?.adults}
                      onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                     />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="form-group">
                    <label className="form-label">Check-in Date</label>
                    <input
                      type="date"
                      className="form-input"
                      value={formData.checkInDate}
                      onChange={(e) => setFormData({ ...formData, checkInDate: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>
              </div>
              
              <h3 className="section-title">Select Accommodation Type</h3>
              <div className="package-grid">
                {TENT_OPTIONS.map(tent => (
                  <div
                    key={tent.id}
                    className={`package-card ${formData.tentType === tent.code ? 'selected' : ''}`}
                    onClick={() => setFormData({ ...formData, tentType: tent.code })}
                  >
                    {formData.tentType === tent.code && (
                      <div className="selected-indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                    <img src={tent.image} alt={tent.name} className="package-image" />
                    <div className="package-content">
                      <h3>{tent.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Guest Details Step */}
          {currentStep === 2 && (
            <motion.div
              key="guests"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="booking-step"
            >
              <h2 className="section-title">Guest Information</h2>
              
              <div className="guest-section">
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Full Name*</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.guestData.name}
                      onChange={(e) => updateGuestData('name', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Date of Birth*</label>
                    <input
                      type="date"
                      className="form-input"
                      value={formData.guestData.dob}
                      onChange={(e) => updateGuestData('dob', e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Gender*</label>
                    <select
                      className="form-selectz"
                      value={formData.guestData.gender}
                      onChange={(e) => updateGuestData('gender', e.target.value)}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                </div>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Email*</label>
                    <input
                      type="email"
                      className="form-input"
                      value={formData.guestData.email}
                      onChange={(e) => updateGuestData('email', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Phone Number*</label>
                    <input
                      type="tel"
                      className="form-input"
                      value={formData.guestData.phone}
                      onChange={(e) => updateGuestData('phone', e.target.value)}
                      required
                    />
                  </div>

                </div>
                <div className="form-grid">
                  <div className="form-group md:col-span-2">
                    <label className="form-label">City*</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.guestData.city}
                      onChange={(e) => updateGuestData('city', e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group md:col-span-2">
                    <label className="form-label">state*</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.guestData.state}
                      onChange={(e) => updateGuestData('state', e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group md:col-span-2">
                    <label className="form-label">Address*</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.guestData.address}
                      onChange={(e) => updateGuestData('address', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-grid">                  
                  <div className="form-group">
                    <label className="form-label">ID Proof Type*</label>
                    <select
                      className="form-selectz"
                      value={formData.guestData.idProof}
                      onChange={(e) => updateGuestData('idProof', e.target.value)}
                      required
                    >
                      <option value="">Select ID Proof</option>
                      <option value="Aadhar">Aadhar Card</option>
                      <option value="Passport">Passport</option>
                      <option value="Driving License">Driving License</option>
                      <option value="Voter ID">Voter ID</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">ID Number*</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.guestData.idNumber}
                      onChange={(e) => updateGuestData('idNumber', e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Special Requests (Optional)</label>
                <textarea
                  className="form-input"
                  rows={3}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                />
              </div>
            </motion.div>
          )}

          {/* Review Step */}
          {currentStep === 3 && (
            <motion.div
              key="review"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="booking-step"
            >
              <h2 className="section-title">Review Your Booking</h2>
              
              <div className="review-grid">
                <div>
                  <h3 className="review-title">Booking Summary</h3>
                  
                  <div className="space-y-4">
                    <div className="review-item">
                      <span className="review-label">Package:</span>
                      <span className="review-value">
                        {PACKAGES.find(p => p.code === formData.package)?.name || "Not selected"}
                      </span>
                    </div>
                    
                    <div className="review-item">
                      <span className="review-label">Check-in Date:</span>
                      <span className="review-value">
                        {formData.checkInDate ? new Date(formData.checkInDate).toLocaleDateString() : "Not selected"}
                      </span>
                    </div>
                    
                    <div className="review-item">
                      <span className="review-label">Accommodation:</span>
                      <span className="review-value">
                        {TENT_OPTIONS.find(t => t.code === formData.tentType)?.name || "Not selected"}
                      </span>
                    </div>
                    
                    <div className="review-item">
                      <span className="review-label">Guests:</span>
                      <span className="review-value">
                        {formData.adults} Adult{formData.adults !== '1' ? 's' : ''}
                        {formData.children > 0 ? `, ${formData.children} Child${formData.children !== 1 ? 'ren' : ''}` : ''}
                      </span>
                    </div>
                    
                    <div className="review-item pt-4 border-t">
                      <span className="review-label">Total:</span>
                      <span className="review-total">Total will be called from API</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="review-title">Guest Details</h3>
                  
                  <div className="guest-section">
                    <div className="space-y-1">
                      <div className="review-item">
                        <span className="review-label">Name:</span>
                        <span className="review-value">{formData.guestData.name || "-"}</span>
                      </div>
                      <div className="review-item">
                        <span className="review-label">Gender:</span>
                        <span className="review-value">{formData.guestData.gender || "-"}</span>
                      </div>
                      <div className="review-item">
                        <span className="review-label">Phone:</span>
                        <span className="review-value">{formData.guestData.phone || "-"}</span>
                      </div>
                      <div className="review-item">
                        <span className="review-label">Email:</span>
                        <span className="review-value">{formData.guestData.email || "-"}</span>
                      </div>
                      <div className="review-item">
                        <span className="review-label">Address:</span>
                        <span className="review-value">{formData.guestData.address || "-"}</span>
                      </div>
                      <div className="review-item">
                        <span className="review-label">ID Proof:</span>
                        <span className="review-value">
                          {formData.guestData.idProof ? `${formData.guestData.idProof} (${formData.guestData.idNumber})` : "-"}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {formData.specialRequests && (
                    <div className="guest-section">
                      <h4>Special Requests</h4>
                      <p className="mt-2 text-gray-600">{formData.specialRequests}</p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="terms-checkbox">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms" className="terms-label">
                  I agree to the Terms & Conditions and Cancellation Policy.
                </label>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Navigation Buttons */}
      <div className="navigation">
        {currentStep > 0 && (
          <button 
            className="btn btn-outline"
            onClick={prevStep}
            type="button"
          >
            Back
          </button>
        )}
        
        {currentStep < 3 ? (
          <button 
            className="btn btn-primary"
            onClick={nextStep}
            disabled={!validateStep(currentStep)}
            type="button"
          >
            Continue
          </button>
        ) : (
          <button 
            className="btn btn-primary"
            onClick={() => alert("Proceeding to payment...")}
            type="button"
          >
            Confirm & Pay
          </button>
        )}
      </div>
    </div>
  );
};

export default BookingForm;