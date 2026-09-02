"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X, Quotes, CheckCircle } from "@phosphor-icons/react";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import PillButton from "@/components/ui/PillButton";
import type { CaseStudy } from "@/data/caseStudies";

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
}

export default function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!study) return;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [study, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {study && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-10"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-off-white text-ink transition-colors hover:bg-black hover:text-white sm:right-6 sm:top-6"
            >
              <X size={18} weight="bold" />
            </button>

            <span className="inline-block rounded-full bg-yellow px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black">
              {study.industry}
            </span>
            <h2 id="case-study-title" className="mt-4 font-heading text-2xl font-extrabold text-ink sm:text-3xl">
              {study.headline}
            </h2>
            <p className="mt-1 text-sm font-semibold text-stone">
              {study.client} &middot; {study.productName}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {Array.from({ length: study.galleryCount }).map((_, i) => (
                <PlaceholderMedia
                  key={i}
                  label={`${study.client} ${i + 1}`}
                  aspect="aspect-square"
                  rounded="rounded-xl"
                  src={`/images/case-studies/${study.id}/gallery-${i + 1}.jpg`}
                />
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-stone sm:text-base">{study.summary}</p>

            <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {study.results.map((result) => (
                <li key={result} className="flex items-start gap-2 text-sm text-stone">
                  <CheckCircle weight="fill" size={16} className="mt-0.5 shrink-0 text-yellow-dim" />
                  {result}
                </li>
              ))}
            </ul>

            {study.quote && (
              <div className="mt-7 rounded-2xl bg-off-white p-6">
                <Quotes weight="fill" size={22} className="text-yellow-dim" />
                <p className="mt-3 text-sm leading-relaxed text-ink sm:text-base">&ldquo;{study.quote}&rdquo;</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-stone">
                  {study.quoteAuthor} &middot; {study.quoteRole}
                </p>
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <PillButton href={`/products/${study.productSlug}`} variant="black" cursorText="View">
                View {study.productName}
              </PillButton>
              <PillButton href={`/get-a-quote?product=${study.productSlug}`} variant="yellow" cursorText="Quote">
                Get a Similar Quote
              </PillButton>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
