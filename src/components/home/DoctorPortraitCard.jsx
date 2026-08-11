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

  const specialtyText = loc(doctor, 'specialty', lang) || doctor.specialty || doctor.title;
  const bioRaw = loc(doctor, 'bio', lang) || doctor.bio_de;
  const bio = bioRaw ? bioRaw.split('\n\n')[0] : '';
  const qualifications = (lang === 'en' && doctor.qualifications_en) ? doctor.qualifications_en : doctor.qualifications;

  // Stärkerer Effekt für das Bild
  const imageSlideClass =
    direction === 'left'
      ? '-translate-x-[50%] translate-y-[6%] scale-[0.94]'
      : 'translate-x-[50%] -translate-y-[6%] scale-[0.94]';

  // Dezenter Effekt für Texte
  const textSlideClass =
    direction === 'left'
      ? '-translate-x-[12%]'
      : 'translate-x-[12%]';

  return (
    <div>

      {/* BILD */}
      <Reveal
        delay={delay}
        className={`${imageSlideClass} duration-[2400ms]`}
      >
        <div
          ref={ref}
          className="group relative aspect-[4/5] w-full overflow-hidden"
        >
          <div
            style={{
              transform: `translateY(${offset}px) scale(1.08)`
            }}
            className="h-full w-full transition-transform duration-700 group-hover:scale-[1.1]"
          >
            <Image
              src={doctor.photo_url || IMAGES.interior}
              alt={doctor.name}
              className="h-full w-full object-cover"
              fittingType="fill"
            />
          </div>
        </div>
      </Reveal>

      {/* FACHGEBIET */}
      {specialtyText && (
        <Reveal
          delay={delay + 140}
          className={`${textSlideClass} duration-[1800ms]`}
        >
          <p className="mt-6 eyebrow text-[#8A7550]">
            {specialtyText}
          </p>
        </Reveal>
      )}

      {/* NAME */}
      <Reveal
        delay={delay + 240}
        className={`${textSlideClass} duration-[1900ms]`}
      >
        <h3 className="mt-2 font-heading text-2xl font-light leading-snug md:text-3xl">
          {doctor.name}
        </h3>
      </Reveal>

      {/* BIO TEASER */}
      {bio && (
        <Reveal
          delay={delay + 340}
          className={`${textSlideClass} duration-[2000ms]`}
        >
          <p className="mt-5 text-[0.98rem] leading-[1.75] text-neutral-700">
            {bio}
          </p>
        </Reveal>
      )}

      {/* QUALIFIKATIONEN */}
      {qualifications?.length > 0 && (
        <Reveal
          delay={delay + 440}
          className={`${textSlideClass} duration-[2100ms]`}
        >
          <ul className="mt-6 space-y-2.5">
            {qualifications.slice(0, 4).map((q) => (
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