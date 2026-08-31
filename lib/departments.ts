export interface Treatment {
  name: string;
  description: string;
  benefits?: string[];
}

export interface Procedure {
  name: string;
  description: string;
  duration?: string;
}

export interface Technology {
  name: string;
  description: string;
  highlight?: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface Department {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  tagline: string;
  description: string;
  longDescription: string[];
  symptoms: string[];
  treatments: Treatment[];
  procedures: Procedure[];
  technology: Technology[];
  doctorSlugs: string[];
  faqs: FAQ[];
  gallery: string[];
  insuranceAccepted: string[];
  image: string;
  color: string;
}

export const departments: Department[] = [
  {
    slug: 'general-dentistry',
    name: 'General Dentistry',
    shortName: 'Gen. Dentistry',
    icon: 'Stethoscope',
    tagline: 'Painless, precision family dental care for brilliant smiles',
    description: 'Transforming routine check-ups into elite preventative and restorative care experiences using high-definition magnification and ultra-comfortable techniques.',
    longDescription: [
      'Our General Dentistry department serves as the cornerstone of lifelong oral vitality, combining preventative defense with meticulous restorative craftsmanship.',
      'We utilize advanced ergonomic seating, noise-mitigation protocols, and immediate visual diagnostics to ensure every family member receives stress-free, luxurious care.'
    ],
    symptoms: ['Spontaneous toothache', 'Hidden interproximal cavities', 'Thermal gum sensitivity', 'Enamel attrition / wear', 'Localized bite strain'],
    treatments: [
      { 
        name: 'Nano-Hybrid Composite Restorations', 
        description: 'Micro-layered, tooth-colored aesthetic fillings engineered to mimic natural light refraction and deliver maximum longevity.',
        benefits: ['Zero mercury', 'Seamless color match', 'Preserves natural tooth structure']
      },
      { 
        name: 'Proactive Fissure Sealants', 
        description: 'Ultra-thin protective shields applied to deep molar grooves to block bacteria and prevent early decay.',
        benefits: ['100% non-invasive', 'Ideal for children and teens', 'Long-lasting defense']
      }
    ],
    procedures: [
      { name: 'Comprehensive Bio-Structural Exam', description: 'Full-mouth occlusal screening, bite analysis, and periodontal pocket charting.', duration: '45 mins' },
      { name: 'Ultrasonic Pro-Hygiene Scaling', description: 'Advanced cavitation scaling combined with stain-lifting air-polishing micro-jets.', duration: '30-40 mins' }
    ],
    technology: [
      { name: 'High-Definition Intraoral Optical Cameras', description: 'Real-time 50x magnification displayed on chairside screens for absolute transparency during patient consultations.', highlight: 'Crystal-clear live diagnostics' }
    ],
    doctorSlugs: [],
    faqs: [
      { q: 'How often should I schedule an elite dental check-up?', a: 'We advise visiting every 6 months to maintain optimal periodontal health and intercept micro-cavities early.' },
      { q: 'Are your fillings completely metal-free?', a: 'Yes! We exclusively utilize premium bio-compatible nano-composite materials that look and feel entirely natural.' }
    ],
    gallery: [],
    insuranceAccepted: ['All Major Insurances Accepted', 'Daman (Enhanced Networks)', 'Nextcare', 'Neuron', 'NAS'],
    image: '/general-dentistryy.jpg',
    color: 'primary',
  },
  {
    slug: 'dental-care',
    name: 'Dental Care',
    shortName: 'Dental Care',
    icon: 'Smile',
    tagline: 'Mastering the art of advanced restorative & cosmetic dentistry',
    description: 'Elevate your confidence through bespoke dental transformations, specialized gum health management, and high-end aesthetic enhancements.',
    longDescription: [
      'Our Dental Care division merges artistic smile design with deep clinical rigor to restore structural integrity, symmetry, and uncompromised oral wellness.',
      'Whether resolving complex periodontal challenges or crafting dazzling cosmetic makeovers, we utilize world-class biomaterials tailored to your unique facial aesthetics.'
    ],
    symptoms: ['Chronic bleeding or swollen gums', 'Persistent halitosis (bad breath)', 'Chipped, cracked, or worn edges', 'Severe dental staining or fluorosis'],
    treatments: [
      { 
        name: 'Advanced Periodontal Regenerative Therapy', 
        description: 'Specialized micro-surgical and non-surgical treatments designed to halt gum recession and restore soft tissue attachment.',
        benefits: ['Eliminates gum pockets', 'Restores gum line symmetry', 'Stops bone loss progression']
      },
      { 
        name: 'Bespoke Porcelain Veneers & Styling', 
        description: 'Ultra-thin, custom-crafted ceramic shells bonded permanently to front teeth to mask imperfections.',
        benefits: ['Stain resistant', 'Custom shade graduation', 'Instant smile transformation']
      }
    ],
    procedures: [
      { name: 'Subgingival Root Planing & Debridement', description: 'Meticulous ultrasonic cleaning beneath the gumline to eradicate deep bacterial colonies.', duration: '60 mins' },
      { name: 'Clinical Power Laser Whitening', description: 'Advanced activation gel session yielding up to 4-6 shades of brightness in a single visit.', duration: '60 mins' }
    ],
    technology: [
      { name: 'Precision LED Photopolymerization Units', description: 'High-intensity cool-cure lights ensuring instant, maximum molecular bond strength for restorations.', highlight: 'Zero thermal tooth sensitivity' }
    ],
    doctorSlugs: [],
    faqs: [
      { q: 'Is subgingival deep cleaning uncomfortable?', a: 'We apply specialized topical anesthetics and offer local numbing options to ensure a completely relaxing, pain-free experience.' },
      { q: 'How long do custom porcelain veneers last?', a: 'With proper daily hygiene and routine professional maintenance, veneers easily last between 10 to 15 years or more.' }
    ],
    gallery: [],
    insuranceAccepted: ['All Major Insurances Accepted', 'Daman', 'Nextcare', 'Neuron', 'NAS'],
    image: '/dental-care.jpg',
    color: 'accent',
  },
  {
    slug: 'orthodontics',
    name: 'Orthodontics',
    shortName: 'Orthodontics',
    icon: 'Activity',
    tagline: 'Precision alignment and biomechanical harmony for radiant smiles',
    description: 'Unlock your ultimate smile profile with cutting-edge clear aligners and aesthetic orthodontic appliances engineered for speed and comfort.',
    longDescription: [
      'Orthodontics at our center transcends simple cosmetic straightening; we engineer proper functional occlusion, long-term jaw joint health, and symmetrical facial balance.',
      'Using streamlined digital treatment planning, we shorten treatment timelines while providing discrete, high-performance options for both adults and youths.'
    ],
    symptoms: ['Crowded, overlapped, or twisted teeth', 'Overbite, underbite, or crossbite discrepancies', 'Diastema (gaps between teeth)', 'Temporomandibular joint (TMJ) clicking or fatigue'],
    treatments: [
      { 
        name: 'Esthetic Monocrystalline Ceramic Braces', 
        description: 'Clear, stain-resistant brackets that blend flawlessly with natural tooth color for discreet mechanical alignment.',
        benefits: ['High aesthetic discretion', 'Does not discolor over time', 'Robust holding strength']
      },
      { 
        name: 'Custom Clear Aligner Therapy', 
        description: 'Removable, medical-grade polymer trays custom-sequenced to gently guide teeth into ideal alignment.',
        benefits: ['100% invisible in social settings', 'Removable for eating and brushing', 'Zero metal friction or irritation']
      }
    ],
    procedures: [
      { name: 'Comprehensive Orthodontic Cephalometric Setup', description: 'Detailed digital facial proportion mapping, bite force calculation, and growth modeling.', duration: '45 mins' },
      { name: 'Precision Archwire Progression Check', description: 'Routine mechanical activation adjustments to track tracking accuracy and milestone goals.', duration: '20 mins' }
    ],
    technology: [
      { name: '3D High-Speed Intraoral Digital Scanners', description: 'Eliminates messy traditional putty impressions by capturing 6,000 frames per second in stunning full color.', highlight: 'Instant 3D treatment preview simulation' }
    ],
    doctorSlugs: [],
    faqs: [
      { q: 'Am I too mature for orthodontic treatment?', a: 'Not at all! Over 30% of our orthodontic patients are adults achieving life-changing functional and aesthetic alignments.' },
      { q: 'Can I eat normally with clear aligners?', a: 'Yes, because aligners are completely removable during meals, you enjoy zero dietary restrictions throughout your journey.' }
    ],
    gallery: [],
    insuranceAccepted: ['All Major Insurances Accepted', 'Daman', 'Nextcare', 'Neuron', 'NAS'],
    image: '/braces.jpg',
    color: 'primary',
  },
  {
    slug: 'gp',
    name: 'General Practitioner (GP)',
    shortName: 'GP',
    icon: 'User',
    tagline: 'Comprehensive, holistic primary medicine for the entire family',
    description: 'Your frontline sanctuary for acute illness management, preventive metabolic optimization, and continuous chronic health stewardship.',
    longDescription: [
      'Our General Practice department delivers warm, empathetic, and evidence-based primary healthcare centered around your family’s dynamic lifestyle needs.',
      'We focus on early risk stratification, rapid clinical diagnosis, and integrated wellness counseling to keep you thriving at your absolute peak.'
    ],
    symptoms: ['Acute high fever and chills', 'Persistent upper respiratory congestion & cough', 'Unexplained chronic fatigue and malaise', 'Unstable blood pressure or glucose markers', 'Sudden muscular or joint inflammatory flare-ups'],
    treatments: [
      { 
        name: 'Acute Infection & Viral Protocol Management', 
        description: 'Targeted pharmacological and supportive care regimens designed to accelerate recovery from seasonal illnesses.',
        benefits: ['Rapid symptom relief', 'Prevents secondary complications', 'Personalized recovery plans']
      },
      { 
        name: 'Chronic Metabolic Optimization Programs', 
        description: 'Structured lifestyle and medication tracking frameworks for long-term control of hypertension and type-2 diabetes.',
        benefits: ['Stable long-term vitals', 'Regular biomarker monitoring', 'Dedicated physician partnership']
      }
    ],
    procedures: [
      { name: 'Complete Executive Health Profile Assessment', description: 'Multi-system clinical examination, cardiovascular screening, and metabolic risk stratification.', duration: '45 mins' },
      { name: 'Preventive Immunization & Travel Consultation', description: 'Essential seasonal and regional vaccination administration with digital registry updating.', duration: '20 mins' }
    ],
    technology: [
      { name: 'Integrated Cloud E-Prescribing Platform', description: 'Instantaneous electronic pharmacy prescription transmission eliminating paper loss and waiting errors.', highlight: 'Paperless, lightning-fast pharmacy dispatch' }
    ],
    doctorSlugs: [],
    faqs: [
      { q: 'Do I need an advance booking to see our GP?', a: 'While scheduled visits ensure zero waiting time, our clinic warmly accommodates urgent walk-in patients.' },
      { q: 'Can my GP manage my recurring prescription refills?', a: 'Absolutely. Our physicians maintain secure chronic medication registries for seamless monthly refills.' }
    ],
    gallery: [],
    insuranceAccepted: ['All Major Insurances Accepted', 'Daman', 'Nextcare', 'Neuron', 'NAS'],
    image: '/pediatrician.jpg',
    color: 'accent',
  },
  {
    slug: 'laboratory-services',
    name: 'Laboratory Services',
    shortName: 'Lab Services',
    icon: 'Flask',
    tagline: 'Precision pathology and rapid diagnostic testing with zero delay',
    description: 'State-of-the-art on-site diagnostic laboratory delivering lightning-fast, uncompromisingly accurate biochemical and pathological insights.',
    longDescription: [
      'Accurate diagnostics form the essential foundation of elite medical care. Our advanced laboratory delivers rapid turnaround times for comprehensive clinical panels.',
      'Operated by certified pathology specialists adhering strictly to international biosafety codes and multi-tier quality assurance benchmarks.'
    ],
    symptoms: ['Unexplained systemic weakness', 'Persistent inflammatory marker elevation', 'Metabolic sluggishness or weight shifts', 'Pre-operative clearance prerequisites'],
    treatments: [
      { 
        name: 'Targeted Biomarker & Biochemical Panels', 
        description: 'Specialized blood chemistry profiling designed to evaluate organ functionality and nutritional balance.',
        benefits: ['Early pathology detection', 'Precise therapeutic monitoring', 'Customized nutritional insights']
      }
    ],
    procedures: [
      { name: 'Painless Micro-Gauge Venipuncture', description: 'Gentle, expert blood extraction performed by licensed phlebotomists using ultra-fine needles.', duration: '15 mins' },
      { name: 'Comprehensive Urinalysis & Screenings', description: 'Multi-parameter reagent strip and microscopic analysis for renal and metabolic health.', duration: '15 mins' }
    ],
    technology: [
      { name: 'Fully Automated Clinical Biochemistry Analyzers', description: 'High-speed robotic diagnostic platforms ensuring zero human error and high-precision data output.', highlight: 'Same-day digital result generation' }
    ],
    doctorSlugs: [],
    faqs: [
      { q: 'Do I need to fast before my blood tests?', a: 'Standard lipid panels and fasting blood glucose profiles require 8-12 hours of fasting water-only intake prior to extraction.' },
      { q: 'How and when will I access my lab results?', a: 'Most routine panel results are processed on the same day and securely dispatched directly to your patient portal.' }
    ],
    gallery: [],
    insuranceAccepted: ['All Major Insurances Accepted', 'Daman', 'Nextcare', 'Neuron', 'NAS'],
    image: '/laboratory.jpg',
    color: 'primary',
  },
  {
    slug: 'gynaecology-obstetrics',
    name: 'Gynaecology and Obstetrics',
    shortName: 'Gynae & Obs',
    icon: 'Heart',
    tagline: 'Empathetic, world-class healthcare for every chapter of womanhood',
    description: 'Comprehensive reproductive wellness, advanced family planning, and devoted maternity care delivered by elite female specialists in total privacy.',
    longDescription: [
      'We provide sensitive, holistic medical solutions for women through adolescence, reproductive maturity, pregnancy, and menopausal transitions.',
      'Our maternity wing guarantees attentive antenatal surveillance, prioritizing absolute maternal comfort, fetal safety, and empowered birth planning.'
    ],
    symptoms: ['Chronic pelvic pressure or pain', 'Menstrual cycle irregularities or dysmenorrhea', 'Prenatal development milestone inquiries', 'Perimenopausal hormonal fluctuations'],
    treatments: [
      { 
        name: 'Advanced Hormonal & Endocrine Management', 
        description: 'Comprehensive clinical protocols for PCOS, endometriosis, and cycle harmonization.',
        benefits: ['Restores hormonal balance', 'Relieves chronic discomfort', 'Improves metabolic wellness']
      },
      { 
        name: 'Holistic Antenatal & Pregnancy Care', 
        description: 'Structured trimester-by-trimester monitoring safeguarding both mother and developing child.',
        benefits: ['Continuous fetal wellbeing tracking', 'Expert nutritional guidance', 'Customized birth preparation']
      }
    ],
    procedures: [
      { name: 'High-Resolution Fetal Morphology Scanning', description: 'Detailed structural ultrasound assessment tracking fetal growth and anatomical markers.', duration: '30-45 mins' },
      { name: 'Routine Cervical Cancer Screening', description: 'Gentle Pap cytology and high-risk HPV DNA molecular testing.', duration: '20 mins' }
    ],
    technology: [
      { name: 'High-Definition 4D Real-Time Ultrasound Suites', description: 'Cutting-edge volumetric imaging offering crystal-clear visualization of fetal movements and facial features.', highlight: 'Unmatched diagnostic clarity & keepsake bonding' }
    ],
    doctorSlugs: [],
    faqs: [
      { q: 'Do you offer bundled pregnancy and delivery care packages?', a: 'Yes, we provide structured antenatal care packages covering routine consultations, scans, and essential labs.' },
      { q: 'Are all gynecology consultations handled exclusively by female physicians?', a: 'Yes, our entire Gynaecology & Obstetrics department is led by highly experienced, compassionate female specialists.' }
    ],
    gallery: [],
    insuranceAccepted: ['All Major Insurances Accepted', 'Daman', 'Nextcare', 'Neuron', 'NAS'],
    image: '/gynecologist.jpg',
    color: 'accent',
  },
  {
    slug: 'hijama',
    name: 'Hijama',
    shortName: 'Hijama',
    icon: 'Droplet',
    tagline: 'Traditional therapeutic wet cupping for modern systemic vitality',
    description: 'Professional, medical-grade wet and dry cupping therapy performed under strict sterile conditions to stimulate circulation and natural detoxification.',
    longDescription: [
      'Hijama cupping therapy harmonizes ancient prophetic healing traditions with rigorous modern clinical hygiene and biosafety standards.',
      'Executed by certified practitioners, the therapy enhances microcirculation, relieves deep myofascial tension, and accelerates natural physical recovery.'
    ],
    symptoms: ['Chronic upper back and neck tension', 'Persistent physical lethargy and exhaustion', 'Deep muscular stiffness', 'Sluggish peripheral circulation'],
    treatments: [
      { 
        name: 'Therapeutic Wet Cupping (Al-Hijama)', 
        description: 'Targeted pneumatic suction and superficial micro-extraction designed to clear stagnant interstitial fluids.',
        benefits: ['Relieves chronic muscle aches', 'Boosts local micro-blood flow', 'Supports overall bodily rejuvenation']
      },
      { 
        name: 'Myofascial Dry Cupping Release', 
        description: 'Non-invasive pneumatic suction therapy used to lift connective tissue and relax rigid muscle bundles.',
        benefits: ['Zero skin scratching required', 'Immediate tension release', 'Enhances athletic recovery speed']
      }
    ],
    procedures: [
      { name: 'Sterile Single-Use Clinical Application', description: 'Execution using 100% disposable, medical-grade sterile cups and surgical blades.', duration: '30-45 mins' },
      { name: 'Post-Therapy Hydration & Recovery Coaching', description: 'Post-treatment vital signs monitoring and personalized nutritional recovery guidelines.', duration: '15 mins' }
    ],
    technology: [
      { name: 'Hospital-Grade Autoclave Sterilization Systems', description: 'Zero-compromise infection control hardware ensuring absolute sterility across all accessory components.', highlight: '100% single-use disposable safety standard' }
    ],
    doctorSlugs: [],
    faqs: [
      { q: 'Is the Hijama wet cupping procedure painful?', a: 'The skin surface micro-scratches are extremely shallow, causing minimal sensation often described as a light feather scratch.' },
      { q: 'Are all equipment pieces strictly single-use?', a: 'Yes, absolutely. Every cup, blade, and handling tool is 100% disposable and discarded immediately after a single session.' }
    ],
    gallery: [],
    insuranceAccepted: ['All Major Insurances Accepted', 'Daman', 'Nextcare', 'Neuron', 'NAS'],
    image: '/hijama.jpg',
    color: 'primary',
  }
];

export function getDepartment(slug: string) {
  return departments.find((d) => d.slug === slug);
}