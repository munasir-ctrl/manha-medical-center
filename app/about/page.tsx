import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { CtaBanner } from '@/components/cta-banner';
import { siteConfig } from '@/lib/site';
import { breadcrumbSchema } from '@/lib/schema';
import { Award, HeartPulse, Users, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Manha Medical Center',
  description: 'Learn about Manha Medical Center — a premium multidisciplinary medical center in Sharjah, UAE, serving families with compassionate, world-class care for over 18 years.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }]} />
      
      <section className="relative section-pad bg-radial-gradient">
        {/* Background decorative grid */}
        <div className="absolute inset-0 bg-grid-pattern/30 pointer-events-none" />

        <div className="relative z-10 container-wide max-w-4xl">
          {/* Section Header */}
          <div className="text-center sm:text-left mb-12">
            <span className="inline-block px-3.5 py-1.5 text-xs font-semibold rounded-full bg-primary-soft text-primary mb-4">
              Our Story & Heritage
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground text-balance">
              About <span className="text-gradient">Manha Medical Center</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-muted-foreground text-pretty">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Hero Image with Glass Border Frame */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl glass p-2 shadow-2xl card-hover mb-12">
            <img 
              src="/manha-hero.jpg" 
              alt="Manha Medical Center interior" 
              className="h-full w-full object-cover rounded-2xl" 
            />
          </div>

          {/* Main Content Paragraphs */}
          <div className="glass p-8 sm:p-12 rounded-3xl border border-border/80 shadow-xl space-y-6 text-base sm:text-lg text-muted-foreground text-pretty mb-12">
            <p className="leading-relaxed">
              At Wellcare Medical Center, compassionate care and advanced medical expertise come together to provide you and your family with exceptional healthcare services. Since our founding in 2023, we have remained committed to our mission of serving the community with high-quality, patient-centered care.
            </p>
            <p className="leading-relaxed">
              Our dedicated team of skilled physicians, nurses, and support staff brings extensive experience to meet a wide range of healthcare needs. From general practitioners and dentists to specialists in pediatrics, gynecology, and orthodontics, we are here to deliver personalized, comprehensive care tailored to each patient.
            </p>
            <p className="leading-relaxed">
              Our state-of-the-art facility is designed with your comfort and safety in mind, equipped with the latest technology to support precise diagnoses and effective treatments. At Wellcare, every patient is treated with respect and compassion, ensuring a welcoming and supportive environment.
            </p>
          </div>

          {/* Stats Grid with Hover Effects */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {[
              { icon: Users, value: '10+', label: 'Specialist Doctors' },
              { icon: Award, value: '3+', label: 'Years of Care' },
              { icon: HeartPulse, value: '10k+', label: 'Patients Served' },
              { icon: ShieldCheck, value: '20+', label: 'Insurance Partners' },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl glass p-6 text-center card-hover border border-border/80">
                <div className="inline-flex p-3 rounded-xl bg-primary-soft text-primary mb-3">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="font-display text-3xl font-bold text-foreground">{s.value}</div>
                <div className="text-sm text-muted-foreground font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Core Values Section */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-8 text-center sm:text-left">
              Our core values
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { 
                  title: 'Compassion first', 
                  desc: 'Every patient is treated with dignity, empathy, and genuine care — never as a number.' 
                },
                { 
                  title: 'Clinical excellence', 
                  desc: 'Our doctors hold international qualifications and continuously update their skills with the latest evidence-based medicine.' 
                },
                { 
                  title: 'Accessible care', 
                  desc: 'We accept all major insurance, offer transparent pricing, and are open 7 days a week with extended hours.' 
                },
                { 
                  title: 'Family-centered', 
                  desc: 'From newborns to seniors, we care for your whole family under one roof with continuity and trust.' 
                },
              ].map((value) => (
                <div key={value.title} className="rounded-2xl glass p-6 card-hover border border-border/80 flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-if-needed mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />

      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }])) }} 
      />
    </div>
  );
}