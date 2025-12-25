
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SALON_CONFIG } from '../config';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  const titleWords = ["S Square", "Professionals"];

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background with cinematic overlay & Parallax */}
      <motion.div 
        style={{ y: y1, scale }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ 
            backgroundImage: `url('owner.jpg')`,
            opacity: 0.6
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          style={{ opacity }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8 md:mb-12"
          >
            <span className="inline-block text-primary uppercase text-[9px] md:text-xs font-black tracking-[0.5em] px-6 py-2 border border-primary/20 rounded-full backdrop-blur-md">
              The Gold Standard of Nellore
            </span>
          </motion.div>
          
          <h1 className="font-display text-[14vw] sm:text-7xl md:text-8xl lg:text-[11rem] text-white mb-8 md:mb-12 leading-[0.8] tracking-tighter">
            {titleWords[0]} <br className="hidden sm:block" />
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="italic text-primary/90 font-light"
            >
              {titleWords[1]}
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-lg md:text-3xl text-accent/70 font-display italic tracking-widest mb-12 md:mb-20 max-w-3xl mx-auto leading-relaxed px-4"
          >
            &ldquo;{SALON_CONFIG.tagline}&rdquo;
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-8"
          >
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(197,160,89,0.4)' }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="w-full sm:w-auto px-12 py-6 bg-primary text-black font-black uppercase tracking-[0.2em] text-[10px] md:text-xs rounded-full transition-all"
            >
              Book Reservation
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="w-full sm:w-auto px-12 py-6 border border-white/20 text-white font-black uppercase tracking-[0.2em] text-[10px] md:text-xs rounded-full transition-all backdrop-blur-sm"
            >
              The Menu
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Refined Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 hidden sm:flex pointer-events-none"
      >
        <div className="w-px h-24 bg-gradient-to-b from-primary/80 via-primary/20 to-transparent" />
      </motion.div>
    </div>
  );
};

export default Hero;
