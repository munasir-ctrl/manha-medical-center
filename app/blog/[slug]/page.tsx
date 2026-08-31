import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Calendar, CheckCircle2, HelpCircle, ArrowLeft, Sparkles, Mic } from 'lucide-react';
import { articles, getArticle } from '@/lib/blog';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { CtaBanner } from '@/components/cta-banner';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { articleSchema, faqSchema, breadcrumbSchema } from '@/lib/schema';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: `${article.title} | Manha Medical Center`,
    description: article.description,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      images: [{ url: article.image, width: 1200, height: 630, alt: article.title }],
      type: 'article',
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: [article.author],
      section: article.category,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const allFaqs = [...article.faqs, ...article.peopleAlsoAsk];
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: article.title, url: `/blog/${article.slug}` },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <Breadcrumbs items={breadcrumbItems} />

      <article className="relative section-pad bg-radial-gradient">
        {/* Background decorative grid */}
        <div className="absolute inset-0 bg-grid-pattern/30 pointer-events-none" />

        <div className="relative z-10 container-wide max-w-4xl">
          {/* Header */}
          <header className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-primary-soft text-primary mb-4">
              <Sparkles className="h-3.5 w-3.5" /> {article.category}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance leading-tight">
              {article.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty leading-relaxed">
              {article.excerpt}
            </p>
          </header>

          {/* Meta Bar */}
          <div className="glass p-4 rounded-2xl border border-border/80 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground font-medium mb-10 shadow-sm">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" /> {article.readingTime} min read
            </span>
            <span className="hidden sm:inline text-border" aria-hidden="true">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-primary" /> Published{' '}
              <time dateTime={article.datePublished}>
                {new Date(article.datePublished).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </span>
            <span className="hidden sm:inline text-border" aria-hidden="true">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-success" /> Reviewed by {article.reviewer}
            </span>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl glass p-2 shadow-2xl card-hover mb-12">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover rounded-2xl"
            />
          </div>

          {/* Content with TOC Grid */}
          <div className="grid gap-10 lg:grid-cols-[1fr_3fr] items-start">
            {/* Table of Contents Sticky Sidebar */}
            <aside className="lg:sticky lg:top-24" aria-label="Table of Contents">
              <div className="glass rounded-2xl border border-border/80 p-5 shadow-lg">
                <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  Table of Contents
                </h2>
                <nav>
                  <ol className="space-y-2.5 text-sm">
                    {article.content.map((section, i) => (
                      <li key={i}>
                        <a
                          href={`#section-${i}`}
                          className="text-muted-foreground transition-colors hover:text-primary block leading-snug"
                        >
                          <span className="text-primary font-semibold mr-1.5">{i + 1}.</span>{' '}
                          {section.heading}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a
                        href="#faqs"
                        className="text-muted-foreground transition-colors hover:text-primary block leading-snug"
                      >
                        <span className="text-primary font-semibold mr-1.5">
                          {article.content.length + 1}.
                        </span>{' '}
                        FAQs
                      </a>
                    </li>
                  </ol>
                </nav>
              </div>
            </aside>

            {/* Article Body Sections */}
            <div className="space-y-10">
              {article.content.map((section, i) => (
                <section
                  key={i}
                  id={`section-${i}`}
                  className="scroll-mt-28 glass p-8 rounded-3xl border border-border/80 shadow-sm"
                >
                  <h2 className="font-display text-2xl font-bold tracking-tight text-foreground mb-4">
                    {section.heading}
                  </h2>
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed text-pretty">
                    {section.body}
                  </p>
                </section>
              ))}

              {/* Authority & Trust Metadata Box */}
              <div className="glass rounded-2xl p-6 text-sm text-muted-foreground border border-border/80 space-y-1.5">
                <p>
                  <strong className="text-foreground">Last updated:</strong>{' '}
                  <time dateTime={article.dateModified}>
                    {new Date(article.dateModified).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </p>
                <p>
                  <strong className="text-foreground">Medical reviewer:</strong> {article.reviewer}
                </p>
                <p>
                  <strong className="text-foreground">Author:</strong> {article.author}
                </p>
              </div>

              {/* FAQs Section */}
              <section id="faqs" className="scroll-mt-28 glass p-8 rounded-3xl border border-border/80">
                <h2 className="flex items-center gap-2.5 font-display text-2xl font-bold tracking-tight text-foreground mb-6">
                  <HelpCircle className="h-6 w-6 text-primary" /> Frequently asked questions
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {allFaqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`item-${i}`}
                      className="rounded-2xl border border-border/80 bg-background/50 px-5 overflow-hidden"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* Voice Search / GEO Optimization Block */}
              <section className="glass rounded-2xl border border-dashed border-border/80 p-6">
                <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                  <Mic className="h-4 w-4 text-primary" /> Common Voice Search Queries
                </h2>
                <ul className="space-y-2 text-sm text-muted-foreground italic">
                  {article.voiceSearchQuestions.map((q, i) => (
                    <li key={i}>&ldquo;{q}&rdquo;</li>
                  ))}
                </ul>
              </section>

              {/* Back Button Navigation */}
              <div>
                <Button asChild variant="outline" size="lg" className="rounded-xl">
                  <Link href="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <CtaBanner />

      {/* Structured Data JSON-LD Schemas for Maximum SEO & GEO Performance */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(article)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(allFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)) }}
      />
    </div>
  );
}