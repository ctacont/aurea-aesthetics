import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { NAV } from '@/components/nav/NavLinks';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useTreatments } from '@/lib/useSite';
import { useLanguage, loc } from '@/lib/LanguageContext';
import { useBooking } from '@/hooks/useBooking';

export default function MobileMenu({ open, onClose }) {
  const { data: treatments = [] } = useTreatments();
  const { t, lang, langPath, neutralPath } = useLanguage();
  const { handleBook } = useBooking();

  const isActive = (path) => {
    const current = neutralPath(window.location.pathname);
    return current === path || current.startsWith(path + '/');
  };

  return (
    <div
      className={`fixed inset-0 z-[60] bg-[#0A0A0A] text-white transition-opacity duration-500 lg:hidden ${
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!open}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between px-6 py-6">
          <span className="eyebrow text-white/50">{t('nav.menu')}</span>
          <button onClick={onClose} aria-label={t('nav.menuClose')} className="p-2">
            <X className="h-5 w-5" strokeWidth={1} />
          </button>
        </div>
        <div className="px-6">
          <LanguageSwitcher variant="mobile" />
        </div>
        <nav className="flex-1 overflow-y-auto px-6 pb-16">
          <ul className="space-y-1">
            {NAV.map((n) => (
              <li key={n.path} className="border-b border-white/10">
                {n.path === '/kontakt-termin' ? (
                  <button
                    onClick={() => { onClose(); handleBook(); }}
                    data-booking-cta="true"
                    className={`block w-full py-5 text-left font-heading text-3xl font-light ${
                      isActive(n.path) ? 'text-[#E7D3AA]' : 'text-white'
                    }`}
                  >
                    {t(n.labelKey)}
                  </button>
                ) : (
                  <Link
                    to={langPath(n.path)}
                    onClick={onClose}
                    className={`block py-5 font-heading text-3xl font-light ${
                      isActive(n.path) ? 'text-[#E7D3AA]' : 'text-white'
                    }`}
                  >
                    {t(n.labelKey)}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-10 mb-4 text-[#C9AF80]">{t('nav.behandlungen')}</p>
          <ul className="space-y-3">
            {treatments.map((tr) => (
              <li key={tr.id}>
                <Link
                  to={langPath(`/behandlungen/${tr.slug}`)}
                  onClick={onClose}
                  className="font-heading text-lg text-white/70"
                >
                  {loc(tr, 'title', lang) || tr.title_de}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}