import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        carbon: "#0b0b0d",
        smoke: "#131318",
        steel: "#1c1c22",
        ash: "#8a8a93",
        bone: "#e8e6df",
        ember: "#ff5a1f",
        emberDim: "#c2410c",
        signal: "#ffd24a",
      },
      fontFamily: {
        display: ['"Bebas Neue"', "Impact", "system-ui", "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        flicker: {
          "0%,19%,21%,23%,25%,54%,56%,100%": { opacity: "1" },
          "20%,24%,55%": { opacity: "0.6" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        beam: {
          "0%": { transform: "translateX(-200%) skewX(-12deg)" },
          "100%": { transform: "translateX(300%) skewX(-12deg)" },
        },
        headlight: {
          "0%": { boxShadow: "0 0 0px 0px rgba(255,210,74,0)" },
          "60%": { boxShadow: "0 0 80px 30px rgba(255,210,74,0.55)" },
          "100%": { boxShadow: "0 0 40px 18px rgba(255,210,74,0.45)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        scan: "scan 6s linear infinite",
        flicker: "flicker 3s linear infinite",
        marquee: "marquee 40s linear infinite",
        beam: "beam 2.4s ease-in-out infinite",
        headlight: "headlight 1.6s ease-out forwards",
        float: "float 4s ease-in-out infinite",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(5,5,5,0) 0%, rgba(5,5,5,0.85) 80%, #050505 100%)",
        "hero-radial":
          "radial-gradient(ellipse at center, rgba(255,90,31,0.18) 0%, rgba(5,5,5,0) 60%)",
      },
    },
  },
  plugins: [],
};
export default config;
