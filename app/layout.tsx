import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const sans = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TREN.PAVEL — фитнес, который подстраивается под тебя",
    template: "%s | TREN.PAVEL",
  },
  description:
    "Персональное онлайн-ведение по фитнесу: научный подход, индивидуальный план, личный контроль по видео и регулярная калибровка.",
  applicationName: "TREN.PAVEL",
  openGraph: {
    title: "TREN.PAVEL — фитнес, который подстраивается под тебя",
    description:
      "Персональное онлайн-ведение по фитнесу: индивидуальные тренировки и питание под твои цели.",
    siteName: "TREN.PAVEL",
    locale: "ru_RU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#10120f",
  colorScheme: "dark",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="ru" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
