import React from 'react';
import { Link } from 'react-router-dom';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import { IMAGES, GEO_AREAS } from '@/lib/site';
import { useLanguage } from '@/lib/LanguageContext';

export default function LocationSection({ settings }) {
  const { t, langPath } = useLanguage();

  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${IMAGES.zurich})` }}>
      
      <div className="relative z-10 max-w-6xl px-6 lg:px-12 ml-auto py-18 lg:py-1">
        <div className="flex flex-col justify-center px-6 py-6 lg:w-fit lg:px-6 lg:py-6 bg-[#FFFFFF] border border-[#E8E2D9] lg:shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
          <Reveal><Eyebrow>{t('locationSection.eyebrow')}</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-7 font-heading text-[2.1rem] font-light leading-[1.15] md:text-5xl">
              {settings.street},
              <span className="text-[#8A7550]"> {settings.district}.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 max-w-lg text-[0.98rem] leading-relaxed text-neutral-600">
              {t('locationSection.lead', { street: settings.street, plz: settings.postal_code, city: settings.city })}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="eyebrow text-[#8A7550]">{t('locationSection.arrival')}</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {t('locationSection.arrivalText')}
                </p>
              </div>
              <div>
                <p className="eyebrow text-[#8A7550]">{t('locationSection.appointments')}</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {settings.opening_hours || t('locationSection.appointmentsFallback')}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-12 border-t border-[#E8E2D9] pt-8">
              <p className="eyebrow text-neutral-400">{t('locationSection.geoArea')}</p>
              <p className="mt-4 max-w-lg text-xs leading-relaxed text-neutral-500">
                {GEO_AREAS.join(' · ')}
              </p>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <Link to={langPath('/standort-zuerich-enge')} className="mt-10 inline-block eyebrow link-underline">
              {t('locationSection.link')}
            </Link>
          </Reveal>
        </div>
      </div>
    </section>);

}