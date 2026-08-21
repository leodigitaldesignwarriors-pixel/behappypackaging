import type { Metadata } from "next";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/animation/Reveal";
import StackingCards from "@/components/animation/StackingCards";
import StatCounter from "@/components/animation/StatCounter";
import PageHero from "@/components/ui/PageHero";
import PillButton from "@/components/ui/PillButton";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import { siteConfig } from "@/data/site";
import { cacheBustedSrc } from "@/lib/cacheBust";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "From brief to delivery in 8–12 business days: brief & quote, design & dieline, prototype & proof, print & deliver.",
};

const stepDetails: Record<number, string[]> = {
  1: ["Share product dimensions, quantity, and timeline", "Itemized quote back within one business day", "Applies to manufacturing, design, or sample requests"],
  2: ["Print-ready dieline built to your product's exact size", "Brand application and finish selection", "Unlimited revision rounds within the design phase"],
  3: ["Physical or digital proof, depending on product type", "Structural and color check before full production", "Sign-off required before we move to print"],
  4: ["Full production run begins immediately after approval", "Shipped via DHL, FedEx, or USPS with tracking", "Lands on your dock 8–12 business days from kickoff"],
};

export default function OurProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title="From brief to delivery, in four steps."
        subtitle="The same process powers both manufacturing and design-only engagements — you just enter and exit at different points."
        heroImage={cacheBustedSrc("/images/hero/our-process-hero.jpg")}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal stagger={0.1} className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          <div>
            <p className="font-heading text-4xl font-extrabold text-ink sm:text-5xl">
              <StatCounter value={1} />
            </p>
            <p className="mt-2 text-sm font-semibold text-ink">Business day to quote</p>
          </div>
          <div>
            <p className="font-heading text-4xl font-extrabold text-ink sm:text-5xl">
              <StatCounter value={siteConfig.turnaround.min} suffix={`–${siteConfig.turnaround.max}`} />
            </p>
            <p className="mt-2 text-sm font-semibold text-ink">Day average turnaround</p>
          </div>
          <div>
            <p className="font-heading text-4xl font-extrabold text-ink sm:text-5xl">
              <StatCounter value={4} />
            </p>
            <p className="mt-2 text-sm font-semibold text-ink">Steps, start to finish</p>
          </div>
          <div>
            <p className="font-heading text-4xl font-extrabold text-ink sm:text-5xl">
              <StatCounter value={siteConfig.moq} />
            </p>
            <p className="mt-2 text-sm font-semibold text-ink">Unit minimum order</p>
          </div>
        </Reveal>
      </section>

      <section className="bg-black py-20 text-off-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                  <h2 className="mt-6 font-heading text-2xl font-bold sm:text-3xl">{step.title}</h2>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-off-white/70 sm:text-base">
                    {step.description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {stepDetails[step.step].map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5 text-sm text-off-white/70">
                        <CheckCircle weight="fill" size={16} className="mt-0.5 shrink-0 text-yellow" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 inline-block rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/60">
                    {step.timeframe}
                  </p>
                </div>
                <PlaceholderMedia label={step.title} aspect="aspect-[4/3]" tone="dark" variant="dot" rounded="rounded-2xl" />
              </div>
            ))}
          </StackingCards>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Ready to start your quote?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-stone">
            Manufacturing, design, or a sample — the first step is the same either way.
          </p>
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
