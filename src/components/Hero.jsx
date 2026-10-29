import React from 'react';
import { Phone, ArrowRight, Shield, Award, CheckCircle } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export default function Hero({ onGoHome }) {
  return (
    <section id="home" style={{ 
      position: 'relative', 
      padding: '0', 
      minHeight: 'clamp(520px, 80dvh, 850px)',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'var(--color-bg-main)',
      overflow: 'hidden'
    }}>
      {/* Background Graphic */}
      <div 
        className="hero-bg-polygon"
        style={{
          position: 'absolute',
          top: 0, right: 0,
          width: '50%', height: '100%',
          backgroundColor: 'var(--color-primary-light)',
          clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
          zIndex: 0
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, padding: 'clamp(2.5rem, 6vw, 4.5rem) clamp(1rem, 3.5vw, 1.5rem)' }}>
        <div className="hero-grid">
          
          {/* Left Content */}
          <div className="hero-content">
            <div style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem', 
              padding: '0.4rem 1rem', backgroundColor: 'var(--color-accent-light)',
              color: 'var(--color-accent)', borderRadius: '2rem', 
              fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', fontWeight: 600,
              marginBottom: '1.25rem',
              maxWidth: '100%'
            }}>
              <Award size={16} style={{ flexShrink: 0 }} />
              <span>Vijayawada's Premier Dental Hospital</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(1.9rem, 5vw, 3.75rem)',
              color: 'var(--color-primary)',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
              overflowWrap: 'break-word'
            }}>
              Advanced <br className="hero-br"/>
              <span style={{ color: 'var(--color-secondary)' }}>Maxillofacial & Facial</span> <br className="hero-br"/>
              Dental Surgery
            </h1>

            <p style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.125rem)',
              color: 'var(--color-text-muted)',
              lineHeight: 1.6,
              marginBottom: '2rem',
              maxWidth: '540px'
            }}>
              {HOSPITAL_INFO.doctor.bio.substring(0, 230)}...
            </p>

            <div className="hero-cta-group">
              <a href={`tel:${HOSPITAL_INFO.contact.phones[0]}`} className="btn btn-primary" style={{ flexGrow: 0 }}>
                <Phone size={18} /> Call Clinic Desk
              </a>
              {onGoHome && (
                <button onClick={() => onGoHome('#services')} className="btn btn-secondary" style={{ flexGrow: 0 }}>
                  Our Treatments <ArrowRight size={18} />
                </button>
              )}
            </div>

            <div className="hero-trust-badges">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-main)', fontWeight: 500, fontSize: 'clamp(0.85rem, 2vw, 0.9rem)' }}>
                <CheckCircle size={18} color="var(--color-secondary)" style={{ flexShrink: 0 }} /> Same Doctor Care
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-main)', fontWeight: 500, fontSize: 'clamp(0.85rem, 2vw, 0.9rem)' }}>
                <Shield size={18} color="var(--color-secondary)" style={{ flexShrink: 0 }} /> 100% Sterilization
              </div>
            </div>
          </div>

          {/* Right Content - Medical Info Panel */}
          <div className="hero-panel" style={{
            backgroundColor: 'var(--color-primary)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(1.5rem, 4vw, 2.75rem) clamp(1.25rem, 3.5vw, 2.25rem)',
            color: '#fff',
            boxShadow: 'var(--shadow-lg)',
            position: 'relative'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 'clamp(1rem, 3vw, 1.5rem)', 
              marginBottom: '1.75rem', 
              borderBottom: '1px solid rgba(255,255,255,0.1)', 
              paddingBottom: '1.75rem',
              flexWrap: 'wrap'
            }}>
              <div style={{
                width: 'clamp(60px, 14vw, 75px)', 
                height: 'clamp(60px, 14vw, 75px)', 
                borderRadius: '50%', 
                backgroundColor: 'var(--color-surface)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)',
                fontSize: 'clamp(1.5rem, 4vw, 1.85rem)', fontWeight: 700, fontFamily: 'var(--font-heading)',
                flexShrink: 0
              }}>
                SP
              </div>
              <div style={{ minWidth: '180px', flex: '1 1 auto' }}>
                <h2 style={{ color: '#fff', fontSize: 'clamp(1.2rem, 3vw, 1.45rem)', marginBottom: '0.2rem', lineHeight: 1.25 }}>{HOSPITAL_INFO.doctor.name}</h2>
                <div style={{ color: 'var(--color-accent-light)', fontSize: '0.85rem', fontWeight: 600 }}>{HOSPITAL_INFO.doctor.degrees}</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', marginTop: '0.2rem' }}>Chief Dental Surgeon</div>
              </div>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 120px), 1fr))', 
              gap: '1.25rem', 
              marginBottom: '1.75rem' 
            }}>
              <div>
                <div style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>{HOSPITAL_INFO.doctor.experienceYears}+</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', marginTop: '0.4rem', lineHeight: 1.4 }}>Years of Surgical Experience</div>
              </div>
              <div>
                <div style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>1996</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', marginTop: '0.4rem', lineHeight: 1.4 }}>Established in Vijayawada</div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius-md)', padding: '1.25rem', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.65)', marginBottom: '0.4rem' }}>Direct Clinic Line</div>
              <div style={{ fontSize: 'clamp(1rem, 3.5vw, 1.2rem)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                <Phone size={18} color="var(--color-accent-light)" style={{ flexShrink: 0 }} /> 
                <span style={{ overflowWrap: 'anywhere' }}>{HOSPITAL_INFO.contact.phones[0]}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: center;
        }
        .hero-cta-group {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .hero-trust-badges {
          display: flex;
          gap: clamp(1rem, 3vw, 2rem);
          margin-top: clamp(1.75rem, 4vw, 2.75rem);
          flex-wrap: wrap;
        }
        @media (max-width: 992px) {
          .hero-bg-polygon { display: none !important; }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .hero-content {
            text-align: center;
          }
          .hero-content > div {
            justify-content: center;
          }
          .hero-cta-group {
            justify-content: center;
          }
          .hero-trust-badges {
            justify-content: center;
          }
          .hero-br {
            display: inline;
          }
        }
        @media (max-width: 480px) {
          .hero-cta-group a,
          .hero-cta-group button {
            width: 100%;
          }
          .hero-br {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
