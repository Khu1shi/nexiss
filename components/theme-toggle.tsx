"use client";

import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("nexisgeo-theme");
    const nextTheme: ThemeMode = stored === "dark" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    setTheme(nextTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: ThemeMode = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem("nexisgeo-theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-200"
      aria-label="Toggle theme"
    >
      <span className="text-base">{mounted && theme === "dark" ? "🌙" : "☀"}</span>
      <span>{mounted && theme === "dark" ? "Dark" : "Light"}</span>
    </button>
  );
}
