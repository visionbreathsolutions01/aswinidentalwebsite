import React from 'react';
import { ArrowRight, Info, CheckCircle2, Phone } from 'lucide-react';
import { HOSPITAL_INFO, SERVICES } from '../data/hospitalData';

export default function ServicePage({ serviceId, onBackToServices, onSelectService }) {
  const service = SERVICES.find(s => s.id === serviceId) || SERVICES[0];

  return (
    <div className="animate-fade-in" style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingBottom: 'clamp(3rem, 5vw, 5rem)' }}>
      
      {/* Page Header */}
      <div style={{ backgroundColor: 'var(--color-primary)', padding: 'clamp(3rem, 6vw, 5rem) 0 clamp(3rem, 5vw, 4.5rem) 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05, backgroundImage: 'radial-gradient(circle at 100% 0%, #ffffff 0%, transparent 50%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <button 
            onClick={() => onBackToServices('#services')} 
            style={{ 
              color: 'rgba(255,255,255,0.8)', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              marginBottom: '1.25rem', 
              fontSize: '0.9rem', 
              fontWeight: 500,
              minHeight: '40px',
              padding: '0.25rem 0'
            }} 
            onMouseEnter={e=>e.currentTarget.style.color='#fff'} 
            onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.8)'}
          >
            <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} /> Back to Treatments
          </button>
          
          <div>
            <div style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--color-accent-light)', padding: '0.3rem 1rem', borderRadius: '2rem', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.85rem' }}>
              {service.category}
            </div>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff', marginBottom: '1rem', lineHeight: 1.2 }}>{service.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', maxWidth: '720px', lineHeight: 1.6 }}>{service.fullDesc}</p>
        </div>
      </div>

      <div className="container" style={{ marginTop: 'clamp(-1.75rem, -3vw, -2.5rem)', position: 'relative', zIndex: 2 }}>
        <div className="service-page-grid">
          
          {/* Main Content */}
          <div>
            <div className="card" style={{ padding: 'clamp(1.5rem, 4vw, 3rem) clamp(1.25rem, 3.5vw, 2.5rem)', marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>
              
              {service.detailedContent && service.detailedContent.map((section, idx) => (
                <div key={idx} style={{ marginBottom: idx === service.detailedContent.length - 1 ? 0 : 'clamp(2rem, 4vw, 3rem)' }}>
                  <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', color: 'var(--color-primary)', marginBottom: '1rem', lineHeight: 1.3 }}>{section.heading}</h3>
                  {section.text && <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, fontSize: 'clamp(0.9rem, 2vw, 1rem)', marginBottom: section.list || section.text2 ? '1.25rem' : 0 }}>{section.text}</p>}
                  
                  {section.list && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: section.text2 ? '1.25rem' : 0 }}>
                      {section.list.map((item, i) => (
                        <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                          <CheckCircle2 size={18} color="var(--color-secondary)" style={{ marginTop: '3px', flexShrink: 0 }} />
                          <div>
                            {item.title && <strong style={{ display: 'block', color: 'var(--color-text-main)', marginBottom: '0.2rem', fontSize: '0.95rem' }}>{item.title}</strong>}
                            <span style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, fontSize: '0.9rem' }}>{item.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {section.text2 && <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, fontSize: 'clamp(0.9rem, 2vw, 1rem)', margin: 0 }}>{section.text2}</p>}
                </div>
              ))}

              {!service.detailedContent && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem', backgroundColor: 'var(--color-bg-main)', borderRadius: 'var(--radius-md)' }}>
                  <Info size={24} color="var(--color-secondary)" style={{ flexShrink: 0 }} />
                  <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Detailed clinical information is available during your consultation with Dr. Prasad.</p>
                </div>
              )}
            </div>

            <div className="card" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(1.25rem, 3.5vw, 2rem)', backgroundColor: 'var(--color-primary)', color: '#fff' }}>
              <h3 style={{ color: '#fff', fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', marginBottom: '0.75rem' }}>Book a Consultation</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', fontSize: 'clamp(0.9rem, 2vw, 1rem)', lineHeight: 1.6 }}>
                Discuss your treatment options directly with our specialists. Contact the clinic to schedule your visit.
              </p>
              <a href={`tel:${HOSPITAL_INFO.contact.phones[0]}`} className="btn btn-accent" style={{ display: 'inline-flex', maxWidth: '100%' }}>
                <Phone size={18} /> Call {HOSPITAL_INFO.contact.phones[0]}
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="card service-sidebar-card" style={{ padding: 'clamp(1.25rem, 3.5vw, 2rem)' }}>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--color-primary)', marginBottom: '1.25rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.75rem' }}>Treatment Benefits</h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                {service.benefits.map((benefit, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={16} color="var(--color-secondary)" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{benefit}</span>
                  </div>
                ))}
              </div>

              <h4 style={{ fontSize: '1.05rem', color: 'var(--color-primary)', marginBottom: '0.75rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.75rem' }}>Other Treatments</h4>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {SERVICES.filter(s => s.id !== serviceId).slice(0, 6).map(s => (
                  <button 
                    key={s.id}
                    onClick={() => { window.scrollTo(0,0); onSelectService(s.id); }}
                    style={{ 
                      textAlign: 'left', 
                      padding: '0.75rem 0', 
                      minHeight: '44px',
                      borderBottom: '1px solid var(--color-border-light)', 
                      fontSize: '0.9rem', 
                      color: 'var(--color-text-muted)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between', 
                      transition: '0.2s',
                      gap: '0.5rem'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-primary)'; e.currentTarget.style.paddingLeft = '5px'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-muted)'; e.currentTarget.style.paddingLeft = '0'; }}
                  >
                    <span>{s.title}</span> <ArrowRight size={14} style={{ flexShrink: 0 }} />
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
      <style>{`
        .service-page-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: clamp(1.5rem, 3.5vw, 2.5rem);
        }
        .service-sidebar-card {
          position: sticky;
          top: 90px;
        }
        @media (max-width: 992px) {
          .service-page-grid {
            grid-template-columns: 1fr;
          }
          .service-sidebar-card {
            position: static;
          }
        }
      `}</style>
    </div>
  );
}
