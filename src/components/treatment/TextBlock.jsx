import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Reveal from '@/components/Reveal';

export default function TextBlock({ eyebrow, title, body, tone = 'light', children, direction = null }) {
  const dark = tone === 'dark';
  const shouldReduceMotion = useReducedMotion();
  const premiumMotion = direction === 'left' || direction === 'right';
  const headingX = direction === 'right' ? 160 : -160;
  const bodyX = -headingX;

  const headingContent = (
    <>
      <p className="eyebrow text-[#8A7550]">{eyebrow}</p>
      <h2 className="mt-6 font-heading text-[1.8rem] font-light leading-tight text-neutral-900 md:text-4xl">
        {title}
      </h2>
    </>
  );

  const bodyContent = (
    <>
      {body && (
        <p className="whitespace-pre-line text-lg leading-[1.75] text-neutral-700">
          {body}
        </p>
      )}
      {children}
    </>
  );

  return (
    <section
      className={`overflow-hidden px-6 py-20 lg:px-12 lg:py-28 ${
        dark ? 'bg-[#F4F1EE]' : 'bg-background'
      }`}
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
          {premiumMotion ? (
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: headingX, y: 24, filter: 'blur(18px)' }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.42 }}
              transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {headingContent}
            </motion.div>
          ) : (
            <Reveal>{headingContent}</Reveal>
          )}
        </div>
        {premiumMotion ? (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: bodyX, y: 34, filter: 'blur(22px)' }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.32 }}
            transition={{ duration: 1.3, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            {bodyContent}
          </motion.div>
        ) : (
          <Reveal delay={100} className="lg:col-span-8">
            {bodyContent}
          </Reveal>
        )}
      </div>
    </section>
  );
}
