import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      colors: {
        ink: "#061633",
        electric: "#1f6fff",
        cyan: "#4fd1ff",
        ember: "#ff8a3d",
        violet: "#8a5cff",
        rose: "#ff4fa3"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(79, 209, 255, 0.14), 0 12px 40px rgba(6, 22, 51, 0.45)",
        electric: "0 0 60px rgba(31, 111, 255, 0.28)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(79,209,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(79,209,255,0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
