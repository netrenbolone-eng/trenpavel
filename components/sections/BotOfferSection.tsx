import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import { LINKS } from "@/lib/site";

export default function BotOfferSection() {
  return (
    <section
      id="bot"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-accent text-ink paged:h-screen paged:snap-start paged:snap-always"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/gym-training.webp"
          alt="Тренажёрный зал с оборудованием для силовых тренировок."
          width={1600}
          height={1067}
          loading="lazy"
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover object-[58%_center] opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/95 to-accent/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-transparent to-accent/20" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-5 py-16 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center gap-3 font-mono text-sm uppercase tracking-[0.12em] text-ink/70 sm:gap-4">
          <span className="text-ink">06</span>
          <span>/</span>
          <span>Тренировки в Telegram</span>
          <span aria-hidden className="h-px basis-full flex-1 bg-ink/20 sm:basis-auto" />
          <span>06 — 08</span>
        </div>

        <div className="mt-12 max-w-3xl sm:mt-16">
          <p className="font-mono text-sm uppercase tracking-[0.12em] text-ink/70">
            Отдельно от онлайн-ведения
          </p>
          <h2 className="mt-5 text-[length:clamp(2.5rem,11vw,4.5rem)] font-semibold uppercase leading-[0.95]">
            Тренировки
            <br />
            в Telegram
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/80 sm:text-lg">
            В боте TREN.PAVEL можно подобрать тренировки под себя, разобраться с питанием и вести
            свои результаты. Чтобы не собирать план по кусочкам из роликов и постов.
          </p>

          <div className="mt-9 flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:gap-10">
            <p className="flex items-baseline gap-2">
              <span className="text-6xl font-semibold leading-none sm:text-7xl">660</span>
              <span className="text-3xl font-medium">₽</span>
            </p>
            <ActionLink href={LINKS.bot} external variant="dark">
              Открыть бота
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}