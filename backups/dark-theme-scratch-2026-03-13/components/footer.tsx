import Link from "next/link";

import { footerLinks } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-shell flex flex-col gap-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-lg font-semibold text-white">NexisGEO</div>
            <p className="mt-2 max-w-md text-sm text-slate-400">
              Pre-launch intelligence platform for Generative Engine Optimization and AI search
              visibility.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-slate-400">
            {footerLinks.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-500">
            GEO category intelligence for the AI answer economy
          </p>
          <div className="flex items-center gap-3">
            {["X", "Li", "Gh"].map((item) => (
              <div
                key={item}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
