"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { submitToWeb3Forms } from "@/lib/web3forms";
import Magnetic from "@/components/animation/Magnetic";

type Status = "idle" | "submitting" | "success" | "error";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus("submitting");
    try {
      const ok = await submitToWeb3Forms({
        subject: "New newsletter signup — Be Happy Packaging",
        form_type: "newsletter",
        email,
      });
      setStatus(ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-yellow px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <h2 className="max-w-lg font-heading text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
          Packaging ideas, straight to your inbox
        </h2>
        <p className="max-w-md text-sm text-black/70 sm:text-base">
          Trends, sustainability tips, and the occasional discount. No spam, unsubscribe any time.
        </p>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white"
            >
              <CheckCircle weight="fill" size={18} className="text-yellow" />
              You&apos;re on the list — thanks for signing up.
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@brand.com"
                className="w-full flex-1 rounded-full border-2 border-black bg-white px-5 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
              />
              <Magnetic>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full cursor-pointer whitespace-nowrap rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink disabled:opacity-60 sm:w-auto"
                >
                  {status === "submitting" ? "Subscribing…" : "Subscribe"}
                </button>
              </Magnetic>
            </motion.form>
          )}
        </AnimatePresence>

        {status === "error" && (
          <p className="flex items-center gap-1.5 text-sm font-medium text-black/70" role="alert">
            <WarningCircle weight="fill" size={16} />
            Something went wrong — please try again.
          </p>
        )}
      </div>
    </section>
  );
}
