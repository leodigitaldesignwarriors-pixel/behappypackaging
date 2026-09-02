import type { Metadata } from "next";
import { Lightning, Heart, Leaf, Handshake } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/animation/Reveal";
import Parallax from "@/components/animation/Parallax";
import StatCounter from "@/components/animation/StatCounter";
import PageHero from "@/components/ui/PageHero";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import PillButton from "@/components/ui/PillButton";
import { siteConfig } from "@/data/site";
import { cacheBustedSrc } from "@/lib/cacheBust";

export const metadata: Metadata = {
  title: "About",
  description: `${siteConfig.name} has been designing and manufacturing custom packaging from the USA since ${siteConfig.foundedYear}.`,
};

const values = [
  {
    icon: Lightning,
    title: "Fast, not rushed",
    description: "8–12 day production without cutting corners on proofing or quality control.",
  },
  {
    icon: Heart,
    title: "Design-first",
    description: "Every order gets access to our design team, not just a print queue.",
  },
  {
    icon: Leaf,
    title: "Lower-impact by default",
    description: "Recycled and FSC-certified materials available across every category we make.",
  },
  {
    icon: Handshake,
    title: "Low minimums, real partnership",
    description: "A 100-unit MOQ so new and growing brands aren't locked out of custom packaging.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        tone="light"
        eyebrow="About"
        title={`Custom packaging, made happy since ${siteConfig.foundedYear}.`}
        subtitle={`${siteConfig.name} is a ${siteConfig.basedIn}-based packaging manufacturer and design studio, built for brands that need real packaging without the ten-thousand-unit minimums.`}
        heroImage={cacheBustedSrc("/images/hero/about-hero.jpg")}
      />

      <section className="relative overflow-hidden py-20">
        <Parallax speed={0.3} className="absolute -left-24 top-10 hidden h-[380px] w-[380px] opacity-30 lg:block">
          <PlaceholderMedia
            label="Our story"
            aspect="aspect-square"
            variant="dot"
            className="h-full"
            src={cacheBustedSrc("/images/illustrations/our-story.png")}
          />
        </Parallax>
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-yellow-dim">Our Story</p>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Started because ordering custom packaging shouldn't require a warehouse.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-stone sm:text-lg">
              <p>
                We founded {siteConfig.name} in {siteConfig.foundedYear} after watching too many small and
                growing brands get priced out of custom packaging by minimum order quantities built for
                enterprise buyers. Our answer was simple: keep the MOQ low, keep the design team in-house, and
                keep production fast enough that a 100-unit order doesn't sit behind a 10,000-unit run.
              </p>
              <p>
                Since then we've built out a full manufacturing and design operation covering folding cartons,
                corrugated, rigid boxes, displays, labels, bags, pouches, and eco-friendly packaging — shipping
                to the USA, UK, and Canada with an average 8–12 day turnaround.
              </p>
              <p>
                Our team and headquarters are based in Denver, Colorado, where quoting, design, and customer
                support all happen — while our printing and production facility runs out of Pakistan, giving us
                the manufacturing capacity to keep quality high and minimums low without passing enterprise-scale
                overhead on to you.
              </p>
              <p>
                We're still {siteConfig.basedIn}-based, still design-led, and still built around the idea that a
                brand's first custom packaging order shouldn't be its hardest one.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-off-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 max-w-xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-yellow-dim">What We Value</p>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              How we make decisions
            </h2>
          </Reveal>
          <Reveal stagger={0.08} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-black/5 bg-white p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-off-white text-ink">
                  <value.icon size={20} weight="bold" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{value.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-black py-20 text-off-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal stagger={0.1} className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            <div>
              <p className="font-heading text-4xl font-extrabold text-yellow sm:text-5xl">
                <StatCounter value={siteConfig.yearsInBusiness} suffix="+" />
              </p>
              <p className="mt-2 text-sm font-semibold">Years in business</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-extrabold text-yellow sm:text-5xl">
                <StatCounter value={3} />
              </p>
              <p className="mt-2 text-sm font-semibold">Countries served</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-extrabold text-yellow sm:text-5xl">
                <StatCounter value={siteConfig.moq} />
              </p>
              <p className="mt-2 text-sm font-semibold">Unit minimum order</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-extrabold text-yellow sm:text-5xl">
                <StatCounter value={10} />
              </p>
              <p className="mt-2 text-sm font-semibold">Packaging categories</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Let's make your packaging happen
          </h2>
          <div className="mt-8">
            <PillButton href="/get-a-quote" variant="black" size="lg" cursorText="Quote">
              Get a Free Quote
            </PillButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
