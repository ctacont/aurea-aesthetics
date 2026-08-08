import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import useParallax from '@/hooks/useParallax';
import { IMAGES, GEO_AREAS } from '@/lib/site';
import { useLanguage } from '@/lib/LanguageContext';
import { useBooking } from '@/hooks/useBooking';

export default function LocationSection({ settings }) {
  const { t, langPath } = useLanguage();
  const { handleBook } = useBooking();
  const { ref: bgRef, offset } = useParallax(0.12);

  return (
    // Hier ist der fehlende Wrapper. 
    // Ich habe das bgRef hier angehängt, da du es oben definiert hast.
    <div ref={bgRef} className="relative"> 
      <Reveal delay={200}>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="eyebrow text-[#C9AF80]">{t('locationSection.arrival')}</p>
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
          </div>
          <div>
            <p className="eyebrow text-[#C9AF80]">{t('locationSection.appointments')}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              {settings.opening_hours || t('locationSection.appointmentsFallback')}
            </p>
            <button
              onClick={handleBook}
              data-booking-cta="true"
              className="mt-3 inline-block text-sm text-white link-underline"
            >
              {t('locationSection.appointmentsLink')}
            </button>
          </div>
        </div>
      </Reveal>

      <Reveal delay={260}>
        <div className="mt-12 border-t border-white/20 pt-8">
          <p className="eyebrow text-white/50">{t('locationSection.geoArea')}</p>
          <p className="mt-4 max-w-lg text-xs leading-relaxed text-white/55">
            {GEO_AREAS.join(' · ')}
          </p>
        </div>
      </Reveal>

      <Reveal delay={320}>
        <Link to={langPath('/standort-zuerich-enge')} className="mt-10 inline-block eyebrow link-underline">
          {t('locationSection.link')}
        </Link>
      </Reveal>
    </div> // Schließendes Tag des Wrappers
  ); // Hier fehlte das schließende ); für den return-Block
}