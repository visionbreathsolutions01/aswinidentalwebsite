import React, { useEffect } from 'react';
import { X, CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export default function ServiceDetailModal({ service, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div 
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(6px)',
        zIndex: 2000,
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
          maxWidth: '640px',
          maxHeight: 'min(90dvh, 750px)',
          overflowY: 'auto',
          padding: 'clamp(1.25rem, 4vw, 2.25rem)',
          position: 'relative',
          backgroundColor: 'var(--color-surface)',
          borderRadius: 'var(--radius-lg)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close procedure details"
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
          <X size={20} />
        </button>

        {/* Category & Title */}
        <div style={{ paddingRight: '2.5rem', marginBottom: '1rem' }}>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            color: 'var(--color-secondary)',
            backgroundColor: 'var(--color-secondary-light)',
            padding: '0.25rem 0.75rem',
            borderRadius: 'var(--radius-full)',
            display: 'inline-block',
            marginBottom: '0.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.04em'
          }}>
            {service.category}
          </span>

          <h3 style={{ fontSize: 'clamp(1.35rem, 3.5vw, 1.75rem)', color: 'var(--color-text-main)', margin: '0.25rem 0 0 0', lineHeight: 1.25, overflowWrap: 'break-word' }}>
            {service.title}
          </h3>
        </div>

        <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          {service.fullDesc}
        </p>

        {/* Treatment Key Benefits */}
        <div style={{
          backgroundColor: 'var(--color-bg-main)',
          padding: 'clamp(1rem, 3vw, 1.5rem)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border)',
          marginBottom: '1.5rem'
        }}>
          <h4 style={{ fontSize: '1rem', color: 'var(--color-text-main)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <ShieldCheck color="var(--color-primary)" size={18} style={{ flexShrink: 0 }} />
            <span>Key Treatment Benefits</span>
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {service.benefits.map((benefit, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                <CheckCircle2 size={16} color="var(--color-secondary)" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span style={{ lineHeight: 1.5 }}>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Specialist Note */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.85rem',
          padding: '0.85rem 1rem',
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--color-primary-light)',
          marginBottom: '1.5rem',
          flexWrap: 'wrap'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-primary)',
            color: '#ffffff',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            fontFamily: 'var(--font-heading)'
          }}>
            SP
          </div>
          <div style={{ minWidth: '180px', flex: '1 1 auto' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary)' }}>
              Consultation & Care by Dr. B. Srinivasa Prasad
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--color-text-main)' }}>
              Oral & Maxillofacial Surgeon • 30+ Years Experience
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <a
            href={`https://wa.me/${HOSPITAL_INFO.contact.whatsapp}?text=Hello%20Aswini%20Dental,%20I%20have%20a%20query%20regarding%20${encodeURIComponent(service.title)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ width: '100%', padding: '0.85rem', backgroundColor: '#25D366', borderColor: '#25D366' }}
          >
            <MessageCircle size={18} />
            <span>Ask Doctor on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
