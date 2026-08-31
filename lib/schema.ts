import { siteConfig } from './site';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalOrganization', 'MedicalClinic', 'LocalBusiness'],
    '@id': `${siteConfig.url}/#organization`,
    name: 'Manha Medical Center',
    alternateName: 'Wellcare Medical Center', // Added for dual-brand recognition
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    image: `${siteConfig.url}/og-image.jpg`,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: '$$$',
    medicalSpecialty: [
      'FamilyMedicine',
      'Pediatric',
      'Dentistry',
      'Gynecology',
      'Orthodontics',
      'InternalMedicine',
      'Hijama', // Added for local search visibility
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.emirate,
      postalCode: siteConfig.address.postalCode,
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    // Optimized for local search visibility
    openingHoursSpecification: siteConfig.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.day,
      opens: '08:00',
      closes: '23:00',
    })),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.phone,
        contactType: 'appointments',
        areaServed: 'AE',
        availableLanguage: ['English', 'Arabic'],
      },
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.emergency,
        contactType: 'emergency',
        availableLanguage: ['English', 'Arabic'],
      },
    ],
    sameAs: Object.values(siteConfig.social),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count,
      bestRating: '5',
    },
  };
}

export function physicianSchema(doctor: {
  name: string;
  slug: string;
  title: string;
  specialty: string;
  bio: string;
  languages: string[];
  image: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: doctor.name,
    jobTitle: doctor.title,
    medicalSpecialty: doctor.specialty,
    description: doctor.bio,
    image: doctor.image,
    url: `${siteConfig.url}/doctors/${doctor.slug}`,
    knowsLanguage: doctor.languages,
    worksFor: { '@id': `${siteConfig.url}/#organization` },
    hospital: { '@id': `${siteConfig.url}/#organization` },
  };
}

export function medicalSpecialtySchema(dept: {
  name: string;
  slug: string;
  description: string;
  treatments: { name: string; description: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalSpecialty',
    name: dept.name,
    description: dept.description,
    url: `${siteConfig.url}/departments/${dept.slug}`,
    medicine: dept.treatments.map((t) => t.name),
    provider: { '@id': `${siteConfig.url}/#organization` },
  };
}

export function articleSchema(article: {
  title: string;
  slug: string;
  description: string;
  image: string;
  author: string;
  reviewer: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: article.title,
    description: article.description,
    image: article.image,
    url: `${siteConfig.url}/blog/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: { '@type': 'Person', name: article.author },
    reviewer: { '@type': 'Person', name: article.reviewer },
    publisher: { '@id': `${siteConfig.url}/#organization` },
    lastReviewed: article.dateModified,
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

export function speakableSchema(cssSelector: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector,
    },
    url: siteConfig.url,
  };
}

export function searchActionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: siteConfig.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}