import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, Camera, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { HOSPITAL_INFO, GALLERY_ITEMS } from '../data/hospitalData';

export default function GalleryPage({ onBackToHome }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Clinic Infrastructure', 'Equipment', 'Sterilization', 'Patient Care', 'Specialized Surgery'];

  const filteredItems = GALLERY_ITEMS.filter((item) =>
    selectedCategory === 'All' || item.category === selectedCategory
  );

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextImage = useCallback((e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
  }, [filteredItems.length]);

  const prevImage = useCallback((e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
  }, [filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <div className="animate-fade-in" style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingBottom: 'clamp(3rem, 5vw, 5rem)' }}>
      
      {/* Page Header */}
      <div style={{ backgroundColor: 'var(--color-primary)', padding: 'clamp(3rem, 6vw, 5rem) 0 clamp(2.5rem, 5vw, 4rem) 0', textAlign: 'center', color: '#fff', position: 'relative' }}>
        <div className="container">
          <div style={{ 
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem', 
            padding: '0.35rem 1rem', backgroundColor: 'rgba(255,255,255,0.1)',
            color: 'var(--color-accent-light)', borderRadius: '2rem', fontSize: '0.85rem', fontWeight: 600,
            marginBottom: '1rem', maxWidth: '100%'
          }}>
            <Camera size={16} style={{ flexShrink: 0 }} />
            <span>Clinic Infrastructure & Facility Showcase</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff', marginBottom: '1rem', lineHeight: 1.2 }}>Hospital Gallery</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
            Explore the surgical suites, ergonomic dental operatories, advanced diagnostic equipment, and sterile patient care environment at {HOSPITAL_INFO.name}.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
        {/* Navigation & Controls */}
        <div className="gallery-page-controls">
          <button 
            onClick={() => onBackToHome('#home')} 
            style={{ 
              color: 'var(--color-text-muted)', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              fontSize: '0.95rem', 
              fontWeight: 600,
              padding: '0.5rem 0',
              minHeight: '44px'
            }} 
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'} 
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
          >
            <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} /> Return to Home
          </button>

          {/* Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.45rem 1.1rem',
                  minHeight: '40px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'clamp(0.78rem, 2vw, 0.85rem)',
                  fontWeight: 600,
                  backgroundColor: selectedCategory === cat ? 'var(--color-primary)' : 'var(--color-surface)',
                  color: selectedCategory === cat ? '#ffffff' : 'var(--color-text-muted)',
                  border: `1px solid ${selectedCategory === cat ? 'var(--color-primary)' : 'var(--color-border)'}`,
                  boxShadow: selectedCategory === cat ? 'var(--shadow-sm)' : 'none',
                  transition: 'var(--transition-normal)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-page-grid">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="card"
              onClick={() => openLightbox(idx)}
              role="button"
              tabIndex={0}
              aria-label={`View photo: ${item.title}`}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(idx); }}
              style={{
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div style={{ position: 'relative', height: 'clamp(180px, 30vw, 240px)', overflow: 'hidden', backgroundColor: 'var(--color-primary-light)' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15, 44, 89, 0.75) 0%, transparent 50%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  padding: 'clamp(0.75rem, 2vw, 1rem)',
                  pointerEvents: 'none'
                }}>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#fff',
                    backgroundColor: 'rgba(0, 91, 150, 0.85)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: 'var(--radius-sm)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}>
                    {item.category}
                  </span>
                  <div style={{ color: '#fff', opacity: 0.9 }}>
                    <Maximize2 size={18} />
                  </div>
                </div>
              </div>

              <div style={{ padding: 'clamp(1rem, 2.5vw, 1.35rem)', backgroundColor: 'var(--color-surface)', flex: 1 }}>
                <h3 style={{ margin: 0, fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', color: 'var(--color-text-main)', fontWeight: 600, overflowWrap: 'break-word' }}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <div 
            onClick={closeLightbox}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.94)',
              backdropFilter: 'blur(8px)',
              zIndex: 3000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(0.75rem, 3vw, 1.5rem)'
            }}
          >
            <div 
              onClick={e => e.stopPropagation()} 
              style={{ 
                position: 'relative', 
                maxWidth: '920px', 
                width: '100%', 
                textAlign: 'center',
                backgroundColor: 'rgba(15, 23, 42, 0.96)',
                borderRadius: 'var(--radius-md)',
                padding: 'clamp(0.75rem, 2vw, 1.25rem)',
                border: '1px solid rgba(255,255,255,0.15)'
              }}
            >
              {/* Top Header inside Modal */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                marginBottom: '0.75rem',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                paddingBottom: '0.5rem'
              }}>
                <div style={{ textAlign: 'left', minWidth: 0, paddingRight: '0.75rem' }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--color-accent-light)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {filteredItems[lightboxIndex].category}
                  </span>
                  <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: '#ffffff', margin: '0.2rem 0 0 0', overflowWrap: 'break-word' }}>
                    {filteredItems[lightboxIndex].title}
                  </h3>
                </div>

                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  aria-label="Close photo view"
                  style={{
                    color: '#ffffff',
                    minWidth: '44px',
                    minHeight: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    flexShrink: 0
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Main Image Container with navigation buttons */}
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button
                  onClick={prevImage}
                  aria-label="Previous image"
                  style={{
                    position: 'absolute',
                    left: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(15, 23, 42, 0.65)',
                    backdropFilter: 'blur(4px)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    border: '1px solid rgba(255,255,255,0.25)',
                    zIndex: 10
                  }}
                >
                  <ChevronLeft size={26} />
                </button>

                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: 'min(68dvh, 580px)',
                    objectFit: 'contain',
                    borderRadius: 'var(--radius-sm)',
                    boxShadow: 'var(--shadow-lg)'
                  }}
                />

                <button
                  onClick={nextImage}
                  aria-label="Next image"
                  style={{
                    position: 'absolute',
                    right: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(15, 23, 42, 0.65)',
                    backdropFilter: 'blur(4px)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    border: '1px solid rgba(255,255,255,0.25)',
                    zIndex: 10
                  }}
                >
                  <ChevronRight size={26} />
                </button>
              </div>

              <div style={{ color: 'rgba(255,255,255,0.6)', marginTop: '0.75rem', fontSize: '0.85rem' }}>
                {lightboxIndex + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        )}

      </div>

      <style>{`
        .gallery-page-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: clamp(1.75rem, 4vw, 2.5rem);
        }
        .gallery-page-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
          gap: clamp(1.25rem, 3vw, 1.75rem);
        }
        @media (max-width: 640px) {
          .gallery-page-controls {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
