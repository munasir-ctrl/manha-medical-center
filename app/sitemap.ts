import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { departments } from '@/lib/departments';
import { doctors } from '@/lib/doctors';
import { articles, blogCategories } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/departments`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/doctors`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/health-packages`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/book`, lastModified: now, changeFrequency: 'yearly', priority: 0.9 },
    { url: `${base}/faqs`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/insurance`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/cookie-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const deptPages: MetadataRoute.Sitemap = departments.map((d) => ({
    url: `${base}/departments/${d.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const doctorPages: MetadataRoute.Sitemap = doctors.map((d) => ({
    url: `${base}/doctors/${d.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${base}/blog/${a.slug}`,
    lastModified: new Date(a.dateModified),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const categoryPages: MetadataRoute.Sitemap = blogCategories.map((c) => ({
    url: `${base}/blog/category/${c.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [...staticPages, ...deptPages, ...doctorPages, ...articlePages, ...categoryPages];
}