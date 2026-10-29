import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { HOSPITAL_INFO, SERVICES } from '../data/hospitalData';

export default function Footer({ onGoHome, onSelectServicePage, onSelectAboutPage, onSelectGalleryPage }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          
          {/* Brand Info */}
          <div className="footer-brand-col">
            <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '28px', height: '28px', backgroundColor: 'var(--color-surface)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 700, flexShrink: 0 }}>SP</span>
              <span>{HOSPITAL_INFO.shortName}</span>
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '0.85rem', maxWidth: '320px' }}>
              {HOSPITAL_INFO.tagline}. Oral & Maxillofacial Surgery and comprehensive dental care by {HOSPITAL_INFO.doctor.name}.
            </p>
            <div>
              <a href={`tel:${HOSPITAL_INFO.contact.phones[0]}`} className="btn btn-accent" style={{ padding: '0.45rem 0.9rem', fontSize: '0.8rem', minHeight: '36px' }}>
                <Phone size={14} /> Contact Us
              </a>
            </div>
          </div>

          {/* Nav Links Wrapper for Mobile/Tablet 2-column compactness */}
          <div className="footer-links-group">
            {/* Quick Links */}
            <div>
              <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '0.75rem', fontWeight: 600 }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <li>
                  <button onClick={() => onGoHome('#home')} className="footer-link-btn">
                    <ArrowRight size={13} /> Home
                  </button>
                </li>
                <li>
                  <button onClick={onSelectAboutPage} className="footer-link-btn">
                    <ArrowRight size={13} /> About Dr. Prasad
                  </button>
                </li>
                <li>
                  <button onClick={() => onGoHome('#services')} className="footer-link-btn">
                    <ArrowRight size={13} /> All Treatments
                  </button>
                </li>
                <li>
                  <button onClick={onSelectGalleryPage} className="footer-link-btn">
                    <ArrowRight size={13} /> Clinic Gallery
                  </button>
                </li>
                <li>
                  <button onClick={() => onGoHome('#contact')} className="footer-link-btn">
                    <ArrowRight size={13} /> Contact & Location
                  </button>
                </li>
              </ul>
            </div>

            {/* Specialized Services */}
            <div>
              <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '0.75rem', fontWeight: 600 }}>Key Treatments</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                {SERVICES.slice(0, 5).map(s => (
                  <li key={s.id}>
                    <button 
                      onClick={() => { onGoHome(''); setTimeout(() => onSelectServicePage(s.id), 100); }} 
                      className="footer-link-btn"
                    >
                      <ArrowRight size={13} style={{ flexShrink: 0 }} /> <span>{s.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Details */}
          <div className="footer-contact-col">
            <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '0.75rem', fontWeight: 600 }}>Get in Touch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <MapPin size={16} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', lineHeight: 1.4 }}>
                  {HOSPITAL_INFO.contact.addressLine1}, {HOSPITAL_INFO.contact.city}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <Phone size={16} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', lineHeight: 1.4 }}>
                  <a href={`tel:${HOSPITAL_INFO.contact.phones[0]}`} style={{ color: 'inherit' }}>{HOSPITAL_INFO.contact.phones[0]}</a>
                  <span style={{ margin: '0 0.4rem', opacity: 0.5 }}>|</span>
                  <a href={`tel:${HOSPITAL_INFO.contact.phones[1]}`} style={{ color: 'inherit' }}>{HOSPITAL_INFO.contact.phones[1]}</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <Mail size={16} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', lineHeight: 1.4, overflowWrap: 'anywhere', wordBreak: 'break-all' }}>
                  <a href={`mailto:${HOSPITAL_INFO.contact.email}`} style={{ color: 'inherit' }}>
                    {HOSPITAL_INFO.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            &copy; {new Date().getFullYear()} {HOSPITAL_INFO.name}. All rights reserved.
          </div>
          <div>
            Specialist Dental Care Since {HOSPITAL_INFO.establishedYear}
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background-color: var(--color-primary);
          color: #fff;
          padding-top: clamp(1.75rem, 3vw, 2.75rem);
          padding-bottom: clamp(1rem, 1.8vw, 1.35rem);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.3fr 2fr 1.3fr;
          gap: clamp(1.25rem, 2.5vw, 2.25rem);
          align-items: start;
          margin-bottom: clamp(1.25rem, 2vw, 1.75rem);
        }
        .footer-links-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(0.75rem, 2vw, 1.75rem);
        }
        .footer-link-btn {
          color: rgba(255,255,255,0.75);
          font-size: 0.84rem;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.15rem 0;
          text-align: left;
          transition: color 0.2s ease;
          background: none;
          border: none;
          cursor: pointer;
        }
        .footer-link-btn:hover {
          color: #fff;
        }
        .footer-bottom-bar {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 0.85rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.4rem;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.6);
        }

        /* Tablet responsiveness (641px - 1024px) */
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1.35rem 1.75rem;
          }
          .footer-brand-col {
            grid-column: span 1;
          }
          .footer-contact-col {
            grid-column: span 1;
          }
          .footer-links-group {
            grid-column: span 2;
          }
        }

        /* Mobile responsiveness (< 640px) */
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 1.15rem;
            margin-bottom: 1.15rem;
          }
          .footer-brand-col,
          .footer-contact-col,
          .footer-links-group {
            grid-column: span 1;
          }
          .footer-bottom-bar {
            flex-direction: column;
            text-align: center;
            gap: 0.25rem;
          }
        }
      `}</style>
    </footer>
  );
}
