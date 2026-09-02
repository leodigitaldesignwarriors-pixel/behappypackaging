import type { Metadata } from "next";
import { EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/animation/Reveal";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/data/site";
import { cacheBustedSrc } from "@/lib/cacheBust";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} — questions about quotes, samples, or design services.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk packaging."
        subtitle="Questions about a quote, a sample, or a design project? Send us a message and we'll get back to you."
        heroImage={cacheBustedSrc("/images/hero/contact-hero.jpg")}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[380px_1fr]">
          <Reveal className="space-y-8">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-yellow-dim">Get in Touch</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <EnvelopeSimple size={20} className="mt-0.5 shrink-0 text-ink" />
                  <div>
                    <p className="text-sm font-semibold text-ink">Email</p>
                    <p className="text-sm text-stone">{siteConfig.contact.email}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={20} className="mt-0.5 shrink-0 text-ink" />
                  <div>
                    <p className="text-sm font-semibold text-ink">Phone</p>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`}
                      className="text-sm text-stone transition-colors hover:text-ink"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-ink" />
                  <div>
                    <p className="text-sm font-semibold text-ink">Address</p>
                    <p className="text-sm text-stone">{siteConfig.contact.address}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <iframe
                title="Map showing our office location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.contact.address)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-[4/3] w-full border-0"
              />
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
