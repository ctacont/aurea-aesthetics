import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { NAV } from '@/components/nav/NavLinks';
import MegaMenu from '@/components/nav/MegaMenu';
import MobileMenu from '@/components/nav/MobileMenu';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/lib/LanguageContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);
  const { pathname } = useLocation();
  const { t, langPath, neutralPath } = useLanguage();

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
        'bg-black/50 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/15 shadow-[0_8px_40px_rgba(0,0,0,0.25)]' :
        'bg-transparent'}`
        }>
        
        <div className="flex items-center justify-between px-6 py-5 lg:px-12">
          <Link to={langPath('/')} className="flex items-center" aria-label="Aurea Aesthetics">
            <img src="https://media.base44.com/images/public/6a6b131f6cc49b3ee60e929e/ab0e6c25c_aurea_logo_transparent_2.png"

            alt="Aurea Aesthetics AG"
            className="h-12 w-auto brightness-0 invert" />
            
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label={t('breadcrumb')}>
            {NAV.map((n) =>
            <div key={n.path} onMouseEnter={() => setMega(!!n.mega)}>
                <Link
                to={langPath(n.path)}
                className={`eyebrow link-underline transition-colors ${
                isActive(n.path) ? 'is-active text-[#E7D3AA]' : 'text-white hover:text-[#E7D3AA]'}`
                }>
                
                  {t(n.labelKey)}
                </Link>
              </div>
            )}
          </nav>

          <div className="flex items-center gap-5">
            <LanguageSwitcher />
            <Link
              to={langPath('/kontakt-termin')}
              className="hidden border border-white/35 px-6 py-3 eyebrow text-white transition-colors duration-500 hover:border-[#C9AF80] hover:bg-[#C9AF80] hover:text-[#0A0A0A] lg:inline-block">
              
              {t('nav.beratungAnfragen')}
            </Link>
            <button
              onClick={() => setMobile(true)}
              aria-label={t('nav.menuOpen')}
              className="p-1 text-white lg:hidden">
              
              <Menu className="h-6 w-6" strokeWidth={1} />
            </button>
          </div>
        </div>

        <div
          className={`hidden overflow-hidden transition-all duration-500 lg:block ${
          mega ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'}`
          }>
          
          <MegaMenu onNavigate={() => setMega(false)} />
        </div>
      </header>

      <MobileMenu open={mobile} onClose={() => setMobile(false)} />
    </>);

}