import React from 'react';
import { Check } from 'lucide-react';

interface PackagesProps {
  language: string;
}

const Packages: React.FC<PackagesProps> = ({ language }) => {
  const isArabic = language === 'ar';

  const packages = {
    en: [
      {
        title: 'Executive Refresh',
        arabicTitle: 'باقة الإنعاش التنفيذي',
        description: 'Haircut + beard design + hot-towel finish.',
        arabicDescription: 'قص شعر + تصميم لحية + لمسة منشفة ساخنة.',
      },
      {
        title: 'Sleek Signature',
        arabicTitle: 'الباقة المميّزة',
        description: 'Haircut + facial cleanse + scalp massage.',
        arabicDescription: 'قص شعر + تنظيف وجه + مساج فروة الرأس.',
      },
      {
        title: 'Keratin Upgrade',
        arabicTitle: 'ترقية الكيراتين',
        description: 'Cut + keratin smoothing + home care tips.',
        arabicDescription: 'قص شعر + كيراتين + إرشادات عناية منزلية.',
      },
    ],
  };

  return (
    <section id="packages" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isArabic ? 'text-right' : 'text-left'}`}>
          <h2 className={`heading-lg text-primary mb-4 ${isArabic ? 'font-arabic' : 'font-display'}`}>
            {isArabic ? 'باقاتنا المميزة' : 'Our Packages'}
          </h2>
          <div className="w-16 h-1 bg-gradient-gold rounded-full mx-auto mb-6" />
          <p className={`body-lg text-muted-foreground max-w-2xl mx-auto ${isArabic ? 'font-arabic' : ''}`}>
            {isArabic 
              ? 'باقات متكاملة لتجربة عناية متميزة'
              : 'Complete packages for a premium grooming experience'
            }
          </p>
        </div>

        {/* Packages Table */}
        <div className="luxury-card overflow-hidden">
          <div className="bg-warm-sand/20 px-8 py-4 border-b border-gold/20">
            <div className="grid grid-cols-2 gap-4">
              <h3 className={`font-semibold text-primary ${isArabic ? 'font-arabic text-right' : ''}`}>
                {isArabic ? 'الباقة' : 'Package'}
              </h3>
              <h3 className={`font-semibold text-primary ${isArabic ? 'font-arabic text-right' : ''}`}>
                {isArabic ? 'الوصف' : 'Description'}
              </h3>
            </div>
          </div>

          <div className="divide-y divide-border/50">
            {packages.en.map((pkg, index) => (
              <div key={index} className="px-8 py-6 hover:bg-muted/20 transition-colors duration-300">
                <div className="grid grid-cols-2 gap-4 items-center">
                  <div className={`space-y-2 ${isArabic ? 'text-right' : 'text-left'}`}>
                    <h4 className={`font-semibold text-primary ${isArabic ? 'font-arabic' : ''}`}>
                      {isArabic ? pkg.arabicTitle : pkg.title}
                    </h4>
                    <div className="flex items-center gap-2">
                      <Check size={16} className="text-gold" />
                      <span className="text-sm text-muted-foreground">
                        {isArabic ? 'باقة مميزة' : 'Premium Package'}
                      </span>
                    </div>
                  </div>
                  <div className={`${isArabic ? 'text-right' : 'text-left'}`}>
                    <p className={`text-muted-foreground ${isArabic ? 'font-arabic' : ''}`}>
                      {isArabic ? pkg.arabicDescription : pkg.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/966566667197"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <span className={isArabic ? 'font-arabic' : ''}>
              {isArabic ? 'استفسر عن الأسعار' : 'Inquire About Pricing'}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Packages;