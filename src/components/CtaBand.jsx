import React from 'react';
import { Link } from 'react-router-dom';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';

export default function CtaBand({ settings, title, text }) {
  return (
    <section className="bg-[#F4F1EE] px-6 py-24 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal><Eyebrow className="justify-center">Beratung</Eyebrow></Reveal>
        <Reveal delay={80}>
          <h2 className="mt-8 font-heading text-[2.1rem] font-light leading-[1.15] md:text-5xl">
            {title || (
              <>
                Persönliche Beratung in
                <span className="italic text-[#8A7550]"> {settings?.district || 'Zürich Enge'}.</span>
              </>
            )}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-8 max-w-xl text-[0.98rem] leading-relaxed text-neutral-600">
            {text ||
              'Wir nehmen bewusst eine begrenzte Anzahl neuer Patientinnen und Patienten auf. Senden Sie Ihre Anfrage — wir melden uns diskret und persönlich zurück.'}
          </p>
        </Reveal>
        <Reveal delay={200}>
          <Link
            to="/kontakt-termin"
            className="group relative mt-14 inline-flex items-center justify-center overflow-hidden border border-[#0A0A0A]/20 px-10 py-4 eyebrow text-[#0A0A0A] transition-colors duration-500"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-left scale-x-0 bg-[#C9AF80] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
            />
            <span className="relative z-10">Beratung anfragen</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}