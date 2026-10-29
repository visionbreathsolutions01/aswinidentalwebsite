import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../data/hospitalData';

export default function BlogSection() {
  return (
    <section id="blog" className="section-light">
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="section-tag">Patient Education</div>
          <h2 className="section-title">Latest Medical <span className="text-secondary">Insights</span></h2>
        </div>

        <div className="blog-grid">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <div key={post.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: 'clamp(180px, 25vw, 220px)', overflow: 'hidden' }}>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: 'clamp(1.25rem, 3vw, 1.75rem)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-primary)', backgroundColor: 'var(--color-primary-light)', padding: '0.2rem 0.6rem', borderRadius: '4px', textTransform: 'uppercase' }}>
                    {post.category}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-text-subtle)', fontSize: '0.8rem' }}>
                    <Calendar size={14} /> {post.date}
                  </div>
                </div>
                
                <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', marginBottom: '0.75rem', color: 'var(--color-text-main)', lineHeight: 1.35, overflowWrap: 'break-word' }}>
                  {post.title}
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', lineHeight: 1.6, marginBottom: '1.25rem', flex: 1 }}>
                  {post.summary}
                </p>
                
                <button 
                  style={{ 
                    color: 'var(--color-secondary)', 
                    fontWeight: 600, 
                    fontSize: '0.9rem', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.4rem', 
                    alignSelf: 'flex-start', 
                    padding: '0.3rem 0',
                    minHeight: '36px' 
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--color-secondary)'}
                >
                  Read Article <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
      <style>{`
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
          gap: clamp(1.25rem, 3vw, 2rem);
        }
      `}</style>
    </section>
  );
}
