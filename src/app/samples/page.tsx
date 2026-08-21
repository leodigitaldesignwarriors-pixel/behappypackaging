import type { Metadata } from "next";
import { Package, Swatches } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/animation/Reveal";
import PageHero from "@/components/ui/PageHero";
import PillButton from "@/components/ui/PillButton";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Samples",
  description:
    "Two ways to try before you commit: $99 printed samples for small-format boxes, or $99 unprinted paper samples for large-format boxes.",
};

export default function SamplesPage() {
  return (
    <>
      <PageHero
        eyebrow="Samples"
        title="Try before you commit."
        subtitle="See and feel your packaging before you place a production order — two sample tiers, depending on format."
      />

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal stagger={0.1} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm sm:p-10">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow text-black">
              <Package size={26} weight="bold" />
            </span>
            <h2 className="mt-6 font-heading text-2xl font-bold text-ink">
              {siteConfig.samples.printedSmall.label}
            </h2>
            <p className="mt-1 font-heading text-4xl font-extrabold text-ink">
              ${siteConfig.samples.printedSmall.price}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-stone sm:text-base">
              {siteConfig.samples.printedSmall.description} Ideal for folding cartons, rigid boxes, labels, bags,
              and pouches — anything small enough to run a real printed proof.
            </p>
            <div className="mt-8">
              <PillButton href="/get-a-quote?type=sample" variant="black" cursorText="Samples">
                Request Printed Sample
              </PillButton>
            </div>
          </div>

          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm sm:p-10">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-off-white text-ink">
              <Swatches size={26} weight="bold" />
            </span>
            <h2 className="mt-6 font-heading text-2xl font-bold text-ink">
              {siteConfig.samples.paperLarge.label}
            </h2>
            <p className="mt-1 font-heading text-4xl font-extrabold text-ink">
              ${siteConfig.samples.paperLarge.price}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-stone sm:text-base">
              {siteConfig.samples.paperLarge.description} Used for corrugated, displays, and other large-format
              packaging where a full printed prototype isn't practical.
            </p>
            <div className="mt-8">
              <PillButton href="/get-a-quote?type=sample" variant="outline" cursorText="Samples">
                Request Paper Sample
              </PillButton>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-14 rounded-3xl bg-yellow/15 p-8 text-center sm:p-10">
          <p className="mx-auto max-w-xl text-sm text-ink sm:text-base">
            Not sure which tier fits your product? Mention it in your quote request and we'll point you to the
            right one — most brands order a sample alongside their first quote.
          </p>
        </Reveal>
      </section>
    </>
  );
}
