import React from 'react';

export default function Eyebrow({ children, tone = 'dark', className = '' }) {
  const color = tone === 'light' ? 'text-white/50' : 'text-neutral-500';
  return (
    <div className={`eyebrow flex items-center gap-3 duration-[2300ms] ease-[cubic-bezier(0.16,1,0.3,1)] opacity-100 translate-x-0 ${color} ${className}`}>
      <span className="h-px w-6 bg-[#C9AF80]" aria-hidden="true" />
      <span className="text-[hsl(var(--accent))]">{children}</span>
    </div>);

}