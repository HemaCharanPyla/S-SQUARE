
import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Team', 'Studio', 'Work', 'Promotions', 'Videos'];

const galleryItems = [
  { 
    id: 1, 
    category: 'Team', 
    title: 'S Square Professionals',
    description: 'Our full team of expert stylists at the Vanamthopu Centre studio.',
    url: 'WhatsApp Image 2025-12-25 at 3.36.46 PM.jpeg',
    type: 'image'
  },
  { 
    id: 2, 
    category: 'Studio', 
    title: 'Grand Opening Day',
    description: 'Celebrating our launch with iconic blue and white balloons.',
    url: 'WhatsApp Image 2025-12-25 at 3.36.46 PM (1).jpeg',
    type: 'image'
  },
  { 
    id: 3, 
    category: 'Promotions', 
    title: 'Flash Combo Offers',
    description: 'Special opening packages: 400/-, 700/-, and 1000/- deals.',
    url: 'WhatsApp Image 2025-12-25 at 3.36.46 PM (2).jpeg',
    type: 'image'
  },
  { 
    id: 4, 
    category: 'Work', 
    title: 'Precision Styling',
    description: 'Master barber crafting a perfect fade.',
    url: 'WhatsApp Image 2025-12-25 at 3.36.46 PM (3).jpeg',
    type: 'image'
  },
  { 
    id: 5, 
    category: 'Studio', 
    title: 'Premium Product Bar',
    description: 'Stocked with Matrix, L\'Oreal, and Streax professional care.',
    url: 'WhatsApp Image 2025-12-25 at 3.36.46 PM (4).jpeg',
    type: 'image'
  },
  { 
    id: 6, 
    category: 'Studio', 
    title: 'Modern Interior',
    description: 'Our sleek, premium grooming stations.',
    url: 'owner.jpg',
    type: 'image'
  },
  { 
    id: 7, 
    category: 'Videos', 
    title: 'High-Top Transformation',
    description: 'Watch the detail that goes into every single cut.',
    url: 'WhatsApp Video 2025-12-25 at 3.36.47 PM.mp4',
    type: 'video'
  },
  { 
    id: 8, 
    category: 'Videos', 
    title: 'Styling Masterclass',
    description: 'Behind the scenes of our signature styling process.',
    url: 'WhatsApp Video 2025-12-25 at 3.36.47 PM (1).mp4',
    type: 'video'
  }
];

const GalleryItem: React.FC<{ item: typeof galleryItems[0]; onClick: () => void }> = ({ item, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      onClick={onClick}
      className="relative aspect-[4/5] overflow-hidden group rounded-3xl bg-secondary shadow-2xl cursor-pointer"
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-900 animate-pulse flex items-center justify-center">
          <div className="w-10 h-10 border-2 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        </div>
      )}

      {item.type === 'image' ? (
        <img 
          src={item.url} 
          alt={item.title} 
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-1000 ${isLoaded ? 'opacity-60 group-hover:opacity-100 group-hover:scale-110' : 'opacity-0'}`}
        />
      ) : (
        <video 
          src={item.url}
          onLoadedData={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-1000 ${isLoaded ? 'opacity-60 group-hover:opacity-100' : 'opacity-0'}`}
          muted
          loop
          playsInline
        />
      )}
      
      {item.type === 'video' && isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center border border-primary/30 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-primary translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
        <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold mb-2">{item.category}</span>
        <h4 className="text-white font-display text-3xl mb-2">{item.title}</h4>
        <p className="text-white/60 text-xs leading-relaxed max-w-xs">{item.description}</p>
      </div>
    </motion.div>
  );
};

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(i => i.category === filter);

  const openLightbox = (index: number) => {
    // Current index in filtered list
    setSelectedIndex(index);
  };

  const closeLightbox = () => setSelectedIndex(null);

  const nextItem = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
  }, [selectedIndex, filteredItems.length]);

  const prevItem = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
  }, [selectedIndex, filteredItems.length]);

  // Keyboard support for navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') nextItem();
      if (e.key === 'ArrowLeft') prevItem();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, nextItem, prevItem]);

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary uppercase tracking-[0.4em] text-sm font-bold block mb-4"
        >
          Visual Portfolio
        </motion.span>
        <h2 className="font-display text-6xl md:text-9xl mb-12 italic leading-none">Studio Artistry</h2>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setFilter(cat); closeLightbox(); }}
              className={`px-10 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold border transition-all duration-500 ${
                filter === cat ? 'bg-primary text-black border-primary shadow-[0_0_25px_rgba(197,160,89,0.4)]' : 'border-white/10 text-white/40 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <GalleryItem 
              key={item.id} 
              item={item} 
              onClick={() => openLightbox(index)} 
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-12 backdrop-blur-2xl"
          >
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-8 right-8 z-[210] p-4 text-white/50 hover:text-primary transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Arrows */}
            <button 
              onClick={prevItem}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[210] p-4 text-white/20 hover:text-primary transition-colors bg-white/5 md:bg-transparent rounded-full"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextItem}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[210] p-4 text-white/20 hover:text-primary transition-colors bg-white/5 md:bg-transparent rounded-full"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Content Container */}
            <motion.div
              key={filteredItems[selectedIndex].id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl max-h-full flex flex-col items-center gap-6"
            >
              {filteredItems[selectedIndex].type === 'image' ? (
                <img 
                  src={filteredItems[selectedIndex].url} 
                  alt={filteredItems[selectedIndex].title}
                  className="max-h-[70vh] w-auto rounded-2xl shadow-2xl border border-white/10"
                />
              ) : (
                <video 
                  src={filteredItems[selectedIndex].url}
                  controls
                  autoPlay
                  className="max-h-[70vh] w-auto rounded-2xl shadow-2xl border border-white/10"
                />
              )}
              
              <div className="text-center max-w-2xl px-6">
                <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-black mb-3 block">
                  {filteredItems[selectedIndex].category}
                </span>
                <h3 className="font-display text-4xl md:text-5xl text-white mb-4 italic">
                  {filteredItems[selectedIndex].title}
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  {filteredItems[selectedIndex].description}
                </p>
                <div className="mt-8 text-[10px] uppercase tracking-widest text-white/20 font-bold">
                  {selectedIndex + 1} / {filteredItems.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-24 text-center">
        <p className="text-white/20 text-[10px] uppercase tracking-[0.5em] italic">
          * Professional transformations recorded live in-studio.
        </p>
      </div>
    </div>
  );
};

export default Gallery;
