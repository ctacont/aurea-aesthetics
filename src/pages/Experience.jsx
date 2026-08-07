import React from 'react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import Pillars from '@/components/home/Pillars';
import Process from '@/components/home/Process';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import Eyebrow from '@/components/Eyebrow';
import { Image } from '@/components/ui/image';
import useParallax from '@/hooks/useParallax';
import { useSettings } from '@/lib/useSite';
import { breadcrumbSchema } from '@/lib/schema';
import { IMAGES } from '@/lib/site';
import { useLanguage } from '@/lib/LanguageContext';

export default function Experience() {
  const { settings } = useSettings();
  const { t, lang, neutralPath } = useLanguage();
  const { ref: imgRef, offset } = useParallax(0.10);
  const crumbs = [
    { name: t('experience.crumbHome'), path: '/' },
    { name: t('experience.crumbExperience'), path: '/experience' },
  ];

  return (
    <>
      <Seo
        title={t('experience.seoTitle')}
        description={t('experience.seoDesc')}
        path={neutralPath(window.location.pathname)}
        lang={lang}
        jsonLd={breadcrumbSchema(crumbs)}
      />
      <PageHero
        eyebrow={t('experience.eyebrow')}
        title={t('experience.title')}
        accent={t('experience.accent')}
        lead={t('experience.lead')}
        image={IMAGES.experience}
        breadcrumbs={crumbs}
      />

      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div ref={imgRef} className="relative aspect-[3/4] w-full overflow-hidden">
              <div style={{ transform: `translateY(${offset}px) scale(1.12)` }} className="h-full w-full">
                <Image src={IMAGES.bio} alt={t('experience.envAlt')} className="h-full w-full" fittingType="fill" />
              </div>
            </div>
          </Reveal>
          <div className="lg:col-span-7 lg:pt-8">
            <Reveal delay={80}><Eyebrow>{t('experience.envEyebrow')}</Eyebrow></Reveal>
            <Reveal delay={140}>
              <h2 className="mt-7 font-heading text-[2rem] font-light leading-[1.18] md:text-4xl">
                {t('experience.envTitle')}
                <span className="text-[#8A7550]">{t('experience.envAccent')}</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 space-y-6 text-lg leading-[1.75] text-neutral-700">
                <p>{t('experience.envP1')}</p>
                <p>{t('experience.envP2')}</p>
                <p>{t('experience.envP3')}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Pillars />
      <Process />
      <CtaBand settings={settings} />
    </>
  );
}