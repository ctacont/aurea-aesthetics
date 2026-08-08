import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import DoctorPortraitCard from '@/components/home/DoctorPortraitCard';
import { useLanguage } from '@/lib/LanguageContext';

const EASE = [0.16, 1, 0.3, 1];

export default function DoctorSection({ doctors = [] }) {
  const sorted = [...doctors].sort(
    (a, b) => (a.order || 0) - (b.order || 0)
  );

  const { t, langPath } = useLanguage();

  return (
    <section className="overflow-hidden px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-6xl">

        <Reveal
          delay={120}
          className="-translate-x-[40%] duration-[1800ms]"
        >
          <Eyebrow>
            {t('doctor.eyebrow')}
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
          <h2 className="mt-7 max-w-4xl font-heading text-[2.1rem] font-light leading-[1.15] md:text-5xl">
            {t('doctor.sectionTitle')}
          </h2>
        </motion.div>

        {sorted.length > 0 ? (
          <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-14">
            {sorted.map((doc, i) => {
              const fromLeft = i % 2 === 0;

              return (
                <motion.div
                  key={doc.id}
                  initial={{
                    opacity: 0,
                    x: fromLeft ? '-35%' : '35%',
                    y: fromLeft ? 80 : -80,
                    scale: 0.92,
                    rotate: fromLeft ? -1.5 : 1.5
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotate: 0
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                    margin: '0px 0px -8% 0px'
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.18,
                    ease: EASE
                  }}
                >
                  <motion.div
                    whileHover={{
                      y: -10,
                      scale: 1.015
                    }}
                    transition={{
                      duration: 0.45,
                      ease: EASE
                    }}
                  >
                    <DoctorPortraitCard
                      doctor={doc}
                      delay={0}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1
            }}
            viewport={{
              once: true,
              amount: 0.3
            }}
            transition={{
              duration: 1.8,
              ease: EASE
            }}
          >
            <div className="mt-16 max-w-xl border-l border-[#C9AF80] pl-7">
              <p className="text-lg leading-[1.75] text-neutral-700">
                {t('doctor.placeholder')}
              </p>

              <p className="mt-5 eyebrow text-neutral-400">
                {t('doctor.placeholderLabel')}
              </p>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.96
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          viewport={{
            once: true,
            amount: 0.5
          }}
          transition={{
            duration: 1.5,
            delay: 0.25,
            ease: EASE
          }}
        >
          <Link
            to={langPath('/team')}
            className="mt-14 inline-block eyebrow link-underline"
          >
            {t('doctor.moreLink')}
          </Link>
        </motion.div>

      </div>
    </section>
  );
}