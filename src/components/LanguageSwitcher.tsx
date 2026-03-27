import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="btn btn-sm btn-outline-secondary rounded-pill d-inline-flex align-items-center gap-1 px-3"
    >
      <Globe size={16} />
      <span>{language === 'en' ? 'عربي' : 'EN'}</span>
    </button>
  );
};

export default LanguageSwitcher;
