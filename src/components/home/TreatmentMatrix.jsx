import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import TreatmentCard from '@/components/TreatmentCard';
import { useLanguage } from '@/lib/LanguageContext';

export default function TreatmentMatrix({ treatments }) {
  const { t, langPath } = useLanguage();

  return (
    <section className="bg-background py-24 lg:py-40">
      <div className="px-6 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal><Eyebrow>{t('treatmentMatrix.eyebrow')}</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h2 className="font-heading text-[2.1rem] font-light leading-[1.15] md:text-5xl mt-7 max-w-xl">
              {t('treatmentMatrix.title')}
              <span className="text-[#8A7550]">{t('treatmentMatrix.accent')}</span>
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="mt-14 px-6 lg:px-12">
        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((tr, i) =>
          <Reveal key={tr.id} delay={i * 60}>
              <TreatmentCard treatment={tr} />
            </Reveal>
          )}
        </div>
      </div>

      <div className="mt-14 px-6 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Link to={langPath('/behandlungen')} className="eyebrow inline-flex items-center gap-3 link-underline">
            {t('treatmentMatrix.allTreatments')}
            <ArrowRight className="h-4 w-4 text-[#C9AF80]" strokeWidth={1} />
          </Link>
        </div>
      </div>
    </section>);

}