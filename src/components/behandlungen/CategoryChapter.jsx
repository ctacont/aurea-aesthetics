import React from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Eyebrow from '@/components/Eyebrow';
import useParallax from '@/hooks/useParallax';
import { useLanguage, loc } from '@/lib/LanguageContext';

export default function CategoryChapter({ category, index }) {
  const { t, lang } = useLanguage();
  const { ref: imgRef, offset: imgOffset } = useParallax(0.22);
  const { ref: numRef, offset: numOffset } = useParallax(0.38);

  const title = loc(category, 'title', lang);
  const accent = loc(category, 'accent', lang);
  const lead = loc(category, 'lead', lang);

  return (
    <section
      id={category.slug}
      className="relative scroll-mt-24 overflow-hidden bg-[#0A0A0A] px-6 py-28 text-white lg:px-12 lg:py-40">
      
      <div ref={imgRef} className="absolute inset-0 opacity-55" style={{ transform: `translateY(${imgOffset}px) scale(1.15)` }}>
        <Image src={category.image_url} alt="" className="h-full w-full" fittingType="fill" />
        <div className="absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div
          ref={numRef}
          style={{ transform: `translateY(${numOffset}px)` }}
          className="select-none font-heading text-[7rem] font-light leading-none text-white/10 lg:text-[11rem]">
          
          {String(index + 1).padStart(2, '0')}
        </div>

        <motion.div
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}>
          
          <Eyebrow tone="light">{t('categoryPage.crumbTreatments')}</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-heading text-4xl font-light leading-[1.05] md:text-6xl lg:text-7xl">
            {title}
            {accent && <span className="block text-[#C9AF80]">{accent}</span>}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
          
          {lead}
        </motion.p>
      </div>
    </section>);

}