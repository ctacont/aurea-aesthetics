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
    <section className="overflow-hidden bg-[#F8F6F3] px-6 py-24 lg:px-12 lg:py-40">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-20">

        <div className="lg:col-span-4">

          <Reveal
            delay={100}
            className="-translate-x-[35%] duration-[1800ms]"
          >
            <Eyebrow>
              {t('faqPreview.eyebrow')}
            </Eyebrow>
          </Reveal>

          <Reveal
            delay={220}
            className="-translate-x-[25%] translate-y-[6%] scale-[0.97] duration-[2200ms]"
          >
            <h2 className="mt-7 font-heading text-[2.1rem] font-light leading-[1.15] md:text-4xl">
              {t('faqPreview.title')}

              <span className="text-[#8A7550]">
                {t('faqPreview.accent')}
              </span>
            </h2>
          </Reveal>

          <Reveal
            delay={380}
            className="-translate-x-[18%] translate-y-[10%] duration-[2000ms]"
          >
            <Link
              to={langPath('/faq')}
              className="mt-8 inline-block eyebrow link-underline"
            >
              {t('faqPreview.allLink')}
            </Link>
          </Reveal>

        </div>

        <Reveal
          delay={260}
          className="lg:col-span-8 translate-x-[35%] translate-y-[5%] scale-[0.98] duration-[2400ms]"
        >
          <PrecisionAccordion
            items={faqs.slice(0, 4)}
          />
        </Reveal>

      </div>
    </section>
  );
}