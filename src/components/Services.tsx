import React from 'react';
import { Scissors, Zap, Palette, Sparkles, Hand, Plus } from 'lucide-react';

interface ServicesProps {
  language: string;
}

const Services: React.FC<ServicesProps> = ({ language }) => {
  const isArabic = language === 'ar';

  const services = {
    en: [
      {
        icon: Scissors,
        title: 'Haircut & Styling',
        description: 'Tailored cuts, fades, and styling to your face shape.',
      },
      {
        icon: Zap,
        title: 'Beard Design & Shave',
        description: 'Precision shaping, hot-towel shaves, contour detailing.',
      },
      {
        icon: Palette,
        title: 'Color & Keratin',
        description: 'Grey blending, subtle toning, keratin smoothing.',
      },
      {
        icon: Sparkles,
        title: 'Facial & Skin Care',
        description: 'Purifying facials and hydration boosts for a clean finish.',
      },
      {
        icon: Hand,
        title: 'Hands & Grooming',
        description: 'Executive hand care, nail tidy, nourishing finish.',
      },
      {
        icon: Plus,
        title: 'Add-ons',
        description: 'Nose/ear grooming, threading, scalp massage.',
      },
    ],
    ar: [
      {
        icon: Scissors,
        title: 'قص وقصّات عصرية',
        description: 'قصات مخصصة وفيدات عصرية تناسب ملامحك.',
      },
      {
        icon: Zap,
        title: 'تصميم اللحية والحلاقة التقليدية',
        description: 'تحديد دقيق وحلاقة بالمنشفة الساخنة وتفاصيل احترافية.',
      },
      {
        icon: Palette,
        title: 'تلوين وكيراتين',
        description: 'تمويه الشيب وتون خفيف وكيراتين لتنعيم الشعر.',
      },
      {
        icon: Sparkles,
        title: 'عناية الوجه',
        description: 'جلسات تنظيف وترطيب تمنح بشرة نقية ومتوازنة.',
      },
      {
        icon: Hand,
        title: 'عناية اليدين والأظافر',
        description: 'عناية راقية لليدين وترتيب الأظافر بلمسة مغذية.',
      },
      {
        icon: Plus,
        title: 'إضافات',
        description: 'ترتيب الأنف والأذن، خيط، مساج فروة الرأس.',
      },
    ],
  };

  const serviceList = services[isArabic ? 'ar' : 'en'];

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isArabic ? 'text-right' : 'text-left'}`}>
          <h2 className={`heading-lg text-primary mb-4 ${isArabic ? 'font-arabic' : 'font-display'}`}>
            {isArabic ? 'خدماتنا' : 'Our Services'}
          </h2>
          <div className="w-16 h-1 bg-gradient-gold rounded-full mx-auto mb-6" />
          <p className={`body-lg text-muted-foreground max-w-2xl mx-auto ${isArabic ? 'font-arabic' : ''}`}>
            {isArabic 
              ? 'مجموعة شاملة من خدمات العناية الرجالية المتخصصة'
              : 'Comprehensive men\'s grooming services tailored to perfection'
            }
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="luxury-card p-8 text-center group"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <div className="w-12 h-0.5 bg-gold mx-auto" />
                </div>
                
                <h3 className={`heading-md text-primary mb-4 ${isArabic ? 'font-arabic' : ''}`}>
                  {service.title}
                </h3>
                
                <p className={`text-muted-foreground leading-relaxed ${isArabic ? 'font-arabic' : ''}`}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;