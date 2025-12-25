
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SALON_CONFIG } from '../config';

interface HeaderProps {
  isScrolled: boolean;
  currentView: 'home' | 'gallery';
  onToggleGallery: () => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, currentView, onToggleGallery }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when switching views
  const handleToggleGallery = () => {
    setMobileMenuOpen(false);
    onToggleGallery();
  };

  const navLinks = [
    { name: 'Home', href: '#home', action: () => { if(currentView === 'gallery') handleToggleGallery(); } },
    { name: 'Services', href: '#services', action: () => { if(currentView === 'gallery') handleToggleGallery(); } },
    { name: 'Pricing', href: '#pricing', action: () => { if(currentView === 'gallery') handleToggleGallery(); } },
    { name: 'Gallery', href: '#gallery', action: () => { if(currentView === 'home') handleToggleGallery(); } },
    { name: 'Reviews', href: '#reviews', action: () => { if(currentView === 'gallery') handleToggleGallery(); } },
    { name: 'Location', href: '#location', action: () => { if(currentView === 'gallery') handleToggleGallery(); } },
  ];

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        isScrolled ? 'py-3 md:py-4 glass border-b border-white/10' : 'py-6 md:py-10 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-8 flex items-center justify-between">
        <button 
          onClick={() => { if(currentView === 'gallery') handleToggleGallery(); window.scrollTo({top: 0, behavior: 'smooth'}); }} 
          className="flex flex-col group text-left relative z-[105]"
        >
          <span className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white group-hover:text-primary transition-colors leading-none">
            S SQUARE
          </span>
          <span className={`text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-primary/80 font-bold transition-all duration-500 ${isScrolled ? 'mt-1' : 'mt-2 opacity-60'}`}>
            Unisex Salon Professionals
          </span>
        </button>

        {/* Desktop/Tablet Nav - Enhanced for "Showing All Things" */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10 overflow-x-auto no-scrollbar max-w-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={currentView === 'home' ? link.href : '#'}
              onClick={(e) => {
                if(currentView === 'gallery' && link.name !== 'Gallery') {
                  e.preventDefault();
                  link.action();
                } else if (link.name === 'Gallery') {
                  e.preventDefault();
                  link.action();
                }
              }}
              className={`text-[10px] lg:text-[11px] uppercase tracking-[0.3em] font-black transition-all whitespace-nowrap relative group ${
                (currentView === 'gallery' && link.name === 'Gallery') || (currentView === 'home' && link.name !== 'Gallery') 
                ? 'text-white/80 hover:text-primary' 
                : 'text-white/30 hover:text-white'
              }`}
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex flex-col items-end mr-4">
             <a href={`tel:${SALON_CONFIG.phone}`} className="text-[10px] text-white/40 hover:text-primary transition-colors font-black tracking-widest leading-none mb-1">{SALON_CONFIG.phone}</a>
             <span className="text-[8px] uppercase tracking-widest text-white/20">Nellore Studio</span>
          </div>
          <a 
            href="#contact"
            onClick={(e) => { if(currentView === 'gallery') handleToggleGallery(); }}
            className="px-8 py-3 rounded-full bg-primary text-black text-[10px] uppercase tracking-[0.2em] font-black hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-3 text-white relative z-[105] bg-white/5 rounded-full border border-white/10 shadow-lg backdrop-blur-md"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-4 flex flex-col justify-between">
            <motion.span 
              animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 7 : 0 }}
              className="h-0.5 w-full bg-white block origin-center" 
            />
            <motion.span 
              animate={{ opacity: mobileMenuOpen ? 0 : 1, scale: mobileMenuOpen ? 0 : 1 }}
              className="h-0.5 w-full bg-white block" 
            />
            <motion.span 
              animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -7 : 0 }}
              className="h-0.5 w-full bg-white block origin-center" 
            />
          </div>
        </button>
      </div>

      {/* Swipeable Full Screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-[101]"
            />
            <motion.div 
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x > 80) setMobileMenuOpen(false);
              }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 35, stiffness: 350 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[480px] z-[102] bg-secondary flex flex-col shadow-[-40px_0_80px_rgba(0,0,0,0.5)] border-l border-white/5 overflow-y-auto no-scrollbar"
            >
              <div className="flex-1 flex flex-col px-10 pt-32 pb-12">
                <span className="text-primary text-[9px] uppercase tracking-[0.6em] font-black mb-12 opacity-40">Drag Right to Exit</span>
                
                <nav className="flex flex-col gap-6 sm:gap-10 mb-20">
                  {navLinks.map((link, idx) => (
                    <motion.a 
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      key={link.name} 
                      href={link.href}
                      onClick={(e) => {
                        setMobileMenuOpen(false);
                        if (link.name === 'Gallery' || currentView === 'gallery') {
                          e.preventDefault();
                          link.action();
                        }
                      }}
                      className="text-6xl sm:text-7xl font-display text-white hover:text-primary transition-all flex items-center group italic"
                    >
                      <span className="group-active:translate-x-6 transition-transform duration-500">{link.name}</span>
                    </motion.a>
                  ))}
                </nav>

                <div className="mt-auto space-y-12 pb-10">
                  <div className="grid grid-cols-1 gap-10">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.5em] font-black text-primary mb-6 opacity-30">Contact Us Directly</h4>
                      <div className="flex flex-col gap-4">
                        <a href={`tel:${SALON_CONFIG.phone}`} className="text-white text-2xl font-display tracking-widest hover:text-primary transition-colors">{SALON_CONFIG.phone}</a>
                        <a href={`tel:${SALON_CONFIG.secondaryPhone}`} className="text-white/50 text-lg font-display tracking-widest hover:text-primary transition-colors">{SALON_CONFIG.secondaryPhone}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-10 bg-black/40 border-t border-white/5 sticky bottom-0 backdrop-blur-xl">
                 <a 
                  href={`https://wa.me/${SALON_CONFIG.whatsapp}`}
                  className="w-full py-7 rounded-[2rem] bg-primary text-black text-center font-black tracking-[0.4em] uppercase text-xs shadow-2xl flex items-center justify-center gap-4 hover:bg-white transition-all"
                >
                  Book on WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
