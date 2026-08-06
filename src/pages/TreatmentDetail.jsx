import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Eyebrow from '@/components/Eyebrow';
import FactGrid from '@/components/treatment/FactGrid';
import TextBlock from '@/components/treatment/TextBlock';
import PrecisionAccordion from '@/components/PrecisionAccordion';
import CtaBand from '@/components/CtaBand';
import TreatmentCard from '@/components/TreatmentCard';
import { useSettings, useTreatments } from '@/lib/useSite';
import { treatmentSchema, breadcrumbSchema, medicalBusinessSchema } from '@/lib/schema';
import { useLanguage, loc } from '@/lib/LanguageContext';
import { CATEGORIES } from '@/lib/categoryContent';

const CATEGORY_LINK_BY_SLUG = Object.fromEntries(
  Object.values(CATEGORIES).map((c) => [c.canonicalSlug, c])
);

export default function TreatmentDetail() {
  const { slug } = useParams();
  const { settings } = useSettings();
  const { data: treatments = [], isLoading } = useTreatments();
  const { t, lang, langPath, neutralPath } = useLanguage();

  const tr = treatments.find((x) => x.slug === slug);
  const related = treatments.filter((x) => x.slug !== slug).slice(0, 3);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-6 w-6 animate-spin rounded-full border border-[#E8E2D9] border-t-[#C9AF80]" />
      </div>
    );
  }

  const title = loc(tr, 'title', lang) || tr?.title_de;
  const lead = loc(tr, 'lead', lang) || tr?.lead_de;
  const metaTitle = lang === 'en' ? (tr?.meta_title_en || tr?.meta_title_de || title) : (tr?.meta_title_de || title);
  const metaDesc = lang === 'en' ? (tr?.meta_description_en || tr?.meta_description_de || lead) : (tr?.meta_description_de || lead);
  const mechanism = loc(tr, 'mechanism', lang) || tr?.mechanism_de;
  const procedure = loc(tr, 'procedure', lang) || tr?.procedure_de;
  const aftercare = loc(tr, 'aftercare', lang) || tr?.aftercare_de;
  const risks = loc(tr, 'risks', lang) || tr?.risks_de;
  const contraindications = loc(tr, 'contraindications', lang) || tr?.contraindications_de;
  const linkedCategory = tr ? CATEGORY_LINK_BY_SLUG[tr.slug] : undefined;

  if (!tr) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
        <Seo title={t('treatmentDetail.notFoundTitle')} noindex path={neutralPath(window.location.pathname)} lang={lang} />
        <h1 className="font-heading text-4xl font-light">{t('treatmentDetail.notFoundTitle')}</h1>
        <Link to={langPath('/behandlungen')} className="mt-8 eyebrow text-[#8A7550] link-underline">
          {t('treatmentDetail.notFoundLink')}
        </Link>
      </div>
    );
  }

  const crumbs = [
    { name: t('treatmentDetail.crumbHome'), path: '/' },
    { name: t('treatmentDetail.crumbTreatments'), path: '/behandlungen' },
    { name: title, path: `/behandlungen/${tr.slug}` },
  ];

  return (
    <>
      <Seo
        title={metaTitle}
        description={metaDesc}
        path={neutralPath(window.location.pathname)}
        lang={lang}
        ogImage={tr.image_url}
        jsonLd={[treatmentSchema(tr), breadcrumbSchema(crumbs), medicalBusinessSchema(settings)]}
      />

      <PageHero
        eyebrow={t('treatmentDetail.eyebrowPrefix', { district: settings.district })}
        title={title}
        lead={lead}
        image={tr.image_url}
        breadcrumbs={crumbs}
      />

      <FactGrid treatment={tr} />

      {linkedCategory && (
        <div className="border-b border-[#E8E2D9] px-6 py-6 text-center lg:px-12">
          <Link to={langPath(`/behandlungen/${linkedCategory.slug}`)} className="eyebrow text-[#8A7550] link-underline">
            {t('treatmentDetail.categoryLinkPrefix')} {loc(linkedCategory, 'title', lang)}
          </Link>
        </div>
      )}

      {tr.indications?.length > 0 && (
        <section className="bg-[#F4F1EE] px-6 py-20 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow>{t('treatmentDetail.indicationsEyebrow')}</Eyebrow>
                <h2 className="mt-6 font-heading text-[1.8rem] font-light leading-tight md:text-4xl">
                  {t('treatmentDetail.indicationsTitle')}
                </h2>
              </Reveal>
            </div>
            <Reveal delay={100} className="lg:col-span-8">
              <ul className="grid gap-5 sm:grid-cols-2">
                {tr.indications.map((ind) => (
                  <li key={ind} className="flex gap-4 border-b border-[#E8E2D9] pb-5 text-[0.98rem] leading-relaxed text-neutral-700">
                    <span className="mt-3 h-px w-5 shrink-0 bg-[#C9AF80]" aria-hidden="true" />
                    {ind}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      )}

      {mechanism && (
        <TextBlock eyebrow={t('treatmentDetail.mechanismEyebrow')} title={t('treatmentDetail.mechanismTitle')} body={mechanism} tone="dark" />
      )}

      {tr.detail_image_url && (
        <Reveal>
          <div className="relative h-[50svh] w-full lg:h-[75svh]">
            <Image src={tr.detail_image_url} alt={title} className="h-full w-full" fittingType="fill" />
          </div>
        </Reveal>
      )}

      {procedure && (
        <TextBlock eyebrow={t('treatmentDetail.procedureEyebrow')} title={t('treatmentDetail.procedureTitle')} body={procedure} />
      )}

      {aftercare && (
        <TextBlock eyebrow={t('treatmentDetail.aftercareEyebrow')} title={t('treatmentDetail.aftercareTitle')} body={aftercare} tone="dark" />
      )}

      {(risks || contraindications) && (
        <section className="bg-[#F4F1EE] px-6 py-20 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
            {risks && (
              <Reveal>
                <p className="eyebrow text-[#8A7550]">{t('treatmentDetail.risks')}</p>
                <p className="mt-6 whitespace-pre-line text-[0.98rem] leading-[1.75] text-neutral-700">
                  {risks}
                </p>
              </Reveal>
            )}
            {contraindications && (
              <Reveal delay={100}>
                <p className="eyebrow text-[#8A7550]">{t('treatmentDetail.contraindications')}</p>
                <p className="mt-6 whitespace-pre-line text-[0.98rem] leading-[1.75] text-neutral-700">
                  {contraindications}
                </p>
              </Reveal>
            )}
            <div className="lg:col-span-2">
              <Reveal delay={160}>
                <p className="border-t border-[#E8E2D9] pt-8 text-xs leading-relaxed text-neutral-500">
                  {t('treatmentDetail.disclaimer')}
                  {tr.medical_reviewer && t('treatmentDetail.medicalReviewerSuffix', { reviewer: tr.medical_reviewer })}
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {tr.faqs?.length > 0 && (
        <section className="bg-background px-6 py-24 lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow>{t('treatmentDetail.faqsEyebrow')}</Eyebrow>
                <h2 className="mt-6 font-heading text-[1.8rem] font-light leading-tight md:text-4xl">
                  {t('treatmentDetail.faqsTitle')}
                </h2>
              </Reveal>
            </div>
            <Reveal delay={100} className="lg:col-span-8">
              <PrecisionAccordion items={tr.faqs} reviewer={tr.medical_reviewer} />
            </Reveal>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="bg-[#F4F1EE] px-6 py-24 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal><Eyebrow>{t('treatmentDetail.relatedEyebrow')}</Eyebrow></Reveal>
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r.id} delay={i * 70}>
                  <TreatmentCard treatment={r} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        settings={settings}
        title={<>{t('treatmentDetail.ctaTitlePrefix')} <span className="text-[#8A7550]">{title}</span></>}
        text={t('treatmentDetail.ctaText')}
      />
    </>
  );
}