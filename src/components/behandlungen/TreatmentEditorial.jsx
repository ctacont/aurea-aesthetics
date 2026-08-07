import React from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Eyebrow from '@/components/Eyebrow';
import FactGrid from '@/components/treatment/FactGrid';
import TextBlock from '@/components/treatment/TextBlock';
import PrecisionAccordion from '@/components/PrecisionAccordion';
import useParallax from '@/hooks/useParallax';
import { useLanguage, loc } from '@/lib/LanguageContext';
import { useBooking } from '@/hooks/useBooking';

export default function TreatmentEditorial({ data, index = 0 }) {
  const { t, lang } = useLanguage();
  const { handleBook } = useBooking();
  const { ref: imgRef, offset } = useParallax(0.16);
  const reversed = index % 2 === 1;

  const title = loc(data, 'title', lang);
  const lead = loc(data, 'lead', lang);
  const mechanism = loc(data, 'mechanism', lang);
  const procedure = loc(data, 'procedure', lang);
  const aftercare = loc(data, 'aftercare', lang);
  const risks = lang === 'en' ? data.risks_en : data.risks_de;
  const contraindications = lang === 'en' ? data.contraindications_en : data.contraindications_de;
  const faqs = (data.faqs || []).map((f) => ({
    q: lang === 'en' ? f.q_en || f.q_de : f.q_de,
    a: lang === 'en' ? f.a_en || f.a_de : f.a_de,
  }));
  const factData = {
    duration: lang === 'en' ? data.duration_en || data.duration : data.duration,
    downtime: lang === 'en' ? data.downtime_en || data.downtime : data.downtime,
    results_onset: lang === 'en' ? data.results_onset_en || data.results_onset : data.results_onset,
    results_duration: lang === 'en' ? data.results_duration_en || data.results_duration : data.results_duration,
    price_from: lang === 'en' ? data.price_from_en || data.price_from : data.price_from,
  };

  return (
    <div id={data.slug} className="scroll-mt-28 ">
      <div className={`flex flex-col lg:flex-row ${reversed ? 'lg:flex-row-reverse' : ''}`}>
        <div className="relative h-[55vh] w-full overflow-hidden lg:h-auto lg:w-1/2">
          <div className="lg:sticky lg:top-0 lg:h-screen">
            <div ref={imgRef} className="absolute inset-0" style={{ transform: `translateY(${offset}px) scale(1.12)` }}>
              <Image src={data.image_url} alt={title} className="h-full w-full" fittingType="fill" />
            </div>
          </div>
        </div>

        <div className="flex w-full items-center px-6 py-16 lg:w-1/2 lg:px-16 lg:py-28">
          <div>
            <motion.div
              initial={{ opacity: 0, x: reversed ? -44 : 44 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <Eyebrow>{t('categoryPage.crumbTreatments')}</Eyebrow>
              <h3 className="mt-6 font-heading text-3xl font-light leading-tight md:text-5xl">{title}</h3>
              <p className="mt-6 text-lg leading-[1.75] text-neutral-700">{lead}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-10"
            >
              <button onClick={handleBook} data-booking-cta="true" className="eyebrow text-[#8A7550] link-underline">
                {t('categoryPage.ctaRequest')}
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <FactGrid treatment={factData} />

      {data.indications?.length > 0 && (
        <section className="bg-[#F4F1EE] px-6 py-16 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <ul className="grid gap-5 sm:grid-cols-3">
              {data.indications.map((ind) => (
                <li key={ind} className="flex gap-4 border-b border-[#E8E2D9] pb-5 text-[0.95rem] leading-relaxed text-neutral-700">
                  <span className="mt-3 h-px w-5 shrink-0 bg-[#C9AF80]" aria-hidden="true" />
                  {ind}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {mechanism && <TextBlock eyebrow={t('treatmentDetail.mechanismEyebrow')} title={t('treatmentDetail.mechanismTitle')} body={mechanism} tone="dark" />}
      {procedure && <TextBlock eyebrow={t('treatmentDetail.procedureEyebrow')} title={t('treatmentDetail.procedureTitle')} body={procedure} />}
      {aftercare && <TextBlock eyebrow={t('treatmentDetail.aftercareEyebrow')} title={t('treatmentDetail.aftercareTitle')} body={aftercare} tone="dark" />}

      {(risks || contraindications) && (
        <section className="bg-background px-6 py-16 lg:px-12 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
            {risks && (
              <div>
                <p className="eyebrow text-[#8A7550]">{t('treatmentDetail.risks')}</p>
                <p className="mt-6 whitespace-pre-line text-[0.95rem] leading-[1.75] text-neutral-700">{risks}</p>
              </div>
            )}
            {contraindications && (
              <div>
                <p className="eyebrow text-[#8A7550]">{t('treatmentDetail.contraindications')}</p>
                <p className="mt-6 whitespace-pre-line text-[0.95rem] leading-[1.75] text-neutral-700">{contraindications}</p>
              </div>
            )}
            <div className="lg:col-span-2">
              <p className="border-t border-[#E8E2D9] pt-8 text-xs leading-relaxed text-neutral-500">
                {t('treatmentDetail.disclaimer')}
                {data.medical_reviewer && t('treatmentDetail.medicalReviewerSuffix', { reviewer: data.medical_reviewer })}
              </p>
            </div>
          </div>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="bg-[#F4F1EE] px-6 py-16 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <PrecisionAccordion items={faqs} reviewer={data.medical_reviewer} />
          </div>
        </section>
      )}
    </div>
  );
}