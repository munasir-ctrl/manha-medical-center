"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  lang: Language;
  toggleLanguage: (newLang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation & Common
    home: "Home",
    departments: "Departments",
    doctors: "Doctors",
    healthPackages: "Health Packages",
    insurance: "Insurance",
    contact: "Contact",
    blog: "Blog",
    about: "About",
    emergency: "Emergency",
    bookAppointment: "Book Appointment",
    call: "Call",
    callClinicDirectly: "Call Clinic Directly",
    commercialMuwailah: "Commercial Muwailah, Sharjah",
    openToday: "Open Today",
    searchPlaceholder: "Search doctors, departments, conditions, articles...",
    
    // Homepage Hero Section
    careThatFeelsLike: "Care That Feels Like",
    heroSubtitle: "Experience advanced medical, dental, and specialized healthcare with compassionate professionals dedicated to your family's well-being.",
    bookAppointmentNow: "Book Appointment Now",
    quickTriageAndServices: "Quick Triage & Services",
    seeAll: "See All",
    generalDentistry: "General Dentistry",
    dentalCare: "Dental Care",
    laboratory: "Laboratory",
    orthodontics: "Orthodontics",
    hijamaTherapy: "Hijama Therapy",

    // Live Metrics Bar
    specializedClinics: "Specialized Clinics",
    patientsHealed: "Patients Healed",
    sharjahLegacy: "Sharjah Legacy",
    licensedExperts: "Licensed Experts",

    // Departments & Doctors Sections
    specialties: "Specialties",
    comprehensiveMedicalCare: "Comprehensive Medical Care",
    viewAllDepartments: "View All Departments",
    exploreDepartment: "Explore Department",
    physicians: "Physicians",
    meetOurExpertSpecialists: "Meet Our Expert Specialists",
    browseAllDoctors: "Browse All Doctors",
    availableToday: "Available Today",
    viewProfileAndSlots: "View Profile & Slots",

    // Health Packages & Testimonials
    preventiveWellness: "Preventive Wellness",
    healthCheckupPackages: "Health Checkup Packages",
    healthPackagesSubtitle: "Invest in your health with our carefully curated preventive screening packages designed for all age groups.",
    mostPopular: "Most Popular",
    viewDetails: "View Details",
    testimonials: "Testimonials",
    trustedByOurPatientsOnGoogle: "Trusted By Our Patients on Google",
    testimonialsSubtitle: "Read real, verified reviews from families who experience our care firsthand.",
    verifiedGoogleReview: "Verified Google Review",

    // Insurance & Footer
    accessibility: "Accessibility & Insurance",
    convenientCareWithSeamlessInsurance: "Convenient Care with Seamless Insurance",
    insuranceSubtitle: "We partner with major insurance networks to ensure your medical visits are hassle-free and fully supported.",
    directBilling: "Direct Insurance Billing",
    directBillingDesc: "Instant approvals with major UAE insurance providers.",
    flexibleHours: "Flexible Operating Hours",
    flexibleHoursDesc: "Open all week to fit your busy family schedule.",
    acceptedInsurancePartners: "Accepted Insurance Partners",
    checkYourInsuranceCoverage: "Check Your Insurance Coverage",
    ctaBannerTitle: "Ready to Experience Better Healthcare?",
    ctaBannerSubtitle: "Book your appointment online or speak directly with our friendly reception team today.",
    quickLinks: "Quick Links",
    allRightsReserved: "All Rights Reserved"
  },
  ar: {
    // Navigation & Common
    home: "الرئيسية",
    departments: "الأقسام",
    doctors: "الأطباء",
    healthPackages: "الباقات الصحية",
    insurance: "التأمين",
    contact: "اتصل بنا",
    blog: "المدونة",
    about: "من نحن",
    emergency: "الطوارئ",
    bookAppointment: "حجز موعد",
    call: "اتصل",
    callClinicDirectly: "اتصل بالعيادة مباشرة",
    commercialMuwailah: "مويلح التجارية، الشارقة",
    openToday: "مفتوح اليوم",
    searchPlaceholder: "ابحث عن الأطباء، الأقسام، الحالات، المقالات...",
    
    // Homepage Hero Section
    careThatFeelsLike: "رعاية تشعرك وكأنك في",
    heroSubtitle: "اختبر الرعاية الطبية والسنية والتخصصية المتقدمة مع محترفين متعاطفين مكرسين لصحة عائلتك.",
    bookAppointmentNow: "احجز موعدك الآن",
    quickTriageAndServices: "الفرز السريع والخدمات",
    seeAll: "عرض الكل",
    generalDentistry: "طب الأسنان العام",
    dentalCare: "عناية بالأسنان",
    laboratory: "المختبر",
    orthodontics: "تقويم الأسنان",
    hijamaTherapy: "علاج الحجامة",

    // Live Metrics Bar
    specializedClinics: "عيادات متخصصة",
    patientsHealed: "مريض تم شفاؤه",
    sharjahLegacy: "سنوات في الشارقة",
    licensedExperts: "خبراء مرخصون",

    // Departments & Doctors Sections
    specialties: "التخصصات",
    comprehensiveMedicalCare: "رعاية طبية شاملة",
    viewAllDepartments: "عرض كافة الأقسام",
    exploreDepartment: "استكشف القسم",
    physicians: "الأطباء",
    meetOurExpertSpecialists: "تعرف على كبار الأخصائيين",
    browseAllDoctors: "تصفح كافة الأطباء",
    availableToday: "متاح اليوم",
    viewProfileAndSlots: "عرض الملف الشخصي والمواعيد",

    // Health Packages & Testimonials
    preventiveWellness: "العافية الوقائية",
    healthCheckupPackages: "باقات الفحص الطبي",
    healthPackagesSubtitle: "استثمر في صحتك مع باقات الفحص الوقائي المصممة بعناية لتناسب جميع الفئات العمرية.",
    mostPopular: "الأكثر طلباً",
    viewDetails: "عرض التفاصيل",
    testimonials: "آراء المرضى",
    trustedByOurPatientsOnGoogle: "موثوقون من مرضانا على جوجل",
    testimonialsSubtitle: "اقرأ تقييمات حقيقية وموثقة من العائلات التي تختبر رعايتنا بأنفسها.",
    verifiedGoogleReview: "تقييم جوجل موثق",

    // Insurance & Footer
    accessibility: "سهولة الوصول والتأمين",
    convenientCareWithSeamlessInsurance: "رعاية مريحة مع شبكة تأمين سلسة",
    insuranceSubtitle: "نتشارك مع كبرى شبكات التأمين لنضمن أن تكون زياراتك الطبية خالية من المتاعب ومدعومة بالكامل.",
    directBilling: "الفوترة المباشرة للتأمين",
    directBillingDesc: "موافقات فورية مع كبرى شركات التأمين في الإمارات.",
    flexibleHours: "ساعات عمل مرنة",
    flexibleHoursDesc: "مفتوح طوال الأسبوع ليناسب جدول عائلتك المزدحم.",
    acceptedInsurancePartners: "شركاء التأمين المعتمدون",
    checkYourInsuranceCoverage: "تحقق من تغطية تأمينك",
    ctaBannerTitle: "هل أنت مستعد لتجربة رعاية صحية أفضل?",
    ctaBannerSubtitle: "احجز موعدك عبر الإنترنت أو تحدث مباشرة مع فريق الاستقبال الودود اليوم.",
    quickLinks: "روابط سريعة",
    allRightsReserved: "جميع الحقوق محفوظة"
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const toggleLanguage = (newLang: Language) => {
    setLang(newLang);
  };

  const t = (key: string) => {
    return translations[lang][key] || translations["en"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}