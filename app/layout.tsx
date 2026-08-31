import './globals.css';
import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FloatingActions } from '@/components/floating-actions';
import { LanguageProvider } from '@/context/LanguageContext';
import { siteConfig } from '@/lib/site';
import { organizationSchema, searchActionSchema } from '@/lib/schema';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  adjustFontFallback: true,
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `Manha Medical Center (Wellcare Medical Center) in Muwaileh, Sharjah. Your trusted destination for family medicine, dentistry, orthodontics, and Hijama therapy. Professional care, modern facilities, and expert doctors.`,
  keywords: [
    'Manha Medical Center Sharjah',
    'Wellcare Medical Center Sharjah',
    'medical clinic in Muwaileh Sharjah',
    'best clinic near Nesto Hypermarket Sharjah',
    'family medicine Sharjah UAE',
    'Hijama therapy Sharjah',
    'dentist and orthodontist Sharjah',
    'gynecology and obstetrics Sharjah',
    'affordable healthcare Sharjah',
    'multi-specialty medical center Sharjah',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { 
      index: true, 
      follow: true, 
      'max-image-preview': 'large', 
      'max-snippet': -1, 
      'max-video-preview': -1 
    },
  },
  alternates: {
    canonical: '/',
    languages: { 'en': '/', 'ar': '/ar' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: `Manha Medical Center (Wellcare Medical Center) - Providing expert medical, dental, and specialized care in the heart of Sharjah.`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Manha Medical Center Sharjah' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: `Expert healthcare at Manha Medical Center (Wellcare Medical Center), Sharjah.`,
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.webmanifest',
  category: 'medical',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <ThemeProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
            >
              Skip to content
            </a>
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
            <FloatingActions />
          </ThemeProvider>
        </LanguageProvider>
        {/* Injecting Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        {/* Injecting Search Action for Sitelinks Search Box */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(searchActionSchema()) }}
        />
      </body>
    </html>
  );
}