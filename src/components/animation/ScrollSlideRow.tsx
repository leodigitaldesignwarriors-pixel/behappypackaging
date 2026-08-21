"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useMotionValueEvent, useScroll } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface ScrollSlideRowProps {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
}

/**
 * A horizontal row that slides leftward as the user scrolls the page vertically
 * through this section — no pinning/scroll-jacking, just a scroll-linked transform —
 * and can also be swiped/dragged freely with the mouse or touch at any time.
 * Travel distance is measured from the actual track/container widths so every
 * card is guaranteed to come into view by the end of the section, on any screen size.
 */
export default function ScrollSlideRow({ children, className, itemClassName }: ScrollSlideRowProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const isDragging = useRef(false);
  const [maxTravel, setMaxTravel] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const measure = () => {
      setMaxTravel(Math.max(0, track.scrollWidth - viewport.clientWidth));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    observer.observe(track);
    return () => observer.disconnect();
  }, [children.length]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (isDragging.current || reducedMotion) return;
    x.set(-progress * maxTravel);
  });

  return (
    <div ref={sectionRef} className={className}>
      <div ref={viewportRef} className="overflow-hidden">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex w-max cursor-grab gap-5 active:cursor-grabbing"
          drag={maxTravel > 0 ? "x" : false}
          dragConstraints={{ left: -maxTravel, right: 0 }}
          dragElastic={0.08}
          onDragStart={() => {
            isDragging.current = true;
          }}
          onDragEnd={() => {
            isDragging.current = false;
          }}
        >
          {children.map((child, i) => (
            <div key={i} className={itemClassName}>
              {child}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
