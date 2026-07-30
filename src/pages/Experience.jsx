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

export default function Experience() {
  const { settings } = useSettings();
  const crumbs = [{ name: 'Startseite', path: '/' }, { name: 'Aurea Experience', path: '/experience' }];

  return (
    <>
      <Seo
        title="Aurea Experience | Diskrete ästhetische Medizin Zürich Enge"
        description="Ruhige Räume, begrenzte Terminanzahl, persönliche Kontinuität: Wie eine Behandlung bei Aurea Aesthetics in Zürich Enge abläuft."
        path="/experience"
        jsonLd={breadcrumbSchema(crumbs)}
      />
      <PageHero
        eyebrow="Aurea Experience"
        title="Ruhe ist Teil"
        accent="der Behandlung."
        lead="Räume, Abläufe und Terminplanung sind darauf ausgelegt, Ihnen Zeit und Diskretion zu geben."
        image={IMAGES.interior}
        breadcrumbs={crumbs}
      />

      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full">
              <Image src={IMAGES.bio} alt="Materialität und Licht in den Praxisräumen" className="h-full w-full" fittingType="fill" />
            </div>
          </Reveal>
          <div className="lg:col-span-7 lg:pt-8">
            <Reveal delay={80}><Eyebrow>Die Umgebung</Eyebrow></Reveal>
            <Reveal delay={140}>
              <h2 className="mt-7 font-heading text-[2rem] font-light leading-[1.18] md:text-4xl">
                Kein Wartezimmer.
                <span className="italic text-[#8A7550]"> Ein Empfangsraum.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 space-y-6 text-lg leading-[1.75] text-neutral-700">
                <p>
                  Wir arbeiten ausschliesslich mit Terminvereinbarung und planen bewusst Puffer ein.
                  Sie treffen keine anderen Patientinnen und Patienten, wenn Sie es nicht möchten.
                </p>
                <p>
                  Licht, Materialien und Raumaufteilung wurden zurückhaltend gewählt — warmes Holz,
                  gedämpftes Tageslicht, ruhige Flächen. Nichts erinnert an eine klinische Umgebung,
                  ohne die medizinische Ausstattung zu kompromittieren.
                </p>
                <p>
                  Alle Unterlagen, Aufnahmen und Behandlungsdaten werden vertraulich und nach
                  schweizerischem Datenschutzrecht verarbeitet.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Pillars />
      <Process />
      <CtaBand settings={settings} />
    </>
  );
}