import React from 'react';
import { Link } from 'react-router-dom';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import DoctorPortraitCard from '@/components/home/DoctorPortraitCard';
import { useLanguage } from '@/lib/LanguageContext';

export default function DoctorSection({ doctors = [] }) {
  const sorted = [...doctors].sort(
    (a, b) => (a.order || 0) - (b.order || 0)
  );

  const { t, langPath } = useLanguage();

  return (
    <section className="px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-6xl">

        <Reveal>
          <Eyebrow>
            {t('doctor.eyebrow')}
          </Eyebrow>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-7 font-heading text-[2.1rem] font-light leading-[1.15] md:text-5xl">
            {t('doctor.sectionTitle')}
          </h2>
        </Reveal>

        {sorted.length > 0 ? (
          <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-14">
            {sorted.map((doc, i) => (
              <DoctorPortraitCard
                key={doc.id}
                doctor={doc}
                delay={140 + i * 40}
              />
            ))}
          </div>
        ) : (
          <Reveal delay={140}>
            <div className="mt-16 max-w-xl border-l border-[#C9AF80] pl-7">
              <p className="text-lg leading-[1.75] text-neutral-700">
                {t('doctor.placeholder')}
              </p>

              <p className="mt-5 eyebrow text-neutral-400">
                {t('doctor.placeholderLabel')}
              </p>
            </div>
          </Reveal>
        )}

        <Reveal delay={340}>
          <Link
            to={langPath('/aerztinnen')}
            className="mt-14 inline-block eyebrow link-underline"
          >
            {t('doctor.moreLink')}
          </Link>
        </Reveal>

      </div>
    </section>
  );
}