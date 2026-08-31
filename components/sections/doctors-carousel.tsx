'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Languages, Award, Clock } from 'lucide-react';
import { doctors } from '@/lib/doctors';
import { Button } from '@/components/ui/button';

export function DoctorsCarousel() {
  return (
    <section className="section-pad bg-muted/30" aria-label="Meet our specialists">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Team</span>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Meet our specialists
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              Board-certified doctors with international training and a shared commitment to your wellbeing.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/doctors" className="flex items-center gap-2">
              All doctors
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link href={`/doctors/${doc.slug}`} className="group block h-full">
                <div className="card-hover overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <div className="text-lg font-semibold">{doc.name}</div>
                      <div className="text-sm text-white/80">{doc.title}</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Award className="h-3.5 w-3.5" /> {doc.experience}+ yrs
                      </span>
                      <span className="flex items-center gap-1">
                        <Languages className="h-3.5 w-3.5" /> {doc.languages.length} langs
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" /> {doc.availability}
                    </div>
                    <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-primary">
                      View profile
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
