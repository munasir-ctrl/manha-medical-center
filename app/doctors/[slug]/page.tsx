import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getDoctor, doctors } from '@/lib/doctors';
import { physicianSchema, breadcrumbSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { CtaBanner } from '@/components/cta-banner';
import { Button } from '@/components/ui/button';
import { Clock, Globe, Award, GraduationCap, ArrowLeft } from 'lucide-react';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return doctors.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctor(slug);
  if (!doctor) return {};

  const fullName = `Dr. ${doctor.name}`;

  return {
    title: `${fullName} - ${doctor.title} | Manha Medical Center`,
    description: doctor.bio,
    alternates: { canonical: `/doctors/${doctor.slug}` },
    openGraph: {
      title: `${fullName} - ${doctor.title}`,
      description: doctor.bio,
      images: [{ url: doctor.image, width: 800, height: 600, alt: fullName }],
      type: 'profile',
    },
  };
}

export default async function DoctorPage({ params }: PageProps) {
  const { slug } = await params;
  const doctor = getDoctor(slug);
  if (!doctor) notFound();

  const fullName = `Dr. ${doctor.name}`;

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Doctors', url: '/doctors' },
    { name: fullName, url: `/doctors/${doctor.slug}` },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <Breadcrumbs items={breadcrumbItems} />

      <main className="relative py-12 sm:py-16 md:py-24 bg-background">
        <div className="relative z-10 container-wide max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Main Hero Profile Card */}
          <div className="bg-card p-6 sm:p-10 rounded-2xl border border-border/80 shadow-sm grid gap-8 md:grid-cols-[1fr_2fr] items-start mb-12">
            
            {/* Doctor Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-muted border border-border/40 shadow-inner">
              <Image
                src={doctor.image}
                alt={fullName}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
              />
            </div>

            {/* Doctor Overview */}
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-md bg-primary/10 text-primary">
                {doctor.specialty}
              </span>
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                {fullName}
              </h1>
              <p className="text-base sm:text-lg font-medium text-muted-foreground border-b border-border/60 pb-4">{doctor.title}</p>
              
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-primary shrink-0" />
                  <span>{doctor.availability}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-primary shrink-0" />
                  <span>Languages Spoken: {doctor.languages.join(', ')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-4 w-4 text-primary shrink-0" />
                  <span>{doctor.experience}+ Years of Clinical Experience</span>
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <Button asChild size="lg" className="rounded-xl w-full sm:w-auto shadow-sm">
                  <Link href={`/book?doctor=${doctor.slug}`}>Book Consultation</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Detailed Info Sections */}
          <div className="space-y-8">
            <section className="bg-card p-6 sm:p-8 rounded-2xl border border-border/80 shadow-sm">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4 border-b border-border/40 pb-3">Biography</h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{doctor.bio}</p>
            </section>

            {/* Conditions Treated */}
            {doctor.conditions.length > 0 && (
              <section className="bg-card p-6 sm:p-8 rounded-2xl border border-border/80 shadow-sm">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4 border-b border-border/40 pb-3">Treatments & Conditions</h2>
                <div className="flex flex-wrap gap-2">
                  {doctor.conditions.map((condition, i) => (
                    <span key={i} className="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-secondary/50 border border-border/60 text-secondary-foreground">
                      {condition}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Education */}
            {doctor.education.length > 0 && (
              <section className="bg-card p-6 sm:p-8 rounded-2xl border border-border/80 shadow-sm">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4 border-b border-border/40 pb-3 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" /> Education & Credentials
                </h2>
                <ul className="space-y-4">
                  {doctor.education.map((edu, i) => (
                    <li key={i} className="text-sm sm:text-base border-l-2 border-primary/40 pl-4 py-0.5">
                      <strong className="text-foreground block font-semibold">{edu.degree}</strong>
                      <span className="text-muted-foreground text-xs sm:text-sm">{edu.institution} ({edu.year})</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <div>
              <Button asChild variant="outline" size="lg" className="rounded-xl border-border">
                <Link href="/doctors">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Doctors
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <CtaBanner />

      {/* Structured Schemas for 100/100 SEO & GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            physicianSchema({
              name: fullName,
              slug: doctor.slug,
              title: doctor.title,
              specialty: doctor.specialty,
              bio: doctor.bio,
              languages: [...doctor.languages],
              image: doctor.image,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)) }}
      />
    </div>
  );
}