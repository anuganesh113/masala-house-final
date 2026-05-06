import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, PartyPopper, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const eventTypes = [
  {
    icon: <PartyPopper size={32} />,
    title: 'Birthday Celebrations',
    desc: 'Turn your special day into a legendary feast with customized menus, vibrant decorations, and impeccable service.',
    features: ['Bespoke Menus', 'Decor Support', 'Large Group Seating']
  },
  {
    icon: <Users size={32} />,
    title: 'Corporate Gatherings',
    desc: 'From team-building lunches to formal holiday parties, we provide a professional yet soulful dining experience.',
    features: ['High-speed WiFi', 'A/V Equipment', 'Privacy Options']
  },
  {
    icon: <Calendar size={32} />,
    title: 'Wedding Festivities',
    desc: 'Celebrate your love with authentic Indian hospitality. We handle everything from Sangeet snacks to the Grand Reception.',
    features: ['Signature Buffets', 'Live Chaat Stations', 'Floral Design']
  }
];

const EventsSection = () => {
  return (
    <section className="section-padding bg-white overflow-hidden relative" id="events">
      {/* Decorative Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-altBg/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-4 block">Celebrations & Private Dining</span>
            <h2 className="text-5xl md:text-7xl font-black text-dark tracking-tighter mb-8 leading-[0.9]">
              Host Your Next <span className="text-primary italic">Big Event</span> With Us
            </h2>
            <p className="text-subtext text-lg font-medium leading-relaxed mb-10 max-w-xl">
              From intimate family dinners to grand corporate galas, Masala House offers the perfect blend of authentic ambiance and world-class culinary expertise.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-lg text-primary mt-1">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-lg">Customizable Floor Plans</h4>
                  <p className="text-subtext text-sm">Flexible seating for groups of 10 to 150 guests.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-lg text-primary mt-1">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-lg">Curated Culinary Themes</h4>
                  <p className="text-subtext text-sm">Tailor your menu with regional Indian specialties.</p>
                </div>
              </div>
            </div>

            <Link 
              to="/catering" 
              className="inline-flex items-center gap-4 bg-dark text-white px-10 py-5 rounded-full text-xs font-black uppercase tracking-[0.3em] hover:bg-primary transition-all group"
            >
              Inquire About Events 
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
              <img 
                src="/assets/indian_restaurant_event_setup.png" 
                alt="Masala House Event Setup" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl">
                  <div className="text-primary font-black text-3xl mb-1">Elite Venue</div>
                  <div className="text-subtext font-bold uppercase tracking-widest text-[10px]">Concord's Premier Dining Space</div>
                </div>
              </div>
            </div>
            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-secondary/10 rounded-full blur-3xl" />
          </motion.div>
        </div>

        {/* Event Type Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {eventTypes.map((type, idx) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-altBg p-10 rounded-[2.5rem] hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-borderCustom group"
            >
              <div className="text-primary mb-8 group-hover:scale-110 transition-transform origin-left">
                {type.icon}
              </div>
              <h3 className="text-2xl font-black text-dark mb-4 tracking-tight">{type.title}</h3>
              <p className="text-subtext text-sm font-medium leading-relaxed mb-8 opacity-80">
                {type.desc}
              </p>
              <ul className="space-y-3">
                {type.features.map(feat => (
                  <li key={feat} className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-dark/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
