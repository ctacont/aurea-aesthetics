import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/Reveal';
import { useLanguage, loc } from '@/lib/LanguageContext';
import { useBooking } from '@/hooks/useBooking';

export default function CategorySection({ section, categoryPath, index = 0 }) {
  const { t, lang, langPath } = useLanguage();
  const { handleBook } = useBooking();
  const title = loc(section, 'title', lang);
  const lead = loc(section, 'lead', lang);
  const goals = lang === 'en' ? section.goals_en : section.goals_de;
  const duration = lang === 'en' ? section.duration_en : section.duration_de;

  return (
    <div id={section.id} className="scroll-mt-28 px-6 py-16 lg:px-12 lg:py-20 border-t">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <span className="font-heading text-4xl font-light text-[#8A7550]">{String(index + 1).padStart(2, '0')}</span>
          </Reveal>
          <Reveal delay={70}>
            <h3 className="mt-4 font-heading text-3xl font-light leading-tight">{title}</h3>
          </Reveal>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={140}>
            <p className="text-lg leading-[1.75] text-neutral-700">{lead}</p>

            {goals?.length > 0 &&
            <ul className="mt-6 space-y-2.5">
                {goals.map((g) =>
              <li key={g} className="flex gap-3 text-[0.95rem] leading-relaxed text-neutral-700">
                    <span className="mt-2 h-px w-4 shrink-0 bg-[#C9AF80]" aria-hidden="true" />
                    {g}
                  </li>
              )}
              </ul>
            }

            {duration && <p className="eyebrow mt-7 text-[#8A7550]">{t('categoryPage.durationLabel')}: {duration}</p>}

            <div className="mt-6 border-l-2 border-[#C9AF80] bg-[#F4F1EE] p-4 text-sm leading-relaxed text-neutral-600">
              {t('categoryPage.noteText')}
            </div>
          </Reveal>

          <Reveal delay={210}>
            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-2">
              <button onClick={handleBook} data-booking-cta="true" className="eyebrow link-underline">
                {t('categoryPage.ctaRequest')}
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </div>);

}