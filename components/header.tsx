'use client';

import { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Phone,
  Calendar,
  Search,
  ChevronDown,
  MessageCircle,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { navLinks } from '@/lib/nav';
import { siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import * as Icons from 'lucide-react';

const getTranslationKey = (str: string) => {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const { lang, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <Fragment>
      {/* Luxurious Top Bar matching logo dark blue & cyan palette */}
      <div className="hidden bg-gradient-to-r from-[#21438f] via-[#1a3573] to-[#12234c] text-white border-b border-[#3bc3f3]/20 lg:block">
        <div className="container-wide flex items-center justify-between py-2 text-xs tracking-wide">
          <div className="flex items-center gap-6">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-[#3bc3f3] transition-colors">
              <Phone className="h-3.5 w-3.5 text-[#3bc3f3]" />
              <span className="font-medium">{siteConfig.phoneDisplay}</span>
            </a>
            <span className="text-white/80 flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-[#3bc3f3]"></span>
              {siteConfig.address.area}, {siteConfig.address.city}
            </span>
          </div>
          <div className="flex items-center gap-4 text-white/90">
            <button
              onClick={() => toggleLanguage('en')}
              className={cn(
                'rounded px-2.5 py-0.5 transition hover:text-[#3bc3f3]',
                lang === 'en' && 'font-semibold text-[#3bc3f3] underline decoration-[#3bc3f3]/60 underline-offset-4'
              )}
            >
              English
            </button>
            <span className="text-white/30">|</span>
            <button
              onClick={() => toggleLanguage('ar')}
              className={cn(
                'rounded px-2.5 py-0.5 transition hover:text-[#3bc3f3]',
                lang === 'ar' && 'font-semibold text-[#3bc3f3] underline decoration-[#3bc3f3]/60 underline-offset-4'
              )}
            >
              العربية
            </button>
          </div>
        </div>
      </div>

     {/* Main header */}
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40',
          scrolled && 'shadow-soft'
        )}
      >
        <div className="container-wide">
          <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center focus-ring rounded-lg py-1" aria-label={`${siteConfig.name} home`}>
              <div className="relative flex h-11 w-48 shrink-0 items-center">
                <Image 
                  src="/Logo.png" 
                  alt="Manha Medical Center Logo" 
                  fill
                  sizes="192px"
                  className="object-contain object-left" 
                  priority 
                />
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
              {navLinks.map((link) => {
                const navKey = getTranslationKey(link.title);
                return (
                  <div
                    key={link.title}
                    className="relative"
                    onMouseEnter={() => link.mega && setMegaOpen(link.title)}
                    onMouseLeave={() => setMegaOpen(null)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-[#21438f] focus-ring',
                        pathname === link.href || pathname.startsWith(link.href + '/')
                          ? 'text-[#21438f] font-semibold'
                          : 'text-foreground/80'
                      )}
                    >
                      {t(navKey) || link.title}
                      {link.mega && <ChevronDown className="h-4 w-4" />}
                    </Link>

                    {/* Mega menu */}
                    {link.mega && megaOpen === link.title && (
                      <AnimatePresence>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 pt-3"
                        >
                          <div className="glass rounded-2xl border border-border/60 p-4 shadow-card bg-background/95 backdrop-blur">
                            <div className="grid grid-cols-2 gap-1">
                              {link.items.map((item) => {
                                const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[item.icon] || Icons.Circle;
                                const itemKey = getTranslationKey(item.title);
                                return (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-[#21438f]/5"
                                  >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#21438f]/10 text-[#21438f] transition-colors group-hover:bg-[#21438f] group-hover:text-white">
                                      <Icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                      <div className="text-sm font-semibold text-foreground">
                                        {t(itemKey) || item.title}
                                      </div>
                                      <div className="text-xs text-muted-foreground">{item.description}</div>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                            <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                              <span className="text-xs text-muted-foreground">
                                {link.items.length} {t(navKey)}
                              </span>
                              <Link href={link.href} className="flex items-center gap-1 text-xs font-semibold text-[#21438f] hover:underline">
                                {t('seeAll') || 'View all'} <ChevronRight className="h-3 w-3" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={() => setSearchOpen((v) => !v)}
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </Button>
              <ThemeToggle />
              <Button asChild variant="outline" size="sm" className="hidden md:inline-flex border-[#21438f]/30 text-[#21438f] hover:bg-[#21438f]/10">
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5">
                  <Phone className="h-4 w-4 text-[#3bc3f3]" />
                  {t('call')}
                </a>
              </Button>
              <Button asChild size="sm" className="hidden md:inline-flex bg-[#21438f] hover:bg-[#1a3573] text-white">
                <Link href="/book" className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-[#3bc3f3]" />
                  {t('bookAppointment')}
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Search bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-border bg-background"
            >
              <div className="container-wide py-4">
                <form action="/search" method="get" className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    name="q"
                    placeholder={t('searchPlaceholder')}
                    className="flex-1 bg-transparent text-lg outline-none placeholder:text-muted-foreground"
                    autoFocus
                    aria-label="Search"
                  />
                  <Button type="submit" size="sm" className="bg-[#21438f] hover:bg-[#1a3573] text-white">Search</Button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-background p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center">
                  <div className="relative flex h-10 w-36 shrink-0 items-center">
                    <Image 
                      src="/Logo.png" 
                      alt="Manha Medical Center Logo" 
                      fill
                      sizes="144px"
                      className="object-contain object-left" 
                    />
                  </div>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile navigation">
                {navLinks.map((link) => {
                  const navKey = getTranslationKey(link.title);
                  return (
                    <div key={link.title}>
                      {link.items.length > 0 ? (
                        <Fragment>
                          <button
                            onClick={() => setMegaOpen(megaOpen === link.title ? null : link.title)}
                            className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium hover:bg-muted"
                          >
                            {t(navKey) || link.title}
                            <ChevronDown className={cn('h-4 w-4 transition-transform', megaOpen === link.title && 'rotate-180')} />
                          </button>
                          <AnimatePresence>
                            {megaOpen === link.title && (
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: 'auto' }}
                                exit={{ height: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="ml-3 flex flex-col border-l border-border pl-3">
                                  {link.items.map((item) => {
                                    const itemKey = getTranslationKey(item.title);
                                    return (
                                      <Link
                                        key={item.href}
                                        href={item.href}
                                        className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-[#21438f]"
                                      >
                                        {t(itemKey) || item.title}
                                      </Link>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </Fragment>
                      ) : (
                        <Link
                          href={link.href}
                          className="block rounded-lg px-3 py-3 text-base font-medium hover:bg-muted"
                        >
                          {t(navKey) || link.title}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </nav>

              <div className="mt-6 flex flex-col gap-3">
                <Button asChild size="lg" className="w-full bg-[#21438f] hover:bg-[#1a3573] text-white">
                  <Link href="/book" className="flex items-center justify-center gap-2">
                    <Calendar className="h-5 w-5 text-[#3bc3f3]" />
                    {t('bookAppointment')}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full border-[#21438f]/30 text-[#21438f] hover:bg-[#21438f]/10">
                  <a href={`tel:${siteConfig.phone}`} className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5 text-[#3bc3f3]" />
                    {t('call')} Now
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg" className="w-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20">
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
}