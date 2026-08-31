'use client';

import { motion } from 'framer-motion';
import { Award, Users, Clock, ShieldCheck, HeartPulse, Microscope } from 'lucide-react';

const reasons = [
  { icon: Award, title: 'Board-Certified Specialists', description: 'Our 45+ doctors hold international qualifications and fellowships from leading institutions.' },
  { icon: Clock, title: 'Minimal Wait Times', description: 'Respected appointment scheduling means you are seen on time, every time.' },
  { icon: ShieldCheck, title: '30+ Insurance Partners', description: 'In-network with all major UAE insurers. We handle pre-approvals so you do not have to.' },
  { icon: Microscope, title: 'Advanced Technology', description: 'From 3D imaging to laser dentistry, we invest in the latest medical technology.' },
  { icon: HeartPulse, title: 'Patient-First Philosophy', description: 'Every decision is guided by what is best for you and your family — never by profit.' },
  { icon: Users, title: 'Family-Centered Care', description: 'From newborns to seniors, your whole family receives continuity of care under one roof.' },
];

export function WhyChooseUs() {
  return (
    <section className="section-pad" aria-label="Why choose us">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Why Manha</span>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            The difference is in the details
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            We have built Manha Medical Center around one principle: healthcare should feel as good as it is effective.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-6 card-hover"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <r.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground text-pretty">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
