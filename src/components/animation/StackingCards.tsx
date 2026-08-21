"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface StackingCardsProps {
  children: ReactNode[];
  className?: string;
}

/**
 * Sticky stacking-card scroll effect: each card sticks in place as the next
 * one scrolls up to cover it, scaling and dimming slightly as it's replaced.
 * Pure CSS `sticky` + per-card scroll progress — no scroll-jacking/pinning.
 */
export default function StackingCards({ children, className }: StackingCardsProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div className={className}>
        <div className="flex flex-col gap-6">{children}</div>
      </div>
    );
  }

  return (
    <div className={className}>
      {children.map((child, i) => (
        <StackCard key={i} index={i}>
          {child}
        </StackCard>
      ))}
    </div>
  );
}

function StackCard({ children, index }: { children: ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0.5]);

  return (
    <div ref={ref} className="sticky top-24 min-h-[70vh] py-6" style={{ zIndex: index + 1 }}>
      <motion.div style={{ scale, opacity }} className="origin-top">
        {children}
      </motion.div>
    </div>
  );
}
