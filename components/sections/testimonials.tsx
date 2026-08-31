'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/lib/content';

export function Testimonials() {
  return (
    <section className="section-pad" aria-label="Patient testimonials">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Patient Stories</span>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Trusted by thousands of families
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-warning text-warning" />
              ))}
            </div>
            <span className="text-lg font-semibold">4.9</span>
            <span className="text-muted-foreground">from 1,287 Google reviews</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative rounded-2xl border border-border bg-card p-6 card-hover"
            >
              <Quote className="h-8 w-8 text-primary/20" />
              <p className="mt-3 text-pretty">{t.comment}</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.department}</div>
                </div>
                <div className="ml-auto flex">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-warning text-warning" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}