import React from 'react';
import { Image } from '@/components/ui/image';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Eyebrow from '@/components/Eyebrow';
import { IMAGES } from '@/lib/site';

export default function Hero({ settings }) {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt="Ruhiger Moment — ästhetische Medizin in Zürich Enge"
          className="h-full w-full"
          fittingType="fill"
          focalPointX={0.5}
          focalPointY={0.35}
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/25" />
      </div>

      <div className="relative w-full px-6 py-32 lg:px-12">
        <div className="mx-auto max-w-2xl border border-white/15 bg-white/[0.08] px-6 py-10 text-center text-white shadow-[0_32px_80px_rgba(0,0,0,0.35)] backdrop-blur-lg backdrop-saturate-150 lg:px-14 lg:py-16">
          <div className="flex justify-center">
            <Eyebrow tone="light">
              {settings.practice_name} · {settings.district}
            </Eyebrow>
          </div>

          <h1 className="mt-7 font-heading text-3xl font-light leading-[1.12] md:text-5xl">
            Ästhetische Medizin in Zürich.
            <span className="mt-2 block italic text-[#C9AF80]">Individuell, präzise und natürlich.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-md text-[0.95rem] leading-relaxed text-white/70">
            Eine private Praxis an der {settings.street} — geprägt von medizinischer Sorgfalt,
            Diskretion und Ergebnissen, die Ihre eigenen Züge bewahren.
          </p>

          <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <Link
              to="/kontakt-termin"
              className="group relative inline-flex items-center justify-center overflow-hidden border border-white/30 px-8 py-4 eyebrow text-white transition-colors duration-500 hover:text-[#0A0A0A]"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 origin-left scale-x-0 bg-[#C9AF80] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
              />
              <span className="relative z-10">Beratung anfragen</span>
            </Link>
            <Link
              to="/behandlungen"
              className="group inline-flex items-center gap-3 eyebrow text-white/70 transition-colors hover:text-[#C9AF80]"
            >
              Behandlungen entdecken
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1} />
            </Link>
          </div>

          <address className="mt-12 not-italic eyebrow text-white/45">
            {settings.street} · {settings.postal_code} {settings.city}
          </address>
        </div>
      </div>
    </section>
  );
}