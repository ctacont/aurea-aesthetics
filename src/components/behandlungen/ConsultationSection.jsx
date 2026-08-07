import React from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Eyebrow from '@/components/Eyebrow';
import GoldButton from '@/components/GoldButton';
import useParallax from '@/hooks/useParallax';
import { IMAGES } from '@/lib/site';
import { useLanguage } from '@/lib/LanguageContext';
import { useBooking } from '@/hooks/useBooking';

const COPY = {
  de: {
    eyebrow: 'Kostenlose Erstberatung',
    title: 'Vor jeder Behandlung,',
    accent: ' ein Gespräch.',
    text: 'Eine ausführliche Erstberatung klärt Ihre Anatomie, Ihre Wünsche und was medizinisch sinnvoll ist — kostenlos und unverbindlich.',
    cta: 'Beratung anfragen',
  },
  en: {
    eyebrow: 'Free initial consultation',
    title: 'Before every treatment,',
    accent: ' a conversation.',
    text: 'A thorough initial consultation clarifies your anatomy, your wishes, and what is medically appropriate — free of charge and without obligation.',
    cta: 'Request consultation',
  },
};

export default function ConsultationSection() {
  const { lang } = useLanguage();
  const { handleBook } = useBooking();
  const { ref, offset } = useParallax(0.14);
  const copy = COPY[lang] || COPY.de;

  return (
    <section className="relative overflow-hidden bg-[#F4F1EE] px-6 py-24 lg:px-12 lg:py-32">
      <div
        ref={ref}
        className="pointer-events-none absolute -right-24 top-0 hidden h-full w-1/2 opacity-40 lg:block"
        style={{ transform: `translateY(${offset}px) scale(1.1)` }}
      >
        <Image src={IMAGES.contact} alt="" className="h-full w-full" fittingType="fill" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <Eyebrow className="justify-center">{copy.eyebrow}</Eyebrow>
        </motion.div>

        <motion.h2
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 font-heading text-4xl font-light leading-tight md:text-5xl"
        >
          {copy.title}
          <span className="text-[#8A7550]">{copy.accent}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-neutral-700"
        >
          {copy.text}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <GoldButton onClick={handleBook} data-booking-cta="true" tone="dark" className="mt-12 px-10">
            {copy.cta}
          </GoldButton>
        </motion.div>
      </div>
    </section>
  );
}