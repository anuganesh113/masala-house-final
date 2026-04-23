import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock, ChevronRight, X, BookOpen, Utensils,
  Flame, Leaf, Star, Calendar, User, ArrowLeft, Share2
} from 'lucide-react';
import SEO from '../components/SEO';

// ─── BLOG DATA ────────────────────────────────────────────────────────────────
const categories = ['All', 'Culture & Story', 'Recipes', 'Events', 'Tips & Guides'];

const blogs = [
  {
    id: 1,
    title: 'The Magic of Masala: Why Every Spice Tells a Story',
    excerpt:
      'From the smoky warmth of cumin to the floral depth of cardamom, Indian spices are far more than flavoring — they are a living history of trade, culture, and family tradition.',
    category: 'Culture & Story',
    author: 'Neetu Sethi',
    date: 'April 10, 2026',
    readTime: '5 min read',
    image: '/images/hero_bg.webp',
    featured: true,
    color: '#E07B39',
    content: `
Indian cuisine is perhaps the world's finest example of how spices can transform the simplest ingredients into something transcendent. At Masala House Concord, spices aren't just pantry items — they are the soul of every dish we serve.

## The Spice Route Legacy

Long before Concord, CA, before even the English word "spice" existed, Indian spices were reshaping civilizations. Turmeric was traded across the Silk Road; cardamom fueled the empires of the East. In our kitchen today, we honor that legacy with every pinch of garam masala we blend from scratch.

## What Makes Indian Spice Blending an Art

The secret is "tempering" — bhaghar or chaunk in Hindi. This technique of blooming whole spices in hot oil releases volatile oils that form the flavor foundation of a dish. The order and timing are everything:

- **Mustard seeds** go in first — they need the most heat to pop and become nutty.
- **Cumin seeds** follow, releasing their warm, earthy signature in seconds.
- **Bay leaves, cloves, and cardamom** add a woody, aromatic depth.
- **Fresh ginger and garlic** come last, softening into a golden paste.

## Our House Masala

Yashpal and Neetu Sethi, Masala House's culinary architects, spent over a year perfecting their proprietary spice blend. It's a closely guarded recipe that balances heat with warmth, brightness with depth. The result is the unmistakable Masala House flavor you'll recognize in every dish.

## Visit Us

Come experience the story in every bite. Our daily lunch buffet and dinner menu are crafted to take you on a genuine spice journey — honest, authentic, and deeply satisfying.
    `,
  },
  {
    id: 2,
    title: 'Inside Our Kitchen: How We Prepare the Daily Lunch Buffet',
    excerpt:
      `Our $18.99 buffet is a labor of love that begins at 6AM every single day. Chef Yashpal walks us through the kitchen ritual behind one of Concord's most loved midday traditions.`,
    category: 'Tips & Guides',
    author: 'Yashpal Sethi',
    date: 'March 28, 2026',
    readTime: '4 min read',
    image: '/images/buffet.webp',
    featured: false,
    color: '#4A7C4A',
    content: `
The Masala House lunch buffet doesn't happen by accident. By the time you walk through our doors at 11AM, our kitchen team has already been at work for five hours.

## The Morning Ritual

**6:00 AM** — The day starts with soaking lentils for dal makhani. This slow-cooked staple needs at least 8 hours to reach the creamy, deeply flavored perfection our guests love.

**6:30 AM** — Fresh dough is prepared for our handmade naan. We proof it slowly and cook each piece to order, so it arrives at your table hot and pillowy.

**7:00 AM** — Onions, tomatoes, ginger, and garlic go into the pots for curry bases. Slow caramelization at this stage creates the deep, complex sauces that elevate our butter chicken and palak paneer.

## Fresh, Never Frozen

One of our non-negotiable commitments: everything on the buffet is made fresh that morning. No pre-packaged sauces, no reheated proteins. When the buffet opens and eventually closes, we're done for the day.

## What to Expect on the Buffet

On any given day you'll find:
- **Butter Chicken** — our most-requested dish
- **Dal Makhani** — slow-simmered overnight lentils
- **Palak Paneer** — fresh spinach and house-made cheese
- **Chana Masala** — spiced chickpeas with a tangy finish
- **Basmati Rice** — aged, fragrant, and perfectly fluffy
- **Fresh Naan** — made to order at the live station
- **Mango Lassi** — included with every buffet plate

## The $18.99 Promise

We believe exceptional Indian food shouldn't require a special occasion. Our pricing reflects our commitment to making authentic, scratch-made cuisine accessible to the entire Concord community.

Come hungry. Leave happy.
    `,
  },
  {
    id: 3,
    title: 'Catering a 200-Person Wedding: What We Learned',
    excerpt:
      `When a Walnut Creek family trusted Masala House to cater their daughter's wedding reception, Sakshi Sethi coordinated a full-service Indian feast for 200 guests. Here's the inside story.`,
    category: 'Events',
    author: 'Sakshi Sethi',
    date: 'March 15, 2026',
    readTime: '6 min read',
    image: '/images/catering.webp',
    featured: false,
    color: '#9B59B6',
    content: `
In January 2026, the Mehta family reached out with a request: a full-service Indian catering experience for their daughter Priya's wedding reception in Walnut Creek. Two hundred guests. A six-course menu. A 4-hour service window. And a bride with very specific tastes.

## The Planning Process

We spent three weeks planning this event. Every detail mattered — from the chafing dish configurations to the coordination with the venue's kitchen staff. Sakshi Sethi, who leads all catering operations at Masala House, flew through countless menu consultations, tastings, and logistics calls.

**The agreed menu included:**
- Samosa chaat station (interactive, guests build their own)
- Butter chicken and lamb rogan josh as mains
- Dal makhani, chana masala, and saag paneer as sides
- Biryani as a centerpiece dish
- Assorted naan and rice
- Gulab jamun and kheer for dessert

## Day-Of Logistics

The team arrived at the venue at 8AM for a 6PM event. Four hours for setup, two for final prep, two for service staging. Every chafing dish has to reach and hold temperature within a 10-degree window. Every garnish is placed by hand.

By 5:45PM, everything was ready. The bridal party arrived to a buffet that could have come straight out of a five-star Indian restaurant.

## What We Learned

Catering at scale is all about systems. The kitchen prep, the transport, the setup, the service flow — each phase has to be choreographed. But after every event, no matter the size, the best moment is the same: watching a guest take their first bite and smile.

## Book Your Event

Whether it's an intimate dinner for 20 or a grand reception for 300, Masala House catering delivers the same scratch-made quality you love in our restaurant — at your venue, on your timeline.

Contact Sakshi Sethi: [(206) 822-5058](tel:+12068225058)
    `,
  },
  {
    id: 4,
    title: `Butter Chicken: The World's Most Beloved Indian Dish`,
    excerpt:
      'How a happy accident in a Delhi kitchen in the 1950s became a global phenomenon — and why our version stays true to the original murgh makhani tradition.',
    category: 'Culture & Story',
    author: 'Neetu Sethi',
    date: 'February 20, 2026',
    readTime: '4 min read',
    image: '/images/hero_bg.webp',
    featured: false,
    color: '#E07B39',
    content: `
Butter chicken — or murgh makhani — is arguably the most recognized Indian dish on the planet. But its origin story is surprisingly humble, born from culinary improvisation rather than deliberate invention.

## A Happy Accident

In the 1950s, at the legendary Moti Mahal restaurant in Delhi, chef Kundan Lal Gujral was looking for a way to use up leftover tandoori chicken. His solution: simmer the charred, dry chicken pieces in a velvety sauce of tomatoes, butter, cream, and aromatic spices.

The result was murgh makhani — a dish so satisfying, so universally approachable, that it traveled the world faster than almost any other Indian recipe.

## What Makes It Special

True butter chicken is distinguished by three layers of complexity:

1. **The marinade** — yogurt, lemon, ginger, garlic, and a cumin-forward spice blend that tenderizes the chicken and imparts deep flavor before it ever hits the oven.

2. **The makhani sauce** — a slow-reduced base of ripe tomatoes, generous butter, and fresh cream. The key is patience: the sauce must cook long enough to lose its raw tomato edge.

3. **The finish** — fenugreek leaves (kasuri methi) crushed between the palms and stirred in at the very end. This is the secret ingredient that gives butter chicken its distinctive aromatic punch.

## Our Version at Masala House

Neetu Sethi's butter chicken has been refined over 20 years of home cooking and restaurant experience. It's richer than most restaurant versions, using more butter and less cream — a ratio that produces a silkier, more indulgent sauce that clings beautifully to every piece of chicken.

Find it on our buffet every single day. It's always the first to run out.
    `,
  },
  {
    id: 5,
    title: 'The Art of Happy Hour: Indian Snacks & Cocktail Pairings',
    excerpt:
      'From 3–5PM every day, Masala House transforms into the perfect happy hour destination. Here are our favorite street-food-to-drink pairings to elevate your afternoon.',
    category: 'Tips & Guides',
    author: 'Prabesh Dhakal',
    date: 'February 5, 2026',
    readTime: '3 min read',
    image: '/images/buffet.webp',
    featured: false,
    color: '#2980B9',
    content: `
Indian street food is the world's greatest happy hour companion — every bite is bold, complex, and designed to be social. At Masala House, our 3–5PM Happy Hour is a daily celebration of that tradition.

## The Snacks

**Samosa Chaat** — Crispy pastry parcels filled with spiced potatoes and peas, crowned with tangy tamarind chutney, mint sauce, and crunchy sev. Pairs beautifully with a chilled mango lassi or a light lager.

**Pakoras** — Golden fritters of vegetables or paneer, battered in seasoned chickpea flour and fried until shatteringly crisp. The dunking sauce matters here: our green chutney is genuinely exceptional.

**Papdi Chaat** — A deconstructed salad of crispy wafers, chickpeas, yogurt, and chutneys. Fresh, tangy, and dangerously addictive.

## The Pairings

| Snack | Drink Pairing |
|---|---|
| Samosa Chaat | Cold mango lassi |
| Spicy Pakoras | Chilled pale ale or sparkling water with lime |
| Papdi Chaat | Rooh afza lemonade |
| Paneer Tikka | Mint lemonade or chai |

## Why Our Happy Hour Works

The secret is contrast. Indian street food is intensely flavored — sweet, sour, salty, spicy, all at once. A good drink pairing doesn't compete; it cleanses and refreshes so the next bite is as exciting as the first.

Join us from 3–5PM any day of the week. No reservation needed. Just show up hungry.
    `,
  },
  {
    id: 6,
    title: 'From Concord With Love: Our First Year in Business',
    excerpt:
      `August 2024 to August 2025. Twelve months of buffets, family tables, wedding feasts, and community. Owner Prabesh Dhakal reflects on Masala House's first year.`,
    category: 'Culture & Story',
    author: 'Prabesh Dhakal',
    date: 'January 12, 2026',
    readTime: '5 min read',
    image: '/images/catering.webp',
    featured: false,
    color: '#E07B39',
    content: `
When we signed the lease on 2118 Willow Pass Rd in the spring of 2024, we had one clear goal: bring genuinely authentic Indian food to a community that deserved it.

## The Opening

We opened our doors in August 2024 with a skeleton crew — Yashpal and Neetu in the kitchen, Sakshi handling front-of-house and catering, and me running operations. The first week was terrifying and exhilarating in equal measure.

The buffet was half the size it is today. The menu was leaner. But the food was exactly what we'd promised: scratch-made, authentically spiced, and served with genuine warmth.

## What the Community Taught Us

Concord surprised us. The response was immediate and generous. Within weeks, regulars were coming in three times a week. Families were bringing grandparents to share dishes that reminded them of home. Students from the Bay Area's South Asian diaspora were texting each other about the dal makhani.

We learned quickly that Concord was hungry — not just for food, but for connection. Indian cuisine, at its best, is communal. The round communal table at the center of our dining room became the most popular spot in the restaurant.

## Looking Ahead

Year two means more. More menu depth, more catering capacity, more community events. We're exploring pop-up dinners, cooking classes, and a spice-of-the-month subscription box.

But the core never changes: great food, a warm welcome, and every dish made with the same care we'd give a guest in our own home.

Thank you, Concord. Year two starts now.
    `,
  },
];

// ─── READING TIME ICON MAP ────────────────────────────────────────────────────
const categoryIcon = {
  'Culture & Story': <BookOpen size={13} />,
  'Recipes': <Flame size={13} />,
  'Events': <Star size={13} />,
  'Tips & Guides': <Leaf size={13} />,
};

const categoryColor = {
  'Culture & Story': 'bg-orange-100 text-orange-700',
  'Recipes':         'bg-red-100 text-red-700',
  'Events':          'bg-purple-100 text-purple-700',
  'Tips & Guides':   'bg-green-100 text-green-700',
};

// ─── SIMPLE MARKDOWN RENDERER ─────────────────────────────────────────────────
const renderContent = (text) => {
  const lines = text.trim().split('\n');
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-dark mt-10 mb-4">
          {line.replace('## ', '')}
        </h2>
      );
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <p key={i} className="font-bold text-dark mt-4 mb-1">{line.replace(/\*\*/g, '')}</p>
      );
    } else if (line.startsWith('- ')) {
      // Collect consecutive list items
      const items = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        const raw = lines[i].trim().replace(/^- /, '');
        // handle **bold** within item
        const parts = raw.split(/\*\*(.*?)\*\*/g);
        items.push(
          <li key={i} className="flex items-start gap-2 text-bodyText leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            <span>
              {parts.map((p, pi) => pi % 2 === 1 ? <strong key={pi} className="text-dark">{p}</strong> : p)}
            </span>
          </li>
        );
        i++;
      }
      elements.push(<ul key={`ul-${i}`} className="space-y-2 my-4 ml-2">{items}</ul>);
      continue;
    } else if (line.startsWith('|')) {
      // Simple table
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        const cells = lines[i].trim().split('|').filter(Boolean).map(c => c.trim());
        if (!cells.every(c => c.match(/^[-]+$/))) rows.push(cells);
        i++;
      }
      elements.push(
        <div key={`tbl-${i}`} className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary/10">
                {rows[0]?.map((h, hi) => (
                  <th key={hi} className="px-4 py-2 text-left font-bold text-dark border border-borderCustom">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.slice(1).map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-altBg'}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-2 text-bodyText border border-borderCustom">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    } else {
      // Regular paragraph — handle inline **bold**, *italic*, and [links](url)
      const raw = line;
      // Split by bold, italic, or [link](url)
      const parts = raw.split(/(\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\))/g);
      elements.push(
        <p key={i} className="text-bodyText leading-relaxed text-lg mb-0">
          {parts.map((part, pi) => {
            if (part.startsWith('**') && part.endsWith('**'))
              return <strong key={pi} className="font-bold text-dark">{part.slice(2, -2)}</strong>;
            if (part.startsWith('*') && part.endsWith('*'))
              return <em key={pi}>{part.slice(1, -1)}</em>;
            
            // Handle [label](tel:...) or [label](url)
            const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
            if (linkMatch) {
              const [_, label, url] = linkMatch;
              return (
                <a key={pi} href={url} className="text-primary font-bold hover:underline">
                  {label}
                </a>
              );
            }
            
            return part;
          })}
        </p>
      );
    }
    i++;
  }
  return elements;
};

// ─── BLOG CARD ────────────────────────────────────────────────────────────────
const BlogCard = ({ blog, onOpen, delay = 0 }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.55, ease: 'easeOut', delay }}
    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-borderCustom/40 flex flex-col group cursor-pointer transition-all duration-300 hover:-translate-y-1"
    onClick={() => onOpen(blog)}
  >
    {/* Image */}
    <div className="relative h-52 overflow-hidden">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      {/* Category badge */}
      <span className={`absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold ${categoryColor[blog.category]}`}>
        {categoryIcon[blog.category]} {blog.category}
      </span>
    </div>

    {/* Body */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-dark text-lg font-bold leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
        {blog.title}
      </h3>
      <p className="text-subtext text-sm leading-relaxed line-clamp-3 mb-5 flex-grow">
        {blog.excerpt}
      </p>
      {/* Meta */}
      <div className="flex items-center justify-between border-t border-borderCustom/50 pt-4">
        <div className="flex items-center gap-1.5 text-subtext text-xs">
          <User size={12} />
          <span className="font-medium text-dark">{blog.author}</span>
        </div>
        <div className="flex items-center gap-3 text-subtext text-xs">
          <span className="flex items-center gap-1"><Calendar size={12} /> {blog.date}</span>
          <span className="flex items-center gap-1"><Clock size={12} /> {blog.readTime}</span>
        </div>
      </div>
    </div>
  </motion.article>
);

// ─── ARTICLE DRAWER ───────────────────────────────────────────────────────────
const ArticleDrawer = ({ blog, onClose }) => {
  if (!blog) return null;
  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-end"
        onClick={onClose}
      >
        <motion.aside
          key="drawer"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 280 }}
          className="relative w-full max-w-2xl bg-white h-full overflow-y-auto shadow-2xl flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Hero Image */}
          <div className="relative h-64 shrink-0 overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 left-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white hover:text-dark transition-all"
              aria-label="Close article"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => navigator.clipboard.writeText(window.location.href)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white hover:text-dark transition-all"
              aria-label="Share article"
            >
              <Share2 size={18} />
            </button>
            {/* Category */}
            <span className={`absolute bottom-4 left-4 inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold ${categoryColor[blog.category]}`}>
              {categoryIcon[blog.category]} {blog.category}
            </span>
          </div>

          {/* Article Content */}
          <div className="flex-grow p-8 md:p-10">
            <h1 className="text-2xl md:text-3xl font-bold text-dark leading-tight mb-4">
              {blog.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-subtext mb-8 pb-6 border-b border-borderCustom">
              <span className="flex items-center gap-1.5"><User size={13} /> <strong className="text-dark">{blog.author}</strong></span>
              <span className="flex items-center gap-1.5"><Calendar size={13} /> {blog.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={13} /> {blog.readTime}</span>
            </div>

            {/* Rendered body */}
            <div className="prose-like space-y-4 max-w-none">
              {renderContent(blog.content)}
            </div>
          </div>

          {/* CTA Footer */}
          <div className="shrink-0 bg-altBg border-t border-borderCustom p-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div>
              <p className="font-bold text-dark text-sm">Enjoyed this article?</p>
              <p className="text-subtext text-xs mt-0.5">Visit us at 2118 Willow Pass Rd, Concord, CA</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link to="/menu" onClick={onClose} className="btn-secondary !py-2.5 !px-5 !text-sm">View Menu</Link>
              <Link to="/contact" onClick={onClose} className="btn-primary !py-2.5 !px-5 !text-sm">Visit Us</Link>
            </div>
          </div>
        </motion.aside>
      </motion.div>
    </AnimatePresence>
  );
};

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openBlog, setOpenBlog] = useState(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const featuredBlog = blogs.find((b) => b.featured);
  const filtered = blogs
    .filter((b) => !b.featured)
    .filter((b) => activeCategory === 'All' || b.category === activeCategory);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  return (
    <div className="w-full overflow-x-hidden">
      <SEO 
        title="Our Kitchen Journal"
        description="Discover the stories behind our dishes, traditional Indian recipes, and cultural highlights from the Masala House team in Concord."
        url="/blogs"
      />

      {/* ── HERO ─────────────────────────────────── */}
      <section
        className="relative bg-dark text-white pt-40 pb-28 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: 'linear-gradient(rgba(26,26,26,0.85), rgba(26,26,26,0.85)), url("/images/hero_bg.webp")' }}
      >
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 site-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center items-center gap-3 mb-5"
          >
            <span className="block w-10 h-[2px] bg-primary" />
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Journal</span>
            <span className="block w-10 h-[2px] bg-primary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
          >
            Stories From Our <span className="text-primary italic">Kitchen</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            Recipes, culture, behind-the-scenes stories, and everything that makes authentic
            Indian food so deeply satisfying — straight from the Masala House team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2 mt-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED ARTICLE ─────────────────────── */}
      {featuredBlog && activeCategory === 'All' && (
        <section className="section-padding bg-altBg">
          <div className="site-container">
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-8 h-[2px] bg-primary" />
              <span className="text-primary font-bold tracking-widest uppercase text-xs">Featured Story</span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              onClick={() => setOpenBlog(featuredBlog)}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden shadow-xl border border-borderCustom/30 cursor-pointer group hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-72 lg:h-auto overflow-hidden">
                <img
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
                <span className={`absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold ${categoryColor[featuredBlog.category]}`}>
                  {categoryIcon[featuredBlog.category]} {featuredBlog.category}
                </span>
              </div>

              {/* Text */}
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Editor's Pick</span>
                <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight mb-5 group-hover:text-primary transition-colors">
                  {featuredBlog.title}
                </h2>
                <p className="text-subtext leading-relaxed text-lg mb-8">
                  {featuredBlog.excerpt}
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3 text-xs text-subtext">
                    <span className="flex items-center gap-1.5"><User size={13} /> <strong className="text-dark">{featuredBlog.author}</strong></span>
                    <span className="w-1 h-1 bg-subtext/40 rounded-full" />
                    <span className="flex items-center gap-1.5"><Clock size={13} /> {featuredBlog.readTime}</span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-dark transition-colors">
                    Read Article <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── ARTICLE GRID ─────────────────────────── */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="site-container relative z-10">
          {/* Desktop filter bar */}
          <div className="hidden md:flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-primary" />
              <h2 className="text-2xl font-bold text-dark">
                {activeCategory === 'All' ? 'All Articles' : activeCategory}
                <span className="ml-3 text-sm font-normal text-subtext">({filtered.length} articles)</span>
              </h2>
            </div>

            <div className="flex gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-altBg text-subtext hover:bg-borderCustom hover:text-dark'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((blog, i) => (
                <BlogCard key={blog.id} blog={blog} onOpen={setOpenBlog} delay={i * 0.07} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-subtext">
              <BookOpen size={48} className="mx-auto mb-4 opacity-30" />
              <p className="text-lg font-medium">No articles in this category yet.</p>
              <button onClick={() => setActiveCategory('All')} className="mt-4 text-primary font-bold underline">
                View all articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────── */}
      <section className="bg-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(224,123,57,0.18),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(224,123,57,0.10),transparent_65%)] pointer-events-none" />

        <div className="site-container relative z-10 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center items-center gap-3 mb-5">
              <span className="block w-8 h-[2px] bg-primary" />
              <span className="text-primary font-bold tracking-widest uppercase text-xs">Stay Connected</span>
              <span className="block w-8 h-[2px] bg-primary" />
            </div>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Get Fresh Stories & <span className="text-primary italic">Recipes</span> in Your Inbox
            </h2>
            <p className="text-gray-400 text-base font-light mb-10 leading-relaxed">
              No spam — just thoughtful posts from our kitchen, upcoming events, and the occasional exclusive recipe from Neetu's personal collection.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-primary/20 border border-primary/40 rounded-xl p-6 text-primary font-bold text-lg"
              >
                🎉 You're on the list! We'll be in touch soon.
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-grow bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-btn px-5 py-3 text-sm focus:outline-none focus:border-primary focus:bg-white/15 transition-all"
                />
                <button type="submit" className="btn-primary shrink-0 !w-auto">
                  Subscribe
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── ARTICLE DRAWER ───────────────────────── */}
      {openBlog && <ArticleDrawer blog={openBlog} onClose={() => setOpenBlog(null)} />}
    </div>
  );
};

export default Blogs;
