import React, { useEffect, useRef, useState } from 'react';
import { useLanguage, loc } from '@/lib/LanguageContext';

export default function StickyCategoryNav({ categories }) {
  const { lang } = useLanguage();
  const [active, setActive] = useState(categories[0]?.slug);
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const sections = categories
      .map((c) => document.getElementById(c.slug))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));

    return () => {
      observer.disconnect();
    };
  }, [categories]);

  useEffect(() => {
    const onScroll = () => {
      if (!navRef.current) return;

      setIsSticky(
        navRef.current.getBoundingClientRect().top <= 86
      );
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <nav
      ref={navRef}
      className={`sticky top-[86px] z-30 hidden justify-center gap-10 border-b py-5 bg-white transition-all duration-700 lg:flex
      ${isSticky ? 'opacity-100 translate-y-0 bg-white' : 'opacity-100 py-[100px]'}`}
    >
      {categories.map((c, i) => (
        <button
          key={c.slug}
          onClick={() => scrollTo(c.slug)}
          className={`eyebrow transition-colors duration-500 ${
            active === c.slug
              ? 'text-[#8A7550] is-active'
              : 'text-neutral-500 hover:text-neutral-800'
          }`}
        >
          {String(i + 1).padStart(2, '0')} — {loc(c, 'title', lang)?.replace(/\.$/, '')}
        </button>
      ))}
    </nav>
  );
}