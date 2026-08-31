export type Doctor = {
  slug: string;
  name: string;
  title: string;
  specialty: string;
  departmentSlug: string;
  bio: string;
  experience: number;
  education: { degree: string; institution: string; year: string }[];
  languages: string[];
  awards: string[];
  image: string;
  availability: string;
  conditions: string[];
};

export const doctors: Doctor[] = [
  {
    slug: 'dr-jibran',
    name: 'Dr. Jibran',
    title: 'General Dentist',
    specialty: 'General Dentistry',
    departmentSlug: 'dentistry',
    bio: 'Dr. Jibran is a general dentist with 12+ years of professional experience offering comprehensive dental care, root canal treatments, and cosmetic dental procedures.',
    experience: 12,
    education: [
      { degree: 'BDS', institution: 'Rajiv Gandhi University of Health Sciences, Karnataka, India', year: '2014' }
    ],
    languages: ['English', 'Urdu', 'Hindi', 'Little Pashto', 'Arabic'],
    awards: [],
    image: '/Dr. Jibran(GP Dentist).png',
    availability: 'Sat – Thu, 9:00 AM – 9:00 PM',
    conditions: ['Root Canal Treatment', 'Dental Extractions', 'Crown & Bridge', 'Veneers', 'Teeth Bleaching']
  },
  {
    slug: 'dr-thasneem',
    name: 'Dr. Thasneem',
    title: 'Specialist Orthodontist',
    specialty: 'Orthodontics',
    departmentSlug: 'dentistry',
    bio: 'Dr. Thasneem is a specialist orthodontist with 8+ years of experience providing advanced braces, clear aligners, and customized orthodontic care for children and adults.',
    experience: 8,
    education: [
      { degree: 'Specialization in Orthodontics', institution: 'Recognized Medical University', year: '2018' }
    ],
    languages: ['English', 'Hindi', 'Tamil'],
    awards: [],
    image: '/Dr. Thasneem(Orthodontist).png',
    availability: 'Sat – Thu, 9:00 AM – 9:00 PM',
    conditions: ['Labial Orthodontics', 'Self-Ligating Braces', 'Clear Aligner Therapy', 'Smile and Bite Correction']
  },
  {
    slug: 'dr-asna-haroon',
    name: 'Dr. Asna Haroon',
    title: 'General Dentist',
    specialty: 'General Dentistry',
    departmentSlug: 'dentistry',
    bio: 'Dr. Asna Haroon is a general dentist with 8 years of clinical practice specializing in rotary endodontics, restorative procedures, and pediatric dental care.',
    experience: 8,
    education: [
      { degree: 'BDS', institution: 'PMS Dental College, Trivandrum, Kerala', year: '2018' }
    ],
    languages: ['English', 'Arabic', 'Hindi', 'Tamil', 'Malayalam'],
    awards: [],
    image: '/Dr.asna-haroon-gp-dentist.png',
    availability: 'Sat – Thu, 9:00 AM – 9:00 PM',
    conditions: ['Root Canal Treatments', 'Cosmetic Dentistry', 'Prosthetic Rehabilitation', 'Pediatric Dental Care']
  },
  {
    slug: 'dr-amna-habib-hassan',
    name: 'Dr. Amna Habib Hassan',
    title: 'General Practitioner',
    specialty: 'General Practice',
    departmentSlug: 'general-medicine',
    bio: 'Dr. Amna Habib Hassan is an Australian Medical Council (AMC) qualified general practitioner with 5+ years of experience managing chronic conditions, preventive care, and family health.',
    experience: 5,
    education: [
      { degree: 'MBBS', institution: 'Recognized University', year: '2021' }
    ],
    languages: ['English', 'Arabic', 'Hindi', 'Malayalam', 'Urdu'],
    awards: [],
    image: '/Dr. Amna Habib Hassan-GP Doctor.png',
    availability: 'Sat – Thu, 9:00 AM – 9:00 PM',
    conditions: ['Diabetes Management', 'Hypertension', 'Preventive Care', 'Common Cold & Flu', 'Thyroid Disorders']
  },
  {
    slug: 'dr-sharmeen-ishaque',
    name: 'Dr. Sharmeen Ishaque',
    title: 'GP Dentist',
    specialty: 'General Dentistry',
    departmentSlug: 'dentistry',
    bio: 'Dr. Sharmeen Ishaque is a GP dentist with 8+ years of experience offering cosmetic dentistry, extractions, root canals, and Hollywood smile treatments.',
    experience: 8,
    education: [
      { degree: 'BDS', institution: 'Recognized Dental College', year: '2018' }
    ],
    languages: ['English', 'Hindi', 'Malayalam', 'Tamil', 'Arabic (Basic)'],
    awards: [],
    image: '/Dr. Sharmeen Ishaque(GP Dentist).png',
    availability: 'Sat – Thu, 9:00 AM – 9:00 PM',
    conditions: ['Cosmetic Dentistry', 'Surgical Extractions', 'Root Canal Treatments', 'Hollywood Smile', 'Veneers']
  },
  {
    slug: 'dr-aiswarya-shajeev',
    name: 'Dr. Aiswarya Shajeev',
    title: 'General Dentist',
    specialty: 'General Dentistry',
    departmentSlug: 'dentistry',
    bio: 'Dr. Aiswarya Shajeev is a general dentist with 5+ years of experience providing routine check-ups, fillings, crowns, bridges, and teeth whitening.',
    experience: 5,
    education: [
      { degree: 'BDS', institution: 'Recognized Dental College', year: '2021' }
    ],
    languages: ['Malayalam', 'English', 'Hindi', 'Kannada', 'Tamil'],
    awards: [],
    image: '/Dr. Aiswarya Shajeev(GP Dentist).png',
    availability: 'Sat – Thu, 9:00 AM – 9:00 PM',
    conditions: ['Routine Check-ups', 'Fillings', 'Root Canal Treatments', 'Dental Crowns', 'Teeth Whitening']
  },
  {
    slug: 'dr-shamsunnisa-hasham',
    name: 'Dr. Shamsunnisa Hasham',
    title: 'MOH Licensed Hijama Practitioner',
    specialty: 'Traditional & Alternative Medicine',
    departmentSlug: 'general-medicine',
    bio: 'Dr. Shamsunnisa Hasham is an MOH licensed Hijama practitioner with 10+ years of experience and a background in emergency medicine and Unani medicine.',
    experience: 10,
    education: [
      { degree: 'Bachelor of Unani Medicines', institution: 'Recognized University', year: '2016' }
    ],
    languages: ['English', 'Hindi', 'Urdu', 'Marathi'],
    awards: [],
    image: '/Dr. Shamsunnisa Hasham(Hijama).png',
    availability: 'Sat – Thu, 9:00 AM – 9:00 PM',
    conditions: ['Neurological Disorders', 'Sports Related Injuries', 'Digestive Disorders', 'Restless Leg Syndrome']
  },
  {
    slug: 'dr-sheha-beegum',
    name: 'Dr. Sheha Beegum',
    title: 'GP Dentist',
    specialty: 'General Dentistry',
    departmentSlug: 'dentistry',
    bio: 'Dr. Sheha Beegum is a GP dentist with 8+ years of experience specializing in aesthetic restorations, teeth whitening, and prosthetic rehabilitation.',
    experience: 8,
    education: [
      { degree: 'BDS', institution: 'Recognized Dental College', year: '2018' }
    ],
    languages: ['English', 'Hindi', 'Malayalam', 'Tamil', 'Arabic (Basic)'],
    awards: [],
    image: '/Dr. Sneha Beegum(GP Dentist).png',
    availability: 'Sat – Thu, 9:00 AM – 9:00 PM',
    conditions: ['Teeth Whitening', 'Extractions', 'Root Canal Therapy', 'Crown And Bridge Placement', 'Paediatric Dentistry']
  },
  {
    slug: 'dr-shameena-zahid',
    name: 'Dr. Shameena Zahid',
    title: 'General Dentist',
    specialty: 'General Dentistry',
    departmentSlug: 'dentistry',
    bio: 'Dr. Shameena Zahid is a general dentist with 8+ years of experience offering comprehensive dental check-ups, tooth-colored fillings, sealants, and pediatric dental care.',
    experience: 8,
    education: [
      { degree: 'BDS', institution: 'Recognized Dental College', year: '2018' }
    ],
    languages: ['English', 'Hindi', 'Malayalam', 'Tamil', 'Arabic (Basic)'],
    awards: [],
    image: '/Dr. Shameena Zahid(GP Dentist).png',
    availability: 'Sat – Thu, 9:00 AM – 9:00 PM',
    conditions: ['Dental Check-up', 'Root Canal Treatments', 'Tooth Coloured Fillings', 'Crown and Bridge', 'Dentures']
  },
  {
    slug: 'dr-vandana-pal-bansal',
    name: 'Dr. Vandana Pal Bansal',
    title: 'Specialist Obstetrics & Gynaecologist',
    specialty: "Women's Health",
    departmentSlug: 'womens-health',
    bio: 'Dr. Vandana Pal Bansal is a specialist obstetrician and gynaecologist with 20+ years of clinical experience providing expert women’s healthcare, consultations, and ultrasound screenings.',
    experience: 20,
    education: [
      { degree: 'MBBS, MS', institution: 'Recognized Medical University', year: '2006' }
    ],
    languages: ['English', 'Hindi'],
    awards: [],
    image: 'Not Available',
    availability: 'Sat – Thu, 9:00 AM – 9:00 PM',
    conditions: ['Gynaecology Consultation', 'Ultrasound Screening', 'Antenatal Care', 'Early Risk Detection']
  }
];

export function getDoctor(slug: string) {
  return doctors.find((d) => d.slug === slug);
}

export function getDoctorsByDepartment(deptSlug: string) {
  return doctors.filter((d) => d.departmentSlug === deptSlug);
}