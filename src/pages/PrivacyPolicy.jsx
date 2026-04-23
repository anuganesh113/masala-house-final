import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, UserCheck, Mail } from 'lucide-react';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      icon: <Database className="text-primary" size={24} />,
      content: "We collect information you provide directly to us, such as when you make a reservation, place an order, or contact us. This may include your name, email address, phone number, and payment information."
    },
    {
      title: "2. How We Use Information",
      icon: <Eye className="text-primary" size={24} />,
      content: "We use the information we collect to provide, maintain, and improve our services, process transactions, send confirmations, and communicate with you about our menu, special events, and promotions."
    },
    {
      title: "3. Data Security",
      icon: <Lock className="text-primary" size={24} />,
      content: "We implement reasonable security measures to protect the information we collect from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure."
    },
    {
      title: "4. Sharing of Information",
      icon: <Shield className="text-primary" size={24} />,
      content: "We do not sell your personal information. We may share information with third-party service providers who perform services on our behalf, such as delivery partners, payment processors, and analytics providers."
    },
    {
      title: "5. Your Choices",
      icon: <UserCheck className="text-primary" size={24} />,
      content: "You may opt out of receiving promotional communications from us by following the instructions in those communications. You can also request to access, correct, or delete your personal information by contacting us."
    }
  ];

  return (
    <div className="w-full">
      <SEO 
        title="Privacy Policy"
        description="Learn about how Masala House Concord collects, uses, and protects your personal information. Your privacy is our priority."
        url="/privacy"
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
              Privacy <span className="text-primary italic">Policy</span>
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
                <p className="text-xl text-dark font-normal mb-8 text-center">
                  At Masala House Concord, we value your privacy and are committed to protecting your personal data.
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
                  <div className="flex flex-col md:flex-row gap-8 items-center bg-altBg p-8 rounded-card border border-borderCustom">
                    <div className="bg-primary/10 p-4 rounded-full">
                      <Mail className="text-primary" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-dark mb-2">Privacy Questions?</h3>
                      <p className="text-subtext mb-4">
                        If you have any questions or concerns about our privacy practices, please reach out to our privacy officer.
                      </p>
                      <div className="space-y-1">
                        <p className="font-bold text-dark">Masala House Concord</p>
                        <p className="text-subtext">2118 Willow Pass Rd, Concord, CA</p>
                        <p className="text-primary font-medium">privacy@masalahouseconcord.com</p>
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-subtext text-sm">
              © 2026 Masala House Concord · Designed for Privacy & Security
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
