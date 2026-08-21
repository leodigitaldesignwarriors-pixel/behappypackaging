export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  productSlug: string;
  productName: string;
  headline: string;
  summary: string;
  results: string[];
  quote: string;
  quoteAuthor: string;
  quoteRole: string;
  galleryCount: number;
}

// TODO: placeholder case studies — replace with real client work and photography before launch.
export const caseStudies: CaseStudy[] = [
  {
    id: "lumen-skincare",
    client: "Lumen Skincare",
    industry: "Cosmetic & Beauty",
    productSlug: "rigid",
    productName: "Rigid Box",
    headline: "A rigid box redesign that doubled as a retention play",
    summary:
      "Lumen came to us with a generic folding carton and a growing return-customer base that deserved better. We rebuilt their gift set packaging as a two-piece rigid box with a magnetic closure, foil logo, and a printed interior reveal.",
    results: ["From dieline to production proof in 11 days", "Magnetic closure + foil stamp finish", "Reordered for 3 consecutive seasonal drops"],
    quote:
      "Be Happy Packaging took our dieline from a rough sketch to a production-ready rigid box in under two weeks. The proof matched the final run almost exactly.",
    quoteAuthor: "Priya Nair",
    quoteRole: "Founder, Lumen Skincare",
    galleryCount: 4,
  },
  {
    id: "northfork-coffee",
    client: "Northfork Coffee",
    industry: "Food & Beverage",
    productSlug: "pouches",
    productName: "Pouches",
    headline: "Low-minimum pouches for a seasonal small-batch launch",
    summary:
      "Northfork wanted to test a limited seasonal roast without committing to their usual production volume. We ran a 250-unit batch of degassing-valve pouches with a kraft-look finish so they could test the market first.",
    results: ["250-unit test run, no large minimum required", "Degassing valve for fresh-roast coffee", "Sold out in 5 days, reordered at 3x volume"],
    quote:
      "Low minimums meant we could finally test a limited seasonal design without ordering ten thousand units. It sold out in five days.",
    quoteAuthor: "Marcus Obi",
    quoteRole: "Brand Manager, Northfork Coffee",
    galleryCount: 4,
  },
  {
    id: "salt-and-bloom",
    client: "Salt & Bloom",
    industry: "Retail & E-commerce",
    productSlug: "mailer-bags",
    productName: "Mailer Bags",
    headline: "A structural fix that cut damaged-in-transit returns",
    summary:
      "Salt & Bloom's original mailer bag was under-sized for their product line, causing damage in transit. Our design team caught the issue during proofing and resized the dieline before it went to print.",
    results: ["Structural issue caught before production", "Right-sized dieline reduced shipping cost per unit", "Damaged-in-transit returns dropped noticeably"],
    quote:
      "Their design team caught a structural issue on our mailer box before it went to print. That alone paid for the design service.",
    quoteAuthor: "Elena Cruz",
    quoteRole: "Ops Lead, Salt & Bloom",
    galleryCount: 4,
  },
];
