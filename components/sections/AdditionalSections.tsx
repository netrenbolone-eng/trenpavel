import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";
import { LINKS } from "@/lib/site";

const FAQ_ITEMS = [
  {
    question: "Какие программы можно выбрать?",
    answer:
      "Есть отдельные программы тренировок и питания, а также формат «Тренировки + питание». Программы доступны на 15 дней и на месяц.",
  },
  {
    question: "Чем программа на 15 дней отличается от программы на месяц?",
    answer:
      "Программа на 15 дней составляется на этот период. В месячной программе тренировок через две недели разбираем результаты и корректируем план.",
  },
  {
    question: "Можно выбрать только тренировки или только питание?",
    answer:
      "Да. В прайс-листе отдельно представлены программы тренировок и программы питания, а также общий формат.",
  },
  {
    question: "Что входит в формат «Тренировки + питание»?",
    answer:
      "План тренировок и рекомендации по питанию. В месячном формате предусмотрена корректировка после первых двух недель.",
  },
  {
    question: "Можно записаться только на консультацию?",
    answer:
      "Да. Доступны консультация по тренировкам или питанию, а также разбор текущей программы.",
  },
  {
    question: "Как подобрать подходящий формат?",
    answer:
      "Напиши в Telegram и расскажи о своей цели — обсудим задачи, опыт и доступные форматы.",
  },
] as const;

const TARIFFS = [
  {
    name: "Тренировки",
    description:
      "План под твою цель, опыт, график и оборудование.",
    prices: [
      { period: "15 дней", price: "1 875 ₽" },
      { period: "Месяц", price: "3 125 ₽" },
    ],
  },
  {
    name: "Питание",
    description:
      "Ориентиры по калориям и белку, рекомендации по рациону и замены продуктов под привычки.",
    prices: [
      { period: "15 дней", price: "1 406 ₽" },
      { period: "Месяц", price: "2 188 ₽" },
    ],
  },
  {
    name: "Тренировки + питание",
    description:
      "План тренировок и рекомендации по питанию. В месячном формате — корректировка после первых двух недель.",
    prices: [
      { period: "15 дней", price: "2 812 ₽" },
      { period: "Месяц", price: "4 687 ₽" },
    ],
  },
] as const;

export function AboutSection() {
  return (
    <section
      id="about"
      className="flex min-h-[100svh] flex-col justify-center border-b border-line py-16 paged:snap-start paged:snap-always"
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12">
        <div
          aria-label="Место для фотографии тренера"
          className="flex aspect-[4/3] items-center justify-center border border-line bg-surface font-mono text-sm uppercase tracking-[0.12em] text-muted"
        >
          Место для фото
        </div>
        <div>
          <SectionLabel index="03" title="Обо мне" />
          <h2 className="mt-8 text-[length:clamp(2rem,7vw,4.5rem)] font-semibold uppercase leading-[0.95] tracking-tighter">
            Тренировки и питание <span className="text-accent">под твои цели.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Формат работы, план тренировок и рекомендации по питанию подбираются с учётом твоих
            задач, графика и привычек.
          </p>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="reviews"
      className="flex min-h-[100svh] flex-col justify-center border-b border-line py-16 paged:snap-start paged:snap-always"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionLabel index="04" title="Результаты / отзывы" />
        <h2 className="mt-8 max-w-4xl text-[length:clamp(1.75rem,6.5vw,4rem)] font-semibold uppercase leading-none tracking-tighter">
          Истории клиентов
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <article
              key={item}
              className="flex min-h-56 flex-col justify-between border border-line bg-surface p-6 sm:p-8"
            >
              <span className="font-mono text-sm text-olive">0{item}</span>
              <p className="text-base font-medium leading-relaxed text-muted">
                [ВСТАВИТЬ РЕАЛЬНЫЙ ОТЗЫВ]
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  return (
    <section
      id="faq"
      className="flex min-h-[100svh] flex-col justify-center border-b border-line py-16 paged:snap-start paged:snap-always"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionLabel index="05" title="Вопросы и ответы" />
        <h2 className="mt-8 text-[length:clamp(1.75rem,6.5vw,4rem)] font-semibold uppercase leading-none tracking-tighter">
          Частые вопросы
        </h2>
        <div className="mt-10 border-t border-line">
          {FAQ_ITEMS.map(({ question, answer }) => (
            <details key={question} className="group border-b border-line">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 text-base font-medium marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent [&::-webkit-details-marker]:hidden sm:text-lg">
                {question}
                <span
                  aria-hidden
                  className="shrink-0 text-xl text-accent transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-3xl pb-6 pr-10 text-base leading-relaxed text-muted">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TariffsSection() {
  return (
    <section
      id="tariffs"
      className="flex min-h-[100svh] flex-col justify-center border-b border-line py-16 paged:snap-start paged:snap-always"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionLabel index="08" title="Тарифы" />
        <h2 className="mt-8 max-w-4xl text-[length:clamp(1.75rem,6.5vw,4rem)] font-semibold uppercase leading-none tracking-tighter">
          Выбери свой формат
        </h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {TARIFFS.map((tariff) => (
            <article key={tariff.name} className="flex flex-col border border-line bg-surface p-6 sm:p-8">
              <h3 className="text-xl font-semibold uppercase leading-tight tracking-tight">
                {tariff.name}
              </h3>
              <p className="mt-4 min-h-20 text-base leading-relaxed text-muted">
                {tariff.description}
              </p>
              <ul className="mt-6 divide-y divide-line border-t border-line">
                {tariff.prices.map(({ period, price }) => (
                  <li
                    key={period}
                    className="flex items-center justify-between gap-4 py-4 text-base"
                  >
                    <span className="text-muted">{period}</span>
                    <span className="font-semibold text-accent">{price}</span>
                  </li>
                ))}
              </ul>
              <ActionLink
                href={LINKS.telegram}
                external
                variant="ghost"
                className="mt-6 w-full"
              >
                Обсудить формат
              </ActionLink>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted">
          Также доступны консультации по тренировкам или питанию — 937 ₽ и разбор текущей программы
          — 1 094 ₽. Персональные тренировки в зале: разовая — 1 562 ₽, блок на 15 дней (4
          тренировки) — 5 625 ₽, блок на месяц (8 тренировок) — 10 000 ₽.
        </p>
      </div>
    </section>
  );
}
