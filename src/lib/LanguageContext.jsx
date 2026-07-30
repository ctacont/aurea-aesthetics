import React, { createContext, useContext, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { translations } from '@/lib/translations';

const LanguageContext = createContext(null);

function resolveKey(dict, key) {
  return key.split('.').reduce((acc, k) => (acc && acc[k] != null ? acc[k] : undefined), dict);
}

/**
 * Returns the value at `key` for the active language, falling back to German
 * then to the key itself. Supports {placeholder} interpolation via `vars`.
 */
function makeT(lang) {
  return (key, vars) => {
    const dict = translations[lang] || translations.de;
    let val = resolveKey(dict, key);
    if (val == null) val = resolveKey(translations.de, key);
    if (val == null) return key;
    if (typeof val === 'string' && vars) {
      val = val.replace(/\{(\w+)\}/g, (_, name) => (vars[name] != null ? String(vars[name]) : `{${name}}`));
    }
    return val;
  };
}

export function LanguageProvider({ children }) {
  const { pathname } = useLocation();
  const lang = pathname.startsWith('/en') ? 'en' : 'de';
  const t = useMemo(() => makeT(lang), [lang]);

  const langPath = useCallback(
    (path) => {
      if (lang === 'en') return path === '/' ? '/en' : `/en${path}`;
      return path;
    },
    [lang]
  );

  /** Strip any /en prefix from a path → language-neutral path. */
  const neutralPath = useCallback((p) => (p.startsWith('/en') ? p.slice(3) || '/' : p), []);

  /** Switch-language href for the toggle: same neutral path, other language. */
  const otherLangPath = useCallback(() => {
    const neutral = neutralPath(pathname);
    return lang === 'en' ? neutral : neutral === '/' ? '/en' : `/en${neutral}`;
  }, [lang, pathname, neutralPath]);

  const value = useMemo(
    () => ({ lang, t, langPath, neutralPath, otherLangPath }),
    [lang, t, langPath, neutralPath, otherLangPath]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Safe fallback so components used outside the provider (rare) don't crash.
    const t = (k) => resolveKey(translations.de, k) ?? k;
    return { lang: 'de', t, langPath: (p) => p, neutralPath: (p) => p, otherLangPath: () => '/en' };
  }
  return ctx;
}

/**
 * Resolve a localized field from a record: record[`${base}_${lang}`] ?? record[`${base}_de`].
 */
export function loc(record, base, lang) {
  if (!record) return undefined;
  return record[`${base}_${lang}`] ?? record[`${base}_de`];
}