import type { Metadata } from "next";
import LegalContent from "@/components/ui/LegalContent";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects your information.`,
};

// TODO: placeholder legal copy — have this reviewed by legal counsel before launch.
export default function PrivacyPolicyPage() {
  return (
    <LegalContent title="Privacy Policy" updated="August 15, 2026">
      <p>
        This Privacy Policy describes how {siteConfig.name} ("we," "us," or "our") collects, uses, and shares
        information when you visit {siteConfig.domain} or submit a request through one of our forms.
      </p>

      <h2>Information we collect</h2>
      <p>
        When you submit a quote request, sample request, contact form, or newsletter signup, we collect the
        information you provide directly — such as your name, email address, company, product details, and any
        files you upload. We also collect basic usage data (pages visited, browser type) through cookies, as
        described below.
      </p>

      <h2>Cookies</h2>
      <p>
        We use cookies to keep the site working correctly and, only with your consent, to understand how visitors
        use the site. You can accept, decline, or manage cookie preferences using the cookie banner shown on your
        first visit. Essential cookies required for core site functionality cannot be disabled.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>To respond to quote, sample, and contact requests</li>
        <li>To send order and account-related communications</li>
        <li>To send newsletter content, if you've opted in</li>
        <li>To improve our website and services</li>
      </ul>

      <h2>Sharing your information</h2>
      <p>
        We do not sell your personal information. We share information with service providers who help us operate
        the site and fulfill orders — including our form processor (Web3Forms) and shipping partners (DHL, FedEx,
        USPS) — only as needed to provide our services.
      </p>

      <h2>Your rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal information at any time by emailing{" "}
        {siteConfig.contact.email}.
      </p>

      <h2>Contact us</h2>
      <p>Questions about this policy can be sent to {siteConfig.contact.email}.</p>
    </LegalContent>
  );
}
