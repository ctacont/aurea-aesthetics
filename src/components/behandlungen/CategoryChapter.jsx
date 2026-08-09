import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Eyebrow from '@/components/Eyebrow';
import { useLanguage, loc } from '@/lib/LanguageContext';

export default function CategoryChapter({ category, index }) {
  const { t, lang } = useLanguage();
  const chapterRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: chapterRef,
    offset: ['start end', 'end start'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 85, damping: 28, mass: 0.4 });
  const imageY = useTransform(progress, [0, 1], ['-9%', '9%']);
  const imageScale = useTransform(progress, [0, 1], [1.22, 1.04]);
  const imageClip = useTransform(progress, [0, 0.32, 1], ['inset(12% 7%)', 'inset(0% 0%)', 'inset(0% 0%)']);
  const numberX = useTransform(progress, [0, 0.5, 1], [-90, 0, 74]);
  const numberY = useTransform(progress, [0, 1], [70, -60]);
  const numberOpacity = useTransform(progress, [0, 0.32, 0.72, 1], [0.02, 0.16, 0.13, 0.03]);
  const contentY = useTransform(progress, [0, 0.43, 1], [72, 0, -34]);
  const contentOpacity = useTransform(progress, [0, 0.25, 0.78, 1], [0, 1, 1, 0.3]);

  const title = loc(category, 'title', lang);
  const accent = loc(category, 'accent', lang);
  const lead = loc(category, 'lead', lang);

  return (
    <section
      ref={chapterRef}
      id={category.slug}
      className="relative min-h-[72vh] scroll-mt-full overflow-hidden bg-[#0A0A0A] px-6 py-28 text-white lg:flex lg:min-h-[92vh] lg:items-center lg:px-12 lg:py-40">
      
      <motion.div
        className="absolute inset-0 opacity-60 will-change-transform"
        style={{ clipPath: shouldReduceMotion ? 'inset(0%)' : imageClip }}
      >
        <motion.div
          className="absolute -inset-y-[10%] inset-x-0 will-change-transform"
          style={{ y: shouldReduceMotion ? 0 : imageY, scale: shouldReduceMotion ? 1.08 : imageScale }}
        >
          <Image src={category.image_url} alt="" className="h-full w-full" fittingType="fill" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/25" aria-hidden="true" />
      </motion.div>

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div
          style={{
            x: shouldReduceMotion ? 0 : numberX,
            y: shouldReduceMotion ? 0 : numberY,
            opacity: shouldReduceMotion ? 0.1 : numberOpacity,
          }}
          className="select-none font-heading text-[8rem] font-light leading-none text-white lg:text-[13rem]">
          
          {String(index + 1).padStart(2, '0')}
        </motion.div>

        <motion.div
          style={{
            y: shouldReduceMotion ? 0 : contentY,
            opacity: shouldReduceMotion ? 1 : contentOpacity,
          }}>
          
          <Eyebrow tone="light">{t('categoryPage.crumbTreatments')}</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-heading text-4xl font-light leading-[1.05] md:text-6xl lg:text-7xl">
            {title}
            {accent && <span className="block text-[#C9AF80]">{accent}</span>}
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
            {lead}
          </p>
        </motion.div>
      </div>
    </section>);

}
