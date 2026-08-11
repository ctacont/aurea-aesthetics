import React from 'react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import DoctorProfile from '@/components/doctors/DoctorProfile';
import CtaBand from '@/components/CtaBand';
import { useSettings, useDoctors } from '@/lib/useSite';
import { physicianSchema, breadcrumbSchema } from '@/lib/schema';
import { IMAGES } from '@/lib/site';
import { useLanguage } from '@/lib/LanguageContext';

export default function Aerztinnen() {
  const { settings } = useSettings();
  const { data: doctors = [] } = useDoctors();
  const { t, lang, neutralPath } = useLanguage();

  const sorted = [...doctors].sort((a, b) => (a.order || 0) - (b.order || 0));
  const quotes = {
    'Barbara Matziris': t('aerztinnen.quoteBarbara'),
    'Nadine Dovi-Akué': t('aerztinnen.quoteNadine'),
    'Nadine Dovi-Akue': t('aerztinnen.quoteNadine'),
  };

  const crumbs = [
    { name: t('aerztinnen.crumbHome'), path: '/' },
    { name: t('aerztinnen.crumbAerztinnen'), path: '/aerztinnen' },
  ];

  return (
    <>
      <Seo
        title={t('aerztinnen.seoTitle')}
        description={t('aerztinnen.seoDesc')}
        path={neutralPath(window.location.pathname)}
        lang={lang}
        ogImage={sorted[0]?.photo_url || IMAGES.practice}
        jsonLd={[...sorted.map((d) => physicianSchema(d)), breadcrumbSchema(crumbs)]}
      />

      <PageHero
        eyebrow={t('aerztinnen.eyebrow')}
        title={t('aerztinnen.title')}
        lead={t('aerztinnen.lead')}
        image={IMAGES.practice}
        breadcrumbs={crumbs}
      />

      {sorted.map((doc, i) => (
        <DoctorProfile key={doc.id} doctor={doc} quote={quotes[doc.name]} reversed={i % 2 === 1} />
      ))}

      <CtaBand settings={settings} />
    </>
  );
}