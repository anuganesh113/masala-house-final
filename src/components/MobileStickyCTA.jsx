import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const MobileStickyCTA = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-40 p-4 bg-white/80 backdrop-blur-md border-t border-borderCustom">
      <Link 
        to="/menu" 
        className="flex items-center justify-center space-x-2 bg-primary text-white py-4 rounded-btn font-bold shadow-lg active:scale-95 transition-transform"
      >
        <ShoppingBag size={20} />
        <span>Order Online</span>
      </Link>
    </div>
  );
};

export default MobileStickyCTA;
