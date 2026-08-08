import React from 'react';
import { motion } from 'framer-motion';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import { PILLARS } from '@/lib/site';
import { useLanguage } from '@/lib/LanguageContext';

const EASE = [0.16, 1, 0.3, 1];

export default function Pillars() {
  const { t, lang } = useLanguage();
  const items = PILLARS[lang];

  return (
    <section className="overflow-hidden px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-6xl">

        <Reveal
          delay={120}
          className="-translate-x-[50%] duration-[1800ms]"
        >
          <Eyebrow>
            {t('pillars.eyebrow')}
          </Eyebrow>
        </Reveal>

        <motion.div
          initial={{
            opacity: 0,
            x: '35%',
            scale: 0.96
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1
          }}
          viewport={{
            once: true,
            amount: 0.4
          }}
          transition={{
            duration: 1.9,
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
          initial={{
            opacity: 0,
            y: 70
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            amount: 0.4
          }}
          transition={{
            duration: 1.6,
            delay: 0.25,
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
                  x: fromLeft ? '-45%' : '45%',
                  scale: 0.97
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                  margin: '0px 0px -8% 0px'
                }}
                transition={{
                  duration: 1.9,
                  delay: Math.min(i * 0.12, 0.4),
                  ease: EASE
                }}
                className="relative py-10 md:py-14"
              >

                <motion.div
                  initial={{
                    scaleX: 0
                  }}
                  whileInView={{
                    scaleX: 1
                  }}
                  viewport={{
                    once: true,
                    amount: 0.5
                  }}
                  transition={{
                    duration: 1.6,
                    delay: 0.15 + i * 0.08,
                    ease: EASE
                  }}
                  style={{
                    transformOrigin: fromLeft ? 'left center' : 'right center'
                  }}
                  className="absolute left-0 top-0 w-full border-t border-[#E8E2D9]"
                  aria-hidden="true"
                />

                <div className="grid items-baseline gap-4 md:grid-cols-12 md:gap-10">

                  <motion.span
                    initial={{
                      opacity: 0,
                      y: 40,
                      scale: 0.9
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1
                    }}
                    viewport={{
                      once: true,
                      amount: 0.6
                    }}
                    transition={{
                      duration: 1.2,
                      delay: 0.3 + i * 0.08,
                      ease: EASE
                    }}
                    className="font-heading text-4xl font-light leading-none text-[#C9AF80] md:col-span-2 md:text-5xl"
                  >
                    0{i + 1}
                  </motion.span>

                  <motion.h3
                    initial={{
                      opacity: 0,
                      y: 35
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0
                    }}
                    viewport={{
                      once: true,
                      amount: 0.6
                    }}
                    transition={{
                      duration: 1.2,
                      delay: 0.42 + i * 0.08,
                      ease: EASE
                    }}
                    className="font-heading text-2xl font-light md:col-span-4 md:text-3xl"
                  >
                    {p.title}
                  </motion.h3>

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 30
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0
                    }}
                    viewport={{
                      once: true,
                      amount: 0.6
                    }}
                    transition={{
                      duration: 1.2,
                      delay: 0.54 + i * 0.08,
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
          initial={{
            scaleX: 0
          }}
          whileInView={{
            scaleX: 1
          }}
          viewport={{
            once: true,
            amount: 0.8
          }}
          transition={{
            duration: 1.5,
            ease: EASE
          }}
          style={{
            transformOrigin: 'left center'
          }}
          className="border-t border-[#E8E2D9]"
        />

      </div>
    </section>
  );
}