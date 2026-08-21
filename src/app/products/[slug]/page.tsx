import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, CaretRight, Package, Clock, Tag } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/animation/Reveal";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import PillButton from "@/components/ui/PillButton";
import CardCarousel from "@/components/ui/CardCarousel";
import FAQAccordion from "@/components/ui/FAQAccordion";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import FinishingAddons from "@/components/sections/FinishingAddons";
import QuoteForm from "@/components/forms/QuoteForm";
import { getProductBySlug, products } from "@/data/products";
import { siteConfig } from "@/data/site";
import { cacheBustedSrc } from "@/lib/cacheBust";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.tagline}`,
    description: product.description.slice(0, 155),
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const sampleInfo =
    product.sampleTier === "printed-small" ? siteConfig.samples.printedSmall : siteConfig.samples.paperLarge;

  const industryNames = product.industries
    .map((industrySlug) => siteConfig.industries.find((i) => i.slug === industrySlug)?.name)
    .filter(Boolean);

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-black/5 bg-off-white">
        <div className="mx-auto flex max-w-7xl items-center gap-1.5 px-4 py-4 text-xs font-medium text-stone sm:px-6 lg:px-8">
          <Link href="/products" className="transition-colors hover:text-ink">
            Products
          </Link>
          <CaretRight size={10} />
          <span className="rounded-full bg-yellow/30 px-2 py-0.5 text-yellow-dim">{product.category}</span>
          <CaretRight size={10} />
          <span className="text-ink">{product.name}</span>
        </div>
      </div>

      {/* Split hero: copy + spec pills left, gallery carousel right */}
      <section className="bg-off-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal stagger={0.08}>
            <p className="mb-4 inline-block rounded-full bg-black px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
              {product.category}
            </p>
            <h1 className="font-heading text-4xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-3 text-lg text-stone">{product.tagline}</p>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-stone sm:text-base">
              {product.description.slice(0, 220)}…
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-xs font-semibold text-ink">
                <Package size={14} className="text-yellow-dim" />
                {siteConfig.moq}-unit minimum
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-xs font-semibold text-ink">
                <Clock size={14} className="text-yellow-dim" />
                {siteConfig.turnaround.min}–{siteConfig.turnaround.max} day turnaround
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-xs font-semibold text-ink">
                <Tag size={14} className="text-yellow-dim" />${sampleInfo.price} sample
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <PillButton href={`/get-a-quote?product=${product.slug}`} variant="yellow" size="lg" cursorText="Quote">
                Get a Free Quote
              </PillButton>
              <PillButton
                href={`/get-a-quote?product=${product.slug}&type=sample`}
                variant="outline"
                size="lg"
                cursorText="Samples"
              >
                Request a Sample
              </PillButton>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <CardCarousel>
              {Array.from({ length: product.galleryCount }).map((_, i) => (
                <PlaceholderMedia
                  key={i}
                  label={`${product.name} ${i + 1}`}
                  aspect="aspect-[4/3]"
                  rounded="rounded-2xl"
                  src={cacheBustedSrc(`/images/products/${product.slug}/gallery-${i + 1}.png`)}
                  priority={i === 0}
                />
              ))}
            </CardCarousel>
          </Reveal>
        </div>
      </section>

      {/* Use cases (light) */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-black/5 bg-white p-8">
            <h2 className="font-heading text-xl font-bold text-ink">Use cases &amp; industries</h2>
            <ul className="mt-5 space-y-3">
              {product.useCases.map((useCase) => (
                <li key={useCase} className="flex items-start gap-2.5 text-sm text-stone sm:text-base">
                  <CheckCircle weight="fill" size={18} className="mt-0.5 shrink-0 text-yellow-dim" />
                  {useCase}
                </li>
              ))}
            </ul>
            {industryNames.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2 border-t border-black/5 pt-6">
                {industryNames.map((name) => (
                  <span
                    key={name}
                    className="rounded-full bg-off-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-stone"
                  >
                    {name}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-3xl border border-black/5 bg-white p-8">
            <h2 className="font-heading text-xl font-bold text-ink">About this packaging type</h2>
            <p className="mt-5 text-sm leading-relaxed text-stone sm:text-base">{product.description}</p>
          </div>
        </Reveal>
      </section>

      {/* Materials (dark band for contrast) */}
      <section className="bg-black py-16 text-off-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-yellow">Materials &amp; Finishes</p>
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">What it's made from</h2>
          </Reveal>
          <Reveal stagger={0.06} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {product.materials.map((material) => (
              <div key={material} className="rounded-2xl border border-white/10 p-5">
                <CheckCircle weight="fill" size={20} className="text-yellow" />
                <p className="mt-3 text-sm text-off-white/80">{material}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <FinishingAddons
        title={`Finish your ${product.name.toLowerCase()} the right way`}
        subtitle="Popular add-ons for this product — mix and match on your quote."
      />

      {/* Inquiry: FAQ + inline quote form side by side */}
      <section className="bg-yellow/10 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 max-w-xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-yellow-dim">Inquire</p>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Questions, then a quote
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <h3 className="mb-4 font-heading text-lg font-bold text-ink">{product.name} FAQs</h3>
              <FAQAccordion items={product.faqs} />
            </Reveal>
            <Reveal delay={0.05}>
              <QuoteForm initialProduct={product.slug} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Samples CTA */}
      <section className="bg-ink py-16 text-off-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-white p-8 text-center text-ink shadow-sm sm:flex-row sm:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-yellow-dim">Try before you commit</p>
              <h2 className="mt-1 font-heading text-2xl font-bold text-ink">
                ${sampleInfo.price} {sampleInfo.label.toLowerCase()}
              </h2>
              <p className="mt-1 max-w-md text-sm text-stone">{sampleInfo.description}</p>
            </div>
            <PillButton href={`/get-a-quote?product=${product.slug}&type=sample`} variant="black" cursorText="Samples">
              Request a Sample
            </PillButton>
          </Reveal>
        </div>
      </section>

      <WhatsAppButton message={`Hi! I'm interested in ${product.name} packaging.`} />
    </>
  );
}
