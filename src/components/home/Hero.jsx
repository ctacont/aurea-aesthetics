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
          focalPointX={0.78}
          focalPointY={0.42}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a2624]/85 via-[#2a2624]/40 to-transparent" />
      </div>

      <div className="relative w-full px-6 py-24 lg:px-16 lg:py-32">
        <div className="max-w-xl bg-[#2a2624]/75 px-6 py-10 text-left text-white shadow-[0_32px_80px_rgba(0,0,0,0.35)] backdrop-blur-md lg:px-12 lg:py-14">
          <Eyebrow tone="light">
            {settings.practice_name} · {settings.district}
          </Eyebrow>

          <h1 className="mt-7 font-heading text-[2.2rem] font-light leading-[1.1] md:text-[3.2rem]">
            Ästhetische Medizin in Zürich.
            <span className="mt-2 block text-[#C9AF80]">Individuell, präzise und natürlich.</span>
          </h1>

          <p className="mt-8 max-w-md text-[0.95rem] leading-relaxed text-white/75">
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

          <address className="mt-12 not-italic eyebrow text-white/50">
            {settings.street} · {settings.postal_code} {settings.city}
          </address>
        </div>
      </div>
    </section>
  );
}