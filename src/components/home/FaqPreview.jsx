import React from 'react';
import { Link } from 'react-router-dom';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import PrecisionAccordion from '@/components/PrecisionAccordion';
import { GENERAL_FAQS } from '@/lib/site';
import { useLanguage } from '@/lib/LanguageContext';

export default function FaqPreview() {
  const { t, lang, langPath } = useLanguage();
  const faqs = GENERAL_FAQS[lang];

  return (
    <section className="bg-[#F8F6F3] px-6 py-24 lg:px-12 lg:py-40">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-4">
          <Reveal><Eyebrow>{t('faqPreview.eyebrow')}</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-7 font-heading text-[2.1rem] font-light leading-[1.15] md:text-4xl">
              {t('faqPreview.title')}
              <span className="text-[#8A7550]">{t('faqPreview.accent')}</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <Link to={langPath('/faq')} className="mt-8 inline-block eyebrow link-underline">
              {t('faqPreview.allLink')}
            </Link>
          </Reveal>
        </div>
        <Reveal delay={160} className="lg:col-span-8">
          <PrecisionAccordion items={faqs.slice(0, 4)} />
        </Reveal>
      </div>
    </section>
  );
}