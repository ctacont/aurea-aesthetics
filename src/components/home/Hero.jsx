import React from 'react';
import { Image } from '@/components/ui/image';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Eyebrow from '@/components/Eyebrow';
import { IMAGES, LOGO } from '@/lib/site';

export default function Hero({ settings }) {
  return (
    <section className="relative min-h-[100svh] lg:grid lg:grid-cols-2">
      <div className="relative h-[52svh] lg:h-auto">
        <Image
          src={IMAGES.hero}
          alt="Ruhiger Moment — ästhetische Medizin in Zürich Enge"
          className="h-full w-full"
          fittingType="fill"
          focalPointX={0.5}
          focalPointY={0.35} />
        
        <div className="absolute inset-0 bg-[#0A0A0A]/15 lg:hidden" />
      </div>

      <div className="relative flex flex-col justify-center bg-[#0A0A0A] px-6 py-20 text-white lg:px-16 lg:py-32">
        <span className="pointer-events-none absolute left-0 top-1/4 hidden h-1/2 rule-v lg:block" aria-hidden="true" />

        <img src="https://media.base44.com/images/public/6a6b131f6cc49b3ee60e929e/ab0e6c25c_aurea_logo_transparent_2.png"

        alt="Aurea Aesthetics AG"
        className="mb-14 h-9 w-auto self-start brightness-0 invert lg:h-11" />
        

        <Eyebrow tone="light">
          {settings.practice_name} · {settings.district}
        </Eyebrow>

        <h1 className="mt-7 max-w-xl font-heading text-[2.6rem] font-light leading-[1.08] tracking-tight md:text-6xl lg:text-[4.2rem]">
          Ästhetische Medizin in Zürich.
          <span className="mt-2 block italic text-[#C9AF80]">Individuell, präzise und natürlich.</span>
        </h1>

        <p className="mt-9 max-w-md text-[0.98rem] leading-relaxed text-white/55">
          Eine private Praxis für ästhetische Medizin an der {settings.street} —
          geprägt von medizinischer Sorgfalt, Diskretion und Ergebnissen, die Ihre eigenen Züge bewahren.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            to="/kontakt-termin"
            className="group relative inline-flex items-center justify-center overflow-hidden border border-white/30 px-8 py-4 eyebrow text-white transition-colors duration-500 hover:text-[#0A0A0A]">
            
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-left scale-x-0 bg-[#C9AF80] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
            
            <span className="relative z-10">Persönliche Beratung anfragen</span>
          </Link>
          <Link
            to="/behandlungen"
            className="inline-flex items-center gap-3 eyebrow text-white/60 transition-colors hover:text-[#C9AF80]">
            
            Behandlungen entdecken
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1} />
          </Link>
        </div>

        <address className="mt-16 not-italic eyebrow text-white/30">
          {settings.street} · {settings.postal_code} {settings.city}
        </address>
      </div>
    </section>);

}