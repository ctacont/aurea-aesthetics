import React from 'react';
import { Link } from 'react-router-dom';

const base =
  'group relative inline-flex items-center justify-center overflow-hidden border px-8 py-4 eyebrow transition-colors duration-500';

const tones = {
  light: 'border-white/30 text-white hover:text-[#0A0A0A]',
  dark: 'border-[#0A0A0A]/25 text-[#0A0A0A] hover:text-[#0A0A0A]',
};

export default function GoldButton({ to, href, children, tone = 'dark', className = '', ...rest }) {
  const inner = (
    <>
      <span
        aria-hidden="true"
        className="absolute inset-0 origin-left scale-x-0 bg-[#C9AF80] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
      />
      <span className="relative z-10">{children}</span>
    </>
  );

  const cls = `${base} ${tones[tone]} ${className}`;

  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>;
  return <button type="button" className={cls} {...rest}>{inner}</button>;
}