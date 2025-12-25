
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SALON_CONFIG } from '../config';

const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SALON_CONFIG.pricing[0].category);
  const [searchQuery, setSearchQuery] = useState('');
  const tabsRef = useRef<HTMLDivElement>(null);

  const filteredItems = useMemo(() => {
    if (!searchQuery) {
      return SALON_CONFIG.pricing.find(p => p.category === activeTab)?.items || [];
    }

    return SALON_CONFIG.pricing
      .flatMap(p => p.items)
      .filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
  }, [activeTab, searchQuery]);

  useEffect(() => {
    if (tabsRef.current) {
      const activeElement = tabsRef.current.querySelector('[data-active="true"]');
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [activeTab]);

  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden py-24 md:py-40 bg-black">
      {/* Cinematic Luxe Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxe Salon"
          className="w-full h-full object-cover opacity-[0.07] grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black" />
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="text-primary uppercase tracking-[0.6em] text-[10px] font-black block mb-8 px-6 py-1.5 border border-primary/20 rounded-full bg-primary/5 backdrop-blur-sm">
              Premium Services
            </span>
            <h2 className="font-display text-6xl md:text-[10rem] mb-8 italic leading-[0.9] tracking-tighter">Art of Styling</h2>
            <p className="text-white/30 font-display italic text-xl md:text-2xl tracking-widest max-w-2xl mx-auto">&ldquo;Precision is our only language.&rdquo;</p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto mt-20 relative group">
            <input 
              type="text" 
              placeholder="Find your treatment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/10 rounded-[2rem] py-6 md:py-8 px-16 focus:outline-none focus:border-primary/40 text-white placeholder-white/20 transition-all backdrop-blur-3xl text-sm md:text-lg shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)]"
            />
            <svg className="w-6 h-6 absolute left-6 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white/40 hover:text-white p-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            )}
          </div>
        </div>

        {!searchQuery && (
          <div className="relative mb-24 md:mb-40">
            <div 
              ref={tabsRef}
              className="flex overflow-x-auto no-scrollbar gap-4 md:gap-12 pb-6 px-4 -mx-4 md:px-0 md:mx-0 snap-x snap-mandatory justify-start md:justify-center border-b border-white/5"
            >
              {SALON_CONFIG.pricing.map((p) => (
                <button
                  key={p.category}
                  data-active={activeTab === p.category}
                  onClick={() => setActiveTab(p.category)}
                  className={`snap-center whitespace-nowrap px-4 py-6 text-[11px] uppercase tracking-[0.5em] font-black transition-all relative ${
                    activeTab === p.category 
                    ? 'text-primary' 
                    : 'text-white/20 hover:text-white/60'
                  }`}
                >
                  {p.category}
                  {activeTab === p.category && (
                    <motion.div 
                      layoutId="tab-underline-premium"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary shadow-[0_0_20px_rgba(197,160,89,1)]"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="max-w-6xl mx-auto min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab + searchQuery}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12 md:gap-y-20"
            >
              {filteredItems.map((item, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  key={item.name + idx} 
                  className="flex flex-col group relative"
                >
                  <div className="flex items-start justify-between mb-4 gap-6">
                    <h4 className="font-display text-2xl md:text-4xl text-white/90 group-hover:text-primary transition-colors duration-700 flex-1 leading-tight">
                      {item.name}
                      {activeTab === 'Flash Combo Offers' && (
                        <span className="block text-[10px] uppercase tracking-[0.2em] text-primary/40 mt-2 font-black">Exclusive Package</span>
                      )}
                    </h4>
                    <span className="font-bold text-primary font-mono text-2xl md:text-3xl whitespace-nowrap mt-1 tracking-tighter">
                      {item.price}
                    </span>
                  </div>
                  <div className="w-full h-px bg-white/[0.05] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-center opacity-40"></div>
                  </div>
                </motion.div>
              ))}
              {filteredItems.length === 0 && (
                <div className="col-span-1 md:col-span-2 text-center py-40">
                  <p className="text-white/10 italic font-display text-4xl md:text-6xl">
                    No matching services.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 md:mt-48 p-16 border border-white/5 bg-white/[0.01] text-center max-w-5xl mx-auto rounded-[4rem] backdrop-blur-xl"
        >
          <div className="flex flex-col items-center gap-6">
            <svg className="w-8 h-8 text-primary/20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            <p className="text-white/30 text-[10px] md:text-xs uppercase tracking-[0.6em] font-black leading-loose">
              Custom styling requires consultation. <br className="hidden md:block" /> Rates subject to complexity and hair length.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
