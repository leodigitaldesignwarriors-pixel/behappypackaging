"use client";

import { useState } from "react";
import { MagnifyingGlassPlus } from "@phosphor-icons/react";
import Reveal from "@/components/animation/Reveal";
import Magnetic from "@/components/animation/Magnetic";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import CaseStudyModal from "@/components/ui/CaseStudyModal";
import { caseStudies, type CaseStudy } from "@/data/caseStudies";

interface CaseStudiesProps {
  className?: string;
}

export default function CaseStudies({ className = "bg-off-white py-20" }: CaseStudiesProps) {
  const [active, setActive] = useState<CaseStudy | null>(null);

  return (
    <section className={className}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 max-w-xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-yellow-dim">Case Studies</p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Real brands, real packaging
          </h2>
          <p className="mt-2 text-stone">Click a project to see the work — photos, results, and what they said.</p>
        </Reveal>

        <Reveal stagger={0.08} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <button
              key={study.id}
              type="button"
              data-cursor="Expand"
              onClick={() => setActive(study)}
              className="group relative block cursor-pointer overflow-hidden rounded-2xl border border-black/5 bg-white p-1 text-left shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative overflow-hidden rounded-xl">
                <div className="transition-transform duration-500 group-hover:scale-105">
                  <PlaceholderMedia label={study.client} aspect="aspect-[4/3]" rounded="rounded-xl" />
                </div>
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink">
                  {study.industry}
                </span>
                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-yellow text-black opacity-0 transition-opacity group-hover:opacity-100">
                  <MagnifyingGlassPlus size={16} weight="bold" />
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-heading text-base font-bold text-ink">{study.client}</h3>
                <p className="mt-1 text-sm text-stone">{study.headline}</p>
              </div>
            </button>
          ))}
        </Reveal>
      </div>

      <CaseStudyModal study={active} onClose={() => setActive(null)} />
    </section>
  );
}
