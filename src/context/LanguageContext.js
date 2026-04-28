import React, { createContext, useContext, useState } from 'react';
import { en } from '../locales/en';
import { es } from '../locales/es';

const LanguageContext = createContext();
const translations = { en, es };

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('portfolio-lang') || 'es';
  });

  const toggleLang = () => {
    const next = lang === 'es' ? 'en' : 'es';
    setLang(next);
    localStorage.setItem('portfolio-lang', next);
  };

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
