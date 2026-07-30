import React from 'react';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import { Image } from '@/components/ui/image';
import { PILLARS, IMAGES } from '@/lib/site';

export default function Pillars() {
  return (
    <section className="relative overflow-hidden bg-[#F8F6F3] px-6 py-24 lg:px-12 lg:py-40">
      <div className="pointer-events-none absolute -right-24 top-0 hidden h-full w-1/3 opacity-[0.12] lg:block" aria-hidden="true">
        <Image src={IMAGES.texture} alt="" className="h-full w-full" fittingType="fill" />
      </div>

      <div className="relative mx-auto max-w-6xl">
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

        <ol className="mt-20">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={Math.min(i * 80, 320)}>
              <li className="grid items-baseline gap-4 border-t border-[#E8E2D9] py-10 md:grid-cols-12 md:gap-10 md:py-14">
                <span className="font-heading text-4xl font-light leading-none text-[#C9AF80] md:col-span-2 md:text-5xl">
                  0{i + 1}
                </span>
                <h3 className="font-heading text-2xl font-light md:col-span-4 md:text-3xl">
                  {p.title}
                </h3>
                <p className="max-w-lg text-[0.95rem] leading-relaxed text-neutral-600 md:col-span-6">
                  {p.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
        <div className="border-t border-[#E8E2D9]" />
      </div>
    </section>
  );
}