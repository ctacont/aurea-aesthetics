import React from 'react';
import { Image } from '@/components/ui/image';
import Eyebrow from '@/components/Eyebrow';
import GoldButton from '@/components/GoldButton';
import { IMAGES } from '@/lib/site';

export default function Hero({ settings }) {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt="Ruhiger Moment — ästhetische Medizin in Zürich Enge"
          className="h-full w-full"
          fittingType="fill"
          focalPointX={0.72}
          focalPointY={0.38}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/45 via-[#0A0A0A]/15 to-transparent" />
      </div>

      <div className="relative w-full px-6 py-32 lg:px-16">
        <div className="max-w-xl border border-white/15 bg-white/[0.08] px-6 py-10 text-left text-white shadow-[0_32px_80px_rgba(0,0,0,0.35)] backdrop-blur-lg backdrop-saturate-150 lg:px-14 lg:py-16">
          <Eyebrow tone="light">
            {settings.practice_name} · {settings.district}
          </Eyebrow>

          <h1 className="mt-7 font-heading text-3xl font-light leading-[1.12] md:text-5xl">
            Ästhetische Medizin in Zürich.
            <span className="mt-2 block text-[#C9AF80]">Individuell, präzise und natürlich.</span>
          </h1>

          <p className="mt-8 max-w-md text-[0.95rem] leading-relaxed text-white/70">
            Eine private Praxis an der {settings.street} — geprägt von medizinischer Sorgfalt,
            Diskretion und Ergebnissen, die Ihre eigenen Züge bewahren.
          </p>

          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <GoldButton to="/kontakt-termin" tone="primary">
              Beratung anfragen
            </GoldButton>
            <GoldButton to="/behandlungen" tone="outline">
              Behandlungen entdecken
            </GoldButton>
          </div>

          <address className="mt-12 not-italic eyebrow text-white/45">
            {settings.street} · {settings.postal_code} {settings.city}
          </address>
        </div>
      </div>
    </section>
  );
}