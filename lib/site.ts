export const siteConfig = {
  name: 'Manha Medical Center',
  shortName: 'Manha Medical',
  tagline: 'Compassionate Care. World-Class Medicine.',
  // Keep description under 160 characters for optimal meta-tag performance
  description:
    'Manha Medical Center in Sharjah, UAE — a premium multidisciplinary clinic offering family medicine, pediatrics, and 20+ specialties. Book your appointment today.',
  url: 'https://manhamedical.ae',
  // Standardized formats for Schema
  phone: '+97165550123', 
  phoneDisplay: '+971 6 555 0123',
  emergency: '+97165550199',
  whatsapp: '971501234567',
  whatsappDisplay: '+971 50 123 4567',
  email: 'care@manhamedical.ae',
  address: {
    street: 'Muwaileh Commercial, Sheikh Mohammed bin Zayed Road',
    area: 'Muwaileh Commercial',
    city: 'Sharjah',
    emirate: 'Sharjah',
    country: 'United Arab Emirates',
    countryCode: 'AE',
    postalCode: '00000',
  },
  geo: { 
    lat: 25.2973, 
    lng: 55.3714 
  },
  // Added priceRange for LocalBusiness Schema
  priceRange: '$$',
  days: 'Everyday',
  time: '9:00 AM – 10:30 PM',
  hours: [
    { day: 'Everyday', time: '9:00 AM – 10:30 PM' },
  ],
  social: {
    instagram: 'https://instagram.com/manhamedical',
    facebook: 'https://facebook.com/manhamedical',
    twitter: 'https://twitter.com/manhamedical',
    youtube: 'https://youtube.com/@manhamedical',
    linkedin: 'https://linkedin.com/company/manhamedical',
  },
  insurance: [
    'Daman', 'Nextcare', 'ADNIC', 'Oman Insurance', 'MetLife', 'AXA Gulf',
    'Thiqa', 'Mednet', 'Al Mashreq', 'GlobeMed', 'Sukoon', 'Bupa Global',
  ],
  rating: { 
    value: 4.9, 
    count: 1287 
  },
  stats: [
    { label: 'Specialist Doctors', value: 45, suffix: '+' },
    { label: 'Years of Trusted Care', value: 18, suffix: '+' },
    { label: 'Patients Served', value: 120, suffix: 'K+' },
    { label: 'Insurance Partners', value: 30, suffix: '+' },
  ],
  // SEO Meta Property for search result snippets
  metadataBase: new URL('https://manhamedical.ae'),
} as const;

export type SiteConfig = typeof siteConfig;