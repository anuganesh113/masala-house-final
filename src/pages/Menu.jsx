import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ShoppingBag, Eye, Utensils, Star, Leaf, Flame, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export const mockMenu = [
  // STREET FOODS
  { 
    id: 1, 
    name: 'Samosa Chaat', 
    desc: 'Tangy, spicy, and satisfying. Crushed samosas topped with yogurt, mint, and tamarind chutney.', 
    longDesc: 'A masterpiece of textures and flavors. We take our handmade vegetable samosas, crush them gently, and layer them with spiced chickpeas, whipped yogurt, and our secret blend of mint and tamarind chutneys. Finished with a sprinkle of sev and fresh pomegranate for that signature street-side crunch.',
    price: '$9.50', 
    cat: 'Street Foods', 
    diet: 'Veg', 
    img: '/images/menu/masala-house-files-3l30l0d77uk.jpg',
    chefPick: true,
    spiceLevel: 2,
    nutrition: { cal: 320, protein: '8g', carbs: '42g', fat: '14g' },
    ingredients: ['Potatoes', 'Chickpeas', 'Yogurt', 'Tamarind', 'Mint', 'Handmade Pastry'],
    faqs: [
      { q: 'Is it spicy?', a: 'It has a mild to medium kick from the chutneys, but the yogurt balances it perfectly.' },
      { q: 'Can it be made Vegan?', a: 'Yes, we can omit the yogurt and use a coconut-based alternative or extra tamarind sauce.' }
    ]
  },
  { 
    id: 2, 
    name: 'Pani Puri', 
    desc: 'Crispy hollow puris filled with spiced potatoes and tangy flavored water.', 
    longDesc: 'The ultimate interactive street food experience. Six crispy, air-light puris served with a traditional filling of spiced potatoes and black chickpeas. We provide two types of "Pani" (water)—one tangy mint-cilantro and one sweet tamarind—allowing you to customize every bite.',
    price: '$8.50', 
    cat: 'Street Foods', 
    diet: 'Vegan', 
    img: '/images/menu/masala-house-files-4h19ofb9tku.jpg',
    spiceLevel: 3,
    nutrition: { cal: 180, protein: '4g', carbs: '32g', fat: '2g' },
    ingredients: ['Semolina Puris', 'Potatoes', 'Black Chickpeas', 'Mint Water', 'Tamarind'],
    faqs: [
      { q: 'How do I eat this?', a: 'Tap a small hole in the puri, fill it with a little potato mix, dip it fully into the flavored water, and eat it in one go!' }
    ]
  },
  
  // APPETIZERS
  { 
    id: 3, 
    name: 'Chicken Tikka', 
    desc: 'Succulent boneless chicken marinated in yogurt and rare spices, clay-oven roasted.', 
    longDesc: 'Our Chicken Tikka is marinated for 24 hours in a signature blend of hung curd, Kashmiri red chili, and ginger-garlic paste. Char-grilled in our traditional clay tandoor at over 500 degrees, resulting in a smoky exterior and an incredibly tender, juicy heart.',
    price: '$13.99', 
    cat: 'Appetizers', 
    diet: 'Non-veg',
    img: '/images/menu/masala-house-files-5d7lm3cxien.jpg',
    spiceLevel: 3,
    nutrition: { cal: 280, protein: '34g', carbs: '4g', fat: '12g' },
    ingredients: ['Boneless Chicken', 'Yogurt', 'Lemon', 'Kashmiri Chili', 'Garam Masala'],
    faqs: [
      { q: 'Is it dry?', a: 'Not at all. The 24-hour yogurt marinade ensures the chicken remains succulent even after high-heat roasting.' }
    ]
  },

  // ENTREES
  { 
    id: 5, 
    name: 'Butter Chicken', 
    desc: 'Our signature dish. Tender chicken in a rich, velvety tomato and butter sauce.', 
    longDesc: 'The "Legend of Masala House." We slow-cook tandoori-roasted chicken pieces in a silky, gold-standard makhani sauce made from vine-ripened tomatoes, fresh cream, and clarified butter. Finished with a touch of dried fenugreek leaves (Kasuri Methi) for an aromatic finish that lingers.',
    price: '$18.50', 
    cat: 'Entrees', 
    diet: 'Non-veg', 
    chefPick: true,
    img: '/images/menu/masala-house-files-9mnyxw4h2u9.jpg',
    spiceLevel: 1,
    nutrition: { cal: 450, protein: '28g', carbs: '12g', fat: '32g' },
    ingredients: ['Tandoori Chicken', 'Tomato Puree', 'Heavy Cream', 'Butter', 'Fenugreek'],
    faqs: [
      { q: 'What goes best with this?', a: 'Butter Chicken is best paired with our Garlic Naan or a side of Basmati Rice to soak up the rich gravy.' }
    ]
  },

  // OTHER ITEMS
  { id: 4, name: 'Vegetable Pakoras', desc: 'Crispy assorted vegetable fritters coated in gram flour batter.', price: '$8.99', cat: 'Appetizers', diet: 'Vegan', img: '/images/menu/masala-house-files-ccoi25jtgzi.jpg', spiceLevel: 2 },
  { id: 6, name: 'Palak Paneer', desc: 'Fresh cottage cheese cubes simmered in a vibrant, spiced spinach puree.', price: '$16.99', cat: 'Entrees', diet: 'Veg', img: '/images/menu/masala-house-files-dc0qjvxz7ct.jpg', spiceLevel: 2 },
  { id: 7, name: 'Lamb Rogan Josh', desc: 'Tender lamb slow-cooked in a classic kashmiri style with aromatic spices.', price: '$19.99', cat: 'Entrees', diet: 'Non-veg', img: '/images/menu/masala-house-files-jeosrdd3vij.jpg', spiceLevel: 4 },
  { id: 8, name: 'Garlic Naan', desc: 'Traditional clay-oven bread infused with fresh garlic and cilantro.', price: '$4.50', cat: 'Breads', diet: 'Veg', img: '/images/menu/masala-house-files-ogyi8njy4m8.jpg', spiceLevel: 0 },
  { id: 9, name: 'Basmati Rice', desc: 'Fragrant, long-grain basmati rice cooked to perfection.', price: '$4.99', cat: 'Breads', diet: 'Vegan', img: '/images/menu/masala-house-files-p9vrmbvl1ax.jpg', spiceLevel: 0 },
  { id: 10, name: 'Mango Lassi', desc: 'Creamy yogurt drink blended with sweet Alphonso mangoes.', price: '$5.50', cat: 'Drinks', diet: 'Veg', img: '/images/menu/masala-house-files-pfwjstwxvq6.jpg', spiceLevel: 0 },
  { id: 11, name: 'Gulab Jamun', desc: 'Warm milk dumplings in a saffron-infused cardamom syrup.', price: '$6.50', cat: 'Desserts', diet: 'Veg', img: '/images/menu/masala-house-files-pxng70adbmn.jpg', spiceLevel: 0 },
  { id: 12, name: 'Tandoori Chicken', desc: 'Bone-in chicken marinated in yogurt and spices, roasted in clay oven.', price: '$15.99', cat: 'Entrees', diet: 'Non-veg', img: '/images/menu/masala-house-files-u3tdygcxkcr.jpg', spiceLevel: 2 },
  { id: 13, name: 'Chana Masala', desc: 'Hearty chickpeas slow-cooked in a tangy tomato and onion gravy.', price: '$14.99', cat: 'Entrees', diet: 'Vegan', img: '/images/menu/masala-house-files-vojkg9quksp.jpg', spiceLevel: 3 },
  { id: 14, name: 'Mutton Biryani', desc: 'Aromatic basmati rice cooked with tender mutton and whole spices.', price: '$21.99', cat: 'Entrees', diet: 'Non-veg', img: '/images/menu/masala-house-files-wbiqmbpcsb1.jpg', spiceLevel: 3 },
  { id: 15, name: 'Aloo Tikki Chaat', desc: 'Spiced potato patties topped with yogurt, chutneys, and sev.', price: '$8.99', cat: 'Street Foods', diet: 'Veg', img: '/images/menu/masala-house-files-3l30l0d77uk.jpg', spiceLevel: 2 },
  { id: 16, name: 'Dahi Puri', desc: 'Crispy puris stuffed with potatoes and drowned in sweetened yogurt.', price: '$7.99', cat: 'Street Foods', diet: 'Veg', img: '/images/menu/masala-house-files-4h19ofb9tku.jpg', spiceLevel: 1 },
  { id: 17, name: 'Bhel Puri', desc: 'A savory snack made of puffed rice, vegetables, and a tangy tamarind sauce.', price: '$6.99', cat: 'Street Foods', diet: 'Vegan', img: '/images/menu/masala-house-files-5d7lm3cxien.jpg', spiceLevel: 2 },
  { id: 18, name: 'Paneer Tikka', desc: 'Cubes of paneer marinated in spices and grilled in a tandoor.', price: '$12.99', cat: 'Appetizers', diet: 'Veg', img: '/images/menu/masala-house-files-9mnyxw4h2u9.jpg', spiceLevel: 2 },
  { id: 19, name: 'Keema Samosa', desc: 'Crispy pastry filled with spiced minced lamb and peas.', price: '$9.99', cat: 'Appetizers', diet: 'Non-veg', img: '/images/menu/masala-house-files-ccoi25jtgzi.jpg', spiceLevel: 3 },
  { id: 20, name: 'Chicken Korma', desc: 'Tender chicken cooked in a rich, creamy sauce made of nuts and yogurt.', price: '$17.50', cat: 'Entrees', diet: 'Non-veg', img: '/images/menu/masala-house-files-dc0qjvxz7ct.jpg', spiceLevel: 1 },
  { id: 21, name: 'Paneer Butter Masala', desc: 'Soft paneer cubes cooked in a rich, creamy tomato gravy.', price: '$16.50', cat: 'Entrees', diet: 'Veg', img: '/images/menu/masala-house-files-jeosrdd3vij.jpg', spiceLevel: 2 },
  { id: 22, name: 'Dal Makhani', desc: 'Slow-cooked black lentils in a creamy and buttery gravy.', price: '$14.99', cat: 'Entrees', diet: 'Veg', img: '/images/menu/masala-house-files-ogyi8njy4m8.jpg', spiceLevel: 1 },
  { id: 23, name: 'Malai Kofta', desc: 'Deep-fried potato and paneer balls in a rich and creamy cashew curry.', price: '$16.99', cat: 'Entrees', diet: 'Veg', img: '/images/menu/masala-house-files-p9vrmbvl1ax.jpg', spiceLevel: 1 },
  { id: 24, name: 'Lamb Vindaloo', desc: 'A fiery, tangy curry made with tender pieces of lamb and potatoes.', price: '$20.99', cat: 'Entrees', diet: 'Non-veg', img: '/images/menu/masala-house-files-pfwjstwxvq6.jpg', spiceLevel: 5 },
  { id: 25, name: 'Shrimp Curry', desc: 'Succulent shrimp simmered in a coconut milk base with coastal spices.', price: '$22.99', cat: 'Entrees', diet: 'Non-veg', img: '/images/menu/masala-house-files-pxng70adbmn.jpg', spiceLevel: 3 },
  { id: 26, name: 'Saag Chicken', desc: 'Chicken cooked with a nutritious and flavorful blend of pureed spinach.', price: '$17.99', cat: 'Entrees', diet: 'Non-veg', img: '/images/menu/masala-house-files-u3tdygcxkcr.jpg', spiceLevel: 2 },
  { id: 27, name: 'Baingan Bharta', desc: 'Smoky, roasted eggplant mashed and cooked with onions, tomatoes, and spices.', price: '$15.99', cat: 'Entrees', diet: 'Vegan', img: '/images/menu/masala-house-files-vojkg9quksp.jpg', spiceLevel: 2 },
  { id: 28, name: 'Chicken Tikka Masala', desc: 'Roasted chicken chunks served in a rich red, creamy, lightly spiced sauce.', price: '$18.99', cat: 'Entrees', diet: 'Non-veg', img: '/images/menu/masala-house-files-wbiqmbpcsb1.jpg', spiceLevel: 2 },
  { id: 29, name: 'Onion Kulcha', desc: 'Leavened bread stuffed with spiced onions and baked in the tandoor.', price: '$4.99', cat: 'Breads', diet: 'Veg', img: '/images/menu/masala-house-files-3l30l0d77uk.jpg', spiceLevel: 0 },
  { id: 30, name: 'Tandoori Roti', desc: 'Whole wheat flatbread baked in a traditional clay oven.', price: '$3.50', cat: 'Breads', diet: 'Vegan', img: '/images/menu/masala-house-files-4h19ofb9tku.jpg', spiceLevel: 0 },
  { id: 31, name: 'Chicken Biryani', desc: 'Fragrant basmati rice layered with marinated chicken, saffron, and spices.', price: '$18.99', cat: 'Entrees', diet: 'Non-veg', img: '/images/menu/masala-house-files-5d7lm3cxien.jpg', spiceLevel: 3 },
  { id: 32, name: 'Vegetable Biryani', desc: 'Aromatic rice dish cooked with mixed vegetables and traditional spices.', price: '$15.99', cat: 'Entrees', diet: 'Veg', img: '/images/menu/masala-house-files-9mnyxw4h2u9.jpg', spiceLevel: 2 },
  { id: 33, name: 'Rasmalai', desc: 'Soft cottage cheese patties soaked in sweetened, thickened milk with cardamom.', price: '$6.99', cat: 'Desserts', diet: 'Veg', img: '/images/menu/masala-house-files-ccoi25jtgzi.jpg', spiceLevel: 0 },
  { id: 34, name: 'Sweet Lassi', desc: 'A refreshing and traditional yogurt-based drink sweetened with sugar.', price: '$4.99', cat: 'Drinks', diet: 'Veg', img: '/images/menu/masala-house-files-dc0qjvxz7ct.jpg', spiceLevel: 0 }
];

const Menu = () => {
  const [activeCat, setActiveCat] = useState('All');
  const [dietFilter, setDietFilter] = useState('All');
  
  // Parallax & Interactive Values
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const heroScale = useTransform(scrollY, [0, 800], [1, 1.15]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Mouse Follow Spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    mouseX.set(x * 100);
    mouseY.set(y * 100);
  };

  const categories = ['All', 'Street Foods', 'Appetizers', 'Entrees', 'Breads', 'Desserts', 'Drinks'];
  const diets = ['All', 'Veg', 'Non-veg', 'Vegan'];

  const filteredMenu = mockMenu.filter(item => {
    return (activeCat === 'All' || item.cat === activeCat) && (dietFilter === 'All' || item.diet === dietFilter);
  });

  return (
    <div className="w-full bg-white relative">
      <SEO 
        title="Our Menu"
        description="Explore the rich culinary heritage of India at Masala House Concord. From authentic street foods to Tandoori specialties and classic curries."
        url="/menu"
      />
      {/* Subtle Grain Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] preserve-3d">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* 1. CINEMATIC NARRATIVE HERO */}
      <section className="relative h-[65vh] min-h-[550px] flex items-center justify-center overflow-hidden bg-dark">
        {/* Animated Background Image */}
        <motion.div 
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{ backgroundImage: 'url("/images/menu/masala-house-files-9mnyxw4h2u9.jpg")' }}
        />
        
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/95 via-dark/60 to-dark/95"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark/40 via-transparent to-dark/40"></div>
        
        <div className="relative z-10 site-container text-center pt-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold mb-8 max-w-5xl mx-auto leading-[1.05] tracking-tight drop-shadow-2xl">
               A Legacy of <br className="hidden md:block"/> Pure Flavor
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-gray-200 text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto font-light tracking-wide drop-shadow leading-relaxed"
          >
            Preserving the soul of Indian kitchens through <br className="hidden md:block" />
            century-old techniques and modern artistry.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <a 
              href="https://order.toasttab.com/online/masala-house-concord-159-concord-ave"
              target="_blank"
              rel="noopener noreferrer" 
              className="btn-primary text-xl px-12 py-5 tracking-widest uppercase hover:scale-105 transition-all shadow-xl shadow-primary/20 border border-primary/50 flex items-center gap-3"
            >
              <ShoppingBag size={20} strokeWidth={2.5} /> ORDER ONLINE
            </a>
            
            <a href="tel:+19254903344" className="inline-flex items-center text-white/80 hover:text-white transition-colors group">
              <Phone size={18} className="mr-3 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-light tracking-widest text-lg drop-shadow group-hover:text-primary transition-colors">
                CALL TO ORDER: (925) 490-3344
              </span>
            </a>
          </motion.div>
        </div>

        {/* Cinematic Scroll Indicator (Subtle) */}
        <motion.div 
          animate={{ y: [0, 8, 0], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-10 bg-gradient-to-b from-primary to-transparent"></div>
        </motion.div>
      </section>

      {/* 2. BUFFET BANNER (WARM) */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-[#FFF8F0] border-b border-orange-100"
      >
        <div className="site-container px-4 py-3 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center">
          <div className="flex items-center gap-2 text-primary font-bold">
            <Utensils size={18} />
            <span className="text-sm md:text-base">Daily Lunch Buffet</span>
          </div>
          <div className="hidden md:block w-1 h-1 rounded-full bg-orange-200"></div>
          <p className="text-subtext text-sm md:text-base font-medium">
            Many of these dishes appear in our daily buffet — <span className="text-dark font-bold">$18.99/person</span>, 11AM–2:30PM
          </p>
          <Link 
            to="/#buffet" 
            className="text-primary font-bold text-sm underline underline-offset-4 hover:text-primary-dark transition-colors"
          >
            Learn More
          </Link>
        </div>
      </motion.div>

      {/* 3. STICKY NAVIGATION BAR (OVERHAULED) */}
      <div className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-xl border-b border-borderCustom">
        <div className="site-container px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Horizontal Categories with Sliding Indicator */}
            <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-2 md:pb-0 relative">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={`relative px-6 py-2.5 rounded-full whitespace-nowrap text-sm font-bold transition-colors z-10 ${
                    activeCat === cat ? 'text-white' : 'text-subtext hover:text-dark'
                  }`}
                >
                  {activeCat === cat && (
                    <motion.div
                      layoutId="cat-indicator"
                      className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/20"
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-20">{cat}</span>
                </button>
              ))}
            </div>

            {/* Diet Filters */}
            <div className="flex items-center space-x-1 bg-altBg/80 p-1 rounded-full border border-borderCustom shadow-inner">
              {diets.map(diet => (
                <button
                  key={diet}
                  onClick={() => setDietFilter(diet)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    dietFilter === diet 
                    ? 'text-primary' 
                    : 'text-subtext hover:text-dark'
                  }`}
                >
                  {dietFilter === diet && (
                    <motion.div
                      layoutId="diet-indicator"
                      className="absolute inset-0 bg-white rounded-full shadow-sm"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1">
                    {diet === 'Veg' && <Leaf size={12} />}
                    {diet === 'Vegan' && <Leaf size={12} className="text-emerald-500" />}
                    {diet}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. MENU GRID with Floating Decorations */}
      <section className="section-padding bg-altBg/30 min-h-[600px] relative overflow-hidden">
        {/* Floating Decorative Icons (Depth Layers) */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-[5%] opacity-[0.03] text-dark"
          >
            <Utensils size={150} />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-40 right-[10%] opacity-[0.03] text-primary"
          >
            <Flame size={200} />
          </motion.div>
          <motion.div 
            animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-[40%] opacity-[0.02] text-dark"
          >
            <Star size={100} />
          </motion.div>
        </div>

        <div className="site-container px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <AnimatePresence mode="popLayout">
              {filteredMenu.length > 0 ? (
                filteredMenu.map((item, idx) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                    transition={{ 
                      duration: 0.6, 
                      delay: idx * 0.05,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className={`group relative bg-white rounded-[2.5rem] overflow-hidden border transition-all duration-500 flex flex-col hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] ${
                      item.chefPick ? 'border-primary/20 ring-1 ring-primary/5' : 'border-borderCustom'
                    }`}
                  >
                    {/* Chef's Pick Subtle Glow */}
                    {item.chefPick && (
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    )}

                    {/* Food Photo with Advanced Interaction */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <motion.img 
                        src={item.img} 
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      
                      {/* Interactive Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Dietary Tag - Ultra Glassmorphic */}
                      <div className="absolute top-6 left-6 flex flex-col gap-2">
                        <motion.span 
                          whileHover={{ scale: 1.05 }}
                          className={`backdrop-blur-xl px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] border shadow-md ${
                            item.diet === 'Veg' ? 'bg-[#1a9d4afc] text-white border-green-400/30' :
                            item.diet === 'Non-veg' ? 'bg-red-600 text-white border-red-500/30' :
                            item.diet === 'Vegan' ? 'bg-emerald-700 text-white border-emerald-600/30' :
                            'bg-white/80 text-dark border-white/40'
                          }`}
                        >
                          {item.diet}
                        </motion.span>
                      </div>

                      {/* Price Badge Overlay */}
                      <div className="absolute bottom-6 right-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="bg-white px-4 py-2 rounded-xl shadow-2xl font-black text-primary text-lg border border-borderCustom">
                          {item.price}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col flex-grow relative bg-white transition-colors duration-500 group-hover:bg-altBg/20">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-dark group-hover:text-primary transition-colors leading-tight">
                          {item.name}
                        </h3>
                      </div>
                      
                      <p className="text-subtext text-sm mb-8 line-clamp-2 font-medium leading-relaxed">
                        {item.desc}
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
                            className="absolute inset-0 bg-primary-dark translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"
                          />
                        </a>
                        <Link 
                          to={`/menu/${item.id}`}
                          className="flex-1 bg-white text-primary border border-primary py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all shadow-sm"
                        >
                          <Eye size={16} strokeWidth={3} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <div className="w-24 h-24 bg-white shadow-xl rounded-[2rem] flex items-center justify-center mx-auto mb-8 text-primary border border-borderCustom">
                    <Utensils size={40  } />
                  </div>
                  <h3 className="text-3xl font-bold text-dark mb-3 tracking-tight">No signature dishes found</h3>
                  <p className="text-subtext mb-10 max-w-md mx-auto leading-relaxed">Try exploring another category to discover our hidden gems and house favorites.</p>
                  <button 
                    onClick={() => { setActiveCat('All'); setDietFilter('All'); }}
                    className="text-primary font-black uppercase tracking-widest text-xs border-b-2 border-primary pb-1 hover:text-primary-dark transition-colors"
                  >
                    Reset all filters
                  </button>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. CATERING PROMO (Ultra-Premium Style) */}
      <section className="section-padding bg-dark text-white text-center overflow-hidden relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 opacity-20 group">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1600&auto=format&fit=crop" 
            alt="Catering Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-dark"></div>
        </div>

        <div className="site-container relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-6 block">Beyond the Restaurant</span>
            <h2 className="text-white text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
              Bring the <span className="text-primary">Masala House</span> <br />
              Experience to Your Event
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              From intimate family gatherings to grand corporate galas, we deliver excellence on every plate. Custom menus, impeccible service, and unforgettable flavors.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/catering" 
                className="group relative inline-block bg-primary text-white px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm overflow-hidden transition-all hover:shadow-[0_20px_40px_-10px_rgba(255,107,0,0.4)]"
              >
                <span className="relative z-10">Explore Catering</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
              <Link 
                to="/contact" 
                className="px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm border-2 border-white/20 hover:border-primary hover:text-primary transition-all"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
