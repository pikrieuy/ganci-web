import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isID, setIsID] = useState(i18n.language === 'id');

  const toggleLanguage = () => {
    const newLang = isID ? 'en' : 'id';
    i18n.changeLanguage(newLang);
    setIsID(!isID);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full 
                 bg-pink-light border border-pink-medium 
                 hover:bg-pink-medium transition-all duration-300
                 text-sm font-sans font-semibold text-purple-dark"
      aria-label="Switch language"
    >
      <span className={`transition-opacity duration-200 ${isID ? 'opacity-100' : 'opacity-50'}`}>
        🇮🇩
      </span>
      <div className="relative w-10 h-5 bg-white rounded-full shadow-inner border border-pink-main/30">
        <div
          className={`absolute top-0.5 w-4 h-4 rounded-full bg-pink-main shadow transition-transform duration-300 ${
            isID ? 'left-0.5' : 'translate-x-5'
          }`}
        />
      </div>
      <span className={`transition-opacity duration-200 ${!isID ? 'opacity-100' : 'opacity-50'}`}>
        🇬🇧
      </span>
    </button>
  );
};

export default LanguageSwitcher;
