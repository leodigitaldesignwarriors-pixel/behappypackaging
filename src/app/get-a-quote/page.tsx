import type { Metadata } from "next";
import GetAQuoteContent from "@/components/forms/GetAQuoteContent";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a manufacturing quote, a design services quote, or a sample — we'll follow up with pricing within one business day.",
};

export default function GetAQuotePage() {
  return <GetAQuoteContent />;
}
