import React from 'react';
import { ArrowRight, GraduationCap, Award } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export default function AboutPage({ onGoHome }) {
  return (
    <div className="animate-fade-in" style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingBottom: 'clamp(3rem, 5vw, 5rem)' }}>
      
      <div style={{ backgroundColor: 'var(--color-primary)', padding: 'clamp(3rem, 6vw, 5rem) 0 clamp(3.5rem, 6vw, 5rem) 0', textAlign: 'center', color: '#fff' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff', marginBottom: '1rem', lineHeight: 1.2 }}>Meet the Specialist</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            A legacy of excellence in Oral and Maxillofacial Surgery.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: 'clamp(-2rem, -4vw, -3rem)' }}>
        <div className="card about-specialist-card" style={{ padding: 'clamp(1.5rem, 4vw, 3.5rem) clamp(1.25rem, 3.5vw, 2.75rem)' }}>
          
          <div className="specialist-sidebar" style={{ textAlign: 'center' }}>
            <div style={{
              width: 'clamp(120px, 24vw, 170px)', 
              height: 'clamp(120px, 24vw, 170px)', 
              borderRadius: '50%', 
              backgroundColor: 'var(--color-bg-main)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)',
              fontSize: 'clamp(2.8rem, 6vw, 4.25rem)', fontWeight: 700, fontFamily: 'var(--font-heading)',
              margin: '0 auto 1.5rem auto', border: '2px solid var(--color-border)',
              flexShrink: 0
            }}>
              SP
            </div>
            <h2 style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)', color: 'var(--color-primary)', marginBottom: '0.35rem', lineHeight: 1.25 }}>{HOSPITAL_INFO.doctor.name}</h2>
            <div style={{ color: 'var(--color-secondary)', fontWeight: 600, fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', marginBottom: '0.25rem' }}>{HOSPITAL_INFO.doctor.degrees}</div>
            <div style={{ color: 'var(--color-text-subtle)', fontSize: '0.9rem' }}>{HOSPITAL_INFO.doctor.title}</div>
            
            <div style={{ marginTop: '1.75rem', display: 'inline-block', textAlign: 'center', backgroundColor: 'var(--color-bg-main)', padding: '1.25rem 1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-light)', maxWidth: '260px', width: '100%' }}>
              <div style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>{HOSPITAL_INFO.doctor.experienceYears}+</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.4rem', fontWeight: 500, lineHeight: 1.4 }}>Years of Clinical &<br/>Surgical Experience</div>
            </div>
          </div>

          <div className="specialist-bio-content">
            <h3 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', color: 'var(--color-text-main)', marginBottom: '1rem' }}>Biography</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              {HOSPITAL_INFO.doctor.bio}
            </p>

            <h3 style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)', color: 'var(--color-text-main)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <GraduationCap size={22} color="var(--color-secondary)" style={{ flexShrink: 0 }} /> Education & Training
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {HOSPITAL_INFO.doctor.education.map((edu, i) => (
                <div key={i} style={{ paddingLeft: '1rem', borderLeft: '3px solid var(--color-secondary)' }}>
                  <div style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)' }}>{edu.degree}</div>
                  <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: '0.2rem 0' }}>{edu.institution}</div>
                  <div style={{ color: 'var(--color-text-subtle)', fontSize: '0.8rem' }}>{edu.year}</div>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)', color: 'var(--color-text-main)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={22} color="var(--color-secondary)" style={{ flexShrink: 0 }} /> Teaching Experience
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {HOSPITAL_INFO.doctor.teachingExperience.map((exp, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.4rem', borderBottom: '1px solid var(--color-border-light)', paddingBottom: '0.85rem' }}>
                  <div style={{ color: 'var(--color-text-main)', fontWeight: 500, fontSize: '0.95rem', minWidth: 'min(100%, 200px)', flex: '1 1 auto' }}>{exp.institution}</div>
                  <div style={{ color: 'var(--color-secondary)', fontSize: '0.85rem', fontWeight: 600 }}>{exp.period}</div>
                </div>
              ))}
            </div>

            <button onClick={() => onGoHome('#home')} className="btn btn-secondary">
              Return Home <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </div>
      <style>{`
        .about-specialist-card {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: clamp(2rem, 5vw, 4rem);
        }
        @media (max-width: 992px) {
          .about-specialist-card {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
}
