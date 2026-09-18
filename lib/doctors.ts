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
    slug: 'dr-sheha-beegum',
    name: 'Dr. Sheha Beegum',
    title: 'GP Dentist',
    specialty: 'General Dentistry',
    departmentSlug: 'dentistry',
    bio: 'Dr. Sheha Beegum is a GP dentist with over eight years of experience specializing in aesthetic restorations, teeth whitening, and prosthetic rehabilitation.',
    experience: 8,
    education: [
      { degree: 'Bachelor of Dental Surgery (BDS)', institution: 'Recognized Dental College', year: '2018' }
    ],
    languages: ['English', 'Hindi', 'Malayalam', 'Tamil', 'Arabic (Basic)'],
    awards: [],
    image: '/Dr. Sneha Beegum(GP Dentist).png',
    availability: 'Available on appointment - Everyday',
    conditions: ['Teeth Whitening', 'Surgical and non-surgical extractions', 'Root Canal Therapy', 'Crown And Bridge Placement', 'Prosthetic Rehabilitation', 'Paediatric Dentistry', 'Post And Core Restoration', 'Aesthetic Anterior And Posterior Restoration']
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
      { degree: 'Bachelor of Dental Surgery (BDS)', institution: 'Recognized Dental College', year: '2018' }
    ],
    languages: ['English', 'Hindi', 'Malayalam', 'Tamil', 'Arabic (Basic)'],
    awards: [],
    image: '/Dr. Sharmeen Ishaque(GP Dentist).png',
    availability: 'Available on appointment - Everyday',
    conditions: ['Cosmetic Dentistry & Basic Restoration', 'Surgical and non-surgical extractions', 'Root Canal Treatments', 'Post And Core Restorations', 'Crowns And Bridges Placement', 'Fixed And Removable Prosthodontics', 'Maxillofacial Trauma Management', 'Dental management of special care and medically compromised', 'Paediatric Dentistry and Fabrication of Habit Breaking Appliance', 'Hollywood Smile and veneers']
  },
  {
    slug: 'dr-aiswarya-shajeev',
    name: 'Dr. Aiswarya Shajeev',
    title: 'General Dentist',
    specialty: 'General Dentistry',
    departmentSlug: 'dentistry',
    bio: 'Dr. Aiswarya Shajeev is a general dentist with 8+ years of experience providing comprehensive oral examination, fillings, crowns, bridges, and teeth whitening.',
    experience: 8,
    education: [
      { degree: 'BDS', institution: 'Recognized Dental College', year: '2018' }
    ],
    languages: ['Malayalam', 'English (fluent)', 'Hindi', 'Kannada & Tamil (basic)'],
    awards: [],
    image: '/Dr. Aiswarya Shajeev(GP Dentist).png',
    availability: 'Available on appointment - Everyday',
    conditions: ['Comprehensive Oral Examination', 'Dental Fillings & Restorations', 'Tooth Extractions', 'Root Canal Therapy with Post & Core', 'Restorations and Re-root canal therapy', 'Dental Crowns & Bridges', 'Denture Fabrication & Fitting', 'Orthodontic Evaluation', 'Periodontal Scaling & Polishing', 'Digital X-Rays & Imaging', 'Teeth Whitening', 'Veneers & Laminates', 'Smile Makeovers', 'Pediatric Dentistry', 'Bridal Dentistry/Bridal Smile Makeover']
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
    availability: 'Available on appointment - Everyday',
    conditions: ['Dental check up and oral examination', 'Root canal treatments', 'Anterior and posterior tooth coloured fillings', 'Crown and bridge', 'Complete and partial dentures', 'Scaling and polishing', 'Minor gingival surgeries', 'Extractions', 'Fluoride treatment', 'Pit and fissure sealants', 'Dental checkup and filling for kids']
  },
  {
    slug: 'dr-jibran',
    name: 'Dr. Jibran',
    title: 'General Dentist',
    specialty: 'General Dentistry',
    departmentSlug: 'dentistry',
    bio: 'Dr. Jibran is a general dentist with 12+ years of professional experience offering comprehensive dental care, root canal treatments, and cosmetic dental procedures.',
    experience: 12,
    education: [
      { degree: 'Bachelor of Dental Surgery (BDS)', institution: 'Rajiv Gandhi University of Health Sciences, Karnataka, India', year: '2014' },
      { degree: 'HKDET Dental College, Hospital & Research Institute', institution: 'Recognized Institute', year: '2014' }
    ],
    languages: ['English', 'Urdu', 'Hindi', 'Little Pashto', 'Arabic'],
    awards: [],
    image: '/Dr. Jibran(GP Dentist).png',
    availability: 'Available on appointment - Everyday',
    conditions: ['General Dentistry', 'Restorative Dentistry', 'Endodontics', 'Aesthetic Dentistry', 'Oral Surgery', 'Laser Dentistry', 'Prosthodontics (Crowns & Bridges)', 'Preventive Dentistry', 'Patient Consultation & Treatment Planning', 'Root Canal Treatment', 'Composite Restorations', 'Dental Extractions', 'Impacted Wisdom Tooth Surgery', 'Crown & Bridge (PFM & Zirconia)', 'Veneers', 'Diastema Closure', 'Crown Lengthening with Osseous Surgery', 'Laser Dentistry', 'Gingivectomy', 'Frenectomy', 'Teeth Bleaching', 'Curettage & Root Planing', 'Dental Medication Prescription']
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
      { degree: 'BDS', institution: 'PMS Dental college, Trivandrum, Kerala', year: '2018' }
    ],
    languages: ['English', 'Arabic', 'Hindi', 'Tamil', 'Malayalam'],
    awards: [],
    image: '/Dr.asna-haroon-gp-dentist.png',
    availability: 'Available on appointment - Everyday',
    conditions: ['Patient Diagnosis and Treatment Planning', 'Cosmetic and Restorative Dentistry', 'Root Canal Treatments (Rotary and Hand)', 'Pediatric Dental Care and Patient Counseling', 'Prosthetic Rehabilitation including Post Core, Crown, FPD, RPD, Complete Denture', 'Scaling, Polishing and Preventive Dentistry', 'General Dentistry', 'Restorative Dentistry', 'Endodontics', 'Cosmetic Dentistry', 'Prosthetic Rehabilitation', 'Preventive & Preventive Dentistry', 'Pediatric Dental Care']
  },
  {
    slug: 'dr-vandana-pal-bansal',
    name: 'Dr. Vandana Pal Bansal',
    title: 'Specialist Obstetrics & Gynaecologist',
    specialty: "Women's Health",
    departmentSlug: 'womens-health',
    bio: 'Dr. Vandana Pal Bansal is a specialist obstetrician and gynaecologist with 22+ years of clinical experience providing expert women’s healthcare, consultations, and ultrasound screenings.',
    experience: 22,
    education: [
      { degree: 'MBBS, MS', institution: 'Recognized Medical University', year: '2004' }
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