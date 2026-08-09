import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { HeartHandshake, Leaf, Stethoscope } from 'lucide-react';
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
    title_de: 'Skinbooster',
    title_en: 'Skin booster',
    description_de: 'Spendet intensive Feuchtigkeit, verbessert die Hautqualität und sorgt für einen strahlenden, frischen Teint.',
    description_en: 'Provides intensive hydration, improves skin quality, and supports a fresh, radiant complexion.',
    photo: skinboosterPhoto,
    lineArt: skinboosterLineArt,
  },
  {
    title_de: 'Microneedling',
    title_en: 'Microneedling',
    description_de: 'Regt die Kollagenproduktion an und verbessert Hauttextur, Porenbild und feine Linien.',
    description_en: 'Stimulates collagen production and improves skin texture, the appearance of pores, and fine lines.',
    photo: microneedlingPhoto,
    lineArt: microneedlingLineArt,
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
    title_de: 'HArmonyCa®',
    title_en: 'HArmonyCa®',
    description_de: 'Biostimulator für mehr Volumen und Straffung. Für eine langanhaltende, natürliche Hautverjüngung.',
    description_en: 'A biostimulator for enhanced volume and firmness, supporting long-lasting, natural-looking rejuvenation.',
    photo: harmonycaPhoto,
    lineArt: harmonycaLineArt,
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
    title_de: 'Polynukleotide',
    title_en: 'Polynucleotides',
    description_de: 'Fördert die Hautregeneration, verbessert Elastizität und Feuchtigkeit für ein gesundes, jugendliches Hautbild.',
    description_en: 'Supports skin regeneration and improves elasticity and hydration for a healthy, youthful-looking complexion.',
    photo: polynucleotidesPhoto,
    lineArt: polynucleotidesLineArt,
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

  const reveal = (index) => shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 72, x: index % 2 === 0 ? -28 : 28, scale: 0.975 },
        whileInView: { opacity: 1, y: 0, x: 0, scale: 1 },
        viewport: { once: false, amount: 0.18 },
        transition: { duration: 0.95, delay: (index % 6) * 0.045, ease: EASE },
      };

  return (
    <section aria-labelledby="treatment-spectrum-title" className="relative overflow-hidden bg-[#F7F4F0] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
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
          initial={shouldReduceMotion ? false : { opacity: 0, x: -72 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.45 }}
          transition={{ duration: 1, ease: EASE }}
          className="mb-14 grid gap-7 lg:grid-cols-12 lg:items-end lg:gap-12"
        >
          <div className="lg:col-span-7">
            <p className="eyebrow text-[#8A7550]">{copy.eyebrow}</p>
            <h2 id="treatment-spectrum-title" className="mt-5 font-heading text-4xl font-light leading-[1.05] sm:text-5xl lg:text-6xl">
              {copy.title}
              <span className="block text-[#9B8052]">{copy.accent}</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-neutral-600 lg:col-span-4 lg:col-start-9 lg:text-lg">
            {copy.lead}
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-[#DDD6CC] bg-[#DDD6CC] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {TREATMENTS.map((treatment, index) => {
            const title = treatment[`title_${suffix}`];
            const description = treatment[`description_${suffix}`];

            return (
              <motion.article
                key={treatment.title_de}
                {...reveal(index)}
                className="group flex min-w-0 flex-col bg-[#FBFAF8]"
              >
                <div className="relative aspect-square overflow-hidden bg-[#EDE8E1]">
                  <img
                    src={treatment.photo}
                    alt={copy.photoAlt(title)}
                    loading={index < 3 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" aria-hidden="true" />
                  <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/55 bg-black/15 text-[0.65rem] font-medium tracking-[0.16em] text-white backdrop-blur-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-5 pb-0 pt-6">
                  <h3 className="font-heading text-[1.65rem] font-light leading-tight text-[#171512]">{title}</h3>
                  <p className="mt-3 text-[0.88rem] leading-[1.65] text-neutral-600">{description}</p>

                  <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.88, y: 24 }}
                    whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.45 }}
                    transition={{ duration: 0.85, delay: 0.15, ease: EASE }}
                    className="mt-auto aspect-square w-full"
                  >
                    <img
                      src={treatment.lineArt}
                      alt={copy.lineArtAlt(title)}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain"
                    />
                  </motion.div>
                </div>
              </motion.article>
            );
          })}

          <motion.aside
            {...reveal(10)}
            className="flex flex-col justify-center gap-9 bg-[#F2EEE8] px-7 py-12 sm:col-span-2 lg:col-span-2 lg:px-9 xl:col-span-2"
          >
            {TRUST_POINTS.map(({ icon: Icon, ...point }, index) => (
              <motion.div
                key={point.title_de}
                initial={shouldReduceMotion ? false : { opacity: 0, x: 42 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.55 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: EASE }}
                className="grid grid-cols-[2.75rem_1fr] gap-4"
              >
                <Icon className="mt-1 h-7 w-7 stroke-[1.15] text-[#8A7550]" aria-hidden="true" />
                <div>
                  <h3 className="eyebrow text-[#28231D]">{point[`title_${suffix}`]}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{point[`text_${suffix}`]}</p>
                </div>
              </motion.div>
            ))}
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
