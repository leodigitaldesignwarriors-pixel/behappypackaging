export const siteConfig = {
  name: "Be Happy Packaging",
  domain: "behappypackaging.com",
  // The apex 308-redirects to www, so www is canonical. Used for sitemap,
  // robots and metadataBase; `domain` stays the plain name shown in copy.
  canonicalHost: "www.behappypackaging.com",
  tagline: "Custom packaging, made happy.",
  foundedYear: 2016,
  get yearsInBusiness() {
    return new Date().getFullYear() - this.foundedYear;
  },
  basedIn: "USA",
  moq: 300,
  turnaround: { min: 12, max: 15, unit: "days" },
  shipsTo: ["USA", "UK", "Canada"] as const,
  paymentMethods: "All major credit & debit cards accepted",
  shippingPartners: ["DHL", "FedEx", "USPS"] as const,
  samples: {
    printedSmall: {
      price: 99,
      label: "Small printed box samples",
      description:
        "A real printed sample of your actual design on small-format boxes.",
    },
    paperLarge: {
      price: 99,
      label: "Paper samples (unprinted)",
      description:
        "A material and paper swatch sample for large-format boxes, since full printed prototypes aren't practical at that size.",
    },
  },
  contact: {
    email: "hello@behappypackaging.com",
    phone: "+1 (672) 273-0521",
    address: "1500 N Grant St Ste C, Denver, CO 80203, United States",
    // TODO: client to confirm a WhatsApp number, if used
    whatsapp: "",
  },
  social: {
    // TODO: client to confirm social handles
    instagram: "",
    facebook: "",
    linkedin: "",
    pinterest: "",
  },
  industries: [
    { slug: "cosmetic-beauty", name: "Cosmetic & Beauty" },
    { slug: "food-beverage", name: "Food & Beverage" },
    { slug: "retail-ecommerce", name: "Retail & E-commerce" },
    { slug: "gift", name: "Gift" },
    { slug: "cbd-cannabis", name: "CBD & Cannabis" },
    { slug: "eco-sustainable", name: "Eco/Sustainable Brands" },
  ],
  announcements: [
    "Free shipping on orders within the USA, UK & Canada",
    "12–15 day door-to-door delivery",
    "Try before you commit — samples from just $99",
  ],
  trustMarquee: [
    "Custom Dielines",
    "Low MOQs",
    "Free Design Support",
    "Fast Turnaround",
    "Recyclable Materials",
  ],
  stats: [
    { value: 10, suffix: "+", label: "Years in business" },
    { value: 3, suffix: "", label: "Countries served (USA, UK, Canada)" },
    { value: 300, suffix: "", label: "Unit minimum order" },
    { value: 15, suffix: " days", label: "Door-to-door delivery (12–15 days)" },
  ],
  finishingOptions: [
    {
      step: 1,
      title: "Foiling",
      description:
        "High-quality foiling in all primary colors, adding a vibrant and elegant metallic finish to enhance your packaging design.",
    },
    {
      step: 2,
      title: "Embossing",
      description:
        "Embossing that creates raised, textured designs on your packaging, adding a tactile, premium feel to enhance your brand.",
    },
    {
      step: 3,
      title: "Spot UV",
      description:
        "Spot UV coating highlights specific areas with a glossy, raised finish to create a striking contrast and enhance your design.",
    },
    {
      step: 4,
      title: "Holographic",
      description:
        "Holographic detailing adds a dynamic, light-reflective effect that creates a bold and futuristic look for your packaging.",
    },
    {
      step: 5,
      title: "Debossing",
      description:
        "Debossing creates a subtle, recessed design on your packaging, adding depth and sophistication to your brand's presentation.",
    },
    {
      step: 6,
      title: "Laminations",
      description:
        "Both gloss and matte laminations enhance durability while providing a sleek finish that elevates your brand's appearance.",
    },
  ],
  process: [
    {
      step: 1,
      title: "Brief & Quote",
      description:
        "Tell us what you're packaging, your quantities, and your timeline. We put together a clear, itemized quote within one business day.",
      timeframe: "Day 1",
      image: "/images/process/brief-quote.jpg",
    },
    {
      step: 2,
      title: "Design & Dieline",
      description:
        "Our design team builds a print-ready dieline and applies your branding, working with you through revisions until it's exactly right.",
      timeframe: "Days 2–4",
      image: "/images/process/design-dieline.png",
    },
    {
      step: 3,
      title: "Prototype & Proof",
      description:
        "We produce a physical or digital proof so you can check structure, color, and finish before full production begins.",
      timeframe: "Days 4–6",
      image: "/images/process/prototype-proof.jpg",
    },
    {
      step: 4,
      title: "Print & Deliver",
      description:
        "Once you sign off, we move to full production and ship via DHL, FedEx, or USPS — landing on your dock 12–15 days door-to-door.",
      timeframe: "Days 6–15",
      image: "/images/process/print-deliver.jpg",
    },
  ],
  faqs: [
    {
      question: "What's your minimum order quantity?",
      answer:
        "Our MOQ is 300 units per design — well below the 500–1,000 most custom box suppliers require — so you can test a new product line or run a limited edition without committing to a huge production run.",
    },
    {
      question: "How long does production take?",
      answer:
        "Most orders arrive 12–15 days door-to-door, counted from final artwork approval rather than from your first enquiry. That window covers production, finishing, freight and delivery to your address.",
    },
    {
      question: "Where do you ship?",
      answer:
        "We currently ship to the USA, UK, and Canada using DHL, FedEx, and USPS, with tracking provided on every order.",
    },
    {
      question: "Can I get a sample before ordering?",
      answer:
        "Yes. Small-format boxes get a real printed sample of your design for $99. For large-format boxes, we send a $99 unprinted paper and material swatch sample instead, since full printed prototypes aren't practical at that size.",
    },
    {
      question: "Do you offer packaging design services?",
      answer:
        "We do — structural and dieline design, brand application, 3D renders, and prototyping are all available as a standalone service, whether or not you're manufacturing with us.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit and debit cards.",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
