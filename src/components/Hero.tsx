import React from 'react';
import { MessageCircle, Shield, Award, Sparkles } from 'lucide-react';
import heroImage from '../assets/hero-barbershop.jpg';

interface HeroProps {
  language: string;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const isArabic = language === 'ar';

  const content = {
    en: {
      slogan: 'LET US TAKE CARE OF YOUR SLEEK LOOK..',
      subline: 'Refined men\'s grooming in Riyadh — precise cuts, tailored care, and a calm luxury experience.',
      cta: 'Book on WhatsApp',
      badges: ['Licensed Specialists', 'Premium Products', 'Hygienic Protocols'],
    },
    ar: {
      slogan: 'دعنا نعتني بأناقتك..',
      subline: 'عناية رجالية راقية في الرياض — حلاقة دقيقة، عناية مخصصة، وتجربة فاخرة هادئة.',
      cta: 'احجز عبر واتساب',
      badges: ['أخصائيون مرخصون', 'منتجات راقية', 'بروتوكولات نظافة'],
    },
  };

  const { slogan, subline, cta, badges } = content[isArabic ? 'ar' : 'en'];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Sleek Care Barbershop"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchpriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center`}>
          <div className="space-y-8">
            {/* Arabic Slogan */}
            {isArabic && (
              <h1 className="heading-xl font-arabic text-white mb-4">
                {slogan}
              </h1>
            )}

            {/* English Slogan */}
            {!isArabic && (
              <h1 className="heading-xl font-display text-white mb-4">
                {slogan}
              </h1>
            )}

            {/* Subline */}
            <p className={`body-lg text-white/90 max-w-2xl mx-auto ${isArabic ? 'font-arabic' : ''}`}>
              {subline}
            </p>

            {/* CTA Button */}
            <div className="pt-4 flex justify-center">
              <a
                href="https://wa.me/966566667197"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-base px-8 py-4 inline-flex items-center gap-2.5 shadow-luxury"
              >
                <MessageCircle size={18} />
                <span className={isArabic ? 'font-arabic' : ''}>{cta}</span>
              </a>
            </div>

            {/* Micro Badges */}
            <div className={`flex flex-wrap gap-6 pt-8 justify-center`}>
              {badges.map((badge, index) => {
                const icons = [Shield, Award, Sparkles];
                const Icon = icons[index];
                return (
                  <div
                    key={badge}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                  >
                    <Icon size={16} className="text-gold" />
                    <span className={`text-sm text-white font-medium ${isArabic ? 'font-arabic' : ''}`}>
                      {badge}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;