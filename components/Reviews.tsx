
import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  { id: 1, name: "Arun Kumar", text: "Best salon in Nellore. The haircut was precise and the staff is really professional.", rating: 5, date: "2 weeks ago" },
  { id: 2, name: "Sneha Reddy", text: "Got a gold facial and my skin feels amazing. Love the premium vibe of the place.", rating: 5, date: "1 month ago" },
  { id: 3, name: "Prashanth", text: "The tagline is funny but their work is serious excellence. Highly recommended for beard shaping.", rating: 5, date: "3 weeks ago" },
  { id: 4, name: "Vijay Singh", text: "Fair pricing for the quality of service they provide. Clean and hygienic.", rating: 4, date: "2 months ago" },
  { id: 5, name: "Manoj P.", text: "Special packs are really worth it. The hair spa was so relaxing.", rating: 5, date: "1 week ago" },
  { id: 6, name: "Kavya", text: "Finally a salon that understands what 'just a trim' means. Great experience.", rating: 5, date: "5 days ago" },
];

const Reviews: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
        <div>
          <span className="text-primary uppercase tracking-[0.3em] text-sm font-bold block mb-4">Testimonials</span>
          <h2 className="font-display text-5xl md:text-7xl italic text-center md:text-left">What They Say</h2>
        </div>
        <a 
          href="#" 
          className="px-10 py-4 border border-primary/40 text-primary font-bold uppercase tracking-widest text-sm rounded-full hover:bg-primary hover:text-black transition-all"
        >
          Leave a Review
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((rev, index) => (
          <motion.div
            key={rev.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 rounded-3xl bg-secondary/40 border border-white/5 flex flex-col h-full hover:border-primary/20 transition-all group"
          >
            <div className="flex gap-1 mb-4 text-primary">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-4 h-4 ${i < rev.rating ? 'fill-current' : 'text-white/10'}`} viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              ))}
            </div>
            <p className="text-white/80 font-light leading-relaxed italic mb-6 flex-grow">&ldquo;{rev.text}&rdquo;</p>
            <div className="flex items-center justify-between border-t border-white/5 pt-4">
              <span className="font-display text-lg text-white">{rev.name}</span>
              <span className="text-[10px] uppercase tracking-widest text-white/30">{rev.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
