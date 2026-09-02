"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsTouchDevice } from "@/lib/useIsTouchDevice";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function CustomCursor() {
  const isTouch = useIsTouchDevice();
  const reducedMotion = useReducedMotion();
  const [hoverText, setHoverText] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springConfig = reducedMotion
    ? { damping: 60, stiffness: 900, mass: 0.2 }
    : { damping: 26, stiffness: 260, mass: 0.5 };
  const boxX = useSpring(dotX, springConfig);
  const boxY = useSpring(dotY, springConfig);

  useEffect(() => {
    if (isTouch) return;

    document.body.classList.add("cursor-none-capable");

    const handleMove = (event: MouseEvent) => {
      dotX.set(event.clientX);
      dotY.set(event.clientY);
      if (!visible) setVisible(true);

      const target = event.target as HTMLElement | null;
      const trigger = target?.closest<HTMLElement>("[data-cursor]");
      if (trigger) {
        setIsHovering(true);
        setHoverText(trigger.dataset.cursor || null);
      } else {
        setIsHovering(false);
        setHoverText(null);
      }
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleLeave);

    return () => {
      document.body.classList.remove("cursor-none-capable");
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTouch]);

  if (isTouch) return null;

  const hasLabel = isHovering && !!hoverText;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-200"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {/* Box cursor: solid black fill with a white outline — reads clearly over every
          section background, including brand yellow, without relying on blend modes. */}
      <motion.div
        className="fixed left-0 top-0 rounded-sm border-2 border-white bg-black shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
        style={{ x: boxX, y: boxY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isHovering ? 20 : 14,
          height: isHovering ? 20 : 14,
          opacity: hasLabel ? 0 : 1,
        }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Solid label box on hover */}
      <motion.div
        className="fixed left-0 top-0 flex items-center justify-center rounded-sm bg-black px-3"
        style={{ x: boxX, y: boxY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          scale: hasLabel ? 1 : 0,
          opacity: hasLabel ? 1 : 0,
          height: hasLabel ? 40 : 16,
          width: hasLabel ? "auto" : 16,
          paddingInline: hasLabel ? 12 : 0,
        }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {hoverText && (
          <span className="select-none whitespace-nowrap text-[11px] font-semibold uppercase tracking-wide text-white">
            {hoverText}
          </span>
        )}
      </motion.div>
    </div>
  );
}
