import { GEO_AREAS, LOGO_ABSOLUTE } from '@/lib/site';

export const BUSINESS_ID = 'https://aurea-aesthetics.ch/#business';

export function medicalBusinessSchema(s) {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://aurea-aesthetics.ch';
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    '@id': BUSINESS_ID,
    name: s.practice_name,
    image: LOGO_ABSOLUTE,
    description:
      'Praxis für ästhetische Medizin in Zürich Enge. Individuelle Beratung, präzise Behandlung, natürliche Ergebnisse.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: s.street,
      postalCode: s.postal_code,
      addressLocality: s.city,
      addressRegion: 'ZH',
      addressCountry: 'CH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.3625,
      longitude: 8.5309,
    },
    ...(s.phone ? { telephone: s.phone } : {}),
    ...(s.email ? { email: s.email } : {}),
    priceRange: '$$$',
    medicalSpecialty: 'PlasticSurgery',
    areaServed: GEO_AREAS.map((a) => ({ '@type': 'Place', name: a })),
    ...(s.instagram_url || s.linkedin_url
      ? { sameAs: [s.instagram_url, s.linkedin_url].filter(Boolean) }
      : {}),
    url: origin,
  };
}

export function treatmentSchema(t) {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://aurea-aesthetics.ch';
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: t.title_de,
    description: t.meta_description_de || t.lead_de,
    bodyLocation: 'Gesicht',
    howPerformed: t.procedure_de,
    followup: t.aftercare_de,
    procedureType: 'https://schema.org/NoninvasiveProcedure',
    ...(t.image_url ? { image: t.image_url } : {}),
    provider: { '@id': BUSINESS_ID },
    areaServed: { '@type': 'City', name: 'Zürich' },
    url: `${origin}/behandlungen/${t.slug}`,
  };
}

export function categoryProcedureSchema({ name, description, path }) {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://aurea-aesthetics.ch';
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name,
    description,
    bodyLocation: 'Gesicht',
    procedureType: 'https://schema.org/NoninvasiveProcedure',
    provider: { '@id': BUSINESS_ID },
    areaServed: { '@type': 'City', name: 'Zürich' },
    url: `${origin}${path}`,
  };
}

export function physicianSchema(doc) {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://aurea-aesthetics.ch';
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: (doc.name || '').replace(/Dr\.\s*med\.\s*/gi, '').replace(/Dr\.\s*/gi, '').trim(),
    medicalSpecialty: doc.specialty,
    ...(doc.photo_url ? { image: doc.photo_url } : {}),
    worksFor: { '@id': BUSINESS_ID },
    url: `${origin}/aerztinnen`,
  };
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q || f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.a || f.answer },
    })),
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: typeof window !== 'undefined' ? window.location.origin + it.path : it.path,
    })),
  };
}