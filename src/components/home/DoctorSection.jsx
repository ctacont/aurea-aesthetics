import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import { IMAGES } from '@/lib/site';
import { useLanguage, loc } from '@/lib/LanguageContext';

export default function DoctorSection({ doctors = [] }) {
  const sorted = [...doctors].sort((a, b) => (a.order || 0) - (b.order || 0));
  const { t, lang, langPath } = useLanguage();

  return (
    <section className="bg-background px-6 py-24 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal><Eyebrow>{t('doctor.eyebrow')}</Eyebrow></Reveal>
        <Reveal delay={80}>
          <h2 className="mt-7 max-w-2xl font-heading text-[2.1rem] font-light leading-tight md:text-5xl">
            {t('doctor.sectionTitle')}
          </h2>
        </Reveal>

        {sorted.length > 0 ?
        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-14">
            {sorted.map((doc, i) =>
          <Reveal key={doc.id} delay={140 + i * 100}>
                <div className="relative aspect-[4/5] w-full">
                  <Image
                src={doc.photo_url || IMAGES.interior}
                alt={`${doc.title || ''} ${doc.name}`.trim()}
                className="h-full w-full"
                fittingType="fill" />
              
                </div>

                {doc.specialty &&
            <p className="mt-6 eyebrow text-[#8A7550]">{doc.specialty}</p>
            }

                <h3 className="mt-2 font-heading text-2xl font-light leading-snug md:text-3xl">
                  {`${doc.title || ''} ${doc.name}`.trim()}
                </h3>

                {(doc.bio_de || doc.bio_en) &&
            <p className="mt-5 text-[0.98rem] leading-[1.75] text-neutral-700">
                    {loc(doc, 'bio', lang) || doc.bio_de}
                  </p>
            }

                {doc.qualifications?.length > 0 &&
            <ul className="mt-6 space-y-2.5">
                    {doc.qualifications.map((q) =>
              <li key={q} className="flex gap-3 text-sm leading-relaxed text-neutral-600">
                        <span className="mt-2 h-px w-4 shrink-0 bg-[#C9AF80]" aria-hidden="true" />
                        {q}
                      </li>
              )}
                  </ul>
            }
              </Reveal>
          )}
          </div> :

        <Reveal delay={140}>
            <div className="mt-16 max-w-xl border-l border-[#C9AF80] pl-7">
              <p className="text-lg leading-[1.75] text-neutral-700">
                {t('doctor.placeholder')}
              </p>
              <p className="mt-5 eyebrow text-neutral-400">{t('doctor.placeholderLabel')}</p>
            </div>
          </Reveal>
        }

        <Reveal delay={340}>
          <Link to={langPath('/aerztinnen')} className="mt-14 inline-block eyebrow link-underline">
            {t('doctor.moreLink')}
          </Link>
        </Reveal>
      </div>
    </section>);

}