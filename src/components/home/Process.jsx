import React from 'react';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import { Image } from '@/components/ui/image';
import { PROCESS, IMAGES } from '@/lib/site';

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 lg:px-12 lg:py-40">
      <div className="pointer-events-none absolute -left-24 top-1/4 hidden h-1/2 w-1/4 opacity-[0.12] lg:block" aria-hidden="true">
        <Image src={IMAGES.texture} alt="" className="h-full w-full" fittingType="fill" />
      </div>
      <div className="relative mx-auto max-w-6xl">
        <Reveal><Eyebrow>Ihr Weg zu uns</Eyebrow></Reveal>
        <Reveal delay={80}>
          <h2 className="mt-7 max-w-2xl font-heading text-[2.1rem] font-light leading-[1.15] md:text-5xl">
            Vier Schritte —
            <span className="text-[#8A7550]"> ohne Zeitdruck.</span>
          </h2>
        </Reveal>

        <ol className="mt-20 space-y-px">
          {PROCESS.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <li className="group grid gap-4 border-t border-[#E8E2D9] py-10 md:grid-cols-12 md:gap-8 md:py-12">
                <span className="font-heading text-3xl font-light text-[#8A7550] md:col-span-2">
                  {s.n}
                </span>
                <h3 className="font-heading text-2xl font-light md:col-span-4 md:text-3xl">
                  {s.title}
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-neutral-600 md:col-span-6">
                  {s.text}
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