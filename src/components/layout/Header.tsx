"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { List, X, CaretDown } from "@phosphor-icons/react";
import clsx from "clsx";
import { products, categoryGroups } from "@/data/products";
import { siteConfig } from "@/data/site";
import PillButton from "@/components/ui/PillButton";

const navLinks = [
  { label: "Design Services", href: "/design-services" },
  { label: "Samples", href: "/samples" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Our Process", href: "/our-process" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-colors duration-300",
        solid ? "bg-off-white/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
      )}
      onMouseLeave={() => setProductsOpen(false)}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" data-cursor="Home" className="font-heading text-lg font-extrabold tracking-tight text-ink">
          BE HAPPY <span className="text-yellow-dim">PACKAGING</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <div className="relative" onMouseEnter={() => setProductsOpen(true)}>
            <button
              type="button"
              className="flex cursor-pointer items-center gap-1 text-sm font-medium text-ink transition-colors hover:text-yellow-dim"
            >
              Products
              <CaretDown size={12} weight="bold" className={clsx("transition-transform", productsOpen && "rotate-180")} />
            </button>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink transition-colors hover:text-yellow-dim"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <PillButton href="/get-a-quote" variant="yellow" cursorText="Quote">
            Get a Quote
          </PillButton>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full lg:hidden"
        >
          {mobileOpen ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {productsOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full hidden border-t border-black/5 bg-white shadow-xl lg:block"
          >
            <div className="relative mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setProductsOpen(false)}
                className="absolute right-4 top-6 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-stone transition-colors hover:bg-off-white hover:text-ink sm:right-6 lg:right-8"
              >
                <X size={16} weight="bold" />
              </button>

              <div className="grid grid-cols-5 gap-6">
                {categoryGroups.map((group) => (
                  <div key={group.group}>
                    <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-wide text-yellow-dim">
                      {group.label}
                    </p>
                    <ul className="space-y-1.5">
                      {products
                        .filter((p) => p.category === group.group)
                        .map((product) => (
                          <li key={product.slug}>
                            <Link
                              href={`/products/${product.slug}`}
                              data-cursor="View"
                              className="block text-sm text-ink transition-colors hover:text-yellow-dim"
                            >
                              {product.name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
                <div className="border-l border-black/5 pl-6">
                  <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-wide text-stone">
                    By industry
                  </p>
                  <ul className="space-y-1.5">
                    {siteConfig.industries.map((industry) => (
                      <li key={industry.slug}>
                        <Link
                          href={`/products?industry=${industry.slug}`}
                          data-cursor="View"
                          className="block text-sm text-ink transition-colors hover:text-yellow-dim"
                        >
                          {industry.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href="/products"
                data-cursor="Explore"
                className="mt-6 inline-block text-sm font-semibold text-ink underline decoration-yellow decoration-2 underline-offset-4"
              >
                Browse all products
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-off-white lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 pb-8 pt-2">
              <Link
                href="/products"
                onClick={() => setMobileOpen(false)}
                className="border-b border-black/10 py-3 text-lg font-heading font-semibold text-ink"
              >
                Products
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-black/10 py-3 text-lg font-heading font-semibold text-ink"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-6">
                <PillButton href="/get-a-quote" variant="yellow" size="lg" magnetic={false} className="w-full justify-center">
                  Get a Quote
                </PillButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
