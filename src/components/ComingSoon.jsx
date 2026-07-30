import React from 'react';
import { Image } from '@/components/ui/image';
import Eyebrow from '@/components/Eyebrow';
import Seo from '@/components/Seo';
import { LOGO, IMAGES } from '@/lib/site';

export default function ComingSoon({ settings }) {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white">
      <Seo
        title="Aurea Aesthetics AG · Zürich Enge"
        description="Praxis für ästhetische Medizin in Zürich Enge. Eröffnung in Vorbereitung."
        noindex
      />
      <div className="absolute inset-0">
        <Image
          src={IMAGES.zurich}
          alt="Zürich Enge am Morgen"
          className="h-full w-full opacity-25"
          fittingType="fill"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/90" />
      </div>

      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <img src={LOGO} alt="Aurea Aesthetics AG" className="h-12 w-auto brightness-0 invert" />
        <Eyebrow tone="light" className="mt-12 justify-center">
          {settings.practice_name} · {settings.district}
        </Eyebrow>
        <h1 className="mt-8 max-w-2xl font-heading text-4xl font-light leading-[1.15] md:text-6xl">
          Ästhetische Medizin in Zürich.
          <span className="block italic text-[#C9AF80]">In Vorbereitung.</span>
        </h1>
        <p className="mt-8 max-w-lg text-sm leading-relaxed text-white/55">
          Wir eröffnen eine Praxis für ästhetische Medizin an der {settings.street} in {settings.district} —
          gestaltet für Menschen, die Zeit, Diskretion und individuelle Betreuung schätzen.
        </p>
        <div className="mt-12 h-px w-16 bg-[#C9AF80]" />
        <address className="mt-12 not-italic text-xs leading-relaxed tracking-widest text-white/40 uppercase">
          {settings.street} · {settings.postal_code} {settings.city}
        </address>
        {settings.email && (
          <a href={`mailto:${settings.email}`} className="mt-4 eyebrow text-[#C9AF80] link-underline">
            {settings.email}
          </a>
        )}
      </div>
    </div>
  );
}