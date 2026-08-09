import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import Eyebrow from '@/components/Eyebrow';
import { useLanguage } from '@/lib/LanguageContext';
import arrivalImage from '@/assets/aurea-experience-arrival.jpg';

const STEP_KEYS = ['arrive', 'understand', 'treat', 'accompany'];

function DesktopStep({ index, title, description, progress }) {
  const segmentStart = index / STEP_KEYS.length;
  const segmentEnd = (index + 1) / STEP_KEYS.length;
  const fadeIn = Math.max(0, segmentStart - 0.08);
  const holdStart = segmentStart + 0.05;
  const holdEnd = segmentEnd - 0.05;
  const fadeOut = Math.min(1, segmentEnd + 0.08);
  const opacity = useTransform(
    progress,
    [fadeIn, holdStart, holdEnd, fadeOut],
    index === 0 ? [1, 1, 1, 0.28] : index === STEP_KEYS.length - 1 ? [0.28, 1, 1, 1] : [0.28, 1, 1, 0.28],
  );
  const x = useTransform(progress, [fadeIn, holdStart, holdEnd, fadeOut], [14, 0, 0, -6]);

  return (
    <motion.li style={{ opacity, x }} className="grid grid-cols-[3.5rem_1fr] gap-5 border-t border-white/15 py-5 first:border-t-0">
      <span className="pt-1 text-xs font-medium tracking-[0.22em] text-[#C9AF80]">{String(index + 1).padStart(2, '0')}</span>
      <div>
        <h3 className="font-heading text-3xl font-light leading-tight text-white xl:text-[2.25rem]">{title}</h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-white/65 xl:text-base">{description}</p>
      </div>
    </motion.li>
  );
}

function StaticJourney({ steps, shouldReduceMotion }) {
  return (
    <ol className="mt-12 border-b border-white/15">
      {steps.map((step, index) => (
        <motion.li
          key={step.key}
          initial={shouldReduceMotion ? false : { opacity: 0.35, y: 18 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.55 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-[3rem_1fr] gap-4 border-t border-white/15 py-8"
        >
          <span className="pt-1 text-[0.7rem] font-medium tracking-[0.2em] text-[#C9AF80]">{String(index + 1).padStart(2, '0')}</span>
          <div>
            <h3 className="font-heading text-[2rem] font-light leading-tight text-white">{step.title}</h3>
            <p className="mt-3 max-w-lg leading-relaxed text-white/65">{step.description}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}

function ExperienceImage({ shouldReduceMotion, alt, label }) {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });
  const revealProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 26, mass: 0.45 });
  const clipPath = useTransform(revealProgress, [0, 0.34, 1], ['inset(12% 6%)', 'inset(0% 0%)', 'inset(0% 0%)']);
  const imageScale = useTransform(revealProgress, [0, 1], [1.1, 1.015]);
  const imageY = useTransform(revealProgress, [0, 1], ['-2.5%', '2.5%']);
  const labelOpacity = useTransform(revealProgress, [0.14, 0.36], [0, 1]);
  const labelY = useTransform(revealProgress, [0.14, 0.36], [12, 0]);

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
        <motion.figcaption
          className="eyebrow absolute bottom-6 left-6 flex items-center gap-3 text-white md:bottom-8 md:left-8"
          style={{
            opacity: shouldReduceMotion ? 1 : labelOpacity,
            y: shouldReduceMotion ? 0 : labelY,
          }}
        >
          <span className="h-px w-6 bg-[#C9AF80]" aria-hidden="true" />
          {label}
        </motion.figcaption>
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
    offset: ['start start', 'end end'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.35 });
  const lineScale = useTransform(progress, [0, 1], [0, 1]);
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
        label={t('experience.arrivalImageLabel')}
      />

      <section className="bg-[#0A0A0A] px-6 py-24 text-white lg:hidden">
        <div className="mx-auto max-w-2xl">
          <Eyebrow tone="light">{t('experience.journeyEyebrow')}</Eyebrow>
          <h2 className="mt-7 font-heading text-[2.5rem] font-light leading-[1.08]">
            {t('experience.journeyTitle')}
            <span className="block text-[#C9AF80]">{t('experience.journeyAccent')}</span>
          </h2>
          <StaticJourney steps={steps} shouldReduceMotion={shouldReduceMotion} />
        </div>
      </section>

      <section ref={sectionRef} className={`relative hidden bg-[#0A0A0A] text-white lg:block ${shouldReduceMotion ? 'py-32' : 'h-[340vh]'}`}>
        <div className={shouldReduceMotion ? '' : 'sticky top-0 flex h-screen items-center overflow-hidden'}>
          <div className="mx-auto grid w-full max-w-6xl grid-cols-12 gap-16 px-12">
            <div className="col-span-5 self-center">
              <Eyebrow tone="light">{t('experience.journeyEyebrow')}</Eyebrow>
              <h2 className="mt-8 font-heading text-5xl font-light leading-[1.06] xl:text-6xl">
                {t('experience.journeyTitle')}
                <span className="block text-[#C9AF80]">{t('experience.journeyAccent')}</span>
              </h2>
              {!shouldReduceMotion && (
                <div className="mt-12 h-24 w-px bg-white/15" aria-hidden="true">
                  <motion.div className="h-full w-full origin-top bg-[#C9AF80]" style={{ scaleY: lineScale }} />
                </div>
              )}
            </div>
            <ol className="col-span-7 self-center">
              {steps.map((step, index) => shouldReduceMotion ? (
                <li key={step.key} className="grid grid-cols-[3.5rem_1fr] gap-5 border-t border-white/15 py-5 first:border-t-0">
                  <span className="pt-1 text-xs font-medium tracking-[0.22em] text-[#C9AF80]">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-heading text-3xl font-light text-white">{step.title}</h3>
                    <p className="mt-2 max-w-md text-base leading-relaxed text-white/65">{step.description}</p>
                  </div>
                </li>
              ) : (
                <DesktopStep key={step.key} index={index} title={step.title} description={step.description} progress={progress} />
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
