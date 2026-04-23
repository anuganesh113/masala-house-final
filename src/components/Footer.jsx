import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Globe } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYelp, FaGoogle } from 'react-icons/fa';
import whiteLogo from '../assets/white-logo.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="site-container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 mb-8 border-b border-gray-800">
          
          {/* Logo + Tagline */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img src={whiteLogo} alt="Masala House" className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-subtext leading-relaxed">
              Authentic Indian cuisine bringing you the vibrant flavors of the streets and royal kitchens of India.
            </p>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-bold uppercase tracking-wider">Hours</h3>
            <ul className="space-y-3 text-subtext">
              <li className="flex justify-between items-center">
                <span>Breakfast</span>
                <span className="text-white font-medium">8 AM – 11 AM</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Buffet</span>
                <span className="text-white font-medium">11 AM – 2:30 PM</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Happy Hour</span>
                <span className="text-white font-medium">3 PM – 5 PM</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Dinner</span>
                <span className="text-white font-medium">5 PM – 10 PM</span>
              </li>
            </ul>
          </div>

          {/* Address + Phone */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-bold uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-subtext group">
                <MapPin size={20} className="mr-3 text-primary shrink-0 mt-1" />
                <a 
                  href="https://maps.google.com/?q=2118+Willow+Pass+Rd,+Concord,+CA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  2118 Willow Pass Rd,<br />Concord, CA
                </a>
              </li>
              <li className="flex items-center text-subtext group gap-3">
                <a href="tel:+19254903344" className="flex items-center gap-3 hover:text-white transition-colors duration-200">
                  <Phone size={20} className="text-primary shrink-0" />
                  <span>(925) 490-3344</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Catering + Socials */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-bold uppercase tracking-wider">Catering</h3>
            <p className="text-subtext">
              Contact Sakshi for your next event:
            </p>
            <a href="tel:+12068225058" className="font-bold text-white flex items-center hover:text-primary transition-colors duration-200">
              <Phone size={18} className="mr-2 text-primary" />
              Sakshi: (206) 822-5058
            </a>
            
            <div className="pt-4 flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-subtext hover:text-white hover:border-primary transition-all duration-300">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-subtext hover:text-white hover:border-primary transition-all duration-300">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-subtext hover:text-white hover:border-primary transition-all duration-300">
                <FaYelp size={18} />
              </a>
              <a href="https://maps.google.com/?q=2118+Willow+Pass+Rd,+Concord,+CA" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-subtext hover:text-white hover:border-primary transition-all duration-300">
                <FaGoogle size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright + Address Summary */}
        <div className="flex flex-col md:flex-row justify-between items-center text-subtext text-xs border-t border-gray-800/50 pt-8 mt-8">
          <p className="text-center md:text-left">
            © 2026 Masala House Concord · 2118 Willow Pass Rd, Concord, CA
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/blogs" className="hover:text-white transition-colors duration-200">Blogs</Link>
            <Link to="#" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
