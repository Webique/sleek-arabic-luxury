import React from 'react';
import { Check } from 'lucide-react';
import packagesPdf from '../assets/packages.pdf';

interface PackagesProps {
  language: string;
}

const Packages: React.FC<PackagesProps> = ({ language }) => {
  const isArabic = language === 'ar';

  const packages = {
    en: [
      {
        title: 'Grooms Package',
        arabicTitle: 'ﺑﺎﻗــﺔ اﻟـﻌـﺮﻳـــــــﺲ',
        description:
          'Haircut & Beard Trim + Facial Treatment + Manicure & Pedicure + Hair & Beard Dye + Blow Dry + Beard Serum + Hair Care with Hot Oil Treatment & Steam',
        arabicDescription:
          'قص شعر وتهذيب لحية + تنظيف وعلاج للوجه + مانيكير وباديكير + صبغة للشعر واللحية + تجفيف بالسشوار + سيروم للحية + عناية بالشعر بزيوت حارة مع بخار',
      },
      {
        title: 'Sleek Birthday Package',
        arabicTitle: 'ﺑﺎﻗــﺔ ﺳﻠﻴﻜﺮ ﻳﻮم اﻟﻤﻴﻼد',
        description:
          'Haircut & Beard Trim + Facial Treatment + Hair Care + Pedicure + Blow Dry',
        arabicDescription:
          'قص شعر وتهذيب لحية + تنظيف وعلاج للوجه + عناية بالشعر + باديكير + تجفيف بالسشوار',
      },
      {
        title: 'Sleek Kids Package',
        arabicTitle: 'ﺑﺎﻗــﺔ ﺳﻠﻴﻜﺮ ﻟﻸﻃﻔﺎل',
        description: 'Haircut + Hair Wash + Blow Dry + Hair Powder Wax',
        arabicDescription: 'قص شعر + غسيل شعر + تجفيف بالسشوار + واكس بودرة للشعر',
      },
    ],
  };

  return (
    <section id="packages" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16`}>
          <h2 className={`heading-lg text-primary mb-4 ${isArabic ? 'font-arabic' : 'font-display'}`}>
            {isArabic ? 'ﺑﺎﻗﺎت اﻟﺴﻠﻴﻜﺮ' : 'Sleek Packages'}
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
            href={`/pdf.html?src=${encodeURIComponent(packagesPdf)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <span className={isArabic ? 'font-arabic' : ''}>
              {isArabic ? 'عرض تفاصيل الباقات (PDF)' : 'View Packages Details (PDF)'}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Packages;