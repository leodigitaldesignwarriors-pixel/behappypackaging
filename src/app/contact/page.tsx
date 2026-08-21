import type { Metadata } from "next";
import { EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/animation/Reveal";
import PageHero from "@/components/ui/PageHero";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
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
                    {/* TODO: client to provide real phone number */}
                    <p className="text-sm text-stone/60">To be added</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-ink" />
                  <div>
                    <p className="text-sm font-semibold text-ink">Address</p>
                    {/* TODO: client to provide real business address */}
                    <p className="text-sm text-stone/60">To be added</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* TODO: replace with real embedded map once address is confirmed */}
            <PlaceholderMedia label="Map" aspect="aspect-[4/3]" rounded="rounded-2xl" />
          </Reveal>

          <Reveal delay={0.05}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
