import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import Eyebrow from '@/components/Eyebrow';
import { useLanguage } from '@/lib/LanguageContext';
import arrivalImage from '@/assets/aurea-experience-arrival.jpg';

const STEP_KEYS = ['arrive', 'understand', 'treat', 'accompany'];

function FlowingStep({ index, title, description, shouldReduceMotion }) {
  return (
    <motion.li
      initial={shouldReduceMotion ? false : { opacity: 0.22, x: 48, y: 38, scale: 0.975 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.5, margin: '-8% 0px -12%' }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex min-h-[34vh] origin-right items-center overflow-hidden border-t border-white/15 py-12 first:border-t-0 xl:min-h-[38vh]"
    >
      <motion.span
        initial={shouldReduceMotion ? false : { scaleX: 0 }}
        whileInView={shouldReduceMotion ? undefined : { scaleX: 1 }}
        viewport={{ once: false, amount: 0.55 }}
        transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 top-[-1px] h-px w-full origin-left bg-gradient-to-r from-[#C9AF80] via-[#C9AF80]/45 to-transparent"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#C9AF80]/[0.075] via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" aria-hidden="true" />
      <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 font-heading text-[10rem] font-light leading-none text-white/[0.035] xl:text-[13rem]" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="relative grid w-full grid-cols-[4rem_1fr] gap-6 xl:grid-cols-[5rem_1fr]">
        <span className="pt-2 text-[0.65rem] font-medium tracking-[0.24em] text-[#C9AF80]">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div>
          <h3 className="font-heading text-[2.65rem] font-light leading-none text-white xl:text-[3.5rem]">{title}</h3>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/65 xl:text-lg">{description}</p>
        </div>
      </div>
    </motion.li>
  );
}

function ExperienceImage({ shouldReduceMotion, alt }) {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });
  const revealProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 26, mass: 0.45 });
  const clipPath = useTransform(revealProgress, [0, 0.34, 1], ['inset(12% 6%)', 'inset(0% 0%)', 'inset(0% 0%)']);
  const imageScale = useTransform(revealProgress, [0, 1], [1.1, 1.015]);
  const imageY = useTransform(revealProgress, [0, 1], ['-2.5%', '2.5%']);

  return (
    <figure ref={imageRef} className="relative bg-[#F4F1EE] px-3 pb-3 md:px-6 md:pb-6 lg:px-12 lg:pb-12">
      <motion.div
        className="relative mx-auto aspect-[4/5] max-w-[1600px] overflow-hidden bg-neutral-200 md:aspect-[16/9]"
        style={{ clipPath: shouldReduceMotion ? 'inset(0% 0%)' : clipPath }}
      >
        <motion.img
          src={arrivalImage}
          alt={alt}
          className="h-[106%] w-full object-cover object-[65%_center] md:object-center"
          style={{
            scale: shouldReduceMotion ? 1 : imageScale,
            y: shouldReduceMotion ? 0 : imageY,
          }}
          loading="lazy"
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" aria-hidden="true" />
      </motion.div>
    </figure>
  );
}

export default function ExperienceJourney() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.35 });
  const lineScale = useTransform(progress, [0.08, 0.9], [0, 1]);
  const ambientX = useTransform(progress, [0, 1], ['-18%', '18%']);
  const ambientOpacity = useTransform(progress, [0, 0.5, 1], [0.16, 0.34, 0.16]);
  const steps = STEP_KEYS.map((key) => ({
    key,
    title: t(`experience.journey.${key}Title`),
    description: t(`experience.journey.${key}Text`),
  }));

  return (
    <>
      <section className="bg-[#F4F1EE] px-6 py-24 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Eyebrow>{t('experience.storyEyebrow')}</Eyebrow>
          </div>
          <div className="lg:col-span-8">
            <motion.h2
              initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.45 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl font-heading text-[2.35rem] font-light leading-[1.12] md:text-5xl lg:text-[3.7rem]"
            >
              {t('experience.storyTitle')}
            </motion.h2>
            <div className="mt-10 grid gap-6 text-lg leading-[1.75] text-neutral-700 md:grid-cols-2 md:gap-10">
              <p>{t('experience.storyP1')}</p>
              <p>{t('experience.storyP2')}</p>
            </div>
          </div>
        </div>
      </section>

      <ExperienceImage
        shouldReduceMotion={shouldReduceMotion}
        alt={t('experience.arrivalImageAlt')}
      />

      <section ref={sectionRef} className="relative overflow-x-clip bg-[#0A0A0A] px-6 py-24 text-white lg:px-12 lg:py-32">
        {!shouldReduceMotion && (
          <motion.div
            className="pointer-events-none absolute inset-y-0 left-1/4 w-2/3 bg-[radial-gradient(circle_at_center,rgba(201,175,128,0.12),transparent_66%)] blur-3xl"
            style={{ x: ambientX, opacity: ambientOpacity }}
            aria-hidden="true"
          />
        )}
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-16 flex items-center justify-between border-b border-white/10 pb-5 text-[0.6rem] font-medium uppercase tracking-[0.28em] text-white/35 lg:mb-24">
            <span>Aurea Experience</span>
            <span>04 Etappen</span>
          </div>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
              <Eyebrow tone="light">{t('experience.journeyEyebrow')}</Eyebrow>
              <h2 className="mt-8 max-w-md font-heading text-[2.8rem] font-light leading-[1.06] md:text-5xl xl:text-6xl">
                {t('experience.journeyTitle')}
                <span className="block text-[#C9AF80]">{t('experience.journeyAccent')}</span>
              </h2>
              {!shouldReduceMotion && (
                <div className="mt-12 flex items-start gap-4" aria-hidden="true">
                  <div className="h-28 w-px bg-white/15">
                    <motion.div className="h-full w-full origin-top bg-[#C9AF80]" style={{ scaleY: lineScale }} />
                  </div>
                  <span className="pt-1 text-[0.58rem] uppercase tracking-[0.25em] text-white/30">Scroll</span>
                </div>
              )}
              </div>
            </div>
            <ol className="relative z-10 lg:col-span-7">
              {steps.map((step, index) => (
                <FlowingStep
                  key={step.key}
                  index={index}
                  title={step.title}
                  description={step.description}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
