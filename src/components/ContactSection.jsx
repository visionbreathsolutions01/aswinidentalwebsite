import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export default function ContactSection() {
  return (
    <section id="contact" className="section-light" style={{ backgroundColor: 'var(--color-bg-main)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="section-tag">Patient Services</div>
          <h2 className="section-title">Schedule a <span className="text-secondary">Consultation</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Book your appointment or reach out for specialist surgical and dental inquiries.
          </p>
        </div>

        <div className="card contact-main-card">
          
          {/* Left Info Panel */}
          <div className="contact-info-panel" style={{ backgroundColor: 'var(--color-primary)', color: '#fff', padding: 'clamp(1.75rem, 4vw, 3.5rem) clamp(1.25rem, 3.5vw, 2.5rem)' }}>
            <h3 style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)', marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#fff' }}>Contact Information</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.25rem, 2.5vw, 2rem)' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Phone size={22} color="var(--color-accent-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ minWidth: 0, flex: 1 }}>
                  <h4 style={{ fontSize: '0.95rem', color: '#fff', marginBottom: '0.25rem' }}>Direct Phones</h4>
                  <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)', fontWeight: 500 }}>
                    {HOSPITAL_INFO.contact.phones.map(p => (
                      <div key={p}>
                        <a href={`tel:${p}`} style={{ color: 'inherit', textDecoration: 'none' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}>
                          {p}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <MapPin size={22} color="var(--color-accent-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ minWidth: 0, flex: 1 }}>
                  <h4 style={{ fontSize: '0.95rem', color: '#fff', marginBottom: '0.25rem' }}>Hospital Address</h4>
                  <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {HOSPITAL_INFO.contact.addressLine1},<br/>
                    {HOSPITAL_INFO.contact.addressLine2},<br/>
                    {HOSPITAL_INFO.contact.city} - {HOSPITAL_INFO.contact.pincode}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Clock size={22} color="var(--color-accent-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ minWidth: 0, flex: 1 }}>
                  <h4 style={{ fontSize: '0.95rem', color: '#fff', marginBottom: '0.25rem' }}>Timings</h4>
                  <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {HOSPITAL_INFO.contact.workingHours.map((wh, i) => (
                      <div key={i} style={{ marginBottom: '0.4rem' }}>
                        <strong style={{ color: '#fff' }}>{wh.days}:</strong><br/>
                        {wh.time}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Mail size={22} color="var(--color-accent-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ minWidth: 0, flex: 1 }}>
                  <h4 style={{ fontSize: '0.95rem', color: '#fff', marginBottom: '0.25rem' }}>Email</h4>
                  <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', overflowWrap: 'anywhere', wordBreak: 'break-all' }}>
                    <a href={`mailto:${HOSPITAL_INFO.contact.email}`} style={{ color: 'inherit' }}>
                      {HOSPITAL_INFO.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Action Panel */}
          <div className="contact-action-panel" style={{ padding: 'clamp(1.75rem, 4vw, 3.5rem) clamp(1.25rem, 3.5vw, 2.5rem)', backgroundColor: 'var(--color-surface)' }}>
            <h3 style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)', marginBottom: '1rem', color: 'var(--color-primary)' }}>Request Appointment</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)', lineHeight: 1.6, fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
              For immediate medical assistance or to book a surgical consultation, please contact our front desk directly by phone or WhatsApp.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <a href={`tel:${HOSPITAL_INFO.contact.phones[0]}`} className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
                <Phone size={18} /> Call Us Now
              </a>
              <a 
                href={`https://wa.me/${HOSPITAL_INFO.contact.whatsapp}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary" 
                style={{ width: '100%', padding: '1rem', borderColor: '#25D366', color: '#25D366' }} 
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#25D366'; e.currentTarget.style.color = '#fff'; }} 
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--color-surface)'; e.currentTarget.style.color = '#25D366'; }}
              >
                Message on WhatsApp
              </a>
            </div>

            <div style={{ marginTop: 'clamp(1.75rem, 3vw, 2.5rem)', borderRadius: 'var(--radius-md)', overflow: 'hidden', height: 'clamp(200px, 30vw, 260px)' }}>
              <iframe 
                src={HOSPITAL_INFO.contact.googleMapsEmbed} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                title="Hospital Location"
              />
            </div>
          </div>

        </div>

      </div>
      <style>{`
        .contact-main-card {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
