"use client";

import { motion, type Variants } from "framer-motion";
import { useMemo, type ElementType, type ReactNode } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
  once?: boolean;
  viewportAmount?: number;
}

const container = (stagger: number, delayChildren: number): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

const item = (y: number, duration: number): Variants => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: [0.16, 1, 0.3, 1] },
  },
});

/**
 * Fade + upward-translate reveal on scroll. Wraps direct children as staggered
 * items when `stagger` > 0; otherwise animates as a single block.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  duration = 0.6,
  y = 24,
  stagger = 0,
  once = true,
  viewportAmount = 0.2,
}: RevealProps) {
  const reducedMotion = useReducedMotion();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const MotionTag = useMemo(() => motion.create(Tag as ElementType), [Tag]);

  if (reducedMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  if (stagger > 0) {
    return (
      <MotionTag
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: viewportAmount }}
        variants={container(stagger, delay)}
      >
        {Array.isArray(children)
          ? children.map((child, i) => (
              <motion.div key={i} variants={item(y, duration)}>
                {child}
              </motion.div>
            ))
          : <motion.div variants={item(y, duration)}>{children}</motion.div>}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: viewportAmount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
