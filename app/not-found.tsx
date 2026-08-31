import Link from 'next/link';
import { Home, Search, Calendar, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site';

export default function NotFound() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-radial-gradient py-20 px-4">
      {/* Background decorative grid */}
      <div className="absolute inset-0 bg-grid-pattern/30 pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto text-center glass p-8 sm:p-12 rounded-3xl border border-border/80 shadow-2xl">
        {/* Subtle accent badge */}
        <span className="inline-block px-3.5 py-1.5 text-xs font-semibold rounded-full bg-primary-soft text-primary mb-6">
          Error 404
        </span>

        {/* Large styled title with gradient touch */}
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
          Oops! Page not found
        </h1>
        
        <p className="text-muted-foreground text-base leading-relaxed text-pretty mb-8">
          The page you are looking for may have been moved, renamed, or no longer exists. Let us help guide you back to your health journey.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3.5 mb-8">
          <Button asChild size="lg" className="rounded-xl shadow-lg shadow-primary/20">
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" /> Go Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-xl">
            <Link href="/departments" className="flex items-center gap-2">
              <Search className="h-4 w-4" /> Browse Departments
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="rounded-xl">
            <Link href="/book" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" /> Book Appointment
            </Link>
          </Button>
        </div>

        {/* Direct phone support link */}
        <div className="pt-6 border-t border-border/60">
          <a 
            href={`tel:${siteConfig.phone}`} 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors inline-flex items-center justify-center gap-2 group"
          >
            <Phone className="h-4 w-4 text-primary" /> 
            Need immediate assistance? Call us at <span className="underline underline-offset-4">{siteConfig.phoneDisplay}</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}