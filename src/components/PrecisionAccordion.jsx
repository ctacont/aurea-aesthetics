import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export default function PrecisionAccordion({ items, reviewer, tone = 'dark' }) {
  const [open, setOpen] = useState(null);
  const light = tone === 'light';

  return (
    <div className={light ? 'border-t border-white/10' : 'border-t border-[#EDE7DE]'}>
      {items.map((item, i) => {
        const q = item.q || item.question;
        const a = item.a || item.answer;
        const isOpen = open === i;
        return (
          <div key={q} className={light ? 'border-b border-white/10' : 'border-b border-[#EDE7DE]'}>
            <h3>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-6 py-9 text-left"
              >
                <span
                  className={`font-heading text-xl font-light leading-snug md:text-2xl ${
                    light ? 'text-white' : 'text-neutral-900'
                  }`}
                >
                  {q}
                </span>
                <Plus
                  className={`mt-1 h-5 w-5 shrink-0 text-[#C9AF80] transition-transform duration-500 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                  strokeWidth={1}
                />
              </button>
            </h3>
            <div
              className={`grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="max-w-2xl pb-8 pr-10">
                  <p className={`leading-[1.85] ${light ? 'text-white/60' : 'text-neutral-600'}`}>
                    {a}
                  </p>
                  {reviewer && (
                    <p className={`mt-6 eyebrow ${light ? 'text-white/30' : 'text-neutral-400'}`}>
                      Medizinisch geprüft · {reviewer}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}