"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import clsx from "clsx";
import Magnetic from "@/components/animation/Magnetic";

interface CardCarouselProps {
  children: ReactNode[];
  className?: string;
  cardClassName?: string;
}

/** Horizontal snap-scroll carousel with prev/next arrow controls. Native scroll for touch. */
export default function CardCarousel({ children, className, cardClassName }: CardCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollLeft > 8);
    setCanScrollNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-carousel-card]");
    const distance = card ? card.getBoundingClientRect().width + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: distance * direction, behavior: "smooth" });
  };

  return (
    <div className={className}>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {children.map((child, i) => (
          <div
            key={i}
            data-carousel-card
            className={clsx(
              "w-[78%] shrink-0 snap-start xs:w-[60%] sm:w-[42%] lg:w-[30%]",
              cardClassName
            )}
          >
            {child}
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-end gap-3">
        <Magnetic>
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollByCard(-1)}
            disabled={!canScrollPrev}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-2 border-black/10 text-ink transition-colors hover:border-black disabled:cursor-default disabled:opacity-30 disabled:hover:border-black/10"
          >
            <ArrowLeft size={18} />
          </button>
        </Magnetic>
        <Magnetic>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollByCard(1)}
            disabled={!canScrollNext}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-black text-white transition-opacity hover:bg-ink disabled:cursor-default disabled:opacity-30"
          >
            <ArrowRight size={18} />
          </button>
        </Magnetic>
      </div>
    </div>
  );
}
