import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileStickyCTA from './components/MobileStickyCTA';
import ScrollToAnchor from './components/ScrollToAnchor';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import MenuItemDetail from './pages/MenuItemDetail';
import Catering from './pages/Catering';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Deals from './pages/Deals';

import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <ScrollToAnchor />
      <div className="flex flex-col min-h-screen bg-altBg">
        <Navbar />
        <main className="flex-grow flex flex-col pb-24 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:id" element={<MenuItemDetail />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
        <MobileStickyCTA />
      </div>
    </Router>
  );
}

export default App;
