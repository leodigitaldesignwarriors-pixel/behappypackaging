import { Sparkle, Stamp, Drop, Rainbow, ArrowLineDown, Stack } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/animation/Reveal";
import CardCarousel from "@/components/ui/CardCarousel";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import { siteConfig } from "@/data/site";
import { cacheBustedSrc } from "@/lib/cacheBust";

const finishingIcons = [Sparkle, Stamp, Drop, Rainbow, ArrowLineDown, Stack];
const finishingFiles = ["foiling.jpg", "embossing.jpg", "spot-uv.jpg", "holographic.jpg", "debossing.jpg", "laminations.jpg"];

interface FinishingAddonsProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

/** Finishing/add-on options shown as a simple arrow-driven slider (CardCarousel). */
export default function FinishingAddons({
  title = "The details that make it premium",
  subtitle = "Layer any of these finishes onto folding cartons, rigid boxes, labels, and more.",
  className = "bg-off-white py-20",
}: FinishingAddonsProps) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 max-w-xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-yellow-dim">Finishing Add-ons</p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">{title}</h2>
          <p className="mt-2 text-stone">{subtitle}</p>
        </Reveal>

        <Reveal>
          <CardCarousel>
            {siteConfig.finishingOptions.map((option, i) => {
              const Icon = finishingIcons[i];
              return (
                <div
                  key={option.title}
                  className="group h-full overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="relative">
                    <PlaceholderMedia
                      label={option.title}
                      aspect="aspect-[4/3]"
                      rounded="rounded-none"
                      variant="dot"
                      src={cacheBustedSrc(`/images/finishing/${finishingFiles[i]}`)}
                    />
                    <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-yellow text-black">
                      <Icon size={17} weight="bold" />
                    </span>
                    <span className="absolute right-3 top-3 font-heading text-lg font-extrabold text-white/80 [text-shadow:0_1px_4px_rgba(0,0,0,0.4)]">
                      0{option.step}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-bold text-ink">{option.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone">{option.description}</p>
                  </div>
                </div>
              );
            })}
          </CardCarousel>
        </Reveal>
      </div>
    </section>
  );
}
