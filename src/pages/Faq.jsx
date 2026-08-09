import React from 'react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import PrecisionAccordion from '@/components/PrecisionAccordion';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import { useSettings } from '@/lib/useSite';
import { faqSchema, breadcrumbSchema, medicalBusinessSchema } from '@/lib/schema';
import { GENERAL_FAQS, IMAGES } from '@/lib/site';
import { useLanguage } from '@/lib/LanguageContext';

export default function Faq() {
  const { settings } = useSettings();
  const { t, lang, neutralPath } = useLanguage();
  const faqs = GENERAL_FAQS[lang];
  const crumbs = [
    { name: t('faq.crumbHome'), path: '/' },
    { name: t('faq.crumbFaq'), path: '/faq' },
  ];

  return (
    <>
      <Seo
        title={t('faq.seoTitle')}
        description={t('faq.seoDesc')}
        path={neutralPath(window.location.pathname)}
        lang={lang}
        ogImage={IMAGES.editorialPortrait}
        jsonLd={[faqSchema(faqs), breadcrumbSchema(crumbs), medicalBusinessSchema(settings)]}
      />
      <PageHero
        eyebrow={t('faq.eyebrow')}
        title={t('faq.title')}
        accent={t('faq.accent')}
        lead={t('faq.lead')}
        image={IMAGES.editorialPortrait}
        breadcrumbs={crumbs}
      />

      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <PrecisionAccordion items={faqs} />
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-14 text-xs leading-relaxed text-neutral-500">
              {t('faq.disclaimer')}
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand settings={settings} />
    </>
  );
}
