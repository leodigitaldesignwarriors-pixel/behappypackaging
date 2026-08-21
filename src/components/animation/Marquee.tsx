import type { ReactNode } from "react";
import clsx from "clsx";

interface MarqueeProps {
  children: ReactNode;
  variant?: "trust" | "wordmark" | "plain";
  speedClassName?: string;
  reverse?: boolean;
  className?: string;
}

/**
 * Infinite horizontal marquee. Two duplicated tracks create a seamless loop;
 * CSS animation pauses on hover and is disabled entirely under reduced motion
 * via the global `prefers-reduced-motion` rule in globals.css.
 */
export default function Marquee({
  children,
  variant = "trust",
  speedClassName = "animate-marquee",
  reverse = false,
  className,
}: MarqueeProps) {
  const isWordmark = variant === "wordmark";
  const variantBg =
    variant === "wordmark" ? "bg-black py-6" : variant === "plain" ? "bg-transparent py-0" : "bg-yellow py-3";

  return (
    <div
      className={clsx("group relative flex w-full overflow-hidden", variantBg, className)}
    >
      <div
        className={clsx(
          "flex w-max shrink-0 items-center gap-8 pr-8 group-hover:[animation-play-state:paused] motion-reduce:animate-none",
          speedClassName,
          reverse && "[animation-direction:reverse]"
        )}
      >
        <MarqueeTrack isWordmark={isWordmark}>{children}</MarqueeTrack>
        <MarqueeTrack isWordmark={isWordmark} ariaHidden>
          {children}
        </MarqueeTrack>
      </div>
    </div>
  );
}

function MarqueeTrack({
  children,
  isWordmark,
  ariaHidden,
}: {
  children: ReactNode;
  isWordmark: boolean;
  ariaHidden?: boolean;
}) {
  return (
    <div
      aria-hidden={ariaHidden}
      className={clsx("flex shrink-0 items-center gap-8 pr-8", isWordmark && "text-yellow")}
    >
      {children}
    </div>
  );
}
