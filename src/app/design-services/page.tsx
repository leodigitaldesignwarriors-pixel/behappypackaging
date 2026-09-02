import type { Metadata } from "next";
import { Ruler, FileSvg, Cube, ArrowsClockwise } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/animation/Reveal";
import PageHero from "@/components/ui/PageHero";
import PillButton from "@/components/ui/PillButton";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import StackingCards from "@/components/animation/StackingCards";
import { siteConfig } from "@/data/site";
import { cacheBustedSrc } from "@/lib/cacheBust";

export const metadata: Metadata = {
  title: "Design Services",
  description:
    "Structural and dieline design, brand application, 3D visualization, and prototyping — packaging design as a standalone service, whether or not you manufacture with us.",
};

const included = [
  {
    icon: Ruler,
    title: "Structural design",
    description: "Custom dielines engineered around your product's exact dimensions and shipping needs.",
  },
  {
    icon: FileSvg,
    title: "Print-ready dielines",
    description: "Production-ready files, checked and formatted for our press or your own printer.",
  },
  {
    icon: Cube,
    title: "3D mockups & renders",
    description: "Photorealistic renders so you can approve the look before a single sheet gets printed.",
  },
  {
    icon: ArrowsClockwise,
    title: "Revisions included",
    description: "Structured revision rounds built into every design engagement, not billed piecemeal.",
  },
];

const portfolio = [
  { label: "Cosmetic rigid box", aspect: "aspect-[3/4]", file: "cosmetic-rigid-box.jpg" },
  { label: "Coffee pouch system", aspect: "aspect-[4/3]", file: "coffee-pouch-system.jpg" },
  { label: "Retail display unit", aspect: "aspect-[4/5]", file: "retail-display-unit.jpg" },
  { label: "Folding carton range", aspect: "aspect-[4/3]", file: "folding-carton-range.jpg" },
  { label: "Mailer bag branding", aspect: "aspect-[3/4]", file: "mailer-bag-branding.jpg" },
  { label: "Gift box suite", aspect: "aspect-[4/3]", file: "gift-box-suite.jpg" },
];

export default function DesignServicesPage() {
  return (
    <>
      <PageHero
        tone="light"
        eyebrow="Design Services"
        title="Packaging design, without the manufacturing commitment."
        subtitle="Structural design, brand application, 3D visualization, and prototyping — as a standalone service, or paired with production."
        heroImage={cacheBustedSrc("/images/hero/design-services-hero.jpg")}
      >
        <div className="flex flex-wrap gap-4 pt-2">
          <PillButton href="/get-a-quote?type=design" variant="yellow" size="lg" cursorText="Quote">
            Start a Design Project
          </PillButton>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mb-10 max-w-xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-yellow-dim">What's Included</p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Everything from sketch to sign-off
          </h2>
        </Reveal>
        <Reveal stagger={0.08} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {included.map((item) => (
            <div key={item.title} className="rounded-2xl border border-black/5 bg-white p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-off-white text-ink">
                <item.icon size={20} weight="bold" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{item.description}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="bg-black py-20 text-off-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-yellow">How It Works</p>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">Our Process</h2>
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

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mb-10 max-w-xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-yellow-dim">Portfolio</p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            A few things we've designed
          </h2>
        </Reveal>
        <Reveal stagger={0.06} className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {portfolio.map((item) => (
            <div key={item.label} className="mb-5 break-inside-avoid">
              <PlaceholderMedia
                label={item.label}
                aspect={item.aspect}
                rounded="rounded-2xl"
                src={cacheBustedSrc(`/images/design-portfolio/${item.file}`)}
              />
            </div>
          ))}
        </Reveal>
      </section>

      <section className="bg-ink py-20 text-off-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
              Have a packaging idea worth designing right?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-off-white/70">
              Tell us about your product — we'll scope the design engagement and follow up within one business day.
            </p>
            <div className="mt-8">
              <PillButton href="/get-a-quote?type=design" variant="yellow" size="lg" cursorText="Quote">
                Start a Design Project
              </PillButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
