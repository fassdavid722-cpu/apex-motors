import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        carbon: "#0a0a0c",
        gunmetal: "#15151a",
        steel: "#1f2026",
        chrome: "#c8c9cc",
        ember: "#ff3b1f",
        acid: "#d4ff3a",
        midnight: "#050507",
      },
      fontFamily: {
        display: ["system-ui", "-apple-system", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      animation: {
        "scan-line": "scan 4s linear infinite",
        "headlight-pulse": "pulse 2.4s ease-in-out infinite",
        "grid-shift": "shift 20s linear infinite",
        "float-y": "float 6s ease-in-out infinite",
        "exhaust-flicker": "flicker 1.2s ease-in-out infinite",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        shift: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "100px 100px" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        flicker: {
          "0%, 100%": { opacity: "0.4", transform: "scaleX(1)" },
          "50%": { opacity: "1", transform: "scaleX(1.08)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
