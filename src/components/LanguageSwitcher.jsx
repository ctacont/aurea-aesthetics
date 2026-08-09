import React, { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

/**
 * DE / EN dropdown — a globe icon + current language code; clicking opens
 * a small menu listing both languages with the active one highlighted.
 * `variant="mobile"` renders a full-width row for the mobile drawer.
 */
export default function LanguageSwitcher({ variant = 'header', dark = false }) {
  const { lang, otherLangPath } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const isEn = lang === 'en';

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const options = [
    { code: 'DE', active: !isEn, href: isEn ? otherLangPath() : null },
    { code: 'EN', active: isEn, href: isEn ? null : otherLangPath() },
  ];

  const triggerClasses = `flex items-center gap-2 eyebrow transition-colors duration-500 ${
    dark ? 'text-neutral-700 hover:text-[#8A7550]' : 'text-white/70 hover:text-white'
  }`;
  const optionClasses = (active) =>
    `block w-full px-4 py-2.5 text-left text-sm tracking-[0.18em] uppercase transition-colors duration-200 ${
      active ? 'text-[#C9AF80]' : 'text-neutral-600 hover:text-neutral-900'
    }`;

  const Dropdown = ({ children, menuClasses }) => (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={triggerClasses}
      >
        <Globe className="h-4 w-4" strokeWidth={1.25} />
        {lang.toUpperCase()}
      </button>
      {open && (
        <ul
          role="listbox"
          className={`absolute z-50 min-w-[7rem] border border-[#E8E2D9] bg-white shadow-lg ${menuClasses}`}
        >
          {options.map((o) => (
            <li key={o.code} role="option" aria-selected={o.active}>
              {o.href ? (
                <a href={o.href} className={optionClasses(o.active)}>{o.code}</a>
              ) : (
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className={optionClasses(o.active) + ' cursor-default'}
                >
                  {o.code}
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
      {children}
    </div>
  );

  if (variant === 'mobile') {
    return (
      <div className="flex items-center gap-4 border-b border-white/10 py-6">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-3 text-white/80"
        >
          <Globe className="h-4 w-4" strokeWidth={1.25} />
          <span className="eyebrow">{lang.toUpperCase()}</span>
        </button>
        {open && (
          <div className="ml-auto flex gap-2" ref={ref}>
            {options.map((o) =>
              o.href ? (
                <a key={o.code} href={o.href} className={optionClasses(o.active) + ' px-3'}>{o.code}</a>
              ) : (
                <span key={o.code} className={optionClasses(o.active) + ' px-3'}>{o.code}</span>
              )
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="hidden lg:block">
      <Dropdown menuClasses="right-0 top-full mt-2" />
    </div>
  );
}
