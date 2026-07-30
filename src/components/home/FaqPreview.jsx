import React from 'react';
import { Link } from 'react-router-dom';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import PrecisionAccordion from '@/components/PrecisionAccordion';
import { Image } from '@/components/ui/image';
import { GENERAL_FAQS, IMAGES } from '@/lib/site';

export default function FaqPreview() {
  return (
    <section className="relative overflow-hidden bg-[#F8F6F3] px-6 py-24 lg:px-12 lg:py-40">
      <div className="pointer-events-none absolute -right-20 bottom-0 hidden h-2/3 w-1/4 opacity-[0.12] lg:block" aria-hidden="true">
        <Image src={IMAGES.texture} alt="" className="h-full w-full" fittingType="fill" />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-4">
          <Reveal><Eyebrow>Häufige Fragen</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-7 font-heading text-[2.1rem] font-light leading-[1.15] md:text-4xl">
              Was Sie
              <span className="text-[#8A7550]"> wissen sollten.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <Link to="/faq" className="mt-8 inline-block eyebrow link-underline">
              Alle Fragen ansehen
            </Link>
          </Reveal>
        </div>
        <Reveal delay={160} className="lg:col-span-8">
          <PrecisionAccordion items={GENERAL_FAQS.slice(0, 4)} />
        </Reveal>
      </div>
    </section>
  );
}