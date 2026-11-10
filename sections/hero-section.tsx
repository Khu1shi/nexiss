import Link from "next/link";

import { DashboardPreview } from "@/components/dashboard-preview";
import { heroMetrics } from "@/lib/placeholders";

const heroStats = [
  {
    label: "AI Engines Monitored",
    value: "4+",
    footnote: "Live model checks",
    accentClass: "from-[#2563eb] via-[#3b82f6] to-[#38bdf8]",
    isTextValue: false
  },
  {
    label: "Queries Benchmarked",
    value: "100k+",
    footnote: "Multi-market focus",
    accentClass: "from-[#4f46e5] via-[#6366f1] to-[#8b5cf6]",
    isTextValue: false
  },
  {
    label: "Discovery Surface",
    value: "High Intent + B2B + Services",
    footnote: "Answer-layer visibility",
    accentClass: "from-[#ec4899] via-[#f43f8e] to-[#f472b6]",
    isTextValue: true
  }
] as const;

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-[radial-gradient(circle_at_88%_12%,rgba(219,234,254,0.5),transparent_42%),radial-gradient(circle_at_12%_18%,rgba(239,246,255,0.65),transparent_40%),linear-gradient(180deg,#ffffff_0%,#fafcff_68%,#f3f7ff_100%)]">
      <section className="relative mx-auto w-full max-w-[84rem] px-5 pb-16 pt-10 sm:px-8 md:pb-24 md:pt-14 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] xl:gap-12">
          <div className="flex min-w-0 flex-col items-start">
            <span className="inline-flex max-w-full items-center rounded-full border border-blue-200/90 bg-white/85 px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-electric shadow-[0_1px_2px_rgba(31,111,255,0.06)]">
              Pre-launch AI search intelligence
            </span>

            <h1 className="mt-6 text-[2.65rem] font-bold leading-[1.06] tracking-[-0.03em] text-ink sm:text-[3.75rem] lg:text-[4rem] xl:text-[4.25rem]">
              Monitor How AI
              <br />
              <span className="bg-[linear-gradient(90deg,#2563eb_0%,#3b82f6_26%,#7c3aed_62%,#ec4899_100%)] bg-clip-text text-transparent">
                Recommends
              </span>{" "}
              Your
              <br />
              Brand
            </h1>

            <p className="mt-6 max-w-[40rem] text-[16.5px] leading-[1.65] text-slate-600 sm:text-[18.5px]">
              NexisGEO is the intelligence platform for Generative Engine Optimization,
              helping modern enterprises and growth leaders track and improve how they
              appear across AI engines like{" "}
              <strong className="font-semibold text-ink">ChatGPT</strong>,{" "}
              <strong className="font-semibold text-ink">Gemini</strong>,{" "}
              <strong className="font-semibold text-ink">Claude</strong>, and{" "}
              <strong className="font-semibold text-ink">Perplexity</strong>.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/early-access"
                className="inline-flex h-[50px] items-center justify-center rounded-full bg-[#1d54e8] px-7 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(29,84,232,0.26)] transition hover:-translate-y-0.5 hover:bg-[#1748cc]"
              >
                Join Early Access
              </Link>
              <Link
                href="#demo"
                className="inline-flex h-[50px] items-center justify-center rounded-full border border-slate-200/90 bg-white px-7 text-[15px] font-semibold text-ink shadow-[0_4px_14px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50/70"
              >
                See Platform Preview
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-slate-200/90 bg-white px-4 py-2 font-mono text-[11.5px] font-medium text-slate-600 shadow-[0_2px_8px_rgba(15,23,42,0.04)] sm:text-[12px]">
                <span className="h-2 w-2 shrink-0 rounded-full bg-sky-400" />
                ChatGPT, Gemini, Claude, Perplexity
              </span>
              <span className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-slate-200/90 bg-white px-4 py-2 font-mono text-[11.5px] font-medium text-slate-600 shadow-[0_2px_8px_rgba(15,23,42,0.04)] sm:text-[12px]">
                <span className="h-2 w-2 shrink-0 rounded-full bg-amber-400" />
                Metro to global roadmap
              </span>
            </div>

            <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/85 bg-white px-4 py-4 shadow-[0_6px_20px_rgba(15,23,42,0.04)] xl:px-5"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${stat.accentClass}`}
                  />
                  <p className="font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-slate-400">
                    {stat.label}
                  </p>
                  <p
                    className={`mt-2.5 font-bold text-ink ${
                      stat.isTextValue
                        ? "text-[16px] leading-snug"
                        : "text-[30px] leading-none tracking-tight"
                    }`}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-2 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-slate-400">
                    {stat.footnote}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[13px] text-slate-500">
              <span>Used for concept validation across AI-native discovery workflows.</span>
              <span>Built for operators, agencies, and investor conversations.</span>
            </div>
          </div>

          <div className="min-w-0 w-full">
            <DashboardPreview
              title="AI analytics command center"
              subtitle="A serious infrastructure-style preview showing model monitoring, rankings, answer share, and network intelligence."
              metrics={heroMetrics}
              variant="network"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
