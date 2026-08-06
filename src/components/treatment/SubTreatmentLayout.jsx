import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import FactGrid from '@/components/treatment/FactGrid';
import TextBlock from '@/components/treatment/TextBlock';
import PrecisionAccordion from '@/components/PrecisionAccordion';
import CtaBand from '@/components/CtaBand';
import { useSettings } from '@/lib/useSite';
import { treatmentSchema, breadcrumbSchema } from '@/lib/schema';
import { useLanguage, loc } from '@/lib/LanguageContext';
import { CATEGORIES } from '@/lib/categoryContent';

export default function SubTreatmentLayout({ data }) {
  const { settings } = useSettings();
  const { t, lang, langPath, neutralPath } = useLanguage();

  const title = loc(data, 'title', lang);
  const lead = loc(data, 'lead', lang);
  const metaTitle = lang === 'en' ? (data.meta_title_en || title) : data.meta_title_de;
  const metaDesc = lang === 'en' ? (data.meta_description_en || lead) : data.meta_description_de;
  const mechanism = loc(data, 'mechanism', lang);
  const procedure = loc(data, 'procedure', lang);
  const aftercare = loc(data, 'aftercare', lang);
  const risks = lang === 'en' ? data.risks_en : data.risks_de;
  const contraindications = lang === 'en' ? data.contraindications_en : data.contraindications_de;
  const faqs = (data.faqs || []).map((f) => ({
    q: lang === 'en' ? (f.q_en || f.q_de) : f.q_de,
    a: lang === 'en' ? (f.a_en || f.a_de) : f.a_de,
  }));

  const factData = {
    duration: lang === 'en' ? (data.duration_en || data.duration) : data.duration,
    downtime: lang === 'en' ? (data.downtime_en || data.downtime) : data.downtime,
    results_onset: lang === 'en' ? (data.results_onset_en || data.results_onset) : data.results_onset,
    results_duration: lang === 'en' ? (data.results_duration_en || data.results_duration) : data.results_duration,
    price_from: lang === 'en' ? (data.price_from_en || data.price_from) : data.price_from,
  };

  const category = CATEGORIES[data.category];
  const crumbs = [
    { name: t('subTreatment.crumbHome'), path: '/' },
    { name: t('subTreatment.crumbTreatments'), path: '/behandlungen' },
    { name: category ? loc(category, 'title', lang) : t('subTreatment.crumbTreatments'), path: data.categoryPath },
    { name: title, path: `/behandlungen/${data.slug}` },
  ];

  return (
    <>
      <Seo
        title={metaTitle}
        description={metaDesc}
        path={neutralPath(window.location.pathname)}
        lang={lang}
        ogImage={data.image_url}
        jsonLd={[treatmentSchema({ ...data, title_de: title }), breadcrumbSchema(crumbs)]}
      />

      <PageHero eyebrow={t('categoryPage.crumbTreatments')} title={title} lead={lead} image={data.image_url} breadcrumbs={crumbs} />

      <FactGrid treatment={factData} />

      {data.indications?.length > 0 && (
        <section className="bg-[#F4F1EE] px-6 py-20 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <ul className="grid gap-5 sm:grid-cols-3">
              {data.indications.map((ind) => (
                <li key={ind} className="flex gap-4 border-b border-[#E8E2D9] pb-5 text-[0.98rem] leading-relaxed text-neutral-700">
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
        <section className="bg-[#F4F1EE] px-6 py-20 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
            {risks && (
              <div>
                <p className="eyebrow text-[#8A7550]">{t('treatmentDetail.risks')}</p>
                <p className="mt-6 whitespace-pre-line text-[0.98rem] leading-[1.75] text-neutral-700">{risks}</p>
              </div>
            )}
            {contraindications && (
              <div>
                <p className="eyebrow text-[#8A7550]">{t('treatmentDetail.contraindications')}</p>
                <p className="mt-6 whitespace-pre-line text-[0.98rem] leading-[1.75] text-neutral-700">{contraindications}</p>
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
        <section className="bg-background px-6 py-24 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-4xl">
            <PrecisionAccordion items={faqs} reviewer={data.medical_reviewer} />
          </div>
        </section>
      )}

      <CtaBand settings={settings} title={<>{t('treatmentDetail.ctaTitlePrefix')} <span className="text-[#8A7550]">{title}</span></>} />
    </>
  );
}