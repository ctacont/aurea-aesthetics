import React from 'react';
import { Link } from 'react-router-dom';

const base =
  'group relative inline-flex items-center justify-center px-8 py-4 eyebrow transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]';

const tones = {
  primary: 'bg-[#C9AF80] text-[#0A0A0A] hover:bg-[#D4BC93] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10',
  outline: 'border border-white/50 text-white/85 hover:border-white hover:text-white hover:-translate-y-0.5',
  // Legacy aliases — keep fill animation for backward compatibility
  light: 'border border-white/30 text-white hover:text-[#0A0A0A] hover:-translate-y-0.5 overflow-hidden',
  dark: 'border border-[#0A0A0A]/25 text-[#0A0A0A] hover:text-[#0A0A0A] hover:-translate-y-0.5 overflow-hidden',
};

export default function GoldButton({ to, href, children, tone = 'primary', className = '', ...rest }) {
  const isLegacy = tone === 'light' || tone === 'dark';

  const inner = isLegacy ? (
    <>
      <span
        aria-hidden="true"
        className="absolute inset-0 origin-left scale-x-0 bg-[#C9AF80] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
      />
      <span className="relative z-10">{children}</span>
    </>
  ) : (
    <>{children}</>
  );

  const cls = `${base} ${tones[tone]} ${className}`;

  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>;
  return <button type="button" className={cls} {...rest}>{inner}</button>;
}