import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tag, Clock, Gift, Percent, ShoppingBag, Eye, Star, Leaf, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { mockMenu } from './Menu';

const Deals = () => {
  const specialOffers = [
    {
      id: 1,
      title: 'Lunch Special',
      description: 'Get 15% off on all lunch orders above $20.',
      code: 'LUNCH15',
      validUntil: 'Mon - Fri, 11 AM - 3 PM',
      icon: <Clock size={24} />,
      color: 'bg-primary'
    },
    {
      id: 2,
      title: 'Family Feast',
      description: 'Buy 2 entrees and get a free appetizer of your choice.',
      code: 'FAMILYDEAL',
      validUntil: 'Daily after 5 PM',
      icon: <Gift size={24} />,
      color: 'bg-primary'
    },
    {
      id: 3,
      title: 'First Order Discount',
      description: 'New to Masala House? Enjoy 20% off on your first online order.',
      code: 'WELCOME20',
      validUntil: 'One-time use',
      icon: <Tag size={24} />,
      color: 'bg-primary'
    },
    {
      id: 4,
      title: 'Weekend Biryani Special',
      description: 'Order any large Biryani and get a free soft drink.',
      code: 'BIRYANIFREE',
      validUntil: 'Saturday & Sunday',
      icon: <Percent size={24} />,
      color: 'bg-primary'
    }
  ];

  // For "Deals of the Week", we'll show Chef's Picks as they are our featured items
  const featuredDeals = mockMenu.filter(item => item.chefPick).slice(0, 3);

  return (
    <div className="w-full">
      <SEO 
        title="Special Deals & Offers"
        description="Discover the best deals and limited-time offers at Masala House. Save on your favorite authentic Indian dishes."
        url="/deals"
        image="/images/deals_hero.png"
      />

      {/* ZONE 2: DEALS HERO */}
      <section className="relative h-[65vh] min-h-[550px] flex items-center justify-center overflow-hidden bg-dark">
        {/* Animated Background Image */}
        <motion.div 
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/deals_hero.png")' }}
        />
        
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/60 to-dark/90"></div>
        
        <div className="relative z-10 site-container text-center pt-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-5xl mx-auto leading-[1.1] tracking-tight drop-shadow-lg">
               Exclusive Deals & <br className="hidden md:block"/> Limited Time Offers
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-gray-200 text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto font-light tracking-wide drop-shadow"
          >
            Enjoy authentic flavors at <span className="text-primary font-medium">unbeatable prices</span>.
            <br className="hidden md:block" />
            Freshly prepared, locally loved, and now even more affordable.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <a href="/menu" className="btn-primary text-lg px-10 py-4 tracking-widest uppercase hover:scale-105 transition-all shadow-xl shadow-primary/20 border border-primary/50">
              EXPLORE MENU
            </a>
          </motion.div>
        </div>
      </section>

      {/* ZONE 3: OFFERS GRID */}
      <section className="section-padding bg-white relative">
        <div className="site-container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">Current Promotions</h2>
            <p className="text-subtext max-w-2xl mx-auto text-lg">
              Check out our latest offers designed to give you the best value while enjoying our premium Indian cuisine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {specialOffers.map((offer, idx) => (
              <motion.div 
                key={offer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className="relative bg-altBg rounded-[2rem] p-8 md:p-10 border border-borderCustom hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col md:flex-row gap-8 overflow-hidden group"
              >
                <div className={`w-20 h-20 shrink-0 ${offer.color} rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {offer.icon}
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-dark mb-3">{offer.title}</h3>
                  <p className="text-subtext mb-6 leading-relaxed">
                    {offer.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="bg-white px-4 py-2 rounded-lg border border-dashed border-primary flex items-center gap-2">
                      <span className="text-xs uppercase tracking-widest font-bold text-subtext">Code:</span>
                      <span className="text-lg font-bold text-primary">{offer.code}</span>
                    </div>
                    <span className="text-sm text-subtext italic">
                      Valid: {offer.validUntil}
                    </span>
                  </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:scale-110 transition-transform duration-700">
                  {React.cloneElement(offer.icon, { size: 180 })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONE 4: FEATURED DEALS (MENU ITEMS STYLE) */}
      <section className="section-padding bg-altBg/30 relative overflow-hidden">
        <div className="site-container px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">Deals of the Week</h2>
            <p className="text-subtext max-w-2xl mx-auto text-lg">
              Our most loved dishes at special promotional prices. Limited time only!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <AnimatePresence mode="popLayout">
              {featuredDeals.map((item, idx) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: idx * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-primary/20 ring-1 ring-primary/5 transition-all duration-500 flex flex-col hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)]"
                >
                  {/* Food Photo */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.img 
                      src={item.img} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                      <span className={`backdrop-blur-xl px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] border shadow-md ${
                        item.diet === 'Veg' ? 'bg-[#1a9d4afc] text-white border-green-400/30' :
                        item.diet === 'Non-veg' ? 'bg-red-600 text-white border-red-500/30' :
                        item.diet === 'Vegan' ? 'bg-emerald-700 text-white border-emerald-600/30' :
                        'bg-white/80 text-dark border-white/40'
                      }`}>
                        {item.diet}
                      </span>
                    </div>

                    <div className="absolute bottom-6 right-6">
                      <div className="bg-white px-4 py-2 rounded-xl shadow-2xl font-black text-primary text-lg border border-borderCustom">
                        {item.price}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex flex-col flex-grow relative bg-white transition-colors duration-500 group-hover:bg-altBg/20">
                    <h3 className="text-2xl font-bold text-dark group-hover:text-primary transition-colors leading-tight mb-4">
                      {item.name}
                    </h3>
                    <p className="text-subtext text-sm mb-8 line-clamp-2 font-medium leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="flex gap-3 mt-auto">
                      <a
                        href="https://order.toasttab.com/online/masala-house-concord-159-concord-ave"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex-[2] bg-primary text-white py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 overflow-hidden group/btn hover:shadow-2xl hover:shadow-primary/30 transition-all border border-primary"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          <ShoppingBag size={14} strokeWidth={3} /> Order Now
                        </span>
                        <motion.div 
                          className="absolute inset-0 bg-primary-dark translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"
                        />
                      </a>
                      <Link 
                        to={`/menu/${item.id}`}
                        className="flex-1 bg-white text-primary border border-primary py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all shadow-sm"
                      >
                        <Eye size={16} strokeWidth={3} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ZONE 4: CTA */}
      <section className="section-padding bg-dark text-white text-center">
        <div className="site-container px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Don't Miss Out!</h2>
            <p className="text-gray-400 text-lg md:text-xl mb-10">
              Join our newsletter to receive exclusive deals, updates on new menu items, and special event announcements directly in your inbox.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-white/10 border border-white/20 px-6 py-4 rounded-full focus:outline-none focus:border-primary transition-colors text-white"
                required
              />
              <button type="submit" className="btn-primary px-8 py-4 rounded-full font-bold uppercase tracking-widest">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Deals;
