'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  ShieldCheck, 
  ChevronRight, 
  TestTube2, 
  SmilePlus, 
  Activity, 
  HeartPulse, 
  User, 
  Send,
  MapPin,
  Clock,
  Stethoscope,
  Award,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();
  
  const [fullName, setFullName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [selectedService, setSelectedService] = useState('General Consultation');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const clinicPhone = '97165791444'; 
    const message = encodeURIComponent(
      `Hello Manha Medical Center, I would like to book an appointment.\n\n` +
      `*Name:* ${fullName}\n` +
      `*Phone:* ${contactNumber}\n` +
      `*Service:* ${selectedService}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/${clinicPhone}?text=${message}`, '_blank');
      setIsSubmitting(false);
      setFeedbackMessage('Redirecting securely to your dedicated concierge...');
      setTimeout(() => setFeedbackMessage(''), 5000);
    }, 400);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-[#2B5488] overflow-x-hidden selection:bg-[#00B4D8]/20 selection:text-[#2B5488] antialiased" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-24 pb-20 lg:pt-28 lg:pb-24 bg-gradient-to-b from-[#2B5488] via-[#1E3A60] to-[#2B5488]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
        
        {/* Soft Cyan Luminous Glow Accents */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#00B4D8]/15 rounded-full blur-[160px] pointer-events-none -z-10" />

        <div className="relative z-10 container-wide">
          <div className="mx-auto max-w-4xl text-center">
            
            {/* Signature Pill Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl text-white mb-6 shadow-2xl border border-white/20" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>
              <span className="h-2 w-2 rounded-full bg-[#00B4D8] animate-ping" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white">Commercial Muwailah, Sharjah • Open Today (9:00 AM - 10:30 PM)</span>
            </div>

            {/* Architectural Headline with Shining Gold Plated Metallic Text */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-balance leading-[1.08] drop-shadow-md" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>
              <span className="bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(212,175,55,0.4)] font-normal">
                Care That Feels Like
              </span>{' '}
              <span className="font-semibold bg-gradient-to-r from-[#BF953F] via-[#FBF5B7] to-[#AA771C] bg-clip-text text-transparent underline decoration-[#D4AF37] decoration-wavy underline-offset-8 drop-shadow-[0_2px_15px_rgba(212,175,55,0.4)]">
                Home
              </span>
            </h1>

            {/* Refined Subtitle */}
            <p className="mt-4 text-base sm:text-lg text-white/90 text-pretty leading-relaxed max-w-2xl mx-auto font-light tracking-wide drop-shadow" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>
              Experience advanced medical, dental, and specialized healthcare with compassionate professionals dedicated to your family's well-being.
            </p>

            {/* CONCIERGE WIDGET */}
            <div className="mt-8 max-w-2xl mx-auto" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>
              <form onSubmit={handleQuickSubmit} className="p-4 sm:p-5 rounded-[2.5rem] border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.3)] backdrop-blur-2xl flex flex-col gap-3.5 bg-white/95">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Name Input */}
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#2B5488]/40">
                      <User className="h-4 w-4 text-[#00B4D8]" />
                    </span>
                    <input 
                      type="text" 
                      required
                      placeholder="Your Full Name" 
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#F8FAFC] border border-[#2B5488]/10 text-sm font-medium text-[#2B5488] focus:outline-none focus:ring-2 focus:ring-[#00B4D8]/50 focus:bg-white transition-all shadow-sm placeholder:text-[#2B5488]/40"
                      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#2B5488]/40">
                      <Phone className="h-4 w-4 text-[#00B4D8]" />
                    </span>
                    <input 
                      type="tel" 
                      required
                      placeholder="Contact Number (+971...)" 
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#F8FAFC] border border-[#2B5488]/10 text-sm font-medium text-[#2B5488] focus:outline-none focus:ring-2 focus:ring-[#00B4D8]/50 focus:bg-white transition-all shadow-sm placeholder:text-[#2B5488]/40"
                      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}
                    />
                  </div>
                </div>

                {/* Service Selector & Submit Action */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#F8FAFC] border border-[#2B5488]/10 text-sm font-medium text-[#2B5488] focus:outline-none focus:ring-2 focus:ring-[#00B4D8]/50 focus:bg-white transition-all shadow-sm cursor-pointer appearance-none"
                      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}
                    >
                      <option value="General Consultation">General Consultation</option>
                      <option value="Advanced Dentistry">Advanced Dentistry</option>
                      <option value="Preventive Health Package">Preventive Health Package</option>
                      <option value="Orthodontic Care">Orthodontic Care</option>
                      <option value="Hijama Therapy">Hijama Therapy</option>
                    </select>
                    <span className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-[#2B5488]/40">
                      <ChevronRight className="h-4 w-4 rotate-90 text-[#00B4D8]" />
                    </span>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    size="lg" 
                    className="rounded-2xl h-auto py-3.5 px-8 text-xs font-semibold tracking-[0.15em] uppercase shadow-xl shadow-[#2B5488]/20 bg-[#2B5488] hover:bg-[#1E3A60] text-white shrink-0 transition-all duration-300 disabled:opacity-50"
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? 'Connecting...' : 'Secure Booking'} <Send className="h-4 w-4 text-[#00B4D8]" />
                    </span>
                  </Button>
                </div>
              </form>

              {/* Status & Reassurance Note */}
              {feedbackMessage ? (
                <p className="text-xs text-white mt-3 font-medium tracking-wide animate-pulse" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>
                  {feedbackMessage}
                </p>
              ) : (
                <p className="text-[11px] text-white mt-3 font-medium tracking-widest flex items-center justify-center gap-2 uppercase drop-shadow" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>
                  <ShieldCheck className="h-3.5 w-3.5 text-[#00B4D8]" /> Instant VIP WhatsApp connection
                </p>
              )}
            </div>

            {/* DIRECT CONCIERGE LINE */}
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white font-medium tracking-wide drop-shadow" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>
              <span>Prefer immediate telephone desk assistance?</span>
              <a href="tel:+97165791444" className="text-white font-bold hover:underline inline-flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-[#00B4D8]" /> +971 6 579 1444
              </a>
            </div>
          </div>

          {/* QUICK TRIAGE NAV GRID */}
          <div className="mt-10 mx-auto max-w-4xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>
            <div className="p-5 sm:p-6 rounded-[2.5rem] border border-white/20 shadow-2xl backdrop-blur-2xl bg-white/95">
              <div className="flex items-center justify-between px-2 mb-3">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#2B5488]">Quick Triage & Specialized Departments</h3>
                <Link href="/departments" className="text-xs font-semibold text-[#2B5488] inline-flex items-center gap-1 hover:opacity-85 transition-opacity">
                  See All <ChevronRight className="h-3 w-3 text-[#00B4D8]" />
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {[
                  { name: 'General Dentistry', slug: 'general-dentistry', icon: SmilePlus },
                  { name: 'Dental Care', slug: 'dental-care', icon: Sparkles },
                  { name: 'Laboratory', slug: 'laboratory-services', icon: TestTube2 },
                  { name: 'Orthodontics', slug: 'orthodontics', icon: Activity },
                  { name: 'Hijama Therapy', slug: 'hijama-therapy', icon: HeartPulse }
                ].map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <Link 
                      key={item.slug}
                      href={`/departments/${item.slug}`}
                      className="group flex flex-col items-center text-center p-3 rounded-2xl bg-[#F8FAFC] hover:bg-[#2B5488] hover:text-white border border-[#2B5488]/10 transition-all duration-300 shadow-sm"
                    >
                      <div className="h-9 w-9 rounded-xl bg-[#2B5488]/5 text-[#2B5488] group-hover:bg-white/10 group-hover:text-white flex items-center justify-center mb-1.5 transition-colors shadow-inner">
                        <ItemIcon className="h-4 w-4 text-[#00B4D8]" />
                      </div>
                      <span className="text-[11px] font-semibold tracking-tight text-[#2B5488] group-hover:text-white">{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </section>

     {/* 2. OUR EXPERT DOCTORS SECTION */}
      <section className="py-20 bg-white border-b border-[#2B5488]/10" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00B4D8] mb-3 block" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>Elite Medical Professionals</span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#2B5488] tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>Meet Our Expert Doctors</h2>
            </div>
            <div className="mt-4 md:mt-0">
              <Link 
                href="/doctors" 
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2B5488] hover:text-[#00B4D8] transition-colors"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}
              >
                View All Specialists <ChevronRight className="h-4 w-4 text-[#00B4D8]" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Dr. Sheha Beegum",
                specialty: "GP Dentist",
                qualification: "Bachelor of Dental Surgery (BDS)",
                experience: "8+ Years Experience"
              },
              {
                name: "Dr. Sharmeen Ishaque",
                specialty: "GP Dentist",
                qualification: "Bachelor of Dental Surgery (BDS)",
                experience: "8+ Years Experience"
              },
              {
                name: "Dr. Aiswarya Shajeev",
                specialty: "General Dentist",
                qualification: "Bachelor of Dental Surgery (BDS)",
                experience: "8+ Years Experience"
              }
            ].map((doc, idx) => (
              <div key={idx} className="group p-6 rounded-3xl bg-[#F8FAFC] border border-[#2B5488]/10 shadow-sm hover:shadow-xl hover:border-[#00B4D8]/50 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="h-16 w-16 rounded-2xl bg-[#2B5488]/10 text-[#2B5488] flex items-center justify-center mb-5 group-hover:bg-[#2B5488] group-hover:text-white transition-colors">
                    <Stethoscope className="h-8 w-8 text-[#00B4D8] group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2B5488] mb-1" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>{doc.name}</h3>
                  <p className="text-xs font-bold text-[#00B4D8] uppercase tracking-wider mb-3" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>{doc.specialty}</p>
                  <p className="text-xs text-[#2B5488]/70 mb-2" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>{doc.qualification}</p>
                  <p className="text-xs font-semibold text-[#2B5488]/80 mb-6" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>{doc.experience}</p>
                </div>
                <Link 
                  href="/doctors"
                  className="w-full py-3 rounded-xl bg-white border border-[#2B5488]/20 text-[#2B5488] group-hover:bg-[#2B5488] group-hover:text-white text-xs font-semibold uppercase tracking-wider text-center transition-all shadow-sm"
                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}
                >
                  Book Consultation
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STATS & ACCREDITATIONS BAND */}
      <section className="py-12 bg-[#F8FAFC] border-b border-[#2B5488]/10" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-bold text-[#2B5488] mb-1" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>10+</div>
              <p className="text-xs font-semibold text-[#2B5488]/70 uppercase tracking-widest" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>Expert Specialists</p>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-bold text-[#2B5488] mb-1" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>10,000+</div>
              <p className="text-xs font-semibold text-[#2B5488]/70 uppercase tracking-widest" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>Happy Patients</p>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-bold text-[#2B5488] mb-1" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>100%</div>
              <p className="text-xs font-semibold text-[#2B5488]/70 uppercase tracking-widest" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>Insurance Acceptance</p>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-bold text-[#2B5488] mb-1" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>24/7</div>
              <p className="text-xs font-semibold text-[#2B5488]/70 uppercase tracking-widest" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}> Care Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLINICAL DEPARTMENTS DIRECTORY */}
      <section className="py-20 bg-white" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00B4D8] mb-3 block" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>Comprehensive Medical Excellence</span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#2B5488] tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>Our Specialized Departments</h2>
            <p className="mt-3 text-sm text-[#2B5488]/70 leading-relaxed" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>
              Equipped with state-of-the-art diagnostic technology and staffed by leading practitioners in Sharjah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "General & Advanced Dentistry",
                description: "Complete dental care including root canals, cosmetic veneers, crowns, and pediatric dental hygiene.",
                icon: SmilePlus,
                slug: "general-dentistry"
              },
              {
                title: "Orthodontics & Facial Aesthetics",
                description: "Advanced alignment treatments with metal braces, ceramic brackets, and invisible clear aligners.",
                icon: Activity,
                slug: "orthodontics"
              },
              {
                title: "Diagnostic Laboratory",
                description: "Precise pathology and blood testing services with rapid digital results reporting.",
                icon: TestTube2,
                slug: "laboratory-services"
              },
              {
                title: "Traditional Hijama Therapy",
                description: "Certified therapeutic wet cupping sessions performed under strict sterile clinical guidelines.",
                icon: HeartPulse,
                slug: "hijama-therapy"
              },
              {
                title: "General Medicine & Pediatrics",
                description: "Comprehensive acute and chronic care management for patients of all ages, ensuring holistic family wellness.",
                icon: Stethoscope,
                slug: "general-medicine"
              },
              {
                title: "Preventive Health Packages",
                description: "Tailored wellness checkup profiles designed for early detection, vital tracking, and nutritional guidance.",
                icon: Award,
                slug: "health-packages"
              }
            ].map((dept, index) => {
              const DeptIcon = dept.icon;
              return (
                <div key={index} className="group p-8 rounded-3xl bg-[#F8FAFC] border border-[#2B5488]/10 shadow-sm hover:shadow-xl hover:border-[#00B4D8]/50 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-[#2B5488]/5 text-[#2B5488] group-hover:bg-[#2B5488] group-hover:text-white flex items-center justify-center mb-6 transition-colors shadow-inner">
                      <DeptIcon className="h-6 w-6 text-[#00B4D8] group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#2B5488] mb-3" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>{dept.title}</h3>
                    <p className="text-sm text-[#2B5488]/70 leading-relaxed mb-6" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>{dept.description}</p>
                  </div>
                  <Link 
                    href={`/departments/${dept.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2B5488] group-hover:text-[#00B4D8] transition-colors"
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}
                  >
                    Explore Department <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. INSURANCE PARTNERS */}
      <section className="py-16 bg-[#F8FAFC] border-y border-[#2B5488]/10" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00B4D8] mb-2 block" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>Seamless Billing</span>
            <h3 className="text-2xl font-light text-[#2B5488]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>Accepted Insurance Providers</h3>
            <p className="text-xs text-[#2B5488]/70 mt-2" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>We partner with leading regional insurance networks for direct cashless claims processing.</p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {[ 'Nextcare', 'NAS', 'Neuron', 'Ecare', 'E-Claims', 'Riayati', 'SAICO', 'Inayah', 'NGI','Lifeline', 'Fmc'].map((insurer, i) => (
              <div key={i} className="px-5 py-3 rounded-2xl bg-white border border-[#2B5488]/10 text-xs font-semibold text-[#2B5488] shadow-sm" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>
                {insurer}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LOCATION & CONTACT INFO */}
      <section className="py-20 bg-white" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00B4D8] mb-3 block" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>Visit Our Facility</span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#2B5488] tracking-tight mb-6" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>Conveniently Located in Commercial Muwailah</h2>
              <p className="text-sm text-[#2B5488]/70 leading-relaxed mb-8" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>
                Manha Medical Center is easily accessible with ample parking available on site. Drop by our reception desk or connect with our patient support staff anytime.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-[#2B5488]/10 shadow-sm">
                  <div className="h-10 w-10 rounded-xl bg-[#2B5488]/5 text-[#2B5488] flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-[#00B4D8]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#2B5488]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>Location Address</h4>
                    <p className="text-xs text-[#2B5488]/70 mt-1" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>Commercial Muwailah, Sharjah, United Arab Emirates</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-[#2B5488]/10 shadow-sm">
                  <div className="h-10 w-10 rounded-xl bg-[#2B5488]/5 text-[#2B5488] flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-[#00B4D8]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#2B5488]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>Working Hours</h4>
                    <p className="text-xs text-[#2B5488]/70 mt-1" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>Saturday to Thursday: 9:00 AM – 10:30 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-[#2B5488]/10 shadow-sm">
                  <div className="h-10 w-10 rounded-xl bg-[#2B5488]/5 text-[#2B5488] flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-[#00B4D8]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#2B5488]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>Direct Contact Lines</h4>
                    <p className="text-xs text-[#2B5488]/70 mt-1" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>Phone: +971 6 579 1444 | Mobile: +971 6 555 0123</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-[#2B5488] text-white shadow-2xl relative overflow-hidden" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#00B4D8]/20 rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-2xl font-semibold mb-4 relative z-10" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>Request a Callback</h3>
              <p className="text-sm text-white/80 mb-6 relative z-10" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>Leave your contact details and our medical coordinator will call you back within minutes to confirm your appointment slot.</p>
              
              <form onSubmit={handleQuickSubmit} className="space-y-4 relative z-10">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Enter your name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>Contact Number</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+971 XX XXX XXXX"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full py-4 rounded-xl bg-[#00B4D8] hover:bg-[#0096B4] text-white font-semibold uppercase tracking-wider text-xs shadow-lg transition-all"
                >
                  Submit Callback Request
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}