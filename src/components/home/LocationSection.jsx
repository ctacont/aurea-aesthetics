import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import { IMAGES, GEO_AREAS } from '@/lib/site';
import { useLanguage } from '@/lib/LanguageContext';

export default function LocationSection({ settings }) {
  const { t, langPath } = useLanguage();

  return (
    <section className="relative w-full min-h-[55svh] lg:min-h-[70svh]">
      <Image
        src={IMAGES.zurich}
        alt={t('locationSection.alt')}
        className="h-full w-full"
        fittingType="fill"
      />

      <div className="absolute z-10 inset-0 pointer-events-none" />

      <div className="absolute z-20 left-6 md:left-12 lg:left-16 xl:left-24 bottom-0 w-full p-6 md:top-1/2 md:-translate-y-1/2 md:w-auto md:max-w-lg md:bg-black/25 md:border md:border-white/15 md:backdrop-blur-xl md:backdrop-saturate-150 md:p-12 bg-black/35 border-t border-white/15 backdrop-blur-xl">
        <Reveal><Eyebrow tone="light">{t('locationSection.eyebrow')}</Eyebrow></Reveal>
        <Reveal delay={80}>
          <h2 className="mt-7 font-heading text-[2.1rem] font-light leading-[1.15] text-white md:text-5xl">
            {settings.street},
            <span className="text-[#C9AF80]"> {settings.district}.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-8 max-w-lg text-[0.98rem] leading-relaxed text-white/75">
            {t('locationSection.lead', { street: settings.street, plz: settings.postal_code, city: settings.city })}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="eyebrow text-[#C9AF80]">{t('locationSection.arrival')}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                {t('locationSection.arrivalText')}
              </p>
            </div>
            <div>
              <p className="eyebrow text-[#C9AF80]">{t('locationSection.appointments')}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                {settings.opening_hours || t('locationSection.appointmentsFallback')}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-12 border-t border-white/15 pt-8">
            <p className="eyebrow text-white/50">{t('locationSection.geoArea')}</p>
            <p className="mt-4 max-w-lg text-xs leading-relaxed text-white/60">
              {GEO_AREAS.join(' · ')}
            </p>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <Link to={langPath('/standort-zuerich-enge')} className="mt-10 inline-block eyebrow text-white/80 hover:text-white link-underline">
            {t('locationSection.link')}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}