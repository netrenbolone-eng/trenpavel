// Замените ссылки-заглушки на свои.
export const LINKS = {
  messenger: "https://t.me/your_username",
  guide: "https://t.me/your_channel",
  telegram: "https://t.me/your_channel",
  instagram: "https://instagram.com/your_account",
  youtube: "https://youtube.com/@your_channel",
} as const;

export interface Step {
  readonly id: string;
  readonly title: string;
  readonly text: string;
}

export const STEPS: readonly Step[] = [
  {
    id: "01",
    title: "Анализ",
    text: "Разбираем цели, образ жизни, опыт и ограничения. Фиксируем стартовую точку.",
  },
  {
    id: "02",
    title: "Индивидуальный план",
    text: "Тренировки и питание, собранные под твой график, уровень и доступный инвентарь.",
  },
  {
    id: "03",
    title: "Личный контроль по видео",
    text: "Присылаешь видео упражнений — получаешь разбор техники и точные правки.",
  },
  {
    id: "04",
    title: "Калибровка",
    text: "Регулярно сверяем результат и корректируем нагрузку и питание.",
  },
];

export const PLAN = {
  name: "Персональное онлайн-ведение",
  price: "10 000",
  currency: "₽",
  features: [
    "Анализ целей, образа жизни и стартовых данных",
    "Индивидуальный план тренировок и питания",
    "Разбор техники по видео",
    "Регулярная калибровка плана",
    "Связь с тренером в мессенджере",
  ],
} as const;
