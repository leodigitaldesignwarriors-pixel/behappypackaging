"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Reveal from "@/components/animation/Reveal";
import QuoteForm from "@/components/forms/QuoteForm";
import { siteConfig } from "@/data/site";

type QuoteType = "manufacturing" | "design" | "sample";

function GetAQuoteInner() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product") || "";
  const typeParam = searchParams.get("type");
  const initialType: QuoteType =
    typeParam === "sample" || typeParam === "design" ? typeParam : "manufacturing";

  return (
    <section className="bg-ink py-24 text-off-white sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-yellow">Get a Quote</p>
          <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
            Let's build something.
          </h1>
          <p className="mx-auto mt-3 max-w-md text-off-white/70">
            Tell us what you need — we'll follow up with pricing within one business day. Minimum order is just{" "}
            {siteConfig.moq} units.
          </p>
        </Reveal>
        <Reveal>
          <QuoteForm initialProduct={product} initialType={initialType} />
        </Reveal>
      </div>
    </section>
  );
}

export default function GetAQuoteContent() {
  return (
    <Suspense fallback={null}>
      <GetAQuoteInner />
    </Suspense>
  );
}
