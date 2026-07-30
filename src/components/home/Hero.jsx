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
          focalPointX={0.88}
          focalPointY={0.42} />
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/45 via-[#0A0A0A]/15 to-transparent" />
      </div>

      <div className="relative flex w-full items-end px-6 pb-20 pt-44 lg:px-16 lg:pb-28 lg:pt-52">
        
        {/*  
          <div className="border border-white/15 bg-white/[0.08] text-left text-white shadow-[0_32px_80px_rgba(0,0,0,0.35)] backdrop-blur-lg backdrop-saturate-150 px-8 py-6 lg:px-14 lg:py-9 max-w-xl">
          */}
        <div className="border border-white/10 bg-white/[0.06] px-10 py-7 text-left text-white rounded-3xl shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl backdrop-saturate-200 max-w-[974px] lg:-translate-x-[50px] bg-white/[0.06] px-6 lg:px-10 py-6 lg:py-1">
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
    </section>);

}