import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Eyebrow from '@/components/Eyebrow';
import FactGrid from '@/components/treatment/FactGrid';
import TextBlock from '@/components/treatment/TextBlock';
import PrecisionAccordion from '@/components/PrecisionAccordion';
import CtaBand from '@/components/CtaBand';
import TreatmentCard from '@/components/TreatmentCard';
import { useSettings, useTreatments } from '@/lib/useSite';
import { treatmentSchema, breadcrumbSchema } from '@/lib/schema';

export default function TreatmentDetail() {
  const { slug } = useParams();
  const { settings } = useSettings();
  const { data: treatments = [], isLoading } = useTreatments();

  const t = treatments.find((x) => x.slug === slug);
  const related = treatments.filter((x) => x.slug !== slug).slice(0, 3);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A]">
        <div className="h-6 w-6 animate-spin rounded-full border border-white/20 border-t-[#C9AF80]" />
      </div>
    );
  }

  if (!t) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#0A0A0A] px-6 text-center text-white">
        <Seo title="Behandlung nicht gefunden" noindex path={`/behandlungen/${slug}`} />
        <h1 className="font-heading text-4xl font-light">Behandlung nicht gefunden</h1>
        <Link to="/behandlungen" className="mt-8 eyebrow text-[#C9AF80] link-underline">
          Zur Behandlungsübersicht
        </Link>
      </div>
    );
  }

  const crumbs = [
    { name: 'Startseite', path: '/' },
    { name: 'Behandlungen', path: '/behandlungen' },
    { name: t.title_de, path: `/behandlungen/${t.slug}` },
  ];

  return (
    <>
      <Seo
        title={t.meta_title_de || `${t.title_de} Zürich | Aurea Aesthetics`}
        description={t.meta_description_de || t.lead_de}
        path={`/behandlungen/${t.slug}`}
        jsonLd={[treatmentSchema(t), breadcrumbSchema(crumbs)]}
      />

      <PageHero
        eyebrow={`Behandlung · ${settings.district}`}
        title={t.title_de}
        lead={t.lead_de}
        image={t.image_url}
        breadcrumbs={crumbs}
      />

      <FactGrid treatment={t} />

      {t.indications?.length > 0 && (
        <section className="bg-[#F4F1EE] px-6 py-20 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow>Anwendungsbereiche</Eyebrow>
                <h2 className="mt-6 font-heading text-[1.8rem] font-light leading-tight md:text-4xl">
                  Wofür diese Behandlung geeignet ist
                </h2>
              </Reveal>
            </div>
            <Reveal delay={100} className="lg:col-span-8">
              <ul className="grid gap-5 sm:grid-cols-2">
                {t.indications.map((ind) => (
                  <li key={ind} className="flex gap-4 border-b border-neutral-300 pb-5 text-[0.98rem] leading-relaxed text-neutral-700">
                    <span className="mt-3 h-px w-5 shrink-0 bg-[#C9AF80]" aria-hidden="true" />
                    {ind}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      )}

      {t.mechanism_de && (
        <TextBlock eyebrow="Wirkweise" title="Wie die Behandlung wirkt" body={t.mechanism_de} tone="dark" />
      )}

      {t.detail_image_url && (
        <Reveal>
          <div className="relative h-[50svh] w-full lg:h-[75svh]">
            <Image src={t.detail_image_url} alt={t.title_de} className="h-full w-full" fittingType="fill" />
          </div>
        </Reveal>
      )}

      {t.procedure_de && (
        <TextBlock eyebrow="Ablauf" title="Der Behandlungsablauf" body={t.procedure_de} />
      )}

      {t.aftercare_de && (
        <TextBlock eyebrow="Nachsorge" title="Nach der Behandlung" body={t.aftercare_de} tone="dark" />
      )}

      {(t.risks_de || t.contraindications_de) && (
        <section className="bg-[#F4F1EE] px-6 py-20 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
            {t.risks_de && (
              <Reveal>
                <p className="eyebrow text-[#8A7550]">Risiken und Nebenwirkungen</p>
                <p className="mt-6 whitespace-pre-line text-[0.98rem] leading-[1.75] text-neutral-700">
                  {t.risks_de}
                </p>
              </Reveal>
            )}
            {t.contraindications_de && (
              <Reveal delay={100}>
                <p className="eyebrow text-[#8A7550]">Gegenanzeigen</p>
                <p className="mt-6 whitespace-pre-line text-[0.98rem] leading-[1.75] text-neutral-700">
                  {t.contraindications_de}
                </p>
              </Reveal>
            )}
            <div className="lg:col-span-2">
              <Reveal delay={160}>
                <p className="border-t border-neutral-300 pt-8 text-xs leading-relaxed text-neutral-500">
                  Diese Informationen dienen der allgemeinen Aufklärung und ersetzen kein persönliches
                  Arztgespräch. Ob eine Behandlung für Sie geeignet ist, wird ausschliesslich im Rahmen
                  einer individuellen medizinischen Beratung festgestellt.
                  {t.medical_reviewer && ` Medizinisch geprüft durch ${t.medical_reviewer}.`}
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {t.faqs?.length > 0 && (
        <section className="bg-background px-6 py-24 lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow>Fragen zur Behandlung</Eyebrow>
                <h2 className="mt-6 font-heading text-[1.8rem] font-light leading-tight md:text-4xl">
                  Häufige Fragen
                </h2>
              </Reveal>
            </div>
            <Reveal delay={100} className="lg:col-span-8">
              <PrecisionAccordion items={t.faqs} reviewer={t.medical_reviewer} />
            </Reveal>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="bg-[#F4F1EE] px-6 py-24 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal><Eyebrow>Weitere Behandlungen</Eyebrow></Reveal>
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r.id} delay={i * 70}>
                  <TreatmentCard treatment={r} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        settings={settings}
        title={<>Beratung zu <span className="italic text-[#C9AF80]">{t.title_de}</span></>}
        text="Ob und in welchem Umfang diese Behandlung für Sie geeignet ist, klären wir in einem persönlichen Gespräch in Zürich Enge."
      />
    </>
  );
}