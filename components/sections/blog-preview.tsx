'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { articles } from '@/lib/blog';
import { Button } from '@/components/ui/button';

export function BlogPreview() {
  const featured = articles.filter((a) => a.featured).slice(0, 3);

  return (
    <section className="section-pad bg-muted/30" aria-label="Health blog">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Health Blog</span>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Expert health insights, medically reviewed
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              Trusted articles written by our doctors and reviewed by specialists.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/blog" className="flex items-center gap-2">
              All articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link href={`/blog/${article.slug}`} className="group block h-full">
                <article className="card-hover overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">{article.category}</span>
                    <h3 className="mt-2 text-lg font-semibold leading-snug line-clamp-2">{article.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{article.author}</span>
                      <span>·</span>
                      <span>{article.readingTime} min read</span>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
