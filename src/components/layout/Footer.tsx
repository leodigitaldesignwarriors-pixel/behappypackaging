import Link from "next/link";
import { InstagramLogo, FacebookLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import { categoryGroups } from "@/data/products";
import { siteConfig } from "@/data/site";
import CurlyMarquee from "@/components/animation/CurlyMarquee";
import NewsletterSignup from "@/components/forms/NewsletterSignup";

export default function Footer() {
  return (
    <footer className="bg-ink text-off-white">
      <div className="border-b border-white/10">
        <NewsletterSignup />
      </div>

      <CurlyMarquee text="BE HAPPY PACKAGING" speed={55} tone="dark" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-wide text-yellow">Products</p>
            <ul className="space-y-2 text-sm text-white/70">
              {categoryGroups.map((group) => (
                <li key={group.group}>
                  <Link
                    href={`/products?category=${encodeURIComponent(group.group)}`}
                    className="transition-colors hover:text-yellow"
                  >
                    {group.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-wide text-yellow">Industries</p>
            <ul className="space-y-2 text-sm text-white/70">
              {siteConfig.industries.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={`/products?industry=${industry.slug}`}
                    className="transition-colors hover:text-yellow"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-wide text-yellow">Services</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/design-services" className="transition-colors hover:text-yellow">Design Services</Link></li>
              <li><Link href="/samples" className="transition-colors hover:text-yellow">Samples</Link></li>
              <li><Link href="/our-process" className="transition-colors hover:text-yellow">Our Process</Link></li>
              <li><Link href="/sustainability" className="transition-colors hover:text-yellow">Sustainability</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-wide text-yellow">Company</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/about" className="transition-colors hover:text-yellow">About</Link></li>
              <li><Link href="/blog" className="transition-colors hover:text-yellow">Blog</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-yellow">Contact</Link></li>
              <li><Link href="/privacy" className="transition-colors hover:text-yellow">Privacy</Link></li>
              <li><Link href="/terms" className="transition-colors hover:text-yellow">Terms</Link></li>
              <li><Link href="/shipping-policy" className="transition-colors hover:text-yellow">Shipping Policy</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-wide text-yellow">Get in Touch</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="transition-colors hover:text-yellow">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`}
                  className="transition-colors hover:text-yellow"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="max-w-[220px] text-white/70">{siteConfig.contact.address}</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-yellow hover:text-yellow">
                <InstagramLogo size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-yellow hover:text-yellow">
                <FacebookLogo size={16} />
              </a>
              <a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-yellow hover:text-yellow">
                <LinkedinLogo size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wide text-white/50">
            <span>Ships via</span>
            <span className="rounded border border-white/15 px-2 py-1">DHL</span>
            <span className="rounded border border-white/15 px-2 py-1">FedEx</span>
            <span className="rounded border border-white/15 px-2 py-1">USPS</span>
          </div>
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
