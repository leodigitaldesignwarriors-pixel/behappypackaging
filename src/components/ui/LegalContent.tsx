import type { ReactNode } from "react";

interface LegalContentProps {
  title: string;
  updated: string;
  children: ReactNode;
}

export default function LegalContent({ title, updated, children }: LegalContentProps) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">{title}</h1>
      <p className="mt-2 text-sm text-stone">Last updated: {updated}</p>
      <div className="prose-legal mt-10 space-y-6 text-sm leading-relaxed text-stone sm:text-base [&_h2]:mb-2 [&_h2]:mt-8 [&_h2]:font-heading [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}
