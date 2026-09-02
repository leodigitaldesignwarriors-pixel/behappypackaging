export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  productSlug: string;
  productName: string;
  headline: string;
  summary: string;
  results: string[];
  quote?: string;
  quoteAuthor?: string;
  quoteRole?: string;
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
    id: "sliders-bakery",
    client: "Slider's Bakery",
    industry: "Food & Beverage",
    productSlug: "folding-carton",
    productName: "Folding Carton",
    headline: "A printed carton built for a full cookie assortment",
    summary:
      "Slider's Bakery needed a food-safe folding carton sized for a mixed assortment box, with their branding printed edge-to-edge on the interior as part of the unboxing moment, not just the outside.",
    results: [
      "Food-safe folding carton, right-sized for an assorted cookie box",
      "Full-color branding printed on the interior, not just the exterior",
      "100-unit minimum, so a small bakery could order without an enterprise-scale commitment",
    ],
    // TODO: no customer quote provided for this case study yet — add one if the client shares feedback.
    galleryCount: 2,
  },
];
