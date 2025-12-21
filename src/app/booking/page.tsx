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
    tentType: "",
    numTents: 1,
    tents: [{ adults: 1 }],
    adults: 1,
    contactData: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
      pickup: ""
    },
    travelers: [] as Array<{
      tent: number;
      name: string;
      age: string;
      gender: string;
      number: string;
      foodType: string;
      country: string;
    }>,
    specialRequests: "",
    termsAccepted: false
  });

  const [_errors, setErrors] = useState({
    package: "",
    checkInDate: "",
    tentType: "",
    contactData: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      state: "",
      city: "",
      pincode: ""
    },
    travelers: [] as string[],
    termsAccepted: ""
  });

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep === 0) {
        initializeTravelers();
      }
      setCurrentStep(prev => Math.min(prev + 1, 2)); // 2 is the last step index
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const validateStep = (step: number) => {
    switch(step) {
      case 0: return !!formData.package && !!formData.checkInDate && !!formData.tentType;
      case 1: return validateContactData() && validateTravelers();
      case 2: return formData.termsAccepted;
      default: return true;
    }
  };

  const validateContactData = () => {
    const { contactData } = formData;
    return (
      contactData.firstName &&
      contactData.lastName &&
      contactData.email &&
      contactData.phone &&
      contactData.country &&
      contactData.state &&
      contactData.city &&
      contactData.pincode
    );
  };

  const validateTravelers = () => {
    return formData.travelers.every(traveler =>
      traveler.name &&
      traveler.age &&
      traveler.gender &&
      traveler.number &&
      traveler.foodType &&
      traveler.country
    );
  };


  const updateNumTents = (num: number) => {
    setFormData(prev => ({
      ...prev,
      numTents: num,
      tents: Array.from({ length: num }, (_, i) => prev.tents[i] || { adults: 1 })
    }));
  };

  const updateTentAdults = (tentIndex: number, adults: number) => {
    setFormData(prev => ({
      ...prev,
      tents: prev.tents.map((tent, i) => i === tentIndex ? { ...tent, adults } : tent)
    }));
  };

  const initializeTravelers = () => {
    const newTravelers: Array<{
      tent: number;
      name: string;
      age: string;
      gender: string;
      number: string;
      foodType: string;
      country: string;
    }> = [];
    formData.tents.forEach((tent, tentIndex) => {
      for (let i = 0; i < tent.adults; i++) {
        newTravelers.push({
          tent: tentIndex + 1,
          name: "",
          age: "",
          gender: "",
          number: "",
          foodType: "",
          country: ""
        });
      }
    });
    setFormData(prev => ({ ...prev, travelers: newTravelers }));
  };

  const updateTraveler = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      travelers: prev.travelers.map((traveler, i) =>
        i === index ? { ...traveler, [field]: value } : traveler
      )
    }));
  };

  const updateContactData = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      contactData: {
        ...prev.contactData,
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
              style={{ width: `${(currentStep / 2) * 100}%` }} // 3 steps total (0,1,2)
            />
          </div>
          {["Personal Info", "Contact Details", "Review"].map((label, index) => (
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
          {/* Personal Info Step */}
          {currentStep === 0 && (
            <motion.div
              key="personal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="booking-step"
            >
              <h2 className="section-title">Personal Information</h2>

              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label className="form-label">Select Package</label>
                    <select
                      className="form-selectz"
                      value={formData.package}
                      onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                    >
                      <option value="">Select Package</option>
                      {PACKAGES.map(pkg => (
                        <option key={pkg.id} value={pkg.code}>{pkg.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-12 col-md-6">
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

              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label className="form-label">Number of Tents</label>
                    <select
                      className="form-selectz"
                      value={formData.numTents}
                      onChange={(e) => updateNumTents(parseInt(e.target.value))}
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="tents-section">
                <h3 className="section-title">Tent Details</h3>
                {formData.tents.map((tent, index) => (
                  <div key={index} className="tent-item">
                    <h4>Tent {index + 1}</h4>
                    <div className="form-group">
                      <label className="form-label">Adults (6-60+)</label>
                      <select
                        className="form-selectz"
                        value={tent.adults}
                        onChange={(e) => updateTentAdults(index, parseInt(e.target.value))}
                      >
                        {[1, 2, 3].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Contact Details and Guest Details Step */}
          {currentStep === 1 && (
            <motion.div
              key="contact-guests"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="booking-step"
            >
              <h2 className="section-title">Contact Details</h2>

              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label className="form-label">First Name*</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.contactData.firstName}
                      onChange={(e) => updateContactData('firstName', e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label className="form-label">Last Name*</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.contactData.lastName}
                      onChange={(e) => updateContactData('lastName', e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label className="form-label">Email*</label>
                    <input
                      type="email"
                      className="form-input"
                      value={formData.contactData.email}
                      onChange={(e) => updateContactData('email', e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label className="form-label">Phone Number*</label>
                    <input
                      type="tel"
                      className="form-input"
                      value={formData.contactData.phone}
                      onChange={(e) => updateContactData('phone', e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label className="form-label">Country*</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.contactData.country}
                      onChange={(e) => updateContactData('country', e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label className="form-label">State*</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.contactData.state}
                      onChange={(e) => updateContactData('state', e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label className="form-label">City*</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.contactData.city}
                      onChange={(e) => updateContactData('city', e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label className="form-label">Pincode*</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.contactData.pincode}
                      onChange={(e) => updateContactData('pincode', e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Pickup/Drop-off Point</label>
                <select
                  className="form-selectz"
                  value={formData.contactData.pickup}
                  onChange={(e) => updateContactData('pickup', e.target.value)}
                >
                  <option value="">Select Pickup Point</option>
                  <option value="08:15 AM From Railway Station, Bhuj">08:15 AM From Railway Station, Bhuj</option>
                  <option value="10:00 AM From Railway Station, Bhuj and Airport, Bhuj">10:00 AM From Railway Station, Bhuj and Airport, Bhuj</option>
                  <option value="01:30 PM From Railway Station, Bhuj">01:30 PM From Railway Station, Bhuj</option>
                  <option value="03:30 PM From Airport, Bhuj">03:30 PM From Airport, Bhuj</option>
                  <option value="No Pickup">No Pickup</option>
                </select>
              </div>

              <h3 className="section-title">Guest Details</h3>
              <div className="guest-cards-container">
                {formData.travelers.map((traveler, index) => {
                  // Calculate guest number within the current tent
                  const tentGuestNumber = formData.travelers
                    .slice(0, index + 1)
                    .filter(t => t.tent === traveler.tent)
                    .length;
  
                  return (
                    <div key={index} className="guest-card">
                      <div className="guest-card-header">
                        <span className="tent-badge">Tent {traveler.tent}: </span>
                        <span className="guest-number">Guest {tentGuestNumber}</span>
                      </div>
                    
                    <div className="guest-card-body">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label className="form-label">Traveler Name*</label>
                            <input
                              type="text"
                              className="form-input"
                              value={traveler.name}
                              onChange={(e) => updateTraveler(index, 'name', e.target.value)}
                              placeholder="Enter full name"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label className="form-label">Age*</label>
                            <input
                              type="number"
                              className="form-input"
                              value={traveler.age}
                              onChange={(e) => updateTraveler(index, 'age', e.target.value)}
                              placeholder="Age"
                              min="1"
                              max="120"
                              required
                            />
                          </div>
                        </div>
                      </div>
  
                      <div className="row">
                        <div className="col-12 col-md-4">
                          <div className="form-group">
                            <label className="form-label">Gender*</label>
                            <select
                              className="form-selectz"
                              value={traveler.gender}
                              onChange={(e) => updateTraveler(index, 'gender', e.target.value)}
                              required
                            >
                              <option value="">Select</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <div className="form-group">
                            <label className="form-label">Phone Number*</label>
                            <input
                              type="tel"
                              className="form-input"
                              value={traveler.number}
                              onChange={(e) => updateTraveler(index, 'number', e.target.value)}
                              placeholder="Phone number"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <div className="form-group">
                            <label className="form-label">Food Type*</label>
                            <select
                              className="form-selectz"
                              value={traveler.foodType}
                              onChange={(e) => updateTraveler(index, 'foodType', e.target.value)}
                              required
                            >
                              <option value="">Select</option>
                              <option value="Vegetarian">Vegetarian</option>
                              <option value="Non-Vegetarian">Non-Vegetarian</option>
                              <option value="Jain">Jain</option>
                            </select>
                          </div>
                        </div>
                      </div>
  
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group">
                            <label className="form-label">Country*</label>
                            <input
                              type="text"
                              className="form-input"
                              value={traveler.country}
                              onChange={(e) => updateTraveler(index, 'country', e.target.value)}
                              placeholder="Country"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
})}
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
          {currentStep === 2 && (
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
                        {formData.numTents} Tent{formData.numTents !== 1 ? 's' : ''} - {formData.tents.reduce((sum, tent) => sum + tent.adults, 0)} Adult{formData.tents.reduce((sum, tent) => sum + tent.adults, 0) !== 1 ? 's' : ''}
                      </span>
                    </div>

                    <div className="review-item pt-4 border-t">
                      <span className="review-label">Total:</span>
                      <span className="review-total">Total will be called from API</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="review-title">Contact Details</h3>

                  <div className="guest-section">
                    <div className="space-y-1">
                      <div className="review-item">
                        <span className="review-label">Name:</span>
                        <span className="review-value">{`${formData.contactData.firstName} ${formData.contactData.lastName}` || "-"}</span>
                      </div>
                      <div className="review-item">
                        <span className="review-label">Email:</span>
                        <span className="review-value">{formData.contactData.email || "-"}</span>
                      </div>
                      <div className="review-item">
                        <span className="review-label">Phone:</span>
                        <span className="review-value">{formData.contactData.phone || "-"}</span>
                      </div>
                      <div className="review-item">
                        <span className="review-label">Address:</span>
                        <span className="review-value">{`${formData.contactData.city}, ${formData.contactData.state}, ${formData.contactData.country} - ${formData.contactData.pincode}` || "-"}</span>
                      </div>
                      <div className="review-item">
                        <span className="review-label">Pickup:</span>
                        <span className="review-value">{formData.contactData.pickup || "-"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="guest-section">
                    <h3 className="review-title">Guest Information</h3>
                    <div className="guest-cards-container">
                      {formData.travelers.map((traveler, index) => {
                        // Calculate guest number within the current tent
                        const tentGuestNumber = formData.travelers
                          .slice(0, index + 1)
                          .filter(t => t.tent === traveler.tent)
                          .length;
                        
                        return (
                          <div key={index} className="guest-card review-card">
                            <div className="guest-card-header">
                              <span className="tent-badge">
                                Tent {traveler.tent}:{" "}
                              </span>
                              <span className="guest-number">
                                Guest {tentGuestNumber}
                              </span>
                            </div>

                            <div className="guest-card-body">
                              <div className="row">
                                <div className="col-12 col-md-6">
                                  <div className="review-item">
                                    <span className="review-label">Name:</span>
                                    <span className="review-value">
                                      {traveler.name || "-"}
                                    </span>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  <div className="review-item">
                                    <span className="review-label">Age:</span>
                                    <span className="review-value">
                                      {traveler.age || "-"}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-12 col-md-6">
                                  <div className="review-item">
                                    <span className="review-label">
                                      Gender:
                                    </span>
                                    <span className="review-value">
                                      {traveler.gender || "-"}
                                    </span>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  <div className="review-item">
                                    <span className="review-label">Phone:</span>
                                    <span className="review-value">
                                      {traveler.number || "-"}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-12 col-md-6">
                                  <div className="review-item">
                                    <span className="review-label">
                                      Food Type:
                                    </span>
                                    <span className="review-value">
                                      {traveler.foodType || "-"}
                                    </span>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  <div className="review-item">
                                    <span className="review-label">
                                      Country:
                                    </span>
                                    <span className="review-value">
                                      {traveler.country || "-"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );})}
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
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.termsAccepted}
                  onChange={(e) => setFormData(prev => ({ ...prev, termsAccepted: e.target.checked }))}
                  required
                />
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
        
        {currentStep < 2 ? (
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
            disabled={!validateStep(currentStep)}
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