import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import { useLanguage, loc } from '@/lib/LanguageContext';
import { CATEGORIES } from '@/lib/categoryContent';

const ORDER = ['botulinumtoxin', 'hyaluron-konturierung', 'hautqualitaet-regeneration'];
const EASE = [0.16, 1, 0.3, 1];

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    setIsDesktop(mq.matches);
    const handler = (e) => setIsDesktop(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return isDesktop;
}

export default function TreatmentMatrix() {
  const { t, lang, langPath } = useLanguage();
  const categories = ORDER.map((key) => CATEGORIES[key]);
  const isDesktop = useIsDesktop();

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

      <div className="mt-16 px-6 lg:px-12">
        <div className="mx-auto max-w-6xl">
          {categories.map((cat, i) => {
            const imageFromLeft = i % 2 === 0;
            const imageX = isDesktop ? imageFromLeft ? -70 : 70 : 0;
            const textX = isDesktop ? imageFromLeft ? 70 : -70 : 0;
            const imageY = isDesktop ? 0 : 40;
            const textY = isDesktop ? 0 : 40;
            return (
              <div
                key={cat.slug}
                className="grid grid-cols-1 gap-10 border-t border-[#E8E2D9] py-20 first:border-t-0 first:pt-0 lg:grid-cols-2 lg:gap-20 lg:py-32">
                
                <motion.div
                  initial={{ opacity: 0, x: imageX, y: imageY }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 1.2, ease: EASE }}
                  className={`relative aspect-[4/3] w-full overflow-hidden lg:aspect-[4/5] ${
                  imageFromLeft ? '' : 'lg:order-2'}`
                  }>
                  
                  <img src={cat.image_url} alt={loc(cat, 'title', lang)} className="absolute inset-0 h-full w-full object-cover transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] -translate-x-12 opacity-100" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: textX, y: textY }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 1, delay: 0.1, ease: EASE }}
                  className={`flex flex-col justify-center ${imageFromLeft ? '' : 'lg:order-1'}`}>
                  
                  <span className="font-heading text-6xl font-light text-[#8A7550] lg:text-7xl">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-6 font-heading text-2xl font-light lg:text-3xl">{loc(cat, 'title', lang)}</h3>
                  <p className="mt-4 max-w-md text-neutral-600 leading-relaxed lg:mt-5">{loc(cat, 'lead', lang)}</p>
                  <Link to={langPath(`/behandlungen/${cat.slug}`)} className="mt-5 inline-flex items-center gap-3 eyebrow link-underline lg:mt-7">
                    {t('categoryPage.moreLink')}
                    <ArrowRight className="h-4 w-4 text-[#C9AF80]" strokeWidth={1} />
                  </Link>
                </motion.div>
              </div>);

          })}
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