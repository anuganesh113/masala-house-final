import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ShoppingBag, 
  HelpCircle,
  Search,
  FileText,
  MapPin,
  ExternalLink,
  X,
  Eye,
  Star
} from 'lucide-react';
import { mockMenu } from './Menu';

const MenuItemDetail = () => {
  const { id } = useParams();
  const item = mockMenu.find(m => m.id === parseInt(id));
  const [activeTab, setActiveTab] = useState('description');
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white pt-20">
        <div className="text-center">
          <h2 className="text-3xl font-black text-dark mb-4">Dish Not Found</h2>
          <Link to="/menu" className="text-primary font-bold flex items-center justify-center gap-2">
            <ChevronLeft size={20} /> Back to Menu
          </Link>
        </div>
      </div>
    );
  }

  // A mock expanded description if it's not present
  const descriptionText = item.longDesc || `${item.name} is a wonderful addition to our menu. Carefully prepared with the finest ingredients and aromatic spices to bring you an authentic culinary experience.`;
  
  // Mock ingredients if not present
  const ingredientsList = item.ingredients || [
    `Authentic ${item.name} preparation`,
    "Signature house spice blend",
    "Fresh, locally sourced ingredients",
    "Traditional cooking methods"
  ];

  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col pt-24 pb-16 px-4 relative font-sans">
      <Link 
        to="/menu"
        className="absolute top-24 left-6 md:left-12 z-20 flex items-center gap-2 text-dark bg-white px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-all shadow-sm font-bold text-sm tracking-widest uppercase"
      >
        <ChevronLeft size={20} /> Back
      </Link>

      <div className="max-w-[1200px] w-full mx-auto bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden mt-10">
        {/* Image Section */}
        <div className="relative w-full p-6 pb-2">
          <div className="w-full h-72 md:h-[450px] relative rounded-2xl overflow-hidden">
            <img 
              src={item.img} 
              alt={item.name} 
              className="w-full h-full object-cover"
            />
            {/* Zoom icon in bottom right */}
            <button 
              onClick={() => setIsZoomed(true)}
              className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm p-3 rounded-full text-white hover:bg-black/80 transition"
            >
              <Search size={20} />
            </button>
          </div>
        </div>

        <div className="p-6 md:p-10 pt-4">
          {/* Title & Description */}
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">{item.name}</h1>
          <p className="text-gray-500 italic mb-6 text-sm md:text-base">{item.desc}</p>

          {/* Price & Diet */}
          <div className="flex justify-between items-center mb-8">
            <span className="text-2xl font-bold text-primary">{item.price}</span>
            <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border ${
              item.diet === 'Veg' ? 'bg-green-100/90 text-green-700 border-green-200/50' : 
              item.diet === 'Non-veg' ? 'bg-red-100/90 text-red-700 border-red-200/50' : 
              item.diet === 'Vegan' ? 'bg-green-800/90 text-white border-green-700/50' : 'bg-gray-100 text-gray-700 border-gray-200/50'
            }`}>
              {item.diet}
            </span>
          </div>

          {/* Action Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100 pb-6 mb-8">
            <div className="flex flex-wrap items-center gap-3">
              <button 
                onClick={() => setActiveTab('description')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition ${
                  activeTab === 'description' 
                    ? 'bg-gray-50 text-dark font-bold border border-gray-200' 
                    : 'text-gray-500 hover:text-dark font-medium'
                }`}
              >
                <FileText size={16} /> Description
              </button>
              
              <span className="text-gray-200 hidden md:block">|</span>
              
              <button 
                onClick={() => setActiveTab('faq')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition ${
                  activeTab === 'faq' 
                    ? 'bg-gray-50 text-dark font-bold border border-gray-200' 
                    : 'text-gray-500 hover:text-dark font-medium'
                }`}
              >
                <HelpCircle size={16} /> FAQ
              </button>
              
              <span className="text-gray-200 hidden md:block">|</span>
              
              <a 
                href="https://order.toasttab.com/online/masala-house-concord-159-concord-ave?utm_source=website&utm_medium=order_button&utm_campaign=direct_order"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-bold rounded-xl text-sm hover:bg-primary-dark transition shadow-md shadow-primary/20"
              >
                <ShoppingBag size={16} /> Order Now
              </a>
            </div>
            
            <a 
              href="https://maps.apple.com/?address=159+Concord+Ave,+Belmont,+MA+02478"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-2.5 bg-[#A7D1A9]/30 text-[#2E7D32] rounded-xl text-sm font-bold border border-[#A7D1A9]/50 hover:bg-[#A7D1A9]/50 transition w-fit md:w-auto"
            >
              <MapPin size={20} />
              <div className="flex flex-col text-left leading-none">
                <span className="text-sm mb-0.5">Location</span>
                <span className="text-[9px] font-bold opacity-80 uppercase tracking-wide">view on map</span>
              </div>
              <ExternalLink size={16} className="ml-2 opacity-70" />
            </a>
          </div>

          {/* Content Area */}
          <div className="bg-[#FFF8F0] p-6 md:p-8 rounded-2xl border border-primary/10">
            {activeTab === 'description' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h3 className="text-primary font-bold mb-4 text-lg">{item.name}</h3>
                <p className="text-dark/90 font-serif italic mb-6 leading-relaxed">
                  {descriptionText}
                </p>
                <ul className="list-disc list-inside space-y-2 text-dark/90 font-serif italic">
                  {ingredientsList.map((ing, i) => <li key={i}>{ing}</li>)}
                </ul>
              </motion.div>
            )}

            {activeTab === 'faq' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h3 className="text-primary font-bold mb-4 text-lg">Frequently Asked Questions</h3>
                {item.faqs && item.faqs.length > 0 ? (
                  <div className="space-y-6">
                    {item.faqs.map((faq, i) => (
                      <div key={i}>
                        <h4 className="font-bold text-dark mb-2 font-serif italic">{faq.q}</h4>
                        <p className="text-dark/80 font-serif italic text-sm">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-dark/80 font-serif italic">No frequently asked questions for this item yet. Please ask our staff if you have any questions.</p>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Similar Items Section */}
      <div className="max-w-[1200px] w-full mx-auto mt-16 mb-10">
        <h2 className="text-2xl font-bold text-dark mb-6 pl-2">Similar Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockMenu
            .filter(m => m.cat === item.cat && m.id !== item.id)
            .slice(0, 3)
            .map(similar => (
                  <motion.div
                    layout
                    key={similar.id}
                    className={`group relative bg-white rounded-[2.5rem] overflow-hidden border transition-all duration-500 flex flex-col hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] ${
                      similar.chefPick ? 'border-primary/20 ring-1 ring-primary/5' : 'border-gray-100'
                    }`}
                  >
                    {/* Chef's Pick Subtle Glow */}
                    {similar.chefPick && (
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    )}

                    {/* Food Photo with Advanced Interaction */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <motion.img 
                        src={similar.img} 
                        alt={similar.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      
                      {/* Interactive Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Dietary Tag - Ultra Glassmorphic */}
                      <div className="absolute top-6 left-6 flex flex-col gap-2">
                        <motion.span 
                          whileHover={{ scale: 1.05 }}
                          className={`backdrop-blur-xl px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] border shadow-sm ${
                            similar.diet === 'Veg' ? 'bg-green-100/90 text-green-700 border-green-200/50' :
                            similar.diet === 'Non-veg' ? 'bg-red-100/90 text-red-700 border-red-200/50' :
                            similar.diet === 'Vegan' ? 'bg-green-800/90 text-white border-green-700/50' :
                            'bg-white/80 text-dark border-gray-200/50'
                          }`}
                        >
                          {similar.diet}
                        </motion.span>
                        {similar.chefPick && (
                          <motion.span 
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="backdrop-blur-xl bg-primary/90 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] text-white border border-white/20 flex items-center gap-1.5 shadow-xl"
                          >
                            <Star size={10} fill="currentColor" /> Chef's Pick
                          </motion.span>
                        )}
                      </div>

                      {/* Price Badge Overlay */}
                      <div className="absolute bottom-6 right-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="bg-white px-4 py-2 rounded-xl shadow-2xl font-black text-primary text-lg border border-gray-100">
                          {similar.price}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col flex-grow relative bg-white transition-colors duration-500 group-hover:bg-[#FFF8F0]/50">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-dark group-hover:text-primary transition-colors leading-tight">
                          {similar.name}
                        </h3>
                      </div>
                      
                      <p className="text-gray-500 text-sm mb-8 line-clamp-2 font-medium leading-relaxed">
                        {similar.desc}
                      </p>

                      {/* Dual Action Buttons - Elevated Reveal */}
                      <div className="flex gap-3 mt-auto">
                        <a
                          href="https://order.toasttab.com/online/masala-house-concord-159-concord-ave?utm_source=website&utm_medium=order_button&utm_campaign=direct_order"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative flex-[2] bg-primary text-white py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 overflow-hidden group/btn hover:shadow-2xl hover:shadow-primary/30 transition-all border border-primary"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            <ShoppingBag size={14} strokeWidth={3} /> Order Now
                          </span>
                          <motion.div 
                            className="absolute inset-0 bg-[#D35400] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"
                          />
                        </a>
                        <Link 
                          to={`/menu/${similar.id}`}
                          className="flex-1 bg-white text-primary border border-primary py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all shadow-sm"
                        >
                          <Eye size={16} strokeWidth={3} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
            ))}
        </div>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-zoom-out"
          >
            <button 
              onClick={() => setIsZoomed(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={item.img} 
              alt={item.name} 
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuItemDetail;
