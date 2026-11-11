"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { topNavLinks } from "@/lib/navigation";

function BrandMark() {
  return (
    <div className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-electric/60 bg-ink shadow-[0_4px_14px_rgba(31,111,255,0.28)] sm:h-11 sm:w-11">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-[22px] w-[22px]"
      >
        <path
          d="M10.5 6.2C10.95 10.25 12.75 12.05 16.8 12.5C12.75 12.95 10.95 14.75 10.5 18.8C10.05 14.75 8.25 12.95 4.2 12.5C8.25 12.05 10.05 10.25 10.5 6.2Z"
          stroke="#5CE1FF"
          strokeWidth="1.65"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 4.2C17.75 5.85 18.4 6.5 20.05 6.75C18.4 7 17.75 7.65 17.5 9.3C17.25 7.65 16.6 7 14.95 6.75C16.6 6.5 17.25 5.85 17.5 4.2Z"
          stroke="#5CE1FF"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/85 backdrop-blur-md transition-all duration-200 ${
        scrolled
          ? "border-slate-200/90 bg-white/80 shadow-[0_4px_20px_rgba(15,23,42,0.05)]"
          : "border-slate-200/70"
      }`}
    >
      <div className="section-shell flex h-20 items-center justify-between gap-3 xl:grid xl:grid-cols-[1fr_auto_1fr] xl:gap-6">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 xl:justify-self-start"
          onClick={() => setMobileMenuOpen(false)}
        >
          <BrandMark />
          <div className="min-w-0">
            <div className="text-[17px] font-bold leading-none tracking-[-0.01em] text-ink">
              NEXISGEO
            </div>
            <div className="mt-1 hidden font-mono text-[10px] font-medium uppercase leading-none tracking-[0.14em] text-slate-400 sm:block">
              GENERATIVE ENGINE INTELLIGENCE
            </div>
          </div>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center justify-center lg:flex xl:justify-self-center"
        >
          <div className="flex min-h-[46px] items-center rounded-full border border-slate-200/90 bg-white shadow-[0_2px_10px_rgba(15,23,42,0.04)] lg:gap-4 lg:px-5 xl:gap-8 xl:px-8 2xl:gap-10 2xl:px-10">
            {topNavLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="whitespace-nowrap text-[13px] font-medium text-slate-600 transition-colors hover:text-ink xl:text-[13.5px]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="flex shrink-0 items-center gap-2.5 xl:justify-self-end">
          <Link
            href="/early-access"
            className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full bg-electric px-4 text-xs font-medium text-white shadow-[0_6px_18px_rgba(31,111,255,0.28)] transition hover:-translate-y-0.5 hover:bg-[#1558d6] sm:h-11 sm:min-w-[176px] sm:px-6 sm:text-sm"
          >
            Join Early Access
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-ink lg:hidden"
          >
            {mobileMenuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200/80 bg-white/95 px-6 pb-5 pt-3 backdrop-blur-md shadow-[0_12px_30px_rgba(15,23,42,0.08)] lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {topNavLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
