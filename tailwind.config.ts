import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Snap-scroll включается только на широких экранах достаточной высоты.
        // Ниже этого порога сайт — обычная комфортная вертикальная лента.
        paged: { raw: "(min-width: 1024px) and (min-height: 720px)" },
      },
      colors: {
        ink: "#0a0a0a",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        float: "float 2.4s ease-in-out infinite",
        glow: "glow 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
