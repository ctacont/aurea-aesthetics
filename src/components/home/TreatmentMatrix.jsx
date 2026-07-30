import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import TreatmentCard from '@/components/TreatmentCard';

export default function TreatmentMatrix({ treatments }) {
  const railRef = useRef(null);

  const scrollBy = (dir) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: dir * rail.clientWidth * 0.7, behavior: 'smooth' });
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); scrollBy(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); scrollBy(-1); }
  };

  return (
    <section className="bg-background py-24 lg:py-40">
      <div className="px-6 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal><Eyebrow>Behandlungen</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 className="mt-7 max-w-2xl font-heading text-[2.1rem] font-light leading-[1.15] md:text-5xl">
                Individuell geplant.
                <span className="italic text-[#8A7550]"> Natürlich verfeinert.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollBy(-1)}
                aria-label="Vorherige Behandlungen"
                className="flex h-11 w-11 items-center justify-center border border-[#E8E2D9] transition-colors hover:border-[#C9AF80] hover:bg-[#C9AF80]"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1} />
              </button>
              <button
                onClick={() => scrollBy(1)}
                aria-label="Weitere Behandlungen"
                className="flex h-11 w-11 items-center justify-center border border-[#E8E2D9] transition-colors hover:border-[#C9AF80] hover:bg-[#C9AF80]"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={1} />
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <div
        ref={railRef}
        onKeyDown={onKeyDown}
        tabIndex={0}
        role="region"
        aria-label="Behandlungsübersicht — mit Pfeiltasten navigierbar"
        className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 lg:px-12"
      >
        {treatments.map((t, i) => (
          <div
            key={t.id}
            className="w-[74vw] shrink-0 snap-start sm:w-[42vw] lg:w-[25vw] xl:w-[22vw]"
          >
            <Reveal delay={i * 60}>
              <TreatmentCard treatment={t} />
            </Reveal>
          </div>
        ))}
      </div>

      <div className="mt-14 px-6 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Link to="/behandlungen" className="eyebrow inline-flex items-center gap-3 link-underline">
            Alle Behandlungen ansehen
            <ArrowRight className="h-4 w-4 text-[#C9AF80]" strokeWidth={1} />
          </Link>
        </div>
      </div>
    </section>
  );
}