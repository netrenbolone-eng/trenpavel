import type { Variants } from "framer-motion";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const stagger = (delayChildren = 0.1, staggerChildren = 0.09): Variants => ({
  hidden: {},
  show: { transition: { delayChildren, staggerChildren } },
});

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

export const lineReveal: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.9, ease: EASE } },
};

export const viewportOnce = { once: true, amount: 0.2 } as const;
