import React, { useState } from 'react';
import logo from '../assets/logo.webp';
import { MessageCircle, Menu, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

interface NavbarProps {
  language: string;
  onLanguageToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, onLanguageToggle }) => {
  const isArabic = language === 'ar';
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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
  // Desktop should show RTL order when Arabic; mobile keeps natural vertical order
  const displayedLinksDesktop = isArabic ? [...links].reverse() : links;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="relative h-16">
          {/* Logo */}
          <div className={`absolute inset-y-0 flex items-center ${isArabic ? 'right-0' : 'left-0'}`}>
            <img src={logo} alt="Sleek Care logo" className="h-14 w-auto" />
          </div>

          {/* Navigation Links (centered) */}
          <div className={`hidden md:flex items-center gap-8 absolute inset-y-0 left-1/2 -translate-x-1/2`}>
            {displayedLinksDesktop.map((link) => (
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

          {/* Right Side - Language Toggle + WhatsApp CTA + Mobile Toggle */}
          <div className={`absolute inset-y-0 flex items-center gap-3 ${isArabic ? 'left-0' : 'right-0'}`}>
            <LanguageToggle currentLang={language} onToggle={onLanguageToggle} />
            <a
              href="https://wa.me/966566667197"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold hidden sm:flex items-center gap-1.5 text-sm px-3 py-2"
            >
              <MessageCircle size={14} />
              <span>{isArabic ? 'احجز الآن' : 'Book Now'}</span>
            </a>
            <button
              aria-label={isMobileOpen ? (isArabic ? 'إغلاق القائمة' : 'Close menu') : (isArabic ? 'فتح القائمة' : 'Open menu')}
              onClick={() => setIsMobileOpen((v) => !v)}
              className={`md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-border/60 bg-background/80 hover:bg-background transition-colors ${isArabic ? 'ml-2' : ''}`}
            >
              {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu: animated dropdown panel below navbar */}
        <div
          className={`md:hidden absolute left-0 right-0 top-16 z-40 transition-all duration-300 ease-out ${
            isMobileOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
          dir="ltr"
        >
          <div className={`mx-4 rounded-2xl border border-border/60 bg-background/95 backdrop-blur shadow-xl transition-transform duration-300 ${
            isMobileOpen ? 'scale-100' : 'scale-95'
          }`}>
            <div className="py-3 text-center">
              <div className="space-y-0">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`block w-full px-4 py-3 text-foreground hover:text-primary transition-colors duration-300 text-base border-b border-border/20 last:border-b-0 text-center ${
                      isArabic ? 'font-arabic' : ''
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="px-4 py-2">
                  <a
                    href="https://wa.me/966566667197"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold inline-flex items-center gap-2 text-sm px-3 py-2 w-full justify-center"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <MessageCircle size={14} />
                    <span>{isArabic ? 'احجز الآن' : 'Book Now'}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;