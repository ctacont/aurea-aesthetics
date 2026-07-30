import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import { IMAGES } from '@/lib/site';

export default function DoctorSection({ doctors = [] }) {
  const doc = doctors[0];

  return (
    <section className="bg-background px-6 py-24 lg:px-12 lg:py-40">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12 lg:gap-24">
        <Reveal className="lg:col-span-6 lg:-ml-12">
          <div className="relative aspect-[4/5] w-full bg-neutral-200">
            <Image
              src={doc?.photo_url || IMAGES.interior}
              alt={doc ? `${doc.title} ${doc.name}` : 'Aurea Aesthetics — Beratungsraum'}
              className="h-full w-full"
              fittingType="fill"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-6 lg:pt-16">
          <Reveal delay={80}><Eyebrow>Medizinische Leitung</Eyebrow></Reveal>

          <Reveal delay={140}>
            <h2 className="mt-7 font-heading text-[2.1rem] font-light leading-tight md:text-5xl">
              {doc ? `${doc.title || ''} ${doc.name}`.trim() : 'Ärztliche Leitung'}
            </h2>
          </Reveal>

          {doc?.specialty && (
            <Reveal delay={180}>
              <p className="mt-4 eyebrow text-[#8A7550]">{doc.specialty}</p>
            </Reveal>
          )}

          <Reveal delay={220}>
            {doc?.bio_de ? (
              <p className="mt-8 max-w-xl text-lg leading-[1.75] text-neutral-700">{doc.bio_de}</p>
            ) : (
              <div className="mt-8 max-w-xl border-l border-[#C9AF80] pl-7">
                <p className="text-lg leading-[1.75] text-neutral-700">
                  Die Angaben zur ärztlichen Leitung werden nach offizieller Bestätigung ergänzt.
                  Name, Facharzttitel, Qualifikationen und Werdegang erscheinen an dieser Stelle,
                  sobald sie freigegeben sind.
                </p>
                <p className="mt-5 eyebrow text-neutral-400">Inhalt in Vorbereitung</p>
              </div>
            )}
          </Reveal>

          {doc?.qualifications?.length > 0 && (
            <Reveal delay={280}>
              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {doc.qualifications.map((q) => (
                  <li key={q} className="flex gap-3 text-sm leading-relaxed text-neutral-600">
                    <span className="mt-2 h-px w-4 shrink-0 bg-[#C9AF80]" aria-hidden="true" />
                    {q}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          <Reveal delay={320}>
            <Link to="/praxis" className="mt-12 inline-block eyebrow link-underline">
              Mehr über die Praxis
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}