import React from 'react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Eyebrow from '@/components/Eyebrow';
import DoctorSection from '@/components/home/DoctorSection';
import CtaBand from '@/components/CtaBand';
import { Image } from '@/components/ui/image';
import { useSettings, useDoctors } from '@/lib/useSite';
import { breadcrumbSchema } from '@/lib/schema';
import { IMAGES, VALUES } from '@/lib/site';
import { useLanguage } from '@/lib/LanguageContext';

export default function Practice() {
  const { settings } = useSettings();
  const { data: doctors = [] } = useDoctors();
  const { t, lang, neutralPath } = useLanguage();
  const values = VALUES[lang];

  const crumbs = [
    { name: t('practice.crumbHome'), path: '/' },
    { name: t('practice.crumbPraxis'), path: '/praxis' },
  ];

  return (
    <>
      <Seo
        title={t('practice.seoTitle')}
        description={t('practice.seoDesc')}
        path={neutralPath(window.location.pathname)}
        lang={lang}
        jsonLd={breadcrumbSchema(crumbs)}
      />
      
      <PageHero
        eyebrow={t('practice.eyebrow', { name: settings.practice_name })}
        title={t('practice.title')}
        accent={t('practice.accent')}
        lead={t('practice.lead', { street: settings.street, district: settings.district })}
        image={IMAGES.practice}
        breadcrumbs={crumbs}
      />

      <section className="relative w-full min-h-[55svh] lg:min-h-[65svh]">
        <Image src={IMAGES.hero} alt={t('practice.selfAlt')} className="h-full w-full" fittingType="fill" />

        <div className="absolute z-20 left-6 md:left-12 lg:left-16 xl:left-24 bottom-0 w-full p-6 md:top-1/2 md:-translate-y-1/2 md:w-auto md:max-w-lg md:bg-black/25 md:border md:border-white/15 md:backdrop-blur-xl md:backdrop-saturate-150 md:p-12 bg-black/35 border-t border-white/15 backdrop-blur-xl">
          <Reveal><Eyebrow tone="light">{t('practice.selfEyebrow')}</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-7 font-heading text-[2rem] font-light leading-[1.18] text-white md:text-4xl">
              {t('practice.selfTitle')}
              <span className="text-[#C9AF80]">{t('practice.selfAccent')}</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-10 space-y-6 text-lg leading-[1.75] text-white/75">
              <p>{t('practice.selfP1')}</p>
              <p>{t('practice.selfP2')}</p>
              <p>{t('practice.selfP3')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F4F1EE] px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal><Eyebrow>{t('practice.valuesEyebrow')}</Eyebrow></Reveal>
          <div className="mt-14 grid border-t border-l border-[#E8E2D9] sm:grid-cols-2">
            {values.map((v, i) =>
            <Reveal key={v.title} delay={i * 80}>
                <div className="flex min-h-[220px] flex-col justify-center border-b border-r border-[#E8E2D9] px-8 py-12 sm:px-10 text-center">
                  <h3 className="font-heading text-2xl font-light">{v.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-600">{v.text}</p>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <DoctorSection doctors={doctors} />
      <CtaBand settings={settings} />
    </>);
}