import type { ReactNode } from "react";
import Reveal from "@/components/animation/Reveal";
import Parallax from "@/components/animation/Parallax";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  mediaLabel?: string;
  /** "dark" = full-bleed parallax banner (default). "light" = split hero on off-white, media at right. */
  tone?: "dark" | "light";
  /** Real image path, e.g. "/images/hero/contact-hero.jpg". Falls back to the placeholder pattern when omitted. */
  heroImage?: string;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  mediaLabel,
  tone = "dark",
  heroImage,
}: PageHeroProps) {
  if (tone === "light") {
    return (
      <section className="bg-off-white pb-4 pt-14 sm:pt-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8">
          <Reveal stagger={0.08}>
            {eyebrow && (
              <p className="mb-4 inline-block rounded-full bg-yellow px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-black">
                {eyebrow}
              </p>
            )}
            <h1 className="font-heading text-4xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-5xl">
              {title}
            </h1>
            {subtitle && <p className="mt-4 max-w-md text-base text-stone sm:text-lg">{subtitle}</p>}
            {children}
          </Reveal>
          <Reveal delay={0.1}>
            <PlaceholderMedia
              label={mediaLabel || title}
              aspect="aspect-[4/3]"
              rounded="rounded-3xl"
              src={heroImage}
              priority
            />
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-ink text-off-white">
      <Parallax speed={0.35} className="absolute inset-0">
        <div className="h-[130%] w-full">
          <PlaceholderMedia
            label={mediaLabel || title}
            aspect="aspect-auto"
            tone="dark"
            rounded="rounded-none"
            className="h-full w-full"
            src={heroImage}
            priority
            sizes="100vw"
          />
        </div>
      </Parallax>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/30" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-36 sm:px-6 lg:px-8 lg:pb-28 lg:pt-44">
        <Reveal stagger={0.1} className="max-w-2xl">
          {eyebrow && (
            <p className="mb-4 inline-block rounded-full bg-yellow px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-black">
              {eyebrow}
            </p>
          )}
          <h1 className="font-heading text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && <p className="mt-5 max-w-lg text-base text-off-white/80 sm:mt-6 sm:text-lg">{subtitle}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
