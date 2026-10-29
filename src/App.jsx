import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutDoctor from './components/AboutDoctor';
import ServicesGrid from './components/ServicesGrid';
import ServicePage from './components/ServicePage';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import GalleryPage from './components/GalleryPage';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';

export default function App() {
  const [activeView, setActiveView] = useState('home'); // 'home' | 'service-page' | 'gallery-page' | 'about-page'
  const [activeServiceId, setActiveServiceId] = useState(null);

  const handleSelectServicePage = (serviceId) => {
    setActiveServiceId(serviceId);
    setActiveView('service-page');
    window.scrollTo(0, 0);
  };

  const handleSelectGalleryPage = () => {
    setActiveView('gallery-page');
    setActiveServiceId(null);
    window.scrollTo(0, 0);
  };

  const handleSelectAboutPage = () => {
    setActiveView('about-page');
    setActiveServiceId(null);
    window.scrollTo(0, 0);
  };

  const handleGoHome = (targetHash) => {
    setActiveView('home');
    setActiveServiceId(null);

    if (targetHash) {
      setTimeout(() => {
        const element = document.querySelector(targetHash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Header
        onSelectServicePage={handleSelectServicePage}
        onSelectGalleryPage={handleSelectGalleryPage}
        onSelectAboutPage={handleSelectAboutPage}
        onGoHome={handleGoHome}
      />

      <main style={{ flex: 1 }}>
        {activeView === 'home' ? (
          <>
            <Hero
              onGoHome={handleGoHome}
            />

            <AboutDoctor
              onSelectAboutPage={handleSelectAboutPage}
            />

            <ServicesGrid
              onSelectServicePage={handleSelectServicePage}
            />

            <WhyChooseUs />

            <Testimonials />

            <Gallery />

            <BlogSection />

            <ContactSection />
          </>
        ) : activeView === 'service-page' ? (
          <ServicePage
            serviceId={activeServiceId}
            onBackToServices={handleGoHome}
            onSelectService={handleSelectServicePage}
          />
        ) : activeView === 'gallery-page' ? (
          <GalleryPage
            onBackToHome={handleGoHome}
          />
        ) : (
          <AboutPage
            onGoHome={handleGoHome}
            onSelectGalleryPage={handleSelectGalleryPage}
          />
        )}
      </main>

      <Footer
        onSelectServicePage={handleSelectServicePage}
        onSelectAboutPage={handleSelectAboutPage}
        onSelectGalleryPage={handleSelectGalleryPage}
        onGoHome={handleGoHome}
      />
    </div>
  );
}

