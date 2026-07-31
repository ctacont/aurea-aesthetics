import React from 'react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import Pillars from '@/components/home/Pillars';
import Process from '@/components/home/Process';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import Eyebrow from '@/components/Eyebrow';
import { Image } from '@/components/ui/image';
import { useSettings } from '@/lib/useSite';
import { breadcrumbSchema } from '@/lib/schema';
import { IMAGES } from '@/lib/site';
import { useLanguage } from '@/lib/LanguageContext';

export default function Experience() {
  const { settings } = useSettings();
  const { t, lang, neutralPath } = useLanguage();
  const crumbs = [
    { name: t('experience.crumbHome'), path: '/' },
    { name: t('experience.crumbExperience'), path: '/experience' },
  ];

  return (
    <>
      <Seo
        title={t('experience.seoTitle')}
        description={t('experience.seoDesc')}
        path={neutralPath(window.location.pathname)}
        lang={lang}
        jsonLd={breadcrumbSchema(crumbs)}
      />
      <PageHero
        eyebrow={t('experience.eyebrow')}
        title={t('experience.title')}
        accent={t('experience.accent')}
        lead={t('experience.lead')}
        image={IMAGES.experience}
        breadcrumbs={crumbs}
      />

      <section className="relative w-full min-h-[55svh] lg:min-h-[70svh]">
        <Image src={IMAGES.bio} alt={t('experience.envAlt')} className="h-full w-full" fittingType="fill" />

        <div className="absolute z-20 left-6 md:left-12 lg:left-16 xl:left-24 bottom-0 w-full p-6 md:top-1/2 md:-translate-y-1/2 md:w-auto md:max-w-lg md:bg-black/25 md:border md:border-white/15 md:backdrop-blur-xl md:backdrop-saturate-150 md:p-12 bg-black/35 border-t border-white/15 backdrop-blur-xl">
          <Reveal delay={80}><Eyebrow tone="light">{t('experience.envEyebrow')}</Eyebrow></Reveal>
          <Reveal delay={140}>
            <h2 className="mt-7 font-heading text-[2rem] font-light leading-[1.18] text-white md:text-4xl">
              {t('experience.envTitle')}
              <span className="text-[#C9AF80]">{t('experience.envAccent')}</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 space-y-6 text-lg leading-[1.75] text-white/75">
              <p>{t('experience.envP1')}</p>
              <p>{t('experience.envP2')}</p>
              <p>{t('experience.envP3')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <Pillars />
      <Process />
      <CtaBand settings={settings} />
    </>
  );
}