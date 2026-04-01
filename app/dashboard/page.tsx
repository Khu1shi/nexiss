import Link from "next/link";

import { PortalShell } from "@/components/portal-shell";

const kpis = [
  { label: "GEO score", value: "78.4", delta: "+12.6%" },
  { label: "Tracked prompts", value: "10.2k", delta: "+340" },
  { label: "Citation share", value: "31%", delta: "+4.2%" },
  { label: "Active competitors", value: "18", delta: "Live" }
];

const engineRows = [
  ["ChatGPT", "34%"],
  ["Gemini", "26%"],
  ["Claude", "21%"],
  ["Perplexity", "19%"]
];

const opportunities = [
  ["Date-night cafe queries improving", "High impact", "Andheri West"],
  ["Coffee quality citation gap detected", "Action now", "Andheri East"],
  ["Competitor answer share rising", "Watchlist", "Lokhandwala"]
];

export default function DashboardPage() {
  return (
    <PortalShell
      role="user"
      title="Workspace overview"
      subtitle="A user-facing GEO operations dashboard for cafe teams, with room for a separate internal admin portal to manage onboarding, launch ops, and workspace control."
    >
      <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {kpis.map((item, index) => (
              <div key={item.label} className="surface-card rounded-[24px] p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">
                    {item.label}
                  </p>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                      index === 3
                        ? "bg-slate-100 text-slate-500"
                        : "bg-cyan/10 text-electric"
                    }`}
                  >
                    {item.delta}
                  </span>
                </div>
                <p className="mt-4 text-3xl font-semibold text-ink">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="surface-card rounded-[28px] p-5">
            <div className="flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Visibility trend</p>
                <p className="mt-2 text-lg font-semibold text-ink">GEO score and answer share movement</p>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <span>30 day trend</span>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 font-semibold text-slate-600">User portal</span>
              </div>
            </div>

            <div className="mt-5 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(242,247,255,0.92))] p-4">
                <svg viewBox="0 0 520 220" className="h-56 w-full">
                  <path
                    d="M0 156 C52 150, 92 146, 132 128 S218 108, 270 94 S378 76, 520 42"
                    fill="none"
                    stroke="rgba(79,209,255,0.95)"
                    strokeWidth="4"
                  />
                  <path
                    d="M0 170 C62 176, 108 170, 160 158 S264 144, 324 126 S420 108, 520 94"
                    fill="none"
                    stroke="rgba(31,111,255,0.68)"
                    strokeWidth="3"
                  />
                  <path
                    d="M0 182 C62 186, 118 188, 176 180 S296 168, 352 150 S450 132, 520 126"
                    fill="none"
                    stroke="rgba(138,92,255,0.52)"
                    strokeWidth="3"
                  />
                </svg>
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-white/85 p-4">
                <p className="preview-kicker">AI engine split</p>
                <div className="mt-4 space-y-4">
                  {engineRows.map(([label, value]) => (
                    <div key={label}>
                      <div className="flex items-center justify-between text-sm text-slate-600">
                        <span>{label}</span>
                        <span>{value}</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-slate-200">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-cyan to-electric"
                          style={{ width: value }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 xl:grid-cols-[0.88fr_1.12fr]">
            <div className="surface-card rounded-[28px] p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Market heatmap</p>
                  <p className="mt-2 text-lg font-semibold text-ink">Visibility concentration by region</p>
                </div>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-500">
                  Beta
                </span>
              </div>

              <div className="mt-5 grid grid-cols-4 gap-2">
                {Array.from({ length: 16 }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-12 rounded-xl ${
                      index % 5 === 0
                        ? "bg-cyan/70"
                        : index % 3 === 0
                          ? "bg-electric/50"
                          : index % 4 === 0
                            ? "bg-violet/45"
                            : "bg-slate-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="surface-card rounded-[28px] p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Opportunity queue</p>
                  <p className="mt-2 text-lg font-semibold text-ink">What teams should act on next</p>
                </div>
                <Link href="/geo-boost" className="text-sm font-semibold text-electric transition hover:text-ink">
                  Open GEO Boost
                </Link>
              </div>

              <div className="mt-5 space-y-3">
                {opportunities.map(([title, tag, market], index) => (
                  <div key={title} className="rounded-[22px] border border-slate-200 bg-white/85 px-4 py-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-base font-semibold text-ink">{title}</p>
                        <p className="mt-1 text-sm text-slate-500">{market}</p>
                      </div>
                      <span
                        className={`w-fit rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                          index === 0
                            ? "bg-emerald-50 text-emerald-600"
                            : index === 1
                              ? "bg-amber-50 text-amber-600"
                              : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="surface-card rounded-[28px] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Portal architecture</p>
                <p className="mt-2 text-lg font-semibold text-ink">User and admin split awareness</p>
              </div>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-500">
                Planning
              </span>
            </div>

            <div className="mt-5 space-y-3">
              <div className="rounded-[22px] border border-slate-200 bg-white/85 p-4">
                <p className="preview-kicker text-cyan">Cafe and team portal</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Dashboards, prompt monitoring, competitor cafe visibility, recommendations, and exports.
                </p>
              </div>
              <div className="rounded-[22px] border border-slate-200 bg-white/85 p-4">
                <p className="preview-kicker text-violet">Internal admin portal</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Workspace approvals, launch sequencing, access control, investor-facing review, and intake management.
                </p>
              </div>
            </div>
          </div>

          <div className="surface-card rounded-[28px] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Competitive rankings</p>
                <p className="mt-2 text-lg font-semibold text-ink">Cafe position in current answer sets</p>
              </div>
              <Link href="/competitor-analysis" className="text-sm font-semibold text-electric transition hover:text-ink">
                Open analysis
              </Link>
            </div>

            <div className="mt-5 space-y-3">
              {[
                ["Subko Andheri", "#1", "38% share"],
                ["Blue Tokai Andheri", "#2", "24% share"],
                ["Leaping Windows Cafe", "#3", "21% share"],
                ["Your Cafe", "#5", "9% share"]
              ].map(([brand, rank, share]) => (
                <div key={brand} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-[20px] border border-slate-200 bg-white/85 px-4 py-4">
                  <div className="min-w-0">
                    <p className="truncate text-base font-semibold text-ink">{brand}</p>
                    <p className="mt-1 text-sm text-slate-500">{share}</p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                    {rank}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card rounded-[28px] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Next surfaces</p>
                <p className="mt-2 text-lg font-semibold text-ink">Portal rollout sequence</p>
              </div>
              <span className="text-xs font-semibold text-electric">Roadmap aware</span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ["/global-monitoring", "Global Monitoring"],
                ["/geo-ranking-check", "Ranking Check"],
                ["/geo-boost", "GEO Boost"],
                ["/reports", "Reporting"]
              ].map(([href, label], index) => (
                <Link
                  key={label}
                  href={href}
                  className="rounded-[22px] border border-slate-200 bg-white/85 p-4 transition hover:border-cyan/30 hover:bg-white"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">{`0${index + 1}`}</p>
                  <p className="mt-2 text-base font-semibold text-ink">{label}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PortalShell>
  );
}
