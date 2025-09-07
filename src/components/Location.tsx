import React from 'react';
import { MapPin, Clock, Car } from 'lucide-react';

interface LocationProps {
  language: string;
}

const Location: React.FC<LocationProps> = ({ language }) => {
  const isArabic = language === 'ar';

  const content = {
    en: {
      title: 'Visit Our Location',
      description: 'Find us in Riyadh — easy access and convenient parking nearby.',
      features: [
        { icon: MapPin, text: 'Prime Location in Riyadh' },
        { icon: Car, text: 'Convenient Parking' },
        { icon: Clock, text: 'Easy Access' },
      ],
    },
    ar: {
      title: 'موقعنا',
      description: 'موقعنا في الرياض — وصول سهل ومواقف قريبة.',
      features: [
        { icon: MapPin, text: 'موقع مميز في الرياض' },
        { icon: Car, text: 'مواقف سيارات متوفرة' },
        { icon: Clock, text: 'وصول سهل' },
      ],
    },
  };

  const { title, description, features } = content[isArabic ? 'ar' : 'en'];

  return (
    <section id="location" className="section-padding">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16`}>
          <h2 className={`heading-lg text-primary mb-4 ${isArabic ? 'font-arabic' : 'font-display'}`}>
            {title}
          </h2>
          <div className="w-16 h-1 bg-gradient-gold rounded-full mx-auto mb-6" />
          <p className={`body-lg text-muted-foreground max-w-2xl mx-auto ${isArabic ? 'font-arabic' : ''}`}>
            {description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="luxury-card overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3624.6846834924376!2d46.6441663!3d24.8104262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ4JzM3LjUiTiA0NsKwMzgnMzkuMCJF!5e0!3m2!1sen!2ssa!4v1647123456789!5m2!1sen!2ssa"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sleek Care Location"
            ></iframe>
          </div>

          {/* Location Info */}
          <div className={`space-y-8 ${isArabic ? 'text-right' : 'text-left'}`}>
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-4 ${isArabic ? 'flex-row-reverse' : ''}`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <span className={`font-medium text-foreground ${isArabic ? 'font-arabic' : ''}`}>
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="bg-muted/50 rounded-2xl p-6 space-y-4">
              <h3 className={`font-semibold text-primary ${isArabic ? 'font-arabic' : ''}`}>
                {isArabic ? 'عنوان الموقع' : 'Address'}
              </h3>
              <p className={`text-muted-foreground ${isArabic ? 'font-arabic' : ''}`}>
                {isArabic ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}
              </p>
              <a
                href="https://www.google.com/maps?q=24.8104262,46.6441663"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full justify-center"
              >
                <MapPin size={16} />
                <span className={isArabic ? 'font-arabic' : ''}>
                  {isArabic ? 'افتح في الخرائط' : 'Open in Maps'}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;