import React from 'react';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import GoldButton from '@/components/GoldButton';
import { useLanguage } from '@/lib/LanguageContext';
import { useBooking } from '@/hooks/useBooking';

export default function CtaBand({ settings, title, text }) {
  const { t, langPath } = useLanguage();
  const { handleBook } = useBooking();

  return (
    <section className="bg-[#111111] px-6 py-24 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal><Eyebrow tone="light" className="justify-center">{t('ctaBand.eyebrow')}</Eyebrow></Reveal>
        <Reveal delay={80}>
          <h2 className="mt-8 font-heading text-[2.1rem] font-light leading-[1.15] text-white md:text-5xl">
            {title || (
              <>
                {t('ctaBand.defaultTitle')}
                <span className="text-[#C9AF80]"> Zürich.</span>
              </>
            )}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-8 max-w-xl text-[0.98rem] leading-relaxed text-white/70">
            {text || t('ctaBand.defaultText')}
          </p>
        </Reveal>
        <Reveal delay={200}>
          <GoldButton onClick={handleBook} data-booking-cta="true" tone="light" className="mt-14 px-10">
            {t('ctaBand.button')}
          </GoldButton>
        </Reveal>
      </div>
    </section>
  );
}