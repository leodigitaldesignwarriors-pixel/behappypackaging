import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/data/site";

// TODO: set a real WhatsApp number in data/site.ts (siteConfig.contact.whatsapp).
// Falls back to a placeholder number so the button stays functional in the meantime.
const FALLBACK_WHATSAPP_NUMBER = "10000000000";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
}

export default function WhatsAppButton({ message, className }: WhatsAppButtonProps) {
  const number = (siteConfig.contact.whatsapp || FALLBACK_WHATSAPP_NUMBER).replace(/\D/g, "");
  const text = message ? `?text=${encodeURIComponent(message)}` : "";

  return (
    <a
      href={`https://wa.me/${number}${text}`}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="Chat"
      aria-label="Chat with us on WhatsApp"
      className={`fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 ${className || ""}`}
    >
      <WhatsappLogo size={28} weight="fill" />
    </a>
  );
}
