import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';

/**
 * DE / EN toggle — two eyebrow-level labels separated by a thin divider.
 * Active language is highlighted in gold (#C9AF80); inactive is white/50.
 * `variant="mobile"` renders a full-width row for the mobile drawer.
 */
export default function LanguageSwitcher({ variant = 'header' }) {
  const { lang, otherLangPath } = useLanguage();
  const isEn = lang === 'en';

  const Item = ({ code, active, href }) => (
    <a
      href={href}
      aria-current={active ? 'true' : undefined}
      className={`eyebrow transition-colors duration-300 ${
        active ? 'text-[#C9AF80]' : 'text-white/50 hover:text-white/80'
      }`}
    >
      {code}
    </a>
  );

  const divider = <span className="h-3.5 w-px bg-white/30" aria-hidden="true" />;

  if (variant === 'mobile') {
    return (
      <div className="flex items-center gap-4 border-b border-white/10 py-6">
        <Item code="DE" active={!isEn} href={isEn ? otherLangPath() : '#'} />
        {divider}
        <Item code="EN" active={isEn} href={isEn ? '#' : otherLangPath()} />
      </div>
    );
  }

  return (
    <div className="hidden items-center gap-3 lg:flex">
      <Item code="DE" active={!isEn} href={isEn ? otherLangPath() : '#'} />
      {divider}
      <Item code="EN" active={isEn} href={isEn ? '#' : otherLangPath()} />
    </div>
  );
}