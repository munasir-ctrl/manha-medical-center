import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { articles, blogCategories, getArticlesByCategory } from '@/lib/blog';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { CtaBanner } from '@/components/cta-banner';
import { breadcrumbSchema } from '@/lib/schema';

export function generateStaticParams() {
  return blogCategories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cat = blogCategories.find((c) => c.slug === params.slug);
  if (!cat) return {};
  return {
    title: `${cat.name} — Health Blog`,
    description: cat.description,
    alternates: { canonical: `/blog/category/${cat.slug}` },
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const cat = blogCategories.find((c) => c.slug === params.slug);
  if (!cat) notFound();
  const catArticles = getArticlesByCategory(params.slug);

  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: cat.name, url: `/blog/category/${cat.slug}` }]} />
      <section className="section-pad">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Category</span>
            <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight md:text-5xl">{cat.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{cat.description}</p>
          </div>

          {catArticles.length > 0 ? (
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {catArticles.map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`} className="group">
                  <article className="card-hover overflow-hidden rounded-2xl border border-border bg-card">
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                      <img src={article.image} alt={article.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold leading-snug line-clamp-2">{article.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{article.author}</span><span>·</span><span>{article.readingTime} min read</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-12 text-center text-muted-foreground">
              <p>No articles in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
      <CtaBanner />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: cat.name, url: `/blog/category/${cat.slug}` }])) }} />
    </>
  );
}
