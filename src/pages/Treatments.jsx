import React from 'react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import TreatmentCard from '@/components/TreatmentCard';
import CtaBand from '@/components/CtaBand';
import { useSettings, useTreatments } from '@/lib/useSite';
import { breadcrumbSchema } from '@/lib/schema';
import { IMAGES } from '@/lib/site';

const GROUPS = [
{ key: 'injektion', label: 'Injektionsbehandlungen', text: 'Präzise Verfahren zur Harmonisierung von Mimik, Volumen und Kontur.' },
{ key: 'biostimulation', label: 'Biostimulation', text: 'Verfahren, die körpereigene Regenerationsprozesse anregen — mit Wirkung über Monate.' },
{ key: 'haut', label: 'Hautqualität', text: 'Behandlungen für Feuchtigkeit, Elastizität und Erscheinungsbild der Haut.' }];


export default function Treatments() {
  const { settings } = useSettings();
  const { data: treatments = [], isLoading } = useTreatments();

  return (
    <>
      <Seo
        title="Behandlungen | Ästhetische Medizin Zürich | Aurea Aesthetics"
        description="Unser Behandlungsspektrum in Zürich Enge: Behandlung mimischer Falten, Hyaluron Filler, Biostimulatoren und Skinbooster. Individuelle Planung und medizinische Aufklärung."
        path="/behandlungen"
        jsonLd={breadcrumbSchema([
        { name: 'Startseite', path: '/' },
        { name: 'Behandlungen', path: '/behandlungen' }]
        )} />
      
      <PageHero
        eyebrow="Behandlungsspektrum"
        title="Behandlungen in Zürich."
        accent="Medizinisch geplant."
        lead="Jede Behandlung beginnt mit einer Analyse Ihrer Anatomie und einem ausführlichen Gespräch. Wir empfehlen nur, was medizinisch sinnvoll ist."
        image={IMAGES.texture}
        breadcrumbs={[{ name: 'Startseite', path: '/' }, { name: 'Behandlungen', path: '/behandlungen' }]} />
      

      <div className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-6xl space-y-28">
          {isLoading && <p className="eyebrow text-neutral-400">Behandlungen werden geladen</p>}

          {GROUPS.map((g) => {
            const items = treatments.filter((t) => t.category === g.key);
            if (!items.length) return null;
            return (
              <section key={g.key}>
                <Reveal>
                  <div className="border-t border-[#E8E2D9] pt-8">
                    <p className="eyebrow text-[#8A7550]">{g.label}</p>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-neutral-600">
                      {g.text}
                    </p>
                  </div>
                </Reveal>
                <div className="mt-12 grid gap-x-12 gap-y-16 md:grid-cols-2">
                  {items.map((t, i) =>
                  <Reveal key={t.id} delay={i * 70}>
                      <TreatmentCard treatment={t} />
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