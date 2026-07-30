import React from 'react';
import Reveal from '@/components/Reveal';

export default function FactGrid({ treatment }) {
  const facts = [
    { label: 'Behandlungsdauer', value: treatment.duration },
    { label: 'Ausfallzeit', value: treatment.downtime },
    { label: 'Ergebnis sichtbar', value: treatment.results_onset },
    { label: 'Haltbarkeit', value: treatment.results_duration },
    { label: 'Kosten ab', value: treatment.price_from },
  ].filter((f) => f.value);

  if (!facts.length) return null;

  return (
    <section className="bg-[#0A0A0A] px-6 py-20 text-white lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow text-[#C9AF80]">Auf einen Blick</p>
        <dl className="mt-10 grid gap-px border-t border-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 70}>
              <div className="border-b border-white/10 py-8 sm:border-r sm:pr-6">
                <dt className="eyebrow text-white/35">{f.label}</dt>
                <dd className="mt-4 font-heading text-2xl font-light">{f.value}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}