export type BlogCategory = {
  slug: string;
  name: string;
  description: string;
  icon: string;
};

export const blogCategories: BlogCategory[] = [
  { slug: 'dental', name: 'Dental', description: 'Oral health, dentistry, and orthodontics', icon: 'Smile' },
  { slug: 'pediatrics', name: 'Pediatrics', description: 'Child health, vaccinations, and development', icon: 'Baby' },
  { slug: 'womens-health', name: "Women's Health", description: 'Gynecology, pregnancy, and wellness', icon: 'HeartPulse' },
  { slug: 'vaccination', name: 'Vaccination', description: 'Immunization schedules and guidance', icon: 'Syringe' },
  { slug: 'general-medicine', name: 'General Medicine', description: 'Everyday health and family medicine', icon: 'Stethoscope' },
  { slug: 'orthodontics', name: 'Orthodontics', description: 'Braces, aligners, and smile correction', icon: 'Smile' },
  { slug: 'health-tips', name: 'Health Tips', description: 'Practical advice for everyday wellness', icon: 'Lightbulb' },
  { slug: 'insurance', name: 'Insurance', description: 'Understanding health coverage in the UAE', icon: 'ShieldCheck' },
  { slug: 'child-care', name: 'Child Care', description: 'Parenting and child wellness guidance', icon: 'Baby' },
  { slug: 'seasonal-diseases', name: 'Seasonal Diseases', description: 'Preventing and managing seasonal illness', icon: 'CloudRain' },
];

export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  reviewer: string;
  datePublished: string;
  dateModified: string;
  readingTime: number;
  image: string;
  featured: boolean;
  excerpt: string;
  content: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
  peopleAlsoAsk: { q: string; a: string }[];
  voiceSearchQuestions: string[];
};

export const articles: BlogArticle[] = [
  {
    slug: 'when-should-your-child-first-visit-dentist',
    title: 'When Should Your Child Have Their First Dental Visit?',
    description:
      'A pediatric dentist explains the ideal age for a first dental visit, what to expect, and how to make it a positive experience for your child.',
    category: 'dental',
    author: 'Dr. Sara Mansouri',
    reviewer: 'Dr. Fatima Al Zahra',
    datePublished: '2024-09-15',
    dateModified: '2025-01-20',
    readingTime: 6,
    image: 'https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: true,
    excerpt:
      'The first dental visit sets the tone for a lifetime of healthy smiles. Here\u2019s exactly when to schedule it and how to prepare your child.',
    content: [
      {
        heading: 'The Ideal Age for a First Dental Visit',
        body: 'The American Academy of Pediatric Dentistry and the UAE Dental Association both recommend scheduling a child\u2019s first dental visit by their first birthday or within six months of their first tooth appearing. Early visits are less about treatment and more about establishing a dental home, building comfort, and catching any developmental concerns early. At Manha Medical Center, our pediatric dental team makes this first visit gentle, playful, and completely stress-free.',
      },
      {
        heading: 'What to Expect During the First Visit',
        body: 'The first appointment is typically short and focused on comfort. The dentist will examine your child\u2019s teeth, gums, and bite, check for any early signs of decay, and assess oral development. You\u2019ll receive personalized guidance on brushing techniques, fluoride use, pacifier habits, and diet. Most importantly, your child becomes familiar with the dental environment in a positive, non-threatening way.',
      },
      {
        heading: 'How to Prepare Your Child',
        body: 'Start by keeping the conversation positive and simple. Avoid words like "pain" or "hurt." Read picture books about dentist visits, play pretend dentist at home, and choose a time when your child is well-rested and fed. Arrive a few minutes early so your child can explore the child-friendly waiting area. Our team is specially trained to make young patients feel safe and even excited about their visit.',
      },
      {
        heading: 'Building Healthy Habits Early',
        body: 'Early dental visits establish a foundation of prevention. Regular six-month check-ups allow us to monitor development, apply protective sealants, and address any concerns before they become problems. Children who start dental visits early are significantly less likely to experience dental anxiety and far more likely to maintain healthy oral habits throughout life.',
      },
    ],
    faqs: [
      { q: 'At what age should a child first visit the dentist?', a: 'By their first birthday or within six months of the first tooth appearing, whichever comes first.' },
      { q: 'How often should children visit the dentist?', a: 'Every six months for routine check-ups and preventive care.' },
      { q: 'What if my child is afraid of the dentist?', a: 'Our pediatric dental team is specially trained in child-friendly techniques. Early, positive visits help prevent dental anxiety.' },
    ],
    peopleAlsoAsk: [
      { q: 'What happens at a child\u2019s first dental visit?', a: 'A gentle examination of teeth and gums, guidance on home care, and a positive introduction to the dental environment.' },
      { q: 'How do I brush my baby\u2019s teeth?', a: 'Use a soft-bristled brush and a rice-sized amount of fluoride toothpaste, brushing twice daily.' },
    ],
    voiceSearchQuestions: [
      'Hey Google, when should my baby first see a dentist?',
      'Alexa, what age for first dental visit?',
    ],
  },
  {
    slug: 'understanding-uae-childhood-vaccination-schedule',
    title: 'Understanding the UAE Childhood Vaccination Schedule',
    description:
      'A complete guide to the UAE childhood immunization schedule, what each vaccine protects against, and how to stay on track.',
    category: 'vaccination',
    author: 'Dr. Fatima Al Zahra',
    reviewer: 'Dr. Layla Hassani',
    datePublished: '2024-10-02',
    dateModified: '2025-02-10',
    readingTime: 8,
    image: 'https://images.pexels.com/photos/3933252/pexels-photo-3933252.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: true,
    excerpt:
      'Vaccines are one of the most powerful tools to protect your child. Here\u2019s a clear, parent-friendly guide to the UAE schedule.',
    content: [
      {
        heading: 'Why Vaccination Matters',
        body: 'Vaccination is one of the most effective public health interventions in human history. It protects your child from serious, potentially life-threatening diseases and helps build community immunity that safeguards those who cannot be vaccinated. The UAE follows a comprehensive immunization schedule aligned with World Health Organization recommendations.',
      },
      {
        heading: 'The UAE Immunization Schedule',
        body: 'The UAE schedule begins at birth with the BCG and Hepatitis B vaccines, followed by a series of immunizations at 2, 4, 6, 9, 12, and 18 months. Key vaccines include DTaP (diphtheria, tetanus, pertussis), polio, MMR (measles, mumps, rubella), varicella, and pneumococcal conjugate. Booster doses continue through school age. At Manha Medical Center, we follow the Ministry of Health schedule and can adapt to international schedules for expatriate families.',
      },
      {
        heading: 'What Each Vaccine Protects Against',
        body: 'BCG protects against tuberculosis. Hepatitis B prevents liver infection and its long-term complications. DTaP covers three serious diseases in one shot. Polio vaccine has nearly eliminated the disease globally. MMR prevents measles, mumps, and rubella \u2014 all highly contagious. Pneumococcal and rotavirus vaccines protect against serious bacterial and viral infections in young children.',
      },
      {
        heading: 'Keeping Your Child on Schedule',
        body: 'Staying on track is simple with our digital vaccination tracker. We send automated reminders, maintain complete records, and provide international vaccination certificates for travel and school enrollment. If your child has missed a dose, catch-up schedules are available \u2014 it\u2019s never too late to protect them.',
      },
    ],
    faqs: [
      { q: 'Is vaccination mandatory in the UAE?', a: 'Yes, the UAE requires certain vaccinations for school enrollment. The full schedule is strongly recommended by the Ministry of Health.' },
      { q: 'What if my child missed a vaccine?', a: 'Catch-up schedules are available. Book a consultation and our pediatric team will create a personalized plan.' },
      { q: 'Are vaccines safe?', a: 'Yes. Vaccines undergo rigorous testing and monitoring. Side effects are typically mild and temporary.' },
    ],
    peopleAlsoAsk: [
      { q: 'What vaccines are required in the UAE?', a: 'The UAE requires BCG, Hepatitis B, DTaP, polio, MMR, and varicella among others. Check the Ministry of Health schedule for details.' },
      { q: 'When do babies get vaccines in the UAE?', a: 'At birth, 2, 4, 6, 9, 12, and 18 months, with boosters through school age.' },
    ],
    voiceSearchQuestions: [
      'Hey Google, what is the UAE vaccination schedule for babies?',
      'Alexa, when do babies get their first vaccines?',
    ],
  },
  {
    slug: 'managing-seasonal-allergies-in-uae',
    title: 'Managing Seasonal Allergies in the UAE: A Complete Guide',
    description:
      'Learn how to identify, treat, and prevent seasonal allergies common in the UAE climate, from dust storms to pollen.',
    category: 'seasonal-diseases',
    author: 'Dr. Layla Hassani',
    reviewer: 'Dr. Omar Al Farsi',
    datePublished: '2024-11-10',
    dateModified: '2025-03-05',
    readingTime: 7,
    image: 'https://images.pexels.com/photos/4225920/pexels-photo-4225920.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: true,
    excerpt:
      'From sandstorms to pollen season, allergies are part of life in the UAE. Here\u2019s how to breathe easier year-round.',
    content: [
      {
        heading: 'Understanding UAE Allergy Triggers',
        body: 'The UAE\u2019s unique climate creates distinct allergy patterns. Dust storms (shamals) carry fine particulates that irritate airways. Pollen from date palms, grasses, and ornamental plants peaks in spring. Indoor allergens like dust mites thrive in air-conditioned environments. Understanding your triggers is the first step to effective management.',
      },
      {
        heading: 'Recognizing Allergy Symptoms',
        body: 'Common symptoms include sneezing, runny or stuffy nose, itchy eyes, throat irritation, and fatigue. In children, allergies can also cause dark circles under the eyes and frequent mouth-breathing. If symptoms persist beyond a week or worsen, it\u2019s time to see a specialist for proper diagnosis.',
      },
      {
        heading: 'Effective Treatment Options',
        body: 'Treatment ranges from over-the-counter antihistamines to prescription nasal sprays and immunotherapy for severe cases. Our family medicine specialists perform allergy testing to identify specific triggers and create personalized management plans. Many patients find significant relief with the right combination of medication and environmental modifications.',
      },
      {
        heading: 'Prevention Strategies',
        body: 'During dust storms, keep windows closed and run air purifiers with HEPA filters. Shower and change clothes after outdoor exposure. Track pollen counts and plan outdoor activities accordingly. For children with asthma, ensure rescue inhalers are always accessible. Regular check-ups help adjust your management plan as seasons change.',
      },
    ],
    faqs: [
      { q: 'What causes allergies in the UAE?', a: 'Dust storms, pollen from palms and grasses, and indoor dust mites are the most common triggers.' },
      { q: 'How long do seasonal allergies last?', a: 'Depending on the trigger, symptoms can last weeks to months. Proper treatment can significantly reduce duration and severity.' },
      { q: 'Can allergies be cured?', a: 'While not curable, allergies can be effectively managed. Immunotherapy can provide long-term relief for some patients.' },
    ],
    peopleAlsoAsk: [
      { q: 'How do I know if I have seasonal allergies?', a: 'Symptoms like sneezing, itchy eyes, and congestion that recur at the same time each year are strong indicators.' },
      { q: 'What is the best treatment for dust allergies?', a: 'HEPA filtration, antihistamines, and prescription nasal sprays are effective. Severe cases may benefit from immunotherapy.' },
    ],
    voiceSearchQuestions: [
      'Hey Google, how to treat seasonal allergies in the UAE?',
      'Alexa, what causes allergies during sandstorms?',
    ],
  },
  {
    slug: '5-signs-you-need-to-see-a-gynecologist',
    title: '5 Signs You Should See a Gynecologist',
    description:
      'From irregular periods to pelvic pain, learn the signs that warrant a gynecology visit and why early detection matters.',
    category: 'womens-health',
    author: 'Dr. Mona Rashid',
    reviewer: 'Dr. Layla Hassani',
    datePublished: '2024-12-05',
    dateModified: '2025-03-15',
    readingTime: 5,
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: false,
    excerpt:
      'Your body sends signals. Knowing which ones to act on can make all the difference for your long-term health.',
    content: [
      {
        heading: 'Irregular or Painful Periods',
        body: 'Periods that are consistently irregular, excessively heavy, or accompanied by severe pain are not something to "just live with." These can signal hormonal imbalances, fibroids, endometriosis, or other treatable conditions. A gynecologist can identify the cause and provide relief.',
      },
      {
        heading: 'Unusual Discharge or Discomfort',
        body: 'Changes in discharge, persistent discomfort, or itching can indicate infections that require treatment. While some changes are normal, anything persistent or unusual should be evaluated. Early treatment prevents complications.',
      },
      {
        heading: 'Pelvic Pain',
        body: 'Pelvic pain that lasts more than a few days, or pain during intercourse, should never be ignored. These symptoms can point to conditions like endometriosis, ovarian cysts, or pelvic inflammatory disease \u2014 all of which are treatable when caught early.',
      },
      {
        heading: 'Family Planning & Fertility',
        body: 'Whether you\u2019re planning a pregnancy, struggling to conceive, or considering contraception, a gynecologist provides essential guidance. Fertility evaluations can identify factors affecting conception and open doors to supportive treatments.',
      },
      {
        heading: 'Overdue for Screening',
        body: 'If you\u2019re over 21 and haven\u2019t had a Pap smear, or over 40 and haven\u2019t had a breast screening, it\u2019s time to book. Preventive screenings catch issues early, when they\u2019re most treatable. A simple appointment can provide peace of mind and protect your long-term health.',
      },
    ],
    faqs: [
      { q: 'How often should I see a gynecologist?', a: 'Annually for a well-woman visit, or sooner if you experience any concerning symptoms.' },
      { q: 'When should I start Pap smear screening?', a: 'At age 21, with frequency determined by your individual risk profile.' },
    ],
    peopleAlsoAsk: [
      { q: 'When should I worry about pelvic pain?', a: 'Pelvic pain lasting more than a few days, or pain that interferes with daily life, warrants a gynecology visit.' },
      { q: 'Can irregular periods be serious?', a: 'They can signal hormonal or structural issues. A gynecologist can determine the cause and recommend treatment.' },
    ],
    voiceSearchQuestions: [
      'Hey Google, when should I see a gynecologist?',
      'Alexa, are irregular periods a reason to see a doctor?',
    ],
  },
  {
    slug: 'invisalign-vs-braces-which-is-right',
    title: 'Invisalign vs Traditional Braces: Which Is Right for You?',
    description:
      'A dentist compares Invisalign clear aligners and traditional braces, covering cost, treatment time, and results.',
    category: 'orthodontics',
    author: 'Dr. Sara Mansouri',
    reviewer: 'Dr. Layla Hassani',
    datePublished: '2025-01-15',
    dateModified: '2025-04-01',
    readingTime: 6,
    image: 'https://images.pexels.com/photos/6627562/pexels-photo-6627562.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: false,
    excerpt:
      'Both straighten teeth \u2014 but the right choice depends on your lifestyle, budget, and smile goals.',
    content: [
      {
        heading: 'How Invisalign Works',
        body: 'Invisalign uses a series of custom-made, clear plastic aligners that gradually shift your teeth into place. You wear each set for about two weeks, removing them only to eat, drink, brush, and floss. Treatment typically takes 12\u201318 months, and the aligners are virtually invisible \u2014 making them popular with adults and teens.',
      },
      {
        heading: 'How Traditional Braces Work',
        body: 'Traditional braces use metal or ceramic brackets bonded to your teeth, connected by wires that apply consistent pressure. They are highly effective for complex cases and require adjustments every 4\u20136 weeks. Treatment time ranges from 18\u201324 months depending on the severity of alignment issues.',
      },
      {
        heading: 'Comparing the Key Factors',
        body: 'Invisalign offers aesthetics, removability, and comfort, but requires discipline to wear aligners 22 hours daily. Traditional braces are more effective for severe misalignment, require no patient compliance for wear time, and are often more affordable. Both deliver excellent results when used appropriately.',
      },
      {
        heading: 'Making Your Decision',
        body: 'The best choice depends on your case complexity, lifestyle, and personal preferences. During your consultation at Manha Medical Center, we\u2019ll assess your alignment, discuss your goals, and recommend the option that will give you the best outcome with the best experience.',
      },
    ],
    faqs: [
      { q: 'Is Invisalign faster than braces?', a: 'For mild to moderate cases, Invisalign can be slightly faster. Severe cases may require braces for effective treatment.' },
      { q: 'Does insurance cover Invisalign?', a: 'Many insurance plans cover orthodontic treatment including Invisalign. Our team will verify your coverage.' },
    ],
    peopleAlsoAsk: [
      { q: 'Which is better Invisalign or braces?', a: 'It depends on case complexity, lifestyle, and budget. A consultation determines the best fit.' },
      { q: 'Can adults get Invisalign?', a: 'Yes, Invisalign is very popular among adults due to its discreet appearance.' },
    ],
    voiceSearchQuestions: [
      'Hey Google, Invisalign or braces which is better?',
      'Alexa, how long does Invisalign take?',
    ],
  },
  {
    slug: 'understanding-health-insurance-in-uae',
    title: 'Understanding Health Insurance in the UAE: A Patient\u2019s Guide',
    description:
      'Everything you need to know about using health insurance in the UAE, from coverage to claims and pre-approvals.',
    category: 'insurance',
    author: 'Dr. Omar Al Farsi',
    reviewer: 'Dr. Layla Hassani',
    datePublished: '2025-02-20',
    dateModified: '2025-04-10',
    readingTime: 7,
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: false,
    excerpt:
      'Navigating health insurance doesn\u2019t have to be confusing. Here\u2019s a clear guide to getting the care you need.',
    content: [
      {
        heading: 'How UAE Health Insurance Works',
        body: 'The UAE mandates health insurance for all residents. Each emirate has its own requirements \u2014 Sharjah and Dubai require employer-provided coverage. Plans vary in network, co-payment, and covered services. Understanding your specific plan helps you access care smoothly and avoid unexpected costs.',
      },
      {
        heading: 'In-Network vs Out-of-Network',
        body: 'In-network providers have agreements with your insurer, typically meaning lower or no out-of-pocket costs. Manha Medical Center is in-network with over 30 major insurers including Daman, Nextcare, ADNIC, and AXA. Always verify your coverage before non-emergency visits.',
      },
      {
        heading: 'Pre-Approvals and Claims',
        body: 'Certain procedures require pre-approval from your insurer. Our insurance team handles this process for you \u2014 submitting requests, following up, and ensuring approvals before treatment. For most routine visits, your insurance card is simply presented at reception.',
      },
      {
        heading: 'Maximizing Your Benefits',
        body: 'Schedule annual check-ups (most plans cover one free per year), stay in-network, and understand your plan\u2019s limits. Our insurance verification tool lets you check coverage in real-time before booking, so there are no surprises.',
      },
    ],
    faqs: [
      { q: 'How do I check if my insurance is accepted?', a: 'Use our online insurance checker or call us with your insurance card details. We verify coverage in minutes.' },
      { q: 'What if my procedure needs pre-approval?', a: 'Our team handles the entire pre-approval process with your insurer. You\u2019ll be informed before any treatment begins.' },
    ],
    peopleAlsoAsk: [
      { q: 'Is health insurance mandatory in Sharjah?', a: 'Yes, health insurance is mandatory for all UAE residents.' },
      { q: 'Can I use Dubai insurance in Sharjah?', a: 'Most UAE-wide plans are accepted across emirates. Verify your specific network with us.' },
    ],
    voiceSearchQuestions: [
      'Hey Google, how does health insurance work in the UAE?',
      'Alexa, is health insurance mandatory in Sharjah?',
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string) {
  return articles.filter((a) => a.category === category);
}

export function getFeaturedArticles() {
  return articles.filter((a) => a.featured);
}

export function getRelatedArticles(departmentSlug: string, limit = 3) {
  const categoryMap: Record<string, string> = {
    'family-medicine': 'general-medicine',
    'pediatrics': 'pediatrics',
    'dentistry': 'dental',
    'womens-health': 'womens-health',
    'orthopedics': 'health-tips',
    'internal-medicine': 'general-medicine',
  };
  const cat = categoryMap[departmentSlug];
  return (cat ? getArticlesByCategory(cat) : articles).slice(0, limit);
}
