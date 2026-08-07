import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { NAV } from '@/components/nav/NavLinks';
import MegaMenu from '@/components/nav/MegaMenu';
import MobileMenu from '@/components/nav/MobileMenu';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/lib/LanguageContext';
import { useBooking } from '@/hooks/useBooking';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);
  const { pathname } = useLocation();
  const { t, langPath, neutralPath } = useLanguage();
  const { handleBook } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMega(false);
    setMobile(false);
  }, [pathname]);

  const solid = scrolled || mega;

  const isActive = (path) => neutralPath(pathname) === path || neutralPath(pathname).startsWith(path + '/');

  return (
    <>
      <header
        onMouseLeave={() => setMega(false)}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ?
        'bg-white border-b border-neutral-100 shadow-sm' :
        'bg-transparent'}`
        }>
        
        <div className="flex items-center justify-between px-6 py-5 lg:px-12">
          <Link to={langPath('/')} className="flex items-center" aria-label="Aurea Aesthetics">
            <img src="https://media.base44.com/images/public/6a6b131f6cc49b3ee60e929e/ab0e6c25c_aurea_logo_transparent_2.png"

            alt="Aurea Aesthetics AG"
            className={`h-12 w-auto transition-all duration-500 ${solid ? 'brightness-0' : 'brightness-0 invert'}`} />
            
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label={t('breadcrumb')}>
            {NAV.map((n) =>
            <div key={n.path} onMouseEnter={() => setMega(!!n.mega)}>
                <Link
                to={langPath(n.path)}
                className={`eyebrow link-underline transition-colors duration-500 ${
                isActive(n.path) ?
                (solid ? 'is-active text-[#8A7550]' : 'is-active text-[#E7D3AA]') :
                (solid ? 'text-neutral-800 hover:text-[#8A7550]' : 'text-white hover:text-[#E7D3AA]')}`
                }>
                
                  {t(n.labelKey)}
                </Link>
              </div>
            )}
          </nav>

          <div className="flex items-center gap-5">
            <LanguageSwitcher />
            <button
              onClick={handleBook}
              data-booking-cta="true"
              className={`hidden px-6 py-3 eyebrow border transition-colors duration-500 lg:inline-block ${
              solid ?
              'border-neutral-300 text-neutral-800 hover:border-[#C9AF80] hover:bg-[#C9AF80] hover:text-white' :
              'border-white/35 text-white hover:border-[#C9AF80] hover:bg-[#C9AF80] hover:text-[#0A0A0A]'}`
              }>
              
              {t('nav.beratungAnfragen')}
            </button>
            <button
              onClick={() => setMobile(true)}
              aria-label={t('nav.menuOpen')}
              className={`p-1 transition-colors duration-500 lg:hidden ${solid ? 'text-neutral-800' : 'text-white'}`}>
              
              <Menu className="h-6 w-6" strokeWidth={1} />
            </button>
          </div>
        </div>

{/*
        <div
          className={`hidden overflow-hidden transition-all duration-500 lg:block ${
          mega ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'}`
          }>
        */}
        <div className={`mega-menu hidden overflow-hidden transition-all duration-500 lg:block ${mega ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <MegaMenu onNavigate={() => setMega(false)} />
        </div>
      </header>

      <MobileMenu open={mobile} onClose={() => setMobile(false)} />
    </>);

}