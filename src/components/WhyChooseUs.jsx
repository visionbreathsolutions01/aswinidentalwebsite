import React from 'react';
import { UserCheck, Award, Shield, Sparkles, Heart, CheckCircle } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/hospitalData';

const IconMap = {
  UserCheck, Award, Shield, Sparkles, Heart, CheckCircle
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-dark">
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="section-tag" style={{ borderColor: 'var(--color-accent-light)', color: 'var(--color-accent-light)' }}>Why Aswini Dental</div>
          <h2 className="section-title" style={{ maxWidth: '650px', margin: '0 auto 1.25rem auto' }}>
            The Standard of <span className="text-accent" style={{ color: 'var(--color-accent-light)' }}>Premium Dental Care</span>
          </h2>
          <p className="section-subtitle section-sub" style={{ margin: '0 auto' }}>
            When it comes to oral surgery and specialist dental care, experience and strict protocols make all the difference.
          </p>
        </div>

        <div className="why-us-grid">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = IconMap[item.icon] || CheckCircle;
            return (
              <div 
                key={idx} 
                className="why-us-card"
                style={{ 
                  padding: 'clamp(1.5rem, 3.5vw, 2.25rem) clamp(1.25rem, 3vw, 2rem)', 
                  backgroundColor: 'rgba(255,255,255,0.03)', 
                  border: '1px solid rgba(255,255,255,0.08)', 
                  borderRadius: 'var(--radius-lg)',
                  transition: 'var(--transition-normal)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ 
                  width: '50px', height: '50px', borderRadius: 'var(--radius-md)', 
                  backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', 
                  alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent-light)', 
                  marginBottom: '1.25rem' 
                }}>
                  <IconComponent size={26} />
                </div>
                <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', marginBottom: '0.75rem', color: '#fff', lineHeight: 1.3 }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
      <style>{`
        .why-us-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
          gap: clamp(1.25rem, 3vw, 2rem);
        }
      `}</style>
    </section>
  );
}
