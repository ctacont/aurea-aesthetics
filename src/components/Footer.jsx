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
              referrerPolicy="no-referrer-when-downgrade"
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

          {/* Social Media Links */}
          <div className="mt-8">
            <p className="eyebrow mb-3 text-[#C9AF80]">Social Media</p>
            <div className="flex items-center gap-4 text-white/70">
              {/* WhatsApp */}
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="transition-colors hover:text-[#C9AF80]"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-colors hover:text-[#C9AF80]"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-colors hover:text-[#C9AF80]"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="transition-colors hover:text-[#C9AF80]"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.98-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>

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