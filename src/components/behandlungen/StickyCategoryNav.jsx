import React, { useEffect, useState } from 'react';
import { useLanguage, loc } from '@/lib/LanguageContext';

export default function StickyCategoryNav({ categories }) {
  const { lang } = useLanguage();
  const [active, setActive] = useState(categories[0]?.slug);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sections = categories.map((c) => document.getElementById(c.slug)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    const timer = setTimeout(() => setVisible(true), 150);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [categories]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      className={`sticky z-30 hidden justify-center gap-10 border-b py-5 backdrop-blur-xl backdrop-saturate-150 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:flex top-[86px] border-[#E8E2D9]/0 translate-y- px-6 bg-white/9 ${
      visible ? "" : '-translate-y-full'}`
      }>
      
      {categories.map((c, i) =>
      <button
        key={c.slug}
        onClick={() => scrollTo(c.slug)}
        className={`eyebrow transition-colors duration-500 ${
        active === c.slug ? 'text-[#C9AF80]' : 'text-neutral-500 hover:text-neutral-800'}`
        }>
        
          {String(i + 1).padStart(2, '0')} — {loc(c, 'title', lang)?.replace(/\.$/, '')}
        </button>
      )}
    </nav>);

}