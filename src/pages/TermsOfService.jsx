import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ShieldCheck, Scale, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';

const TermsOfService = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      icon: <ShieldCheck className="text-primary" size={24} />,
      content: "By accessing or using the Masala House Concord website and services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, you may not use our services."
    },
    {
      title: "2. Use of Services",
      icon: <FileText className="text-primary" size={24} />,
      content: "Our services are intended for personal, non-commercial use. You agree not to misuse our website, including attempting to interfere with its proper working or accessing it using a method other than the interface and instructions we provide."
    },
    {
      title: "3. Reservations & Ordering",
      icon: <AlertCircle className="text-primary" size={24} />,
      content: "Reservations and online orders are subject to availability. We reserve the right to refuse service, terminate accounts, or cancel orders at our sole discretion. Prices and menu items are subject to change without notice."
    },
    {
      title: "4. Intellectual Property",
      icon: <Scale className="text-primary" size={24} />,
      content: "All content on this website, including text, graphics, logos, images, and software, is the property of Masala House Concord and is protected by copyright and other intellectual property laws."
    },
    {
      title: "5. Limitation of Liability",
      icon: <AlertCircle className="text-primary" size={24} />,
      content: "Masala House Concord shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services or website."
    }
  ];

  return (
    <div className="w-full">
      <SEO 
        title="Terms of Service"
        description="Read the Terms of Service for Masala House Concord. Understand your rights and responsibilities when using our website and dining services."
        url="/terms"
      />

      {/* HERO SECTION */}
      <section className="relative bg-dark text-white pt-40 pb-24 bg-cover bg-center overflow-hidden" style={{ backgroundImage: 'linear-gradient(rgba(26, 26, 26, 0.85), rgba(26, 26, 26, 0.85)), url("/images/hero_bg.webp")' }}>
        <div className="relative z-10 site-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight uppercase tracking-tight">
              Terms of <span className="text-primary italic">Service</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide">
              Last Updated: April 2026
            </p>
          </motion.div>
        </div>
        
        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-altBg to-transparent"></div>
      </section>

      {/* CONTENT SECTION */}
      <section className="section-padding bg-altBg relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>

        <div className="site-container relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-card shadow-xl border border-borderCustom overflow-hidden">
            <div className="p-8 md:p-12 space-y-12">
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none text-subtext font-light leading-relaxed"
              >
                <p className="text-xl text-dark font-normal mb-8">
                  Welcome to Masala House Concord. These Terms of Service govern your use of our website and the purchase of our culinary services.
                </p>
                
                <div className="grid gap-12 mt-12">
                  {sections.map((section, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col md:flex-row gap-6 items-start"
                    >
                      <div className="bg-primary/10 p-4 rounded-xl shrink-0">
                        {section.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-dark mb-4">{section.title}</h3>
                        <p className="text-subtext leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-16 pt-8 border-t border-borderCustom">
                  <h3 className="text-2xl font-bold text-dark mb-4">6. Contact Us</h3>
                  <p className="mb-6">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-altBg p-6 rounded-card border border-borderCustom inline-block w-full md:w-auto">
                    <p className="font-bold text-dark mb-2">Masala House Concord</p>
                    <p className="text-subtext mb-1">2118 Willow Pass Rd, Concord, CA</p>
                    <p className="text-subtext mb-1">Email: contact@masalahouseconcord.com</p>
                    <p className="text-subtext">Phone: (925) 490-3344</p>
                  </div>
                </div>

              </motion.div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-subtext text-sm">
              Agreement version 1.0 · Subject to California state law
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
