import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/animation/Reveal";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "@/data/blog";
import { cacheBustedSrc } from "@/lib/cacheBust";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug);

  return (
    <>
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <Link
            href="/blog"
            data-cursor="Back"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-stone transition-colors hover:text-ink"
          >
            <ArrowLeft size={16} />
            Back to blog
          </Link>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-yellow-dim">
            <span>{post.category}</span>
            <span className="text-stone">&middot;</span>
            <span className="text-stone">{formatDate(post.date)}</span>
          </div>
          <h1 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-sm text-stone">By {post.author}</p>
        </Reveal>

        <Reveal delay={0.05} className="my-10">
          <PlaceholderMedia
            label={post.title}
            aspect="aspect-[16/9]"
            rounded="rounded-2xl"
            src={cacheBustedSrc(`/images/blog/${post.slug}.jpg`)}
            priority
          />
        </Reveal>

        <Reveal delay={0.1} className="space-y-5 text-base leading-relaxed text-stone sm:text-lg">
          {post.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </Reveal>
      </article>

      {related.length > 0 && (
        <section className="bg-off-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-8">
              <h2 className="font-heading text-2xl font-bold text-ink">Related posts</h2>
            </Reveal>
            <Reveal stagger={0.08} className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {related.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  data-cursor="Read"
                  className="group block"
                >
                  <PlaceholderMedia
                    label={relatedPost.title}
                    aspect="aspect-[4/3]"
                    rounded="rounded-2xl"
                    src={cacheBustedSrc(`/images/blog/${relatedPost.slug}.jpg`)}
                  />
                  <h3 className="mt-4 font-heading text-lg font-bold text-ink transition-colors group-hover:text-yellow-dim">
                    {relatedPost.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone">{relatedPost.excerpt}</p>
                </Link>
              ))}
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}
