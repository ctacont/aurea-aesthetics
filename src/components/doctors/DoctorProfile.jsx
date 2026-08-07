import React from 'react';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/Reveal';
import GoldButton from '@/components/GoldButton';
import useParallax from '@/hooks/useParallax';
import { IMAGES } from '@/lib/site';
import { useLanguage, loc } from '@/lib/LanguageContext';
import { useBooking } from '@/hooks/useBooking';

export default function DoctorProfile({ doctor, quote, reversed = false }) {
  const { t, lang, langPath } = useLanguage();
  const { handleBook } = useBooking();
  const bio = loc(doctor, 'bio', lang);
  const { ref: portraitRef, offset } = useParallax(0.08);

  return (
    <section className="border-t border-[#E8E2D9] px-6 py-16 lg:px-12 lg:py-24">
      <div className={`mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-14`}>
        <Reveal delay={100} className={`-translate-x-full reveal-slow lg:col-span-6 ${reversed ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-7'} lg:pl-2`}>
          <div ref={portraitRef} className="group relative aspect-[3/4] w-full overflow-hidden">
            <div style={{ transform: `translateY(${offset}px) scale(1.08)` }} className="h-full w-full transition-transform duration-700 group-hover:scale-[1.12]">
              <Image src={doctor.photo_url || IMAGES.interior} alt={`${doctor.title || ''} ${doctor.name}`.trim()} className="h-full w-full object-cover" fittingType="fill" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className={`lg:col-span-6 ${reversed ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-7'} lg:pl-2`}>
          {doctor.specialty && <p className="eyebrow text-[#8A7550]">{`${doctor.title || ''} ${doctor.name}`.trim()} — {doctor.specialty}</p>}
          <h2 className="mt-4 font-heading text-3xl font-light leading-tight md:text-4xl">{doctor.name}</h2>

          {bio && <p className="mt-6 text-lg leading-[1.75] text-neutral-700">{bio}</p>}

          <p className="eyebrow mt-8 text-neutral-500">{t('aerztinnen.languagesLabel')}: {t('aerztinnen.languages')}</p>

          {doctor.qualifications?.length > 0 &&
          <>
              <p className="eyebrow mt-8 text-neutral-500">{t('aerztinnen.qualificationsLabel')}</p>
              <ul className="mt-4 space-y-2">
                {doctor.qualifications.map((q) =>
              <li key={q} className="flex gap-3 text-[0.95rem] leading-relaxed text-neutral-700">
                    <span className="text-[#C9AF80]" aria-hidden="true">—</span>
                    {q}
                  </li>
              )}
              </ul>
            </>
          }

          {quote &&
          <blockquote className="mt-8 border-l-2 border-[#C9AF80] py-2 pl-6 font-heading text-xl italic leading-relaxed text-neutral-800">
              {quote}
            </blockquote>
          }

          <GoldButton onClick={handleBook} data-booking-cta="true" tone="primary" className="mt-9 px-9">
            {t('aerztinnen.cta')}
          </GoldButton>
        </Reveal>
      </div>
    </section>);

}