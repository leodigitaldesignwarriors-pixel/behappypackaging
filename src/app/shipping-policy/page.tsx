import type { Metadata } from "next";
import LegalContent from "@/components/ui/LegalContent";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: `Where and how ${siteConfig.name} ships custom packaging orders.`,
};

// TODO: placeholder policy copy — have this reviewed before launch.
export default function ShippingPolicyPage() {
  return (
    <LegalContent title="Shipping Policy" updated="August 15, 2026">
      <p>
        This policy covers how {siteConfig.name} ships production orders, samples, and any physical proofs sent
        as part of your project.
      </p>

      <h2>Where we ship</h2>
      <p>We currently ship to {siteConfig.shipsTo.join(", ")}.</p>

      <h2>Shipping partners</h2>
      <p>
        Orders are shipped via {siteConfig.shippingPartners.join(", ")}, depending on destination, weight, and
        service level. Tracking is provided on every shipment.
      </p>

      <h2>Turnaround</h2>
      <p>
        Average delivery is {siteConfig.turnaround.min}–{siteConfig.turnaround.max} days door-to-door
        from final proof approval to shipment. Transit time is separate from production time and varies by
        destination and carrier service level.
      </p>

      <h2>Samples</h2>
      <p>
        Sample orders (${siteConfig.samples.printedSmall.price} printed, ${siteConfig.samples.paperLarge.price}{" "}
        paper) ship separately from production orders and typically move faster, since they don't require a full
        production run.
      </p>

      <h2>Damaged or lost shipments</h2>
      <p>
        If your shipment arrives damaged or doesn't arrive within the expected window, contact us at{" "}
        {siteConfig.contact.email} with your order details and we'll work with the carrier to resolve it.
      </p>

      <h2>Contact us</h2>
      <p>Shipping questions can be sent to {siteConfig.contact.email}.</p>
    </LegalContent>
  );
}
