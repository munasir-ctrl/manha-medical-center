import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Check, ArrowRight, Calendar, Phone, Activity, Stethoscope, Microscope, HelpCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { departments, getDepartment } from '@/lib/departments';
import { getDoctorsByDepartment } from '@/lib/doctors';
import { getRelatedArticles } from '@/lib/blog';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { CtaBanner } from '@/components/cta-banner';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { medicalSpecialtySchema, faqSchema, breadcrumbSchema } from '@/lib/schema';

export function generateStaticParams() {
  return departments.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const dept = getDepartment(params.slug);
  if (!dept) return {};
  return {
    title: `${dept.name} in Sharjah`,
    description: dept.description,
    alternates: { canonical: `/departments/${dept.slug}` },
    openGraph: { title: `${dept.name} | Manha Medical Center`, description: dept.description, images: [dept.image] },
  };
}

export default function DepartmentPage({ params }: { params: { slug: string } }) {
  const dept = getDepartment(params.slug);
  if (!dept) notFound();

  const docs = getDoctorsByDepartment(dept.slug);
  const related = getRelatedArticles(dept.slug);

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Departments', url: '/departments' }, { name: dept.shortName, url: `/departments/${dept.slug}` }]} />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-radial-gradient">
        <div className="absolute inset-0 bg-grid-pattern/30 pointer-events-none" />
        
        <div className="relative z-10 container-wide grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-primary-soft text-primary mb-4">
              <Sparkles className="h-3.5 w-3.5" /> {dept.tagline}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground text-balance">
              {dept.name}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">
              {dept.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-xl shadow-lg shadow-primary/25">
                <Link href="/book" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" /> Book Appointment
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl">
                <a href="tel:+97165550123" className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" /> Call Now
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl glass p-2 shadow-2xl card-hover">
            <img src={dept.image} alt={dept.name} className="h-full w-full object-cover rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-pad">
        <div className="container-wide max-w-4xl">
          <div className="glass p-8 sm:p-12 rounded-3xl border border-border/80 shadow-xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-6">
              About our {dept.shortName.toLowerCase()} department
            </h2>
            <div className="space-y-4 text-muted-foreground text-base sm:text-lg text-pretty leading-relaxed">
              {dept.longDescription.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms & Treatments Grid */}
      <section className="relative py-20 bg-secondary/30 border-y border-border/50">
        <div className="container-wide grid gap-8 lg:grid-cols-2">
          {/* When to see us */}
          <div className="glass p-8 sm:p-10 rounded-3xl border border-border/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-primary-soft text-primary">
                  <Activity className="h-6 w-6" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">When to see us</h2>
              </div>
              <p className="text-muted-foreground mb-6">Common symptoms and situations we treat in our clinic:</p>
              <ul className="space-y-3.5">
                {dept.symptoms.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-success" />
                    <span className="text-muted-foreground text-base">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Treatments we offer */}
          <div className="glass p-8 sm:p-10 rounded-3xl border border-border/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-primary-soft text-primary">
                  <Stethoscope className="h-6 w-6" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">Treatments we offer</h2>
              </div>
              <p className="text-muted-foreground mb-6">Our comprehensive treatment options tailored for you:</p>
              <div className="space-y-4">
                {dept.treatments.map((t) => (
                  <div key={t.name} className="rounded-2xl border border-border/60 bg-background/50 p-5">
                    <h3 className="font-semibold text-foreground text-base mb-1">{t.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procedures & Technology */}
      <section className="section-pad">
        <div className="container-wide grid gap-8 lg:grid-cols-2">
          {/* Procedures */}
          <div className="glass p-8 sm:p-10 rounded-3xl border border-border/80">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-primary-soft text-primary">
                <Microscope className="h-6 w-6" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">Procedures</h2>
            </div>
            <div className="space-y-4">
              {dept.procedures.map((p) => (
                <div key={p.name} className="rounded-2xl border border-border/60 bg-background/50 p-5">
                  <h3 className="font-semibold text-foreground text-base mb-1">{p.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology */}
          <div className="glass p-8 sm:p-10 rounded-3xl border border-border/80">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-primary-soft text-primary">
                <Microscope className="h-6 w-6" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">Technology</h2>
            </div>
            <div className="space-y-4">
              {dept.technology.map((t) => (
                <div key={t.name} className="rounded-2xl border border-border/60 bg-background/50 p-5">
                  <h3 className="font-semibold text-foreground text-base mb-1">{t.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctors */}
      {docs.length > 0 && (
        <section className="py-20 bg-secondary/30 border-y border-border/50">
          <div className="container-wide">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-8">
              Our {dept.shortName.toLowerCase()} specialists
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {docs.map((doc) => (
                <Link key={doc.slug} href={`/doctors/${doc.slug}`} className="group block">
                  <div className="card-hover overflow-hidden rounded-3xl glass border border-border/80 flex flex-col h-full">
                    <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                      <img src={doc.image} alt={doc.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">{doc.name}</h3>
                      <p className="text-sm text-muted-foreground font-medium mt-1">{doc.title}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Insurance Accepted */}
      <section className="py-16">
        <div className="container-wide">
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground mb-6 flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-primary" /> Insurance accepted for {dept.shortName}
          </h2>
          <div className="flex flex-wrap gap-3">
            {dept.insuranceAccepted.map((ins) => (
              <span key={ins} className="rounded-xl glass px-5 py-2.5 text-sm font-medium border border-border/80 text-foreground shadow-sm">
                {ins}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-secondary/30 border-t border-border/50">
        <div className="container-wide max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-2xl bg-primary-soft text-primary">
              <HelpCircle className="h-6 w-6" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Frequently asked questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {dept.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl glass border border-border/80 px-5 overflow-hidden">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="section-pad">
          <div className="container-wide">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-8">
              Related health articles
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {related.map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`} className="group block">
                  <article className="card-hover overflow-hidden rounded-3xl glass border border-border/80 flex flex-col h-full">
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                      <img src={article.image} alt={article.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-display text-lg font-bold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors mb-3">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed flex-grow">
                        {article.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner title={`Book your ${dept.shortName.toLowerCase()} appointment`} subtitle="Our specialists are ready to help you feel your best." />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSpecialtySchema(dept)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(dept.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Departments', url: '/departments' }, { name: dept.shortName, url: `/departments/${dept.slug}` }])) }} />
    </div>
  );
}