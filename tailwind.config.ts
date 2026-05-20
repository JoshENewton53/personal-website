import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#f5c842",
        brass: "#c8a84b",
        parchment: "#e8d5a0",
        midnight: "#1a1208",
        oak: "#3d2a0a",
        "on-air": "#c0392b",
        phosphor: "#1d9e75",
        signal: "#1e5c8a",
        "dark-wood": "#2a1a08",
        "light-oak": "#8b5a20",
      },
      fontFamily: {
        elite: ['"Special Elite"', "monospace"],
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
