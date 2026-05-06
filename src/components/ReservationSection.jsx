import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Mail, Phone, User, MessageSquare } from 'lucide-react';

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '2026-05-06',
    time: '12:24 PM',
    persons: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="section-padding bg-white overflow-hidden" id="reservation">
      <div className="site-container">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Left Side: Form */}
          <div className="w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-5xl md:text-6xl font-serif text-dark mb-4 tracking-tight italic">
                Make a Table Reservation
              </h2>
              <p className="text-primary font-serif italic text-xl">
                Explore our most Exquisite Indian Menu
              </p>
            </motion.div>

            <form className="space-y-12">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="relative group">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-dark/10 py-5 focus:border-primary transition-all outline-none text-dark font-semibold text-lg placeholder:text-transparent peer"
                    placeholder="Your Full Name"
                  />
                  <label className="absolute left-0 top-5 text-subtext/60 font-medium transition-all peer-focus:-top-2 peer-focus:text-primary peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-primary peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">
                    Your Full Name
                  </label>
                </div>
                <div className="relative group">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-dark/10 py-5 focus:border-primary transition-all outline-none text-dark font-semibold text-lg placeholder:text-transparent peer"
                    placeholder="Your Email"
                  />
                  <label className="absolute left-0 top-5 text-subtext/60 font-medium transition-all peer-focus:-top-2 peer-focus:text-primary peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-primary peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">
                    Your Email
                  </label>
                </div>
                <div className="relative group">
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-dark/10 py-5 focus:border-primary transition-all outline-none text-dark font-semibold text-lg placeholder:text-transparent peer"
                    placeholder="Phone Number"
                  />
                  <label className="absolute left-0 top-5 text-subtext/60 font-medium transition-all peer-focus:-top-2 peer-focus:text-primary peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-primary peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">
                    Phone Number
                  </label>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="relative group">
                  <input 
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-dark/10 py-5 focus:border-primary transition-all outline-none text-dark font-semibold text-lg"
                  />
                  <Calendar className="absolute right-0 top-1/2 -translate-y-1/2 text-dark/20 group-hover:text-primary transition-colors" size={18} />
                </div>
                <div className="relative group">
                  <input 
                    type="text" 
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-dark/10 py-5 focus:border-primary transition-all outline-none text-dark font-semibold text-lg"
                  />
                  <Clock className="absolute right-0 top-1/2 -translate-y-1/2 text-dark/20 group-hover:text-primary transition-colors" size={18} />
                  <label className="absolute left-0 top-5 text-subtext/60 font-medium transition-all peer-focus:-top-2 peer-focus:text-primary peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-primary peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">
                    Time
                  </label>
                </div>
                <div className="relative group">
                  <input 
                    type="number" 
                    name="persons"
                    value={formData.persons}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-dark/10 py-5 focus:border-primary transition-all outline-none text-dark font-semibold text-lg placeholder:text-transparent peer"
                    placeholder="Number of Persons"
                  />
                  <label className="absolute left-0 top-5 text-subtext/60 font-medium transition-all peer-focus:-top-2 peer-focus:text-primary peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-primary peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">
                    Number of Persons
                  </label>
                </div>
              </div>

              {/* Message */}
              <div className="relative group">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="1"
                  className="w-full bg-transparent border-b-2 border-dark/10 py-5 focus:border-primary transition-all outline-none text-dark font-semibold text-lg placeholder:text-transparent peer resize-none"
                />
                <label className="absolute left-0 top-5 text-subtext/60 font-medium transition-all peer-focus:-top-2 peer-focus:text-primary peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-primary peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">
                  Message
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-12 py-5 rounded-full text-sm font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/30 hover:bg-primary-dark transition-all"
              >
                Make A Reservation
              </motion.button>
            </form>
          </div>

          {/* Right Side: Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/5"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
              <img 
                src="/assets/reservation_interior.png" 
                alt="Masala House Interior" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
