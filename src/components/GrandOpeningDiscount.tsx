import React from 'react';
import openingPdf from '../assets/OpeningDiscount.pdf';

interface GrandOpeningDiscountProps {
  language: string;
}

const GrandOpeningDiscount: React.FC<GrandOpeningDiscountProps> = ({ language }) => {
  const isArabic = language === 'ar';

  return (
    <section id="grand-opening" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className={`text-center mb-10`}>
          <h2 className={`heading-lg text-primary mb-4 ${isArabic ? 'font-arabic' : 'font-display'}`}>
            {isArabic ? 'خصم الافتتاح الكبير' : 'Grand Opening Discount'}
          </h2>
          <div className="w-16 h-1 bg-gradient-gold rounded-full mx-auto" />
        </div>

        <div className="luxury-card p-8 text-center">
          <p className={`body-lg text-muted-foreground max-w-2xl mx-auto mb-8 ${isArabic ? 'font-arabic' : ''}`}>
            {isArabic
              ? 'اكتشف عروض الافتتاح الخاصة بنا واغتنم الفرصة لفترة محدودة.'
              : 'Explore our special grand opening offers available for a limited time.'}
          </p>
          <a
            href={`/pdf.html?src=${encodeURIComponent(openingPdf)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <span className={isArabic ? 'font-arabic' : ''}>
              {isArabic ? 'عرض تفاصيل الخصم (PDF)' : 'View Opening Discount (PDF)'}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GrandOpeningDiscount;


