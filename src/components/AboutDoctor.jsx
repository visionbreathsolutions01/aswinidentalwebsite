import React from 'react';
import { Award, GraduationCap, Clock } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export default function AboutDoctor({ onSelectAboutPage }) {
  return (
    <section id="about" className="section-light">
      <div className="container">
        <div className="about-doctor-grid">
          
          {/* Left: Professional Portrait / Aesthetic Box */}
          <div className="doctor-card-container">
            <div style={{
              aspectRatio: '4/4.5',
              maxHeight: '440px',
              backgroundColor: 'var(--color-bg-main)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              overflow: 'hidden',
              padding: '2rem 1rem'
            }}>
              <div style={{
                width: 'clamp(90px, 20vw, 120px)', 
                height: 'clamp(90px, 20vw, 120px)', 
                borderRadius: '50%', 
                backgroundColor: 'var(--color-surface)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)',
                fontSize: 'clamp(2.2rem, 5vw, 3rem)', fontWeight: 700, fontFamily: 'var(--font-heading)',
                boxShadow: 'var(--shadow-md)', marginBottom: '1.25rem',
                flexShrink: 0
              }}>
                SP
              </div>
              <h3 style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.5rem)', marginBottom: '0.25rem', color: 'var(--color-text-main)', textAlign: 'center' }}>
                {HOSPITAL_INFO.doctor.name}
              </h3>
              <p style={{ color: 'var(--color-secondary)', fontWeight: 600, fontSize: 'clamp(0.85rem, 2.5vw, 1rem)', textAlign: 'center', padding: '0 1rem', margin: 0 }}>
                {HOSPITAL_INFO.doctor.title}
              </p>
              
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '6px', backgroundColor: 'var(--color-primary)' }} />
            </div>

            {/* Experience Floating Badge */}
            <div className="card doctor-exp-badge">
              <div style={{ 
                width: '44px', height: '44px', borderRadius: '50%', 
                backgroundColor: 'var(--color-accent-light)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', 
                color: 'var(--color-accent)', flexShrink: 0 
              }}>
                <Clock size={22} />
              </div>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-text-main)', lineHeight: 1 }}>{HOSPITAL_INFO.doctor.experienceYears}+</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-text-subtle)', fontWeight: 500, marginTop: '0.2rem' }}>Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div>
            <div className="section-tag">The Specialist</div>
            <h2 className="section-title">Expertise You Can <span className="text-secondary">Trust</span></h2>
            
            <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
              {HOSPITAL_INFO.doctor.bio}
            </p>

            <div className="doctor-credentials-grid">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <GraduationCap size={24} color="var(--color-secondary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.25rem', color: 'var(--color-text-main)' }}>Qualifications</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-subtle)', lineHeight: 1.5, margin: 0 }}>
                    {HOSPITAL_INFO.doctor.degrees}
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <Award size={24} color="var(--color-secondary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.25rem', color: 'var(--color-text-main)' }}>Memberships</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-subtle)', lineHeight: 1.5, margin: 0 }}>
                    {HOSPITAL_INFO.doctor.memberships.join(", ")}
                  </p>
                </div>
              </div>
            </div>

            {onSelectAboutPage && (
              <button onClick={onSelectAboutPage} className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                Read Full Profile
              </button>
            )}
          </div>
          
        </div>
      </div>
      <style>{`
        .about-doctor-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: clamp(2.5rem, 5vw, 4rem);
          align-items: center;
        }
        .doctor-card-container {
          position: relative;
          max-width: 440px;
          margin: 0 auto;
          width: 100%;
        }
        .doctor-exp-badge {
          position: absolute;
          bottom: -15px;
          right: -15px;
          padding: 1.1rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          max-width: 220px;
          box-shadow: var(--shadow-md);
        }
        .doctor-credentials-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        @media (max-width: 992px) {
          .about-doctor-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        @media (max-width: 640px) {
          .doctor-credentials-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .doctor-exp-badge {
            position: relative;
            bottom: auto;
            right: auto;
            margin: -24px auto 0 auto;
            max-width: 200px;
          }
        }
      `}</style>
    </section>
  );
}
