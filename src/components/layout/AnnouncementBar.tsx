"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "@phosphor-icons/react";
import { siteConfig } from "@/data/site";

const STORAGE_KEY = "bhp_announcement_dismissed";

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    setDismissed(stored === "true");
  }, []);

  useEffect(() => {
    if (dismissed) return;
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % siteConfig.announcements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [dismissed]);

  const handleDismiss = () => {
    setDismissed(true);
    window.localStorage.setItem(STORAGE_KEY, "true");
  };

  if (dismissed) return null;

  return (
    <div className="relative flex h-9 items-center justify-center overflow-hidden bg-black px-10 text-xs font-medium text-yellow sm:text-sm">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="whitespace-nowrap text-center"
        >
          {siteConfig.announcements[index]}
        </motion.p>
      </AnimatePresence>
      <button
        type="button"
        onClick={handleDismiss}
        aria-label="Dismiss announcement"
        className="absolute right-2 top-1/2 flex h-6 w-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-yellow/80 transition-colors hover:bg-white/10 hover:text-yellow sm:right-4"
      >
        <X size={14} weight="bold" />
      </button>
    </div>
  );
}
