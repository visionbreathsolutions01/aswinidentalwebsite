import React, { useState, useEffect } from 'react';
import { Camera, Maximize2, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/hospitalData';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ['All', 'Clinic Infrastructure', 'Equipment', 'Sterilization', 'Patient Care', 'Specialized Surgery'];

  const filteredItems = GALLERY_ITEMS.filter((item) => 
    selectedCategory === 'All' || item.category === selectedCategory
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxImage(null);
    };
    if (lightboxImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxImage]);

  return (
    <section id="gallery" className="section-light" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <div className="section-tag">
            <Camera size={16} />
            <span>Clinic Showcase & Facilities</span>
          </div>
          <h2 className="section-title">
            Our Clinic <span className="text-secondary">Photo Gallery</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Take a visual tour of our modern dental operatory chairs, advanced surgical suites, and sterile patient care environment in Vijayawada.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="gallery-filter-pills" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.5rem',
          marginBottom: 'clamp(1.75rem, 4vw, 2.5rem)'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.5rem 1rem',
                minHeight: '40px',
                borderRadius: 'var(--radius-full)',
                fontSize: 'clamp(0.8rem, 2vw, 0.85rem)',
                fontWeight: 600,
                backgroundColor: selectedCategory === cat ? 'var(--color-primary)' : 'var(--color-bg-main)',
                color: selectedCategory === cat ? '#ffffff' : 'var(--color-text-muted)',
                border: `1px solid ${selectedCategory === cat ? 'var(--color-primary)' : 'var(--color-border)'}`,
                transition: 'var(--transition-normal)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="card"
              onClick={() => setLightboxImage(item)}
              role="button"
              tabIndex={0}
              aria-label={`View photo: ${item.title}`}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setLightboxImage(item); }}
              style={{
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <div style={{ position: 'relative', height: 'clamp(180px, 30vw, 220px)', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.75) 0%, transparent 60%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: 'clamp(0.75rem, 2.5vw, 1rem)'
                }}>
                  <div style={{ minWidth: 0, flex: 1, paddingRight: '0.5rem' }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-secondary-light)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {item.category}
                    </div>
                    <div style={{ fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', fontWeight: 600, color: '#ffffff', overflowWrap: 'break-word' }}>
                      {item.title}
                    </div>
                  </div>
                  <div style={{ marginLeft: 'auto', color: '#ffffff', opacity: 0.9, flexShrink: 0 }}>
                    <Maximize2 size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div 
            onClick={() => setLightboxImage(null)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.92)',
              backdropFilter: 'blur(8px)',
              zIndex: 3000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(0.75rem, 3vw, 1.5rem)'
            }}
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              style={{ 
                position: 'relative', 
                maxWidth: '850px', 
                width: '100%', 
                backgroundColor: 'rgba(15, 23, 42, 0.96)',
                borderRadius: 'var(--radius-md)',
                padding: 'clamp(0.75rem, 2vw, 1.25rem)',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <div style={{ minWidth: 0, paddingRight: '1rem' }}>
                  <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: '#ffffff', margin: 0, overflowWrap: 'break-word' }}>
                    {lightboxImage.title}
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-accent-light)' }}>{lightboxImage.category}</span>
                </div>
                <button
                  onClick={() => setLightboxImage(null)}
                  aria-label="Close photo view"
                  style={{
                    color: '#ffffff',
                    padding: '0.5rem',
                    minWidth: '44px',
                    minHeight: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    flexShrink: 0
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src={lightboxImage.image}
                  alt={lightboxImage.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: 'min(68dvh, 600px)',
                    objectFit: 'contain',
                    borderRadius: 'var(--radius-sm)'
                  }}
                />
              </div>
            </div>
          </div>
        )}

      </div>
      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr));
          gap: clamp(1rem, 2.5vw, 1.5rem);
        }
      `}</style>
    </section>
  );
}
