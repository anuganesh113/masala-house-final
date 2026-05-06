import React from 'react';
import { motion } from 'framer-motion';

const TextSlider = () => {
  const items = ["DINE-IN", "SPICES", "DINING", "BOOKING", "AUTHENTIC", "CATERING", "BUFFET"];
  
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="bg-primary py-6 overflow-hidden border-y border-white/10 relative">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex whitespace-nowrap gap-12 md:gap-24"
      >
        {duplicatedItems.map((item, idx) => (
          <span 
            key={idx} 
            className="text-white text-4xl md:text-6xl font-black tracking-tighter opacity-80 hover:opacity-100 transition-opacity"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default TextSlider;
