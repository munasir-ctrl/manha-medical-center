export type HealthPackage = {
  slug: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  features: string[];
  popular: boolean;
};

export const healthPackages: HealthPackage[] = [
  // --- Manha Wellness Packages ---
  {
    slug: 'manha-wellness-package',
    name: 'Manha Wellness Package',
    description: 'Complete multi-profile lab check including CBC, diabetes, liver, lipid, and kidney functions.',
    price: 79,
    category: 'Wellness Lab',
    features: [
      'Complete Blood Count (CBC): 21 Parameters',
      'Diabetes Profile: Fasting Blood Sugar, HbA1c',
      'Liver Profile: Bilirubin, SGOT, SGPT, Albumin, Globulin, ALP, GGT, Total Protein',
      'Lipid Profile: Total Cholesterol, HDL, Triglycerides, LDL, VLDL, Ratios',
      'Kidney Function Tests: BUN, Creatinine, Urea, Uric Acid, Calcium, eGFR',
    ],
    popular: false,
  },
  {
    slug: 'wellness-tsh',
    name: 'Manha Wellness + TSH',
    description: 'Core wellness blood profile plus thyroid stimulating hormone screening.',
    price: 89,
    category: 'Wellness Lab',
    features: [
      'All Manha Wellness Package features',
      'TSH thyroid screening',
    ],
    popular: false,
  },
  {
    slug: 'wellness-thyroid-profile',
    name: 'Manha Wellness + Thyroid Profile',
    description: 'Essential wellness lab panel combined with a full thyroid evaluation.',
    price: 99,
    category: 'Wellness Lab',
    features: [
      'All Manha Wellness Package features',
      'Complete Thyroid Profile',
    ],
    popular: false,
  },
  {
    slug: 'wellness-thyroid-vitamin-d',
    name: 'Manha Wellness + Thyroid + Vitamin D',
    description: 'Advanced lab work including wellness markers, thyroid profile, and Vitamin D levels.',
    price: 120,
    category: 'Wellness Lab',
    features: [
      'All Manha Wellness Package features',
      'Complete Thyroid Profile',
      'Vitamin D screening',
    ],
    popular: false,
  },
  {
    slug: 'wellness-thyroid-vitd-b12',
    name: 'Manha Wellness + Thyroid + Vitamin D + B12',
    description: 'Ultimate comprehensive lab package covering multi-system diagnostics and key vitamins.',
    price: 179,
    category: 'Wellness Lab',
    features: [
      'All Manha Wellness Package features',
      'Complete Thyroid Profile',
      'Vitamin D screening',
      'Vitamin B12 screening',
    ],
    popular: true,
  },

  // --- Hijama Therapy Packages ---
  {
    slug: 'hijama-basic',
    name: 'Hijama Therapy: Basic',
    description: 'Ancient therapy for modern healing, detoxification, and circulation support.',
    price: 99,
    category: 'Therapy',
    features: [
      '8 – 10 Cups session',
      'Detoxifies the body and removes toxins',
      'Improves blood flow and circulation',
      'Sterile and hygienic procedure',
    ],
    popular: false,
  },
  {
    slug: 'hijama-silver',
    name: 'Hijama Therapy: Silver',
    description: 'Intensive cupping session focusing on muscle pain relief and inflammation.',
    price: 149,
    category: 'Therapy',
    features: [
      'Unlimited cups per session',
      'Relieves muscle pain, stiffness & inflammation',
      'Sterile and hygienic procedure',
    ],
    popular: false,
  },
  {
    slug: 'hijama-gold',
    name: 'Hijama Therapy: Gold Package',
    description: 'Multi-session plan supporting hormonal balance, PCOD, and recurring tension relief.',
    price: 499,
    category: 'Therapy',
    features: [
      'Unlimited cups per session',
      '3 Paid Sessions + 1 Free Session',
      'Helps in PCOD, infertility & hormonal balance',
    ],
    popular: false,
  },
  {
    slug: 'hijama-platinum',
    name: 'Hijama Therapy: Platinum Package',
    description: 'Comprehensive long-term therapy package designed to boost immunity and energy levels.',
    price: 999,
    category: 'Therapy',
    features: [
      'Unlimited cups per session',
      '6 Paid Sessions + 3 Free Sessions',
      'Boosts immunity and energy levels',
    ],
    popular: false,
  },

  // --- Women's Health / Summer Promotion ---
  {
    slug: 'gynaecology-consultation-ultrasound',
    name: 'Gynaecology Consultation & Ultrasound',
    description: 'Summer promotion offering expert care, early risk detection, and ultrasound screening.',
    price: 120,
    category: 'Women’s Health',
    features: [
      'Gynaecology Consultation with specialist',
      'Ultrasound screening',
      'Expert care and early risk detection',
      'Holistic support and stress-free planning',
    ],
    popular: false,
  },

  // --- Orthodontic Dental Services ---
  {
    slug: 'braces-tightening',
    name: 'Braces Tightening',
    description: 'Expert orthodontic care for a healthier, confident smile.',
    price: 200,
    category: 'Dental',
    features: [
      'Free consultation with orthodontist',
      'Professional adjustment and tightening',
      'Led by Specialist Orthodontist Dr. Thasneem',
    ],
    popular: false,
  },
  {
    slug: 'metal-braces',
    name: 'Metal Braces',
    description: 'Standard effective orthodontic treatment for alignment.',
    price: 499,
    category: 'Dental',
    features: [
      'Free consultation with orthodontist',
      'Durable metal brackets installation',
      'Affordable prices and lasting results',
    ],
    popular: false,
  },
  {
    slug: 'self-ligating-braces',
    name: 'Self Ligating Braces',
    description: 'Advanced technology braces for smoother and faster adjustments.',
    price: 999,
    category: 'Dental',
    features: [
      'Free consultation with orthodontist',
      'Advanced low-friction mechanism',
      'Modern technology care',
    ],
    popular: false,
  },
  {
    slug: 'ceramic-braces',
    name: 'Ceramic Braces',
    description: 'Aesthetic tooth-colored braces for a discreet look.',
    price: 1299,
    category: 'Dental',
    features: [
      'Free consultation with orthodontist',
      'Tooth-colored brackets for aesthetic appeal',
      'Personalized care',
    ],
    popular: false,
  },
  {
    slug: 'clear-retainers',
    name: 'Clear Retainers',
    description: 'Post-treatment retainers to maintain your new smile.',
    price: 399,
    category: 'Dental',
    features: [
      'Custom fit clear retainers',
      'Maintains teeth alignment results',
      'Transparent and comfortable',
    ],
    popular: false,
  },
  {
    slug: 'invisaligners',
    name: 'Invisaligners',
    description: 'Virtually invisible aligners for comfortable teeth straightening.',
    price: 6499,
    category: 'Dental',
    features: [
      'Free consultation with orthodontist',
      'Removable transparent aligner trays',
      'Advanced aesthetic alignment care',
    ],
    popular: false,
  },

  // --- Kids Dental Care & General Dental Services ---
  {
    slug: 'teeth-cleaning',
    name: 'Teeth Cleaning',
    description: 'Professional dental cleaning for brighter, healthier teeth.',
    price: 99,
    category: 'Dental',
    features: [
      'Free consultation available',
      'Plaque and tartar removal',
      'Improves confidence and smile',
    ],
    popular: false,
  },
  {
    slug: 'filling',
    name: 'Dental Filling',
    description: 'Restorative filling for decayed or damaged teeth.',
    price: 99,
    category: 'Dental',
    features: [
      'Tooth-colored composite restoration',
      'Cavity prevention and treatment',
      'Gentle procedure',
    ],
    popular: false,
  },
  {
    slug: 'fluoride-treatment',
    name: 'Fluoride Treatment',
    description: 'Strengthening mineral treatment to prevent tooth decay.',
    price: 99,
    category: 'Dental',
    features: [
      'Cavity prevention for kids and adults',
      'Protective enamel strengthening',
      'Safe and effective application',
    ],
    popular: false,
  },
  {
    slug: 'root-canal-treatment',
    name: 'Root Canal Treatment (RCT)',
    description: 'Specialized endodontic therapy to save infected teeth.',
    price: 499,
    category: 'Dental',
    features: [
      'Removal of infected pulp tissue',
      'Pain relief and tooth preservation',
      'Advanced dental care technology',
    ],
    popular: false,
  },
  {
    slug: 'teeth-extraction',
    name: 'Teeth Extraction',
    description: 'Safe and sterile removal of compromised or damaged teeth.',
    price: 150,
    category: 'Dental',
    features: [
      'Gentle extraction procedure',
      'Sterile and hygienic environment',
      'Post-extraction care guidance',
    ],
    popular: false,
  },
];