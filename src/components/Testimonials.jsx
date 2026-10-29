import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/hospitalData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const testimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="section-light">
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="section-tag">Patient Experiences</div>
          <h2 className="section-title">Stories of <span className="text-secondary">Transformation</span></h2>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          
          <div 
            className="card testimonial-card" 
            style={{ 
              padding: 'clamp(2.5rem, 5vw, 3.5rem) clamp(1.25rem, 4vw, 2.5rem) clamp(2rem, 4vw, 2.5rem)', 
              textAlign: 'center', 
              position: 'relative', 
              overflow: 'visible' 
            }}
          >
            <div style={{ 
              position: 'absolute', 
              top: '-22px', 
              left: '50%', 
              transform: 'translateX(-50%)', 
              width: '44px', 
              height: '44px', 
              backgroundColor: 'var(--color-primary)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: '#fff', 
              boxShadow: 'var(--shadow-md)' 
            }}>
              <Quote size={18} fill="currentColor" />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', marginBottom: '1.25rem', marginTop: '0.5rem' }}>
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={18} fill="var(--color-gold)" color="var(--color-gold)" />
              ))}
            </div>

            <p style={{ 
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', 
              color: 'var(--color-text-main)', 
              lineHeight: 1.7, 
              fontStyle: 'italic', 
              marginBottom: '1.75rem' 
            }}>
              "{testimonial.text}"
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
              <h4 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', color: 'var(--color-primary)', margin: 0 }}>{testimonial.name}</h4>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-subtle)', fontWeight: 600 }}>{testimonial.procedure}</span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            <button 
              onClick={handlePrev} 
              aria-label="Previous patient testimonial"
              style={{ 
                width: '46px', 
                height: '46px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--color-surface)', 
                border: '1px solid var(--color-border)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'var(--color-text-main)', 
                transition: 'var(--transition-normal)' 
              }} 
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--color-primary)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--color-primary)'; }} 
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--color-surface)'; e.currentTarget.style.color = 'var(--color-text-main)'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
            >
              <ChevronLeft size={22} />
            </button>
            <button 
              onClick={handleNext} 
              aria-label="Next patient testimonial"
              style={{ 
                width: '46px', 
                height: '46px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--color-surface)', 
                border: '1px solid var(--color-border)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'var(--color-text-main)', 
                transition: 'var(--transition-normal)' 
              }} 
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--color-primary)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--color-primary)'; }} 
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--color-surface)'; e.currentTarget.style.color = 'var(--color-text-main)'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
            >
              <ChevronRight size={22} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
