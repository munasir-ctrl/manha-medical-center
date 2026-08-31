'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const faqs = [
  { q: 'How do I book an appointment at Manha Medical Center?', a: 'You can book online through our website, call us directly, or message us on WhatsApp. Online booking takes under 60 seconds and confirms your appointment instantly.' },
  { q: 'Which insurance providers do you accept?', a: 'We are in-network with over 30 major UAE insurers including Daman, Nextcare, ADNIC, AXA Gulf, MetLife, and Oman Insurance. You can verify your coverage online or by calling us.' },
  { q: 'Do you offer pediatric care for newborns?', a: 'Yes. Our pediatrics department provides complete care from birth, including newborn screening, vaccinations following the UAE schedule, and developmental monitoring.' },
  { q: 'What are your opening hours?', a: 'We are open Saturday through Thursday from 8:00 AM to 11:00 PM, and Friday from 9:00 AM to 11:00 PM. Emergency support is available by phone 24/7.' },
  { q: 'Do you offer health check-up packages?', a: 'Yes, we offer four packages ranging from Basic Wellness to Prenatal Care. Each includes comprehensive screenings at transparent, all-inclusive prices.' },
  { q: 'Can I get my lab results online?', a: 'Yes. All lab results are uploaded to your secure patient portal, accessible through our website. You receive a notification when results are ready.' },
  { q: 'Is there parking available at the clinic?', a: 'Yes, we offer free on-site parking for all patients. The clinic is located in Muwaileh Commercial, Sharjah, with easy access from Sheikh Mohammed bin Zayed Road.' },
];

export function FaqSection() {
  return (
    <section className="section-pad bg-muted/30" id="faqs" aria-label="Frequently asked questions">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">FAQs</span>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Questions? We have answers.
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              Everything you need to know about visiting Manha Medical Center. Cannot find what you are looking for?
            </p>
            <Button asChild className="mt-6">
              <Link href="/contact" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Contact us
              </Link>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-xl border border-border bg-card px-4"
                >
                  <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
