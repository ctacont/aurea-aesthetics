import React from 'react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import PrecisionAccordion from '@/components/PrecisionAccordion';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import { useSettings } from '@/lib/useSite';
import { faqSchema, breadcrumbSchema } from '@/lib/schema';
import { GENERAL_FAQS, IMAGES } from '@/lib/site';

export default function Faq() {
  const { settings } = useSettings();
  const crumbs = [{ name: 'Startseite', path: '/' }, { name: 'Häufige Fragen', path: '/faq' }];

  return (
    <>
      <Seo
        title="Häufige Fragen | Ästhetische Medizin Zürich | Aurea Aesthetics"
        description="Antworten zu Beratung, Ablauf, Kosten, Ergebnissen und Diskretion bei ästhetisch-medizinischen Behandlungen in Zürich Enge."
        path="/faq"
        jsonLd={[faqSchema(GENERAL_FAQS), breadcrumbSchema(crumbs)]}
      />
      <PageHero
        eyebrow="Häufige Fragen"
        title="Was Sie"
        accent="wissen sollten."
        lead="Antworten auf die Fragen, die uns am häufigsten gestellt werden."
        image={IMAGES.texture}
        breadcrumbs={crumbs}
      />

      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <PrecisionAccordion items={GENERAL_FAQS} />
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-14 text-xs leading-relaxed text-neutral-500">
              Diese Angaben dienen der allgemeinen Information und ersetzen kein persönliches
              Arztgespräch. Individuelle Eignung, Risiken und Kosten werden ausschliesslich im
              Rahmen einer medizinischen Beratung besprochen.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand settings={settings} />
    </>
  );
}