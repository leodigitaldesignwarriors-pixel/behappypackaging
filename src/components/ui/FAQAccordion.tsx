"use client";

import { useState } from "react";
import clsx from "clsx";
import { Plus } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/animation/Reveal";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: readonly FAQItem[];
  className?: string;
}

export default function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Reveal stagger={0.08} className={clsx("divide-y divide-black/10", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="py-2">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left"
            >
              <span className="font-heading text-base font-semibold text-ink sm:text-lg">
                {item.question}
              </span>
              <Plus
                weight="bold"
                size={18}
                className={clsx(
                  "shrink-0 text-ink transition-transform duration-300",
                  isOpen && "rotate-45"
                )}
              />
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="pb-4 pr-8 text-sm leading-relaxed text-stone sm:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </Reveal>
  );
}
