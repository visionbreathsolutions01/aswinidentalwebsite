import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Calendar } from 'lucide-react';
import { HOSPITAL_INFO, SERVICES } from '../data/hospitalData';

export default function Header({ onSelectServicePage, onSelectGalleryPage, onGoHome, onSelectAboutPage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', action: () => onGoHome('#home') },
    { name: 'About Us', action: onSelectAboutPage },
    { name: 'Services', isDropdown: true },
    { name: 'Why Choose Us', action: () => onGoHome('#why-us') },
    { name: 'Testimonials', action: () => onGoHome('#testimonials') },
    { name: 'Gallery', action: onSelectGalleryPage },
    { name: 'Blog', action: () => onGoHome('#blog') },
    { name: 'Contact', action: () => onGoHome('#contact') },
  ];

  const handleNavClick = (link) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    if (link.action) link.action();
  };

  const handleServiceClick = (serviceId) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
    onSelectServicePage(serviceId);
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, width: '100%' }}>
      {/* Main Navbar */}
      <nav 
        className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`} 
        style={{ 
          padding: isScrolled ? '0.4rem 0' : '0.8rem 0',
          transition: 'padding 0.25s ease, box-shadow 0.25s ease'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          
          {/* Logo */}
          <button 
            onClick={() => onGoHome('#home')} 
            aria-label="Aswini Dental Home"
            style={{ display: 'flex', alignItems: 'center', flexShrink: 0, padding: 0 }}
          >
            <img 
              src="/logo.png" 
              alt="Aswini Dental Logo" 
              className="header-logo"
              style={{ 
                height: isScrolled ? 'clamp(44px, 5vw, 56px)' : 'clamp(50px, 6.5vw, 70px)', 
                maxWidth: 'min(240px, 60vw)',
                objectFit: 'contain',
                transition: 'height 0.25s ease' 
              }} 
            />
          </button>

          {/* Desktop Nav */}
          <div className="desktop-nav-container" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.75rem, 1.5vw, 1.5rem)' }}>
            {navLinks.map(link => (
              <div key={link.name} style={{ position: 'relative' }}>
                {link.isDropdown ? (
                  <div onMouseEnter={() => setServicesDropdownOpen(true)} onMouseLeave={() => setServicesDropdownOpen(false)}>
                    <button 
                      className="nav-link" 
                      onClick={() => onGoHome('#services')} 
                      style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', minHeight: '40px' }}
                    >
                      {link.name} <ChevronDown size={14} />
                    </button>
                    {servicesDropdownOpen && (
                      <div className="animate-fade-in" style={{
                        position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                        width: '270px', background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', padding: '0.5rem 0',
                        zIndex: 1100
                      }}>
                        {SERVICES.map(s => (
                          <button 
                            key={s.id} 
                            onClick={() => handleServiceClick(s.id)} 
                            style={{
                              display: 'block', width: '100%', textAlign: 'left', padding: '0.65rem 1.2rem',
                              fontSize: '0.9rem', color: 'var(--color-text-main)', borderBottom: '1px solid var(--color-border-light)',
                              transition: 'background-color 0.2s ease, color 0.2s ease'
                            }}
                            onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--color-bg-main)'; e.currentTarget.style.color = 'var(--color-secondary)'; }}
                            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--color-text-main)'; }}
                          >
                            {s.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button 
                    className="nav-link" 
                    onClick={() => handleNavClick(link)}
                    style={{ minHeight: '40px' }}
                  >
                    {link.name}
                  </button>
                )}
              </div>
            ))}
            
            <a 
              href={`tel:${HOSPITAL_INFO.contact.phones[0]}`} 
              className="btn btn-primary" 
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem', whiteSpace: 'nowrap' }}
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            style={{ 
              padding: '0.5rem',
              minWidth: '44px',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--radius-sm)'
            }}
          >
            {mobileMenuOpen ? <X size={28} color="var(--color-primary)" /> : <Menu size={28} color="var(--color-primary)" />}
          </button>
        </div>

        {/* Mobile Backdrop Overlay */}
        {mobileMenuOpen && (
          <div 
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.5)',
              backdropFilter: 'blur(3px)',
              zIndex: 998,
              top: '64px'
            }}
          />
        )}

        {/* Mobile Menu Dropdown Drawer */}
        {mobileMenuOpen && (
          <div 
            className="animate-fade-in mobile-drawer" 
            style={{
              position: 'absolute', 
              top: '100%', 
              left: 0, 
              width: '100%', 
              background: 'var(--color-surface)',
              borderTop: '1px solid var(--color-border)', 
              padding: '1.25rem clamp(1rem, 4vw, 1.5rem)', 
              boxShadow: 'var(--shadow-lg)', 
              maxHeight: 'calc(88dvh - 65px)', 
              overflowY: 'auto',
              zIndex: 999
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {navLinks.map(link => (
                <div key={link.name}>
                  {link.isDropdown ? (
                    <div>
                      <button 
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)} 
                        style={{
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'center',
                          width: '100%', 
                          padding: '0.8rem 0.5rem',
                          minHeight: '44px',
                          fontWeight: 600, 
                          fontSize: '1rem',
                          color: 'var(--color-primary)', 
                          borderBottom: '1px solid var(--color-border-light)'
                        }}
                      >
                        <span>{link.name}</span>
                        <ChevronDown size={18} style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
                      </button>
                      {mobileServicesOpen && (
                        <div style={{ padding: '0.5rem 0.75rem', background: 'var(--color-bg-main)', borderRadius: 'var(--radius-sm)', margin: '0.25rem 0 0.5rem 0' }}>
                          {SERVICES.map(s => (
                            <button 
                              key={s.id} 
                              onClick={() => handleServiceClick(s.id)} 
                              style={{
                                display: 'block', 
                                width: '100%', 
                                textAlign: 'left', 
                                padding: '0.65rem 0.5rem',
                                minHeight: '44px',
                                fontSize: '0.9rem', 
                                color: 'var(--color-text-muted)', 
                                borderBottom: '1px solid var(--color-border-light)'
                              }}
                            >
                              • {s.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button 
                      onClick={() => handleNavClick(link)} 
                      style={{
                        display: 'flex', 
                        alignItems: 'center',
                        width: '100%', 
                        textAlign: 'left', 
                        padding: '0.8rem 0.5rem',
                        minHeight: '44px',
                        fontWeight: 600, 
                        fontSize: '1rem',
                        color: 'var(--color-primary)', 
                        borderBottom: '1px solid var(--color-border-light)'
                      }}
                    >
                      {link.name}
                    </button>
                  )}
                </div>
              ))}

              {/* Mobile CTAs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.25rem', paddingTop: '0.5rem' }}>
                <a 
                  href={`tel:${HOSPITAL_INFO.contact.phones[0]}`} 
                  className="btn btn-primary" 
                  style={{ width: '100%', padding: '0.85rem' }}
                >
                  <Calendar size={18} /> Book Appointment
                </a>

                <a 
                  href={`tel:${HOSPITAL_INFO.contact.phones[0]}`} 
                  className="btn btn-secondary" 
                  style={{ width: '100%', padding: '0.85rem' }}
                >
                  <Phone size={18} /> Call Clinic: {HOSPITAL_INFO.contact.phones[0]}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        .desktop-nav-container { display: flex; }
        .mobile-toggle-btn { display: none; }
        @media (max-width: 1080px) {
          .desktop-nav-container { display: none !important; }
          .mobile-toggle-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
