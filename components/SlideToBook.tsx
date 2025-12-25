
import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';

interface SlideToBookProps {
  onSuccess: () => void;
  text?: string;
}

const SlideToBook: React.FC<SlideToBookProps> = ({ onSuccess, text = "Slide to Book" }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimation();

  // Width of the handle is 64px (w-16)
  // We calculate the constraints based on container width
  const [constraint, setConstraint] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setConstraint(containerRef.current.offsetWidth - 64 - 8); // 8px for padding
    }
  }, []);

  const opacity = useTransform(x, [0, constraint * 0.5], [1, 0]);
  const scale = useTransform(x, [0, constraint], [1, 1.1]);

  const handleDragEnd = () => {
    if (x.get() >= constraint * 0.9) {
      x.set(constraint);
      setIsSuccess(true);
      onSuccess();
      // Optional: Reset after delay if needed, or keep success state
    } else {
      controls.start({ x: 0 });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-16 bg-white/5 border border-white/10 rounded-full flex items-center p-1 overflow-hidden backdrop-blur-xl group"
    >
      {/* Background Text */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/30 group-hover:text-white/50 transition-colors">
          {isSuccess ? "Requesting..." : text}
        </span>
      </motion.div>

      {/* The Handle */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: constraint }}
        dragElastic={0}
        dragMomentum={false}
        onDragEnd={handleDragEnd}
        animate={controls}
        style={{ x, scale }}
        className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing shadow-2xl transition-colors duration-300 ${isSuccess ? 'bg-green-500' : 'bg-primary'}`}
      >
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key="arrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="check"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-white"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Progress Track */}
      <motion.div 
        style={{ width: x }}
        className="absolute left-0 top-0 bottom-0 bg-primary/20 pointer-events-none rounded-full"
      />
    </div>
  );
};

import { AnimatePresence } from 'framer-motion';
export default SlideToBook;
