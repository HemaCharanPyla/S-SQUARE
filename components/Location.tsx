
import React from 'react';
import { SALON_CONFIG } from '../config';

const Location: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-3xl h-[450px] w-full border border-white/10 shadow-2xl relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.8471206105436!2d79.9813!3d14.4444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c8bc26322b7a9%3A0x63a34a1a3674684a!2sB.V.%20Nagar%2C%20Nellore%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1710123456789!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8)' }} 
              allowFullScreen={true} 
              loading="lazy"
            ></iframe>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <span className="text-primary uppercase tracking-[0.3em] text-sm font-bold block mb-4">Visit Us</span>
          <h2 className="font-display text-5xl md:text-7xl mb-12 italic leading-tight">In the Heart <br />of Nellore</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full border border-primary/40 flex-shrink-0 flex items-center justify-center text-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div>
                <h4 className="text-white/40 uppercase tracking-widest text-[10px] font-bold mb-1">Our Address</h4>
                <p className="text-xl font-display text-white">{SALON_CONFIG.address}</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full border border-primary/40 flex-shrink-0 flex items-center justify-center text-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div>
                <h4 className="text-white/40 uppercase tracking-widest text-[10px] font-bold mb-1">Working Hours</h4>
                <div className="space-y-1">
                  {SALON_CONFIG.hours.map(h => (
                    <p key={h.day} className="text-xl font-display text-white">{h.day}: {h.time}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
