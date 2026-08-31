'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Calendar, Phone, ShieldCheck, Star, Heart, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CountUp } from '@/components/count-up';
import { siteConfig } from '@/lib/site';

export function Hero() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleInstantBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    // Pushes user directly to the booking flow with their name and phone pre-filled
    router.push(`/book?name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}`);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-20 lg:py-32" aria-label="Hero">
      {/* Luxurious ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl pointer-events-none -z-10" />

      <div className="container-wide relative z-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        
        {/* Left Column: Elite Messaging & Direct Input Booking Card */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="lg:col-span-7"
        >
          {/* Status Badge */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-4 py-1.5 text-xs font-semibold backdrop-blur-md shadow-sm mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-foreground/90">Commercial Muwailah, Sharjah • VIP Healthcare</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance leading-[1.1]"
          >
            Care That Feels <span className="text-primary italic font-serif">Like Home</span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-6 max-w-xl text-lg text-muted-foreground text-pretty font-normal"
          >
            {siteConfig.name} brings together elite medical specialists, advanced diagnostics, and a deeply personalized concierge approach to your family's health.
          </motion.p>

          {/* Instant Name & Contact Number Booking Form */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-8 rounded-3xl border border-border/80 bg-card/80 p-5 shadow-2xl backdrop-blur-2xl sm:p-6 max-w-xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Book Instantly Online
              </span>
              <span className="text-xs text-muted-foreground">Secure & Confidential</span>
            </div>

            <form onSubmit={handleInstantBooking} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1">Your Full Name</label>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full rounded-xl border border-border/80 bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1">Contact Number</label>
                  <input
                    type="tel"
                    placeholder="e.g. +971 50 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full rounded-xl border border-border/80 bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <Button type="submit" size="lg" className="w-full sm:flex-1 h-12 rounded-xl font-semibold shadow-lg shadow-primary/25">
                  <Calendar className="mr-2 h-4 w-4" /> Book Appointment Now
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-12 rounded-xl font-semibold border-border">
                  <a href={`tel:${siteConfig.phone}`} className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4 text-primary" /> Call Clinic
                  </a>
                </Button>
              </div>
            </form>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground pt-3 border-t border-border/40">
              <ShieldCheck className="h-4 w-4 text-primary" /> Instant confirmation via SMS & WhatsApp
            </div>
          </motion.div>

          {/* Trust badges row */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground pt-2 max-w-xl"
          >
            <div className="flex items-center gap-2">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="font-bold text-foreground">4.9 / 5</span>
              <span className="text-xs">({siteConfig.rating.count.toLocaleString()} reviews)</span>
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div>
              <span className="font-bold text-foreground">30+</span> Insurance Partners
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Premium Visual & Floating Counters */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative lg:col-span-5"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl border border-border/40">
            <img
              src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Doctor consulting with a patient at Manha Medical Center"
              className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>

          {/* Floating Stat Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -left-6 top-10 glass rounded-2xl p-4 shadow-xl border border-white/20 backdrop-blur-xl md:-left-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-foreground">
                  <CountUp end={120} suffix="K+" />
                </div>
                <div className="text-xs text-muted-foreground font-medium">Patients Cared For</div>
              </div>
            </div>
          </motion.div>

          {/* Secondary Floating Feature Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -right-4 bottom-10 glass rounded-2xl p-4 shadow-xl border border-white/20 backdrop-blur-xl md:-right-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">Multidisciplinary</div>
                <div className="text-xs text-muted-foreground font-medium">45+ Expert Specialists</div>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}