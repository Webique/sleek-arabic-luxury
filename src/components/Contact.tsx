import React from 'react';
import { MessageCircle, Mail, Instagram } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';
import { FaSnapchatGhost } from 'react-icons/fa';

interface ContactProps {
  language: string;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const isArabic = language === 'ar';

  const content = {
    en: {
      title: 'Get In Touch',
      cta: 'Book your session now — we\'ll confirm via WhatsApp.',
      phone: 'WhatsApp Booking',
      email: 'Email Us',
      social: 'Follow Us',
    },
    ar: {
      title: 'تواصل معنا',
      cta: 'احجز موعدك الآن — سنؤكد الحجز عبر واتساب.',
      phone: 'حجز عبر واتساب',
      email: 'راسلنا',
      social: 'تابعنا',
    },
  };

  const { title, cta, phone, email, social } = content[isArabic ? 'ar' : 'en'];

  const socialLinks = [
    { name: 'Instagram', handle: 'Sleekcare.sa', url: 'https://instagram.com/sleekcare.sa', icon: Instagram },
    { name: 'TikTok', handle: 'Sleekcare.sa', url: 'https://tiktok.com/@sleekcare.sa', icon: SiTiktok },
    { name: 'Snapchat', handle: 'Sleekcare.sa', url: 'https://snapchat.com/add/sleekcare.sa', icon: FaSnapchatGhost },
    { name: 'X (Twitter)', handle: 'Sleekcare_sa', url: 'https://twitter.com/sleekcare_sa', icon: FaXTwitter },
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16`}>
          <h2 className={`heading-lg text-primary mb-4 ${isArabic ? 'font-arabic' : 'font-display'}`}>
            {title}
          </h2>
          <div className="w-16 h-1 bg-gradient-gold rounded-full mx-auto mb-6" />
          <p className={`body-lg text-muted-foreground max-w-2xl mx-auto ${isArabic ? 'font-arabic' : ''}`}>
            {cta}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* WhatsApp Booking */}
          <div className="luxury-card p-8 text-center group hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100/50">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle size={24} />
              </div>
            </div>
            <h3 className={`heading-md text-primary mb-4 ${isArabic ? 'font-arabic' : ''}`}>
              {phone}
            </h3>
            <p className="text-muted-foreground mb-6">+966 566667197</p>
            <a
              href="https://wa.me/966566667197"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
            >
              <MessageCircle size={16} />
              <span className={isArabic ? 'font-arabic' : ''}>
                {isArabic ? 'احجز الآن' : 'Book Now'}
              </span>
            </a>
          </div>

          {/* Email */}
          <div className="luxury-card p-8 text-center group hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100/50">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail size={24} />
              </div>
            </div>
            <h3 className={`heading-md text-primary mb-4 ${isArabic ? 'font-arabic' : ''}`}>
              {email}
            </h3>
            <p className="text-muted-foreground mb-6">sleekcare.sa@gmail.com</p>
            <a
              href="mailto:sleekcare.sa@gmail.com"
              className="btn-outline w-full justify-center"
            >
              <Mail size={16} />
              <span className={isArabic ? 'font-arabic' : ''}>
                {isArabic ? 'راسلنا' : 'Send Email'}
              </span>
            </a>
          </div>

          {/* Social Media */}
          <div className="luxury-card p-8 text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-4">
                <Instagram size={24} className="text-primary" />
              </div>
            </div>
            <h3 className={`heading-md text-primary mb-6 ${isArabic ? 'font-arabic' : ''}`}>
              {social}
            </h3>
            <div className="space-y-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-300 group"
                  >
                    <Icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    <div className={`text-left ${isArabic ? 'text-right flex-1' : 'flex-1'}`}>
                      <div className="font-medium text-foreground">{social.name}</div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;