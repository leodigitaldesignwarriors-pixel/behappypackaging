import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/animation/Reveal";
import PageHero from "@/components/ui/PageHero";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import { blogPosts } from "@/data/blog";
import { cacheBustedSrc } from "@/lib/cacheBust";

export const metadata: Metadata = {
  title: "Blog",
  description: "Packaging trends, sustainability breakdowns, and design tips from the Be Happy Packaging team.",
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Packaging, explained."
        subtitle="Trends, sustainability breakdowns, and design tips — from the team designing and manufacturing your packaging."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal stagger={0.08} className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} data-cursor="Read" className="group block">
              <PlaceholderMedia
                label={post.title}
                aspect="aspect-[4/3]"
                rounded="rounded-2xl"
                src={cacheBustedSrc(`/images/blog/${post.slug}.jpg`)}
              />
              <div className="pt-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-yellow-dim">
                  <span>{post.category}</span>
                  <span className="text-stone">&middot;</span>
                  <span className="text-stone">{formatDate(post.date)}</span>
                </div>
                <h2 className="mt-2 font-heading text-lg font-bold text-ink transition-colors group-hover:text-yellow-dim">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-stone">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </Reveal>
      </section>
    </>
  );
}
