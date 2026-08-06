import React from 'react';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import { PILLARS } from '@/lib/site';
import { useLanguage } from '@/lib/LanguageContext';

export default function Pillars() {
  const { t, lang } = useLanguage();
  const items = PILLARS[lang];

  return (
    <section className="bg-[#F8F6F3] px-6 py-24 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal><Eyebrow>{t('pillars.eyebrow')}</Eyebrow></Reveal>
        <Reveal delay={80}>
          <h2 className="mt-7 font-heading text-[2.1rem] font-light leading-[1.15] md:text-5xl max-w-6xl">
            {t('pillars.title')}
            <span className="text-[#8A7550]">{t('pillars.accent')}</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-8 max-w-xl text-[0.98rem] leading-relaxed text-neutral-600">
            {t('pillars.lead')}
          </p>
        </Reveal>

        <ol className="mt-20">
          {items.map((p, i) =>
          <Reveal key={p.title} delay={Math.min(i * 80, 320)}>
              <li className="relative py-10 md:py-14">
                <div className="border-grow absolute left-0 top-0 w-full border-t border-[#E8E2D9]" aria-hidden="true" />
                <div className="grid items-baseline gap-4 md:grid-cols-12 md:gap-10">
                  <span className="font-heading text-4xl font-light leading-none text-[#C9AF80] md:col-span-2 md:text-5xl">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading text-2xl font-light md:col-span-4 md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="max-w-lg text-[0.95rem] leading-relaxed text-neutral-600 md:col-span-6">
                    {p.text}
                  </p>
                </div>
              </li>
            </Reveal>
          )}
        </ol>
        <div className="border-t border-[#E8E2D9]" />
      </div>
    </section>);

}