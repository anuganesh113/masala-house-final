import { MapPin, Phone, Clock, Mail, ChevronRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const RESTAURANT_ADDRESS = '2118 Willow Pass Rd, Ste. 400, Concord, CA 94520';
const RESTAURANT_PHONE = '(925) 490-3344';
const CATERING_CONTACT = 'Sakshi Sethi';
const CATERING_PHONE = '(206) 822-5058';

const hours = [
  { label: 'Breakfast', time: '8 – 11AM' },
  { label: 'Buffet', time: '11AM – 2:30PM' },
  { label: 'Happy Hour', time: '3 – 5PM' },
  { label: 'Dinner', time: '5 – 10PM' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, ease: 'easeOut', delay },
});

const Contact = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 1800);
  };

  return (
    <div className="w-full">
      <SEO 
        title="Contact Us"
        description="Visit Masala House Concord at 2118 Willow Pass Rd. For buffet hours, dinner reservations, or catering inquiries, call us at (925) 490-3344."
        url="/contact"
      />

      {/* ── HERO ──────────────────────────────────── */}
      <section
        className="relative bg-dark text-white pt-40 pb-24 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: 'linear-gradient(rgba(26,26,26,0.82), rgba(26,26,26,0.82)), url("/images/hero_bg.webp")' }}
      >
        {/* Decorative spice-dot blobs */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-10 w-64 h-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 site-container text-center">
          <motion.div
            className="flex justify-center items-center gap-3 mb-5"
            {...fadeUp(0)}
          >
            <span className="block w-10 h-[2px] bg-primary" />
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Find Us</span>
            <span className="block w-10 h-[2px] bg-primary" />
          </motion.div>

          <motion.h1
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight"
            {...fadeUp(0.1)}
          >
            Come Visit Us
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed"
            {...fadeUp(0.2)}
          >
            We'd love to host you. Drop by, give us a call, or reach out for catering.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <motion.a
              href={`https://maps.google.com/?q=${encodeURIComponent(RESTAURANT_ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-primary"
              {...fadeUp(0.3)}
            >
              <MapPin size={18} /> 
              <span className="hidden md:inline">Get Directions</span>
              <span className="md:hidden">Google Maps</span>
            </motion.a>
            <motion.a
              href={`https://maps.apple.com/?q=${encodeURIComponent(RESTAURANT_ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden inline-flex items-center gap-2 px-8 py-4 bg-white text-dark rounded-btn font-bold border border-white/20 hover:bg-white/90 hover:border-white transition-all shadow-lg active:scale-95"
              {...fadeUp(0.35)}
            >
              <MapPin size={18} className="text-primary" /> Apple Maps
            </motion.a>
          </div>
        </div>
      </section>

      {/* ── MAIN TWO-COLUMN SECTION ───────────────── */}
      <section className="section-padding bg-altBg relative overflow-hidden">
        {/* soft ambient blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />

        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl shadow-2xl overflow-hidden border border-black/5">

            {/* ── LEFT: CONTACT INFO ─────────────────── */}
            <motion.div
              className="p-10 md:p-14 flex flex-col gap-10 border-b lg:border-b-0 lg:border-r border-gray-100"
              {...fadeUp(0)}
            >
              {/* Section label */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="block w-8 h-[2px] bg-primary" />
                  <span className="text-primary font-bold tracking-widest uppercase text-xs">Contact</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
                  Visit <span className="text-primary italic">Us</span>
                </h2>
              </div>

              {/* ADDRESS */}
              <div className="group flex items-start gap-5">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-dark mb-1 uppercase tracking-wide">Address</h3>
                  <p className="text-subtext leading-relaxed">
                    2118 Willow Pass Rd, Ste. 400<br />
                    Concord, CA 94520
                  </p>
                  <button
                    onClick={() => handleCopy(RESTAURANT_ADDRESS, 'address')}
                    className="mt-2 inline-flex items-center gap-1.5 text-xs text-primary font-semibold hover:underline transition-opacity"
                  >
                    {copied === 'address' ? '✓ Copied!' : 'Copy address'}
                  </button>
                </div>
              </div>

              <div className="group flex items-start gap-5">
                <a 
                  href={`tel:+1${RESTAURANT_PHONE.replace(/\D/g, '')}`}
                  className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Phone size={22} />
                </a>
                <div>
                  <h3 className="text-base font-semibold text-dark mb-1 uppercase tracking-wide">Phone</h3>
                  <a
                    href={`tel:+1${RESTAURANT_PHONE.replace(/\D/g, '')}`}
                    className="text-subtext text-lg font-medium hover:text-primary transition-colors"
                  >
                    {RESTAURANT_PHONE}
                  </a>
                </div>
              </div>

              {/* HOURS */}
              <div className="group flex items-start gap-5">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Clock size={22} />
                </div>
                <div className="w-full">
                  <h3 className="text-base font-semibold text-dark mb-3 uppercase tracking-wide">Hours</h3>
                  <ul className="space-y-2">
                    {hours.map(({ label, time }, i) => (
                      <li key={i} className="flex items-center justify-between text-sm border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                        <span className="text-subtext font-medium">{label}</span>
                        <span className="font-bold text-dark tracking-wide">{time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CATERING */}
              <div className="group flex items-start gap-5">
                <a 
                  href={`tel:+1${CATERING_PHONE.replace(/\D/g, '')}`}
                  className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Mail size={22} rotate={-90} /> {/* Phone icon or mail icon? In code it is Mail but label is phone */}
                </a>
                <div>
                  <h3 className="text-base font-semibold text-dark mb-1 uppercase tracking-wide">Catering Inquiries</h3>
                  <p className="text-subtext text-sm mb-1">{CATERING_CONTACT}</p>
                  <a
                    href={`tel:+1${CATERING_PHONE.replace(/\D/g, '')}`}
                    className="text-primary font-bold text-lg hover:underline transition-colors"
                  >
                    {CATERING_PHONE}
                  </a>
                </div>
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(RESTAURANT_ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-bold text-primary hover:text-dark transition-colors"
                >
                  Google Maps
                  <ExternalLink size={14} />
                </a>
                <span className="md:hidden text-gray-300">|</span>
                <a
                  href={`https://maps.apple.com/?q=${encodeURIComponent(RESTAURANT_ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:hidden flex items-center gap-1.5 text-sm font-bold text-primary hover:text-dark transition-colors"
                >
                  Apple Maps
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>

            {/* ── RIGHT: GOOGLE MAP ─────────────────── */}
            <motion.div
              className="relative min-h-[420px] lg:min-h-0 bg-gray-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              {/* Top label bar */}
              <div className="absolute top-0 left-0 right-0 z-10 bg-white/90 backdrop-blur-sm px-5 py-3 flex items-center gap-2 border-b border-gray-100 shadow-sm">
                <MapPin size={15} className="text-primary shrink-0" />
                <span className="text-xs font-semibold text-dark truncate">
                  2118 Willow Pass Rd, Ste. 400 — Concord, CA 94520
                </span>
              </div>

              <iframe
                title="Masala House Concord — Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.867!2d-122.00461!3d37.97878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808563d08769af33%3A0x8259f0a9f0c5a6ae!2s2118%20Willow%20Pass%20Rd%20%23400%2C%20Concord%2C%20CA%2094520!5e0!3m2!1sen!2sus!4v1713600000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', minHeight: '420px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full pt-10"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA STRIP ─────────────────────── */}
      <section className="bg-dark py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(188,61,34,0.18),transparent_60%)] pointer-events-none" />
        <div className="site-container relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
              Planning a <span className="text-primary italic">private event?</span>
            </h2>
            <p className="text-gray-400 font-light">
              We offer full-service catering for corporate events, weddings &amp; family gatherings.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href={`tel:+1${CATERING_PHONE.replace(/\D/g, '')}`}
              className="btn-secondary !text-black !border-white hover:!bg-white hover:!text-dark"
            >
              Call Catering
            </a>
            <a href="/catering" className="btn-primary flex items-center gap-2 justify-center">
              Explore Catering <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
