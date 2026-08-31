import Link from 'next/link';
import { Calendar, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site';

export function CtaBanner({
  title = 'Ready to take charge of your health?',
  subtitle = 'Book your appointment with Manha Medical Center today.',
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="section-pad" aria-label="Book an appointment">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent px-6 py-12 text-center text-primary-foreground md:px-12 md:py-16">
          <div className="absolute inset-0 bg-dots opacity-10" />
          <div className="relative">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90 text-pretty">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90">
                <Link href="/book" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
