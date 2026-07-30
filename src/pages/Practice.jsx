import React from 'react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Eyebrow from '@/components/Eyebrow';
import DoctorSection from '@/components/home/DoctorSection';
import CtaBand from '@/components/CtaBand';
import { Image } from '@/components/ui/image';
import { useSettings, useDoctors } from '@/lib/useSite';
import { breadcrumbSchema } from '@/lib/schema';
import { IMAGES } from '@/lib/site';

const VALUES = [
{ title: 'Medizin zuerst', text: 'Anamnese, Indikationsstellung, Aufklärung und Nachkontrolle gehören für uns zu jeder ästhetischen Behandlung — ohne Ausnahme.' },
{ title: 'Natürlichkeit', text: 'Ein gutes Ergebnis fällt nicht auf. Es wirkt ausgeruht, harmonisch und unverändert eigen.' },
{ title: 'Aufrichtigkeit', text: 'Wir benennen Grenzen klar und lehnen Behandlungen ab, die keinen medizinischen oder ästhetischen Nutzen bringen.' },
{ title: 'Diskretion', text: 'Terminvereinbarung, ruhige Räume und vertraulicher Umgang mit allen Informationen.' }];


export default function Practice() {
  const { settings } = useSettings();
  const { data: doctors = [] } = useDoctors();

  const crumbs = [{ name: 'Startseite', path: '/' }, { name: 'Praxis', path: '/praxis' }];

  return (
    <>
      <Seo
        title="Praxis für ästhetische Medizin Zürich Enge | Aurea Aesthetics AG"
        description="Aurea Aesthetics AG an der Tödistrasse 1 in Zürich Enge — eine private Praxis für ästhetische Medizin mit Fokus auf individuelle Beratung, Präzision und natürliche Ergebnisse."
        path="/praxis"
        jsonLd={breadcrumbSchema(crumbs)} />
      
      <PageHero
        eyebrow={`Über ${settings.practice_name}`}
        title="Eine private Praxis"
        accent="für ästhetische Medizin."
        lead={`An der ${settings.street} in ${settings.district} führen wir eine Praxis, die medizinische Sorgfalt und ruhige Atmosphäre verbindet.`}
        image={IMAGES.practice}
        breadcrumbs={crumbs} />
      

      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal><Eyebrow>Selbstverständnis</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 className="mt-7 font-heading text-[2rem] font-light leading-[1.18] md:text-4xl">
                Wir verstehen ästhetische Medizin als medizinisches Fachgebiet — nicht als
                <span className="text-[#8A7550]"> kosmetische Dienstleistung.</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-10 space-y-6 text-lg leading-[1.75] text-neutral-700">
                <p>
                  Aurea Aesthetics AG wurde mit einem klaren Anspruch gegründet: ästhetische
                  Behandlungen mit derselben Sorgfalt zu planen und durchzuführen, die in der
                  übrigen Medizin selbstverständlich ist.
                </p>
                <p>
                  Das beginnt mit Zeit. Eine Erstberatung dauert bei uns 45 bis 60 Minuten. Wir
                  analysieren Gesichtsproportionen, Hautqualität, Mimik und Volumenverteilung —
                  und sprechen offen darüber, welches Ergebnis realistisch erreichbar ist.
                </p>
                <p>
                  Wir arbeiten mit bewusst begrenzter Auslastung. Das erlaubt uns, jede Behandlung
                  individuell zu planen, sorgfältig zu dokumentieren und persönlich nachzukontrollieren.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full">
              <Image src={IMAGES.hero} alt="Ruhe und Diskretion in der Praxis" className="h-full w-full" fittingType="fill" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F4F1EE] px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal><Eyebrow>Werte</Eyebrow></Reveal>
          <div className="mt-14 grid border-t border-l border-[#E8E2D9] sm:grid-cols-2">
            {VALUES.map((v, i) =>
            <Reveal key={v.title} delay={i * 80}>
                <div className="flex min-h-[220px] flex-col justify-center border-b border-r border-[#E8E2D9] px-8 py-12 sm:px-10 text-center">
                  <h3 className="font-heading text-2xl font-light">{v.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-600">{v.text}</p>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <DoctorSection doctors={doctors} />
      <CtaBand settings={settings} />
    </>);

}