"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "@phosphor-icons/react";
import Link from "next/link";
import { useReducedMotion } from "@/lib/useReducedMotion";

export interface Hotspot {
  id: string;
  x: number;
  y: number;
  name: string;
  priceLabel: string;
  href: string;
}

interface ImageHotspotProps {
  hotspots: Hotspot[];
}

/** Pulsing "+" markers over a lifestyle image that expand into a product card on hover/tap. */
export default function ImageHotspot({ hotspots }: ImageHotspotProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();

  return (
    <>
      {hotspots.map((spot) => {
        const isActive = activeId === spot.id;
        return (
          <div
            key={spot.id}
            className="absolute z-10"
            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
            onMouseEnter={() => setActiveId(spot.id)}
            onMouseLeave={() => setActiveId((current) => (current === spot.id ? null : current))}
          >
            <button
              type="button"
              data-cursor="View"
              aria-expanded={isActive}
              aria-label={`View ${spot.name}`}
              onClick={() => setActiveId((current) => (current === spot.id ? null : spot.id))}
              className="relative -translate-x-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-yellow text-black shadow-lg ring-2 ring-white/70 transition-transform hover:scale-110"
            >
              {!reducedMotion && (
                <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-yellow/70 motion-reduce:hidden" />
              )}
              <Plus weight="bold" size={16} />
            </button>

            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 4 }}
                  transition={{ type: "spring", stiffness: 340, damping: 26 }}
                  className="absolute left-1/2 top-full z-20 mt-2 w-44 -translate-x-1/2 rounded-2xl border border-black/5 bg-white p-3 text-left shadow-xl"
                >
                  <Link href={spot.href} data-cursor="Explore" className="block">
                    <div className="mb-2 aspect-[4/3] w-full rounded-lg bg-[repeating-linear-gradient(45deg,var(--color-stone-light),var(--color-stone-light)_8px,var(--color-off-white)_8px,var(--color-off-white)_16px)]" />
                    <p className="text-sm font-semibold text-ink">{spot.name}</p>
                    <p className="text-xs text-stone">{spot.priceLabel}</p>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </>
  );
}
