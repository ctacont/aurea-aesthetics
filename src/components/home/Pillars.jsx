import React from 'react';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import { PILLARS } from '@/lib/site';

export default function Pillars() {
  return (
    <section className="bg-[#F4F1EE] px-6 py-24 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal><Eyebrow>Aurea Experience</Eyebrow></Reveal>
        <Reveal delay={80}>
          <h2 className="mt-7 max-w-2xl font-heading text-[2.1rem] font-light leading-[1.15] md:text-5xl">
            Eine Praxis für Menschen, die Zeit
            <span className="italic text-[#8A7550]"> und Diskretion schätzen.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-8 max-w-xl text-[0.98rem] leading-relaxed text-neutral-600">
            Räume, Abläufe und Terminplanung sind darauf ausgelegt, Ruhe zu schaffen.
            Keine Hektik, keine Anonymität — eine Umgebung, in der medizinische Sorgfalt
            den Takt vorgibt.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-px border-t border-[#E8E2D9] sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="border-b border-[#E8E2D9] py-10 sm:border-r sm:pr-8 lg:py-12">
                <span className="eyebrow text-[#8A7550]">0{i + 1}</span>
                <h3 className="mt-5 font-heading text-2xl font-light">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}