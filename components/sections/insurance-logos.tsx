'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/site';

export function InsuranceLogos() {
  return (
    <section className="py-12" aria-label="Insurance partners">
      <div className="container-wide">
        <p className="text-center text-sm font-medium text-muted-foreground">
          Accepted by 30+ leading insurance providers
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {siteConfig.insurance.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="text-lg font-semibold text-muted-foreground/60 grayscale transition-all hover:text-foreground hover:grayscale-0"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
