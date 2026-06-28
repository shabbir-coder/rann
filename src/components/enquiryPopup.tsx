/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { submitEnquiry } from '@/services/enquiryService';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const TENT_OPTIONS = [
  { value: 'darbari',       label: 'Darbari Suite' },
  { value: 'rajwadi',       label: 'Rajwadi Suite' },
  { value: 'super-premium', label: 'Super Premium Tents' },
  { value: 'premium',       label: 'Premium Tents' },
  { value: 'deluxe-ac',     label: 'Deluxe AC Swiss Cottages' },
  { value: 'non-ac',        label: 'Non AC Swiss Cottages' },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  monthOfTravel: string;
  maxPersons: string;
  tentPreferences: string[];
}

interface FormErrors extends Record<string, string | undefined> {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  monthOfTravel?: string;
  maxPersons?: string;
  tentPreferences?: string;
}

const EMPTY_FORM: FormData = {
  name: '', email: '', phone: '', message: '',
  monthOfTravel: '', maxPersons: '', tentPreferences: [],
};

const EnquiryPopup = forwardRef((props, ref) => {
  const [formData, setFormData]         = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors]             = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted]   = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError]   = useState('');
  const [showAdditional, setShowAdditional] = useState(false);

  const modalRef        = useRef<any>(null);
  const modalElementRef = useRef<HTMLDivElement | null>(null);

  useImperativeHandle(ref, () => ({ openModal: () => modalRef.current?.show() }));

  useEffect(() => {
    import('bootstrap').then(({ Modal }) => {
      const element = document.getElementById('enquiryModal');
      if (element && !modalRef.current) {
        modalElementRef.current = element as HTMLDivElement;
        const modalInstance = new Modal(element);
        modalRef.current = modalInstance;
        const timer = setTimeout(() => modalRef.current?.show(), 20000);
        element.addEventListener('hidden.bs.modal', () => {
          document.body.classList.remove('modal-open');
          document.body.style.cssText = '';
          document.querySelectorAll('.modal-backdrop').forEach(b => b.remove());
        });
        return () => { clearTimeout(timer); modalInstance?.dispose(); };
      }
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleTentChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      tentPreferences: prev.tentPreferences.includes(value)
        ? prev.tentPreferences.filter(v => v !== value)
        : [...prev.tentPreferences, value],
    }));
    if (errors.tentPreferences) setErrors(prev => ({ ...prev, tentPreferences: undefined }));
  };

  const validateForm = (): boolean => {
    const e: FormErrors = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim()) { e.email = 'Email is required'; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { e.email = 'Enter a valid email'; }
    if (!formData.phone.trim()) { e.phone = 'Phone is required'; }
    else if (!/^[0-9]{10,15}$/.test(formData.phone)) { e.phone = 'Enter a valid phone number'; }
    if (!formData.message.trim()) e.message = 'Enquiry message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitError('');
    try {
      await submitEnquiry(formData);
      setIsSubmitted(true);
      setTimeout(() => {
        modalRef.current?.hide();
        setIsSubmitted(false);
        setFormData(EMPTY_FORM);
        setShowAdditional(false);
      }, 10000);
    } catch {
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const accentColor = '#b82e88';

  return (
    <>
      <button onClick={() => modalRef.current?.show()} className="btn d-none"
        style={{ backgroundColor: accentColor, color: '#fff', border: 'none' }}>
        Enquire Now
      </button>

      <div className="modal fade" id="enquiryModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" style={{ margin: '1.5rem auto' }}>
          <div
            className="modal-content border-0"
            style={{
              borderRadius: '1.25rem',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'row',
              maxHeight: '88vh',
              boxShadow: '0 25px 60px rgba(0,0,0,0.18)',
            }}
          >

            {/* ── LEFT image panel ── */}
            <div
              className="d-none d-md-block flex-shrink-0"
              style={{
                width: '40%',
                backgroundImage: 'url(/img/gallery/pr5.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                position: 'relative',
              }}
            >
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
              }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem 1.75rem' }}>
                <h4 className="text-white fw-bold mb-3" style={{ lineHeight: 1.3, fontSize: '1.15rem' }}>
                  Experience the Magic<br />of Rann Utsav
                </h4>
                <ul className="text-white list-unstyled mb-0" style={{ fontSize: '0.875rem' }}>
                  {['Cultural Performances', 'White Desert Camping', 'Traditional Gujarati Cuisine', 'Adventure Activities'].map(item => (
                    <li key={item} className="mb-2 d-flex align-items-center gap-2">
                      <i className="fas fa-check-circle" style={{ color: accentColor, fontSize: '1rem' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── RIGHT form panel ── */}
            <div style={{ flex: 1, overflowY: 'auto', position: 'relative', backgroundColor: '#fff' }}>

              {/* close btn */}
              <button
                type="button"
                onClick={() => modalRef.current?.hide()}
                aria-label="Close"
                style={{
                  position: 'absolute', top: '1rem', right: '1rem',
                  background: 'none', border: 'none', fontSize: '1.25rem',
                  cursor: 'pointer', color: '#6c757d', lineHeight: 1, zIndex: 10,
                }}
              >
                ✕
              </button>

              <div style={{ padding: '2rem 2rem 1.75rem' }}>
                <p className="mb-1" style={{ fontSize: '0.8rem', color: accentColor, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Get in Touch
                </p>
                <h3 className="fw-bold mb-4" style={{ fontSize: '1.5rem', lineHeight: 1.25 }}>
                  Plan Your <span style={{ color: accentColor }}>Rann Utsav</span> Trip
                </h3>

                {isSubmitted ? (
                  <div className="text-center py-5">
                    <div style={{
                      width: 64, height: 64, borderRadius: '50%',
                      background: '#d4edda', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', margin: '0 auto 1rem',
                    }}>
                      <i className="fas fa-check" style={{ color: '#28a745', fontSize: '1.5rem' }} />
                    </div>
                    <h5 className="fw-bold">Thank You!</h5>
                    <p className="text-muted">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>

                    {/* Name */}
                    <div className="mb-3">
                      <label htmlFor="name" style={labelStyle}>Full Name</label>
                      <input type="text" id="name" name="name"
                        className={errors.name ? 'is-invalid' : ''}
                        style={inputStyle(!!errors.name)}
                        value={formData.name} onChange={handleChange}
                        placeholder="Enter your full name" />
                      {errors.name && <div className="invalid-feedback d-block" style={{ fontSize: '0.8rem' }}>{errors.name}</div>}
                    </div>

                    {/* Email + Phone side by side */}
                    <div className="row g-3 mb-3">
                      <div className="col-6">
                        <label htmlFor="email" style={labelStyle}>Email Address</label>
                        <input type="email" id="email" name="email"
                          className={errors.email ? 'is-invalid' : ''}
                          style={inputStyle(!!errors.email)}
                          value={formData.email} onChange={handleChange}
                          placeholder="you@email.com" />
                        {errors.email && <div className="invalid-feedback d-block" style={{ fontSize: '0.8rem' }}>{errors.email}</div>}
                      </div>
                      <div className="col-6">
                        <label htmlFor="phone" style={labelStyle}>Phone Number</label>
                        <input type="tel" id="phone" name="phone"
                          className={errors.phone ? 'is-invalid' : ''}
                          style={inputStyle(!!errors.phone)}
                          value={formData.phone} onChange={handleChange}
                          placeholder="10-digit number" />
                        {errors.phone && <div className="invalid-feedback d-block" style={{ fontSize: '0.8rem' }}>{errors.phone}</div>}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="mb-3">
                      <label htmlFor="message" style={labelStyle}>Enquiry Message</label>
                      <textarea id="message" name="message"
                        className={errors.message ? 'is-invalid' : ''}
                        style={{ ...inputStyle(!!errors.message), resize: 'vertical' } as React.CSSProperties}
                        value={formData.message} onChange={handleChange}
                        placeholder="Any specific requirements or questions?"
                        rows={3} />
                      {errors.message && <div className="invalid-feedback d-block" style={{ fontSize: '0.8rem' }}>{errors.message}</div>}
                    </div>

                    {/* ── Additional Details accordion ── */}
                    <div className="mb-4" style={{
                      border: `1.5px solid ${showAdditional ? accentColor : '#e0e0e0'}`,
                      borderRadius: '0.75rem',
                      overflow: 'hidden',
                      transition: 'border-color 0.2s',
                    }}>
                      <button
                        type="button"
                        onClick={() => setShowAdditional(p => !p)}
                        style={{
                          width: '100%', padding: '0.75rem 1rem',
                          background: showAdditional ? `${accentColor}10` : '#fafafa',
                          border: 'none', cursor: 'pointer',
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                          transition: 'background 0.2s',
                        }}
                      >
                        <span style={{ fontWeight: 600, fontSize: '0.9rem', color: showAdditional ? accentColor : '#444' }}>
                          <i className="fas fa-sliders-h me-2" style={{ color: accentColor }} />
                          Additional Preferences
                          {(formData.monthOfTravel || formData.maxPersons || formData.tentPreferences.length > 0) && (
                            <span style={{
                              marginLeft: '0.5rem', background: accentColor,
                              color: '#fff', borderRadius: '999px',
                              fontSize: '0.7rem', padding: '1px 7px', fontWeight: 700,
                            }}>
                              {[formData.monthOfTravel, formData.maxPersons, ...formData.tentPreferences].filter(Boolean).length}
                            </span>
                          )}
                        </span>
                        <i
                          className={`fas fa-chevron-${showAdditional ? 'up' : 'down'}`}
                          style={{ color: accentColor, fontSize: '0.8rem', transition: 'transform 0.2s' }}
                        />
                      </button>

                      {showAdditional && (
                        <div style={{ padding: '1rem', borderTop: '1px solid #f0f0f0', background: '#fff' }}>

                          {/* Month + Persons */}
                          <div className="row g-3 mb-3">
                            <div className="col-7">
                              <label htmlFor="monthOfTravel" style={labelStyle}>Month of Travel</label>
                              <select id="monthOfTravel" name="monthOfTravel"
                                style={inputStyle(false)}
                                value={formData.monthOfTravel} onChange={handleChange}>
                                <option value="">Select month</option>
                                {MONTHS.map(m => <option key={m} value={m}>{m}</option>)}
                              </select>
                            </div>
                            <div className="col-5">
                              <label htmlFor="maxPersons" style={labelStyle}>No. of Persons</label>
                              <input type="number" id="maxPersons" name="maxPersons"
                                style={inputStyle(false)}
                                value={formData.maxPersons} onChange={handleChange}
                                placeholder="e.g. 2" min={1} max={50} />
                            </div>
                          </div>

                          {/* Tent preference */}
                          <div>
                            <label style={labelStyle}>Tent / Accommodation Preference</label>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '0.4rem' }}>
                              {TENT_OPTIONS.map(opt => {
                                const selected = formData.tentPreferences.includes(opt.value);
                                return (
                                  <button
                                    key={opt.value}
                                    type="button"
                                    onClick={() => handleTentChange(opt.value)}
                                    style={{
                                      padding: '5px 12px',
                                      borderRadius: '999px',
                                      fontSize: '0.78rem',
                                      fontWeight: 500,
                                      cursor: 'pointer',
                                      border: `1.5px solid ${selected ? accentColor : '#d0d0d0'}`,
                                      background: selected ? `${accentColor}15` : '#fff',
                                      color: selected ? accentColor : '#555',
                                      transition: 'all 0.15s',
                                    }}
                                  >
                                    {selected && <i className="fas fa-check me-1" style={{ fontSize: '0.7rem' }} />}
                                    {opt.label}
                                  </button>
                                );
                              })}
                            </div>
                            {errors.tentPreferences && (
                              <p style={{ color: '#dc3545', fontSize: '0.8rem', marginTop: '0.4rem' }}>{errors.tentPreferences}</p>
                            )}
                          </div>

                        </div>
                      )}
                    </div>

                    {submitError && (
                      <div className="alert alert-danger py-2 mb-3" style={{ fontSize: '0.85rem' }}>{submitError}</div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        width: '100%', padding: '0.85rem',
                        background: isSubmitting ? '#c96aaa' : accentColor,
                        color: '#fff', border: 'none',
                        borderRadius: '0.75rem', fontSize: '1rem',
                        fontWeight: 700, cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        letterSpacing: '0.02em', transition: 'background 0.2s',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                      }}
                    >
                      {isSubmitting ? (
                        <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /> Submitting…</>
                      ) : (
                        <>Submit Enquiry <i className="fas fa-paper-plane" /></>
                      )}
                    </button>

                    <p style={{ textAlign: 'center', color: '#999', fontSize: '0.78rem', marginTop: '0.75rem', marginBottom: 0 }}>
                      🔒 We&apos;ll get back to you within 24 hours
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
});

// ── shared micro-styles ──
const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: '0.35rem',
  fontSize: '0.82rem',
  fontWeight: 600,
  color: '#374151',
};

const inputStyle = (hasError: boolean): React.CSSProperties => ({
  width: '100%',
  padding: '0.6rem 0.85rem',
  fontSize: '0.92rem',
  border: `1.5px solid ${hasError ? '#dc3545' : '#d1d5db'}`,
  borderRadius: '0.6rem',
  outline: 'none',
  background: '#fff',
  color: '#111',
  transition: 'border-color 0.15s',
  boxSizing: 'border-box',
});

EnquiryPopup.displayName = 'EnquiryPopup';
export default EnquiryPopup;