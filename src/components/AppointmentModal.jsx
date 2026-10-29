import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, CheckCircle2 } from 'lucide-react';
import { HOSPITAL_INFO, SERVICES } from '../data/hospitalData';

export default function AppointmentModal({ isOpen, onClose, initialService }) {
  const getInitialServiceName = () => {
    if (initialService) {
      const match = SERVICES.find(s => s.title.toLowerCase() === initialService.toLowerCase() || s.id === initialService);
      if (match) return match.title;
    }
    return SERVICES[0].title;
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: getInitialServiceName(),
    preferredDate: '',
    preferredTime: 'Morning (9 AM - 1 PM)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const [prevInitialService, setPrevInitialService] = useState(initialService);

  if (initialService !== prevInitialService) {
    setPrevInitialService(initialService);
    const match = SERVICES.find(s => s.title.toLowerCase() === initialService?.toLowerCase() || s.id === initialService);
    if (match) {
      setFormData(prev => ({ ...prev, service: match.title }));
    }
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSubmitted(false);
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      onClick={resetForm}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(6px)',
        zIndex: 3000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(0.75rem, 3vw, 1.25rem)'
      }}
    >
      <div 
        className="animate-fade-in card"
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '520px',
          maxHeight: 'min(90dvh, 720px)',
          overflowY: 'auto',
          padding: 'clamp(1.25rem, 4vw, 2rem)',
          position: 'relative',
          backgroundColor: 'var(--color-surface)',
          borderRadius: 'var(--radius-lg)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={resetForm}
          aria-label="Close appointment popup"
          style={{
            position: 'absolute',
            top: '0.85rem',
            right: '0.85rem',
            color: 'var(--color-text-subtle)',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            backgroundColor: 'var(--color-bg-main)',
            border: '1px solid var(--color-border)',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <>
            <div style={{ marginBottom: '1.25rem', paddingRight: '2.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Fast Clinic Booking
              </div>
              <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.45rem)', color: 'var(--color-text-main)', fontWeight: 700, marginTop: '0.2rem', lineHeight: 1.3 }}>
                Book Your Dental Appointment
              </h3>
              <p style={{ fontSize: 'clamp(0.8rem, 2vw, 0.85rem)', color: 'var(--color-text-subtle)', margin: '0.25rem 0 0 0' }}>
                Direct consultation with Dr. B. Srinivasa Prasad (30+ Years Exp.)
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              
              {/* Full Name */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '0.3rem' }}>
                  Full Name *
                </label>
                <div style={{ position: 'relative' }}>
                  <User size={16} color="var(--color-text-subtle)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.75rem 0.65rem 2.25rem',
                      fontSize: '1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-border)',
                      backgroundColor: 'var(--color-bg-main)',
                      color: 'var(--color-text-main)',
                      minHeight: '44px'
                    }}
                  />
                </div>
              </div>

              {/* Mobile Phone */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '0.3rem' }}>
                  Phone Number *
                </label>
                <div style={{ position: 'relative' }}>
                  <Phone size={16} color="var(--color-text-subtle)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. 9848121876"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.75rem 0.65rem 2.25rem',
                      fontSize: '1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-border)',
                      backgroundColor: 'var(--color-bg-main)',
                      color: 'var(--color-text-main)',
                      minHeight: '44px'
                    }}
                  />
                </div>
              </div>

              {/* Service Select */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '0.3rem' }}>
                  Select Required Treatment
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.75rem',
                    fontSize: '1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    backgroundColor: 'var(--color-bg-main)',
                    color: 'var(--color-text-main)',
                    minHeight: '44px'
                  }}
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>{s.title} ({s.category})</option>
                  ))}
                </select>
              </div>

              {/* Preferred Date & Time */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '0.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '0.3rem' }}>
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.75rem',
                      fontSize: '1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-border)',
                      backgroundColor: 'var(--color-bg-main)',
                      color: 'var(--color-text-main)',
                      minHeight: '44px'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '0.3rem' }}>
                    Preferred Time
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.75rem',
                      fontSize: '1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-border)',
                      backgroundColor: 'var(--color-bg-main)',
                      color: 'var(--color-text-main)',
                      minHeight: '44px'
                    }}
                  >
                    <option>Morning (9 AM - 1 PM)</option>
                    <option>Afternoon (2 PM - 5 PM)</option>
                    <option>Evening (5 PM - 8:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div style={{ marginTop: '0.5rem' }}>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.85rem', fontSize: '0.95rem' }}>
                  <Calendar size={18} />
                  <span>Confirm Booking Request</span>
                </button>
              </div>

            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-secondary-light)',
              color: 'var(--color-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem auto'
            }}>
              <CheckCircle2 size={32} />
            </div>

            <h3 style={{ fontSize: 'clamp(1.15rem, 3vw, 1.35rem)', color: 'var(--color-text-main)', marginBottom: '0.35rem', fontWeight: 700 }}>
              Appointment Request Received!
            </h3>

            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-subtle)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              Thank you, <strong>{formData.name || 'Patient'}</strong>. Our clinic team will call you shortly on <strong>{formData.phone}</strong> to confirm your appointment for <strong>{formData.service}</strong>.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <a
                href={`tel:${HOSPITAL_INFO.contact.phones[0]}`}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.75rem', fontSize: '0.9rem' }}
              >
                <Phone size={16} />
                <span>Call Clinic Desk ({HOSPITAL_INFO.contact.phones[0]})</span>
              </a>

              <button
                onClick={resetForm}
                className="btn btn-secondary"
                style={{ width: '100%', padding: '0.75rem', fontSize: '0.9rem' }}
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
