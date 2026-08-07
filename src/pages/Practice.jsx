import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Eyebrow from '@/components/Eyebrow';
import CtaBand from '@/components/CtaBand';
import { Image } from '@/components/ui/image';
import useParallax from '@/hooks/useParallax';
import { useSettings, useDoctors } from '@/lib/useSite';
import { breadcrumbSchema, medicalBusinessSchema } from '@/lib/schema';
import { IMAGES, VALUES } from '@/lib/site';
import { useLanguage } from '@/lib/LanguageContext';

export default function Practice() {
  const { settings } = useSettings();
  const { data: doctors = [] } = useDoctors();
  const { t, lang, langPath, neutralPath } = useLanguage();
  const { ref: imgRef, offset } = useParallax(0.10);
  const values = VALUES[lang];

  const crumbs = [
    { name: t('practice.crumbHome'), path: '/' },
    { name: t('practice.crumbPraxis'), path: '/praxis' },
  ];

  return (
    <>
      <Seo
        title={t('practice.seoTitle')}
        description={t('practice.seoDesc')}
        path={neutralPath(window.location.pathname)}
        lang={lang}
        ogImage={IMAGES.practice}
        jsonLd={[medicalBusinessSchema(settings), breadcrumbSchema(crumbs)]}
      />
      
      <PageHero
        eyebrow={t('practice.eyebrow', { name: settings.practice_name })}
        title={t('practice.title')}
        accent={t('practice.accent')}
        lead={t('practice.lead', { street: settings.street, district: settings.district })}
        image={IMAGES.practice}
        breadcrumbs={crumbs}
      />

      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal delay={400} className=" translate-x-12"><Eyebrow>{t('practice.selfEyebrow')}</Eyebrow></Reveal>
            <Reveal delay={580} className=" translate-x-12">
              <h2 className="mt-7 font-heading text-[2rem] font-light leading-[1.18] md:text-4xl">
                {t('practice.selfTitle')}
                <span className="text-[#8A7550]">{t('practice.selfAccent')}</span>
              </h2>
            </Reveal>
            <Reveal delay={640} className=" translate-x-12">
              <div className="mt-10 space-y-6 text-lg leading-[1.75] text-neutral-700">
                <p>{t('practice.selfP1')}</p>
                <p>{t('practice.selfP2')}</p>
                <p>{t('practice.selfP3')}</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={700} className="lg:col-span-5 translate-x-12">
            <div ref={imgRef} className="relative aspect-[4/5] w-full overflow-hidden">
              <div style={{ transform: `translateY(${offset}px) scale(1.12)` }} className="h-full w-full">
                <Image src={IMAGES.praxis2} alt={t('practice.selfAlt')} className="h-full w-full" fittingType="fill" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/*
      <section className="bg-[#F4F1EE] px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal delay={600} className=" translate-x-12"><Eyebrow>{t('practice.valuesEyebrow')}</Eyebrow></Reveal>
          <div className="mt-14 grid border-t border-l border-[#E8E2D9] sm:grid-cols-2">
            {values.map((v, i) =>
            <Reveal key={v.title} delay={i * 80}>
                <div className="flex min-h-[220px] flex-col justify-center border-b border-r border-[#E8E2D9] px-8 py-12 sm:px-10 text-center">
                  <h3 className="font-heading text-2xl font-light">{v.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-600">{v.text}</p>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>
      */}
<section className="bg-[#F4F1EE] px-6 py-24 lg:px-12 lg:py-32">
  <div className="mx-auto max-w-6xl">
    <Reveal delay={600} className="-translate-x-[50%]">
      <Eyebrow>{t('practice.valuesEyebrow')}</Eyebrow>
    </Reveal>

<div className="mt-14 grid overflow-hidden border-t border-l border-[#E8E2D9] sm:grid-cols-2">
  {values.map((v, i) => {
    const directions = [
      { className: '-translate-y-[100%]', delay: 600, duration: 'duration-[2200ms]' },
      { className: 'translate-x-[100%]', delay: 500, duration: 'duration-[1800ms]' },
      { className: 'translate-y-[100%]', delay: 700, duration: 'duration-[2200ms]' },
      { className: 'translate-x-[100%]', delay: 900, duration: 'duration-[1800ms]' },
    ];

    return (
      <Reveal
        key={v.title}
        delay={directions[i].delay}
        className={`flex min-h-[220px] flex-col justify-center border-b border-r border-[#E8E2D9] px-8 py-12 text-center sm:px-10 ${directions[i].className} ${directions[i].duration}`}
      >
        <h3 className="font-heading text-2xl font-light">{v.title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-neutral-600">{v.text}</p>
      </Reveal>
    );
  })}
</div>


  </div>
</section>

      <section className="bg-[#F4F1EE] px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <Reveal  delay={700} className=" translate-x-12">
            <Eyebrow className="justify-center">{t('doctor.eyebrow')}</Eyebrow>
            <h2 className="mt-6 font-heading text-[2rem] font-light leading-tight md:text-4xl">
              {t('doctor.sectionTitle')}
            </h2>
          </Reveal>
          <Reveal delay={800} className=" translate-x-12">
            <Link to={langPath('/aerztinnen')} className="mt-8 inline-block eyebrow text-[#8A7550] link-underline">
              {t('doctor.moreLink')}
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand settings={settings} />
    </>);
}