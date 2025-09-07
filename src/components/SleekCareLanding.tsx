import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Packages from './Packages';
import GrandOpeningDiscount from './GrandOpeningDiscount';
import Location from './Location';
import Contact from './Contact';
import Footer from './Footer';

const SleekCareLanding: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar language={language} onLanguageToggle={toggleLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Services language={language} />
      <Packages language={language} />
      <GrandOpeningDiscount language={language} />
      <Location language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
};

export default SleekCareLanding;