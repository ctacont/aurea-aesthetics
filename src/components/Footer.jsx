import React from 'react';
import { Link } from 'react-router-dom';
import { useSettings, useTreatments } from '@/lib/useSite';
import { LOGO, GEO_AREAS } from '@/lib/site';

export default function Footer() {
  const { settings } = useSettings();
  const { data: treatments = [] } = useTreatments();

  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="grid gap-14 px-6 py-20 lg:grid-cols-4 lg:px-12 lg:py-28">
        <div className="lg:col-span-1">
          <img src="https://media.base44.com/images/public/6a6b131f6cc49b3ee60e929e/ab0e6c25c_aurea_logo_transparent_2.png" alt="Aurea Aesthetics AG" className="w-auto brightness-0 invert h-12" />
          <p className="mt-7 max-w-xs text-sm leading-relaxed text-white/50">
            Praxis für ästhetische Medizin in {settings.district}. Individuell, präzise und natürlich.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-6 text-[#C9AF80]">Behandlungen</p>
          <ul className="space-y-3 text-sm text-white/60">
            {treatments.slice(0, 6).map((t) =>
            <li key={t.id}>
                <Link to={`/behandlungen/${t.slug}`} className="link-underline">{t.title_de}</Link>
              </li>
            )}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-6 text-[#C9AF80]">Praxis</p>
          <ul className="space-y-3 text-sm text-white/60">
            <li><Link to="/praxis" className="link-underline">Über Aurea</Link></li>
            <li><Link to="/experience" className="link-underline">Aurea Experience</Link></li>
            <li><Link to="/standort-zuerich-enge" className="link-underline">Standort Zürich Enge</Link></li>
            <li><Link to="/faq" className="link-underline">Häufige Fragen</Link></li>
            <li><Link to="/kontakt-termin" className="link-underline">Kontakt & Termin</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-6 text-[#C9AF80]">Kontakt</p>
          <address className="not-italic text-sm leading-relaxed text-white/60">
            {settings.practice_name}<br />
            {settings.street}<br />
            {settings.postal_code} {settings.city}<br />
            Schweiz
          </address>
          <dl className="mt-6 space-y-3 text-sm text-white/60">
            <div>
              <dt className="eyebrow text-white/35">Telefon</dt>
              <dd className="mt-1">
                {settings.phone ?
                <a href={`tel:${settings.phone.replace(/\s/g, '')}`} className="link-underline">{settings.phone}</a> :

                <span className="text-white/35">Auf Anfrage</span>
                }
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-white/35">E-Mail</dt>
              <dd className="mt-1">
                {settings.email ?
                <a href={`mailto:${settings.email}`} className="link-underline">{settings.email}</a> :

                <Link to="/kontakt-termin" className="link-underline">Kontaktformular</Link>
                }
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-white/35">Erreichbarkeit</dt>
              <dd className="mt-1 whitespace-pre-line">
                {settings.opening_hours || 'Termine ausschliesslich nach Vereinbarung'}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-8 lg:px-12">
        <p className="eyebrow mb-4 text-white/25">Einzugsgebiet</p>
        <p className="max-w-4xl text-xs leading-relaxed text-white/35">
          {GEO_AREAS.join(' · ')}
        </p>
      </div>

      <div className="flex flex-col gap-4 border-t border-white/10 px-6 py-7 text-xs text-white/35 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <p>© {new Date().getFullYear()} {settings.practice_name}. Alle Rechte vorbehalten.</p>
        <nav className="flex gap-6" aria-label="Rechtliches">
          <Link to="/impressum" className="link-underline">Impressum</Link>
          <Link to="/datenschutz" className="link-underline">Datenschutz</Link>
        </nav>
      </div>
    </footer>);

}