import React from 'react';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/Reveal';
import GoldButton from '@/components/GoldButton';
import useParallax from '@/hooks/useParallax';
import { IMAGES } from '@/lib/site';
import { useLanguage, loc } from '@/lib/LanguageContext';
import { useBooking } from '@/hooks/useBooking';

export default function DoctorProfile({
  doctor,
  quote,
  reversed = false
}) {
  const { t, lang } = useLanguage();
  const { handleBook } = useBooking();

  const bio = loc(doctor, 'bio', lang);
  const bioParagraphs = bio ? bio.split('\n\n') : [];

  const specialtyText = loc(doctor, 'specialty', lang) || doctor.specialty || doctor.title;
  const qualifications = (lang === 'en' && doctor.qualifications_en) ? doctor.qualifications_en : doctor.qualifications;
  const focusAreas = (lang === 'en' && doctor.focus_en) ? doctor.focus_en : doctor.focus;
  const languagesText = (lang === 'en' && doctor.languages_en) ? doctor.languages_en : (doctor.languages || t('aerztinnen.languages'));
  const quoteText = quote || loc(doctor, 'quote', lang) || doctor.quote;

  const { ref: portraitRef, offset } = useParallax(0.08);

  return (
    <section className="overflow-hidden px-6 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-14">

        {/* BILD */}
        <Reveal
          className={`lg:col-span-5 duration-[1800ms] ${
            reversed
              ? 'lg:order-2 translate-x-[30%]'
              : '-translate-x-[30%]'
          }`}
        >
          <div
            ref={portraitRef}
            className="group relative aspect-[4/5] w-full overflow-hidden shadow-sm"
          >
            <div
              style={{
                transform: `translateY(${offset}px) scale(1.08)`
              }}
              className="h-full w-full"
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

        {/* TEXT */}
        <Reveal
          delay={100}
          className={`lg:col-span-7 duration-[1800ms] ${
            reversed
              ? 'lg:order-1 lg:col-start-1 -translate-x-[20%]'
              : 'lg:col-start-6 translate-x-[20%]'
          } lg:pl-2`}
        >
          {specialtyText && (
            <p className="eyebrow text-[#8A7550]">
              {specialtyText}
            </p>
          )}

          <h2 className="mt-3 font-heading text-3xl font-light leading-tight text-neutral-900 md:text-4xl">
            {doctor.name}
          </h2>

          {/* BIO PARAGRAPHS */}
          {bioParagraphs.length > 0 && (
            <div className="mt-6 space-y-4 text-[0.98rem] leading-[1.8] text-neutral-700">
              {bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          )}

          {/* QUALIFIKATION & ERFAHRUNG */}
          {qualifications?.length > 0 && (
            <div className="mt-10 border-t border-neutral-200/80 pt-8">
              <p className="eyebrow text-neutral-500">
                {t('aerztinnen.qualificationsLabel')}
              </p>

              <ul className="mt-4 grid gap-2.5 sm:grid-cols-1">
                {qualifications.map((q) => (
                  <li
                    key={q}
                    className="flex gap-3 text-[0.95rem] leading-relaxed text-neutral-700"
                  >
                    <span
                      className="text-[#C9AF80]"
                      aria-hidden="true"
                    >
                      —
                    </span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* BEHANDLUNGSSCHWERPUNKTE */}
          {focusAreas?.length > 0 && (
            <div className="mt-8 border-t border-neutral-200/80 pt-8">
              <p className="eyebrow text-neutral-500">
                {t('aerztinnen.focusLabel') || 'Behandlungsschwerpunkte'}
              </p>

              <div className="mt-3.5 flex flex-wrap gap-2">
                {focusAreas.map((item) => (
                  <span
                    key={item}
                    className="inline-block rounded-full bg-[#FAF8F5] px-4 py-1.5 text-[0.85rem] font-medium tracking-wide text-neutral-800 border border-[#E5DEC9]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* SPRACHEN */}
          {languagesText && (
            <div className="mt-6">
              <p className="eyebrow text-neutral-500">
                {t('aerztinnen.languagesLabel')}: <span className="font-normal text-neutral-700">{languagesText}</span>
              </p>
            </div>
          )}

          {/* ZITAT */}
          {quoteText && (
            <blockquote className="mt-8 border-l-2 border-[#C9AF80] py-2.5 pl-6 font-heading text-lg italic leading-relaxed text-neutral-800 bg-[#FAF8F5]/60 rounded-r">
              {quoteText}
            </blockquote>
          )}

          <GoldButton
            onClick={handleBook}
            data-booking-cta="true"
            tone="primary"
            className="mt-9 px-9"
          >
            {t('aerztinnen.cta')}
          </GoldButton>
        </Reveal>

      </div>
    </section>
  );
}