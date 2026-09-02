import type { Metadata } from "next";
import { Tree, Recycle, Drop, Ruler } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/animation/Reveal";
import Parallax from "@/components/animation/Parallax";
import PageHero from "@/components/ui/PageHero";
import PillButton from "@/components/ui/PillButton";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import { cacheBustedSrc } from "@/lib/cacheBust";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "FSC-certified and recycled materials, curbside recyclable stock, soy and water-based inks, and right-sized dielines — sustainability built into how we manufacture, not bolted on after.",
};

const features = [
  {
    icon: Tree,
    title: "FSC-certified & recycled stock",
    description:
      "Our paperboard and corrugated options are available in FSC-certified and recycled-content grades, sourced from responsibly managed forests.",
  },
  {
    icon: Recycle,
    title: "Curbside recyclable materials",
    description:
      "Most of our paper and corrugated packaging is curbside recyclable — no special drop-off required for the majority of orders.",
  },
  {
    icon: Drop,
    title: "Soy & water-based inks",
    description:
      "We print with soy- and water-based inks in place of solvent-based alternatives wherever the finish allows, reducing VOC emissions.",
  },
  {
    icon: Ruler,
    title: "Right-sized dielines",
    description:
      "Every dieline is engineered to your product's exact dimensions, cutting material waste and reducing dimensional-weight shipping costs.",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Packaging that's kinder to the planet, by default."
        subtitle="Sustainable material choices aren't a separate product line — they're available across every category we manufacture."
        heroImage={cacheBustedSrc("/images/hero/sustainability-hero.jpg")}
      />

      <section className="relative overflow-hidden py-20">
        <Parallax speed={0.35} className="absolute -right-32 top-10 hidden h-[420px] w-[420px] opacity-30 lg:block">
          <PlaceholderMedia
            label="Sustainable materials"
            aspect="aspect-square"
            variant="dot"
            className="h-full"
            src={cacheBustedSrc("/images/illustrations/sustainability.jpg")}
          />
        </Parallax>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal stagger={0.08} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-black/5 bg-white p-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-off-white text-ink">
                  <feature.icon size={24} weight="bold" />
                </span>
                <h2 className="mt-6 font-heading text-xl font-bold text-ink">{feature.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-stone sm:text-base">{feature.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-yellow py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-2xl font-extrabold tracking-tight text-black sm:text-3xl">
              Ask about eco-friendly options on any quote
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-black/70 sm:text-base">
              Manufacturing or design — we'll flag the right sustainable materials for your product and budget.
            </p>
            <div className="mt-8">
              <PillButton href="/products/eco-friendly-packaging" variant="black" cursorText="View">
                Explore Eco-Friendly Packaging
              </PillButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
