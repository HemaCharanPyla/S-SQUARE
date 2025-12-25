
import React from 'react';
import { SALON_CONFIG } from '../config';

const Instagram: React.FC = () => {
  return (
    <div className="py-20 border-y border-white/5 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8 rotate-12">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round"/></svg>
        </div>
        <h2 className="font-display text-4xl md:text-5xl mb-4 italic tracking-tight">Stay Social</h2>
        <p className="text-white/40 mb-10 max-w-sm">Follow us on Instagram to see our latest transformations and special offers.</p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 opacity-40">
           <img src="https://picsum.photos/seed/insta1/200/200" className="w-24 h-24 rounded-lg object-cover grayscale" />
           <img src="https://picsum.photos/seed/insta2/200/200" className="w-24 h-24 rounded-lg object-cover grayscale" />
           <img src="https://picsum.photos/seed/insta3/200/200" className="w-24 h-24 rounded-lg object-cover grayscale" />
           <img src="https://picsum.photos/seed/insta4/200/200" className="w-24 h-24 rounded-lg object-cover grayscale" />
           <img src="https://picsum.photos/seed/insta5/200/200" className="w-24 h-24 rounded-lg object-cover grayscale" />
        </div>

        <a 
          href={SALON_CONFIG.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white font-bold tracking-[0.2em] uppercase text-xs hover:text-primary transition-colors border-b border-primary pb-1"
        >
          Follow @{SALON_CONFIG.instagram}
        </a>
      </div>
    </div>
  );
};

export default Instagram;
