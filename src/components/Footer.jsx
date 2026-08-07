import React from 'react';
import { Link } from 'react-router-dom';
import { useSettings, useTreatments } from '@/lib/useSite';
import { LOGO, GEO_AREAS } from '@/lib/site';
import { useLanguage, loc } from '@/lib/LanguageContext';
import { useBooking } from '@/hooks/useBooking';

export default function Footer() {
  const { settings } = useSettings();
  const { data: treatments = [] } = useTreatments();
  const { t, lang, langPath } = useLanguage();
  const { handleBook } = useBooking();

  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="grid gap-14 px-6 py-20 lg:grid-cols-4 lg:px-12 lg:py-28">
        <div className="lg:col-span-1 derStandort">
          <p className="eyebrow mb-6 text-[#C9AF80]">
            {t('footer.derStandort')}
          </p>

          {/*
             <img src="https://media.base44.com/images/public/6a6b131f6cc49b3ee60e929e/ab0e6c25c_aurea_logo_transparent_2.png" alt="Aurea Aesthetics AG" className="h-12 w-auto brightness-0 invert" />
             */}
          <p className="mt-7 max-w-xs text-sm leading-relaxed text-white/50">
            {t('footer.tagline', { district: settings.district })}
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=T%C3%B6distrasse+1,+8002+Z%C3%BCrich,+Switzerland"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block"
            aria-label="Google Maps – Aurea Aesthetics, Tödistrasse 1, 8002 Zürich">
            
            <iframe
              src="https://www.google.com/maps?q=T%C3%B6distrasse%201,%208002%20Z%C3%BCrich%2C%20Switzerland&z=15&output=embed"
              title="Aurea Aesthetics – Tödistrasse 1, 8002 Zürich"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-[200px] w-full rounded-[2px] border border-white/10 grayscale contrast-[0.92] opacity-90" />
            
          </a>
        </div>

        <div>
          <p className="eyebrow mb-6 text-[#C9AF80]">{t('footer.treatments')}</p>
          <ul className="space-y-3 text-sm text-white/60">
            {treatments.slice(0, 6).map((tr) =>
            <li key={tr.id}>
                <Link to={langPath(`/behandlungen/${tr.slug}`)} className="link-underline">{loc(tr, 'title', lang) || tr.title_de}</Link>
              </li>
            )}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-6 text-[#C9AF80]">{t('footer.praxis')}</p>
          <ul className="space-y-3 text-sm text-white/60">
            <li><Link to={langPath('/praxis')} className="link-underline">{t('footer.aboutAurea')}</Link></li>
            <li><Link to={langPath('/experience')} className="link-underline">{t('footer.experience')}</Link></li>
            <li><Link to={langPath('/standort-zuerich-enge')} className="link-underline">{t('footer.location')}</Link></li>
            <li><Link to={langPath('/faq')} className="link-underline">{t('footer.faq')}</Link></li>
            <li><button onClick={handleBook} data-booking-cta="true" className="link-underline">{t('footer.contact')}</button></li>
            <li><Link to={langPath('/impressum')} className="link-underline">{t('footer.impressum')}</Link></li>
            <li><Link to={langPath('/datenschutz')} className="link-underline">{t('footer.datenschutz')}</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-6 text-[#C9AF80]">{t('footer.contactHead')}</p>
          <address className="not-italic text-sm leading-relaxed text-white/60">
            {settings.practice_name}<br />
            {settings.street}<br />
            {settings.postal_code} {settings.city}<br />
            {t('footer.switzerland')}
          </address>
          <dl className="mt-6 space-y-3 text-sm text-white/60">
            <div>
              <dt className="eyebrow text-white/35">{t('footer.phone')}</dt>
              <dd className="mt-1">
                {settings.phone ?
                <a href={`tel:${settings.phone.replace(/\s/g, '')}`} className="link-underline">{settings.phone}</a> :

                <span className="text-white/35">{t('footer.phonePlaceholder')}</span>
                }
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-white/35">{t('footer.email')}</dt>
              <dd className="mt-1">
                {settings.email ?
                <a href={`mailto:${settings.email}`} className="link-underline">{settings.email}</a> :

                <Link to={langPath('/kontakt-termin')} className="link-underline">{t('footer.emailPlaceholder')}</Link>
                }
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-white/35">{t('footer.availability')}</dt>
              <dd className="mt-1 whitespace-pre-line">
                {settings.opening_hours || t('footer.availabilityFallback')}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-8 lg:px-12">
        <p className="eyebrow mb-4 text-[hsl(var(--accent))]">{t('footer.geoArea')}</p>
        <p className="text-xs leading-relaxed max-w-12xl text-[hsl(var(--accent))]">
          {GEO_AREAS.join(' · ')}
        </p>
      </div>

      <div className="flex flex-col gap-4 border-t border-white/10 px-6 py-7 text-xs text-white/35 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <p className="text-[hsl(var(--background))]">{t('footer.copyright', { year: new Date().getFullYear(), name: settings.practice_name })}</p>
        <p className="text-[hsl(var(--card))]">
          {t('footer.designBy')}{' '}
          <a href="https://brandtiger.de/" target="_blank" rel="noopener noreferrer" className="link-underline text-[hsl(var(--card))] font-bold">Brandtiger.de</a>
        </p>
      </div>
    </footer>);

}