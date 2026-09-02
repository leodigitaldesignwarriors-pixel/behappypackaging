import type { Metadata } from "next";
import { Outfit, Rubik } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/cursor/CustomCursor";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsentBanner from "@/components/layout/CookieConsentBanner";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import PageTransition from "@/components/providers/PageTransition";
import { siteConfig } from "@/data/site";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: {
    default: `${siteConfig.name} | Custom Packaging & Design`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Custom folding cartons, corrugated, rigid boxes, displays, labels, bags, and eco-friendly packaging — plus packaging design services. 100-unit minimums, 8–12 day turnaround, shipping to the USA, UK & Canada.",
  openGraph: {
    title: `${siteConfig.name} | Custom Packaging & Design`,
    description:
      "Custom packaging manufacturing and design services. Low minimums, fast turnaround, shipped across the USA, UK & Canada.",
    siteName: siteConfig.name,
    type: "website",
    images: [{ url: "/og-image.png", width: 1729, height: 910, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Custom Packaging & Design`,
    description:
      "Custom packaging manufacturing and design services. Low minimums, fast turnaround, shipped across the USA, UK & Canada.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${rubik.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-off-white text-ink cursor-none-capable">
        <SmoothScrollProvider>
          <CustomCursor />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:text-white"
          >
            Skip to main content
          </a>
          <AnnouncementBar />
          <Header />
          <main id="main-content" className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <CookieConsentBanner />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
