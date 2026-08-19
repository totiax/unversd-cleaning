import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: "#FAF6F0",
        mist: "#E7EFEC",
        teal: {
          DEFAULT: "#1A3689",
          dark: "#122868",
          deep: "#101B37",
        },
        aqua: {
          DEFAULT: "#23D6E7",
          soft: "#CDEFF2",
        },
        ink: "#22312F",
        amber: {
          DEFAULT: "#E8A33D",
          dark: "#C9822A",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        hand: ["var(--font-caveat)", "cursive"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "drip": {
          "0%": { transform: "translateY(-6px)", opacity: "0" },
          "40%": { opacity: "1" },
          "100%": { transform: "translateY(8px)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "drip": "drip 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
