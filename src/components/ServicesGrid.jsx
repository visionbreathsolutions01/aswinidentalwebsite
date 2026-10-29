import React from 'react';
import { ArrowRight, Activity, ShieldCheck, Stethoscope, HeartPulse, Cross, UserCheck, Sparkles, Smile, Scissors, Award, Layers, CheckCircle2, AlertTriangle } from 'lucide-react';
import { SERVICES } from '../data/hospitalData';

// Map icon strings to components
const IconMap = {
  Activity, ShieldCheck, Stethoscope, HeartPulse, Cross, UserCheck, 
  Sparkles, Smile, Scissors, Award, Layers, CheckCircle2, AlertTriangle
};

export default function ServicesGrid({ onSelectServicePage }) {
  // Group services by category for premium layout
  const groupedServices = SERVICES.reduce((acc, service) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service);
    return acc;
  }, {});

  return (
    <section id="services" className="section-light" style={{ backgroundColor: 'var(--color-bg-main)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="section-tag">Clinical Excellence</div>
          <h2 className="section-title" style={{ maxWidth: '650px', margin: '0 auto 1.25rem auto' }}>
            Advanced <span className="text-secondary">Specialised Treatments</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Delivering comprehensive maxillofacial surgery and premium dental care under strict international sterilization protocols.
          </p>
        </div>

        <div className="services-category-grid">
          {Object.entries(groupedServices).map(([category, services], idx) => (
            <div key={idx} className="card services-category-card" style={{ padding: 'clamp(1.25rem, 3.5vw, 2rem)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ 
                fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-accent)', 
                textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.25rem',
                borderBottom: '1px solid var(--color-border)', paddingBottom: '0.75rem'
              }}>
                {category}
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.25rem, 3vw, 1.75rem)', flex: 1 }}>
                {services.map(service => {
                  const IconComponent = IconMap[service.iconName] || Stethoscope;
                  return (
                    <div key={service.id} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                      <div style={{ 
                        width: '38px', height: '38px', borderRadius: 'var(--radius-sm)', 
                        backgroundColor: 'var(--color-primary-light)', 
                        display: 'flex', alignItems: 'center', justifyContent: 'center', 
                        color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px'
                      }}>
                        <IconComponent size={20} />
                      </div>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <h4 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', marginBottom: '0.3rem', color: 'var(--color-text-main)', lineHeight: 1.3 }}>{service.title}</h4>
                        <p style={{ fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', color: 'var(--color-text-subtle)', lineHeight: 1.5, marginBottom: '0.65rem' }}>
                          {service.shortDesc}
                        </p>
                        <button 
                          onClick={() => onSelectServicePage(service.id)}
                          style={{ 
                            fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-secondary)', 
                            display: 'inline-flex', alignItems: 'center', gap: '0.3rem', 
                            padding: '0.3rem 0', minHeight: '36px' 
                          }}
                          onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'}
                          onMouseLeave={e => e.currentTarget.style.color = 'var(--color-secondary)'}
                        >
                          Learn More <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
      <style>{`
        .services-category-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 310px), 1fr));
          gap: clamp(1.25rem, 3vw, 2rem);
        }
      `}</style>
    </section>
  );
}
