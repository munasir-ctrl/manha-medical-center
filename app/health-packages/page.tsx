"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Check, Calendar, ShieldCheck, Sparkles } from 'lucide-react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { CtaBanner } from '@/components/cta-banner';
import { healthPackages } from '@/lib/content';
import { siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';
import { breadcrumbSchema } from '@/lib/schema';

export default function HealthPackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(healthPackages.map((pkg) => pkg.category)))];

  const filteredPackages = selectedCategory === 'All' 
    ? healthPackages 
    : healthPackages.filter((pkg) => pkg.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Health Packages', url: '/health-packages' }]} />
      
      <section className="relative section-pad bg-radial-gradient">
        {/* Background decorative grid */}
        <div className="absolute inset-0 bg-grid-pattern/30 pointer-events-none" />

        <div className="relative z-10 container-wide">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-primary-soft text-primary mb-4">
              <Sparkles className="h-3.5 w-3.5" /> Services & Packages
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground text-balance">
              Specialized care for <span className="text-gradient">every need</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-muted-foreground text-pretty">
              Transparent pricing for lab wellness profiles, Hijama therapy, women's health promotions, and expert dental procedures.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border',
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20'
                    : 'bg-background/80 text-muted-foreground border-border/80 hover:border-primary/50 hover:text-foreground'
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Packages Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch mb-20">
            {filteredPackages.map((pkg) => {
              // Construct WhatsApp URL with a pre-filled message including the package name and price
              const whatsappMessage = encodeURIComponent(
                `Hello ${siteConfig.name}, I would like to book an appointment for the "${pkg.name}" package (AED ${pkg.price}). Please guide me through the next steps.`
              );
              const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`;

              return (
                <div 
                  key={pkg.slug} 
                  id={pkg.slug} 
                  className={cn(
                    'relative flex flex-col rounded-3xl glass p-8 card-hover border transition-all duration-300', 
                    pkg.popular ? 'border-primary shadow-2xl shadow-primary/10 ring-2 ring-primary/20 scale-[1.02] bg-background/80' : 'border-border/80'
                  )}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground shadow-lg shadow-primary/30 flex items-center gap-1">
                      <Sparkles className="h-3 w-3" /> Most Popular
                    </div>
                  )}
                  
                  <div className="flex-1 flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{pkg.category}</span>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-2">{pkg.name}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{pkg.description}</p>
                    
                    <div className="flex items-baseline gap-2.5 mb-6 pt-4 border-t border-border/60">
                      <span className="text-xs text-muted-foreground uppercase font-medium">Starting From</span>
                      <span className="font-display text-3xl font-extrabold text-primary">AED {pkg.price}</span>
                    </div>

                    <ul className="space-y-3 mb-8 flex-grow">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm">
                          <Check className="mt-1 h-4 w-4 shrink-0 text-success" />
                          <span className={f.includes(':') && f.indexOf(':') < 25 ? 'font-bold text-foreground' : 'text-muted-foreground leading-relaxed'}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30"
                  >
                    <Calendar className="h-4 w-4" /> Book Now
                  </a>
                </div>
              );
            })}
          </div>

          {/* Insurance Eligibility Checker */}
          <div className="glass max-w-2xl mx-auto rounded-3xl border border-border/80 p-8 sm:p-10 text-center shadow-2xl">
            <div className="inline-flex p-3 rounded-2xl bg-primary-soft text-primary mb-4">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Insurance eligibility checker</h2>
            <p className="mx-auto mt-2 text-sm sm:text-base text-muted-foreground text-pretty">
              Enter your insurance provider to check your coverage before booking your screening package.
            </p>
            <div className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
              <select className="flex-1 rounded-xl border border-input bg-background/80 px-4 py-3 text-sm outline-none focus-ring transition-all">
                <option value="">Select your insurance</option>
                {siteConfig.insurance.map((ins) => <option key={ins} value={ins}>{ins}</option>)}
              </select>
              <button className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30">
                Check
              </button>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />

      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Health Packages', url: '/health-packages' }])) }} 
      />
    </div>
  );
}