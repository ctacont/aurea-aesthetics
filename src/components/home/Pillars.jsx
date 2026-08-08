import React from 'react';
import { motion } from 'framer-motion';
import Eyebrow from '@/components/Eyebrow';
import { PILLARS } from '@/lib/site';
import { useLanguage } from '@/lib/LanguageContext';

const EASE = [0.16, 1, 0.3, 1];

export default function Pillars() {
  const { t, lang } = useLanguage();
  const items = PILLARS[lang];

  return (
    <section className="overflow-hidden px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, x: -25, y: 10 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 1.5,
            ease: EASE
          }}
        >
          <Eyebrow>
            {t('pillars.eyebrow')}
          </Eyebrow>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30, y: 15 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 1.7,
            delay: 0.15,
            ease: EASE
          }}
        >
          <h2 className="mt-7 max-w-5xl font-heading text-[2.1rem] font-light leading-[1.15] md:text-5xl">
            {t('pillars.title')}

            <span className="text-[#8A7550]">
              {t('pillars.accent')}
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -25, y: 15 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 1.8,
            delay: 0.3,
            ease: EASE
          }}
        >
          <p className="mt-8 max-w-2xl text-[0.98rem] leading-relaxed text-neutral-600">
            {t('pillars.lead')}
          </p>
        </motion.div>

        <ol className="mt-20">
          {items.map((p, i) => {
            const fromLeft = i % 2 === 0;

            return (
              <motion.li
                key={p.title}
                initial={{
                  opacity: 0,
                  x: fromLeft ? -35 : 35,
                  y: 20
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                  margin: '0px 0px -8% 0px'
                }}
                transition={{
                  duration: 1.8,
                  delay: i * 0.18,
                  ease: EASE
                }}
                className="relative py-10 md:py-14"
              >

                <motion.div
                  initial={{
                    opacity: 0,
                    scaleX: 0.9
                  }}
                  whileInView={{
                    opacity: 1,
                    scaleX: 1
                  }}
                  viewport={{
                    once: true,
                    amount: 0.5
                  }}
                  transition={{
                    duration: 1.4,
                    delay: 0.1 + i * 0.18,
                    ease: EASE
                  }}
                  style={{
                    transformOrigin: fromLeft
                      ? 'left center'
                      : 'right center'
                  }}
                  className="absolute left-0 top-0 w-full border-t border-[#E8E2D9]"
                  aria-hidden="true"
                />

                <div className="grid items-baseline gap-4 md:grid-cols-12 md:gap-10">

                  <motion.span
                    initial={{
                      opacity: 0,
                      x: fromLeft ? -20 : 20
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0
                    }}
                    viewport={{
                      once: true,
                      amount: 0.5
                    }}
                    transition={{
                      duration: 1.4,
                      delay: 0.2 + i * 0.18,
                      ease: EASE
                    }}
                    className="font-heading text-4xl font-light leading-none text-[#C9AF80] md:col-span-2 md:text-5xl"
                  >
                    0{i + 1}
                  </motion.span>

                  <motion.h3
                    initial={{
                      opacity: 0,
                      x: fromLeft ? -20 : 20
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0
                    }}
                    viewport={{
                      once: true,
                      amount: 0.5
                    }}
                    transition={{
                      duration: 1.5,
                      delay: 0.32 + i * 0.18,
                      ease: EASE
                    }}
                    className="font-heading text-2xl font-light md:col-span-4 md:text-3xl"
                  >
                    {p.title}
                  </motion.h3>

                  <motion.p
                    initial={{
                      opacity: 0,
                      x: fromLeft ? -20 : 20
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0
                    }}
                    viewport={{
                      once: true,
                      amount: 0.5
                    }}
                    transition={{
                      duration: 1.6,
                      delay: 0.24 + i * 0.18,
                      ease: EASE
                    }}
                    className="max-w-lg text-[0.95rem] leading-relaxed text-neutral-600 md:col-span-6"
                  >
                    {p.text}
                  </motion.p>

                </div>
              </motion.li>
            );
          })}
        </ol>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{
            duration: 1.5,
            ease: EASE
          }}
          className="border-t border-[#E8E2D9]"
        />

      </div>
    </section>
  );
}