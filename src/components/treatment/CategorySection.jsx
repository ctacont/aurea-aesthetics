import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage, loc } from '@/lib/LanguageContext';
import { useBooking } from '@/hooks/useBooking';

export default function CategorySection({ section, index = 0 }) {
  const { t, lang } = useLanguage();
  const { handleBook } = useBooking();
  const shouldReduceMotion = useReducedMotion();
  const title = loc(section, 'title', lang);
  const lead = loc(section, 'lead', lang);
  const goals = lang === 'en' ? section.goals_en : section.goals_de;
  const duration = lang === 'en' ? section.duration_en : section.duration_de;

  return (
    <motion.div
      id={section.id}
      initial={shouldReduceMotion ? false : { opacity: 0.25, y: 54 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.22 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className="relative scroll-mt-28 overflow-hidden px-6 py-16 lg:px-12 lg:py-20">
      <motion.div
        initial={shouldReduceMotion ? false : { scaleX: 0 }}
        whileInView={shouldReduceMotion ? undefined : { scaleX: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-6 top-0 h-px origin-left bg-[#E8E2D9] lg:inset-x-12"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: -52 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.45 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <span className="font-heading text-4xl font-light text-[#8A7550]">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="mt-4 font-heading text-3xl font-light leading-tight">{title}</h3>
        </motion.div>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: 58 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.95, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 lg:col-start-7">
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

            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-2">
              <button onClick={handleBook} data-booking-cta="true" className="eyebrow link-underline">
                {t('categoryPage.ctaRequest')}
              </button>
            </div>
        </motion.div>
      </div>
    </motion.div>);

}
