import React from 'react';
import Reveal from '@/components/Reveal';
import { useLanguage } from '@/lib/LanguageContext';

export default function FactGrid({ treatment }) {
  const { t } = useLanguage();
  const facts = [
  { label: t('factGrid.duration'), value: treatment.duration },
  { label: t('factGrid.downtime'), value: treatment.downtime },
  { label: t('factGrid.onset'), value: treatment.results_onset },
  { label: t('factGrid.lasts'), value: treatment.results_duration },
  { label: t('factGrid.price'), value: treatment.price_from }].
  filter((f) => f.value);

  if (!facts.length) return null;

  return (
    <section className="bg-background px-6 py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow text-[#8A7550]">{t('factGrid.eyebrow')}</p>
        <dl className="mt-10 grid border-t border-l border-[#E8E2D9] sm:grid-cols-2 lg:grid-cols-5">
          {facts.map((f, i) =>
          <Reveal key={f.label} delay={i * 70} className="h-full">
            <div className="flex h-full min-h-[140px] flex-col justify-center border-b border-r border-[#E8E2D9] px-6 py-8 text-center">
              <dt className="eyebrow text-neutral-400">{f.label}</dt>
              <dd className="mt-4 font-heading text-2xl font-light">{f.value}</dd>
            </div>
          </Reveal>
          )}
        </dl>
      </div>
    </section>);

}