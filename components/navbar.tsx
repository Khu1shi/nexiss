"use client";

import Image from "next/image";
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
        scrolled ? "border-electric/10 bg-white/75 backdrop-blur-xl" : "border-transparent"
      }`}
    >
      <div className="section-shell flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-cyan/20 bg-white/90 shadow-[0_12px_30px_rgba(31,111,255,0.12)]">
            <Image
              src="/brand/nexisgeo-logo.png"
              alt="NexisGEO logo"
              width={40}
              height={40}
              className="h-9 w-9 object-contain"
              priority
            />
          </div>
          <div>
            <div className="text-sm font-semibold tracking-[0.32em] text-ink">NEXISGEO</div>
            <div className="font-mono text-xs text-slate-500">Generative Engine Intelligence</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-slate-600 lg:flex">
          <div className="flex items-center gap-6 rounded-full border border-slate-200/80 bg-white/80 px-5 py-2 shadow-[0_10px_30px_rgba(71,98,145,0.1)] backdrop-blur-md">
            {topNavLinks.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-ink">
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <Link
          href="/early-access"
          className="rounded-full border border-electric/30 bg-electric px-5 py-2 text-sm font-semibold text-white shadow-electric transition hover:-translate-y-0.5 hover:bg-cyan hover:text-slate-950"
        >
          Join Early Access
        </Link>
      </div>
    </header>
  );
}
