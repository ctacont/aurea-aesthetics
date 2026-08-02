import React from 'react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import LocationSection from '@/components/home/LocationSection';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import Eyebrow from '@/components/Eyebrow';
import { useSettings } from '@/lib/useSite';
import { medicalBusinessSchema, breadcrumbSchema } from '@/lib/schema';
import { IMAGES, GEO_AREAS, ARRIVAL } from '@/lib/site';
import { useLanguage } from '@/lib/LanguageContext';

export default function Location() {
  const { settings } = useSettings();
  const { t, lang, neutralPath } = useLanguage();
  const arrival = ARRIVAL[lang];
  const crumbs = [
    { name: t('location.crumbHome'), path: '/' },
    { name: t('location.crumbStandort'), path: '/standort-zuerich-enge' },
  ];

  return (
    <>
      <Seo
        title={t('location.seoTitle')}
        description={t('location.seoDesc')}
        path={neutralPath(window.location.pathname)}
        lang={lang}
        ogImage={IMAGES.zurich}
        jsonLd={[medicalBusinessSchema(settings), breadcrumbSchema(crumbs)]}
      />
      
      <PageHero
        eyebrow={t('location.eyebrow')}
        title={`${settings.street}`}
        accent={`${settings.postal_code} ${settings.city}`}
        lead={t('location.lead', { district: settings.district })}
        image={IMAGES.zurich}
        breadcrumbs={crumbs}
      />

      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal><Eyebrow>{t('location.arrivalEyebrow')}</Eyebrow></Reveal>
          <div className="mt-14 grid border-t border-l border-[#E8E2D9] sm:grid-cols-2">
            {arrival.map((a, i) =>
            <Reveal key={a.label} delay={i * 80} className="h-full">
                <div className="flex h-full min-h-[180px] flex-col justify-center border-b border-r border-[#E8E2D9] px-8 py-12 sm:px-10 text-center">
                  <h2 className="font-heading text-2xl font-light">{a.label}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-600">{a.text}</p>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <LocationSection settings={settings} />

      <section className="bg-background px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal><Eyebrow>{t('location.geoEyebrow')}</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-7 max-w-2xl font-heading text-[2rem] font-light leading-[1.18] md:text-4xl">
              {t('location.geoTitle')}
              <span className="text-[#8A7550]">{t('location.geoAccent')}</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-[#E8E2D9] pt-10">
              {GEO_AREAS.map((a) =>
              <span key={a} className="eyebrow text-neutral-500">{a}</span>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand settings={settings} />
    </>);
}