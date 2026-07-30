import React from 'react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import LocationSection from '@/components/home/LocationSection';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import Eyebrow from '@/components/Eyebrow';
import { useSettings } from '@/lib/useSite';
import { medicalBusinessSchema, breadcrumbSchema } from '@/lib/schema';
import { IMAGES, GEO_AREAS } from '@/lib/site';

const ARRIVAL = [
  { label: 'S-Bahn', text: 'Bahnhof Zürich Enge — wenige Gehminuten zur Praxis. Anbindung an alle S-Bahn-Linien des Zürcher Verkehrsverbunds.' },
  { label: 'Tram & Bus', text: 'Haltestellen an der Seestrasse und am Bahnhof Enge. Direkte Verbindungen aus der Innenstadt und vom linken Seeufer.' },
  { label: 'Auto', text: 'Zufahrt über die Seestrasse oder die General-Wille-Strasse. Öffentliche Parkhäuser in unmittelbarer Umgebung.' },
  { label: 'Vom Flughafen', text: 'Ab Zürich Flughafen rund 25 Minuten mit der S-Bahn über den Hauptbahnhof.' },
];

export default function Location() {
  const { settings } = useSettings();
  const crumbs = [{ name: 'Startseite', path: '/' }, { name: 'Standort', path: '/standort-zuerich-enge' }];

  return (
    <>
      <Seo
        title="Standort Zürich Enge | Tödistrasse 1 | Aurea Aesthetics AG"
        description="Aurea Aesthetics AG, Tödistrasse 1, 8002 Zürich Enge. Anfahrt mit S-Bahn, Tram und Auto. Einzugsgebiet Zürich, Kilchberg, Rüschlikon, Thalwil, Zollikon, Küsnacht."
        path="/standort-zuerich-enge"
        jsonLd={[medicalBusinessSchema(settings), breadcrumbSchema(crumbs)]}
      />
      <PageHero
        eyebrow="Standort"
        title={`${settings.street}`}
        accent={`${settings.postal_code} ${settings.city}`}
        lead={`Unsere Praxis liegt im Quartier ${settings.district} — zentral, ruhig und hervorragend erschlossen.`}
        image={IMAGES.zurich}
        breadcrumbs={crumbs}
      />

      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal><Eyebrow>Anfahrt</Eyebrow></Reveal>
          <div className="mt-14 grid gap-px border-t border-neutral-300 sm:grid-cols-2">
            {ARRIVAL.map((a, i) => (
              <Reveal key={a.label} delay={i * 80}>
                <div className="border-b border-neutral-300 py-10 sm:border-r sm:pr-10">
                  <h2 className="font-heading text-2xl font-light">{a.label}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-600">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <LocationSection settings={settings} />

      <section className="bg-[#0A0A0A] px-6 py-24 text-white lg:px-12 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal><Eyebrow tone="light">Einzugsgebiet</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-7 max-w-2xl font-heading text-[2rem] font-light leading-[1.18] md:text-4xl">
              Für Patientinnen und Patienten aus Zürich
              <span className="italic text-[#C9AF80]"> und der Region.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-10">
              {GEO_AREAS.map((a) => (
                <span key={a} className="eyebrow text-white/45">{a}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand settings={settings} />
    </>
  );
}