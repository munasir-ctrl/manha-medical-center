import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { articles, blogCategories } from '@/lib/blog';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { CtaBanner } from '@/components/cta-banner';
import { breadcrumbSchema } from '@/lib/schema';
import { Sparkles, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Health Blog — Expert Medical Insights | Manha Medical Center',
  description:
    'Medically reviewed health articles from Manha Medical Center specialists. Topics include dental care, pediatrics, women’s health, vaccination, and seasonal diseases in the UAE.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Health Blog — Expert Medical Insights | Manha Medical Center',
    description:
      'Medically reviewed health articles from Manha Medical Center specialists covering family health, pediatrics, and wellness in the UAE.',
    url: '/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Health Blog — Expert Medical Insights | Manha Medical Center',
    description:
      'Medically reviewed health articles from Manha Medical Center specialists.',
  },
};

export default function BlogPage() {
  const featured = articles.filter((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ];

  const blogCollectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Health Blog — Expert Medical Insights',
    description: 'Medically reviewed health articles from Manha Medical Center specialists.',
    url: '/blog',
    hasPart: articles.map((article) => ({
      '@type': 'MedicalWebPage',
      headline: article.title,
      url: `/blog/${article.slug}`,
      author: {
        '@type': 'Person',
        name: article.author,
      },
    })),
  };

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <Breadcrumbs items={breadcrumbItems} />
      
      <main className="relative section-pad">
        <div className="absolute inset-0 bg-grid-pattern/30 pointer-events-none" />

        <div className="relative z-10 container-wide">
          <header className="mx-auto max-w-3xl text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-primary/10 text-primary mb-4">
              <Sparkles className="h-3.5 w-3.5" /> Health Blog & Insights
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground text-balance">
              Expert health insights, <span className="text-primary">medically reviewed</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-muted-foreground text-pretty">
              Trusted articles written by our doctors and reviewed by specialists — for the health of your family.
            </p>
          </header>

          <nav aria-label="Blog Categories" className="flex flex-wrap justify-center gap-2 mb-16">
            {blogCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className="rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 border border-border/60 hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/5 bg-background"
              >
                {cat.name}
              </Link>
            ))}
          </nav>

          {featured.length > 0 && (
            <section className="mb-16" aria-labelledby="featured-articles-heading">
              <h2 id="featured-articles-heading" className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-8">
                Featured articles
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                {featured.map((article) => (
                  <Link key={article.slug} href={`/blog/${article.slug}`} className="group block">
                    <article className="overflow-hidden rounded-3xl border border-border/80 bg-card flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                        <Image 
                          src={article.image} 
                          alt={article.title} 
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                          className="object-cover transition-transform duration-700 group-hover:scale-105" 
                          loading="lazy" 
                        />
                        <div className="absolute top-3 left-3 z-10">
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-background/90 backdrop-blur-md text-primary shadow-sm border border-border/50">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="font-display text-xl font-bold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors mb-3">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-6 flex-grow">
                          {article.excerpt}
                        </p>
                        <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground font-medium">
                          <span>{article.author}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" /> {article.readingTime} min read
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {rest.length > 0 && (
            <section aria-labelledby="all-articles-heading">
              <h2 id="all-articles-heading" className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-8">
                All articles
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((article) => (
                  <Link key={article.slug} href={`/blog/${article.slug}`} className="group block">
                    <article className="overflow-hidden rounded-3xl border border-border/80 bg-card flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                        <Image 
                          src={article.image} 
                          alt={article.title} 
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105" 
                          loading="lazy" 
                        />
                        <div className="absolute top-3 left-3 z-10">
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-background/90 backdrop-blur-md text-primary shadow-sm border border-border/50">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="font-display text-lg font-bold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors mb-3">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-6 flex-grow">
                          {article.excerpt}
                        </p>
                        <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground font-medium">
                          <span>{article.author}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" /> {article.readingTime} min read
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <CtaBanner />

      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)) }} 
      />
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCollectionSchema) }} 
      />
    </div>
  );
}