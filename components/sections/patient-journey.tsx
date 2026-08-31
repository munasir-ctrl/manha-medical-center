'use client';

import { motion } from 'framer-motion';
import { Calendar, Search, Stethoscope, ClipboardCheck, HeartHandshake } from 'lucide-react';

const steps = [
  { icon: Search, title: 'Find Your Doctor', description: 'Search by specialty, condition, or availability to find the right specialist for your needs.' },
  { icon: Calendar, title: 'Book Online', description: 'Choose a convenient time and book your appointment in under 60 seconds.' },
  { icon: Stethoscope, title: 'Receive Expert Care', description: 'Meet your doctor in a comfortable, modern environment with personalized attention.' },
  { icon: ClipboardCheck, title: 'Follow-Up & Support', description: 'Access your records, results, and follow-up care through our digital health platform.' },
];

export function PatientJourney() {
  return (
    <section className="section-pad bg-muted/30" aria-label="Patient journey">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Your Journey</span>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            How patient care works at Manha
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            We've designed every step to be simple, comfortable, and centered around you.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative text-center"
              >
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-background shadow-card ring-1 ring-border">
                  <step.icon className="h-8 w-8 text-primary" />
                  <div className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </div>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground text-pretty">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
