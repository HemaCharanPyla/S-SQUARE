
import React from 'react';
import { motion } from 'framer-motion';

const serviceCategories = [
  {
    title: "Gents Grooming",
    description: "Tailored haircuts and beard grooming for the modern gentleman.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0V13.5m0 3v3m7.5-3v-3m0 3v3M12 21a9 9 0 100-18 9 9 0 000 18z"/></svg>
    )
  },
  {
    title: "Facials & Skin Care",
    description: "Rejuvenating treatments from charcoal masks to advanced whitening facials.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm6 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75z"/></svg>
    )
  },
  {
    title: "Hair Care & Styling",
    description: "Expert cuts, smoothening, and color treatments for stunning results.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"/></svg>
    )
  },
  {
    title: "Manicure & Pedicure",
    description: "Classic and special spa treatments for your hands and feet.",
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-primary uppercase tracking-[0.3em] text-sm font-bold block mb-4">Our Expertise</span>
          <h2 className="font-display text-5xl md:text-7xl">Elevate Your Look</h2>
        </div>
        <p className="text-white/60 max-w-sm font-light leading-relaxed">
          From precise haircuts to rejuvenating skin treatments, our professionals are dedicated to your transformation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {serviceCategories.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-black/40 border border-white/5 h-[400px] flex flex-col justify-end p-8"
          >
            <div className="absolute inset-0 z-0">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4 backdrop-blur-sm border border-primary/20 transition-all duration-300 group-hover:bg-primary group-hover:text-black">
                {service.icon}
              </div>
              <h3 className="font-display text-2xl text-white mb-2">{service.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/80 transition-colors">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
