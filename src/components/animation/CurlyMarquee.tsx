"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useAnimationFrame } from "framer-motion";
import clsx from "clsx";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface CurlyMarqueeProps {
  text: string;
  repeat?: number;
  speed?: number;
  className?: string;
  textClassName?: string;
  tone?: "dark" | "light";
}

const PATH_D = "M 0 110 Q 150 50 300 110 T 600 110 T 900 110 T 1200 110";

/**
 * Infinite marquee where the wordmark flows along a curved SVG path, riding on
 * a matching curled ribbon band so the background curls with the text.
 */
export default function CurlyMarquee({
  text,
  repeat = 8,
  speed = 40,
  className,
  textClassName,
  tone = "dark",
}: CurlyMarqueeProps) {
  const pathId = useId();
  const textPathRef = useRef<SVGTextPathElement>(null);
  const offsetRef = useRef(0);
  const unitLengthRef = useRef(0);
  const reducedMotion = useReducedMotion();
  const [ready, setReady] = useState(false);

  const unit = `${text}   •   `;
  const content = unit.repeat(repeat);
  const isDark = tone === "dark";

  useEffect(() => {
    if (!textPathRef.current) return;
    const total = textPathRef.current.getComputedTextLength();
    unitLengthRef.current = total / repeat;
    setReady(true);
  }, [repeat, text]);

  useAnimationFrame((_, delta) => {
    if (reducedMotion || !ready || !textPathRef.current || unitLengthRef.current === 0) return;
    offsetRef.current = (offsetRef.current + (speed * delta) / 1000) % unitLengthRef.current;
    textPathRef.current.setAttribute("startOffset", String(-offsetRef.current));
  });

  return (
    <div className={clsx("w-full overflow-hidden bg-transparent", className)}>
      <svg viewBox="0 0 1200 220" className="h-[170px] w-full sm:h-[210px]" aria-hidden="true">
        <path
          d={PATH_D}
          fill="none"
          strokeWidth={90}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={isDark ? "stroke-yellow" : "stroke-black"}
        />
        <path id={pathId} d={PATH_D} fill="none" stroke="none" />
        <text
          className={clsx("font-heading", isDark ? "fill-black" : "fill-yellow", textClassName)}
          style={{ fontSize: "38px", fontWeight: 800, letterSpacing: "-0.01em" }}
        >
          <textPath ref={textPathRef} href={`#${pathId}`} startOffset="0">
            {content}
          </textPath>
        </text>
      </svg>
      <span className="sr-only">{text}</span>
    </div>
  );
}
