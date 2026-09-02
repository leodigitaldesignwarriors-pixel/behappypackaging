import type { Metadata } from "next";
import Link from "next/link";
import { CaretDown, Quotes } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/animation/Reveal";
import Parallax from "@/components/animation/Parallax";
import StackingCards from "@/components/animation/StackingCards";
import FinishingAddons from "@/components/sections/FinishingAddons";
import CaseStudies from "@/components/sections/CaseStudies";
import Marquee from "@/components/animation/Marquee";
import CurlyMarquee from "@/components/animation/CurlyMarquee";
import ImageHotspot, { type Hotspot } from "@/components/animation/ImageHotspot";
import StatCounter from "@/components/animation/StatCounter";
import Magnetic from "@/components/animation/Magnetic";
import PillButton from "@/components/ui/PillButton";
import CardCarousel from "@/components/ui/CardCarousel";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import FAQAccordion from "@/components/ui/FAQAccordion";
import QuoteForm from "@/components/forms/QuoteForm";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";
import { cacheBustedSrc } from "@/lib/cacheBust";

export const metadata: Metadata = {
  title: "Custom Packaging & Design Services",
  description:
    "Folding cartons, corrugated, rigid boxes, displays, labels, bags, and eco-friendly packaging — designed and manufactured for brands of any size. 100-unit MOQ, 8–12 day turnaround.",
};

const hotspots: Hotspot[] = [
  { id: "carton", x: 24, y: 34, name: "Folding Carton", priceLabel: "Versatile all-round packaging", href: "/products/folding-carton" },
  { id: "rigid", x: 55, y: 22, name: "Rigid Box", priceLabel: "Premium & luxurious packaging", href: "/products/rigid" },
  { id: "pouch", x: 72, y: 58, name: "Pouches", priceLabel: "Flexible food pouches", href: "/products/pouches" },
  { id: "bag", x: 38, y: 72, name: "Paper Shopping Bags", priceLabel: "Stylish eco-friendly bags", href: "/products/paper-shopping-bags" },
];

const testimonials = [
  {
    quote:
      "Be Happy Packaging took our dieline from a rough sketch to a production-ready rigid box in under two weeks. The proof matched the final run almost exactly.",
    name: "Priya Nair",
    role: "Founder, Lumen Skincare",
  },
  {
    quote:
      "Low minimums meant we could finally test a limited seasonal design without ordering ten thousand units. It sold out in five days.",
    name: "Marcus Obi",
    role: "Brand Manager, Northfork Coffee",
  },
  {
    quote:
      "Their design team caught a structural issue on our mailer box before it went to print. That alone paid for the design service.",
    name: "Elena Cruz",
    role: "Ops Lead, Salt & Bloom",
  },
];

const sustainabilityFeatures = [
  "FSC-certified & recycled paper stock",
  "Curbside recyclable materials",
  "Soy & water-based inks",
  "Right-sized dielines cut shipping waste",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink text-off-white">
        <Parallax speed={0.5} className="absolute inset-0">
          <div className="h-[130%] w-full">
            <PlaceholderMedia
              label="Hero product photography"
              aspect="aspect-auto"
              tone="dark"
              rounded="rounded-none"
              className="h-full w-full"
              src={cacheBustedSrc("/images/hero/home-hero.jpg")}
              priority
              sizes="100vw"
            />
          </div>
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
          <Reveal stagger={0.12} className="max-w-2xl">
            <p className="mb-4 inline-block rounded-full bg-yellow px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-black">
              Custom packaging, made happy
            </p>
            <h1 className="font-heading text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              Packaging your brand will be proud to ship.
            </h1>
            <p className="mt-5 max-w-lg text-base text-off-white/80 sm:mt-6 sm:text-lg">
              Folding cartons, rigid boxes, corrugated, displays, bags, and eco-friendly
              packaging — designed and manufactured from a 100-unit minimum, delivered in
              8–12 business days.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <PillButton href="/get-a-quote" variant="yellow" size="lg" cursorText="Quote">
                Get a Free Quote
              </PillButton>
              <PillButton href="/products" variant="outline-light" size="lg" cursorText="Explore">
                Explore Products
              </PillButton>
            </div>
          </Reveal>
        </div>

        <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
          <CaretDown size={22} className="animate-bounce text-off-white/60" />
        </div>
      </section>

      {/* Trust marquee */}
      <Marquee variant="trust">
        {Array.from({ length: 3 }).map((_, i) => (
          <span key={i} className="flex items-center gap-8">
            {siteConfig.trustMarquee.map((item) => (
              <span key={item} className="font-heading text-sm font-semibold uppercase tracking-wide text-black">
                {item}
              </span>
            ))}
          </span>
        ))}
      </Marquee>

      {/* Stat counters */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal stagger={0.1} className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          <StatBlock value={siteConfig.yearsInBusiness} suffix="+" label="Years in business" />
          <StatBlock value={3} label="Countries served" caption="USA · UK · Canada" />
          <StatBlock value={siteConfig.moq} label="Unit minimum order" />
          <StatBlock value={siteConfig.turnaround.max} suffix=" days" label="Avg. turnaround" caption="8–12 business days" />
        </Reveal>
      </section>

      {/* What We Make */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal className="mb-10 max-w-xl">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            What We Make
          </h2>
          <p className="mt-2 text-stone">
            Ten packaging categories, one dieline library, and a design team that knows how
            to make every one of them look expensive.
          </p>
        </Reveal>

        <Reveal>
          <CardCarousel>
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                data-cursor="View"
                className="group relative block overflow-hidden rounded-2xl border border-black/5 bg-white p-1 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <div className="transition-transform duration-500 group-hover:scale-105">
                    <PlaceholderMedia
                      label={product.name}
                      aspect="aspect-[4/3]"
                      rounded="rounded-xl"
                      src={cacheBustedSrc(`/images/products/${product.slug}/thumbnail.png`)}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <div>
                    <h3 className="font-heading text-base font-bold text-ink">{product.name}</h3>
                    <p className="text-sm text-stone">{product.tagline}</p>
                  </div>
                  <Magnetic>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-off-white text-ink transition-colors group-hover:bg-yellow">
                      <CaretDown size={14} weight="bold" className="-rotate-90" />
                    </span>
                  </Magnetic>
                </div>
              </Link>
            ))}
          </CardCarousel>
        </Reveal>
      </section>

      <FinishingAddons />

      {/* Featured lifestyle + shoppable hotspots */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal className="mb-8 max-w-xl">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            See It In the Wild
          </h2>
          <p className="mt-2 text-stone">Tap a marker to see the packaging behind the shot.</p>
        </Reveal>
        <Reveal>
          <div className="relative">
            <PlaceholderMedia
              label="Lifestyle photography — packaging in use"
              aspect="aspect-[16/9]"
              tone="dark"
              variant="dot"
              src={cacheBustedSrc("/images/hero/lifestyle-hotspot.jpg")}
            />
            <ImageHotspot hotspots={hotspots} />
          </div>
        </Reveal>
      </section>

      {/* Our Process */}
      <section className="bg-black py-20 text-off-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-yellow">
                Manufacturing &amp; Design
              </p>
              <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
                Our Process
              </h2>
            </div>
            <PillButton href="/our-process" variant="outline-light" cursorText="More">
              See full process
            </PillButton>
          </Reveal>

          <StackingCards>
            {siteConfig.process.map((step) => (
              <div
                key={step.step}
                className="grid grid-cols-1 items-center gap-8 overflow-hidden rounded-3xl border border-white/10 bg-ink p-8 sm:p-10 md:grid-cols-2 md:gap-12"
              >
                <div>
                  <span className="font-heading text-6xl font-extrabold text-yellow sm:text-7xl">
                    0{step.step}
                  </span>
                  <h3 className="mt-6 font-heading text-2xl font-bold sm:text-3xl">{step.title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-off-white/70 sm:text-base">
                    {step.description}
                  </p>
                  <p className="mt-6 inline-block rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/60">
                    {step.timeframe}
                  </p>
                </div>
                <PlaceholderMedia
                  label={step.title}
                  aspect="aspect-[4/3]"
                  tone="dark"
                  variant="dot"
                  rounded="rounded-2xl"
                  src={step.image ? cacheBustedSrc(step.image) : undefined}
                />
              </div>
            ))}
          </StackingCards>
        </div>
      </section>

      {/* Samples strip */}
      <section className="border-b border-black/5 bg-yellow/20 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-ink sm:text-left sm:text-base">
            <strong className="font-heading font-bold">
              ${siteConfig.samples.printedSmall.price} printed samples
            </strong>{" "}
            (small boxes) &middot;{" "}
            <strong className="font-heading font-bold">
              ${siteConfig.samples.paperLarge.price} paper samples
            </strong>
            , unprinted (large boxes)
          </p>
          <PillButton href="/get-a-quote?type=sample" variant="black" cursorText="Samples">
            Request Samples
          </PillButton>
        </div>
      </section>

      {/* Sustainability teaser */}
      <section className="relative overflow-hidden py-20">
        <Parallax speed={0.4} className="absolute -right-24 top-0 h-full w-1/2 opacity-40">
          <PlaceholderMedia
            label="Sustainability illustration"
            aspect="aspect-square"
            variant="dot"
            className="h-full"
            src={cacheBustedSrc("/images/illustrations/sustainability.jpg")}
          />
        </Parallax>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-yellow-dim">
              Materials &amp; Sustainability
            </p>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Packaging that's kinder to the planet, by default
            </h2>
            <ul className="mt-6 space-y-3">
              {sustainabilityFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-stone sm:text-base">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-yellow-dim" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <PillButton href="/sustainability" variant="outline" cursorText="Learn">
                Explore sustainability
              </PillButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Social proof: logos + testimonials */}
      <section className="bg-off-white py-16">
        <Reveal className="mx-auto mb-16 max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wide text-stone">
            Trusted by brands across cosmetics, food & beverage, and retail
          </p>
        </Reveal>
        <Marquee variant="plain" className="opacity-60">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex h-10 w-32 shrink-0 items-center justify-center rounded-md bg-stone-light text-xs font-semibold uppercase tracking-wide text-stone"
            >
              Brand {String(i + 1).padStart(2, "0")}
            </div>
          ))}
        </Marquee>

        <div className="mt-16 bg-yellow py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal stagger={0.1} className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <figure key={t.name} className="flex flex-col rounded-2xl bg-black p-7 text-off-white">
                  <Quotes weight="fill" size={28} className="mb-4 text-yellow" />
                  <blockquote className="flex-1 text-sm leading-relaxed text-off-white/90">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 text-sm">
                    <span className="block font-heading font-bold">{t.name}</span>
                    <span className="text-off-white/60">{t.role}</span>
                  </figcaption>
                </figure>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <CaseStudies />

      <CurlyMarquee text="GOT QUESTIONS? WE'VE GOT ANSWERS" tone="dark" />

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Frequently Asked
          </h2>
        </Reveal>
        <FAQAccordion items={siteConfig.faqs} />
      </section>

      {/* Quote form */}
      <section className="bg-ink py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 text-center text-off-white">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-yellow">
              Let's build something
            </p>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
              Get Your Free Quote
            </h2>
            <p className="mx-auto mt-2 max-w-md text-off-white/70">
              Tell us what you need — we'll follow up with pricing within one business day.
            </p>
          </Reveal>
          <Reveal>
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function StatBlock({
  value,
  suffix = "",
  label,
  caption,
}: {
  value: number;
  suffix?: string;
  label: string;
  caption?: string;
}) {
  return (
    <div>
      <p className="font-heading text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
        <StatCounter value={value} suffix={suffix} />
      </p>
      <p className="mt-2 text-sm font-semibold text-ink sm:text-base">{label}</p>
      {caption && <p className="text-xs text-stone">{caption}</p>}
    </div>
  );
}
