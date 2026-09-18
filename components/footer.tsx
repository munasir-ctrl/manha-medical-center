import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Send,
  Calendar,
  ExternalLink,
} from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { departments } from '@/lib/departments';
import { doctors } from '@/lib/doctors';
import { healthPackages } from '@/lib/content';
import { Button } from '@/components/ui/button';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border bg-muted/30">
      {/* CTA banner */}
      <div className="border-b border-border">
        <div className="container-wide flex flex-col items-center justify-between gap-6 py-12 md:flex-row">
          <div>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              Ready to take charge of your health?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Book your appointment with Manha Medical Center today.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/book" className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Book Appointment
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="container-wide grid grid-cols-2 gap-8 py-16 md:grid-cols-3 lg:grid-cols-6">
        {/* Brand with Logo.png */}
        <div className="col-span-2 lg:col-span-2">
          <Link href="/" className="relative flex items-center w-[160px] h-[45px]">
            <Image
              src="/Logo.png"
              alt="Manha Medical Center Logo"
              fill
              className="object-contain object-left"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {siteConfig.tagline} A premium multidisciplinary medical center serving families in Sharjah and across the UAE.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary">
              <Phone className="h-4 w-4 text-primary" /> {siteConfig.phoneDisplay}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary">
              <Mail className="h-4 w-4 text-primary" /> {siteConfig.email}
            </a>
            <p className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.country}
            </p>
            <div className="flex items-start gap-2 text-muted-foreground">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <div>
                {siteConfig.hours.map((h) => (
                  <div key={h.day}>
                    <span className="font-medium text-foreground">{h.day}:</span> {h.time}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {[
              { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
              { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
              { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
              { icon: Youtube, href: siteConfig.social.youtube, label: 'YouTube' },
              { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}

            {/* Doctify Badge / Link */}
            <a
              href="https://www.doctify.com/en-ae/practice/manha-medical-center"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Doctify"
              className="flex h-9 px-3 items-center justify-center gap-1.5 rounded-full bg-muted text-xs font-medium text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {/* If you place doctify logo SVG in public folder as /doctify.svg, you can use Image component */}
              <Image 
                src="/doctify.svg" 
                alt="Doctify" 
                width={16} 
                height={16} 
                className="object-contain" 
              />
              <span>Doctify</span>
            </a>
          </div>
        </div>

        {/* Departments */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Departments</h3>
          <ul className="mt-4 space-y-2">
            {departments.slice(0, 6).map((d) => (
              <li key={d.slug}>
                <Link href={`/departments/${d.slug}`} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {d.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Doctors */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Doctors</h3>
          <ul className="mt-4 space-y-2">
            {doctors.slice(0, 6).map((doc) => (
              <li key={doc.slug}>
                <Link href={`/doctors/${doc.slug}`} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {doc.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Packages */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Packages</h3>
          <ul className="mt-4 space-y-2">
            {healthPackages.slice(0, 4).map((p) => (
              <li key={p.slug}>
                <Link href="/health-packages" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {p.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/health-packages" className="text-sm font-medium text-primary hover:underline">
                View All Packages →
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Resources</h3>
          <ul className="mt-4 space-y-2">
            {[
              { title: 'Health Blog', href: '/blog' },
              { title: 'Insurance', href: '/insurance' },
              { title: 'FAQs', href: '/faqs' },
              { title: 'Careers', href: '/career' },
              { title: 'Privacy Policy', href: '/privacy-policy' },
              { title: 'Terms', href: '/Terms' },
              { title: 'Cookie Policy', href: '/cookie-policy' },
              { title: 'Sitemap', href: '/sitemap.xml' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {l.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-border">
        <div className="container-wide flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <div>
            <h3 className="font-semibold">Stay informed about your health</h3>
            <p className="text-sm text-muted-foreground">Get health tips and updates from our specialists.</p>
          </div>
          <form className="flex w-full max-w-md gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              className="flex-1 rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus-ring"
            />
            <Button type="submit" className="shrink-0">
              <Send className="h-4 w-4" />
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border">
        <div className="container-wide flex flex-col items-center justify-between gap-4 py-6 text-sm text-muted-foreground md:flex-row">
          <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-success" />
            <span>MOH License: {siteConfig.shortName}-SHJ-2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
}