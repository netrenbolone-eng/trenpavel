"use client";

import { motion } from "framer-motion";
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
        <div className="absolute -right-40 top-1/4 h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(197,246,90,0.08),transparent)]" />
        <div className="absolute -left-48 bottom-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(120,140,86,0.08),transparent)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-5 py-16 sm:px-8 lg:px-12 paged:py-0">
        <motion.div
          variants={stagger(0.05, 0.12)}
          initial={false}
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel index="07" title="Онлайн-ведение" />
          </motion.div>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-5">
              <motion.h2
                variants={fadeUp}
                className="text-[length:clamp(1.75rem,7vw,3.75rem)] font-semibold uppercase leading-[1]"
              >
                План, который <span className="text-accent">переживёт вторник.</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-md text-base leading-relaxed text-muted"
              >
                Тренируйся на ведении от 3 000 ₽ в месяц. На консультации разберём твою цель, график,
                опыт и все нюансы. Подберём формат под реальную жизнь, а не под идеальную неделю из
                календаря.
              </motion.p>
            </div>

            <motion.article
              variants={fadeUp}
              className="relative overflow-hidden border border-line bg-surface p-4 sm:p-8 lg:col-span-7"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(closest-side,rgba(197,246,90,0.1),transparent)]"
              />

              <div className="relative flex flex-col items-start gap-3 sm:flex-row sm:justify-between sm:gap-4">
                <p className="break-words font-mono text-sm uppercase tracking-[0.1em] text-muted">
                  {PLAN.name}
                </p>
                <span className="shrink-0 rounded-full border border-line px-3 py-1 font-mono text-sm uppercase tracking-[0.08em] text-muted">
                  Основной формат
                </span>
              </div>

              <p className="relative mt-6 flex items-baseline gap-3">
                <span className="font-mono text-sm uppercase tracking-[0.12em] text-accent">от</span>
                <span className="text-[length:clamp(2.75rem,15vw,6rem)] font-semibold leading-none tracking-tighter">
                  {PLAN.price}
                </span>
                <span className="text-3xl text-muted">{PLAN.currency}</span>
              </p>
              <p className="relative mt-2 text-sm text-muted">в месяц</p>

              <ul className="relative mt-6 divide-y divide-line border-t border-line">
                {PLAN.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 py-2.5 text-sm text-paper sm:text-base"
                  >
                    <span aria-hidden className="h-1.5 w-1.5 shrink-0 bg-accent" />
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

    </section>
  );
}
