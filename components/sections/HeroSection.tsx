"use client";

import { motion } from "framer-motion";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";
import { fadeUp, lineReveal, stagger } from "@/lib/motion";
import { LINKS } from "@/lib/site";

const HEADLINE: readonly string[] = ["ФИТНЕС, КОТОРЫЙ", "ПОДСТРАИВАЕТСЯ", "ПОД ТЕБЯ"];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col overflow-hidden border-b border-white/10 paged:h-screen paged:snap-start paged:snap-always"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -top-44 left-1/2 h-[520px] w-[820px] -translate-x-1/2 animate-glow rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.16),transparent)] blur-3xl" />
        <div className="absolute -bottom-56 -right-40 h-[480px] w-[480px] rounded-full bg-[radial-gradient(closest-side,rgba(120,140,255,0.14),transparent)] blur-3xl" />
      </div>

      <motion.div
        variants={stagger(0.15, 0.1)}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-5 pb-6 pt-6 sm:px-8 lg:px-12"
      >
        <motion.header
          variants={fadeUp}
          className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-400 sm:text-xs"
        >
          <span className="text-white">BODYSUPPORT</span>
          <span>Онлайн-сопровождение</span>
        </motion.header>

        <motion.div variants={fadeUp} className="mt-8">
          <SectionLabel index="01" title="Манифест" />
        </motion.div>

        <div className="flex flex-1 flex-col justify-center py-10">
          <h1 className="text-[length:clamp(1.9rem,min(7.4vw,11vh),6.5rem)] font-semibold uppercase leading-[0.95] tracking-tighter">
            {HEADLINE.map((line, index) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  variants={lineReveal}
                  className={`block ${index === HEADLINE.length - 1 ? "text-neutral-500" : ""}`}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg"
          >
            <span className="text-white">Научный подход</span> к тренировкам и питанию. Без
            марафонов и жёстких ограничений — только система, которая встраивается в твою жизнь.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ActionLink href="#pricing">Начать</ActionLink>
            <ActionLink href={LINKS.guide} variant="ghost" external>
              Гайд по питанию
            </ActionLink>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-500 sm:text-xs"
        >
          <span>Листай вниз</span>
          <span aria-hidden className="animate-float text-base text-white">
            ↓
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
