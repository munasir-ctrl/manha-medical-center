'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, Calendar, ArrowRight } from 'lucide-react';
import { healthPackages } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function HealthPackages() {
  return (
    <section className="section-pad" aria-label="Health packages">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Health Packages</span>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Preventive care packages for every need
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Comprehensive health screening packages designed to keep you and your family healthy, at transparent prices.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {healthPackages.map((pkg, i) => (
            <motion.div
              key={pkg.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              id={pkg.slug}
              className={cn(
                'relative flex flex-col rounded-2xl border bg-card p-6 card-hover',
                pkg.popular ? 'border-primary shadow-glow' : 'border-border'
              )}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{pkg.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{pkg.description}</p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-3xl font-bold text-primary">AED {pkg.price}</span>
                  {pkg.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">AED {pkg.originalPrice}</span>
                  )}
                </div>
                <ul className="mt-5 space-y-2.5">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      <span className={f.endsWith(':') ? 'font-semibold' : 'text-muted-foreground'}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button asChild className="mt-6 w-full" variant={pkg.popular ? 'default' : 'outline'}>
                <Link href="/book" className="flex items-center justify-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Book Now
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="ghost">
            <Link href="/health-packages" className="flex items-center gap-2">
              Compare all packages
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
