import React from 'react';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import { PROCESS } from '@/lib/site';
import { useLanguage } from '@/lib/LanguageContext';

export default function Process() {
  const { t, lang } = useLanguage();
  const items = PROCESS[lang];

  return (
    <section className="overflow-hidden px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-6xl">

        <Reveal
          delay={100}
          className="-translate-x-[45%] duration-[1800ms]"
        >
          <Eyebrow>
            {t('process.eyebrow')}
          </Eyebrow>
        </Reveal>

        <Reveal
          delay={220}
          className="translate-x-[40%] scale-[0.97] duration-[2200ms]"
        >
          <h2 className="mt-7 max-w-5xl font-heading text-[2.1rem] font-light leading-[1.15] md:text-5xl">
            {t('process.title')}

            <span className="text-[#8A7550]">
              {t('process.accent')}
            </span>
          </h2>
        </Reveal>

        <ol className="mt-20 space-y-px">
          {items.map((s, i) => {
            const fromLeft = i % 2 === 0;

            const rowSlideClass = fromLeft
              ? '-translate-x-[45%] translate-y-[8%] scale-[0.97]'
              : 'translate-x-[45%] -translate-y-[8%] scale-[0.97]';

            const innerSlideClass = fromLeft
              ? '-translate-x-[12%]'
              : 'translate-x-[12%]';

            return (
              <Reveal
                key={s.n}
                delay={300 + i * 180}
                className={`${rowSlideClass} duration-[2400ms]`}
              >
                <li className="group grid gap-4 border-t border-[#E8E2D9] py-10 md:grid-cols-12 md:gap-8 md:py-12">

                  <Reveal
                    delay={420 + i * 180}
                    className={`${innerSlideClass} duration-[1700ms]`}
                  >
                    <span className="block font-heading text-3xl font-light text-[#8A7550] md:col-span-2">
                      {s.n}
                    </span>
                  </Reveal>

                  <Reveal
                    delay={520 + i * 180}
                    className={`${innerSlideClass} duration-[1800ms] md:col-span-4`}
                  >
                    <h3 className="font-heading text-2xl font-light md:text-3xl">
                      {s.title}
                    </h3>
                  </Reveal>

                  <Reveal
                    delay={620 + i * 180}
                    className={`${innerSlideClass} duration-[1900ms] md:col-span-6`}
                  >
                    <p className="text-[0.95rem] leading-relaxed text-neutral-600">
                      {s.text}
                    </p>
                  </Reveal>

                </li>
              </Reveal>
            );
          })}
        </ol>

        <Reveal
          delay={400}
          className="-translate-x-[25%] duration-[1800ms]"
        >
          <div className="border-t border-[#E8E2D9]" />
        </Reveal>

      </div>
    </section>
  );
}