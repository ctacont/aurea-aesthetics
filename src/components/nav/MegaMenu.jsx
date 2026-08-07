import React from 'react';
import { Link } from 'react-router-dom';
import { useTreatments } from '@/lib/useSite';
import { TREATMENT_GROUPS } from '@/lib/site';
import { CATEGORIES } from '@/lib/categoryContent';
import { useLanguage, loc } from '@/lib/LanguageContext';

export default function MegaMenu({ onNavigate }) {
  const { data: treatments = [] } = useTreatments();
  const { t, lang, langPath } = useLanguage();
  const groups = TREATMENT_GROUPS[lang];
  const categories = Object.values(CATEGORIES);

  return (
    <div className="grid gap-10 border-t border-white/15 bg-black/25 px-8 py-12 text-white backdrop-blur-2xl backdrop-saturate-150 md:grid-cols-4 md:px-16">
      {groups.map((g) => (
        <div key={g.key}>
          <p className="eyebrow mb-5 text-[#E7D3AA]">{g.label}</p>
          <ul className="space-y-3">
            {treatments
              .filter((tr) => tr.category === g.key)
              .map((tr) => (
                <li key={tr.id}>
                  <Link
                    to={lang === 'en' ? `/en/behandlungen/${tr.slug}` : `/behandlungen/${tr.slug}`}
                    onClick={onNavigate}
                    className="font-heading text-xl text-white/85 transition-colors hover:text-[#E7D3AA]"
                  >
                    {loc(tr, 'title', lang) || tr.title_de}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
      <div className="border-t border-white/15 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
        <p className="eyebrow mb-5 text-[#E7D3AA]">{t('megaMenu.overview')}</p>
        <Link
          to={lang === 'en' ? '/en/behandlungen' : '/behandlungen'}
          onClick={onNavigate}
          className="font-heading text-2xl leading-snug text-white link-underline"
        >
          {t('megaMenu.allTreatments')}
        </Link>
        <p className="mt-5 text-sm leading-relaxed text-white/60">
          {t('megaMenu.overviewText')}
        </p>
        <ul className="mt-6 space-y-2 border-t border-white/15 pt-6">
          {categories.map((c) => (
            <li key={c.slug}>
              <Link
                to={langPath(`/behandlungen#${c.slug}`)}
                onClick={onNavigate}
                className="text-sm text-white/70 link-underline hover:text-[#E7D3AA]"
              >
                {loc(c, 'title', lang)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}