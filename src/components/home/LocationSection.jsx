import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Eyebrow from '@/components/Eyebrow';
import useParallax from '@/hooks/useParallax';
import { IMAGES, GEO_AREAS } from '@/lib/site';
import { useLanguage } from '@/lib/LanguageContext';
import { useBooking } from '@/hooks/useBooking';

const EASE = [0.16, 1, 0.3, 1];

export default function LocationSection({ settings }) {
  const { t, langPath } = useLanguage();
  const { handleBook } = useBooking();
  const { ref: bgRef, offset } = useParallax(0.12);

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A]">

      {/* Hintergrundbild */}
      <motion.div
        ref={bgRef}
        initial={{
          opacity: 0,
          scale: 1.22
        }}
        whileInView={{
          opacity: 1,
          scale: 1.15
        }}
        viewport={{
          once: true,
          amount: 0.15
        }}
        transition={{
          duration: 2.4,
          ease: EASE
        }}
        className="absolute inset-0"
        style={{
          y: offset
        }}
      >
        <Image
          src={IMAGES.location}
          alt={t('locationSection.alt')}
          className="h-full w-full"
          fittingType="fill"
        />
      </motion.div>

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.8,
          ease: EASE
        }}
        className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/75 via-[#0A0A0A]/35 to-transparent"
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-6 py-24 text-white lg:px-16 lg:py-40">

        {/* Eyebrow */}
        <motion.div
          initial={{
            opacity: 0,
            x: -35
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
            ease: EASE
          }}
        >
          <Eyebrow tone="light">
            {t('locationSection.eyebrow')}
          </Eyebrow>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.97
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
            duration: 1.7,
            delay: 0.12,
            ease: EASE
          }}
        >
          <h2 className="mt-7 font-heading text-[2.1rem] font-light leading-[1.15] md:text-5xl">
            {t('locationSection.headline')}

            <span className="text-[#C9AF80]">
              {t('locationSection.headlineAccent')}
            </span>
          </h2>
        </motion.div>

        {/* Lead */}
        <motion.div
          initial={{
            opacity: 0,
            x: 35
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
            delay: 0.24,
            ease: EASE
          }}
        >
          <p className="mt-8 max-w-lg text-[0.98rem] leading-relaxed text-white/80">
            {t('locationSection.lead', {
              street: settings.street,
              plz: settings.postal_code,
              city: settings.city
            })}
          </p>
        </motion.div>

        {/* Anfahrt + Termine */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2">

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0
            }}
            viewport={{
              once: true,
              amount: 0.5
            }}
            transition={{
              duration: 1.5,
              delay: 0.3,
              ease: EASE
            }}
          >
            <p className="eyebrow text-[#C9AF80]">
              {t('locationSection.arrival')}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-white/75">
              {t('locationSection.arrivalText')}
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=T%C3%B6distrasse+1,+8002+Z%C3%BCrich,+Switzerland"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-white link-underline"
            >
              {t('locationSection.arrivalLink')}
            </a>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0
            }}
            viewport={{
              once: true,
              amount: 0.5
            }}
            transition={{
              duration: 1.5,
              delay: 0.42,
              ease: EASE
            }}
          >
            <p className="eyebrow text-[#C9AF80]">
              {t('locationSection.appointments')}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-white/75">
              {settings.opening_hours ||
                t('locationSection.appointmentsFallback')}
            </p>

            <button
              onClick={handleBook}
              data-booking-cta="true"
              className="mt-3 inline-block text-sm text-white link-underline"
            >
              {t('locationSection.appointmentsLink')}
            </button>
          </motion.div>

        </div>

        {/* GEO */}
        <motion.div
          initial={{
            opacity: 0,
            x: -30
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
            delay: 0.5,
            ease: EASE
          }}
          className="mt-12 border-t border-white/20 pt-8"
        >
          <p className="eyebrow text-white/50">
            {t('locationSection.geoArea')}
          </p>

          <p className="mt-4 max-w-lg text-xs leading-relaxed text-white/55">
            {GEO_AREAS.join(' · ')}
          </p>
        </motion.div>

        {/* Link */}
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
            amount: 0.6
          }}
          transition={{
            duration: 1.4,
            delay: 0.6,
            ease: EASE
          }}
        >
          <Link
            to={langPath('/standort-zuerich-enge')}
            className="mt-10 inline-block eyebrow link-underline"
          >
            {t('locationSection.link')}
          </Link>
        </motion.div>

      </div>
    </section>
  );
}