import { GEO_AREAS } from '@/lib/site';

export function medicalBusinessSchema(s) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: s.practice_name,
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
    ...(s.phone ? { telephone: s.phone } : {}),
    ...(s.email ? { email: s.email } : {}),
    medicalSpecialty: 'PlasticSurgery',
    areaServed: GEO_AREAS.map((a) => ({ '@type': 'Place', name: a })),
    url: typeof window !== 'undefined' ? window.location.origin : undefined,
  };
}

export function treatmentSchema(t) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: t.title_de,
    description: t.meta_description_de || t.lead_de,
    bodyLocation: 'Gesicht',
    howPerformed: t.procedure_de,
    followup: t.aftercare_de,
    procedureType: 'https://schema.org/NoninvasiveProcedure',
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