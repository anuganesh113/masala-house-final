import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Calendar } from 'lucide-react';

// Using the generated image path provided by the system
const EXPERIENCE_IMG = "/assets/experience_dining.png";

const ExperienceSection = () => {
  return (
    <section className="relative py-24 md:py-32 lg:py-48 overflow-hidden bg-white" id="experience">
      {/* Background Large Text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[10rem] md:text-[15rem] lg:text-[20rem] font-black text-altBg/80 tracking-tighter leading-none opacity-50">
          EXPERIENCE
        </span>
      </div>

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group">
              <img 
                src={EXPERIENCE_IMG} 
                alt="Dining Experience" 
                className="w-full h-[500px] lg:h-[700px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-3xl shadow-xl hidden md:block"
            >
              <div className="text-4xl font-black mb-1">1+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest leading-tight">
                Years of <br /> Excellence
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div className="lg:col-span-7">
            <div className="mb-8 relative">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                viewport={{ once: true }}
                className="h-1 bg-primary mb-6"
              />
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
              >
                Since 2025
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black text-dark tracking-tighter leading-[1.1]"
              >
                Wonderful <span className="text-primary italic">Dining Experience</span> <br className="hidden md:block" /> & Indian Food
              </motion.h2>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg text-subtext mb-12 font-medium leading-relaxed max-w-2xl"
            >
              <p>
                At Masala House, we believe that food is more than just sustenance—it's a celebration of heritage, flavor, and community. Since our doors opened in 2025, we've dedicated ourselves to bringing the vibrant, authentic tastes of India to Concord.
              </p>
              <p>
                Our chefs craft each dish with passion, using traditional techniques and the finest spices to create an unforgettable culinary journey. Whether you're joining us for a cozy dinner or a festive celebration, we promise an experience that warms the soul.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-6"
            >
              <a 
                href="#reservation" 
                className="bg-primary text-white px-10 py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30"
              >
                <Calendar size={18} /> Find a Table
              </a>
              <a 
                href="https://order.toasttab.com/online/masala-house-concord-159-concord-ave" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-dark text-white px-10 py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-black transition-all shadow-lg"
              >
                <ShoppingBag size={18} /> Order Online
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
