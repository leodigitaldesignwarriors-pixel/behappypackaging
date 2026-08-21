import Link from "next/link";
import clsx from "clsx";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { ReactNode } from "react";
import Magnetic from "@/components/animation/Magnetic";

interface PillButtonProps {
  href: string;
  children: ReactNode;
  variant?: "black" | "yellow" | "outline" | "outline-light";
  size?: "md" | "lg";
  className?: string;
  magnetic?: boolean;
  icon?: boolean;
  cursorText?: string;
}

const variantClasses: Record<string, string> = {
  black: "bg-black text-white hover:bg-ink",
  yellow: "bg-yellow text-black hover:bg-yellow-dim",
  outline: "border-2 border-black text-black hover:bg-black hover:text-white",
  "outline-light": "border-2 border-white text-white hover:bg-white hover:text-black",
};

const sizeClasses: Record<string, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function PillButton({
  href,
  children,
  variant = "black",
  size = "md",
  className,
  magnetic = true,
  icon = true,
  cursorText,
}: PillButtonProps) {
  const link = (
    <Link
      href={href}
      data-cursor={cursorText}
      className={clsx(
        "group inline-flex items-center gap-2 rounded-full font-heading font-semibold tracking-tight transition-colors duration-200",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
      {icon && (
        <ArrowUpRight
          weight="bold"
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          size={size === "lg" ? 18 : 15}
        />
      )}
    </Link>
  );

  if (!magnetic) return link;

  return (
    <Magnetic className="inline-block">
      {link}
    </Magnetic>
  );
}
