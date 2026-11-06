"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { STEPS } from "@/lib/site";

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden border-b border-white/10 py-16 paged:h-screen paged:snap-start paged:snap-always paged:py-0"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_100%,rgba(255,255,255,0.06),transparent)]"
      />

      <motion.div
        variants={stagger(0.05, 0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12"
      >
        <motion.div variants={fadeUp}>
          <SectionLabel index="02" title="Система" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="mt-8 max-w-4xl text-[length:clamp(1.75rem,min(4.6vw,7vh),4rem)] font-semibold uppercase leading-[1] tracking-tighter"
        >
          Четыре шага. <span className="text-neutral-500">Одна система, которая работает.</span>
        </motion.h2>

        <motion.ul
          variants={stagger(0.1, 0.1)}
          className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4"
        >
          {STEPS.map((step, index) => (
            <motion.li
              key={step.id}
              variants={fadeUp}
              className="group relative flex min-h-[240px] flex-col justify-between bg-ink p-6 transition-colors duration-500 hover:bg-[#111111] sm:p-8 lg:min-h-[320px]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              {index < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-6 top-6 font-mono text-neutral-600 transition-colors duration-300 group-hover:text-white sm:right-8 sm:top-8"
                >
                  →
                </span>
              )}

              <span className="text-outline relative text-[length:clamp(3.5rem,7vw,6rem)] font-semibold leading-none tracking-tighter transition-colors duration-500 group-hover:text-white">
                {step.id}
              </span>

              <div className="relative mt-10">
                <h3 className="text-xl font-semibold uppercase leading-tight tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{step.text}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
