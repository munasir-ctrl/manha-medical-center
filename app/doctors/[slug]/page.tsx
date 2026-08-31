import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getDoctor, doctors } from '@/lib/doctors';
import { physicianSchema, breadcrumbSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { CtaBanner } from '@/components/cta-banner';
import { Button } from '@/components/ui/button';
import { Clock, Globe, Award, GraduationCap, ArrowLeft, Calendar } from 'lucide-react';

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

  return {
    title: `${doctor.name} - ${doctor.title} | Manha Medical Center`,
    description: doctor.bio,
    alternates: { canonical: `/doctors/${doctor.slug}` },
    openGraph: {
      title: `${doctor.name} - ${doctor.title}`,
      description: doctor.bio,
      images: [{ url: doctor.image, width: 800, height: 600, alt: doctor.name }],
      type: 'profile',
    },
  };
}

export default async function DoctorPage({ params }: PageProps) {
  const { slug } = await params;
  const doctor = getDoctor(slug);
  if (!doctor) notFound();

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Doctors', url: '/doctors' },
    { name: doctor.name, url: `/doctors/${doctor.slug}` },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <Breadcrumbs items={breadcrumbItems} />

      <main className="relative section-pad bg-radial-gradient">
        <div className="absolute inset-0 bg-grid-pattern/30 pointer-events-none" />

        <div className="relative z-10 container-wide max-w-4xl">
          <div className="glass p-8 rounded-3xl border border-border/80 shadow-xl grid gap-8 md:grid-cols-[1fr_2fr] items-start mb-12">
            
            {/* Doctor Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-md">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
              />
            </div>

            {/* Doctor Overview */}
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary-soft text-primary">
                {doctor.specialty}
              </span>
              <h1 className="font-display text-3xl font-extrabold text-foreground tracking-tight">
                {doctor.name}
              </h1>
              <p className="text-lg font-medium text-muted-foreground">{doctor.title}</p>
              
              <div className="pt-2 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{doctor.availability}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <span>Languages: {doctor.languages.join(', ')}</span>
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <Button asChild size="lg" className="rounded-xl">
                  <Link href={`/book?doctor=${doctor.slug}`}>Book Appointment</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Detailed Info Sections */}
          <div className="space-y-8">
            <section className="glass p-6 rounded-2xl border border-border/80">
              <h2 className="font-display text-xl font-bold text-foreground mb-3">About {doctor.name}</h2>
              <p className="text-muted-foreground leading-relaxed">{doctor.bio}</p>
            </section>

            {/* Conditions Treated */}
            {doctor.conditions.length > 0 && (
              <section className="glass p-6 rounded-2xl border border-border/80">
                <h2 className="font-display text-xl font-bold text-foreground mb-4">Treatments & Conditions</h2>
                <div className="flex flex-wrap gap-2">
                  {doctor.conditions.map((condition, i) => (
                    <span key={i} className="px-3 py-1.5 text-xs font-medium rounded-xl bg-background/50 border border-border/80 text-foreground">
                      {condition}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Education */}
            {doctor.education.length > 0 && (
              <section className="glass p-6 rounded-2xl border border-border/80">
                <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" /> Education & Credentials
                </h2>
                <ul className="space-y-3">
                  {doctor.education.map((edu, i) => (
                    <li key={i} className="text-sm">
                      <strong className="text-foreground block">{edu.degree}</strong>
                      <span className="text-muted-foreground">{edu.institution} ({edu.year})</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <div>
              <Button asChild variant="outline" size="lg" className="rounded-xl">
                <Link href="/doctors">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to all doctors
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
              name: doctor.name,
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