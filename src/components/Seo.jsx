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

export default function Seo({ title, description, path = '/', jsonLd, noindex = false }) {
  useEffect(() => {
    const full = title ? `${title}` : 'Aurea Aesthetics AG';
    document.title = full;
    document.documentElement.lang = 'de-CH';

    setTag('meta[name="description"]', { tag: 'meta', name: 'description', content: description || '' });
    setTag('meta[name="robots"]', { tag: 'meta', name: 'robots', content: noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large' });
    setTag('meta[property="og:title"]', { tag: 'meta', property: 'og:title', content: full });
    setTag('meta[property="og:description"]', { tag: 'meta', property: 'og:description', content: description || '' });
    setTag('meta[property="og:type"]', { tag: 'meta', property: 'og:type', content: 'website' });
    setTag('meta[property="og:locale"]', { tag: 'meta', property: 'og:locale', content: 'de_CH' });
    setTag('meta[name="twitter:card"]', { tag: 'meta', name: 'twitter:card', content: 'summary_large_image' });

    const origin = window.location.origin;
    setTag('link[rel="canonical"]', { tag: 'link', rel: 'canonical', href: origin + path });
    setTag('link[rel="alternate"][hreflang="de-CH"]', { tag: 'link', rel: 'alternate', hreflang: 'de-CH', href: origin + path });
    setTag('link[rel="alternate"][hreflang="x-default"]', { tag: 'link', rel: 'alternate', hreflang: 'x-default', href: origin + path });

    let script = document.getElementById('aurea-jsonld');
    if (script) script.remove();
    if (jsonLd) {
      script = document.createElement('script');
      script.id = 'aurea-jsonld';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, path, jsonLd, noindex]);

  return null;
}