import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Eye, Utensils, Leaf, ArrowRight, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockMenu } from '../pages/Menu';

const ExploreMenuSection = () => {
  const [activeCat, setActiveCat] = useState('All');
  const [dietFilter, setDietFilter] = useState('All');

  const categories = ['All', 'Street Foods', 'Appetizers', 'Entrees', 'Breads', 'Desserts', 'Drinks'];
  const diets = ['All', 'Veg', 'Non-veg', 'Vegan'];

  const filteredMenu = mockMenu.filter(item => {
    const matchesCat = activeCat === 'All' || item.cat === activeCat;
    const matchesDiet = dietFilter === 'All' || 
                       (dietFilter === 'Veg' && (item.diet === 'Veg' || item.diet === 'Vegan')) ||
                       item.diet === dietFilter;
    return matchesCat && matchesDiet;
  });

  // Limit items for homepage to keep it clean (multiples of 3)
  const displayItems = filteredMenu.slice(0, 6);

  return (
    <section className="section-padding bg-white overflow-hidden" id="explore-menu">
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-dark tracking-tighter mb-4"
          >
            Explore our <span className="text-primary italic">Whole Menu</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Filter Bar (Matching Image) */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8 border-b border-borderCustom pb-8">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0 w-full lg:w-auto justify-center lg:justify-start">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-6 py-2.5 rounded-full whitespace-nowrap text-sm font-bold transition-all ${
                  activeCat === cat 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'text-subtext hover:text-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Diet Filters */}
          <div className="flex items-center p-1 bg-altBg rounded-full border border-borderCustom shadow-inner shrink-0">
            {diets.map(diet => (
              <button
                key={diet}
                onClick={() => setDietFilter(diet)}
                className={`relative px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  dietFilter === diet ? 'text-primary' : 'text-subtext hover:text-dark'
                }`}
              >
                {dietFilter === diet && (
                  <motion.div
                    layoutId="home-diet-indicator"
                    className="absolute inset-0 bg-white rounded-full shadow-sm"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {(diet === 'Veg' || diet === 'Vegan') && <Leaf size={12} className={diet === 'Vegan' ? 'text-emerald-500' : 'text-[#1a9d4afc]'} />}
                  {diet}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {displayItems.length > 0 ? (
              displayItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group bg-white rounded-[2.5rem] overflow-hidden border border-borderCustom hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] transition-all duration-500 h-full flex flex-col"
                >
                  {/* Image container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.img} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg ${
                        item.diet === 'Veg' ? 'bg-[#1a9d4afc] text-white' :
                        item.diet === 'Non-veg' ? 'bg-red-600 text-white' :
                        'bg-emerald-700 text-white'
                      }`}>
                        {item.diet}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-4 gap-4">
                      <h3 className="text-2xl font-black text-dark tracking-tight leading-tight">
                        {item.name}
                      </h3>
                      <div className="text-primary font-black text-xl whitespace-nowrap">
                        {item.price}
                      </div>
                    </div>
                    <p className="text-subtext text-[15px] mb-8 line-clamp-2 font-medium opacity-80 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="flex gap-3 mt-auto">
                      <a 
                        href="https://order.toasttab.com/online/masala-house-concord-159-concord-ave" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-[3] bg-primary text-white py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
                      >
                        <ShoppingBag size={14} strokeWidth={3} /> Order Now
                      </a>
                      <Link 
                        to={`/menu/${item.id}`}
                        className="flex-1 bg-white text-primary border border-primary/30 py-4 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm"
                      >
                        <Eye size={18} strokeWidth={2.5} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <Utensils size={48} className="mx-auto text-borderCustom mb-4" />
                <h3 className="text-xl font-bold text-dark mb-2">No items found</h3>
                <p className="text-subtext">Try adjusting your filters.</p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* View All CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Link 
            to="/menu" 
            className="inline-flex items-center gap-3 text-primary font-black uppercase tracking-[0.3em] text-sm hover:gap-5 transition-all group"
          >
            View Full Culinary Menu 
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreMenuSection;
