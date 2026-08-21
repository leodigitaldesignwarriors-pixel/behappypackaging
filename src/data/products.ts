export type CategoryGroup = "Core" | "Others" | "Custom Bags" | "Sustainability";
export type SampleTier = "printed-small" | "paper-large";

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  category: CategoryGroup;
  industries: string[];
  description: string;
  useCases: string[];
  materials: string[];
  faqs: ProductFaq[];
  sampleTier: SampleTier;
  galleryCount: number;
}

export const products: Product[] = [
  {
    slug: "folding-carton",
    name: "Folding Carton",
    tagline: "Versatile all-round packaging",
    category: "Core",
    industries: ["cosmetic-beauty", "food-beverage", "retail-ecommerce", "gift"],
    description:
      "Folding cartons are the workhorse of custom packaging — lightweight, fully printable, and easy to fold flat for cheap storage and shipping before assembly. We build yours from FSC-certified paperboard, printed edge-to-edge in full color with your branding, then add finishes like matte or gloss lamination, spot UV, foil stamping, or embossing to make it stand out on a shelf. Because tooling is fast and dielines are reusable, folding cartons pair naturally with our 100-unit minimum, making them the easiest way to launch a new SKU or test a limited edition without a large upfront run. From cosmetics and supplements to snack boxes and subscription mailers, this is the category most brands start with. Every carton is engineered to protect its contents in transit while still opening with a satisfying, on-brand unboxing moment your customers will want to share.",
    useCases: ["Cosmetics & skincare", "Subscription boxes", "Food & snack packaging", "Retail SKU launches"],
    materials: ["FSC-certified paperboard (SBS/C1S)", "Kraft board", "Matte or gloss lamination", "Spot UV & foil stamping"],
    faqs: [
      { question: "What thickness of board do you use?", answer: "Standard is 16pt–24pt SBS paperboard, chosen based on your product weight and desired rigidity." },
      { question: "Can I add a window to my carton?", answer: "Yes — die-cut PVC or PET windows are available so customers can see the product before purchase." },
    ],
    sampleTier: "printed-small",
    galleryCount: 4,
  },
  {
    slug: "corrugated",
    name: "Corrugated",
    tagline: "Sturdy and durable packaging",
    category: "Core",
    industries: ["retail-ecommerce", "food-beverage", "eco-sustainable"],
    description:
      "When your product needs to survive a warehouse, a delivery van, and a doorstep drop, corrugated is the answer. Built from fluted board in single, double, or triple-wall constructions, our corrugated packaging is engineered for strength-to-weight efficiency, meaning maximum protection without paying to ship excess material. We print directly on the board or apply a litho-laminated printed sheet for retail-ready graphics, so shipping mailers and outer cases can double as branded touchpoints instead of plain brown boxes. Corrugated is also one of the most sustainable materials we offer — highly recyclable and typically made with a strong percentage of recycled content. Whether you need e-commerce shipping boxes, subscription outers, or bulk case packs for retail distribution, we size each dieline to your product to minimize void fill and dimensional-weight shipping costs, keeping your unit economics healthy as you scale.",
    useCases: ["E-commerce shipping boxes", "Subscription outer boxes", "Bulk case packs", "Food delivery packaging"],
    materials: ["Single, double & triple-wall fluted board", "Recycled kraft liner", "Litho-laminated printed sheets"],
    faqs: [
      { question: "Is corrugated board recyclable?", answer: "Yes — corrugated is curbside recyclable and commonly made with recycled fiber content." },
      { question: "Can you match my box size to my product?", answer: "We custom-size every dieline to your exact product dimensions to reduce void fill and shipping cost." },
    ],
    sampleTier: "paper-large",
    galleryCount: 4,
  },
  {
    slug: "rigid",
    name: "Rigid",
    tagline: "Premium and luxurious packaging",
    category: "Core",
    industries: ["cosmetic-beauty", "gift", "retail-ecommerce"],
    description:
      "Rigid boxes are the category for brands where unboxing is part of the product. Built around a dense, non-folding chipboard core wrapped in your choice of printed paper, textured stock, or specialty material, rigid packaging has a heft and stiffness that folding cartons simply can't match. We produce them in setup styles including two-piece lid-and-base, magnetic closure, drawer/slide, and book-fold, finished with foil stamping, embossing, soft-touch lamination, or ribbon and magnet hardware. Because the construction is more involved than a folding carton, rigid boxes carry a longer lead time and higher unit cost — but for premium cosmetics, jewelry, electronics, and gifting, that investment shows up directly in perceived value and customer retention. This is the packaging category built for brands charging a premium and needing the box to justify it the moment it's opened.",
    useCases: ["Premium cosmetics & fragrance", "Jewelry & watches", "Corporate & VIP gifting", "Electronics unboxing"],
    materials: ["Rigid chipboard core (1.5–3mm)", "Printed wrap paper", "Textured & specialty stocks", "Magnetic & ribbon closures"],
    faqs: [
      { question: "What closure styles are available?", answer: "Two-piece lid-and-base, magnetic flip-top, drawer/slide, and book-fold are all standard options." },
      { question: "How long does rigid box production take?", answer: "Rigid boxes are more labor-intensive than folding cartons, so build extra time into your 8–12 day estimate — your quote will confirm exact timing." },
    ],
    sampleTier: "printed-small",
    galleryCount: 4,
  },
  {
    slug: "display",
    name: "Display",
    tagline: "Impactful floor and counter displays",
    category: "Core",
    industries: ["retail-ecommerce", "food-beverage"],
    description:
      "Retail displays exist to do one job: stop a shopper and sell product without a salesperson in the aisle. We build both floor-standing displays (FSDUs) for high-traffic zones and compact counter displays (PDQs) for checkout impulse buys, engineered from corrugated board for stability under repeated restocking. Every display is designed around your actual product dimensions and expected fill quantity, with structural reinforcement where load-bearing shelves need it most. Graphics are printed full-bleed and can include die-cut header cards, product windows, and shelf-edge signage so the display reads as a cohesive piece of brand marketing, not just a shipping container that got repurposed. Because displays are large-format, we send a paper and material swatch sample rather than a full printed prototype — but structural mockups and 3D renders are available through our design service so you can approve the build before it hits the floor.",
    useCases: ["Floor-standing displays (FSDU)", "Counter/checkout displays (PDQ)", "Seasonal & promotional campaigns", "New product launches"],
    materials: ["Structural corrugated board", "Die-cut header cards", "Product-view windows"],
    faqs: [
      { question: "Can a display hold heavy products?", answer: "Yes — we reinforce shelf structures and base panels based on your product weight and fill quantity." },
      { question: "Do you provide 3D renders before production?", answer: "Yes, through our design services offering we can produce 3D mockups so you can approve the structure and graphics upfront." },
    ],
    sampleTier: "paper-large",
    galleryCount: 4,
  },
  {
    slug: "labels-stickers",
    name: "Labels & Stickers",
    tagline: "All-purpose custom stickers",
    category: "Others",
    industries: ["cosmetic-beauty", "food-beverage", "cbd-cannabis", "retail-ecommerce"],
    description:
      "Labels and stickers are the fastest, most flexible way to brand a product — whether that's the primary label on a bottle or jar, a tamper-evident seal, or a promotional sticker for packaging inserts and mailers. We print on a wide range of stocks including gloss and matte paper, clear and white BOPP film, and waterproof vinyl, with adhesive options suited to refrigeration, moisture, or long-term outdoor exposure. Die-cutting can follow any custom shape, from simple circles to fully contoured product silhouettes, and finishes like foil, spot gloss, and embossing add a premium edge at a fraction of the cost of a fully custom carton. Because labels are small-format and quick to produce, they're often the first thing a new brand orders and a reliable way to test messaging or seasonal designs without touching your primary packaging structure.",
    useCases: ["Bottle & jar labels", "Tamper-evident seals", "Promotional & packaging inserts", "Product branding stickers"],
    materials: ["Gloss & matte paper stock", "Clear & white BOPP film", "Waterproof vinyl", "Removable & permanent adhesives"],
    faqs: [
      { question: "Can labels be custom die-cut to any shape?", answer: "Yes, we die-cut to any contour or silhouette you provide, not just standard circles and rectangles." },
      { question: "Are waterproof labels available?", answer: "Yes — BOPP film and vinyl stocks are both fully waterproof, ideal for coolers, bathrooms, and outdoor use." },
    ],
    sampleTier: "printed-small",
    galleryCount: 3,
  },
  {
    slug: "box-inserts",
    name: "Box Inserts",
    tagline: "Add protection to your packaging",
    category: "Others",
    industries: ["cosmetic-beauty", "gift", "retail-ecommerce"],
    description:
      "A great box deserves an interior that matches it. Custom inserts hold your product securely in transit, prevent shifting and damage, and — done well — turn the moment a customer lifts the lid into a genuine unboxing highlight. We produce die-cut cardboard and chipboard inserts, foam inserts for fragile or multi-piece products, and printed paperboard trays that double as a branded surface in their own right. Inserts are engineered against your existing box dieline or as part of a new packaging build, so fit is exact rather than approximate — no rattling, no loose product, no returns from in-transit damage. This category pairs naturally with rigid and folding-carton orders for cosmetics, electronics, and multi-item gift sets, but works as a standalone add-on to packaging you're already ordering from us or elsewhere.",
    useCases: ["Multi-item gift sets", "Fragile product protection", "Cosmetics & electronics kits", "Branded unboxing trays"],
    materials: ["Die-cut chipboard", "Foam inserts", "Printed paperboard trays"],
    faqs: [
      { question: "Can inserts be made to fit a box I already have?", answer: "Yes — send us your existing dieline or a sample box and we'll engineer the insert to fit exactly." },
      { question: "Do inserts work for fragile products?", answer: "Foam and structured chipboard inserts are both available for products that need cushioning, not just positioning." },
    ],
    sampleTier: "paper-large",
    galleryCount: 4,
  },
  {
    slug: "paper-shopping-bags",
    name: "Paper Shopping Bags",
    tagline: "Stylish eco-friendly paper bags",
    category: "Custom Bags",
    industries: ["retail-ecommerce", "gift", "eco-sustainable"],
    description:
      "A branded shopping bag is a walking billboard — it leaves your store or pop-up and keeps advertising long after checkout. We produce custom paper shopping bags in kraft or white paper stock, with twisted paper, flat paper, or ribbon handles rated to your expected product weight. Full-color printing covers the entire bag surface, and finishes like matte lamination, spot UV, and foil stamping give retail and gifting bags the tactile quality customers associate with premium brands. Because paper is widely recyclable and increasingly required or preferred over plastic in many markets, this is also one of our most requested categories from brands prioritizing sustainability without sacrificing shelf presence. Sizes range from small boutique bags to large format retail carriers, all built to your dieline with reinforced bottoms so they hold up under real-world use.",
    useCases: ["Retail & boutique checkout bags", "Gift & event bags", "Pop-up & trade show branding", "E-commerce unboxing add-ons"],
    materials: ["Kraft paper stock", "White paper stock", "Twisted paper & ribbon handles", "Matte lamination & spot UV"],
    faqs: [
      { question: "What handle types are available?", answer: "Twisted paper cord, flat paper handles, and ribbon handles are all available, rated to your expected bag weight." },
      { question: "Are these bags recyclable?", answer: "Yes — paper shopping bags are widely curbside recyclable, especially without laminated plastic handles." },
    ],
    sampleTier: "printed-small",
    galleryCount: 4,
  },
  {
    slug: "mailer-bags",
    name: "Mailer Bags",
    tagline: "Flexible shipping mailer bags",
    category: "Custom Bags",
    industries: ["retail-ecommerce", "eco-sustainable"],
    description:
      "For e-commerce brands shipping soft goods — apparel, accessories, linens — a rigid box is often overkill. Custom poly and paper mailer bags are lightweight, tear- and water-resistant, and dramatically cheaper to ship than boxed equivalents, while still giving you a full-bleed printed surface to put your branding front and center the moment a package lands on a doorstep. We offer both recyclable poly mailers and curbside-recyclable paper mailers, with self-seal adhesive strips and optional tear-notch or double-seal returns strips built in. Because mailer bags fold flat, storage and outbound shipping costs stay low even at volume, and our 100-unit minimum makes it easy to test a new print design or seasonal campaign before committing to a large print run. This is the category most direct-to-consumer apparel and accessories brands settle into once they're shipping regularly.",
    useCases: ["Apparel & soft goods shipping", "D2C e-commerce fulfillment", "Subscription shipments", "Return-ready shipments"],
    materials: ["Recyclable poly film", "Curbside-recyclable paper", "Self-seal adhesive strips"],
    faqs: [
      { question: "Are poly mailers actually recyclable?", answer: "Our poly mailers use recyclable film — check local drop-off recycling for flexible plastics, as most curbside programs don't accept them directly." },
      { question: "Can mailers include a return strip?", answer: "Yes, double-seal mailers with a built-in return adhesive strip are available on request." },
    ],
    sampleTier: "printed-small",
    galleryCount: 4,
  },
  {
    slug: "pouches",
    name: "Pouches",
    tagline: "Flexible food pouches",
    category: "Custom Bags",
    industries: ["food-beverage", "cbd-cannabis", "eco-sustainable"],
    description:
      "Stand-up and flat-bottom pouches have become the default packaging for coffee, snacks, pet food, and countless other consumable products, and for good reason — they're lightweight, shelf-stable, resealable, and give you a large, flexible surface for eye-catching graphics. We produce pouches in barrier films built for freshness, oxygen, and moisture protection, with options including matte, gloss, and kraft-paper-look finishes, clear windows, degassing valves for coffee, and zippers or tin-ties for resealability. Digital and rotogravure printing options mean both small test batches and large production runs are cost-effective, and because pouches use significantly less material than rigid packaging for the same product volume, they're often the lower-impact choice per unit shipped. Regulatory-compliant options are available for CBD and cannabis products requiring child-resistant closures or specific labeling.",
    useCases: ["Coffee & tea packaging", "Snack & pet food pouches", "CBD & supplement packaging", "Powder & liquid sachets"],
    materials: ["Barrier film laminates", "Kraft-look film", "Degassing valves", "Zippers & tin-ties"],
    faqs: [
      { question: "Can pouches be resealable?", answer: "Yes — zippers and tin-ties are both available to keep contents fresh after opening." },
      { question: "Do you offer child-resistant closures for CBD products?", answer: "Yes, regulatory-compliant child-resistant closures and labeling options are available for CBD and cannabis pouches." },
    ],
    sampleTier: "printed-small",
    galleryCount: 4,
  },
  {
    slug: "eco-friendly-packaging",
    name: "Eco-Friendly Packaging",
    tagline: "Sustainable alternatives to packaging",
    category: "Sustainability",
    industries: ["eco-sustainable", "food-beverage", "cosmetic-beauty", "retail-ecommerce"],
    description:
      "Eco-friendly packaging isn't a single product — it's a set of material and process choices layered onto any category we produce, from folding cartons to mailer bags. We build with FSC-certified and recycled-content papers, soy- and water-based inks in place of solvent-based alternatives, and right-sized dielines that cut material waste and reduce dimensional-weight shipping costs. Where plastic is unavoidable, we prioritize recyclable mono-material films over mixed laminates that can't be recycled at all. For brands making sustainability a core part of their story, we can also advise on FSC chain-of-custody certification, compostable options for specific product categories, and packaging weight reduction strategies that lower both environmental impact and shipping spend at the same time. Ask about eco-friendly options on any quote — manufacturing or design — and we'll flag the right materials for your product and budget.",
    useCases: ["Sustainability-led brand launches", "FSC-certified retail packaging", "Recycled & compostable options", "Right-sized shipping to cut waste"],
    materials: ["FSC-certified & recycled paperboard", "Soy & water-based inks", "Recyclable mono-material films", "Right-sized dielines"],
    faqs: [
      { question: "Is all your packaging recyclable?", answer: "Most of our paper and corrugated packaging is curbside recyclable; for film-based products we prioritize recyclable mono-materials where possible." },
      { question: "Can you provide FSC-certified materials?", answer: "Yes — FSC-certified and recycled-content stocks are available across our folding carton, corrugated, and paper bag categories." },
    ],
    sampleTier: "paper-large",
    galleryCount: 3,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: CategoryGroup): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductsByIndustry(industrySlug: string): Product[] {
  return products.filter((p) => p.industries.includes(industrySlug));
}

export const categoryGroups: { group: CategoryGroup; label: string }[] = [
  { group: "Core", label: "Core" },
  { group: "Others", label: "Others" },
  { group: "Custom Bags", label: "Custom Bags" },
  { group: "Sustainability", label: "Sustainability" },
];
