import React from 'react';
import { Image } from '@/components/ui/image';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import useParallax from '@/hooks/useParallax';
import { IMAGES } from '@/lib/site';
import { useLanguage } from '@/lib/LanguageContext';

export default function Philosophy() {
  const { t } = useLanguage();
  const { ref: parallaxRef, offset } = useParallax(0.12);

  return (
    <section className="bg-[#F4F1EE] px-6 py-24 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>{t('philosophy.eyebrow')}</Eyebrow>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-8 font-heading text-[2.1rem] font-light leading-[1.15] md:text-5xl max-w-6xl transition-all ease-[cubic-bezier(0.16,1,0.3,1)] opacity-100 translate-x-0 duration-[3300ms]">
            {t('philosophy.title')}
            <span className="text-[#8A7550]">{t('philosophy.accent')}</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal delay={140} className="lg:col-span-5">
            <div ref={parallaxRef} className="group relative aspect-[4/5] w-full overflow-hidden">
              <div style={{ transform: `translateY(${offset}px) scale(1.15)` }} className="h-full w-full hasan1">
                <Image
                  src={IMAGES.texture}
                  alt={t('philosophy.alt')}
                  className="h-full w-full transition-transform duration-700 group-hover:scale-[1.03]"
                  fittingType="fill" />
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:pt-6">
            <Reveal delay={200}>
              <p className="text-lg leading-[1.75] text-neutral-700">
                {t('philosophy.body')}
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-12 border-l border-[#C9AF80] pl-8">
                <p className="font-heading text-2xl font-light leading-snug text-neutral-800 md:text-3xl">
                  {t('philosophy.quote')}
                </p>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-12 grid gap-10 sm:grid-cols-2">
                <div>
                  <p className="eyebrow text-[#8A7550]">{t('philosophy.restraint')}</p>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-neutral-600">
                    {t('philosophy.restraintText')}
                  </p>
                </div>
                <div>
                  <p className="eyebrow text-[#8A7550]">{t('philosophy.precision')}</p>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-neutral-600">
                    {t('philosophy.precisionText')}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}