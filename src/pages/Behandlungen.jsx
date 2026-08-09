import React from 'react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import StickyCategoryNav from '@/components/behandlungen/StickyCategoryNav';
import TreatmentSpectrum from '@/components/behandlungen/TreatmentSpectrum';
import CategoryChapter from '@/components/behandlungen/CategoryChapter';
import TreatmentEditorial from '@/components/behandlungen/TreatmentEditorial';
import CategorySection from '@/components/treatment/CategorySection';
import ConsultationSection from '@/components/behandlungen/ConsultationSection';
import CtaBand from '@/components/CtaBand';
import { useSettings } from '@/lib/useSite';
import { breadcrumbSchema, medicalBusinessSchema } from '@/lib/schema';
import { CATEGORIES } from '@/lib/categoryContent';
import { SUB_TREATMENTS } from '@/lib/subTreatments';
import { IMAGES } from '@/lib/site';
import { useLanguage } from '@/lib/LanguageContext';

const CATEGORY_LIST = Object.values(CATEGORIES);

export default function Behandlungen() {
  const { settings } = useSettings();
  const { t, lang, neutralPath } = useLanguage();

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
        jsonLd={[medicalBusinessSchema(settings), breadcrumbSchema(crumbs)]}
      />

      <PageHero
        eyebrow={t('treatmentsPage.eyebrow')}
        title={t('treatmentsPage.title')}
        accent={t('treatmentsPage.accent')}
        lead={t('treatmentsPage.lead')}
        image={IMAGES.experience}
        breadcrumbs={crumbs}
      />

      <StickyCategoryNav categories={CATEGORY_LIST} />

      <TreatmentSpectrum />

      {CATEGORY_LIST.map((category, ci) => (
        <React.Fragment key={category.slug}>
          <CategoryChapter category={category} index={ci} />

          {category.sections.map((section, si) => {
            const full = section.subSlug && SUB_TREATMENTS[section.subSlug];

            return full ? (
              <TreatmentEditorial
                key={section.id}
                data={full}
                index={si}
              />
            ) : (
              <CategorySection
                key={section.id}
                section={section}
                index={si}
              />
            );
          })}
        </React.Fragment>
      ))}

      <ConsultationSection />
      <CtaBand settings={settings} />
    </>
  );
}
