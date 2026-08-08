import React from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Eyebrow from '@/components/Eyebrow';
import useParallax from '@/hooks/useParallax';
import { IMAGES } from '@/lib/site';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item = {
  hidden: { opacity: 0, y: 44 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function TreatmentsHero({ eyebrow, title, accent, lead }) {
  const { ref, offset } = useParallax(0.2);

  return (
    <section className="relative flex min-h-[7svh] flex-col justify-end overflow-hidden bg-[#0A0A0A] px-6 pb-24 pt-40 text-white lg:px-16 lg:pb-32 hasan201">
      <div ref={ref} className="absolute inset-0" style={{ transform: `translateY(${offset}px) scale(1.2)` }}>
        <Image src={IMAGES.texture} alt="" className="h-full w-full" fittingType="fill" />
        <div className="absolute inset-0 bg-[#0A0A0A]/45" />
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="relative max-w-3xl">
        <motion.div variants={item}>
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
        </motion.div>
        <motion.h1 variants={item} className="mt-8 font-heading text-5xl font-light leading-[1.05] md:text-7xl">
          {title}
          {accent && <span className="block text-[#C9AF80]">{accent}</span>}
        </motion.h1>
        <motion.p variants={item} className="mt-8 max-w-xl text-lg leading-relaxed text-white/75">
          {lead}
        </motion.p>
      </motion.div>
    </section>
  );
}