import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const LANG_META = {
  es: { label: 'ES', flag: '/icons/flag-es.svg' },
  en: { label: 'EN', flag: '/icons/flag-en.svg' },
};

function LangDropdown() {
  const { lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const current = LANG_META[lang];
  const other = lang === 'es' ? 'en' : 'es';
  const otherMeta = LANG_META[other];

  return (
    <div className="lang-dropdown" ref={ref}>
      <button
        className="lang-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label="Seleccionar idioma"
      >
        <img src={current.flag} alt={current.label} className="flag-icon" />
        {current.label}
        <span className="lang-caret">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="lang-menu">
          <button
            className="lang-option"
            onClick={() => { toggleLang(); setOpen(false); }}
          >
            <img src={otherMeta.flag} alt={otherMeta.label} className="flag-icon" />
            {otherMeta.label}
          </button>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <span className="nav-logo">Portfolio</span>
        <div className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
          >
            {t.nav.home}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
          >
            {t.nav.about}
          </NavLink>
        </div>
        <LangDropdown />
      </div>
    </nav>
  );
}
