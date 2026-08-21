import Image from "next/image";
import clsx from "clsx";
import { Image as ImageIcon } from "@phosphor-icons/react/dist/ssr";

interface PlaceholderMediaProps {
  label?: string;
  aspect?: string;
  variant?: "stripe" | "dot" | "solid";
  tone?: "light" | "dark" | "yellow";
  className?: string;
  rounded?: string;
  /** Real image path (e.g. "/images/hero/home-hero.jpg"). Renders next/image in place of the placeholder pattern when set. */
  src?: string;
  /** Set true for above-the-fold images (hero banners) to skip lazy-loading. */
  priority?: boolean;
  sizes?: string;
}

// TODO: replace remaining placeholders with real photography — pass `src` once
// the corresponding file exists in public/images (see IMAGE_ASSETS.md).
export default function PlaceholderMedia({
  label,
  aspect = "aspect-[4/3]",
  variant = "stripe",
  tone = "light",
  className,
  rounded = "rounded-2xl",
  src,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: PlaceholderMediaProps) {
  const toneClasses: Record<string, string> = {
    light: "bg-off-white",
    dark: "bg-ink",
    yellow: "bg-yellow",
  };

  if (src) {
    return (
      <div className={clsx("relative overflow-hidden", aspect, rounded, className)}>
        <Image
          src={src}
          alt={label || ""}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    );
  }

  const patternStyle =
    variant === "stripe"
      ? {
          backgroundImage:
            tone === "dark"
              ? "repeating-linear-gradient(45deg, rgba(255,212,0,0.18), rgba(255,212,0,0.18) 10px, transparent 10px, transparent 20px)"
              : "repeating-linear-gradient(45deg, rgba(10,10,10,0.08), rgba(10,10,10,0.08) 10px, transparent 10px, transparent 20px)",
        }
      : variant === "dot"
        ? {
            backgroundImage:
              "radial-gradient(rgba(10,10,10,0.14) 1.5px, transparent 1.5px)",
            backgroundSize: "14px 14px",
          }
        : undefined;

  return (
    <div
      className={clsx(
        "relative flex items-center justify-center overflow-hidden",
        aspect,
        rounded,
        toneClasses[tone],
        className
      )}
      style={patternStyle}
      role="img"
      aria-label={label || "Placeholder image"}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <ImageIcon
          size={22}
          weight="light"
          className={tone === "dark" ? "text-yellow/70" : "text-ink/30"}
        />
        {label && (
          <span
            className={clsx(
              "px-4 text-[11px] font-medium uppercase tracking-wide",
              tone === "dark" ? "text-yellow/70" : "text-ink/40"
            )}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
