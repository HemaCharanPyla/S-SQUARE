
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const OwnerSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax and Scale effects for a cinematic feel
  const scale = useTransform(scrollYProgress, [0.1, 0.3], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const imageY = useTransform(scrollYProgress, [0.1, 0.4], [0, -50]);

  return (
    <div className="relative overflow-hidden bg-black py-24 md:py-48 lg:py-64">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Image Side - Takes up 5 columns */}
          <motion.div 
            style={{ scale, opacity }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute -inset-6 bg-primary/10 rounded-[60px] blur-[100px] group-hover:bg-primary/20 transition-all duration-1000"></div>
            
            <motion.div 
              style={{ y: imageY }}
              className="relative rounded-[50px] overflow-hidden border border-white/10 aspect-[3/4] bg-neutral-900 shadow-2xl"
            >
              <img 
                src="owner.jpg" 
                alt="Master Barber & Owner" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              
              {/* Floating Stat Badges */}
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-10 left-8 p-5 glass border border-white/10 rounded-3xl backdrop-blur-xl"
              >
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] block mb-1">Legacy</span>
                <span className="text-white text-3xl font-display italic">20+ Years</span>
              </motion.div>

              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-12 right-8 p-5 glass border border-white/10 rounded-3xl text-right backdrop-blur-xl"
              >
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] block mb-1">Certified</span>
                <span className="text-white text-xl font-display italic leading-tight">Jawed Habib <br/> & VSM Academy</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Side - Takes up 7 columns */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary uppercase tracking-[0.6em] text-[10px] md:text-xs font-black block mb-8">
                The Founder's Philosophy
              </span>
              
              <h2 className="font-display text-6xl md:text-8xl lg:text-9xl mb-10 italic text-white leading-[0.9] tracking-tighter">
                Crafting <br />
                <span className="text-primary">Excellence.</span>
              </h2>

              <div className="space-y-8 text-white/70 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl">
                <p className="italic">
                  "With a career spanning over two decades, I have refined the art of the perfect fade and the classic taper. My journey began at the world-renowned <strong>Jawed Habib Academy</strong> and <strong>VSM Academy</strong>, where precision wasn't just taught—it was demanded."
                </p>
                <p>
                  As a master stylist with <strong>20+ years in men's grooming</strong> and <strong>5+ years in high-fashion women's styling</strong>, I bring an elite level of technical skill to every chair. Whether it's the geometry of a precision cut or the nuance of chemical treatments, my background ensures a world-class result every time.
                </p>
                <p className="text-white font-medium">
                  At S Square, we don't just cut hair; we curate confidence.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-16">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-8 border border-white/5 bg-white/[0.02] rounded-[32px] hover:bg-white/[0.05] transition-all"
                >
                  <h4 className="text-white font-display text-4xl mb-2 italic">20+ Yrs</h4>
                  <p className="text-primary text-[10px] uppercase tracking-[0.3em] font-black">Expert Men's Grooming</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-8 border border-white/5 bg-white/[0.02] rounded-[32px] hover:bg-white/[0.05] transition-all"
                >
                  <h4 className="text-white font-display text-4xl mb-2 italic">5+ Yrs</h4>
                  <p className="text-primary text-[10px] uppercase tracking-[0.3em] font-black">Luxury Women's Styling</p>
                </motion.div>
              </div>

              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-12 py-6 bg-white text-black font-black uppercase tracking-[0.3em] text-[10px] md:text-xs rounded-full shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:bg-primary transition-all text-center"
              >
                Experience the Mastery
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 right-0 select-none pointer-events-none opacity-[0.03] translate-y-1/4">
        <span className="font-display text-[40vw] italic text-white leading-none">LEGACY</span>
      </div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-[120px]"></div>
    </div>
  );
};

export default OwnerSection;
