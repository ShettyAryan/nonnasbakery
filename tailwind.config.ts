import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: "#8B0000",
        raspberry: "#E8174A",
        cream: "#F5F0E8",
        "cream-light": "#FAF6EF",
        "dark-maroon": "#3D0010",
        "near-black": "#1A1A1A",
      },
      fontFamily: {
        serif: ["var(--font-abril)", "serif"],
        bebas: ["var(--font-bebas)", "cursive"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "float-1": {
          "0%, 100%": { transform: "translateY(0px) rotate(6deg)" },
          "50%": { transform: "translateY(-12px) rotate(6deg)" },
        },
        "float-2": {
          "0%, 100%": { transform: "translateY(0px) rotate(-12deg)" },
          "50%": { transform: "translateY(-18px) rotate(-12deg)" },
        },
        "float-3": {
          "0%, 100%": { transform: "translateY(0px) rotate(45deg)" },
          "50%": { transform: "translateY(-8px) rotate(45deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease forwards",
        "spin-slow": "spin-slow 30s linear infinite",
        marquee: "marquee 25s linear infinite",
        "float-1": "float-1 6s ease-in-out infinite",
        "float-2": "float-2 7s ease-in-out infinite",
        "float-3": "float-3 5s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
