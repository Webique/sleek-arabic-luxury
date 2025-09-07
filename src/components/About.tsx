import React from 'react';
import aboutImage from '../assets/about.webp';

interface AboutProps {
  language: string;
}

const About: React.FC<AboutProps> = ({ language }) => {
  const isArabic = language === 'ar';

  const content = {
    en: {
      title: 'About Sleek Care',
      subtitle: 'Overview of Sleek Care :',
      description: 'Sleek Care is your destination for refined men\'s grooming where every detail reflects our name. With expert specialists and top-tier global products, we deliver a complete experience with unmatched professionalism.',
      hashtag: '#stay_sleek',
    },
    ar: {
      title: 'من نحن',
      subtitle: 'نبذة عن سليك كير :',
      description: 'سليك كير، وجهتك لعناية رجالية راقية بلمسة أنيقة تعكس اسمنا. بإشراف نخبة من المختصين وباستخدام أفضل المنتجات العالمية، نمنحك تجربة متكاملة بمعايير احترافية عالية.',
      hashtag: '#خليك_سليكر',
    },
  };

  const { title, subtitle, description, hashtag } = content[isArabic ? 'ar' : 'en'];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isArabic ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Text Content */}
          <div className={`space-y-6 ${isArabic ? 'lg:col-start-2 text-right' : 'lg:col-start-1 text-left'}`}>
            <div className="space-y-4">
              <h2 className={`heading-lg text-primary ${isArabic ? 'font-arabic' : 'font-display'}`}>
                {title}
              </h2>
              <div className="w-16 h-1 bg-gradient-gold rounded-full" />
            </div>

            <div className="space-y-4">
              <h3 className={`text-xl font-semibold text-foreground ${isArabic ? 'font-arabic' : ''}`}>
                {subtitle}
              </h3>
              <p className={`body-lg text-muted-foreground leading-relaxed ${isArabic ? 'font-arabic' : ''}`}>
                {description}
              </p>
              <p className={`text-lg font-semibold text-primary ${isArabic ? 'font-arabic' : ''}`}>
                {hashtag}
              </p>
            </div>
          </div>

          {/* Image */}
          <div className={`${isArabic ? 'lg:col-start-1' : 'lg:col-start-2'}`}>
            <div className="luxury-card overflow-hidden">
              <img
                src={aboutImage}
                alt="Sleek Care Professional Setup"
                className="w-full h-96 object-cover"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;