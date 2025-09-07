import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  currentLang: string;
  onToggle: () => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLang, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:bg-primary/5"
      aria-label={currentLang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <Globe size={16} className="text-primary" />
      <span className="font-semibold text-sm text-primary">
        {currentLang === 'en' ? 'العربية' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageToggle;