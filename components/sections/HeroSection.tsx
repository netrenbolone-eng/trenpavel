"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";
import { fadeUp, lineReveal, stagger } from "@/lib/motion";
import { LINKS } from "@/lib/site";

const HEADLINE: readonly string[] = ["ФИТНЕС, КОТОРЫЙ", "ПОДСТРАИВАЕТСЯ", "ПОД ТЕБЯ"];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col overflow-hidden border-b border-line paged:h-screen paged:snap-start paged:snap-always"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/gym-dumbbells.webp"
          alt="Гантели в фитнес-зале на фоне зоны силовых тренировок."
          width={1600}
          height={1067}
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover object-[62%_center] opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/75 to-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/25" />
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -top-44 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(197,246,90,0.12),transparent)]" />
        <div className="absolute -bottom-56 -right-40 h-[480px] w-[480px] rounded-full bg-[radial-gradient(closest-side,rgba(120,140,86,0.1),transparent)]" />
      </div>

      <motion.div
        variants={stagger(0.15, 0.1)}
        initial={false}
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-5 pb-6 pt-6 sm:px-8 lg:px-12"
      >
        <motion.header
          variants={fadeUp}
          className="flex items-center justify-between font-mono text-sm uppercase tracking-[0.12em] text-muted"
        >
          <span className="text-paper">TREN.PAVEL</span>
          <nav aria-label="Разделы сайта" className="flex items-center gap-3 sm:gap-6">
            <a href="#pricing" className="hidden transition-colors hover:text-paper sm:inline-flex">
              Онлайн-ведение
            </a>
            <a
              href="#bot"
              className="inline-flex min-h-11 items-center border border-accent/50 bg-accent/10 px-3 py-2 text-accent transition-colors hover:bg-accent hover:text-ink"
            >
              Бот · 660 ₽
            </a>
          </nav>
        </motion.header>

        <motion.div variants={fadeUp} className="mt-8">
          <SectionLabel index="01" title="Манифест" />
        </motion.div>

        <div className="flex flex-1 flex-col justify-center py-10">
          <h1 className="text-[length:clamp(1.5rem,8.2vw,6.5rem)] font-semibold uppercase leading-[0.95] tracking-tighter [overflow-wrap:anywhere]">
            {HEADLINE.map((line, index) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  variants={lineReveal}
                  className={`block ${index === HEADLINE.length - 1 ? "text-accent" : ""}`}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            <span className="text-accent">Научный подход</span> к тренировкам и питанию. Без
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
          className="flex items-center justify-between font-mono text-sm uppercase tracking-[0.12em] text-olive"
        >
          <span>Листай вниз</span>
          <span aria-hidden className="motion-safe:animate-float text-base text-accent">
            ↓
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
