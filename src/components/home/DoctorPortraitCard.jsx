import React from 'react';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/Reveal';
import useParallax from '@/hooks/useParallax';
import { IMAGES } from '@/lib/site';
import { useLanguage, loc } from '@/lib/LanguageContext';

export default function DoctorPortraitCard({
  doctor,
  delay = 0,
  direction = 'left'
}) {
  const { lang } = useLanguage();
  const { ref, offset } = useParallax(0.08);

  const bio = loc(doctor, 'bio', lang) || doctor.bio_de;

  const slideClass =
    direction === 'left'
      ? '-translate-x-[50%]'
      : 'translate-x-[50%]';

  return (
    <div>

      {/* BILD */}
      <Reveal
        delay={delay}
        className={`${slideClass} duration-[2200ms]`}
      >
        <div
          ref={ref}
          className="group relative aspect-[4/5] w-full overflow-hidden"
        >
          <div
            style={{
              transform: `translateY(${offset}px) scale(1.08)`
            }}
            className="h-full w-full"
          >
            <Image
              src={doctor.photo_url || IMAGES.interior}
              alt={`${doctor.title || ''} ${doctor.name}`.trim()}
              className="h-full w-full object-cover"
              fittingType="fill"
            />
          </div>
        </div>
      </Reveal>

      {/* FACHGEBIET */}
      {doctor.specialty && (
        <Reveal
          delay={delay + 120}
          className={`${slideClass} duration-[1800ms]`}
        >
          <p className="mt-6 eyebrow text-[#8A7550]">
            {doctor.specialty}
          </p>
        </Reveal>
      )}

      {/* NAME */}
      <Reveal
        delay={delay + 220}
        className={`${slideClass} duration-[1900ms]`}
      >
        <h3 className="mt-2 font-heading text-2xl font-light leading-snug md:text-3xl">
          {`${doctor.title || ''} ${doctor.name}`.trim()}
        </h3>
      </Reveal>

      {/* BIO */}
      {bio && (
        <Reveal
          delay={delay + 320}
          className={`${slideClass} duration-[2000ms]`}
        >
          <p className="mt-5 text-[0.98rem] leading-[1.75] text-neutral-700">
            {bio}
          </p>
        </Reveal>
      )}

      {/* QUALIFIKATIONEN */}
      {doctor.qualifications?.length > 0 && (
        <Reveal
          delay={delay + 420}
          className={`${slideClass} duration-[2100ms]`}
        >
          <ul className="mt-6 space-y-2.5">
            {doctor.qualifications.map((q) => (
              <li
                key={q}
                className="flex gap-3 text-sm leading-relaxed text-neutral-600"
              >
                <span
                  className="mt-2 h-px w-4 shrink-0 bg-[#C9AF80]"
                  aria-hidden="true"
                />

                {q}
              </li>
            ))}
          </ul>
        </Reveal>
      )}

    </div>
  );
}