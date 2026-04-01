import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="section-shell flex flex-col gap-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center overflow-hidden rounded-2xl border border-cyan/15 bg-white/90 shadow-[0_12px_30px_rgba(31,111,255,0.1)]">
              <Image
                src="/brand/nexisgeo-logo.png"
                alt="NexisGEO logo"
                width={44}
                height={44}
                className="h-10 w-10 object-contain"
              />
            </div>
            <div>
            <div className="text-lg font-semibold text-ink">NexisGEO</div>
            <p className="mt-2 max-w-md text-sm text-slate-600">
              Pre-launch intelligence platform for Generative Engine Optimization and AI search
              visibility.
            </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-slate-500">
            {footerLinks.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-ink">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-slate-200 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-500">
            GEO category intelligence for the AI answer economy
          </p>
          <div className="flex items-center gap-3">
            {["X", "Li", "Gh"].map((item) => (
              <div
                key={item}
                className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/85 text-xs font-semibold text-slate-600 shadow-[0_10px_24px_rgba(71,98,145,0.08)]"
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
