"use client";

import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CaretDown } from "@phosphor-icons/react";
import Reveal from "@/components/animation/Reveal";
import Magnetic from "@/components/animation/Magnetic";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import { products, categoryGroups } from "@/data/products";
import { siteConfig } from "@/data/site";

type Tab = "type" | "industry";

function ProductsPageContent() {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState<Tab>(searchParams.get("industry") ? "industry" : "type");
  const [activeIndustry, setActiveIndustry] = useState(searchParams.get("industry") || "");
  const [activeCategory, setActiveCategory] = useState(searchParams.get("category") || "");

  const filteredByCategory = useMemo(
    () => (activeCategory ? products.filter((p) => p.category === activeCategory) : products),
    [activeCategory]
  );

  const filteredByIndustry = useMemo(
    () => (activeIndustry ? products.filter((p) => p.industries.includes(activeIndustry)) : products),
    [activeIndustry]
  );

  return (
    <>
      {/* Split hero — bento thumbnail grid instead of a full-bleed banner */}
      <section className="bg-off-white pb-4 pt-14 sm:pt-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8">
          <Reveal stagger={0.08}>
            <p className="mb-4 inline-block rounded-full bg-yellow px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-black">
              Products
            </p>
            <h1 className="font-heading text-4xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-5xl">
              Every packaging format, one dieline library.
            </h1>
            <p className="mt-4 max-w-md text-base text-stone sm:text-lg">
              Ten categories, built to your product's exact dimensions — browse by type or by industry.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border-2 border-black/10 px-4 py-1.5 text-xs font-semibold text-ink">
                {products.length} categories
              </span>
              <span className="rounded-full border-2 border-black/10 px-4 py-1.5 text-xs font-semibold text-ink">
                {siteConfig.industries.length} industries served
              </span>
              <span className="rounded-full border-2 border-black/10 px-4 py-1.5 text-xs font-semibold text-ink">
                {siteConfig.moq}-unit minimum
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="grid grid-cols-2 gap-3">
            <div className="col-span-2 row-span-1">
              <PlaceholderMedia
                label={products[2].name}
                aspect="aspect-[16/9]"
                rounded="rounded-2xl"
                tone="dark"
                src={`/images/products/${products[2].slug}/thumbnail.png`}
              />
            </div>
            <PlaceholderMedia
              label={products[0].name}
              aspect="aspect-square"
              rounded="rounded-2xl"
              src={`/images/products/${products[0].slug}/thumbnail.png`}
            />
            <PlaceholderMedia
              label={products[6].name}
              aspect="aspect-square"
              rounded="rounded-2xl"
              src={`/images/products/${products[6].slug}/thumbnail.png`}
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex gap-2">
          <button
            type="button"
            onClick={() => setTab("type")}
            className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
              tab === "type" ? "bg-black text-white" : "border-2 border-black/10 text-ink hover:border-black/40"
            }`}
          >
            By product type
          </button>
          <button
            type="button"
            onClick={() => setTab("industry")}
            className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
              tab === "industry" ? "bg-black text-white" : "border-2 border-black/10 text-ink hover:border-black/40"
            }`}
          >
            By industry
          </button>
        </div>

        {tab === "type" ? (
          <div>
            <div className="mb-8 flex flex-wrap gap-2">
              <FilterPill label="All" active={!activeCategory} onClick={() => setActiveCategory("")} />
              {categoryGroups.map((g) => (
                <FilterPill
                  key={g.group}
                  label={g.label}
                  active={activeCategory === g.group}
                  onClick={() => setActiveCategory(g.group)}
                />
              ))}
            </div>
            <Reveal stagger={0.05} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredByCategory.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </Reveal>
          </div>
        ) : (
          <div>
            <div className="mb-8 flex flex-wrap gap-2">
              <FilterPill label="All" active={!activeIndustry} onClick={() => setActiveIndustry("")} />
              {siteConfig.industries.map((ind) => (
                <FilterPill
                  key={ind.slug}
                  label={ind.name}
                  active={activeIndustry === ind.slug}
                  onClick={() => setActiveIndustry(ind.slug)}
                />
              ))}
            </div>
            <Reveal stagger={0.05} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredByIndustry.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </Reveal>
          </div>
        )}
      </section>
    </>
  );
}

function FilterPill({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer rounded-full border-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
        active ? "border-yellow bg-yellow text-black" : "border-black/10 text-stone hover:border-black/30"
      }`}
    >
      {label}
    </button>
  );
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      data-cursor="View"
      className="group relative block overflow-hidden rounded-2xl border border-black/5 bg-white p-1 shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative overflow-hidden rounded-xl">
        <span className="absolute left-3 top-3 z-10 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink">
          {product.category}
        </span>
        <div className="transition-transform duration-500 group-hover:scale-105">
          <PlaceholderMedia
            label={product.name}
            aspect="aspect-[4/3]"
            rounded="rounded-xl"
            src={`/images/products/${product.slug}/thumbnail.png`}
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
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <ProductsPageContent />
    </Suspense>
  );
}
