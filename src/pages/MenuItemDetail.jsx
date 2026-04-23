import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ShoppingBag, 
  Flame, 
  Info, 
  ArrowRight, 
  Plus, 
  Minus,
  Sparkles,
  Eye,
  Star,
  CheckCircle2,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { mockMenu } from './Menu';

const MenuItemDetail = () => {
  const { id } = useParams();
  const item = mockMenu.find(m => m.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [activeFaq, setActiveFaq] = useState(null);

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

  const spiceLabels = ['Not Spicy', 'Mild', 'Medium', 'Hot', 'Extra Hot', 'Volcanic'];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-[50vh] md:h-[70vh] overflow-hidden bg-dark">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src={item.img} 
            alt={item.name} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30"></div>
        </motion.div>

        {/* Back Button */}
        <Link 
          to="/menu"
          className="absolute top-24 left-6 md:left-12 z-20 flex items-center gap-2 text-white bg-black/20 backdrop-blur-md px-4 py-2 rounded-full hover:bg-primary transition-all group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold text-sm tracking-widest uppercase">Back to Menu</span>
        </Link>
      </section>

      {/* 2. DYNAMIC CONTENT AREA */}
      <div className="site-container px-4 relative z-10 -mt-24 md:-mt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Main Info (Left) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-gray-100">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest">
                  {item.cat}
                </span>
                <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                  item.diet === 'Veg' ? 'bg-green-100 text-green-600' : 
                  item.diet === 'Non-veg' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'
                }`}>
                  {item.diet}
                </span>
                {item.chefPick && (
                  <span className="flex items-center gap-1 text-primary text-[10px] font-bold">
                    <Sparkles size={14} /> Chef's Best
                  </span>
                )}
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-dark mb-6 tracking-tighter">
                {item.name}
              </h1>

              <p className="text-gray-500 text-xl leading-relaxed mb-12 font-light">
                {item.longDesc || item.desc}
              </p>

              {/* Flavor Profile / Spice Level */}
              <div className="bg-gray-50 p-8 rounded-3xl mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-black text-dark uppercase tracking-widest text-sm flex items-center gap-2">
                    <Flame size={18} className="text-primary" /> Spice Level
                  </h3>
                  <span className="text-primary font-bold text-sm">
                    {spiceLabels[item.spiceLevel || 0]}
                  </span>
                </div>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div 
                      key={i}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className={`h-2 flex-grow rounded-full origin-left ${
                        i < (item.spiceLevel || 0) ? 'bg-primary' : 'bg-gray-200'
                      }`}
                    ></motion.div>
                  ))}
                </div>
              </div>

              {/* Ingredients */}
              {item.ingredients && (
                <div className="mb-12">
                  <h3 className="font-black text-dark uppercase tracking-widest text-sm mb-6">Key Ingredients</h3>
                  <div className="flex flex-wrap gap-3">
                    {item.ingredients.map((ing, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-600 text-sm bg-white border border-gray-200 px-4 py-2 rounded-xl">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                        {ing}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ Section */}
              {item.faqs && (
                <div>
                  <h3 className="font-black text-dark uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
                    <HelpCircle size={18} className="text-primary" /> Frequently Asked
                  </h3>
                  <div className="space-y-4">
                    {item.faqs.map((faq, idx) => (
                      <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden">
                        <button 
                          onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                          className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-bold text-dark">{faq.q}</span>
                          <ChevronDown className={`transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {activeFaq === idx && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="p-5 pt-0 text-gray-500 text-sm leading-relaxed border-t border-gray-100">
                                {faq.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Checkout Card (Right) */}
          <div className="lg:col-span-5 sticky top-32">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-dark p-8 md:p-12 rounded-[2rem] text-white shadow-[0_40px_80px_-20px_rgba(255,107,0,0.3)]"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Current Price</p>
                  <p className="text-4xl font-black text-primary">{item.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Category</p>
                  <p className="text-white font-bold">{item.cat}</p>
                </div>
              </div>

              {/* Nutritional Snapshot */}
              {item.nutrition && (
                <div className="grid grid-cols-4 gap-4 p-6 bg-white/5 rounded-2xl mb-8 border border-white/10">
                  <div className="text-center">
                    <p className="text-primary text-xs font-bold">{item.nutrition.cal}</p>
                    <p className="text-[8px] text-gray-400 uppercase font-black">kcal</p>
                  </div>
                  <div className="text-center border-l border-white/10">
                    <p className="text-white text-xs font-bold">{item.nutrition.protein}</p>
                    <p className="text-[8px] text-gray-400 uppercase font-black">protein</p>
                  </div>
                  <div className="text-center border-l border-white/10">
                    <p className="text-white text-xs font-bold">{item.nutrition.carbs}</p>
                    <p className="text-[8px] text-gray-400 uppercase font-black">carbs</p>
                  </div>
                  <div className="text-center border-l border-white/10">
                    <p className="text-white text-xs font-bold">{item.nutrition.fat}</p>
                    <p className="text-[8px] text-gray-400 uppercase font-black">fat</p>
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="flex items-center justify-between mb-10">
                <p className="font-bold text-sm tracking-widest uppercase text-white">Select Quantity</p>
                <div className="flex items-center gap-6 bg-white/10 px-4 py-2 rounded-xl">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:text-primary transition-colors">
                    <Minus size={18} />
                  </button>
                  <span className="font-black text-xl w-6 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="hover:text-primary transition-colors">
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              {/* Primary Call to Action */}
              <a 
                href="https://order.toasttab.com/online/masala-house-concord-159-concord-ave?utm_source=website&utm_medium=order_button&utm_campaign=direct_order"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-primary py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-primary transition-all mb-6 group"
              >
                <ShoppingBag size={20} />
                Order Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-2 justify-center text-[10px] text-gray-400 uppercase font-bold tracking-widest opacity-60">
                <CheckCircle2 size={12} className="text-green-500" /> Secure Checkout via ToastTab
              </div>
            </motion.div>

            {/* Related/Info Badge */}
            <div className="mt-8 p-6 border-2 border-dashed border-gray-200 rounded-[2rem] flex items-center gap-4 group cursor-help">
              <div className="bg-primary/10 text-primary p-3 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all">
                <Info size={24} />
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                <span className="block font-black text-dark uppercase mb-1">Chef's Note:</span>
                We recommend pairing this with our Garlic Naan for the optimal texture profile.
              </p>
            </div>
          </div>

        </div>

        {/* 3. SIMILAR ITEMS SECTION */}
        <section className="pt-24 border-t border-gray-100">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-2 block">Take Another Journey</span>
              <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tighter">Discover Similar Flavors</h2>
            </div>
            <Link to="/menu" className="hidden md:flex items-center gap-2 text-dark font-bold hover:text-primary transition-colors group">
              Full Menu <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockMenu
              .filter(m => m.cat === item.cat && m.id !== item.id)
              .slice(0, 3)
              .map((similarItem) => (
                <motion.div 
                  key={similarItem.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)]"
                >
                  {/* Image Section */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={similarItem.img} 
                      alt={similarItem.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    
                    {/* Dietary Tag */}
                    <div className="absolute top-6 left-6">
                      <span className="backdrop-blur-xl bg-white/80 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] text-dark border border-white/40 shadow-sm">
                        {similarItem.diet}
                      </span>
                    </div>

                    {/* Price Badge */}
                    <div className="absolute bottom-6 right-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-white px-4 py-2 rounded-xl shadow-2xl font-black text-primary text-lg border border-gray-100">
                        {similarItem.price}
                      </div>
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-dark group-hover:text-primary transition-colors mb-2">
                      {similarItem.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-8 line-clamp-2 leading-relaxed">
                      {similarItem.desc}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      <a 
                        href="https://order.toasttab.com/online/masala-house-concord-159-concord-ave?utm_source=website&utm_medium=order_button&utm_campaign=direct_order"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex-[2] bg-primary text-white py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 overflow-hidden group/btn transition-all"
                      >
                        <ShoppingBag size={14} strokeWidth={3} />
                        <span className="relative z-10">Order</span>
                      </a>
                      <Link 
                        to={`/menu/${similarItem.id}`}
                        className="flex-1 bg-white text-dark border border-gray-200 py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-dark hover:text-white hover:border-dark transition-all"
                      >
                        <Eye size={16} strokeWidth={3} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MenuItemDetail;
