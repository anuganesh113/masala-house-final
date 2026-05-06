import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShoppingBag, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockMenu } from '../pages/Menu';

const PopularItemsSection = () => {
  const sliderRef = useRef(null);
  
  // Get items with chefPick: true or just some top items
  const popularItems = mockMenu.filter(item => item.chefPick).slice(0, 6);

  const scrollLeft = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-altBg" id="popular-items">
      <div className="site-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
            >
              Quick Grab
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-dark tracking-tighter"
            >
              Choose from our <span className="text-primary italic text-3xl md:text-4xl">delicious collection</span>
            </motion.h2>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={scrollLeft}
              className="p-3 rounded-full border border-borderCustom text-dark hover:bg-primary hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollRight}
              className="p-3 rounded-full border border-borderCustom text-dark hover:bg-primary hover:text-white transition-all shadow-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div 
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8"
        >
          {popularItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="min-w-[320px] md:min-w-[400px] snap-start"
            >
              <div className="card !p-0 overflow-hidden group bg-white border-none shadow-md hover:shadow-xl transition-all duration-500 rounded-[2rem]">
                <div className="h-64 overflow-hidden relative">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-primary text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                    POPULAR
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-dark group-hover:text-primary transition-colors">{item.name}</h3>
                    <div className="text-primary font-black text-xl">{item.price}</div>
                  </div>
                  <p className="text-subtext text-sm mb-8 line-clamp-2 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href="https://order.toasttab.com/online/masala-house-concord-159-concord-ave" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-[2] bg-primary text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary-dark transition-all"
                    >
                      <ShoppingBag size={14} /> ORDER NOW
                    </a>
                    <Link 
                      to={`/menu/${item.id}`}
                      className="flex-1 bg-white text-primary border border-primary py-4 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all shadow-sm"
                    >
                      <Eye size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularItemsSection;
