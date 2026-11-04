import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import type { BlogBodyItem } from "@/data/blog";

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Renders [label](/href) inline links; everything else passes through as text. */
function inline(text: string): ReactNode {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let key = 0;

  for (const match of text.matchAll(LINK_PATTERN)) {
    const [raw, label, href] = match;
    const start = match.index ?? 0;

    if (start > cursor) nodes.push(text.slice(cursor, start));

    const className = "font-semibold text-ink underline decoration-yellow-dim decoration-2 underline-offset-2 transition-colors hover:text-yellow-dim";

    nodes.push(
      href.startsWith("/") ? (
        <Link key={key++} href={href} data-cursor="Open" className={className}>
          {label}
        </Link>
      ) : (
        <a key={key++} href={href} target="_blank" rel="noopener noreferrer" className={className}>
          {label}
        </a>
      ),
    );

    cursor = start + raw.length;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes.length === 1 ? nodes[0] : nodes.map((n, i) => <Fragment key={i}>{n}</Fragment>);
}

export default function BlogBody({ body }: { body: BlogBodyItem[] }) {
  return (
    <div className="space-y-5 text-base leading-relaxed text-stone sm:text-lg">
      {body.map((item, i) => {
        if (typeof item === "string") return <p key={i}>{inline(item)}</p>;

        switch (item.type) {
          case "p":
            return <p key={i}>{inline(item.text)}</p>;

          case "h2":
            return (
              <h2
                key={i}
                className="!mt-12 font-heading text-2xl font-bold leading-snug tracking-tight text-ink sm:text-3xl"
              >
                {item.text}
              </h2>
            );

          case "list": {
            const List = item.ordered ? "ol" : "ul";
            return (
              <List
                key={i}
                className={`ml-1 space-y-2 pl-5 ${item.ordered ? "list-decimal" : "list-disc"} marker:text-yellow-dim marker:font-semibold`}
              >
                {item.items.map((li, j) => (
                  <li key={j} className="pl-1">
                    {inline(li)}
                  </li>
                ))}
              </List>
            );
          }

          case "table":
            return (
              <figure key={i} className="!mt-8 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
                <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b-2 border-ink">
                      {item.head.map((th, j) => (
                        <th key={j} className="py-3 pr-4 align-bottom font-heading font-bold text-ink">
                          {th}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {item.rows.map((row, j) => (
                      <tr key={j} className="border-b border-stone/20 align-top">
                        {row.map((td, k) => (
                          <td
                            key={k}
                            className={`py-3 pr-4 ${k === 0 ? "font-semibold text-ink" : "text-stone"}`}
                          >
                            {inline(td)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {item.caption && (
                  <figcaption className="mt-3 text-sm text-stone">{inline(item.caption)}</figcaption>
                )}
              </figure>
            );

          case "faq":
            return (
              <dl key={i} className="!mt-8 space-y-6">
                {item.items.map((qa, j) => (
                  <div key={j} className="border-l-4 border-yellow-dim pl-5">
                    <dt className="font-heading text-lg font-bold text-ink">{qa.q}</dt>
                    <dd className="mt-2">{inline(qa.a)}</dd>
                  </div>
                ))}
              </dl>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
