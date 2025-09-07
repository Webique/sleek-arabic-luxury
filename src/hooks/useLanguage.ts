import { useState, useEffect } from 'react';

export const useLanguage = () => {
  const [language, setLanguage] = useState<string>(() => {
    // Check localStorage for saved preference, default to 'en'
    return localStorage.getItem('sleek-care-language') || 'en';
  });

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('sleek-care-language', language);
    
    // Update document direction and lang attribute
    const html = document.documentElement;
    html.dir = language === 'ar' ? 'rtl' : 'ltr';
    html.lang = language === 'ar' ? 'ar' : 'en';
    
    // Update body class for additional styling if needed
    document.body.className = language === 'ar' ? 'arabic' : 'english';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  return {
    language,
    toggleLanguage,
    isArabic: language === 'ar',
  };
};