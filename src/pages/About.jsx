import React from 'react';
import { Award, Utensils, Heart, ChefHat, Coffee, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import USPGrid from '../components/USPGrid';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="w-full">
      <SEO 
        title="Our Story"
        description="A family passion for authentic Indian flavors. Learn more about the Masala House journey, our heritage, and the team behind Concord's favorite Indian restaurant."
        url="/about"
      />
      {/* 2. ABOUT HERO */}
      <section className="relative bg-dark text-white pt-40 pb-24 bg-cover bg-center overflow-hidden" style={{ backgroundImage: 'linear-gradient(rgba(26, 26, 26, 0.8), rgba(26, 26, 26, 0.8)), url("/images/hero_bg.webp")' }}>
        <div className="relative z-10 site-container text-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl mx-auto leading-tight">
            A Family Passion. Authentic Flavors. Real Hospitality.
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide">
            Opened August 2024 in Concord, CA
          </p>
        </div>
      </section>

      {/* ZONE 3: OUR STORY (Text + Image split) */}
      <section className="section-padding bg-altBg relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>

        <div className="site-container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          
          {/* Photo on top for mobile, on right for desktop */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-1 md:order-2 relative w-full mt-4 md:mt-0"
          >
            {/* Decorative back frame */}
            <div className="absolute inset-0 bg-primary/20 rounded-card translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 -z-10 transition-transform hover:translate-x-3 hover:translate-y-3 duration-500"></div>
            
            <div className="h-[350px] md:h-[550px] bg-cardBg rounded-card overflow-hidden shadow-2xl relative">
              <img src="/images/buffet.webp" alt="Warm interior buffet spread" className="w-full h-full object-cover relative z-10 hover:scale-110 transition-transform duration-1000 ease-in-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-20 pointer-events-none"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 z-30 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/40 flex items-center gap-4 group cursor-default">
                 <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:scale-110 transition-transform">
                    <Heart size={24} className="fill-primary/20" />
                 </div>
                 <div>
                    <p className="text-dark font-bold text-sm leading-tight mb-0.5">Crafted with</p>
                    <p className="text-primary font-bold text-xs uppercase tracking-widest">Passion</p>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-primary"></div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Established 2024</span>
            </div>
            <h2 className="mb-8 text-4xl lg:text-5xl font-bold text-dark leading-tight">
              Our <span className="text-primary italic">Story</span>
            </h2>
            
            <div className="space-y-6 text-subtext text-lg font-light leading-relaxed">
              <p className="text-xl font-normal text-dark border-l-4 border-primary/30 pl-5">
                Masala House Concord opened its doors with a simple but powerful mission: to share the unadulterated, vibrant flavors of our Indian heritage with our local community.
              </p>
              <p>
                We stand for authenticity above all else. In a world where recipes are often adapted or watered down, we take pride in preserving traditional cooking techniques. From slow-simmering our curries to hand-rolling our naan and sourcing the finest spices directly from India, we never compromise on quality or heritage.
              </p>
              <p>
                What makes us truly different is our balance of rich, deeply authentic flavors and genuine, heartfelt hospitality. When you walk into Masala House, you aren't just a customer; you're considered an honored guest in our home. We invite you to experience Indian dining as it was meant to be—warm, vibrant, and unforgettable.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ZONE 4: MEET THE TEAM */}
      <section className="section-padding bg-altBg relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 left-10 text-primary/5 -rotate-12 pointer-events-none">
          <ChefHat size={250} />
        </div>
        <div className="absolute bottom-10 right-10 text-accent/5 rotate-12 pointer-events-none">
          <Heart size={300} />
        </div>

        <div className="site-container relative z-10">
          <div className="text-center mb-20">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="flex justify-center items-center gap-3 mb-4"
            >
              <div className="w-8 h-[2px] bg-primary"></div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm">The Family</span>
              <div className="w-8 h-[2px] bg-primary"></div>
            </motion.div>
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6"
            >
              Meet Our <span className="text-primary italic">Team</span>
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-subtext text-lg md:text-xl font-light max-w-2xl mx-auto"
            >
              The passionate individuals behind your truly authentic dining experience at Masala House.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Team Member 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="card bg-white !p-0 overflow-hidden group shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-black/5 flex flex-col"
            >
               <div className="h-80 overflow-hidden relative bg-cardBg">
                 <img src="/images/avatar_placeholder_1.webp" alt="Male avatar in chef apron" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                 {/* Premium Overlay Effect */}
                 <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
                 
                 <div className="absolute bottom-6 left-6 right-6 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2 shadow-sm">Prabesh Dhakal</h3>
                    <div className="inline-block bg-white/10 backdrop-blur-md px-3 py-1.5 rounded disabled border border-white/20">
                      <p className="font-bold text-[10px] text-white uppercase tracking-widest">Owner & Technology Director</p>
                    </div>
                 </div>
               </div>
               <div className="p-8 relative flex-grow">
                 <div className="absolute top-0 right-8 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 text-primary group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                   <Award size={20} />
                 </div>
                 <p className="text-subtext text-[15px] font-light leading-relaxed relative z-10 text-left">
                   "As our Owner and Technology Director, Prabesh merges his deep passion for community with innovative operational strategies. He ensures that Masala House runs seamlessly, bringing a modern touch..."
                 </p>
               </div>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="card bg-white !p-0 overflow-hidden group shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-black/5 flex flex-col"
            >
               <div className="h-80 overflow-hidden relative bg-cardBg">
                 <img src="/images/avatar_placeholder_2.webp" alt="Male and female avatars in chef aprons" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                 {/* Premium Overlay Effect */}
                 <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
                 
                 <div className="absolute bottom-6 left-6 right-6 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2 shadow-sm">Yashpal & Neetu Sethi</h3>
                    <div className="inline-block bg-white/10 backdrop-blur-md px-3 py-1.5 rounded disabled border border-white/20">
                      <p className="font-bold text-[10px] text-white uppercase tracking-widest">Co-Owners & Culinary</p>
                    </div>
                 </div>
               </div>
               <div className="p-8 relative flex-grow">
                 <div className="absolute top-0 right-8 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 text-primary group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                   <ChefHat size={20} />
                 </div>
                 <p className="text-subtext text-[15px] font-light leading-relaxed relative z-10 text-left">
                   "The culinary visionaries and true heart of Masala House, Yashpal and Neetu bring decades of authentic, home-style Indian cooking expertise to Concord. They meticulously craft every recipe from scratch..."
                 </p>
               </div>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="card bg-white !p-0 overflow-hidden group shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-black/5 flex flex-col"
            >
               <div className="h-80 overflow-hidden relative bg-cardBg">
                 <img src="/images/avatar_placeholder_3.webp" alt="Female avatar in chef apron" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                 {/* Premium Overlay Effect */}
                 <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
                 
                 <div className="absolute bottom-6 left-6 right-6 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2 shadow-sm">Sakshi Sethi</h3>
                    <div className="inline-block bg-white/10 backdrop-blur-md px-3 py-1.5 rounded disabled border border-white/20">
                      <p className="font-bold text-[10px] text-white uppercase tracking-widest">Catering & Guest Experience</p>
                    </div>
                 </div>
               </div>
               <div className="p-8 relative flex-grow">
                 <div className="absolute top-0 right-8 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 text-primary group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                   <Heart size={20} />
                 </div>
                 <p className="text-subtext text-[15px] font-light leading-relaxed relative z-10 text-left">
                   "Sakshi leads our guest relations and expansive catering operations with unmatched dedication. Whether coordinating intimate family dinners or grand corporate events, she brings a warm, personalized touch..."
                 </p>
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ZONE 5: WHAT MAKES US DIFFERENT */}
      <USPGrid bgClass="bg-white" />
    </div>
  );
};

export default About;
