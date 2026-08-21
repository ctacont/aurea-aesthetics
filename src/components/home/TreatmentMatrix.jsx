import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import { useLanguage, loc } from '@/lib/LanguageContext';
import { CATEGORIES } from '@/lib/categoryContent';

const ORDER = [
  'hautqualitaet-regeneration',
  'hyaluron-konturierung',
  'botulinumtoxin'
];

const EASE = [0.16, 1, 0.3, 1];

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(min-width: 1024px)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');

    const handler = (e) => {
      setIsDesktop(e.matches);
    };

    mq.addEventListener('change', handler);

    return () => {
      mq.removeEventListener('change', handler);
    };
  }, []);

  return isDesktop;
}

export default function TreatmentMatrix() {
  const { t, lang, langPath } = useLanguage();

  const categories = ORDER.map((key) => CATEGORIES[key]).filter(Boolean);

  const isDesktop = useIsDesktop();

  return (
    <section className="overflow-hidden py-24 lg:py-32">

      <div className="px-6 lg:px-12">
        <div className="mx-auto max-w-6xl">

          <Reveal
            delay={200}
            className="-translate-x-[50%] duration-[1800ms]"
          >
            <Eyebrow>
              {t('treatmentMatrix.eyebrow')}
            </Eyebrow>
          </Reveal>

          <Reveal
            delay={350}
            className="translate-x-[50%] duration-[2000ms]"
          >
            <h2 className="mt-7 max-w-6xl font-heading text-[2.1rem] font-light leading-[1.15] md:text-5xl">
              {t('treatmentMatrix.title')}

              <span className="text-[#8A7550]">
                {t('treatmentMatrix.accent')}
              </span>
            </h2>
          </Reveal>

        </div>
      </div>

      <div className="mt-16 px-6 lg:px-12">
        <div className="mx-auto max-w-6xl">

          {categories.map((cat, i) => {
            const imageFromLeft = i % 2 === 0;

            const imageX = isDesktop
              ? imageFromLeft
                ? '-50%'
                : '50%'
              : imageFromLeft
                ? '-20%'
                : '20%';

            const textX = isDesktop
              ? imageFromLeft
                ? '50%'
                : '-50%'
              : imageFromLeft
                ? '20%'
                : '-20%';

            return (
              <div
                key={cat.slug}
                className="grid grid-cols-1 gap-10 border-t border-[#E8E2D9] py-20 first:border-t-0 first:pt-0 lg:grid-cols-2 lg:gap-20 lg:py-32"
              >

                {/* IMAGE */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: imageX,
                    scale: 0.96
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    scale: 1
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                    margin: '0px 0px -8% 0px'
                  }}
                  transition={{
                    duration: 1.8,
                    ease: EASE
                  }}
                  className={`relative aspect-[4/3] w-full overflow-hidden lg:aspect-[4/5] ${
                    imageFromLeft ? '' : 'lg:order-2'
                  }`}
                >
                  <img
                    src={cat.image_url}
                    alt={loc(cat, 'title', lang)}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </motion.div>

                {/* TEXT */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: textX,
                    scale: 0.98
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    scale: 1
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                    margin: '0px 0px -8% 0px'
                  }}
                  transition={{
                    duration: 1.8,
                    delay: 0.18,
                    ease: EASE
                  }}
                  className={`flex flex-col justify-center ${
                    imageFromLeft ? '' : 'lg:order-1'
                  }`}
                >

                  <motion.span
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
                      amount: 0.5
                    }}
                    transition={{
                      duration: 1.2,
                      delay: 0.35,
                      ease: EASE
                    }}
                    className="font-heading text-6xl font-light text-[#8A7550] lg:text-7xl"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </motion.span>

                  <motion.h3
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
                      amount: 0.5
                    }}
                    transition={{
                      duration: 1.2,
                      delay: 0.45,
                      ease: EASE
                    }}
                    className="mt-6 font-heading text-2xl font-light lg:text-3xl"
                  >
                    {loc(cat, 'title', lang)}
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
                      amount: 0.5
                    }}
                    transition={{
                      duration: 1.2,
                      delay: 0.55,
                      ease: EASE
                    }}
                    className="mt-4 max-w-md leading-relaxed text-neutral-600 lg:mt-5"
                  >
                    {loc(cat, 'lead', lang)}
                  </motion.p>

                  <motion.div
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
                      amount: 0.5
                    }}
                    transition={{
                      duration: 1.2,
                      delay: 0.65,
                      ease: EASE
                    }}
                  >
                    <Link
                      to={langPath(`/behandlungen/${cat.slug}`)}
                      className="mt-5 inline-flex items-center gap-3 eyebrow link-underline lg:mt-7"
                    >
                      {t('categoryPage.moreLink')}

                      <ArrowRight
                        className="h-4 w-4 text-[#C9AF80]"
                        strokeWidth={1}
                      />
                    </Link>
                  </motion.div>

                </motion.div>

              </div>
            );
          })}

        </div>
      </div>

      <div className="mt-14 px-6 lg:px-12">
        <div className="mx-auto max-w-6xl">

          <Reveal
            delay={300}
            className="-translate-x-[50%] duration-[1800ms]"
          >
            <Link
              to={langPath('/behandlungen')}
              className="eyebrow inline-flex items-center gap-3 link-underline"
            >
              {t('treatmentMatrix.allTreatments')}

              <ArrowRight
                className="h-4 w-4 text-[#C9AF80]"
                strokeWidth={1}
              />
            </Link>
          </Reveal>

        </div>
      </div>

    </section>
  );
}