import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { HeartHandshake, Leaf, Stethoscope } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLanguage } from '@/lib/LanguageContext';

import botulinumPhoto from '@/assets/treatments/01-botulinumtoxin-photo.jpg';
import botulinumLineArt from '@/assets/treatments/01-botulinumtoxin-lineart.png';
import hyaluronPhoto from '@/assets/treatments/02-hyaluron-filler-photo.jpg';
import hyaluronLineArt from '@/assets/treatments/02-hyaluron-filler-lineart.png';
import skinboosterPhoto from '@/assets/treatments/03-skinbooster-photo.jpg';
import skinboosterLineArt from '@/assets/treatments/03-skinbooster-lineart.png';
import microneedlingPhoto from '@/assets/treatments/04-microneedling-photo.jpg';
import microneedlingLineArt from '@/assets/treatments/04-microneedling-lineart.png';
import profhiloPhoto from '@/assets/treatments/05-profhilo-photo.jpg';
import profhiloLineArt from '@/assets/treatments/05-profhilo-lineart.png';
import harmonycaPhoto from '@/assets/treatments/06-harmonyca-photo.jpg';
import harmonycaLineArt from '@/assets/treatments/06-harmonyca-lineart.png';
import sculptraPhoto from '@/assets/treatments/07-sculptra-photo.jpg';
import sculptraLineArt from '@/assets/treatments/07-sculptra-lineart.png';
import lipsPhoto from '@/assets/treatments/08-lippenbehandlung-photo.jpg';
import lipsLineArt from '@/assets/treatments/08-lippenbehandlung-lineart.png';
import prpPhoto from '@/assets/treatments/09-prp-exosome-photo.jpg';
import prpLineArt from '@/assets/treatments/09-prp-exosome-lineart.png';
import polynucleotidesPhoto from '@/assets/treatments/10-polynukleotide-photo.jpg';
import polynucleotidesLineArt from '@/assets/treatments/10-polynukleotide-lineart.png';

const TREATMENTS = [
  {
    title_de: 'Skinbooster',
    title_en: 'Skin booster',
    description_de: 'Spendet intensive Feuchtigkeit, verbessert die Hautqualität und sorgt für einen strahlenden, frischen Teint.',
    description_en: 'Provides intensive hydration, improves skin quality, and supports a fresh, radiant complexion.',
    photo: skinboosterPhoto,
    lineArt: skinboosterLineArt,
  },
  {
    title_de: 'Polynukleotide',
    title_en: 'Polynucleotides',
    description_de: 'Fördert die Hautregeneration, verbessert Elastizität und Feuchtigkeit für ein gesundes, jugendliches Hautbild.',
    description_en: 'Supports skin regeneration and improves elasticity and hydration for a healthy, youthful-looking complexion.',
    photo: polynucleotidesPhoto,
    lineArt: polynucleotidesLineArt,
  },
  {
    title_de: 'HArmonyCa®',
    title_en: 'HArmonyCa®',
    description_de: 'Biostimulator für mehr Volumen und Straffung. Für eine langanhaltende, natürliche Hautverjüngung.',
    description_en: 'A biostimulator for enhanced volume and firmness, supporting long-lasting, natural-looking rejuvenation.',
    photo: harmonycaPhoto,
    lineArt: harmonycaLineArt,
  },
  {
    title_de: 'Profhilo®',
    title_en: 'Profhilo®',
    description_de: 'Flächendeckende Hautverjüngung und Bioremodellierung für mehr Feuchtigkeit, Elastizität und Strahlkraft.',
    description_en: 'Comprehensive skin rejuvenation and bioremodelling for improved hydration, elasticity, and radiance.',
    photo: profhiloPhoto,
    lineArt: profhiloLineArt,
  },
  {
    title_de: 'Sculptra®',
    title_en: 'Sculptra®',
    description_de: 'Stimuliert die körpereigene Kollagenproduktion und verbessert Volumen, Struktur und Spannkraft langfristig.',
    description_en: 'Stimulates the body’s own collagen production and supports long-term improvements in volume, structure, and firmness.',
    photo: sculptraPhoto,
    lineArt: sculptraLineArt,
  },
  {
    title_de: 'Botulinumtoxin',
    title_en: 'Botulinum toxin',
    description_de: 'Glättet mimische Falten und beugt ihrer Entstehung vor. Für einen entspannten, frischen Ausdruck.',
    description_en: 'Softens expression lines and helps prevent them from deepening—for a relaxed, refreshed appearance.',
    photo: botulinumPhoto,
    lineArt: botulinumLineArt,
  },
  {
    title_de: 'Hyaluron-Filler',
    title_en: 'Hyaluronic filler',
    description_de: 'Für definierte Konturen, mehr Volumen und harmonische Akzente – individuell und natürlich.',
    description_en: 'For defined contours, restored volume, and harmonious accents—individual and natural.',
    photo: hyaluronPhoto,
    lineArt: hyaluronLineArt,
  },
  {
    title_de: 'Lippenbehandlungen',
    title_en: 'Lip treatments',
    description_de: 'Für volle, definierte und symmetrische Lippen – individuell abgestimmt auf Ihre Gesichtszüge.',
    description_en: 'For full, defined, and symmetrical lips—individually tailored to your facial features.',
    photo: lipsPhoto,
    lineArt: lipsLineArt,
  },
  {
    title_de: 'PRP & Exosome Therapie',
    title_en: 'PRP & exosome therapy',
    description_de: 'Unterstützt die Zellregeneration, verbessert die Hautstruktur und fördert die natürliche Heilung.',
    description_en: 'Supports cell regeneration, improves skin texture, and promotes the natural healing process.',
    photo: prpPhoto,
    lineArt: prpLineArt,
  },
  {
    title_de: 'Microneedling',
    title_en: 'Microneedling',
    description_de: 'Regt die Kollagenproduktion an und verbessert Hauttextur, Porenbild und feine Linien.',
    description_en: 'Stimulates collagen production and improves skin texture, the appearance of pores, and fine lines.',
    photo: microneedlingPhoto,
    lineArt: microneedlingLineArt,
  },
];

const TRUST_POINTS = [
  {
    icon: Stethoscope,
    title_de: 'Ärztliche Expertise',
    title_en: 'Medical expertise',
    text_de: 'Alle Behandlungen werden von erfahrenen Ärztinnen durchgeführt – mit höchstem Anspruch an Sicherheit, Präzision und natürliche Ergebnisse.',
    text_en: 'Every treatment is performed by experienced physicians—with the highest standards of safety, precision, and natural-looking results.',
  },
  {
    icon: Leaf,
    title_de: 'Natürliche Ergebnisse',
    title_en: 'Natural results',
    text_de: 'Unser Ziel ist nicht die Veränderung, sondern die Verfeinerung Ihrer individuellen Schönheit.',
    text_en: 'Our aim is not to change you, but to refine your individual beauty.',
  },
  {
    icon: HeartHandshake,
    title_de: 'Individuelle Beratung',
    title_en: 'Individual consultation',
    text_de: 'Jede Behandlung beginnt mit einem ausführlichen Gespräch und einem auf Sie abgestimmten Behandlungskonzept.',
    text_en: 'Every treatment begins with an in-depth consultation and a treatment concept tailored to you.',
  },
];

const EASE = [0.16, 1, 0.3, 1];

function TreatmentStory({ treatment, index, suffix, copy, shouldReduceMotion }) {
  const storyRef = useRef(null);
  const isMobile = useIsMobile();
  const title = treatment[`title_${suffix}`];
  const description = treatment[`description_${suffix}`];
  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ['start end', 'end start'],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 82,
    damping: 28,
    mass: 0.42,
  });

  const imageY = useTransform(
    progress,
    [0, 1],
    isMobile ? ['2%', '-2%'] : ['8%', '-8%'],
  );
  const imageScale = useTransform(
    progress,
    [0, 0.5, 1],
    isMobile ? [1.04, 1, 1.04] : [1.14, 1.025, 1.1],
  );
  const imageClip = useTransform(
    progress,
    [0, 0.22, 0.78, 1],
    isMobile
      ? ['inset(0%)', 'inset(0%)', 'inset(0%)', 'inset(0%)']
      : ['inset(8% 6%)', 'inset(0%)', 'inset(0%)', 'inset(6% 4%)'],
  );
  const lineArtY = useTransform(
    progress,
    [0, 1],
    isMobile ? [10, -10] : [38, -32],
  );
  const lineArtRotate = useTransform(progress, [0, 0.5, 1], [-2.2, 0, 2.2]);
  const numberX = useTransform(
    progress,
    [0, 1],
    [-42, 24],
  );

  return (
    <motion.article
      ref={storyRef}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 90 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.12, margin: '0px 0px -5% 0px' }}
      transition={{ duration: 1.05, ease: EASE }}
      className="relative"
    >
      <div className="grid items-stretch md:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.9fr)]">
        <motion.div
          style={{ clipPath: shouldReduceMotion ? 'inset(0%)' : imageClip }}
          className="relative z-0 overflow-hidden bg-[#E8E1D8] shadow-[0_28px_70px_rgba(38,29,19,0.12)]"
        >
          <div className="relative aspect-[4/3] sm:aspect-[5/4] overflow-hidden md:h-full md:min-h-[30rem] md:aspect-auto">
            <motion.img
              src={treatment.photo}
              alt={copy.photoAlt(title)}
              loading={index < 2 ? 'eager' : 'lazy'}
              decoding="async"
              style={{
                y: shouldReduceMotion ? 0 : imageY,
                scale: shouldReduceMotion ? 1 : imageScale,
              }}
              className="h-full w-full object-cover object-center will-change-transform"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#17120C]/30 via-transparent to-white/5"
            />
          </div>

          <motion.span
            aria-hidden="true"
            style={{ x: shouldReduceMotion ? 0 : numberX }}
            className="pointer-events-none absolute bottom-[-0.18em] left-5 font-heading text-[7.5rem] font-light leading-none text-white/25 sm:text-[10rem]"
          >
            {String(index + 1).padStart(2, '0')}
          </motion.span>
        </motion.div>

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  x: 110,
                  filter: 'blur(12px)',
                }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : { opacity: 1, x: 0, filter: 'blur(0px)' }
          }
          viewport={{ once: false, amount: 0.34 }}
          transition={{ duration: 1.2, delay: 0.08, ease: EASE }}
          className="relative z-10 mx-4 -mt-10 flex flex-col justify-center bg-[#FBF9F6]/95 p-7 shadow-[0_24px_65px_rgba(38,29,19,0.11)] backdrop-blur-sm sm:mx-10 sm:p-10 md:mx-0 md:mt-0 md:p-8 xl:p-11"
        >
          <div className="flex items-center gap-4">
            <span className="text-[0.68rem] font-medium tracking-[0.22em] text-[#8A7550]">
              {String(index + 1).padStart(2, '0')} / {String(TREATMENTS.length).padStart(2, '0')}
            </span>
            <span aria-hidden="true" className="h-px flex-1 bg-[#C9AF80]/55" />
          </div>

          <h3
            lang={suffix}
            className="mt-7 max-w-full break-words font-heading text-[clamp(1.75rem,2.8vw,2.6rem)] font-light leading-[1.08] text-[#171512] [hyphens:auto] [overflow-wrap:anywhere]"
          >
            {title}
          </h3>
          <p className="mt-5 max-w-md text-[0.94rem] leading-[1.75] text-neutral-600">
            {description}
          </p>

          <motion.figure
            style={{
              y: shouldReduceMotion ? 0 : lineArtY,
              rotate: shouldReduceMotion ? 0 : lineArtRotate,
            }}
            className="ml-auto mt-8 aspect-square w-[8.5rem] overflow-hidden rounded-full bg-[#F1ECE5] p-3 ring-1 ring-[#D8CCBC]/65 sm:w-[10rem]"
          >
            <img
              src={treatment.lineArt}
              alt={copy.lineArtAlt(title)}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-contain"
            />
          </motion.figure>
        </motion.div>
      </div>
    </motion.article>
  );
}

export default function TreatmentSpectrum() {
  const { lang } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const suffix = lang === 'en' ? 'en' : 'de';
  const copy = lang === 'en'
    ? {
        eyebrow: 'Treatment spectrum',
        title: 'Individual by design.',
        accent: 'Precise by medicine.',
        lead: 'A carefully selected spectrum of treatments—planned by physicians and tailored to your anatomy, skin quality, and personal goals.',
        photoAlt: (title) => `${title} — editorial treatment portrait`,
        lineArtAlt: (title) => `${title} — schematic treatment areas`,
      }
    : {
        eyebrow: 'Behandlungsspektrum',
        title: 'Individuell gedacht.',
        accent: 'Medizinisch präzise.',
        lead: 'Ein sorgfältig ausgewähltes Behandlungsspektrum – ärztlich geplant und auf Ihre Anatomie, Hautqualität und persönlichen Ziele abgestimmt.',
        photoAlt: (title) => `${title} – natürliches Editorial-Porträt`,
        lineArtAlt: (title) => `${title} – schematische Behandlungsareale`,
      };

  return (
    <section
      aria-labelledby="treatment-spectrum-title"
      className="relative overflow-hidden bg-[#F5F1EB] px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
    >
      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { scaleX: 0 }}
        whileInView={shouldReduceMotion ? undefined : { scaleX: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1.2, ease: EASE }}
        className="absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-transparent via-[#C9AF80] to-transparent"
      />

      <div className="mx-auto max-w-[100rem]">
        <motion.header
          initial={shouldReduceMotion ? false : { opacity: 0, x: -110, filter: 'blur(12px)' }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.25, ease: EASE }}
        >
          <div className="flex items-center gap-5">
            <p className="eyebrow shrink-0 text-[#8A7550]">{copy.eyebrow}</p>
            <span aria-hidden="true" className="h-px flex-1 bg-[#C9AF80]/55" />
          </div>
          <h2
            id="treatment-spectrum-title"
            className="mt-7 font-heading text-[clamp(2.45rem,4.5vw,4.6rem)] font-light leading-[1.02] lg:whitespace-nowrap"
          >
            {copy.title}{' '}
            <span className="text-[#9B8052]">{copy.accent}</span>
          </h2>
          <p className="mt-7 max-w-3xl text-base leading-[1.8] text-neutral-600 lg:text-lg">
            {copy.lead}
          </p>
        </motion.header>

        <div className="mt-12 grid gap-8 border-y border-[#D8CCBC] py-10 md:grid-cols-3 lg:gap-12">
          {TRUST_POINTS.map(({ icon: Icon, ...point }, index) => (
            <motion.div
              key={point.title_de}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 44 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.55 }}
              transition={{ duration: 0.85, delay: index * 0.08, ease: EASE }}
              className="grid grid-cols-[2.5rem_1fr] gap-4"
            >
              <Icon className="mt-0.5 h-6 w-6 stroke-[1.15] text-[#8A7550]" aria-hidden="true" />
              <div>
                <h3 className="eyebrow text-[#28231D]">{point[`title_${suffix}`]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {point[`text_${suffix}`]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-24 max-w-[86rem] space-y-28 sm:space-y-36 lg:mt-32 lg:space-y-44">
          {TREATMENTS.map((treatment, index) => (
            <TreatmentStory
              key={treatment.title_de}
              treatment={treatment}
              index={index}
              suffix={suffix}
              copy={copy}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
