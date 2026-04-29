import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import whiteLogo from '../assets/white-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Deals', path: '/deals', special: true },
    { name: 'Catering', path: '/catering' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-dark ${isScrolled ? 'shadow-md py-4' : 'py-4'}`}>
      <div className="site-container flex items-center justify-between relative">
        {/* Logo (Left) */}
        <div className="flex-shrink-0 relative z-10">
          <Link to="/" className="flex items-center">
            <img src={whiteLogo} alt="Masala House" className="h-9 md:h-12 w-auto object-contain" />
          </Link>
        </div>
        
        {/* Desktop Nav (Center) */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
          <div className="flex items-center space-x-8 pointer-events-auto">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`relative font-medium transition-colors duration-200 hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-white'} ${link.special ? 'text-primary animate-pulse font-bold' : ''}`}
              >
                {link.name}
                {link.special && (
                  <span className="absolute -top-3 -right-6 bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full animate-bounce shadow-lg shadow-red-500/50">
                    HOT
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Button (Right) */}
        <div className="hidden md:block relative z-10">
          <Link to="/menu" className="btn-primary">Order Online</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white relative z-10" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-dark flex flex-col items-center py-8 space-y-8 transition-all duration-300 origin-top shadow-2xl border-t border-white/5 ${isOpen ? 'scale-y-100 opacity-100 pointer-events-auto' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path}
            className={`relative font-semibold text-xl tracking-tight ${location.pathname === link.path ? 'text-primary' : 'text-white'} ${link.special ? 'text-primary animate-pulse' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
            {link.special && (
              <span className="absolute -top-2 -right-8 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-bounce">
                HOT
              </span>
            )}
          </Link>
        ))}
        <div className="w-full px-6 pt-4">
          <Link to="/menu" className="btn-primary w-full text-center py-4 text-lg">Order Online</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
