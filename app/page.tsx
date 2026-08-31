'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, 
  Phone, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  HeartPulse, 
  Stethoscope, 
  CheckCircle2,
  Clock,
  Activity,
  ChevronRight,
  TestTube2,
  SmilePlus,
  Star,
  CheckCircle,
  User,
  Send,
  Crown,
  Gem,
  Award,
  ShieldAlert,
  Check
} from 'lucide-react';
import * as Icons from 'lucide-react';
import { departments } from '@/lib/departments';
import { doctors } from '@/lib/doctors';
import { healthPackages } from '@/lib/content';
import { siteConfig } from '@/lib/site';
import { Button } from '@/components/ui/button';
import { CtaBanner } from '@/components/cta-banner';
import { breadcrumbSchema } from '@/lib/schema';
import { useLanguage } from '@/context/LanguageContext';

const googleReviews = [
  {
    name: 'Ram Nathan',
    time: '1 year ago',
    review: 'Exceptional Experience at Manha Medical Centre! I recently visited Manha Medical...',
    initial: 'R',
    color: 'bg-amber-500'
  },
  {
    name: 'Muhammad Ramzan',
    time: '1 year ago',
    review: 'Everything is perfect and smooth. I recommend Dr. Sheha as she is very gentle and patient. The receptionists are very helpful as...',
    initial: 'M',
    color: 'bg-stone-800'
  },
  {
    name: 'Mohamed Rishlam U...',
    time: '1 year ago',
    review: 'We recently visited pedestrian Dr.Faiza Rizwan, Good Doctor ,Staffs & Ambient also good..reasonable fee also...',
    initial: 'M',
    color: 'bg-amber-600'
  },
  {
    name: 'Wazhma Shireen',
    time: '1 year ago',
    review: 'Thank you dr sharmeen for treating me well',
    initial: 'W',
    color: 'bg-yellow-500'
  }
];

export default function HomePage() {
  const { t } = useLanguage();
  
  // Form State Management with Clean UX feedback
  const [fullName, setFullName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [selectedService, setSelectedService] = useState('General Consultation');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const clinicPhone = '97165791444'; // Verified UAE Clinic WhatsApp line
    const message = encodeURIComponent(
      `✨ *Elite Priority Booking Request* ✨\n\n` +
      `Hello Manha Medical Center Concierge,\n` +
      `I wish to secure a priority private consultation.\n\n` +
      `👤 *Full Name:* ${fullName}\n` +
      `📞 *Contact Number:* ${contactNumber}\n` +
      `🩺 *Inquiry / Service:* ${selectedService}\n\n` +
      `Please coordinate my appointment at your earliest convenience.`
    );

    // Simulate elite transition delay for ultra-smooth polish
    setTimeout(() => {
      window.open(`https://wa.me/${clinicPhone}?text=${message}`, '_blank');
      setIsSubmitting(false);
      setFeedbackMessage('Redirecting securely to your dedicated concierge...');
      setTimeout(() => setFeedbackMessage(''), 5000);
    }, 400);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-700 antialiased">
      
      {/* 1. ULTRA-LUXURY ARCHITECTURAL HERO SECTION */}
      <section 
        className="relative overflow-hidden pt-40 pb-36 lg:pt-56 lg:pb-60 bg-zinc-950 text-white bg-cover bg-center"
        style={{ backgroundImage: 'url(/manha-hero.jpg)' }}
      >
        
        {/* Cinematic Dark Gradient Overlays for Luxury Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/70 to-zinc-950 pointer-events-none" />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        
        {/* Warm Champagne Light Leak */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Sophisticated Ambient Champagne Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-amber-400/10 via-yellow-500/5 to-transparent blur-[160px] rounded-full pointer-events-none -z-10" />

        <div className="relative z-10 container-wide">
          <div className="mx-auto max-w-4xl text-center">
            
            {/* Exquisite Platinum Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-zinc-900/90 backdrop-blur-3xl text-amber-300 mb-10 shadow-2xl border border-amber-400/30">
              <Gem className="h-4 w-4 text-amber-400 animate-pulse" />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase">{t('commercialMuwailah')} • {t('openToday')}</span>
            </div>

            {/* Architectural Headline with Editorial Tracking */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-balance leading-[1.1]">
              {t('careThatFeelsLike')} <span className="font-semibold bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent">{t('home')}</span>
            </h1>

            {/* Refined Subtitle */}
            <p className="mt-8 text-lg sm:text-xl text-zinc-400 text-pretty leading-relaxed max-w-2xl mx-auto font-light tracking-wide">
              {t('heroSubtitle')}
            </p>

            {/* ULTRA-LUXURY FRICTIONLESS CONCIERGE WIDGET */}
            <div className="mt-14 max-w-2xl mx-auto">
              <form onSubmit={handleQuickSubmit} className="p-4 sm:p-6 rounded-[2.5rem] border border-amber-400/30 shadow-[0_0_60px_-15px_rgba(245,158,11,0.15)] backdrop-blur-3xl flex flex-col gap-4 bg-zinc-900/80">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Name Input */}
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
                      <User className="h-4 w-4 text-amber-400" />
                    </span>
                    <input 
                      type="text" 
                      required
                      placeholder="Your Full Name" 
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-11 pr-4 py-4 rounded-2xl bg-zinc-950/60 border border-zinc-800 text-sm font-medium text-white focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all shadow-inner placeholder:text-zinc-600"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
                      <Phone className="h-4 w-4 text-amber-400" />
                    </span>
                    <input 
                      type="tel" 
                      required
                      placeholder="Contact Number (+971...)" 
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      className="w-full pl-11 pr-4 py-4 rounded-2xl bg-zinc-950/60 border border-zinc-800 text-sm font-medium text-white focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all shadow-inner placeholder:text-zinc-600"
                    />
                  </div>
                </div>

                {/* Service Selector & Submit Action */}
                <div className="flex flex-col sm:flex-row gap-3.5">
                  <div className="relative flex-1">
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-4 rounded-2xl bg-zinc-950/60 border border-zinc-800 text-sm font-medium text-white focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all shadow-inner cursor-pointer appearance-none"
                    >
                      <option value="General Consultation" className="bg-zinc-900">General Consultation</option>
                      <option value="Advanced Dentistry" className="bg-zinc-900">Advanced Dentistry</option>
                      <option value="Preventive Health Package" className="bg-zinc-900">Preventive Health Package</option>
                      <option value="Orthodontic Care" className="bg-zinc-900">Orthodontic Care</option>
                      <option value="Hijama Therapy" className="bg-zinc-900">Hijama Therapy</option>
                    </select>
                    <span className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-zinc-500">
                      <ChevronRight className="h-4 w-4 rotate-90 text-amber-400" />
                    </span>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    size="lg" 
                    className="rounded-2xl h-auto py-4 px-8 text-xs font-bold tracking-[0.2em] uppercase shadow-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 hover:opacity-95 text-zinc-950 shrink-0 transition-all duration-300 disabled:opacity-50"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? 'Connecting...' : 'Secure Booking'} <Send className="h-4 w-4" />
                    </span>
                  </Button>
                </div>
              </form>

              {/* Status & Reassurance Note */}
              {feedbackMessage ? (
                <p className="text-xs text-amber-400 mt-4 font-medium tracking-wide animate-pulse">
                  {feedbackMessage}
                </p>
              ) : (
                <p className="text-[11px] text-zinc-400 mt-4 font-light tracking-widest flex items-center justify-center gap-2 uppercase">
                  <ShieldCheck className="h-3.5 w-3.5 text-amber-400" /> Instant VIP WhatsApp connection • Direct physician routing
                </p>
              )}
            </div>

            {/* DIRECT CONCIERGE LINE */}
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-zinc-300 font-medium tracking-wide">
              <span>Prefer immediate telephone desk assistance?</span>
              <a href="tel:+97165791444" className="text-amber-400 font-bold hover:underline inline-flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5" /> +971 6 579 1444
              </a>
            </div>
          </div>

          {/* 1.5 PLATINUM QUICK TRIAGE NAV GRID */}
          <div className="mt-16 mx-auto max-w-4xl">
            <div className="glass p-6 sm:p-8 rounded-[2.5rem] border border-amber-500/30 shadow-2xl backdrop-blur-3xl bg-background/50">
              <div className="flex items-center justify-between px-2 mb-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">{t('quickTriageAndServices')}</h3>
                <Link href="/departments" className="text-xs font-semibold text-amber-600 dark:text-amber-400 inline-flex items-center gap-1 hover:opacity-80 transition-opacity">
                  {t('seeAll')} <ChevronRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5">
                {[
                  { name: t('generalDentistry'), slug: 'general-dentistry', icon: SmilePlus },
                  { name: t('dentalCare'), slug: 'dental-care', icon: Sparkles },
                  { name: t('laboratory'), slug: 'laboratory-services', icon: TestTube2 },
                  { name: t('orthodontics'), slug: 'orthodontics', icon: Activity },
                  { name: t('hijamaTherapy'), slug: 'hijama-therapy', icon: HeartPulse }
                ].map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <Link 
                      key={item.slug}
                      href={`/departments/${item.slug}`}
                      className="group flex flex-col items-center text-center p-4 rounded-3xl bg-secondary/40 hover:bg-gradient-to-br hover:from-amber-500 hover:to-yellow-600 hover:text-white border border-border/60 transition-all duration-300 card-hover shadow-sm"
                    >
                      <div className="h-12 w-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 group-hover:bg-white/20 group-hover:text-white flex items-center justify-center mb-2.5 transition-colors shadow-inner">
                        <ItemIcon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-semibold tracking-tight">{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. LIVE METRICS BAR */}
      <section className="border-y border-amber-500/25 bg-card/40 py-10 backdrop-blur-xl">
        <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">20+</div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{t('specializedClinics')}</div>
          </div>
          <div className="space-y-1">
            <div className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">15k+</div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{t('patientsHealed')}</div>
          </div>
          <div className="space-y-1">
            <div className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">10+ Years</div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{t('sharjahLegacy')}</div>
          </div>
          <div className="space-y-1">
            <div className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">100%</div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{t('licensedExperts')}</div>
          </div>
        </div>
      </section>

      {/* 3. DEPARTMENTS SECTION */}
      <section className="section-pad bg-secondary/15">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2 block">{t('specialties')}</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                {t('comprehensiveMedicalCare')}
              </h2>
            </div>
            <Button asChild variant="outline" className="rounded-full self-start md:self-auto border-amber-500/30 glass text-xs font-semibold hover:bg-amber-500/10">
              <Link href="/departments" className="flex items-center gap-1.5">
                {t('viewAllDepartments')} <ArrowRight className="h-3.5 w-3.5 text-amber-500" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departments.slice(0, 6).map((dept) => {
              const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[dept.icon] || Stethoscope;
              return (
                <Link key={dept.slug} href={`/departments/${dept.slug}`} className="group block h-full">
                  <div className="card-hover h-full overflow-hidden rounded-[2.5rem] glass p-8 border border-amber-500/20 flex flex-col justify-between shadow-xl bg-background/60">
                    <div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-yellow-600 group-hover:text-white mb-6 shadow-sm">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-display text-xl font-bold tracking-tight text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors mb-3">
                        {dept.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed font-light">
                        {dept.description}
                      </p>
                    </div>
                    <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-amber-600 dark:text-amber-400">
                      <span>{t('exploreDepartment')}</span>
                      <div className="h-8 w-8 rounded-full bg-amber-500/10 flex items-center justify-center transition-transform group-hover:translate-x-1">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FEATURED DOCTORS */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2 block">{t('physicians')}</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                {t('meetOurExpertSpecialists')}
              </h2>
            </div>
            <Button asChild variant="outline" className="rounded-full self-start md:self-auto border-amber-500/30 glass text-xs font-semibold hover:bg-amber-500/10">
              <Link href="/doctors" className="flex items-center gap-1.5">
                {t('browseAllDoctors')} <ArrowRight className="h-3.5 w-3.5 text-amber-500" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.slice(0, 4).map((doc) => {
              const dept = departments.find((d) => d.slug === doc.departmentSlug);
              return (
                <Link key={doc.slug} href={`/doctors/${doc.slug}`} className="group block">
                  <div className="card-hover overflow-hidden rounded-[2.5rem] glass border border-amber-500/20 flex flex-col h-full shadow-xl bg-background/60">
                    <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                      <img src={doc.image} alt={doc.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                      
                      <div className="absolute top-4 right-4 bg-background/85 backdrop-blur-xl px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-foreground shadow-md flex items-center gap-1.5 border border-amber-500/30">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" /> {t('availableToday')}
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="font-display text-lg font-bold tracking-tight leading-snug">{doc.name}</h3>
                        <p className="text-xs text-amber-200/90 font-medium mt-1">{doc.title}</p>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow justify-between bg-card/20">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                        {dept?.shortName}
                      </div>
                      <div className="pt-4 mt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-amber-600 dark:text-amber-400">
                        <span>{t('viewProfileAndSlots')}</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. HEALTH PACKAGES */}
      <section className="section-pad bg-secondary/15 border-y border-amber-500/20">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2 block">{t('preventiveWellness')}</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              {t('healthCheckupPackages')}
            </h2>
            <p className="mt-3 text-base text-muted-foreground text-pretty font-light">
              {t('healthPackagesSubtitle')}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
            {healthPackages.map((pkg) => (
              <div 
                key={pkg.slug} 
                className={`relative flex flex-col rounded-[2.5rem] glass p-8 card-hover border transition-all duration-300 ${
                  pkg.popular ? 'border-amber-500 shadow-2xl shadow-amber-500/15 ring-2 ring-amber-500/20 bg-background/95' : 'border-amber-500/20'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 px-4 py-1 text-[11px] font-bold text-white shadow-lg flex items-center gap-1.5 uppercase tracking-wider">
                    <Crown className="h-3.5 w-3.5" /> {t('mostPopular')}
                  </div>
                )}
                
                <div className="flex-1 flex flex-col">
                  <h3 className="font-display text-xl font-bold tracking-tight text-foreground mb-2">{pkg.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6 font-light">{pkg.description}</p>
                  
                  <div className="flex items-baseline gap-2.5 mb-6 pt-4 border-t border-border/60">
                    <span className="font-display text-3xl font-bold tracking-tight bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">AED {pkg.price}</span>
                    {pkg.originalPrice && <span className="text-xs text-muted-foreground line-through font-medium">AED {pkg.originalPrice}</span>}
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-xs">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                        <span className="text-muted-foreground leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href={`/health-packages#${pkg.slug}`} 
                  className="mt-auto flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-600 px-5 py-3.5 text-xs font-semibold text-white shadow-lg transition-all hover:opacity-95 active:scale-95"
                >
                  {t('viewDetails')} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERIFIED GOOGLE REVIEWS INFINITE ANIMATED MARQUEE SECTION */}
      <section className="section-pad bg-secondary/10 border-t border-amber-500/20 overflow-hidden">
        <div className="container-wide mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2 block">{t('testimonials')}</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {t('trustedByOurPatientsOnGoogle')}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground font-light">
            {t('testimonialsSubtitle')}
          </p>
        </div>

        {/* Infinite Marquee Wrapper with Smooth Gradient Fade Edges */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="absolute left-0 inset-y-0 w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Moving Track */}
          <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
            {[...googleReviews, ...googleReviews, ...googleReviews].map((item, index) => (
              <div 
                key={index} 
                className="w-[340px] sm:w-[400px] glass p-7 rounded-[2.5rem] border border-amber-500/20 shadow-xl flex flex-col justify-between shrink-0 card-hover relative bg-background/60"
              >
                <div>
                  {/* Header with Avatar & Google Logo */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className={`h-12 w-12 rounded-full ${item.color} text-white font-bold flex items-center justify-center text-base shadow-md`}>
                        {item.initial}
                      </div>
                      <div>
                        <div className="font-display font-bold text-sm text-foreground leading-tight flex items-center gap-1.5">
                          {item.name}
                          <CheckCircle className="h-3.5 w-3.5 text-amber-500 fill-amber-500/20" />
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">{item.time}</div>
                      </div>
                    </div>
                    {/* Google "G" Icon Badge */}
                    <div className="h-8 w-8 rounded-full bg-white shadow-md border border-border/40 flex items-center justify-center shrink-0">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.19v3.15C3.17 21.32 7.24 24 12 24z"/>
                        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.19C.43 8.12 0 9.87 0 12s.43 3.88 1.19 5.42l4.09-3.15z"/>
                        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.24 0 3.17 2.68 1.19 6.58l4.09 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-3 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500" />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 font-light">
                    {item.review}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-border/50 text-[11px] font-bold tracking-wider uppercase text-amber-600 dark:text-amber-400">
                  {t('verifiedGoogleReview')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INSURANCE & LOCATION INFO */}
      <section className="section-pad">
        <div className="container-wide grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2 block">{t('accessibility')}</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-5">
              {t('convenientCareWithSeamlessInsurance')}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 font-light">
              {t('insuranceSubtitle')}
            </p>

            <div className="grid gap-4 grid-cols-1">
              <div className="glass p-5 rounded-2xl border border-amber-500/20 flex items-center gap-4 bg-background/60">
                <div className="flex-shrink-0 p-3 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs tracking-tight text-foreground">{t('directBilling')}</h4>
                  <p className="text-[11px] text-muted-foreground mt-0.5 font-light">{t('directBillingDesc')}</p>
                </div>
              </div>
              <div className="glass p-5 rounded-2xl border border-amber-500/20 flex items-center gap-4 bg-background/60">
                <div className="flex-shrink-0 p-3 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs tracking-tight text-foreground">{t('flexibleHours')}</h4>
                  <p className="text-[11px] text-muted-foreground mt-0.5 font-light">{t('flexibleHoursDesc')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 sm:p-10 rounded-[2.5rem] border border-amber-500/30 shadow-2xl backdrop-blur-3xl bg-background/60">
            <h3 className="font-display text-xl font-bold tracking-tight text-foreground mb-6">{t('acceptedInsurancePartners')}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {siteConfig.insurance.slice(0, 6).map((ins) => (
                <div key={ins} className="rounded-xl bg-secondary/40 border border-amber-500/20 p-3 text-center text-xs font-semibold text-foreground">
                  {ins}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}