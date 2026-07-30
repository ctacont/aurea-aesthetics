import { useEffect } from 'react';

function setTag(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(attrs.tag || 'meta');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => {
    if (k !== 'tag' && v != null) el.setAttribute(k, v);
  });
  return el;
}

function removeTag(selector) {
  const el = document.head.querySelector(selector);
  if (el) el.remove();
}

/**
 * SEO component. `path` is the language-neutral path (no /en prefix).
 * Emits canonical + hreflang alternate links for both languages.
 */
export default function Seo({ title, description, path = '/', jsonLd, noindex = false, lang = 'de' }) {
  useEffect(() => {
    const full = title ? `${title}` : 'Aurea Aesthetics AG';
    document.title = full;
    document.documentElement.lang = lang === 'en' ? 'en' : 'de-CH';

    setTag('meta[name="description"]', { tag: 'meta', name: 'description', content: description || '' });
    setTag('meta[name="robots"]', { tag: 'meta', name: 'robots', content: noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large' });
    setTag('meta[property="og:title"]', { tag: 'meta', property: 'og:title', content: full });
    setTag('meta[property="og:description"]', { tag: 'meta', property: 'og:description', content: description || '' });
    setTag('meta[property="og:type"]', { tag: 'meta', property: 'og:type', content: 'website' });
    setTag('meta[property="og:locale"]', { tag: 'meta', property: 'og:locale', content: lang === 'en' ? 'en' : 'de_CH' });
    setTag('meta[name="twitter:card"]', { tag: 'meta', name: 'twitter:card', content: 'summary_large_image' });

    const origin = window.location.origin;
    const dePath = path;
    const enPath = path === '/' ? '/en' : `/en${path}`;

    setTag('link[rel="canonical"]', { tag: 'link', rel: 'canonical', href: origin + (lang === 'en' ? enPath : dePath) });
    setTag('link[rel="alternate"][hreflang="de-CH"]', { tag: 'link', rel: 'alternate', hreflang: 'de-CH', href: origin + dePath });
    setTag('link[rel="alternate"][hreflang="en"]', { tag: 'link', rel: 'alternate', hreflang: 'en', href: origin + enPath });
    setTag('link[rel="alternate"][hreflang="x-default"]', { tag: 'link', rel: 'alternate', hreflang: 'x-default', href: origin + dePath });

    let script = document.getElementById('aurea-jsonld');
    if (script) script.remove();
    if (jsonLd) {
      script = document.createElement('script');
      script.id = 'aurea-jsonld';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      removeTag('link[rel="alternate"][hreflang="de-CH"]');
      removeTag('link[rel="alternate"][hreflang="en"]');
      removeTag('link[rel="alternate"][hreflang="x-default"]');
    };
  }, [title, description, path, jsonLd, noindex, lang]);

  return null;
}