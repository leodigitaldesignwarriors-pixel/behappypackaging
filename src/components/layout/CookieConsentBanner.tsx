"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "bhp_cookie_consent";
type Consent = "accepted" | "declined";

export function getCookieConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(STORAGE_KEY) as Consent | null;
}

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    setVisible(!stored);
  }, []);

  const setConsent = (consent: Consent) => {
    window.localStorage.setItem(STORAGE_KEY, consent);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-label="Cookie consent"
          className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-2xl rounded-2xl border border-black/10 bg-white p-5 shadow-2xl sm:inset-x-auto sm:right-6 sm:bottom-6"
        >
          <p className="text-sm text-ink">
            We use cookies to improve your experience and understand site usage. See our{" "}
            <a href="/privacy" className="underline decoration-yellow decoration-2 underline-offset-2">
              Privacy Policy
            </a>{" "}
            for details.
          </p>

          {showPreferences && (
            <p className="mt-2 text-xs text-stone">
              Essential cookies keep the site working and can&apos;t be disabled. Analytics cookies
              are only loaded after you accept.
            </p>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setConsent("accepted")}
              className="cursor-pointer rounded-full bg-black px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-ink"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => setConsent("declined")}
              className="cursor-pointer rounded-full border-2 border-black/15 px-5 py-2 text-xs font-semibold text-ink transition-colors hover:border-black/40"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => setShowPreferences((v) => !v)}
              className="cursor-pointer rounded-full px-5 py-2 text-xs font-semibold text-stone underline decoration-dotted transition-colors hover:text-ink"
            >
              Preferences
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
