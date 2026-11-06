"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { LINKS, PLAN } from "@/lib/site";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative flex min-h-[100svh] flex-col overflow-hidden paged:h-screen paged:snap-start paged:snap-always"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-1/4 h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.10),transparent)] blur-3xl" />
        <div className="absolute -left-48 bottom-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(120,140,255,0.10),transparent)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-5 py-16 sm:px-8 lg:px-12 paged:py-0">
        <motion.div
          variants={stagger(0.05, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel index="03" title="Формат" />
          </motion.div>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-5">
              <motion.h2
                variants={fadeUp}
                className="text-[length:clamp(1.75rem,min(4.6vw,7vh),4rem)] font-semibold uppercase leading-[1] tracking-tighter"
              >
                Один формат. <span className="text-neutral-500">Полное внимание.</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-md text-base leading-relaxed text-neutral-400"
              >
                Мест ограничено — чтобы каждый участник получал личный контроль, а не шаблонную
                программу.
              </motion.p>
            </div>

            <motion.article
              variants={fadeUp}
              className="relative overflow-hidden border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl sm:p-8 lg:col-span-7"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full bg-white/10 blur-3xl"
              />

              <div className="relative flex items-start justify-between gap-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-400 sm:text-xs">
                  {PLAN.name}
                </p>
                <span className="shrink-0 rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-300">
                  Основной формат
                </span>
              </div>

              <p className="relative mt-6 flex items-baseline gap-3">
                <span className="text-[length:clamp(3.5rem,min(8vw,10vh),6rem)] font-semibold leading-none tracking-tighter">
                  {PLAN.price}
                </span>
                <span className="text-3xl text-neutral-400">{PLAN.currency}</span>
              </p>

              <ul className="relative mt-6 divide-y divide-white/10 border-t border-white/10">
                {PLAN.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 py-2.5 text-sm text-neutral-300 sm:text-base"
                  >
                    <span aria-hidden className="h-1.5 w-1.5 shrink-0 bg-white" />
                    {feature}
                  </li>
                ))}
              </ul>

              <ActionLink href={LINKS.messenger} external className="relative mt-6 w-full sm:w-auto">
                Занять место
              </ActionLink>
            </motion.article>
          </div>
        </motion.div>
      </div>

      <Footer />
    </section>
  );
}
