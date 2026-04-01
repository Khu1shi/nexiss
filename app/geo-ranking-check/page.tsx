import Link from "next/link";

import { PortalShell } from "@/components/portal-shell";

const scoreCards = [
  { label: "Average rank", value: "#3.2", delta: "+0.8 this week", tone: "text-emerald-600 bg-emerald-50" },
  { label: "Tracked prompts", value: "1,284", delta: "+74 added", tone: "text-electric bg-cyan/10" },
  { label: "Top 3 coverage", value: "46%", delta: "+6.1%", tone: "text-violet-600 bg-violet/15" },
  { label: "Volatility index", value: "18.4", delta: "-2.3 stable", tone: "text-amber-600 bg-amber-50" }
];

const trendSeries = [
  ["Mon", 5.8, 4.6],
  ["Tue", 5.4, 4.4],
  ["Wed", 4.9, 4.2],
  ["Thu", 4.8, 4.0],
  ["Fri", 4.4, 3.9],
  ["Sat", 4.1, 3.8],
  ["Sun", 3.8, 3.6]
];

const engineRanks = [
  ["ChatGPT", 42, "#2.9"],
  ["Gemini", 26, "#3.5"],
  ["Claude", 19, "#3.9"],
  ["Perplexity", 13, "#4.2"]
];

const trackedPrompts = [
  ["Best cafes in Andheri for dates", "#3", "#4", "#4", "#5", "+2"],
  ["Best cafes in Andheri for work", "#5", "#6", "#5", "#7", "+1"],
  ["Best cafes in Andheri for friends meetup", "#2", "#3", "#2", "#4", "+3"],
  ["Best coffee in Andheri West", "#6", "#8", "#7", "#9", "-1"],
  ["Best quiet cafes in Andheri East", "#4", "#5", "#6", "#6", "+1"],
  ["Best rooftop cafes in Andheri", "#7", "#9", "#7", "#8", "+2"],
  ["Best budget cafes in Andheri", "#8", "#10", "#8", "#9", "+1"],
  ["Best late-night cafes in Andheri", "#3", "#4", "#3", "#4", "+2"]
];

const rankBuckets = [
  ["#1-3", 46],
  ["#4-6", 31],
  ["#7-10", 17],
  ["#11+", 6]
];

const adminQueue = [
  ["Prompt cluster anomaly", "Need review", "3 min ago"],
  ["Competitor jump in India cohort", "Escalate", "12 min ago"],
  ["Citation pattern changed in Claude", "Monitor", "21 min ago"]
];

const topMovers = [
  ["Best cafes in Andheri for friends meetup", "+3", "High intent"],
  ["Best cafes in Andheri for dates", "+2", "Core category"],
  ["Best late-night cafes in Andheri", "+2", "Weekend traffic"],
  ["Best cafes in Andheri for work", "+1", "Category wide"]
];

const clusterMix = [
  ["Date and ambience prompts", 38],
  ["Work-friendly prompts", 27],
  ["Coffee quality comparisons", 21],
  ["Late-night long-tail prompts", 14]
];

const hourlySignals = [58, 64, 62, 70, 76, 82, 88, 91, 86, 79, 74, 68];

export default function GeoRankingCheckPage() {
  return (
    <PortalShell
      role="user"
      title="GEO Ranking Checker"
      subtitle="Track cafe-intent prompt ranking, compare model performance, and identify movement signals before customer perception locks in."
    >
      <div className="grid items-start gap-4 xl:grid-cols-[1.12fr_0.88fr]">
        <div className="grid content-start gap-4 self-start">
          <div className="grid items-start gap-4 md:grid-cols-2 xl:grid-cols-4">
            {scoreCards.map((item) => (
              <article key={item.label} className="surface-card h-fit self-start rounded-[24px] p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">{item.label}</p>
                <p className="mt-3 text-3xl font-semibold text-ink">{item.value}</p>
                <span className={`mt-3 inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${item.tone}`}>
                  {item.delta}
                </span>
              </article>
            ))}
          </div>

          <article className="surface-card rounded-[28px] p-5">
            <div className="flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Prompt ranking timeline</p>
                <p className="mt-2 text-lg font-semibold text-ink">7-day movement of your cafe against competitor median</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Dates", "Work", "Coffee", "Meetup"].map((tag, index) => (
                  <button
                    key={tag}
                    type="button"
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      index === 0 ? "bg-electric text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(244,248,255,0.92))] p-4">
              <svg viewBox="0 0 720 260" className="h-52 w-full">
                <defs>
                  <linearGradient id="youLine" x1="0%" x2="100%">
                    <stop offset="0%" stopColor="rgba(31,111,255,0.95)" />
                    <stop offset="100%" stopColor="rgba(79,209,255,0.95)" />
                  </linearGradient>
                  <linearGradient id="peerLine" x1="0%" x2="100%">
                    <stop offset="0%" stopColor="rgba(236,72,153,0.75)" />
                    <stop offset="100%" stopColor="rgba(138,92,255,0.75)" />
                  </linearGradient>
                </defs>
                <g stroke="rgba(148,163,184,0.2)" strokeWidth="1">
                  <line x1="40" y1="30" x2="680" y2="30" />
                  <line x1="40" y1="85" x2="680" y2="85" />
                  <line x1="40" y1="140" x2="680" y2="140" />
                  <line x1="40" y1="195" x2="680" y2="195" />
                </g>
                <path
                  d="M40 188 C120 178, 180 170, 240 154 C300 138, 360 128, 420 116 C480 104, 560 92, 680 74"
                  fill="none"
                  stroke="url(#youLine)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M40 206 C130 200, 190 190, 250 178 C310 166, 380 158, 440 148 C510 136, 580 126, 680 118"
                  fill="none"
                  stroke="url(#peerLine)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
              <div className="mt-2 grid grid-cols-7 text-[11px] text-slate-400">
                {trendSeries.map(([day]) => (
                  <span key={day}>{day}</span>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {[
                ["Best rank day", "Sunday", "Avg #3.6"],
                ["Most improved model", "ChatGPT", "+1.2 rank"],
                ["Signal confidence", "93%", "Stable direction"]
              ].map(([label, value, sub]) => (
                <div key={label} className="rounded-[20px] border border-slate-200 bg-white/85 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">{label}</p>
                  <p className="mt-2 text-lg font-semibold text-ink">{value}</p>
                  <p className="mt-1 text-xs text-slate-500">{sub}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-[20px] border border-slate-200 bg-white/80 p-4">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">Hourly capture volume</p>
                <p className="text-xs font-semibold text-slate-500">Last 12 hours</p>
              </div>
              <div className="mt-3 flex h-16 items-end gap-1.5">
                {hourlySignals.map((value, index) => (
                  <div
                    key={`signal-${index}`}
                    className="w-full rounded-t-md bg-gradient-to-t from-electric to-cyan"
                    style={{ height: `${Math.max(16, value * 0.6)}%`, opacity: 0.42 + index * 0.04 }}
                  />
                ))}
              </div>
            </div>
          </article>

          <article className="surface-card rounded-[28px] p-5">
            <div className="flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Tracked prompt table</p>
                <p className="mt-2 text-lg font-semibold text-ink">Rank snapshots across AI engines</p>
              </div>
              <Link href="/reports" className="text-sm font-semibold text-electric transition hover:text-ink">
                Export to report
              </Link>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[52rem]">
                <thead>
                  <tr className="border-b border-slate-200 text-left">
                    {["Prompt", "Overall", "ChatGPT", "Gemini", "Claude", "7d delta"].map((head) => (
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
                  {trackedPrompts.map(([prompt, overall, chatgpt, gemini, claude, delta], index) => (
                    <tr key={prompt} className="border-b border-slate-100 last:border-b-0">
                      <td className="py-4 pr-4 text-sm font-medium text-ink">{prompt}</td>
                      <td className="py-4 pr-4 text-sm text-slate-600">{overall}</td>
                      <td className="py-4 pr-4 text-sm text-slate-600">{chatgpt}</td>
                      <td className="py-4 pr-4 text-sm text-slate-600">{gemini}</td>
                      <td className="py-4 pr-4 text-sm text-slate-600">{claude}</td>
                      <td className="py-4 pr-4">
                        <span
                          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                            delta.startsWith("+")
                              ? "bg-emerald-50 text-emerald-600"
                              : index % 2 === 0
                                ? "bg-amber-50 text-amber-600"
                                : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {delta}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-4">
              {[
                ["Prompts in top 3", "589"],
                ["Prompts climbed this week", "312"],
                ["Prompts dropped", "74"],
                ["Net movement", "+238"]
              ].map(([label, value]) => (
                <div key={label} className="rounded-[18px] border border-slate-200 bg-white/85 px-4 py-3">
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="mt-1 text-xl font-semibold text-ink">{value}</p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="grid content-start gap-4 self-start">
          <article className="surface-card rounded-[28px] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Engine rank share</p>
                <p className="mt-2 text-lg font-semibold text-ink">Where top-rank wins are concentrated</p>
              </div>
              <Link href="/competitor-analysis" className="text-sm font-semibold text-electric transition hover:text-ink">
                Compare competitors
              </Link>
            </div>
            <div className="mt-5 space-y-4">
              {engineRanks.map(([engine, share, rank], index) => (
                <div key={engine}>
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>{engine}</span>
                    <span className="font-semibold text-ink">
                      {share}% top-3 | {rank}
                    </span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-slate-200">
                    <div
                      className={`h-2 rounded-full ${
                        index === 0
                          ? "bg-gradient-to-r from-cyan to-electric"
                          : index === 1
                            ? "bg-gradient-to-r from-electric to-violet"
                            : index === 2
                              ? "bg-gradient-to-r from-violet to-pink-400"
                              : "bg-gradient-to-r from-slate-500 to-slate-400"
                      }`}
                      style={{ width: `${share}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="surface-card rounded-[28px] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Top moving prompts</p>
                <p className="mt-2 text-lg font-semibold text-ink">Queries gaining recommendation momentum</p>
              </div>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
                Updated now
              </span>
            </div>
            <div className="mt-4 space-y-3">
              {topMovers.map(([prompt, lift, intent]) => (
                <div key={prompt} className="rounded-[20px] border border-slate-200 bg-white/85 px-4 py-3">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold text-ink">{prompt}</p>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-600">
                      {lift}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">{intent}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="surface-card rounded-[28px] p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Rank bucket distribution</p>
            <p className="mt-2 text-lg font-semibold text-ink">Prompt coverage by recommendation tier</p>
            <div className="mt-5 space-y-3">
              {rankBuckets.map(([bucket, value], index) => (
                <div key={bucket} className="rounded-[20px] border border-slate-200 bg-white/85 px-4 py-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-slate-600">{bucket}</span>
                    <span className="font-semibold text-ink">{value}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-slate-200">
                    <div
                      className={`h-2 rounded-full ${
                        index === 0
                          ? "bg-gradient-to-r from-emerald-400 to-cyan"
                          : index === 1
                            ? "bg-gradient-to-r from-cyan to-electric"
                            : index === 2
                              ? "bg-gradient-to-r from-violet to-pink-400"
                              : "bg-gradient-to-r from-amber-400 to-orange-400"
                      }`}
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-[20px] border border-slate-200 bg-white/85 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">Cluster mix</p>
              <div className="mt-3 space-y-3">
                {clusterMix.map(([cluster, value], index) => (
                  <div key={cluster}>
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <span>{cluster}</span>
                      <span className="font-semibold text-ink">{value}%</span>
                    </div>
                    <div className="mt-1.5 h-2 rounded-full bg-slate-200">
                      <div
                        className={`h-2 rounded-full ${
                          index === 0
                            ? "bg-gradient-to-r from-cyan to-electric"
                            : index === 1
                              ? "bg-gradient-to-r from-electric to-violet"
                              : index === 2
                                ? "bg-gradient-to-r from-violet to-pink-400"
                                : "bg-gradient-to-r from-pink-400 to-orange-400"
                        }`}
                        style={{ width: `${value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="surface-card rounded-[28px] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Movement matrix</p>
                <p className="mt-2 text-lg font-semibold text-ink">Prompt cluster velocity heatmap</p>
              </div>
              <span className="rounded-full bg-violet/15 px-2.5 py-1 text-[11px] font-semibold text-violet-700">
                Live
              </span>
            </div>
            <div className="mt-4 grid grid-cols-6 gap-2">
              {Array.from({ length: 36 }).map((_, index) => (
                <div
                  key={index}
                  className={`h-10 rounded-lg ${
                    index % 8 === 0
                      ? "bg-cyan/70"
                      : index % 7 === 0
                        ? "bg-electric/60"
                        : index % 6 === 0
                          ? "bg-violet/55"
                          : index % 5 === 0
                            ? "bg-pink-400/45"
                            : "bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </article>

          <article className="surface-card rounded-[28px] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Admin handoff queue</p>
                <p className="mt-2 text-lg font-semibold text-ink">Items routed to internal operations</p>
              </div>
              <Link href="/onboarding" className="text-sm font-semibold text-electric transition hover:text-ink">
                Open admin queue
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {adminQueue.map(([title, status, time], index) => (
                <div key={title} className="rounded-[20px] border border-slate-200 bg-white/85 px-4 py-3">
                  <p className="text-sm font-semibold text-ink">{title}</p>
                  <div className="mt-2 flex items-center justify-between text-xs">
                    <span
                      className={`rounded-full px-2.5 py-1 font-semibold ${
                        index === 0
                          ? "bg-amber-50 text-amber-600"
                          : index === 1
                            ? "bg-rose-50 text-rose-600"
                            : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {status}
                    </span>
                    <span className="text-slate-500">{time}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </PortalShell>
  );
}
