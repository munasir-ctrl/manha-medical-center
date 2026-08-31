'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation, Car } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { Button } from '@/components/ui/button';

export function LocationSection() {
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIza&query=${siteConfig.geo.lat},${siteConfig.geo.lng}`;

  return (
    <section className="section-pad" aria-label="Our location">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Visit Us</span>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Find us in the heart of Sharjah
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              Conveniently located in Muwaileh Commercial with free parking and easy access from Sheikh Mohammed bin Zayed Road.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <div className="font-medium">{siteConfig.address.street}</div>
                  <div className="text-sm text-muted-foreground">{siteConfig.address.city}, {siteConfig.address.country}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <div className="font-medium">{siteConfig.phoneDisplay}</div>
                  <div className="text-sm text-muted-foreground">Emergency: {siteConfig.emergency}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  {siteConfig.hours.map((h) => (
                    <div key={h.day} className="text-sm">
                      <span className="font-medium">{h.day}:</span> {h.time}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Car className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div className="text-sm text-muted-foreground">
                  Free on-site parking available for all patients
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${siteConfig.geo.lat},${siteConfig.geo.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call Us
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-border shadow-card"
          >
            <iframe
              title="Manha Medical Center location map"
              src={mapUrl}
              className="h-[400px] w-full lg:h-[500px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
