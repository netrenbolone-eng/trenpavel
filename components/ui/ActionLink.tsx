"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ActionVariant = "primary" | "ghost";

interface ActionLinkProps {
  href: string;
  children: ReactNode;
  variant?: ActionVariant;
  external?: boolean;
  className?: string;
}

const base =
  "group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full px-8 font-mono text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

const styles: Record<ActionVariant, string> = {
  primary: "bg-white text-ink hover:bg-neutral-200",
  ghost:
    "border border-white/20 text-white backdrop-blur-md hover:border-white/50 hover:bg-white/[0.06]",
};

export default function ActionLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ActionLinkProps) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`${base} ${styles[variant]} ${className}`}
    >
      <span>{children}</span>
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </motion.a>
  );
}
