import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Star, ShoppingBag, ArrowRight, Heart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockMenu } from '../pages/Menu';

const streetFoods = mockMenu.filter(item => item.cat === 'Street Foods').slice(0, 4);

const StreetFoodSection = () => {
  return (
    <section className="section-padding bg-altBg overflow-hidden relative" id="street-foods">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <img src="/assets/street_food_vibe.png" alt="" className="w-full h-full object-cover grayscale" />
      </div>

      <div className="site-container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">The Chaat Corner</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-dark tracking-wide mb-6 font-bebas"
            >
              Vibrant <span className="text-primary">Street Foods</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-subtext text-lg font-medium leading-relaxed"
            >
              Experience a symphony of sweet, spicy, and tangy flavors straight from the bustling markets of India. Our street foods are crafted to bring that authentic "Chaat" experience to your plate.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/menu" 
              className="group flex items-center gap-4 bg-white border border-borderCustom p-2 pr-6 rounded-full hover:border-primary transition-all shadow-sm"
            >
              <div className="bg-primary p-3 rounded-full text-white group-hover:rotate-12 transition-transform">
                <ShoppingBag size={20} />
              </div>
              <span className="font-black uppercase tracking-widest text-[10px] text-dark">Explore Full Menu</span>
              <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Street Food Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {streetFoods.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="card !p-0 overflow-hidden bg-white border-none shadow-md hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] h-full flex flex-col">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-primary p-2 rounded-xl shadow-sm">
                    <Flame size={18} fill={item.spiceLevel > 2 ? "#E07B39" : "none"} />
                  </div>
                  <div className={`absolute top-4 right-4 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg transition-transform duration-500 group-hover:scale-105 shadow-black/20 z-10 block cursor-default ${
                    item.diet === 'Veg' ? 'bg-[#1a9d4afc] text-white' :
                    item.diet === 'Vegan' ? 'bg-emerald-700 text-white' :
                    'bg-red-600 text-white'
                  }`}>
                    {item.diet === 'Veg' ? 'VEG' : item.diet === 'Vegan' ? 'VEGAN' : 'NON-VEG'}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-4 gap-4">
                    <h3 className="text-2xl font-black text-dark tracking-tight leading-tight">
                      {item.name}
                    </h3>
                    <div className="text-primary font-black text-xl whitespace-nowrap">{item.price}</div>
                  </div>
                  
                  <p className="text-subtext text-sm mb-8 line-clamp-3 font-medium leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                  
                  <div className="flex gap-3">
                    <a 
                      href="https://order.toasttab.com/online/masala-house-concord-159-concord-ave" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-[3] bg-primary text-white py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
                    >
                      <ShoppingBag size={14} strokeWidth={3} /> ORDER NOW
                    </a>
                    <Link 
                      to={`/menu/${item.id}`}
                      className="flex-1 bg-white text-primary border border-primary/30 py-4 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm"
                    >
                      <Eye size={18} strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Vibe Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col md:flex-row items-center justify-center gap-12 text-center"
        >
          <div className="flex flex-col items-center">
            <div className="text-primary font-black text-4xl mb-2">100%</div>
            <div className="text-dark font-bold uppercase tracking-widest text-[10px]">Authentic Spices</div>
          </div>
          <div className="h-12 w-px bg-borderCustom hidden md:block" />
          <div className="flex flex-col items-center">
            <div className="text-primary font-black text-4xl mb-2">Daily</div>
            <div className="text-dark font-bold uppercase tracking-widest text-[10px]">Fresh Preparations</div>
          </div>
          <div className="h-12 w-px bg-borderCustom hidden md:block" />
          <div className="flex flex-col items-center">
            <div className="text-primary font-black text-4xl mb-2">Handmade</div>
            <div className="text-dark font-bold uppercase tracking-widest text-[10px]">Artisanal Chutneys</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StreetFoodSection;
