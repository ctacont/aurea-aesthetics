import React from 'react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import Pillars from '@/components/home/Pillars';
import ExperienceJourney from '@/components/experience/ExperienceJourney';
import CtaBand from '@/components/CtaBand';
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

      <ExperienceJourney />

      <Pillars />
      <CtaBand settings={settings} />
    </>
  );
}
