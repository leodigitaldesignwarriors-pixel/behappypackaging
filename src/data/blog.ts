// Blog content.
// A body item is either a plain string (rendered as a paragraph) or a typed block.
// Inline links use [label](/href) syntax and are parsed by <BlogBody />.

export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "table"; head: string[]; rows: string[][]; caption?: string }
  | { type: "faq"; items: { q: string; a: string }[] };

export type BlogBodyItem = string | BlogBlock;

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  body: BlogBodyItem[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "custom-box-pricing-guide",
    title: "How Much Do Custom Boxes Cost? A Pricing Guide for 300–1,000 Unit Orders",
    excerpt:
      "Instant-quote tools give you a number without telling you where it came from. Here is what actually sets the price of a custom printed box, and which parts of it you can move.",
    date: "2026-11-05",
    category: "Pricing",
    author: "Be Happy Packaging Team",
    body: [
      { type: "p", text: "There is no single price for a custom box, and any site that gives you one without asking about your board, your dimensions and your colour count is quoting a different box than the one you have in mind." },
      { type: "p", text: "What follows is the actual cost structure — the six variables every quote is built from, why the per-unit price falls so sharply between 300 and 1,000 units, and the levers you can pull to bring a number down without ending up with a worse box." },

      { type: "h2", text: "The short answer" },
      { type: "p", text: "Across the market, a basic one-colour flexo print on a standard corrugated shipper typically runs $0.80–$2.50 per unit at 1,000–5,000 units. Full-colour printed retail cartons with finishes sit well above that. Small runs sit above that again, because the same fixed costs are divided across fewer boxes." },
      { type: "p", text: "Most custom box buyers land somewhere between $1 and $6 a unit, plus $100–$500 in one-time setup. Rigid boxes are their own category and routinely run several times a folding carton of the same size, because they are hand-assembled and wrapped." },
      { type: "p", text: "Use those as orientation, not as your quote. The spread exists because of the six variables below." },

      { type: "h2", text: "The six variables behind every quote" },
      {
        type: "table",
        head: ["Variable", "What it changes", "How much it moves the price"],
        rows: [
          ["Board stock and weight", "250gsm (14pt) up to 450gsm (22pt); kraft or coated white", "Moderate. Heavier board costs more per sheet and more to ship. Kraft is cheaper than bleached white"],
          ["Box dimensions", "How many boxes are cut from one parent sheet", "Large. The single biggest lever most buyers never touch"],
          ["Print colours", "CMYK process vs spot Pantone inks", "Moderate. Each spot colour is another plate and another pass"],
          ["Finishes", "Lamination, foil, spot UV, embossing, debossing", "Large. Each is a separate pass, and foil and emboss need their own tooling"],
          ["Structure", "Folding carton, corrugated mailer, rigid box, insert", "Very large. Rigid is in a different bracket entirely"],
          ["Quantity", "How far the die and setup are spread", "Very large between 300 and 1,000, then it flattens"],
        ],
      },

      { type: "h2", text: "Why sheet yield matters more than you think" },
      { type: "p", text: "Your boxes are not printed one at a time. They are laid out on a large parent sheet, printed, then die-cut out of it. The question that sets a big part of your cost is how many of your boxes fit on one sheet." },
      { type: "p", text: "Get the dimensions slightly wrong and you waste a strip of board on every sheet, on every sheet of the run. Trim half an inch off a dimension and you can sometimes fit another box per sheet, which cuts the board cost of the whole job." },
      { type: "p", text: "This is why we ask for your product dimensions rather than your intended box dimensions. If there is a quarter-inch of slack to play with, we would rather find it before the die is cut than after." },

      { type: "h2", text: "Tooling: the one-time costs" },
      { type: "p", text: "Two fixed costs sit at the front of every custom job, and they are the reason minimums exist at all." },
      {
        type: "list",
        items: [
          "The cutting die — a steel rule die made for your specific box shape. One per design. A standard shape may already exist; a custom shape does not.",
          "Printing plates — one per colour for offset and flexo work. Four-colour CMYK means four plates. Add a spot Pantone and that is a fifth.",
          "Foil and embossing dies — separate again, if you are using those finishes.",
        ],
      },
      { type: "p", text: "Digital printing skips the plates, which is exactly why the suppliers advertising the lowest minimums are usually digital. It does not skip the cutting die." },

      { type: "h2", text: "Why 300 units costs more per box than 1,000" },
      { type: "p", text: "Because the die and the setup do not get cheaper when you order fewer boxes. Divide a $300 tooling and setup bill across 300 boxes and it adds a dollar to each one. Divide the same bill across 1,000 and it adds thirty cents." },
      { type: "p", text: "That curve is steep at the bottom and flat at the top. Going from 300 to 1,000 usually makes a real difference to your unit price. Going from 5,000 to 6,000 usually does not." },
      { type: "p", text: "Which is to say: a low minimum is not a cheap way to buy boxes. It is a way to launch a product without gambling a year of inventory on a design nobody has bought yet. Those are different things, and it is worth being clear with yourself about which one you are doing." },

      { type: "h2", text: "Seven ways to bring the number down" },
      {
        type: "list",
        ordered: true,
        items: [
          "Send product dimensions, not box dimensions, and let the dieline be optimised for sheet yield.",
          "Check whether a near-standard size works before committing to a fully custom one.",
          "Ask whether your brand colour can be built in CMYK instead of run as a spot Pantone.",
          "Put the expensive finish on the box the customer keeps, not the one they throw away.",
          "Use kraft instead of bleached white where the look allows — cheaper and often better for food and natural brands.",
          "Print one side instead of two if the interior is never seen.",
          "Get a second quantity priced alongside your first, so you can see the curve before you decide.",
        ],
      },

      { type: "h2", text: "What stops a quote being accurate" },
      { type: "p", text: "We quote accurately once the design is finalised, and vaguely before that — not to be difficult, but because the dieline determines the sheet yield, and the sheet yield determines a large share of the cost. A number given before the structure is fixed is a guess dressed up as a quote." },
      { type: "p", text: "If you do not have artwork yet, that is fine. Our [design service](/design-services) covers inspiration, mockups, revisions and final print files in about a week, and the quote that follows is a real one." },

      {
        type: "faq",
        items: [
          {
            q: "What is the cheapest type of custom box?",
            a: "A single-colour print on kraft corrugated, in a near-standard size, with no finishes. Every step away from that — white board, more colours, lamination, a custom structure — adds cost in a fairly predictable way.",
          },
          {
            q: "How much does the tooling cost?",
            a: "Setup and tooling commonly fall in the $100–$500 range across the industry, depending on the structure and the number of colours. It is a one-time cost, so reorders of an unchanged design do not pay it again.",
          },
          {
            q: "Is it cheaper to order 1,000 boxes than 300?",
            a: "Per box, almost always yes, and often by a lot. In total, obviously not. The right question is whether you are confident enough in the design to hold the extra stock.",
          },
          {
            q: "Why do rigid boxes cost so much more?",
            a: "They are built rather than folded. Greyboard is cut, formed and then wrapped with a printed sheet, much of it by hand. The material is heavier and the labour is higher, so a rigid box routinely costs several times a folding carton of the same dimensions.",
          },
          {
            q: "Does the price include shipping?",
            a: "Our quotes are door-to-door, so freight is accounted for rather than added as a surprise at the end. Your quote states exactly what is included.",
          },
          {
            q: "Can I get a sample before paying for a full run?",
            a: "Yes. A fully printed sample in your artwork and stock is $99, and for larger boxes a plain unprinted structural sample is also $99. See [samples](/samples).",
          },
        ],
      },
    ],
  },

  {
    slug: "choosing-a-packaging-company-dallas",
    title: "Choosing a Packaging Company in Dallas: 7 Questions to Ask Before You Order",
    excerpt:
      "Every packaging supplier says fast turnaround and great quality. These seven questions get you answers you can actually compare.",
    date: "2026-11-04",
    category: "Buying Guide",
    author: "Be Happy Packaging Team",
    body: [
      { type: "p", text: "Packaging suppliers are hard to compare because they all claim the same things. Fast turnaround. Premium quality. Competitive pricing. None of it is falsifiable, so none of it helps you choose." },
      { type: "p", text: "These seven questions have answers that differ between suppliers, which makes them useful. Ask all seven of everyone on your shortlist, us included, and the differences will be obvious." },

      { type: "h2", text: "1. What is your minimum, and is it per design or per order?" },
      { type: "p", text: "This is the question that eliminates most suppliers fastest, and the per-design detail matters more than the headline number. A 500-unit minimum across an order is very different from 500 per design when you need three sizes." },
      { type: "p", text: "For reference, published minimums across the trade commonly sit at 500 for corrugated and 1,000 for printed folding cartons. Ours is 300 per design." },

      { type: "h2", text: "2. When does the clock start on your quoted turnaround?" },
      { type: "p", text: "Almost every supplier quotes turnaround from final artwork approval, not from your first email. If you have not asked, you may be budgeting a week less than you need." },
      { type: "p", text: "Ask what the quoted window actually covers: production only, or production plus freight and delivery. A production-only number with freight quoted separately is not comparable to a door-to-door one." },

      { type: "h2", text: "3. What does your proofing process look like, and what does a sample cost?" },
      { type: "p", text: "There is a real difference between a digital proof, a plain structural sample and a fully printed production-identical sample. A supplier that only offers the first is asking you to approve colour on a screen." },
      { type: "p", text: "Ask the price, ask what it includes, and ask how long it adds. Ours are $99 either way — printed for small-format boxes, plain paper for large ones, where printing a single unit is not practical." },

      { type: "h2", text: "4. Which steps happen under your own roof?" },
      { type: "p", text: "A lot of packaging companies are brokers. That is not automatically bad, but it changes who you talk to when something goes wrong, and it usually adds days and a margin." },
      { type: "p", text: "Ask specifically about printing, lamination, foiling, die-cutting, gluing and assembly. If foiling is subcontracted, your foiled box has a handoff in the middle of it." },

      { type: "h2", text: "5. Can you design the packaging, or only print what I send?" },
      { type: "p", text: "Most brands do not arrive with a production-ready dieline. If the supplier only prints, you need a packaging designer as well, and you own the gap between them when the artwork does not fit the die." },
      { type: "p", text: "Ask whether design is included, what it costs, and how long it takes. Ours runs about a week through inspiration, mockups, revisions and final artwork." },

      { type: "h2", text: "6. What certifications do you hold, and can I see the documentation?" },
      { type: "p", text: "The second half of that question is the real one. Certifications get claimed loosely; documentation gets produced or it does not." },
      {
        type: "list",
        items: [
          "ISO 9001 — a quality management system, audited rather than self-declared.",
          "FSC chain-of-custody — the paper fibre is traceable to responsibly managed forest, which matters if you want to make the claim on-pack.",
          "Food-grade stock and inks — essential if the box touches food, and not something to discover late.",
        ],
      },
      { type: "p", text: "We hold all three and will send the documentation with a quote if you ask." },

      { type: "h2", text: "7. What are your payment terms, and what happens if the run is wrong?" },
      { type: "p", text: "Terms vary widely — deposits, net terms, full payment upfront. Ours is full payment at order confirmation, which is worth knowing before you plan cash flow around a launch." },
      { type: "p", text: "The second half matters more. Ask what the remedy is if a run arrives off-spec, who pays to put it right, and how long that takes. A supplier who answers that clearly has thought about it before." },

      { type: "h2", text: "A scoring sheet you can actually fill in" },
      {
        type: "table",
        head: ["Question", "What a strong answer looks like", "What should worry you"],
        rows: [
          ["Minimum", "A specific number, stated per design", "It depends, or a number that moves when you push"],
          ["Turnaround", "A window, with a stated start point and what it covers", "Fast, or a production number with freight unmentioned"],
          ["Proofing", "Named options with prices and added days", "Digital proof only"],
          ["In-house steps", "A list, with any subcontracting named", "Vagueness about the factory"],
          ["Design", "Included or priced, with a timeline", "Send us print-ready files"],
          ["Certifications", "Named, with documentation offered", "Claimed, with nothing to show"],
          ["If it goes wrong", "A stated remedy", "Case by case"],
        ],
      },
      { type: "p", text: "One honest note on local versus remote. If you need 5,000 plain brown shippers in Dallas next week, a local DFW plant will beat anyone shipping to you, and you should use one. The questions above matter most when the box has to do real work, or when the minimum is what is standing in your way." },

      {
        type: "faq",
        items: [
          {
            q: "Do I need a packaging company based in Dallas?",
            a: "Not usually. Local matters for urgent plain shippers and for press checks you want to attend in person. For custom printed packaging at a few hundred units, the minimum and the proofing process matter far more than the distance.",
          },
          {
            q: "How do I check a packaging supplier is legitimate?",
            a: "Ask for the certification documentation rather than the claim, order a paid sample before a production run, and ask which steps happen in their own facility. A supplier that answers all three plainly is usually fine.",
          },
          {
            q: "Should I get multiple quotes?",
            a: "Yes, but make them comparable first. Give every supplier the same dimensions, board, colour count, finishes and quantity. Quotes built on different assumptions are not a comparison.",
          },
          {
            q: "What is the single most useful question?",
            a: "When does the clock start on your turnaround. It is the one where suppliers quietly differ by a week or more, and almost nobody asks.",
          },
        ],
      },
    ],
  },

  {
    slug: "food-and-bakery-packaging-dallas",
    title: "Custom Food & Bakery Packaging for Dallas Food Brands: Boxes, Pouches and Labels",
    excerpt:
      "Food packaging has rules the rest of packaging does not. Here is what Dallas food and bakery brands need to get right on stock, grease, labelling and minimums.",
    date: "2026-11-03",
    category: "Food & Beverage",
    author: "Be Happy Packaging Team",
    body: [
      { type: "p", text: "Dallas has a deep food and beverage scene — early-stage brands, established processors, and the brokers and distributors that help them scale. What it does not have much of is a supplier willing to print a few hundred food-safe boxes for a brand that is still finding its market." },
      { type: "p", text: "Food packaging also carries constraints the rest of packaging does not. Grease, moisture, direct contact, and a set of material questions you need to answer before the die is cut rather than after." },

      { type: "h2", text: "Food-grade is a specification, not a claim" },
      { type: "p", text: "If your packaging touches food, the stock and the inks both have to be rated for it. This changes the board you can use and the inks that can be printed on the contact side, and it is not something to raise after artwork is approved." },
      { type: "p", text: "Tell your supplier at quote stage. Direct contact, indirect contact through a liner or wrapper, and no contact at all are three different specifications at three different prices." },

      { type: "h2", text: "Grease and moisture are the two failure modes" },
      { type: "p", text: "Most food packaging that fails in the field fails for one of two reasons, and both are predictable." },
      {
        type: "list",
        items: [
          "Grease strike-through — oil migrating into the board and darkening the print. Pastries, fried items and anything buttery. A grease-resistant liner or coating solves it; plain uncoated kraft does not.",
          "Moisture and steam — a warm product sealed in a tight box turns crisp into soggy. Vented structures and the right board weight matter more than the print does.",
        ],
      },
      { type: "p", text: "Both are worth testing on a sample with your real product in it, warm, for as long as it would sit before a customer opens it. A sample that looked fine empty on a desk tells you very little." },

      { type: "h2", text: "What suits what" },
      {
        type: "table",
        head: ["Product", "Usual format", "Watch out for"],
        rows: [
          ["Cookies, pastries, bakery", "[Folding carton](/products/folding-carton) with a window or vent", "Grease resistance; a window film that fogs"],
          ["Cakes and larger bakery", "[Corrugated](/products/corrugated) for rigidity, with an insert", "Board weight under load; base sag"],
          ["Chocolate and confectionery", "Folding carton, often with a [box insert](/products/box-inserts)", "Heat; scuffing in transit"],
          ["Coffee, granola, dry snacks", "[Pouches](/products/pouches) with a label, or a carton", "Pouch minimums are high — see below"],
          ["Gift and hamper sets", "[Rigid](/products/rigid) box with a fitted insert", "Cost per unit; assembly time"],
          ["Jars, bottles, retail jars", "[Labels and stickers](/products/labels-stickers)", "Adhesive on cold or wet surfaces"],
          ["Farmers market and takeaway", "Corrugated or [paper shopping bags](/products/paper-shopping-bags)", "Handle strength when loaded"],
        ],
      },

      { type: "h2", text: "The pouch problem, stated honestly" },
      { type: "p", text: "Flexible packaging is the one place where low minimums mostly do not exist. Stand-up pouches, kraft pouches and similar formats carry minimums around 10,000 units across the industry, because the tooling is printed film cylinders rather than a steel die." },
      { type: "p", text: "If you are launching a coffee or granola line at a few hundred units, the usual route is a stock pouch with a custom printed [label](/products/labels-stickers) on it. It looks better than people expect, the minimum is reachable, and you can switch to printed film once volume justifies it." },
      { type: "p", text: "Anyone promising you 300 fully printed custom pouches is either doing something unusual or quoting you something other than what you asked for." },

      { type: "h2", text: "Labelling is your responsibility, not ours" },
      { type: "p", text: "We print what you supply. What has to appear on a food label — ingredients, allergens, net weight, nutrition, the responsible business name and address — is set by federal and state rules, and it is on you or your food-safety consultant to get right." },
      { type: "p", text: "Worth knowing before you commit to a run: label requirements are the most common reason a food brand reprints. Get the artwork reviewed by someone who knows the rules before the plates are made, not after 300 boxes arrive." },

      { type: "h2", text: "Texas sales tax, briefly" },
      { type: "p", text: "Packaging is specifically excluded from the Texas resale exemption, with a narrow carve-out for manufacturers and processors packaging the product they themselves make. A Dallas food producer boxing its own product sits differently from a retailer buying branded shippers. Ask your CPA where your business falls — we are a manufacturer, not an accountant." },

      { type: "h2", text: "Starting small" },
      { type: "p", text: "Our minimum is 300 per design, which is low enough to put a real printed box on a market stall or a first retail shelf without committing to a pallet. Printing, lamination, foiling, die-cutting, gluing and assembly all happen in our own facility, which is what makes a run that size workable." },
      { type: "p", text: "We hold food-grade stock and ink certification alongside ISO 9001 and FSC chain-of-custody, and will send the documentation with your quote." },

      {
        type: "faq",
        items: [
          {
            q: "What is the minimum for custom bakery boxes?",
            a: "300 per design with us. Across the trade, 500 for corrugated and 1,000 for printed folding cartons are the common published floors.",
          },
          {
            q: "Is kraft board food safe?",
            a: "Only if it is specified as food-grade. Kraft is a look and a material family, not a food-contact rating. Ask for the stock specification rather than assuming.",
          },
          {
            q: "Can you do grease-resistant boxes?",
            a: "Yes, through a grease-resistant liner or coating. Tell us what the product is at quote stage, because the right answer for a croissant is not the right answer for a cupcake.",
          },
          {
            q: "Why can't I order 300 custom printed pouches?",
            a: "Pouch tooling is printed film cylinders, which only make economic sense over long runs — roughly 10,000 units industry-wide. A stock pouch with a custom printed label is the usual way to launch below that.",
          },
          {
            q: "Do you print the nutrition panel?",
            a: "We print the artwork you supply, panel included. What that panel has to say is governed by food labelling law, and getting it right is yours or your consultant's call, not ours.",
          },
          {
            q: "How long until I have boxes?",
            a: "12–15 days door-to-door from final artwork approval. Add about a week if you need us to design the packaging first, and add the sample round if you want to see one before committing.",
          },
        ],
      },
    ],
  },

  {
    slug: "folding-carton-vs-corrugated-vs-rigid",
    title: "Folding Carton vs Corrugated vs Rigid Boxes: Which Does Your Brand Need?",
    excerpt:
      "Three box families, three very different cost brackets. A plain-language guide to which one your product actually needs.",
    date: "2026-11-02",
    category: "Guides",
    author: "Be Happy Packaging Team",
    body: [
      { type: "p", text: "Most packaging decisions come down to picking one of three structures. Get it right and everything downstream — cost, protection, how the box photographs — falls into place. Get it wrong and you are paying rigid-box money for something that gets thrown away on opening." },
      { type: "p", text: "Here is what each one is, what it costs relative to the others, and the question that usually decides it." },

      { type: "h2", text: "The quick comparison" },
      {
        type: "table",
        head: ["", "Folding carton", "Corrugated", "Rigid"],
        rows: [
          ["Material", "Single-layer paperboard, 250–450gsm", "Fluted board between two liners", "Thick greyboard wrapped in printed paper"],
          ["Ships flat", "Yes", "Yes", "No — usually ships assembled"],
          ["Relative cost", "Lowest", "Low to moderate", "Highest, by a wide margin"],
          ["Protection", "Light", "Strong", "Strong, but heavy"],
          ["Print quality", "Excellent", "Good; flute can show through", "Excellent"],
          ["Typical use", "Retail shelf packaging", "Shipping and e-commerce", "Luxury, gifting, unboxing"],
        ],
      },

      { type: "h2", text: "Folding cartons" },
      { type: "p", text: "A [folding carton](/products/folding-carton) is a single sheet of paperboard, printed flat, die-cut, creased and glued. It arrives flat and you fold it into shape. This is the box most retail products sit in — cosmetics, supplements, confectionery, small electronics." },
      { type: "p", text: "It takes print beautifully, because you are printing on a smooth flat sheet before anything is folded. It is the cheapest of the three. What it does not do is protect anything much: a folding carton is a presentation layer, not a shipping container." },
      { type: "p", text: "Choose it when the product sits on a shelf or inside another box, and when how it looks matters more than what it survives." },

      { type: "h2", text: "Corrugated" },
      { type: "p", text: "[Corrugated](/products/corrugated) has a fluted middle layer sandwiched between flat liners. That fluting is what gives it stacking strength and impact resistance, and it is why almost everything that moves through a shipping network moves in it." },
      { type: "p", text: "Print is good but not flawless — the flute can telegraph slightly through the liner, and very fine detail or large flat areas of solid colour are less forgiving than on a folding carton. For most e-commerce mailers this is a non-issue." },
      { type: "p", text: "Choose it when the box is doing the shipping. If your customer receives the box from a courier, this is almost certainly your answer." },

      { type: "h2", text: "Rigid boxes" },
      { type: "p", text: "A [rigid box](/products/rigid) is built rather than folded — thick greyboard cut and formed into a permanent shape, then wrapped with a separately printed sheet. Think phone boxes, watch boxes, premium gift sets." },
      { type: "p", text: "Much of that construction is done by hand, which is why a rigid box routinely costs several times a folding carton of the same dimensions. It also does not ship flat, so you pay to store and freight air." },
      { type: "p", text: "Choose it when the box is part of the product — when the customer keeps it, when the opening moment is the point, or when the price of what is inside makes the packaging cost irrelevant." },

      { type: "h2", text: "The question that usually decides it" },
      { type: "p", text: "Ask what happens to the box thirty seconds after it is opened." },
      {
        type: "list",
        items: [
          "Straight into recycling, and it travelled by courier → corrugated.",
          "Straight into recycling, but it sat on a shelf first → folding carton.",
          "Kept, reused, or photographed → rigid.",
        ],
      },
      { type: "p", text: "That one question resolves most cases. Where it does not, the usual answer is that you need two: a printed folding carton for the retail unit, inside a plain corrugated shipper for transit." },

      { type: "h2", text: "What else goes in the box" },
      { type: "p", text: "Whichever structure you pick, a few things tend to come with it. [Box inserts](/products/box-inserts) hold the product in place and control what the customer sees first. [Labels and stickers](/products/labels-stickers) handle variable information — batch codes, flavours, sizes — without reprinting the box. And [eco-friendly options](/products/eco-friendly-packaging) exist across all three families, though laminated finishes complicate recyclability wherever they are used." },
      { type: "p", text: "Not sure which way to go? Send us the product dimensions and what it has to survive, and we will tell you which structure we would quote and why. Or start with a [sample](/samples) — $99, in your artwork, before you commit to anything." },

      {
        type: "faq",
        items: [
          {
            q: "What is the difference between cardboard and corrugated?",
            a: "In the trade, cardboard usually means paperboard — a single solid layer, used for folding cartons. Corrugated is the fluted sandwich used for shipping boxes. People use cardboard loosely for both, which is why suppliers ask you to be specific.",
          },
          {
            q: "Can I print photos on a corrugated box?",
            a: "Yes, and quality has improved a lot. Be aware the flute can show through slightly on large flat areas of solid colour. If the print is the whole point and the box is not shipping, a folding carton will look better.",
          },
          {
            q: "Why are rigid boxes so expensive?",
            a: "Thicker material, more of it, and a lot of hand assembly. They also ship assembled rather than flat, which costs more to freight and store.",
          },
          {
            q: "Which is the most sustainable?",
            a: "Corrugated and uncoated paperboard are both widely accepted in curbside recycling. Rigid boxes are harder to recycle because they combine materials. In practice the finish matters as much as the structure — a laminated box of any type is harder to recycle than an unlaminated one.",
          },
          {
            q: "What is the minimum for each?",
            a: "300 per design for all three with us. Across the trade, published floors are commonly 500 for corrugated and rigid and 1,000 for printed folding cartons.",
          },
          {
            q: "Can I mix structures in one order to reach the minimum?",
            a: "No — the minimum is per design, because each design needs its own die and setup. Three structures means three runs of 300.",
          },
        ],
      },
    ],
  },

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
      "We're also seeing more brands request smaller initial runs — testing a design at a few hundred units before committing to a larger production order. Low minimums used to be the exception; for a lot of our customers now, they're the default way to launch.",
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
