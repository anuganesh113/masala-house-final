import React from 'react';
import { motion } from 'framer-motion';
import { Award, Utensils, Heart, ChefHat, Coffee, Users } from 'lucide-react';

const USPGrid = ({ bgClass = "bg-white" }) => {
  return (
    <section className={`section-padding relative overflow-hidden ${bgClass}`}>
      {/* Subtle background decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-site mx-auto px-4 md:px-6 w-full relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark tracking-tighter mb-4">
              Why <span className="text-primary italic">Masala House</span>
            </h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-subtext font-light leading-relaxed tracking-wide">
              The <span className="text-bodyText font-medium">authentic Indian experience</span> in the heart of Concord.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 px-2 md:px-0"
        >
          {[
            { 
              id: "5A",
              icon: <Award size={32} />, 
              title: "Authentic Recipes", 
              body: "Not adapted for American palate" 
            },
            { 
              id: "5B",
              icon: <Utensils size={32} />, 
              title: "Indian Street Food", 
              body: "Pani puri, pav bhaji kathi rolls" 
            },
            { 
              id: "5C",
              icon: <Heart size={32} />, 
              title: "Family Friendly", 
              body: "Warm, genuine service" 
            },
            { 
              id: "5D",
              icon: <ChefHat size={32} />, 
              title: "Daily Buffet", 
              body: "$18.99 · Every day 11AM–2:30PM" 
            },
            { 
              id: "5E",
              icon: <Coffee size={32} />, 
              title: "Indian Breakfast", 
              body: "8AM daily · Paratha, Chhola, Chai" 
            },
            { 
              id: "5F",
              icon: <Users size={32} />, 
              title: "Full Catering", 
              body: "Every event size · Call Sakshi" 
            }
          ].map((item) => (
            <motion.div 
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="flex flex-col items-center text-center p-8 card border-borderCustom/40 hover:border-primary/30 backdrop-blur-sm bg-white/40 hover:bg-white transition-all duration-300 group shadow-sm hover:shadow-xl"
            >
              <div className="relative mb-6">
                {/* Icon Glow */}
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:bg-primary/30 transition-all duration-300 scale-75 group-hover:scale-110"></div>
                <div className="relative bg-white text-primary p-5 rounded-2xl shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-borderCustom/20 group-hover:border-transparent">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-2xl text-dark mb-3 font-bold tracking-tight">{item.title}</h3>
              <p className="text-subtext text-base leading-relaxed h-12 flex items-center justify-center font-light">
                {item.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default USPGrid;
