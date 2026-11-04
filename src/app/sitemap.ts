import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/data/site";

const baseUrl = `https://${siteConfig.canonicalHost}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/products",
    "/design-services",
    "/samples",
    "/sustainability",
    "/our-process",
    "/blog",
    "/about",
    "/get-a-quote",
    "/contact",
    "/privacy",
    "/terms",
    "/shipping-policy",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
