"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, WarningCircle, Paperclip } from "@phosphor-icons/react";
import { products } from "@/data/products";
import { submitToWeb3FormsMultipart } from "@/lib/web3forms";
import Magnetic from "@/components/animation/Magnetic";

type QuoteType = "manufacturing" | "design" | "sample";
type Status = "idle" | "submitting" | "success" | "error";

interface QuoteFormProps {
  initialProduct?: string;
  initialType?: QuoteType;
  className?: string;
}

const quantityOptions = ["100–500", "500–1,000", "1,000–5,000", "5,000–25,000", "25,000+"];

const typeLabels: Record<QuoteType, string> = {
  manufacturing: "Manufacturing",
  design: "Design Services",
  sample: "Sample Request",
};

export default function QuoteForm({ initialProduct = "", initialType = "manufacturing", className }: QuoteFormProps) {
  const [type, setType] = useState<QuoteType>(initialType);
  const [product, setProduct] = useState(initialProduct);
  const [status, setStatus] = useState<Status>("idle");
  const [fileName, setFileName] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Please enter a valid email.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    formData.set("subject", `New ${typeLabels[type]} quote request — Be Happy Packaging`);
    formData.set("form_type", "quote");
    formData.set("request_type", typeLabels[type]);

    try {
      const ok = await submitToWeb3FormsMultipart(formData);
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
        className={`flex flex-col items-center gap-3 rounded-3xl bg-white p-12 text-center shadow-xl ${className || ""}`}
      >
        <CheckCircle weight="fill" size={44} className="text-yellow-dim" />
        <h3 className="font-heading text-2xl font-bold text-ink">Request received</h3>
        <p className="max-w-sm text-sm text-stone">
          Thanks — a member of our team will follow up with your quote within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`grid gap-5 rounded-3xl bg-white p-6 shadow-xl sm:p-8 ${className || ""}`}
    >
      <div className="grid gap-1.5 sm:grid-cols-3">
        {(Object.keys(typeLabels) as QuoteType[]).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setType(option)}
            className={`cursor-pointer rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors ${
              type === option
                ? "border-black bg-black text-white"
                : "border-black/15 bg-transparent text-ink hover:border-black/40"
            }`}
          >
            {typeLabels[option]}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={inputClass(!!errors.name)}
          />
        </Field>
        <Field label="Email" htmlFor="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputClass(!!errors.email)}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Product" htmlFor="product">
          <select
            id="product"
            name="product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className={inputClass(false)}
          >
            <option value="">Select a product</option>
            {products.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Quantity" htmlFor="quantity">
          <select id="quantity" name="quantity" className={inputClass(false)} defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            {quantityOptions.map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Project details" htmlFor="details" hint="Optional">
        <textarea
          id="details"
          name="details"
          rows={4}
          placeholder="Tell us about your product, timeline, or design needs…"
          className={inputClass(false)}
        />
      </Field>

      <div>
        <label
          htmlFor="attachment"
          className="flex cursor-pointer items-center gap-2 text-sm font-medium text-stone transition-colors hover:text-ink"
        >
          <Paperclip size={16} />
          {fileName ? fileName : "Attach a file (optional)"}
        </label>
        <input
          id="attachment"
          name="attachment"
          type="file"
          className="sr-only"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
        />
      </div>

      <Magnetic className="self-start">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="cursor-pointer rounded-full bg-yellow px-8 py-3.5 font-heading text-sm font-semibold text-black transition-colors hover:bg-yellow-dim disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Submit Request"}
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

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border-2 bg-off-white px-4 py-3 text-sm text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-black ${
    hasError ? "border-red-500" : "border-black/10"
  }`;
}

function Field({
  label,
  htmlFor,
  error,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-ink">
        {label}
        {hint && <span className="ml-1.5 text-xs font-normal text-stone">{hint}</span>}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
