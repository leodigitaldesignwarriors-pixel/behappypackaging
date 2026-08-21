"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { submitToWeb3Forms } from "@/lib/web3forms";
import Magnetic from "@/components/animation/Magnetic";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Please enter a valid email.";
    if (!message) nextErrors.message = "Please add a short message.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const ok = await submitToWeb3Forms({
        subject: "New contact form message — Be Happy Packaging",
        form_type: "contact",
        name,
        email,
        message,
      });
      setStatus(ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-3 rounded-3xl bg-white p-10 text-center shadow-sm"
      >
        <CheckCircle weight="fill" size={40} className="text-yellow-dim" />
        <h3 className="font-heading text-xl font-bold text-ink">Message sent</h3>
        <p className="max-w-sm text-sm text-stone">We'll get back to you as soon as we can.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-1.5">
        <label htmlFor="contact-name" className="text-sm font-semibold text-ink">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className={`w-full rounded-xl border-2 bg-off-white px-4 py-3 text-sm text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-black ${
            errors.name ? "border-red-500" : "border-black/10"
          }`}
        />
        {errors.name && <p className="text-xs font-medium text-red-600">{errors.name}</p>}
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="contact-email" className="text-sm font-semibold text-ink">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={`w-full rounded-xl border-2 bg-off-white px-4 py-3 text-sm text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-black ${
            errors.email ? "border-red-500" : "border-black/10"
          }`}
        />
        {errors.email && <p className="text-xs font-medium text-red-600">{errors.email}</p>}
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="contact-message" className="text-sm font-semibold text-ink">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className={`w-full rounded-xl border-2 bg-off-white px-4 py-3 text-sm text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-black ${
            errors.message ? "border-red-500" : "border-black/10"
          }`}
        />
        {errors.message && <p className="text-xs font-medium text-red-600">{errors.message}</p>}
      </div>

      <Magnetic className="self-start">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="cursor-pointer rounded-full bg-yellow px-8 py-3.5 font-heading text-sm font-semibold text-black transition-colors hover:bg-yellow-dim disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send Message"}
        </button>
      </Magnetic>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="alert"
            className="flex items-center gap-1.5 text-sm font-medium text-red-600"
          >
            <WarningCircle weight="fill" size={16} />
            Something went wrong — please try again or email us directly.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
