
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SALON_CONFIG } from '../config';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `*RESERVATION REQUEST*
--------------------------------
*Client:* ${formState.name}
*Phone:* ${formState.phone}
*Treatment:* ${formState.service}
*Preference:* ${formState.date}
*Notes:* ${formState.message || 'Standard Appointment'}
--------------------------------
_Booking initiated via ssquare-salon.web.app_`;

    window.open(`https://wa.me/919676131785?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 md:mb-40">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
            viewport={{ once: true }}
            className="text-primary uppercase text-xs font-black block mb-8"
          >
            Reservations
          </motion.span>
          <motion.h2 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="font-display text-[12vw] md:text-[12rem] italic leading-[0.75] tracking-tighter"
          >
            Claim Your <br className="hidden md:block"/> Throne
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          <div className="lg:col-span-4 space-y-16">
            <div className="space-y-12">
              <h3 className="font-display text-4xl md:text-5xl italic text-white/90">Direct Lines</h3>
              
              <div className="space-y-10">
                <a href={`tel:${SALON_CONFIG.phone}`} className="flex items-center gap-8 group">
                  <div className="w-16 h-16 rounded-[2rem] bg-white/[0.03] border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-700 group-hover:rotate-12">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <span className="text-white/30 tracking-[0.3em] uppercase text-[9px] font-black block mb-2">Concierge</span>
                    <span className="text-white text-lg font-medium tracking-widest group-hover:text-primary transition-colors">{SALON_CONFIG.phone}</span>
                  </div>
                </a>

                <a href={`https://wa.me/919676131785`} className="flex items-center gap-8 group">
                  <div className="w-16 h-16 rounded-[2rem] bg-white/[0.03] border border-white/10 flex items-center justify-center text-primary group-hover:bg-green-600 group-hover:text-white transition-all duration-700 group-hover:-rotate-12">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <div>
                    <span className="text-white/30 tracking-[0.3em] uppercase text-[9px] font-black block mb-2">WhatsApp</span>
                    <span className="text-white text-lg font-medium tracking-widest group-hover:text-green-500 transition-colors">Instant Booking</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-12 rounded-[3rem] bg-secondary border border-white/5 relative overflow-hidden group shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-[100px] group-hover:bg-primary/20 transition-all duration-1000"></div>
              <p className="font-display italic text-3xl leading-snug relative z-10 text-white/80">
                &ldquo;Mastering the craft of confidence for over two decades.&rdquo;
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="flex flex-col gap-5">
                <label className="text-[10px] uppercase tracking-[0.6em] font-black text-primary/60 ml-4">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="bg-white/[0.03] border border-white/10 rounded-[2rem] py-7 px-8 focus:outline-none focus:border-primary/40 text-white transition-all backdrop-blur-3xl shadow-xl placeholder:text-white/5"
                />
              </div>
              <div className="flex flex-col gap-5">
                <label className="text-[10px] uppercase tracking-[0.6em] font-black text-primary/60 ml-4">Phone Contact</label>
                <input 
                  type="tel" 
                  required
                  placeholder="+91 00000 00000"
                  value={formState.phone}
                  onChange={(e) => setFormState({...formState, phone: e.target.value})}
                  className="bg-white/[0.03] border border-white/10 rounded-[2rem] py-7 px-8 focus:outline-none focus:border-primary/40 text-white transition-all backdrop-blur-3xl shadow-xl placeholder:text-white/5"
                />
              </div>
              <div className="flex flex-col gap-5">
                <label className="text-[10px] uppercase tracking-[0.6em] font-black text-primary/60 ml-4">Select Treatment</label>
                <div className="relative">
                  <select 
                     required
                     value={formState.service}
                     onChange={(e) => setFormState({...formState, service: e.target.value})}
                     className="w-full bg-white/[0.03] border border-white/10 rounded-[2rem] py-7 px-8 focus:outline-none focus:border-primary/40 text-white appearance-none transition-all backdrop-blur-3xl shadow-xl cursor-pointer"
                  >
                    <option value="" disabled className="bg-neutral-900">Select an experience...</option>
                    {SALON_CONFIG.pricing.map(cat => (
                      <optgroup key={cat.category} label={cat.category} className="bg-black text-primary italic text-xs tracking-widest">
                        {cat.items.map(item => (
                          <option key={item.name} value={item.name} className="bg-black text-white not-italic py-4">{item.name}</option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                  <svg className="w-5 h-5 absolute right-8 top-1/2 -translate-y-1/2 text-primary/40 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <label className="text-[10px] uppercase tracking-[0.6em] font-black text-primary/60 ml-4">Preferred Date</label>
                <input 
                  type="date" 
                  required
                  value={formState.date}
                  onChange={(e) => setFormState({...formState, date: e.target.value})}
                  className="bg-white/[0.03] border border-white/10 rounded-[2rem] py-7 px-8 focus:outline-none focus:border-primary/40 text-white transition-all backdrop-blur-3xl shadow-xl [color-scheme:dark]"
                />
              </div>
              <div className="md:col-span-2 flex flex-col gap-5">
                <label className="text-[10px] uppercase tracking-[0.6em] font-black text-primary/60 ml-4">Special Requests</label>
                <textarea 
                  rows={4}
                  placeholder="Any specific stylist or requirements?"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="bg-white/[0.03] border border-white/10 rounded-[2rem] py-7 px-8 focus:outline-none focus:border-primary/40 text-white transition-all resize-none backdrop-blur-3xl shadow-xl placeholder:text-white/5"
                ></textarea>
              </div>
              
              <div className="md:col-span-2 pt-8">
                <motion.button 
                  whileHover={{ scale: 1.01, boxShadow: '0 0 60px rgba(197,160,89,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-10 bg-primary text-black font-black uppercase tracking-[0.6em] text-xs rounded-[2rem] transition-all shadow-2xl"
                >
                  Send Booking Request
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
