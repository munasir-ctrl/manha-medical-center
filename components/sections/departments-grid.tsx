'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { departments } from '@/lib/departments';
import { Button } from '@/components/ui/button';

export function DepartmentsGrid() {
  return (
    <section className="section-pad" aria-label="Our departments">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Specialties</span>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Comprehensive care across every specialty
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            From family medicine to specialized care, our departments bring together expert doctors, advanced technology, and a patient-first philosophy.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[dept.icon] || Icons.Circle;
            return (
              <motion.div
                key={dept.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/departments/${dept.slug}`} className="group block h-full">
                  <div className="card-hover relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6">
                    <div className="absolute right-0 top-0 h-32 w-32 -translate-y-12 translate-x-12 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
                    <div className="relative">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="mt-5 text-xl font-semibold">{dept.shortName}</h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{dept.tagline}</p>
                      <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary">
                        Learn more
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/departments" className="flex items-center gap-2">
              View all departments
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
