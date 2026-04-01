"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { topNavLinks } from "@/lib/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all ${
        scrolled ? "border-cyan/10 bg-slate-950/80 backdrop-blur-xl" : "border-transparent"
      }`}
    >
      <div className="section-shell flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan/30 bg-cyan/10 text-sm font-semibold text-cyan">
            NG
          </div>
          <div>
            <div className="text-sm font-semibold tracking-[0.32em] text-white">NEXISGEO</div>
            <div className="font-mono text-xs text-slate-500">Generative Engine Intelligence</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
          <div className="flex items-center gap-6 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md">
            {topNavLinks.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <Link
          href="#signup"
          className="rounded-full border border-electric/30 bg-electric px-5 py-2 text-sm font-semibold text-white shadow-electric transition hover:-translate-y-0.5 hover:bg-cyan hover:text-slate-950"
        >
          Join Early Access
        </Link>
      </div>
    </header>
  );
}
