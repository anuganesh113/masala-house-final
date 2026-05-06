import { Phone, CheckCircle, MapPin, Truck, Users, Leaf, ChefHat, Utensils, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Catering = () => {
  return (
    <div className="w-full">
      <SEO 
        title="Premium Catering"
        description="Make your next event unforgettable with Masala House Catering. Custom Indian menus for weddings, corporate events, and parties in the Bay Area."
        url="/catering"
        image="/images/catering.webp"
      />
      {/* ZONE 2: CATERING HERO */}
      <section className="relative h-[65vh] min-h-[550px] flex items-center justify-center overflow-hidden bg-dark">
        {/* Animated Background Image */}
        <motion.div 
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/catering.webp")' }}
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
               Authentic Indian Catering <br className="hidden md:block"/> for Every Occasion
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-gray-200 text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto font-light tracking-wide drop-shadow"
          >
            Premium Tray Service
            <span className="hidden md:inline lg:px-2"> · </span>
            <br className="md:hidden" />
            <span className="mt-2 md:mt-0 inline-block">Contra Costa County & Bay Area</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <a href="#inquiry" className="btn-primary text-lg px-10 py-4 tracking-widest uppercase hover:scale-105 transition-all shadow-xl shadow-primary/20 border border-primary/50">
              GET A QUOTE
            </a>
            
            <a href="tel:+12068225058" className="inline-flex items-center text-white/80 hover:text-white transition-colors group">
              <Phone size={18} className="mr-3 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-light tracking-widest text-lg drop-shadow group-hover:text-primary transition-colors">
                (206) 822-5058
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ZONE 3: CATERING SERVICES TRIPLE GRID */}
      <section className="section-padding bg-white relative">
        <div className="site-container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            
            {/* Card A: Tray Service */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative bg-altBg text-center p-10 lg:p-14 border border-borderCustom hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group overflow-hidden"
            >
              {/* Premium Watermark Icon */}
              <div className="absolute -bottom-8 -right-8 text-dark/5 rotate-[-15deg] group-hover:scale-110 transition-transform duration-700">
                <Truck size={160} strokeWidth={1} />
              </div>
              
              <div className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 text-primary shadow-sm ring-4 ring-primary/10 group-hover:ring-primary/30 group-hover:scale-110 transition-all duration-500">
                <Truck size={32} strokeWidth={1.5} />
              </div>
              
              <h3 className="relative z-10 text-2xl lg:text-3xl font-bold text-dark mb-4 flex items-center justify-center gap-2">
                <CheckCircle size={22} className="text-primary hidden md:block" strokeWidth={2.5} /> Tray Service
              </h3>
              
              {/* Elegant Divider */}
              <div className="relative z-10 w-12 h-[2px] bg-primary/30 mx-auto mb-5 group-hover:w-20 group-hover:bg-primary transition-all duration-500"></div>
              
              <p className="relative z-10 text-subtext font-light text-base lg:text-lg leading-relaxed">
                Drop-off catering for <br className="hidden lg:block"/> any venue
              </p>
            </motion.div>

            {/* Card B: Full Service */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="relative bg-altBg text-center p-10 lg:p-14 border border-borderCustom hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group overflow-hidden"
            >
              {/* Premium Watermark Icon */}
              <div className="absolute -bottom-8 -right-8 text-dark/5 rotate-[-15deg] group-hover:scale-110 transition-transform duration-700">
                <Users size={160} strokeWidth={1} />
              </div>

              <div className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 text-primary shadow-sm ring-4 ring-primary/10 group-hover:ring-primary/30 group-hover:scale-110 transition-all duration-500">
                <Users size={32} strokeWidth={1.5} />
              </div>
              
              <h3 className="relative z-10 text-2xl lg:text-3xl font-bold text-dark mb-4 flex items-center justify-center gap-2">
                <CheckCircle size={22} className="text-primary hidden md:block" strokeWidth={2.5} /> Full Service
              </h3>

              {/* Elegant Divider */}
              <div className="relative z-10 w-12 h-[2px] bg-primary/30 mx-auto mb-5 group-hover:w-20 group-hover:bg-primary transition-all duration-500"></div>

              <p className="relative z-10 text-subtext font-light text-base lg:text-lg leading-relaxed">
                Staff + setup + <br className="hidden lg:block"/>breakdown included
              </p>
            </motion.div>

            {/* Card C: Custom Menus */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="relative bg-altBg text-center p-10 lg:p-14 border border-borderCustom hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group overflow-hidden"
            >
              {/* Premium Watermark Icon */}
              <div className="absolute -bottom-8 -right-8 text-dark/5 rotate-[-15deg] group-hover:scale-110 transition-transform duration-700">
                <Leaf size={160} strokeWidth={1} />
              </div>

              <div className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 text-primary shadow-sm ring-4 ring-primary/10 group-hover:ring-primary/30 group-hover:scale-110 transition-all duration-500">
                <Leaf size={32} strokeWidth={1.5} />
              </div>
              
              <h3 className="relative z-10 text-2xl lg:text-3xl font-bold text-dark mb-4 flex items-center justify-center gap-2">
                <CheckCircle size={22} className="text-primary hidden md:block" strokeWidth={2.5} /> Custom Menus
              </h3>

              {/* Elegant Divider */}
              <div className="relative z-10 w-12 h-[2px] bg-primary/30 mx-auto mb-5 group-hover:w-20 group-hover:bg-primary transition-all duration-500"></div>

              <p className="relative z-10 text-subtext font-light text-base lg:text-lg leading-relaxed pt-1">
                Veg · Vegan · Halal <br className="hidden lg:block"/> All dietary needs
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ZONE 4: CATERING EXCELLENCE & FEATURES */}
      <section className="section-padding bg-altBg/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

        <div className="site-container px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
            >
              Why Choose Masala House
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-dark tracking-tighter"
            >
              Catering Excellence <span className="text-primary italic">Perfected</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ChefHat size={32} />,
                title: "Chef-Curated Menus",
                desc: "Every dish is prepared using time-honored recipes and premium spices sourced directly from India."
              },
              {
                icon: <Award size={32} />,
                title: "Flawless Execution",
                desc: "From elegant setup to professional service, our team ensures your event runs smoothly and perfectly."
              },
              {
                icon: <Utensils size={32} />,
                title: "Versatile Packages",
                desc: "Tailored solutions for everything from intimate family gatherings to grand destination weddings."
              },
              {
                icon: <Truck size={32} />,
                title: "On-Time Delivery",
                desc: "Reliable, temperature-controlled transport to keep your food fresh, hot, and ready to serve."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2rem] border border-borderCustom shadow-xl hover:shadow-primary/5 transition-all group"
              >
                <div className="w-16 h-16 bg-altBg rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">{feature.title}</h3>
                <p className="text-subtext leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Large Visual Callout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-20 bg-dark rounded-[3rem] overflow-hidden relative"
          >
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 p-12 lg:p-20">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to make your next <br /> event <span className="text-primary italic">unforgettable?</span>
                </h3>
                <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
                  Join hundreds of families and corporations in the Bay Area who trust Masala House for their most important milestones. Our dedicated catering manager is ready to help you plan the perfect menu.
                </p>
                <a 
                  href="#inquiry" 
                  className="bg-primary text-white px-10 py-5 rounded-full font-bold tracking-widest text-sm hover:bg-primary-dark transition-all inline-block shadow-lg shadow-primary/20"
                >
                  START PLANNING NOW
                </a>
              </div>
              <div className="lg:w-1/2 h-[400px] lg:h-[600px] relative">
                <img 
                  src="/assets/indian_restaurant_event_setup.png" 
                  alt="Catering Setup" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark via-transparent to-transparent hidden lg:block"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent lg:hidden"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ZONE 5: SERVICE AREAS (CITY GRID) */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="site-container px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">Where We Cater</h2>
            <p className="text-subtext max-w-2xl mx-auto mb-12 text-lg">
              Bringing authentic flavors across Contra Costa County and the greater Bay Area. 
              <span className="block mt-1 font-medium text-primary">Reliable delivery. On-time setup. Premium service.</span>
            </p>
          </motion.div>

          {/* Light Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-[400px] mb-16 rounded-[2rem] overflow-hidden border border-borderCustom shadow-inner relative group"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100650.56306512392!2d-122.11571439019688!3d37.97120610319451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808560eb94754593%3A0xc4f98f6d7a46abf4!2sConcord%2C%20CA!5e0!3m2!1sen!2sus!4v1713596541249!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(0.6) contrast(1.1) brightness(1.05)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
            {/* Elegant overlay to soften the map edges */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(255,255,255,0.4)]"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
            {/* Concord - Special Highlight */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-primary/5 border-2 border-primary/20 p-6 rounded-2xl flex flex-col items-center justify-center group hover:bg-primary transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3 text-white group-hover:bg-white group-hover:text-primary transition-colors">
                <MapPin size={24} />
              </div>
              <h4 className="text-lg font-bold text-dark group-hover:text-white transition-colors">Concord</h4>
              <span className="text-[10px] uppercase tracking-tighter bg-primary text-white px-2 py-0.5 rounded-full mt-2 group-hover:bg-white group-hover:text-primary font-bold">Free Delivery</span>
            </motion.div>

            {[
              'Walnut Creek', 'Pleasant Hill', 'Martinez', 'Antioch', 
              'Pittsburg', 'Brentwood', 'Danville', 'Clayton', 'Bay Area'
            ].map((city, idx) => (
              <motion.div 
                key={city}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (idx + 1) * 0.05 }}
                className="bg-altBg/50 border border-borderCustom p-6 rounded-2xl flex flex-col items-center justify-center group hover:bg-white hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3 text-subtext group-hover:text-primary transition-colors shadow-sm">
                  <MapPin size={20} />
                </div>
                <h4 className="text-md font-bold text-dark group-hover:text-primary transition-colors">{city}</h4>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 pt-8 border-t border-borderCustom inline-block"
          >
            <p className="text-subtext italic">
              Don't see your city? We frequently travel further for larger events. 
              <br className="md:hidden" />
              <a href="tel:+12068225058" className="text-primary font-bold ml-1 hover:underline underline-offset-4">Call us to check availability (206) 822-5058</a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ZONE 6: CATERING INQUIRY FORM */}
      <section id="inquiry" className="section-padding bg-altBg">
        <div className="site-container px-4">
          <div className="max-w-4xl mx-auto">
            {/* Form Header & Contact */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6">Get a Catering Quote</h2>
              
              <div className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-8 bg-white px-8 py-4 rounded-full border border-borderCustom shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">SS</div>
                  <span className="font-bold text-dark">Sakshi Sethi</span>
                </div>
                <div className="hidden md:block w-px h-6 bg-borderCustom"></div>
                <a href="tel:+12068225058" className="flex items-center gap-3 group">
                  <Phone size={18} className="text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-dark group-hover:text-primary transition-colors">(206) 822-5058</span>
                </a>
              </div>
            </motion.div>

            {/* Premium Form */}
            <motion.form 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 lg:p-16 rounded-[2.5rem] shadow-2xl border border-borderCustom grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
            >
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest font-bold text-subtext">Full Name *</label>
                <input type="text" placeholder="Your name" className="w-full bg-altBg/30 border border-borderCustom px-6 py-4 rounded-xl focus:border-primary focus:outline-none transition-colors" required />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest font-bold text-subtext">Email Address *</label>
                <input type="email" placeholder="email@example.com" className="w-full bg-altBg/30 border border-borderCustom px-6 py-4 rounded-xl focus:border-primary focus:outline-none transition-colors" required />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest font-bold text-subtext">Phone Number *</label>
                <input type="tel" placeholder="(000) 000-0000" className="w-full bg-altBg/30 border border-borderCustom px-6 py-4 rounded-xl focus:border-primary focus:outline-none transition-colors" required />
              </div>

              {/* Event Type */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest font-bold text-subtext">Event Type *</label>
                <select className="w-full bg-altBg/30 border border-borderCustom px-6 py-4 rounded-xl focus:border-primary focus:outline-none transition-colors appearance-none" required>
                  <option value="">Select event type</option>
                  <option>Wedding</option>
                  <option>Corporate Event</option>
                  <option>Birthday Party</option>
                  <option>Family Gathering</option>
                  <option>Religious Ceremony</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Date */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest font-bold text-subtext">Event Date *</label>
                <input type="date" className="w-full bg-altBg/30 border border-borderCustom px-6 py-4 rounded-xl focus:border-primary focus:outline-none transition-colors" required />
              </div>

              {/* Location */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest font-bold text-subtext">Location / City *</label>
                <input type="text" placeholder="e.g. Concord, Walnut Creek" className="w-full bg-altBg/30 border border-borderCustom px-6 py-4 rounded-xl focus:border-primary focus:outline-none transition-colors" required />
              </div>

              {/* Guest Count */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest font-bold text-subtext">Guest Count *</label>
                <input type="number" placeholder="Estimated people" className="w-full bg-altBg/30 border border-borderCustom px-6 py-4 rounded-xl focus:border-primary focus:outline-none transition-colors" required />
              </div>

              {/* Service Style */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest font-bold text-subtext">Service Style *</label>
                <select className="w-full bg-altBg/30 border border-borderCustom px-6 py-4 rounded-xl focus:border-primary focus:outline-none transition-colors appearance-none" required>
                  <option value="">Select style</option>
                  <option>Tray Drop-off</option>
                  <option>Buffet Setup</option>
                  <option>Full Service (with Staff)</option>
                </select>
              </div>


              {/* Dietary Needs */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest font-bold text-subtext">Dietary Needs</label>
                <input type="text" placeholder="e.g. Vegan, Gluten-Free, Halal" className="w-full bg-altBg/30 border border-borderCustom px-6 py-4 rounded-xl focus:border-primary focus:outline-none transition-colors" />
              </div>

              {/* Notes */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-xs uppercase tracking-widest font-bold text-subtext">Additional Notes</label>
                <textarea rows="4" placeholder="Tell us more about your event..." className="w-full bg-altBg/30 border border-borderCustom px-6 py-4 rounded-xl focus:border-primary focus:outline-none transition-colors"></textarea>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 mt-6">
                <button 
                  type="submit" 
                  className="w-full bg-primary text-white py-5 rounded-2xl font-bold tracking-[0.2em] uppercase hover:bg-primary-dark transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-primary/20"
                >
                  SUBMIT INQUIRY
                </button>
                <p className="text-center text-subtext text-xs mt-6">
                  By submitting, you agree to our team contacting you regarding your catering request. 
                  <br />We typically respond within 24 hours.
                </p>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catering;
