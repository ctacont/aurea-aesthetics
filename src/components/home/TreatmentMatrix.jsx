import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import { useLanguage, loc } from '@/lib/LanguageContext';
import { CATEGORIES } from '@/lib/categoryContent';

const ORDER = ['botulinumtoxin', 'hyaluron-konturierung', 'hautqualitaet-regeneration'];

export default function TreatmentMatrix() {
  const { t, lang, langPath } = useLanguage();
  const categories = ORDER.map((key) => CATEGORIES[key]);
  const [activeIndex, setActiveIndex] = useState(0);
  const blockRefs = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;
    const observers = blockRefs.current.map((el, i) => {
      if (!el) return null;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },
        { threshold: 0.45 }
      );
      io.observe(el);
      return io;
    });
    return () => observers.forEach((io) => io && io.disconnect());
  }, []);

  return (
    <section className="bg-background py-24 lg:py-40">
      <div className="px-6 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal><Eyebrow>{t('treatmentMatrix.eyebrow')}</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h2 className="font-heading text-[2.1rem] font-light leading-[1.15] md:text-5xl mt-7 max-w-6xl">
              {t('treatmentMatrix.title')}
              <span className="text-[#8A7550]">{t('treatmentMatrix.accent')}</span>
            </h2>
          </Reveal>
        </div>
      </div>

      {/* Desktop: sticky image + scroll sequence */}
      <div className="mt-16 hidden px-6 lg:block lg:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-12 gap-16">
          <div className="col-span-5">
            <div className="sticky" style={{ top: 'calc(50vh - 220px)' }}>
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                {categories.map((cat, i) => (
                  <Image
                    key={cat.slug}
                    src={cat.image_url}
                    alt={loc(cat, 'title', lang)}
                    className="transition-opacity duration-[600ms] ease-in-out"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      opacity: activeIndex === i ? 1 : 0,
                    }}
                    fittingType="fill"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-7">
            {categories.map((cat, i) => (
              <div
                key={cat.slug}
                ref={(el) => (blockRefs.current[i] = el)}
                className="flex min-h-[70vh] flex-col justify-center border-t border-[#E8E2D9] py-16 first:border-t-0 first:pt-0"
              >
                <Reveal><span className="font-heading text-7xl font-light text-[#8A7550]">{String(i + 1).padStart(2, '0')}</span></Reveal>
                <Reveal delay={80}>
                  <h3 className="mt-6 font-heading text-3xl font-light">{loc(cat, 'title', lang)}</h3>
                </Reveal>
                <Reveal delay={160}>
                  <p className="mt-5 max-w-md text-neutral-600 leading-relaxed">{loc(cat, 'lead', lang)}</p>
                </Reveal>
                <Reveal delay={240}>
                  <Link to={langPath(`/behandlungen/${cat.slug}`)} className="mt-7 inline-flex items-center gap-3 eyebrow link-underline">
                    {t('categoryPage.moreLink')}
                    <ArrowRight className="h-4 w-4 text-[#C9AF80]" strokeWidth={1} />
                  </Link>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile / tablet: vertical stack */}
      <div className="mt-14 px-6 lg:hidden">
        <div className="mx-auto max-w-xl space-y-16">
          {categories.map((cat, i) => (
            <Reveal key={cat.slug}>
              <div className="relative aspect-[4/3] w-full">
                <Image src={cat.image_url} alt={loc(cat, 'title', lang)} className="h-full w-full" fittingType="fill" />
              </div>
              <span className="mt-6 block font-heading text-6xl font-light text-[#8A7550]">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 font-heading text-2xl font-light">{loc(cat, 'title', lang)}</h3>
              <p className="mt-4 text-neutral-600 leading-relaxed">{loc(cat, 'lead', lang)}</p>
              <Link to={langPath(`/behandlungen/${cat.slug}`)} className="mt-5 inline-flex items-center gap-3 eyebrow link-underline">
                {t('categoryPage.moreLink')}
                <ArrowRight className="h-4 w-4 text-[#C9AF80]" strokeWidth={1} />
              </Link>
            </Reveal>
          ))}
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
    </section>
  );
}