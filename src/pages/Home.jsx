import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock, Heart, Users, Coffee, Utensils, Award, ChefHat, CheckCircle, ChevronDown, ChevronRight, ChevronLeft } from 'lucide-react';
import USPGrid from '../components/USPGrid';
import SEO from '../components/SEO';

const testimonialsData = [
  { rating: 5, text: "Absolutely incredible! The lunch buffet has such a fantastic variety and the butter chicken is out of this world. Highly recommend!", author: "Michael R.", location: "Concord", platform: "Google" },
  { rating: 5, text: "We booked Masala House for our wedding catering and it was the best decision. Flawless service, and the food was authentic and fresh.", author: "Sarah J.", location: "Walnut Creek", platform: "Yelp" },
  { rating: 5, text: "Beautiful ambiance and the street food hits right at home. It truly feels like walking into a culinary journey of India. 10/10.", author: "Aman K.", location: "Pleasant Hill", platform: "Google" },
  { rating: 5, text: "The catering for our corporate milestone was outstanding. Everything arrived hot and perfectly spiced. Everyone was raving about it!", author: "David L.", location: "Martinez", platform: "Yelp" },
  { rating: 5, text: "Best garlic naan and paneer tikka masala I've had in the Bay Area. The staff is so friendly and welcoming. We will definitely be back.", author: "Jessica T.", location: "Concord", platform: "Google" }
];

const Home = () => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: -350, behavior: 'smooth' });
  };

  const slideRight = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: 350, behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      <SEO 
        title="Authentic Indian Food, Buffet & Catering"
        description="Experience the soul of India at Masala House Concord. Daily lunch buffet, authentic street food, and premium catering in Contra Costa County."
      />
      {/* ZONE 2: HERO */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Animated Background Image */}
        <motion.div 
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/hero_bg.webp")', backgroundColor: '#2C2C2C' }}
        />
        
        {/* Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/40 to-dark/90"></div>
        
        <div className="relative z-10 site-container text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-5xl mx-auto leading-[1.1] tracking-tight px-4">
              Authentic Indian Food in Concord — <span className="italic">Buffet, Street Food & Catering</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-gray-200 text-lg md:text-2xl mb-12 max-w-3xl mx-auto font-light tracking-wide"
          >
            Family-run since 2024 · Open daily · Serving Contra Costa County
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 px-6 md:px-0"
          >
            <Link to="/menu" className="btn-primary w-full md:w-auto uppercase px-10 py-4 text-lg tracking-widest hover:scale-105 active:scale-95 transition-all text-center">
              ORDER ONLINE
            </Link>
            <Link to="/catering" className="btn-secondary w-full md:w-auto uppercase px-10 py-4 text-lg tracking-widest !bg-transparent text-primary border-primary hover:bg-primary hover:text-white transition-all text-center">
              GET A CATERING QUOTE
            </Link>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hidden md:block"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* ZONE 3: HOURS STRIP */}
      <motion.section 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-altBg border-y border-borderCustom py-4 overflow-hidden relative shadow-sm"
      >
        <div className="site-container">
          <div className="grid grid-cols-2 lg:flex lg:flex-nowrap items-center justify-between gap-y-6 gap-x-4 md:gap-8 py-4 px-4 md:px-0 text-dark font-medium">
            {[
              { icon: <Coffee size={18} />, label: "Breakfast", hours: "8 AM – 11 AM" },
              { icon: <Utensils size={18} />, label: "Buffet", hours: "11 AM – 2:30 PM", price: "$18.99" },
              { icon: <Heart size={18} />, label: "Happy Hour", hours: "3 PM – 5 PM" },
              { icon: <Star size={18} />, label: "Dinner", hours: "5 PM – 10 PM" }
            ].map((item, index) => (
              <div key={item.label} className="flex items-center space-x-3 shrink-0 cursor-default">
                <div className="bg-primary text-white p-2.5 rounded-full shadow-sm shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold tracking-tight text-dark leading-tight">{item.label}</span>
                  <span className="text-[11px] md:text-sm text-subtext font-normal uppercase tracking-wide">
                    {item.hours} {item.price && <span className="text-primary font-bold ml-1 hidden lg:inline">({item.price})</span>}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ZONE 4: FEATURE CARDS */}
      <section id="buffet" className="section-padding bg-altBg">
        <div className="site-container">
          <div className="text-center mb-16 px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark tracking-tighter mb-4">
                Experience <span className="text-primary italic">Masala House</span>
              </h2>
              <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>
              <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-subtext font-light leading-relaxed tracking-wide">
                Discover our vibrant dining options designed to satisfy your cravings for <span className="text-bodyText font-medium">authentic Indian flavors</span>.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ZONE 4A: Buffet Card */}
            <div className="card overflow-hidden !p-0 group flex flex-col bg-[#FFF8F0] border-none shadow-md hover:shadow-xl transition-all duration-500">
              <div className="h-72 overflow-hidden relative">
                <img src="/images/buffet.webp" alt="Daily Lunch Buffet" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg">
                  Daily Special
                </div>
              </div>
              <div className="p-8 flex flex-col items-center text-center flex-grow">
                <h3 className="text-2xl font-bold text-dark mb-1 group-hover:text-primary transition-colors">Daily Lunch Buffet</h3>
                <div className="text-primary font-bold text-lg mb-4">$18.99 per person</div>
                
                <div className="flex items-center justify-center text-subtext text-sm mb-6 bg-white/50 px-4 py-1.5 rounded-full border border-borderCustom/50">
                  <Clock size={14} className="mr-2" />
                  <span>11AM – 2:30PM · Every Day</span>
                </div>

                <div className="space-y-2 mb-8 text-bodyText font-medium">
                  <div className="flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                    <span>Fresh naan made to order</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                    <span>Mango lassi included</span>
                  </div>
                </div>

                <Link to="/menu" className="mt-auto group/btn flex items-center text-primary font-bold hover:text-dark transition-all">
                  <span className="border-b-2 border-primary/30 group-hover/btn:border-dark pb-0.5">View What's on the Buffet</span>
                  <ChevronDown size={18} className="ml-1 -rotate-90 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* ZONE 4B: Catering Card */}
            <div className="card overflow-hidden !p-0 group flex flex-col bg-[#F4F9F4] border-none shadow-md hover:shadow-xl transition-all duration-500">
              <div className="h-72 overflow-hidden relative">
                <img src="/images/catering.webp" alt="Event Catering services" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-[#4A7C4A] text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg">
                  Premium Service
                </div>
              </div>
              <div className="p-8 flex flex-col items-center text-center flex-grow">
                <h3 className="text-2xl font-bold text-dark mb-1 group-hover:text-[#4A7C4A] transition-colors">Catering for Any Occasion</h3>
                <div className="text-[#4A7C4A] font-bold text-lg mb-4">From $18 per person</div>
                
                <div className="text-subtext text-sm mb-6 font-medium italic">
                  Professional setups for events of all sizes
                </div>

                <div className="space-y-2 mb-8 text-bodyText font-medium">
                  <div className="flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4A7C4A] mr-2"></div>
                    <span>Tray service · Full-service events</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4A7C4A] mr-2"></div>
                    <span>Contra Costa County & beyond</span>
                  </div>
                </div>

                <Link to="/catering" className="mt-auto group/btn flex items-center text-[#4A7C4A] font-bold hover:text-dark transition-all">
                  <span className="border-b-2 border-[#4A7C4A]/30 group-hover/btn:border-dark pb-0.5">Get a Catering Quote</span>
                  <ChevronDown size={18} className="ml-1 -rotate-90 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZONE 5: USP GRID */}
      <USPGrid bgClass="bg-white" />

      {/* ZONE 6: TESTIMONIALS */}
      <section className="section-padding bg-white relative">
        <div className="site-container">
          <div className="text-center mb-20 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark tracking-tighter mb-4">
                What <span className="text-primary italic">Our Customers</span> Say
              </h2>
              <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>
              <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-subtext font-light leading-relaxed tracking-wide">
                Real reviews from our <span className="text-bodyText font-medium">Concord community.</span>
              </p>
            </motion.div>
          </div>

          <div className="relative mb-16 group">
            {/* Navigation Buttons */}
            <button 
              onClick={slideLeft} 
              className="absolute left-[-15px] md:left-[-24px] top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.1)] text-primary hover:scale-110 transition-transform"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={slideRight} 
              className="absolute right-[-15px] md:right-[-24px] top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.1)] text-primary hover:scale-110 transition-transform"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
            
            <div 
              ref={sliderRef}
              className="flex overflow-x-auto gap-6 md:gap-8 px-4 md:px-0 py-8 snap-x snap-mandatory no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonialsData.map((testimonial, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col min-w-[85%] md:min-w-[calc(50%-16px)] lg:min-w-[calc(33.333%-21px)] snap-center card bg-white border border-borderCustom/60 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex space-x-1 text-primary mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="mb-8 italic text-bodyText text-lg leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-borderCustom/30 pt-4 mt-auto">
                    <p className="text-sm text-subtext">
                      — <span className="text-primary font-bold">{testimonial.author}</span>, {testimonial.location} · <span className="font-semibold text-dark">{testimonial.platform}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a 
              href="#" 
              className="inline-flex items-center text-primary font-bold hover:underline group text-lg"
            >
              Read more reviews on Google
              <motion.span 
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ChevronRight size={20} className="ml-1" />
              </motion.span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
