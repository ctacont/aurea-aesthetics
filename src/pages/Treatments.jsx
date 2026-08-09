import React from 'react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import TreatmentCard from '@/components/TreatmentCard';
import CtaBand from '@/components/CtaBand';
import { useSettings, useTreatments } from '@/lib/useSite';
import { breadcrumbSchema, medicalBusinessSchema } from '@/lib/schema';
import { IMAGES, TREATMENT_GROUPS } from '@/lib/site';
import { useLanguage } from '@/lib/LanguageContext';

export default function Treatments() {
  const { settings } = useSettings();
  const { data: treatments = [], isLoading } = useTreatments();
  const { t, lang, neutralPath } = useLanguage();
  const groups = TREATMENT_GROUPS[lang];

  const crumbs = [
    { name: t('treatmentsPage.crumbHome'), path: '/' },
    { name: t('treatmentsPage.crumbTreatments'), path: '/behandlungen' },
  ];

  return (
    <>
      <Seo
        title={t('treatmentsPage.seoTitle')}
        description={t('treatmentsPage.seoDesc')}
        path={neutralPath(window.location.pathname)}
        lang={lang}
        ogImage={IMAGES.editorialPortrait}
        jsonLd={[medicalBusinessSchema(settings), breadcrumbSchema(crumbs)]}
      />
      
      <PageHero
        eyebrow={t('treatmentsPage.eyebrow')}
        title={t('treatmentsPage.title')}
        accent={t('treatmentsPage.accent')}
        lead={t('treatmentsPage.lead')}
        image={IMAGES.editorialPortrait}
        breadcrumbs={crumbs}
      />

      <div className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-6xl space-y-28">
          {isLoading && <p className="eyebrow text-neutral-600">{t('treatmentsPage.loading')}</p>}

          {groups.map((g) => {
            const items = treatments.filter((tr) => tr.category === g.key);
            if (!items.length) return null;
            return (
              <section key={g.key}>
                <Reveal>
                  <div className="border-t border-[#E8E2D9] pt-8">
                    <p className="treatment-category-label">{g.label}</p>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-neutral-600">
                      {g.text}
                    </p>
                  </div>
                </Reveal>
                <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((tr, i) =>
                  <Reveal key={tr.id} delay={i * 70}>
                      <TreatmentCard treatment={tr} />
                    </Reveal>
                  )}
                </div>
              </section>);
          })}
        </div>
      </div>

      <CtaBand settings={settings} />
    </>);
}
