import React from 'react';
import { MessageCircle } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

interface NavbarProps {
  language: string;
  onLanguageToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, onLanguageToggle }) => {
  const isArabic = language === 'ar';

  const navLinks = {
    en: [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#services', label: 'Services' },
      { href: '#packages', label: 'Packages' },
      { href: '#location', label: 'Location' },
      { href: '#contact', label: 'Contact' },
    ],
    ar: [
      { href: '#home', label: 'الرئيسية' },
      { href: '#about', label: 'من نحن' },
      { href: '#services', label: 'الخدمات' },
      { href: '#packages', label: 'الباقات' },
      { href: '#location', label: 'الموقع' },
      { href: '#contact', label: 'تواصل معنا' },
    ],
  };

  const links = navLinks[isArabic ? 'ar' : 'en'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between h-16 ${isArabic ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="font-display text-2xl font-bold text-primary">
              Sleek Care
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-foreground hover:text-primary transition-colors duration-300 font-medium ${
                  isArabic ? 'font-arabic' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side - Language Toggle + WhatsApp CTA */}
          <div className={`flex items-center gap-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
            <LanguageToggle currentLang={language} onToggle={onLanguageToggle} />
            <a
              href="https://wa.me/966566667197"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold hidden sm:flex items-center gap-2"
            >
              <MessageCircle size={16} />
              <span>{isArabic ? 'احجز الآن' : 'Book Now'}</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;