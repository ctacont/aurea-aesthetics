import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import TreatmentCard from '@/components/TreatmentCard';

export default function TreatmentMatrix({ treatments }) {
  const railRef = useRef(null);
  const drag = useRef({ down: false, moved: false, startX: 0, scrollLeft: 0, pointerId: null });

  const scrollBy = (dir) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: dir * rail.clientWidth * 0.7, behavior: 'smooth' });
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); scrollBy(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); scrollBy(-1); }
  };

  const onPointerDown = (e) => {
    const rail = railRef.current;
    if (!rail) return;
    drag.current = { down: true, moved: false, startX: e.clientX, scrollLeft: rail.scrollLeft, pointerId: e.pointerId };
  };

  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d.down) return;
    const rail = railRef.current;
    if (!rail) return;
    const dx = e.clientX - d.startX;
    if (!d.moved && Math.abs(dx) > 4) {
      d.moved = true;
      rail.setPointerCapture?.(e.pointerId);
    }
    if (d.moved) {
      rail.scrollLeft = d.scrollLeft - dx;
    }
  };

  const endDrag = () => {
    const rail = railRef.current;
    if (rail && drag.current.pointerId != null) {
      rail.releasePointerCapture?.(drag.current.pointerId);
    }
    drag.current.down = false;
    drag.current.pointerId = null;
  };

  const onClickCapture = (e) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
    drag.current.moved = false;
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
                <span className="text-[#8A7550]"> Natürlich verfeinert.</span>
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
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
        onDragStart={(e) => e.preventDefault()}
        tabIndex={0}
        role="region"
        aria-label="Behandlungsübersicht — mit Pfeiltasten navigierbar"
        className="no-scrollbar touch-pan-y mt-14 flex cursor-grab gap-6 overflow-x-auto px-6 pb-4 select-none lg:px-12 active:cursor-grabbing"
      >
        {treatments.map((t, i) => (
          <div
            key={t.id}
            className="w-[74vw] shrink-0 sm:w-[42vw] lg:w-[25vw] xl:w-[22vw]"
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