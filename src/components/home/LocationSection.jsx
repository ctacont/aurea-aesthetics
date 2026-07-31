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
    <section className="grid lg:grid-cols-2">
      <Reveal className="order-2 lg:order-1">
        <div className="w-full lg:h-full h-[35svh] relative lg:min-h-[35rem]">
          <Image
            src={IMAGES.zurich}
            alt={t('locationSection.alt')}

            fittingType="fill" className="w-full inset-0 absolute object-cover h-full" />
          
        </div>
      </Reveal>

      <div className="relative z-10 order-1 flex flex-col justify-center px-6 py-6 lg:order-2 lg:-ml-14 lg:my-14 lg:shadow-[0_24px_70px_rgba(0,0,0,0.08)] bg-[#FFFFFF] border border-[#E8E2D9] lg:w-fit lg:px-6 lg:py-6">
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
    </section>);

}