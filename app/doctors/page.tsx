import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Award, Languages, Sparkles } from 'lucide-react';
import { doctors } from '@/lib/doctors';
import { departments } from '@/lib/departments';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { CtaBanner } from '@/components/cta-banner';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Our Doctors & Specialists',
  description:
    'Meet the board-certified specialists at Manha Medical Center in Sharjah. Browse doctors by specialty and book your appointment online.',
  alternates: { canonical: '/doctors' },
};

export default function DoctorsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Doctors', url: '/doctors' }]} />
      
      <section className="relative py-12 sm:py-16 md:py-24 bg-radial-gradient">
        {/* Background decorative grid */}
        <div className="absolute inset-0 bg-grid-pattern/30 pointer-events-none" />

        <div className="relative z-10 container-wide px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-primary-soft text-primary mb-4 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" /> Our Expert Team
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground text-balance">
              Meet our <span className="text-gradient">specialists</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Board-certified doctors with international training and a shared commitment to your wellbeing.
            </p>
          </div>

          {/* Doctors Grid - Optimized for mobile & tablet layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
            {doctors.map((doc) => {
              const dept = departments.find((d) => d.slug === doc.departmentSlug);
              return (
                <Link key={doc.slug} href={`/doctors/${doc.slug}`} className="group block h-full">
                  <article className="card-hover overflow-hidden rounded-3xl glass border border-border/80 flex flex-col h-full shadow-sm hover:shadow-2xl transition-all duration-500">
                    <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                      <img 
                        src={doc.image} 
                        alt={doc.name} 
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        loading="lazy" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                        <h2 className="font-display text-lg sm:text-xl font-bold leading-snug">Dr. {doc.name}</h2>
                        <p className="text-xs sm:text-sm text-white/80 font-medium mt-0.5">{doc.title}</p>
                      </div>
                    </div>
                    
                    <div className="p-4 sm:p-6 flex flex-col flex-grow justify-between bg-card/50 backdrop-blur-sm">
                      <div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium mb-3">
                          <span className="flex items-center gap-1 bg-secondary/80 px-2.5 py-1 rounded-lg">
                            <Award className="h-3.5 w-3.5 text-primary" /> {doc.experience}+ yrs exp
                          </span>
                          <span className="flex items-center gap-1 bg-secondary/80 px-2.5 py-1 rounded-lg">
                            <Languages className="h-3.5 w-3.5 text-primary" /> {doc.languages.length} langs
                          </span>
                        </div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                          {dept?.shortName}
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-border/60 flex items-center justify-between text-sm font-semibold text-primary">
                        <span>View profile</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />

      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Doctors', url: '/doctors' }])) }} 
      />
    </div>
  );
}