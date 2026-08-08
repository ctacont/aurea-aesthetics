import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { useLanguage } from '@/lib/LanguageContext';

export default function PrecisionAccordion({
  items,
  reviewer,
  tone = 'dark'
}) {
  const [open, setOpen] = useState(null);
  const light = tone === 'light';
  const { t } = useLanguage();

  return (
    <div
      className={
        light
          ? 'border-t border-white/10'
          : 'border-t border-[#EDE7DE]'
      }
    >
      {items.map((item, i) => {
        const q = item.q || item.question;
        const a = item.a || item.answer;
        const isOpen = open === i;

        return (
          <Reveal
            key={q}
            delay={180 + i * 180}
            className="translate-y-[35%] duration-[1800ms]"
          >
            <div
              className={
                light
                  ? 'border-b border-white/10'
                  : 'border-b border-[#EDE7DE]'
              }
            >
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

              <div
                className={`grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isOpen
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pb-9">
                    <p
                      className={`leading-[1.85] ${
                        light
                          ? 'text-white/60'
                          : 'text-neutral-600'
                      }`}
                    >
                      {a}
                    </p>

                    {reviewer && (
                      <p
                        className={`mt-6 eyebrow ${
                          light
                            ? 'text-white/30'
                            : 'text-neutral-400'
                        }`}
                      >
                        {t('accordion.medicalReviewer', {
                          reviewer
                        })}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}