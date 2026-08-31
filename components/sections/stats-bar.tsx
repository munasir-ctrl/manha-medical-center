'use client';

import { motion } from 'framer-motion';
import { CountUp } from '@/components/count-up';
import { siteConfig } from '@/lib/site';

export function StatsBar() {
  return (
    <section className="border-y border-border bg-muted/30" aria-label="Key statistics">
      <div className="container-wide grid grid-cols-2 gap-8 py-12 md:grid-cols-4 lg:py-16">
        {siteConfig.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="font-display text-4xl font-bold text-primary md:text-5xl">
              <CountUp end={stat.value} suffix={stat.suffix} />
            </div>
            <div className="mt-2 text-sm font-medium text-muted-foreground md:text-base">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
