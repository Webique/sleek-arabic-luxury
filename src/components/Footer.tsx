import React from 'react';
import logo from '../assets/logo.webp';
import { MessageCircle, Mail, Instagram, MapPin } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';
import { FaSnapchatGhost } from 'react-icons/fa';

interface FooterProps {
  language: string;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const isArabic = language === 'ar';

  const content = {
    en: {
      tagline: 'LET US TAKE CARE OF YOUR SLEEK LOOK..',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      links: [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#services', label: 'Services' },
        { href: '#packages', label: 'Packages' },
        { href: '#location', label: 'Location' },
        { href: '#contact', label: 'Contact' },
      ],
      copyright: 'Sleek Care — All rights reserved',
      privacy: 'Privacy',
      terms: 'Terms',
    },
    ar: {
      tagline: 'دعنا نعتني بأناقتك..',
      quickLinks: 'روابط سريعة',
      contact: 'تواصل معنا',
      links: [
        { href: '#home', label: 'الرئيسية' },
        { href: '#about', label: 'من نحن' },
        { href: '#services', label: 'الخدمات' },
        { href: '#packages', label: 'الباقات' },
        { href: '#location', label: 'الموقع' },
        { href: '#contact', label: 'تواصل معنا' },
      ],
      copyright: 'سليك كير — جميع الحقوق محفوظة',
      privacy: 'الخصوصية',
      terms: 'الشروط',
    },
  };

  const { tagline, quickLinks, contact, links, copyright, privacy, terms } = content[isArabic ? 'ar' : 'en'];

  const socialLinks = [
    { icon: Instagram, url: 'https://instagram.com/sleekcare.sa', label: 'Instagram' },
    { icon: SiTiktok, url: 'https://tiktok.com/@sleekcare.sa', label: 'TikTok' },
    { icon: FaSnapchatGhost, url: 'https://snapchat.com/add/sleekcare.sa', label: 'Snapchat' },
    { icon: FaXTwitter, url: 'https://twitter.com/sleekcare_sa', label: 'X (Twitter)' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className={`space-y-6 ${isArabic ? 'text-right' : 'text-left'}`}>
            <div>
              <img src={logo} alt="Sleek Care logo" className="h-10 w-auto mb-4" />
              <p className={`text-primary-foreground/80 leading-relaxed ${isArabic ? 'font-arabic' : ''}`}>
                {tagline}
              </p>
            </div>
            <div className={`flex items-center gap-2 ${isArabic ? 'flex-row-reverse' : ''}`}>
              <MapPin size={16} className="text-gold" />
              <span className={`text-sm ${isArabic ? 'font-arabic' : ''}`}>
                {isArabic ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`space-y-6 ${isArabic ? 'text-right' : 'text-left'}`}>
            <h3 className={`font-semibold text-lg ${isArabic ? 'font-arabic' : ''}`}>
              {quickLinks}
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`text-primary-foreground/80 hover:text-gold transition-colors duration-300 ${isArabic ? 'font-arabic' : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className={`space-y-6 ${isArabic ? 'text-right' : 'text-left'}`}>
            <h3 className={`font-semibold text-lg ${isArabic ? 'font-arabic' : ''}`}>
              {contact}
            </h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/966566667197"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 text-primary-foreground/80 hover:text-gold transition-colors duration-300 ${isArabic ? 'flex-row-reverse' : ''}`}
              >
                <MessageCircle size={16} />
                <span>+966 566667197</span>
              </a>
              <a
                href="mailto:sleekcare.sa@gmail.com"
                className={`flex items-center gap-3 text-primary-foreground/80 hover:text-gold transition-colors duration-300 ${isArabic ? 'flex-row-reverse' : ''}`}
              >
                <Mail size={16} />
                <span>sleekcare.sa@gmail.com</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className={`flex gap-4 ${isArabic ? 'justify-end' : 'justify-start'}`}>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary-foreground/10 hover:bg-gold hover:text-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 ${isArabic ? 'md:flex-row-reverse' : ''}`}>
          <div className={`text-primary-foreground/60 text-sm ${isArabic ? 'font-arabic' : ''}`}>
            © {new Date().getFullYear()} {copyright}
          </div>
          <div className={`flex gap-6 ${isArabic ? 'flex-row-reverse' : ''}`}>
            <a href="#" className={`text-primary-foreground/60 hover:text-gold transition-colors text-sm ${isArabic ? 'font-arabic' : ''}`}>
              {privacy}
            </a>
            <a href="#" className={`text-primary-foreground/60 hover:text-gold transition-colors text-sm ${isArabic ? 'font-arabic' : ''}`}>
              {terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;