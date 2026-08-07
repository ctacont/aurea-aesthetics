import React from 'react';

export default function Eyebrow({ children, tone = 'dark', className = '' }) {
  const color = tone === 'light' ? 'text-white/50' : 'text-neutral-500';
  return (
    <div className={`eyebrow flex items-center gap-3 ${color} ${className}`}>
      <span className="h-px w-6 bg-[#C9AF80]" aria-hidden="true" />
      <span className="text-[hsl(var(--popover-foreground))]">{children}</span>
    </div>);

}