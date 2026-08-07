import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Eyebrow from '@/components/Eyebrow';
import CategorySection from '@/components/treatment/CategorySection';
import CtaBand from '@/components/CtaBand';
import { useSettings } from '@/lib/useSite';
import { categoryProcedureSchema, breadcrumbSchema } from '@/lib/schema';
import { useLanguage, loc } from '@/lib/LanguageContext';

export default function CategoryPageLayout({ category }) {
  const { settings } = useSettings();
  const { t, lang, langPath, neutralPath } = useLanguage();

  const title = loc(category, 'title', lang);
  const accent = loc(category, 'accent', lang);
  const lead = loc(category, 'lead', lang);
  const seoDesc = lang === 'en' ? category.seoDesc_en : category.seoDesc_de;
  const path = `/behandlungen/${category.slug}`;

  const crumbs = [
    { name: t('categoryPage.crumbHome'), path: '/' },
    { name: t('categoryPage.crumbTreatments'), path: '/behandlungen' },
    { name: title, path },
  ];

  return (
    <>
      <Seo
        title={`${title} | Aurea Aesthetics AG`}
        description={seoDesc}
        path={neutralPath(window.location.pathname)}
        lang={lang}
        ogImage={category.image_url}
        jsonLd={[
          categoryProcedureSchema({ name: title, description: seoDesc, path }),
          breadcrumbSchema(crumbs),
        ]}
      />

      <PageHero eyebrow={t('categoryPage.crumbTreatments')} title={title} accent={accent} lead={lead} image={category.image_url} breadcrumbs={crumbs} />

      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>{t('categoryPage.sectionsNavTitle')}</Eyebrow>
              <p className="mt-6 text-lg leading-[1.75] text-neutral-700">{lead}</p>
            </Reveal>
          </div>
          <Reveal delay={80} className="lg:col-span-5 lg:col-start-8">
            <ul className="space-y-3 border-t border-[#E8E2D9] pt-6">
              {category.sections.map((s) => (
                <li key={s.id} className="border-b border-[#E8E2D9] pb-3">
                  <a href={`#${s.id}`} className="font-heading text-lg text-neutral-800 link-underline">
                    {loc(s, 'title', lang)}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {category.sections.map((s, i) => (
        <CategorySection key={s.id} section={s} categoryPath={path} index={i} />
      ))}

      <CtaBand settings={settings} />
    </>
  );
}