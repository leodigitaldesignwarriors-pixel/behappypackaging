import type { Metadata } from "next";
import LegalContent from "@/components/ui/LegalContent";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing your use of ${siteConfig.domain} and orders placed with ${siteConfig.name}.`,
};

// TODO: placeholder legal copy — have this reviewed by legal counsel before launch.
export default function TermsPage() {
  return (
    <LegalContent title="Terms of Service" updated="August 15, 2026">
      <p>
        These Terms of Service govern your use of {siteConfig.domain} and any quote, sample, or order you place
        with {siteConfig.name}. By using this site or placing an order, you agree to these terms.
      </p>

      <h2>Quotes &amp; orders</h2>
      <p>
        Quotes provided through our site are estimates and are confirmed in writing before production begins. Our
        minimum order quantity is {siteConfig.moq} units per SKU unless otherwise agreed. Average production
        delivery is {siteConfig.turnaround.min}–{siteConfig.turnaround.max} days door-to-door from final proof
        approval, though this may vary by product and quantity.
      </p>

      <h2>Payment</h2>
      <p>{siteConfig.paymentMethods}. Payment terms will be confirmed on your order invoice.</p>

      <h2>Proofs &amp; approval</h2>
      <p>
        Production begins only after you approve a physical or digital proof. We are not responsible for errors
        that are present in a proof you have approved.
      </p>

      <h2>Shipping</h2>
      <p>
        We ship to {siteConfig.shipsTo.join(", ")} via {siteConfig.shippingPartners.join(", ")}. See our{" "}
        <a href="/shipping-policy" className="text-ink underline decoration-yellow decoration-2 underline-offset-2">
          Shipping Policy
        </a>{" "}
        for details.
      </p>

      <h2>Intellectual property</h2>
      <p>
        You retain ownership of artwork and branding you provide us. By submitting artwork, you confirm you have
        the rights to use it and grant us permission to reproduce it solely for the purpose of fulfilling your
        order.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        {siteConfig.name} is not liable for indirect or consequential damages arising from the use of our site or
        products, to the maximum extent permitted by law.
      </p>

      <h2>Contact us</h2>
      <p>Questions about these terms can be sent to {siteConfig.contact.email}.</p>
    </LegalContent>
  );
}
