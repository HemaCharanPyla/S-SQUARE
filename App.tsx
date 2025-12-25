
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import OwnerSection from './components/OwnerSection';
import Instagram from './components/Instagram';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SlideToBook from './components/SlideToBook';
import { SALON_CONFIG } from './config';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'gallery'>('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle back button for gallery view
  useEffect(() => {
    if (currentView === 'gallery') {
      window.scrollTo(0, 0);
    }
  }, [currentView]);

  const toggleGallery = () => {
    setCurrentView(prev => prev === 'home' ? 'gallery' : 'home');
  };

  const handleBooking = () => {
    const message = encodeURIComponent(SALON_CONFIG.whatsappMessage);
    window.open(`https://wa.me/${SALON_CONFIG.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-black text-white selection:bg-primary selection:text-black min-h-screen overflow-x-hidden">
      <Header isScrolled={isScrolled} currentView={currentView} onToggleGallery={toggleGallery} />
      
      <AnimatePresence mode="wait">
        {currentView === 'home' ? (
          <motion.div 
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <main>
              <section id="home">
                <Hero />
              </section>

              <OwnerSection />

              <section id="services" className="py-20 bg-secondary">
                <Services />
              </section>

              <section id="pricing" className="py-20 bg-black">
                <Pricing />
              </section>

              <section className="py-20 bg-secondary text-center">
                <div className="container mx-auto px-6">
                  <span className="text-primary uppercase tracking-[0.3em] text-sm font-bold block mb-4">Portfolio</span>
                  <h2 className="font-display text-5xl md:text-7xl mb-8 italic">See Our Craft</h2>
                  <p className="text-white/40 max-w-xl mx-auto mb-12">
                    Witness the transformations. Our gallery showcases the precision and style that define Square Unisex Salon Professionals.
                  </p>
                  <button 
                    onClick={() => setCurrentView('gallery')}
                    className="px-12 py-5 bg-primary text-black font-bold uppercase tracking-widest text-sm rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(197,160,89,0.3)]"
                  >
                    Enter Full Gallery
                  </button>
                </div>
              </section>

              <section id="reviews" className="py-20 bg-black">
                <Reviews />
              </section>

              <Instagram />

              <section id="location" className="py-20 bg-secondary">
                <Location />
              </section>

              <section id="contact" className="py-20 bg-black">
                <Contact />
              </section>
            </main>
            <Footer />
          </motion.div>
        ) : (
          <motion.div 
            key="gallery-page"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="pt-32 pb-20 min-h-screen bg-black"
          >
            <div className="container mx-auto px-6 mb-12">
              <button 
                onClick={() => setCurrentView('home')}
                className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs hover:text-white transition-colors group"
              >
                <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Back to Home
              </button>
            </div>
            <Gallery />
            <div className="mt-20 border-t border-white/5">
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Mobile Sticky CTA with Slide to Book */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:hidden flex flex-col gap-3 glass border-t border-white/10 safe-bottom">
        <SlideToBook onSuccess={handleBooking} text="Slide to Book Now" />
        <div className="flex gap-3">
          <a 
            href={`tel:${SALON_CONFIG.phone}`} 
            className="flex-1 bg-white/10 text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest shadow-lg active:scale-95 transition-all border border-white/5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            Emergency Call
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
