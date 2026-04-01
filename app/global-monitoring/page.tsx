import Link from "next/link";

import { PortalShell } from "@/components/portal-shell";

const regionCards = [
  { region: "Andheri West", score: "82.1", movement: "+3.4", status: "Strong" },
  { region: "Andheri East", score: "76.8", movement: "+1.9", status: "Stable" },
  { region: "Lokhandwala", score: "73.2", movement: "-0.8", status: "Watch" },
  { region: "Versova", score: "69.4", movement: "+2.1", status: "Growing" }
];

const modelSplit = [
  ["ChatGPT", "37%"],
  ["Gemini", "24%"],
  ["Claude", "22%"],
  ["Perplexity", "17%"]
];

const dailyTrend = [
  ["Mon", 68, 62],
  ["Tue", 70, 64],
  ["Wed", 72, 66],
  ["Thu", 71, 67],
  ["Fri", 74, 68],
  ["Sat", 77, 71],
  ["Sun", 79, 73]
];

const livePrompts = [
  ["Best cafes in Andheri for dates", "Andheri West", "Your Cafe #3", "Rising"],
  ["Best cafes in Andheri for work", "Andheri East", "Your Cafe #5", "Watch"],
  ["Best coffee in Andheri West", "Lokhandwala", "Your Cafe #6", "Action"],
  ["Best cafes in Andheri for friends meetup", "Versova", "Your Cafe #2", "Strong"]
];

const alerts = [
  ["Gemini dropped date-cafe citation share in Andheri East", "High", "4 min ago"],
  ["Perplexity picked competitor in work-friendly cafe cluster", "Medium", "11 min ago"],
  ["New answer template detected in coffee-quality prompts", "Low", "18 min ago"]
];

const sourceMix = [
  ["Google Maps profile", 41],
  ["Food and cafe directories", 29],
  ["Community reviews", 18],
  ["Lifestyle media", 12]
];

const adminQueue = [
  ["Cafe data quality check", "Andheri Pilot 04", "Pending"],
  ["Onboarding approval", "Cafe Cohort B", "Review"],
  ["Weekly cafe snapshot export", "Andheri visibility pack", "Ready"]
];

export default function GlobalMonitoringPage() {
  return (
    <PortalShell
      role="user"
      title="Global GEO Monitoring"
      subtitle="Monitor AI visibility for Andheri cafes across regions, intents, and models in one operating surface while retaining an explicit lane for internal admin review and launch control."
    >
      <div className="grid gap-4 xl:grid-cols-[1.08fr_0.92fr]">
        <div className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {regionCards.map((item, index) => (
              <div key={item.region} className="surface-card rounded-[24px] p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">
                    {item.region}
                  </p>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                      index === 0
                        ? "bg-emerald-50 text-emerald-600"
                        : index === 2
                          ? "bg-amber-50 text-amber-600"
                          : "bg-cyan/10 text-electric"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <p className="mt-4 text-3xl font-semibold text-ink">{item.score}</p>
                <p className="mt-2 text-sm text-slate-500">{item.movement} last 7d</p>
              </div>
            ))}
          </div>

          <div className="surface-card rounded-[28px] p-5">
            <div className="flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Region visibility map</p>
                <p className="mt-2 text-lg font-semibold text-ink">Heat concentration by geo and model coverage</p>
              </div>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-500">
                User portal
              </span>
            </div>

            <div className="mt-5 grid gap-4 xl:grid-cols-[1.12fr_0.88fr]">
              <div className="rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(242,247,255,0.92))] p-4">
                <div className="grid grid-cols-5 gap-2">
                  {Array.from({ length: 25 }).map((_, index) => (
                    <div
                      key={index}
                      className={`h-11 rounded-lg ${
                        index % 7 === 0
                          ? "bg-cyan/75"
                          : index % 5 === 0
                            ? "bg-electric/55"
                            : index % 3 === 0
                              ? "bg-violet/45"
                              : "bg-slate-200"
                      }`}
                    />
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
                    High visibility
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-electric" />
                    Active ranking
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-violet" />
                    Expansion signal
                  </span>
                </div>
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-white/85 p-4">
                <p className="preview-kicker">Model distribution</p>
                <div className="mt-4 space-y-4">
                  {modelSplit.map(([label, value]) => (
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

            <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_1fr]">
              <div className="rounded-[24px] border border-slate-200 bg-white/85 p-4">
                <div className="flex items-center justify-between">
                  <p className="preview-kicker">7 day rank trend</p>
                  <span className="text-xs font-semibold text-slate-500">User vs competitor avg</span>
                </div>
                <div className="mt-4 h-36 overflow-hidden rounded-2xl bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(244,248,255,0.9))] px-2">
                  <svg viewBox="0 0 360 120" className="h-full w-full">
                    <path
                      d="M0 80 C32 74, 58 66, 86 62 S144 56, 174 58 S230 46, 262 38 S320 30, 360 22"
                      fill="none"
                      stroke="rgba(79,209,255,0.95)"
                      strokeWidth="3"
                    />
                    <path
                      d="M0 92 C34 90, 60 86, 92 82 S152 78, 184 72 S244 66, 276 60 S328 54, 360 50"
                      fill="none"
                      stroke="rgba(31,111,255,0.68)"
                      strokeWidth="3"
                    />
                  </svg>
                </div>
                <div className="mt-3 grid grid-cols-7 text-[11px] text-slate-400">
                  {dailyTrend.map(([day]) => (
                    <span key={day}>{day}</span>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-white/85 p-4">
                <div className="flex items-center justify-between">
                  <p className="preview-kicker">Citation source mix</p>
                  <span className="text-xs font-semibold text-slate-500">Weighted by visibility</span>
                </div>
                <div className="mt-4 space-y-3">
                  {sourceMix.map(([label, value], index) => (
                    <div key={label}>
                      <div className="flex items-center justify-between text-sm text-slate-600">
                        <span>{label}</span>
                        <span>{value}%</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-slate-200">
                        <div
                          className={`h-2 rounded-full ${
                            index === 0
                              ? "bg-gradient-to-r from-cyan to-electric"
                              : index === 1
                                ? "bg-gradient-to-r from-electric to-violet"
                                : index === 2
                                  ? "bg-gradient-to-r from-violet to-cyan"
                                  : "bg-gradient-to-r from-slate-400 to-slate-500"
                          }`}
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="surface-card rounded-[28px] p-5">
            <div className="flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Live prompt stream</p>
                <p className="mt-2 text-lg font-semibold text-ink">How cafes are currently placed in AI answers</p>
              </div>
              <Link href="/geo-ranking-check" className="text-sm font-semibold text-electric transition hover:text-ink">
                Open ranking checker
              </Link>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[42rem]">
                <thead>
                  <tr className="border-b border-slate-200 text-left">
                    {["Prompt", "Region", "Current rank", "Signal"].map((head) => (
                      <th
                        key={head}
                        className="pb-3 pr-4 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400"
                      >
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {livePrompts.map(([prompt, region, rank, signal], index) => (
                    <tr key={prompt} className="border-b border-slate-100 last:border-b-0">
                      <td className="py-4 pr-4 text-sm font-medium text-ink">{prompt}</td>
                      <td className="py-4 pr-4 text-sm text-slate-600">{region}</td>
                      <td className="py-4 pr-4 text-sm text-slate-600">{rank}</td>
                      <td className="py-4 pr-4">
                        <span
                          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                            index === 0
                              ? "bg-emerald-50 text-emerald-600"
                              : index === 1
                                ? "bg-slate-100 text-slate-600"
                                : index === 2
                                  ? "bg-amber-50 text-amber-600"
                                  : "bg-cyan/10 text-electric"
                          }`}
                        >
                          {signal}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {[
                ["Total prompts monitored", "10,240"],
                ["Answer snapshots today", "1,482"],
                ["Citation events tracked", "3,906"]
              ].map(([label, value]) => (
                <div key={label} className="rounded-[20px] border border-slate-200 bg-white/85 px-4 py-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">{label}</p>
                  <p className="mt-2 text-xl font-semibold text-ink">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="surface-card rounded-[28px] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Alert queue</p>
                <p className="mt-2 text-lg font-semibold text-ink">Events that need operator action</p>
              </div>
              <Link href="/geo-boost" className="text-sm font-semibold text-electric transition hover:text-ink">
                Open GEO Boost
              </Link>
            </div>

            <div className="mt-5 space-y-3">
              {alerts.map(([title, priority, time], index) => (
                <div key={title} className="rounded-[22px] border border-slate-200 bg-white/85 px-4 py-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-ink">{title}</p>
                      <p className="mt-1 text-sm text-slate-500">{time}</p>
                    </div>
                    <span
                      className={`w-fit rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                        index === 0
                          ? "bg-rose-50 text-rose-600"
                          : index === 1
                            ? "bg-amber-50 text-amber-600"
                            : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-[22px] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(245,249,255,0.9))] p-4">
              <div className="flex items-center justify-between">
                <p className="preview-kicker">Alert velocity</p>
                <span className="text-xs font-semibold text-slate-500">Last 24h</span>
              </div>
              <div className="mt-4 grid grid-cols-12 gap-1.5">
                {[3, 4, 3, 5, 6, 4, 7, 5, 6, 8, 7, 5].map((bar, idx) => (
                  <div
                    key={idx}
                    className="rounded-md bg-gradient-to-t from-electric to-cyan/80"
                    style={{ height: `${bar * 8}px` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="surface-card rounded-[28px] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-violet">Admin bridge</p>
                <p className="mt-2 text-lg font-semibold text-ink">Internal checks for portal admins</p>
              </div>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-500">
                Internal
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {adminQueue.map(([title, owner, status], index) => (
                <div key={title} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-[20px] border border-slate-200 bg-white/85 px-4 py-4">
                  <div>
                    <p className="text-base font-semibold text-ink">{title}</p>
                    <p className="mt-1 text-sm text-slate-500">{owner}</p>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                      index === 0
                        ? "bg-amber-50 text-amber-600"
                        : index === 1
                          ? "bg-cyan/10 text-electric"
                          : "bg-emerald-50 text-emerald-600"
                    }`}
                  >
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card rounded-[28px] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Next tools</p>
                <p className="mt-2 text-lg font-semibold text-ink">Move from monitoring to action</p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ["/geo-ranking-check", "GEO Ranking Check"],
                ["/geo-boost", "GEO Boost"],
                ["/competitor-analysis", "Competitor Analysis"],
                ["/reports", "Reports"]
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
