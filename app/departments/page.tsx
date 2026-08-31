import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sparkles, Stethoscope } from 'lucide-react';
import * as Icons from 'lucide-react';
import { departments } from '@/lib/departments';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { CtaBanner } from '@/components/cta-banner';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Departments & Specialties',
  description:
    'Explore our 20+ medical departments at Manha Medical Center in Sharjah — family medicine, pediatrics, dentistry, women’s health, orthopedics, and more.',
  alternates: { canonical: '/departments' },
};

export default function DepartmentsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Departments', url: '/departments' }]} />
      
      <section className="relative section-pad bg-radial-gradient">
        {/* Background decorative grid */}
        <div className="absolute inset-0 bg-grid-pattern/25 pointer-events-none" />

        <div className="relative z-10 container-wide">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-primary-soft text-primary mb-4 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" /> Our Specialties
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground text-balance leading-[1.15]">
              Comprehensive care across <span className="text-gradient">every specialty</span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">
              Each department is staffed by board-certified specialists and equipped with advanced technology to deliver world-class care.
            </p>
          </div>

          {/* Departments Grid */}
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept) => {
              const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[dept.icon] || Stethoscope;
              return (
                <Link key={dept.slug} href={`/departments/${dept.slug}`} className="group block h-full">
                  <div className="card-hover relative h-full overflow-hidden rounded-3xl glass p-8 sm:p-10 border border-border/80 flex flex-col justify-between shadow-xl">
                    <div className="absolute right-0 top-0 h-40 w-40 -translate-y-14 translate-x-14 rounded-full bg-primary/10 transition-transform duration-700 group-hover:scale-150 pointer-events-none blur-xl" />
                    
                    <div className="relative z-10">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground shadow-sm mb-6">
                        <Icon className="h-8 w-8" />
                      </div>
                      <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                        {dept.name}
                      </h2>
                      <p className="text-sm sm:text-base text-muted-foreground line-clamp-3 leading-relaxed mb-6">
                        {dept.description}
                      </p>
                    </div>

                    <div className="relative z-10 pt-5 border-t border-border/60 flex items-center justify-between text-sm font-semibold text-primary">
                      <span>Learn more</span>
                      <div className="h-8 w-8 rounded-full bg-primary-soft/50 flex items-center justify-center transition-transform group-hover:translate-x-1">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Departments', url: '/departments' },
          ])),
        }}
      />
    </div>
  );
}