// TODO: placeholder copy — replace with real posts before launch.

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  body: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "packaging-trends-to-watch",
    title: "5 Custom Packaging Trends Worth Watching This Year",
    excerpt:
      "From tactile finishes to right-sized dielines, here's what's actually moving the needle for brands ordering custom packaging right now.",
    date: "2026-06-12",
    category: "Trends",
    author: "Be Happy Packaging Team",
    body: [
      "Custom packaging has moved well past 'put a logo on a box.' Brands are increasingly treating packaging as a core part of the product experience, not an afterthought bolted on after manufacturing is locked in.",
      "Tactile finishes — soft-touch lamination, embossing, and spot UV — are showing up across categories that used to stick to flat matte or gloss. The reason is simple: touch is one of the few senses a shipped product can still engage before it's opened.",
      "Right-sized dielines are having a moment too, partly driven by sustainability goals and partly by shipping cost math. A box built to the product's exact dimensions uses less material and often qualifies for better dimensional-weight shipping rates than an oversized stock box.",
      "We're also seeing more brands request smaller initial runs — testing a design at 100–500 units before committing to a larger production order. Low minimums used to be the exception; for a lot of our customers now, they're the default way to launch.",
      "Finally, unprinted paper and material swatch sampling is becoming standard practice for large-format packaging, where a full printed prototype was never practical to begin with. It's a small process change, but it's saving brands real time and money before a production run.",
    ],
  },
  {
    slug: "sustainable-packaging-materials-explained",
    title: "FSC, Recycled Content, and Water-Based Inks — What Actually Matters",
    excerpt:
      "Sustainability claims on packaging can be confusing. Here's a plain-language breakdown of the material choices that make a real difference.",
    date: "2026-05-28",
    category: "Sustainability",
    author: "Be Happy Packaging Team",
    body: [
      "'Eco-friendly packaging' gets used as a catch-all term, which makes it hard to know what you're actually getting. A few specific material choices are worth understanding before your next order.",
      "FSC certification means the paper fiber in your packaging came from a responsibly managed forest, tracked through a chain-of-custody system. It's one of the few claims backed by third-party auditing rather than self-reporting.",
      "Recycled content is a separate question from FSC — a paperboard can be recycled-content without being FSC-certified, and vice versa. If both matter to your brand, ask for stock that carries both.",
      "Soy- and water-based inks reduce the volatile organic compounds released during printing compared to solvent-based alternatives. They don't change what happens to the box after your customer is done with it, but they do reduce the environmental footprint of production itself.",
      "Curbside recyclability depends on your local municipality as much as the material itself — corrugated and most uncoated paperboard are widely accepted, while laminated or mixed-material packaging often isn't. When in doubt, ask what happens to a specific material in a standard curbside program before making sustainability claims to your customers.",
    ],
  },
  {
    slug: "unboxing-design-tips",
    title: "Designing an Unboxing Experience Customers Actually Photograph",
    excerpt:
      "A few structural and design choices that separate a forgettable box from one your customers want to share.",
    date: "2026-04-15",
    category: "Design",
    author: "Be Happy Packaging Team",
    body: [
      "Most 'unboxing experience' advice focuses on graphics. The structural choices you make before a single color gets printed usually matter more.",
      "Resistance is part of the experience — a lid that lifts with a little friction, a magnetic closure that clicks shut, a drawer box that slides open smoothly. These moments are what people remember, not just what they see.",
      "Interior contrast does a lot of work for very little cost. A bright interior print against a neutral exterior, or a printed tissue layer, creates a reveal moment even on a simple folding carton.",
      "Sequencing matters: what does the customer see first, second, and third as they open the box? Inserts, dividers, and card placement all control that order — treat it as a storyboard, not just protective packaging.",
      "Finally, build in a reason to keep the box. A reusable structure, a printed thank-you note, or a QR code linking to something useful all give customers a reason to photograph it before it goes in the recycling bin.",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, count = 2): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== slug).slice(0, count);
}
