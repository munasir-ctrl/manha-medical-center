import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { departments } from '@/lib/departments';
import { doctors } from '@/lib/doctors';
import { breadcrumbSchema } from '@/lib/schema';
import { CalendarDays, Sparkles, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Book an Appointment',
  description: 'Book your appointment at Manha Medical Center in Sharjah. Choose your doctor, department, and preferred time — confirmed instantly.',
  alternates: { canonical: '/book' },
};

export default function BookPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Book Appointment', url: '/book' }]} />
      
      <section className="relative section-pad bg-radial-gradient">
        {/* Background decorative grid */}
        <div className="absolute inset-0 bg-grid-pattern/30 pointer-events-none" />

        <div className="relative z-10 container-wide max-w-2xl">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-primary-soft text-primary mb-4">
              <Sparkles className="h-3.5 w-3.5" /> Fast Online Scheduling
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground text-balance">
              Book an <span className="text-gradient">appointment</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground text-pretty">
              Schedule your visit in under 60 seconds. We will confirm your appointment by SMS and email.
            </p>
          </div>

          <form className="glass p-8 sm:p-10 rounded-3xl border border-border/80 shadow-2xl space-y-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="mb-2 block text-sm font-semibold text-foreground">First name</label>
                <input id="firstName" name="firstName" type="text" required className="w-full rounded-xl border border-input bg-background/80 px-4 py-3 text-sm outline-none focus-ring transition-all" placeholder="Ahmed" />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-2 block text-sm font-semibold text-foreground">Last name</label>
                <input id="lastName" name="lastName" type="text" required className="w-full rounded-xl border border-input bg-background/80 px-4 py-3 text-sm outline-none focus-ring transition-all" placeholder="Al Mansoori" />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-foreground">Phone number</label>
                <input id="phone" name="phone" type="tel" required className="w-full rounded-xl border border-input bg-background/80 px-4 py-3 text-sm outline-none focus-ring transition-all" placeholder="+971 50 123 4567" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-foreground">Email <span className="text-muted-foreground font-normal">(optional)</span></label>
                <input id="email" name="email" type="email" className="w-full rounded-xl border border-input bg-background/80 px-4 py-3 text-sm outline-none focus-ring transition-all" placeholder="you@example.com" />
              </div>
            </div>

            <div>
              <label htmlFor="department" className="mb-2 block text-sm font-semibold text-foreground">Department</label>
              <select id="department" name="department" className="w-full rounded-xl border border-input bg-background/80 px-4 py-3 text-sm outline-none focus-ring transition-all">
                <option value="">Select a department</option>
                {departments.map((d) => <option key={d.slug} value={d.slug}>{d.name}</option>)}
              </select>
            </div>

            <div>
              <label htmlFor="doctor" className="mb-2 block text-sm font-semibold text-foreground">Preferred doctor <span className="text-muted-foreground font-normal">(optional)</span></label>
              <select id="doctor" name="doctor" className="w-full rounded-xl border border-input bg-background/80 px-4 py-3 text-sm outline-none focus-ring transition-all">
                <option value="">Any available doctor</option>
                {doctors.map((d) => <option key={d.slug} value={d.slug}>{d.name} — {d.title}</option>)}
              </select>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="date" className="mb-2 block text-sm font-semibold text-foreground">Preferred date</label>
                <input id="date" name="date" type="date" required className="w-full rounded-xl border border-input bg-background/80 px-4 py-3 text-sm outline-none focus-ring transition-all" />
              </div>
              <div>
                <label htmlFor="time" className="mb-2 block text-sm font-semibold text-foreground">Preferred time</label>
                <select id="time" name="time" className="w-full rounded-xl border border-input bg-background/80 px-4 py-3 text-sm outline-none focus-ring transition-all">
                  <option value="">Select a time</option>
                  <option>Morning (8 AM – 12 PM)</option>
                  <option>Afternoon (12 PM – 4 PM)</option>
                  <option>Evening (4 PM – 8 PM)</option>
                  <option>Night (8 PM – 11 PM)</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="notes" className="mb-2 block text-sm font-semibold text-foreground">Reason for visit <span className="text-muted-foreground font-normal">(optional)</span></label>
              <textarea id="notes" name="notes" rows={3} className="w-full rounded-xl border border-input bg-background/80 px-4 py-3 text-sm outline-none focus-ring transition-all" placeholder="Briefly describe your concern" />
            </div>

            <button type="submit" className="w-full rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30 focus-ring flex items-center justify-center gap-2">
              <CalendarDays className="h-5 w-5" /> Confirm Appointment
            </button>

            <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1.5 pt-2">
              <ShieldCheck className="h-4 w-4 text-success" /> We will confirm your appointment within 30 minutes during working hours.
            </p>
          </form>
        </div>
      </section>

      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Book Appointment', url: '/book' }])) }} 
      />
    </div>
  );
}