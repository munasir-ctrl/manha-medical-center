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
    name: 'Sheha Beegum',
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
    name: 'Sharmeen Ishaque',
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
    name: 'Aiswarya Shajeev',
    title: 'GP Dentist',
    specialty: 'General Dentistry',
    departmentSlug: 'dentistry',
    bio: 'Dr. Aiswarya Shajeev is a GP dentist with 8+ years of experience providing comprehensive oral examinations, fillings, crowns, bridges, and teeth whitening.',
    experience: 8,
    education: [
      { degree: 'BDS', institution: 'Recognized Dental College', year: '2018' }
    ],
    languages: ['Malayalam', 'English', 'Hindi', 'Tamil', 'Arabic (Basic)'],
    awards: [],
    image: '/Dr. Aiswarya Shajeev(GP Dentist).png',
    availability: 'Available on appointment - Everyday',
    conditions: ['Comprehensive Oral Examination', 'Dental Fillings & Restorations', 'Tooth Extractions', 'Root Canal Therapy with Post & Core', 'Restorations and Re-root canal therapy', 'Dental Crowns & Bridges', 'Denture Fabrication & Fitting', 'Periodontal Scaling & Polishing', 'Digital X-Rays & Imaging', 'Teeth Whitening', 'Veneers & Laminates', 'Smile Makeovers', 'Pediatric Dentistry']
  },
  {
    slug: 'dr-asna-haroon',
    name: 'Asna Haroon',
    title: 'GP Dentist',
    specialty: 'General Dentistry',
    departmentSlug: 'dentistry',
    bio: 'Dr. Asna Haroon is a GP dentist with 8 years of clinical practice specializing in rotary endodontics, restorative procedures, and pediatric dental care.',
    experience: 8,
    education: [
      { degree: 'BDS', institution: 'PMS Dental college, Trivandrum, Kerala', year: '2018' }
    ],
    languages: ['English', 'Arabic', 'Hindi', 'Tamil', 'Malayalam'],
    awards: [],
    image: '/Dr.asna-haroon-gp-dentist.png',
    availability: 'Available on appointment - Everyday',
    conditions: ['Patient Diagnosis and Treatment Planning', 'Cosmetic and Restorative Dentistry', 'Root Canal Treatments (Rotary and Hand)', 'Pediatric Dental Care and Patient Counseling', 'Prosthetic Rehabilitation including Post Core, Crown, FPD, RPD, Complete Denture', 'Scaling, Polishing and Preventive Dentistry']
  },
  {
    slug: 'dr-jibran',
    name: 'Jibran',
    title: 'GP Dentist',
    specialty: 'General Dentistry',
    departmentSlug: 'dentistry',
    bio: 'Dr. Jibran is a GP dentist with 12+ years of professional experience offering comprehensive dental care, root canal treatments, and cosmetic dental procedures.',
    experience: 12,
    education: [
      { degree: 'Bachelor of Dental Surgery (BDS)', institution: 'Rajiv Gandhi University of Health Sciences, Karnataka, India', year: '2014' }
    ],
    languages: ['English', 'Urdu', 'Hindi', 'Arabic'],
    awards: [],
    image: '/Dr. Jibran(GP Dentist).png',
    availability: 'Available on appointment - Everyday',
    conditions: ['General Dentistry', 'Restorative Dentistry', 'Endodontics', 'Aesthetic Dentistry', 'Oral Surgery', 'Laser Dentistry', 'Prosthodontics (Crowns & Bridges)', 'Preventive Dentistry', 'Root Canal Treatment', 'Dental Extractions', 'Impacted Wisdom Tooth Surgery', 'Veneers', 'Teeth Bleaching']
  },
  {
    slug: 'dr-shameena-zahid',
    name: 'Shameena Zahid',
    title: 'GP Dentist',
    specialty: 'General Dentistry',
    departmentSlug: 'dentistry',
    bio: 'Dr. Shameena Zahid is a GP dentist with 8+ years of experience offering comprehensive dental check-ups, tooth-colored fillings, sealants, and pediatric dental care.',
    experience: 8,
    education: [
      { degree: 'BDS', institution: 'Recognized Dental College', year: '2018' }
    ],
    languages: ['English', 'Hindi', 'Malayalam', 'Tamil', 'Arabic (Basic)'],
    awards: [],
    image: '/Dr. Shameena Zahid(GP Dentist).png',
    availability: 'Available on appointment - Everyday',
    conditions: ['Dental check up and oral examination', 'Root canal treatments', 'Anterior and posterior tooth coloured fillings', 'Crown and bridge', 'Complete and partial dentures', 'Scaling and polishing', 'Minor gingival surgeries', 'Extractions', 'Fluoride treatment', 'Pediatric Dental Care']
  },
  {
    slug: 'dr-thasneem',
    name: 'Thasneem',
    title: 'Orthodontist',
    specialty: 'Orthodontics',
    departmentSlug: 'dentistry',
    bio: 'Dr. Thasneem is a specialist Orthodontist dedicated to correcting misaligned teeth and jaws, offering advanced braces and clear aligner treatments for all ages.',
    experience: 8,
    education: [
      { degree: 'Master of Dental Surgery (MDS) in Orthodontics', institution: 'Recognized Dental University', year: '2018' }
    ],
    languages: ['English', 'Hindi', 'Malayalam', 'Arabic (Basic)'],
    awards: [],
    image: '/Dr. Thasneem(Orthodontist).png',
    availability: 'Available on appointment - Everyday',
    conditions: ['Metal Braces', 'Ceramic Braces', 'Clear Aligners', 'Crowded Teeth', 'Jaw Alignment Correction', 'Preventive and Interceptive Orthodontics', 'Retainer Management']
  },
  {
    slug: 'dr-shamsunnisa-hasham',
    name: 'Shamsunnisa Hasham',
    title: 'Hijama Specialist',
    specialty: 'Hijama / Cupping Therapy',
    departmentSlug: 'alternative-medicine',
    bio: 'Dr. Shamsunnisa Hasham is an experienced Hijama specialist offering traditional wet and dry cupping therapy to promote holistic healing and pain relief.',
    experience: 6,
    education: [
      { degree: 'Certification in Hijama & Alternative Medicine', institution: 'Recognized Institute', year: '2020' }
    ],
    languages: ['English', 'Hindi', 'Urdu', 'Arabic'],
    awards: [],
    image: '/Dr. Shamsunnisa Hasham(Hijama).png',
    availability: 'Available on appointment - Everyday',
    conditions: ['Wet Cupping (Hijama)', 'Dry Cupping', 'Chronic Pain Management', 'Detoxification & Wellness', 'Blood Circulation Improvement', 'Musculoskeletal Stiffness']
  },
  {
    slug: 'dr-amna-habib-hassan',
    name: 'Amna Habib Hassan',
    title: 'GP Doctor',
    specialty: 'General Medicine',
    departmentSlug: 'general-medicine',
    bio: 'Dr. Amna Habib Hassan is a General Practice physician providing comprehensive primary healthcare, preventive screenings, and management of acute and chronic conditions.',
    experience: 7,
    education: [
      { degree: 'MBBS', institution: '', year: '2019' }
    ],
    languages: ['English', 'Arabic', 'Hindi'],
    awards: [],
    image: '/Dr. Amna Habib Hassan-GP Doctor.png',
    availability: 'Available on appointment - Everyday',
    conditions: ['General Medical Consultation', 'Acute Infections & Viral Illnesses', 'Hypertension Management', 'Diabetes Care', 'Preventive Health Checkups', 'Routine Health Screenings']
  },
  {
    slug: 'dr-heena-kauser-mohammed',
    name: 'Heena Kauser Mohammed',
    title: 'GP Doctor',
    specialty: 'General Medicine',
    departmentSlug: 'general-medicine',
    bio: 'Dr. Heena Kauser Mohammed is a General Practitioner dedicated to diagnosing and treating a wide array of general health issues with a patient-centered approach.',
    experience: 6,
    education: [
      { degree: 'MBBS', institution: '', year: '' }
    ],
    languages: ['English', 'Hindi', 'Urdu', 'Arabic (Basic)'],
    awards: [],
    image: '/Dr. Heena Kauser Mohammed-GP Doctor.png',
    availability: 'Available on appointment - Everyday',
    conditions: ['Primary Healthcare', 'Common Cold & Flu', 'Minor Injuries & Wound Care', 'Lifestyle Disease Management', 'Health & Wellness Counseling']
  },
  {
    slug: 'dr-iffath',
    name: 'Iffath',
    title: 'GP Doctor',
    specialty: 'General Medicine',
    departmentSlug: 'general-medicine',
    bio: 'Dr. Iffath is a General Practitioner focused on delivering expert outpatient primary care, wellness advice, and effective treatment plans for acute and chronic ailments.',
    experience: 6,
    education: [
      { degree: 'MBBS', institution: '', year: '' }
    ],
    languages: ['English', 'Hindi', 'Tamil', 'Malayalam'],
    awards: [],
    image: '/Dr. Iffath-GP Doctor.png',
    availability: 'Available on appointment - Everyday',
    conditions: ['Outpatient Care', 'Fever & Respiratory Infections', 'Digestive Health Issues', 'Basic Health Assessments', 'Chronic Disease Screening']
  },
  {
    slug: 'dr-vandana-pal-bansal',
    name: 'Vandana Pal Bansal',
    title: 'Specialist Obstetrics & Gynaecologist',
    specialty: "Women's Health",
    departmentSlug: 'womens-health',
    bio: 'Dr. Vandana Pal Bansal is a specialist obstetrician and gynaecologist with 22+ years of clinical experience providing expert women’s healthcare, consultations, and ultrasound screenings.',
    experience: 22,
    education: [
      { degree: 'MBBS, MS', institution: '', year: '2004' }
    ],
    languages: ['English', 'Hindi'],
    awards: [],
    image: '/Vandana.webp',
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