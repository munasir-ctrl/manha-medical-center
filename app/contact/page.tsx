import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Sparkles } from 'lucide-react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { siteConfig } from '@/lib/site';
import { breadcrumbSchema } from '@/lib/schema';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Manha Medical Center in Sharjah, UAE. Call us, send a message, or visit our clinic in Commercial Muwailah.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }]} />
      
      <section className="relative section-pad bg-radial-gradient">
        {/* Background decorative grid */}
        <div className="absolute inset-0 bg-grid-pattern/30 pointer-events-none" />

        <div className="relative z-10 container-wide">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center mb-16 flex flex-col items-center">
            
            {/* Logo Integration */}
            <div className="mb-6 relative w-[200px] h-[55px] bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl flex items-center justify-center">
              <Image
                src="/Logo.png"
                alt="Manha Medical Center Logo"
                fill
                priority
                className="object-contain p-1"
              />
            </div>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-primary-soft text-primary mb-4">
              <Sparkles className="h-3.5 w-3.5" /> We Are Here For You
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground text-balance">
              Get in <span className="text-gradient">touch</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-muted-foreground text-pretty">
              At Manha Medical Center, we are here to assist you with any questions, concerns, or appointment requests.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-start max-w-6xl mx-auto">
            {/* Contact Information Cards */}
            <div className="space-y-4">
              {/* Phone 1 */}
              <a href="tel:+97165791444" className="flex items-center gap-5 rounded-2xl glass p-5 card-hover border border-border/80 group">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary shrink-0 transition-transform group-hover:scale-110">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground text-lg">Main Line</div>
                  <div className="text-sm text-muted-foreground mt-0.5">+971 6 5791444</div>
                </div>
              </a>

              {/* Phone 2 / WhatsApp */}
              <a href="https://wa.me/971563599449" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 rounded-2xl glass p-5 card-hover border border-border/80 group">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366]/10 text-[#25D366] shrink-0 transition-transform group-hover:scale-110">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground text-lg">Mobile & WhatsApp</div>
                  <div className="text-sm text-muted-foreground mt-0.5">+971 56 3599449</div>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:info@manhamc.ae" className="flex items-center gap-5 rounded-2xl glass p-5 card-hover border border-border/80 group">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary shrink-0 transition-transform group-hover:scale-110">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground text-lg">Email</div>
                  <div className="text-sm text-muted-foreground mt-0.5">info@manhamc.ae</div>
                </div>
              </a>

              {/* Visit Us */}
              <div className="flex items-center gap-5 rounded-2xl glass p-5 border border-border/80">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground text-lg">Visit us</div>
                  <div className="text-sm text-muted-foreground mt-0.5">Commercial Muwailah, Building #6, Ground Floor, Near Med7 Pharmacy, Opposite to Nesto Hypermarket, Sharjah, UAE</div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-5 rounded-2xl glass p-5 border border-border/80">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary shrink-0 mt-0.5">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground text-lg mb-1">Working hours</div>
                  <div className="space-y-1">
                    {siteConfig.hours.map((h) => (
                      <div key={h.day} className="text-sm text-muted-foreground flex justify-between gap-4">
                        <span className="font-medium text-foreground/80">{h.day}:</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="glass p-8 sm:p-10 rounded-3xl border border-border/80 shadow-2xl space-y-5">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground mb-2">Send us a message</h2>
              <p className="text-sm text-muted-foreground mb-6">Fill out the form below and our care coordinators will get back to you promptly.</p>
              
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-foreground">Name</label>
                <input id="name" name="name" type="text" required className="w-full rounded-xl border border-input bg-background/80 px-4 py-3 text-sm outline-none focus-ring transition-all" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="phone2" className="mb-2 block text-sm font-semibold text-foreground">Phone</label>
                <input id="phone2" name="phone" type="tel" required className="w-full rounded-xl border border-input bg-background/80 px-4 py-3 text-sm outline-none focus-ring transition-all" placeholder="+971 50 123 4567" />
              </div>
              <div>
                <label htmlFor="email2" className="mb-2 block text-sm font-semibold text-foreground">Email</label>
                <input id="email2" name="email" type="email" className="w-full rounded-xl border border-input bg-background/80 px-4 py-3 text-sm outline-none focus-ring transition-all" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-foreground">Message</label>
                <textarea id="message" name="message" rows={4} required className="w-full rounded-xl border border-input bg-background/80 px-4 py-3 text-sm outline-none focus-ring transition-all resize-none" placeholder="How can we help?" />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                <Send className="h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }])) }} 
      />
    </div>
  );
}