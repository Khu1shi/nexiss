import Link from "next/link";

import { PortalShell } from "@/components/portal-shell";

const competitiveKpis = [
  { label: "Tracked competitors", value: "28", delta: "6 high-priority", tone: "text-electric bg-cyan/10" },
  { label: "Avg rank gap", value: "1.9", delta: "-0.4 narrowed", tone: "text-emerald-600 bg-emerald-50" },
  { label: "Citation overlap", value: "37%", delta: "+5.2 this week", tone: "text-violet-700 bg-violet/15" },
  { label: "Contested prompts", value: "412", delta: "78 active today", tone: "text-amber-700 bg-amber-50" }
];

const competitorLeaderboard = [
  ["Subko Andheri", "#1.8", "42%", "+2.1"],
  ["Blue Tokai Andheri", "#2.3", "31%", "+1.6"],
  ["Leaping Windows Cafe", "#2.9", "24%", "+1.2"],
  ["Prithvi Cafe Juhu", "#3.6", "18%", "+0.9"],
  ["Your Cafe", "#4.1", "16%", "+1.4"]
];

const engineWins = [
  ["ChatGPT", 44, 26, 18, 12],
  ["Gemini", 39, 28, 21, 12],
  ["Claude", 33, 25, 24, 18],
  ["Perplexity", 35, 22, 26, 17]
];

const citationSources = [
  ["Competitor blogs", 32],
  ["Review sites", 24],
  ["Docs and knowledge bases", 19],
  ["Industry media", 15],
  ["Community threads", 10]
];

const contestedPrompts = [
  ["Best cafes in Andheri for dates", "Subko Andheri", "Blue Tokai Andheri", "Medium"],
  ["Best cafes in Andheri for work", "Leaping Windows Cafe", "Subko Andheri", "High"],
  ["Best coffee in Andheri West", "Blue Tokai Andheri", "Your Cafe", "Medium"],
  ["Top aesthetic cafes near Andheri", "Subko Andheri", "Prithvi Cafe Juhu", "High"],
  ["Best budget cafes in Andheri", "Leaping Windows Cafe", "Blue Tokai Andheri", "Watch"],
  ["Late-night cafes in Andheri", "Blue Tokai Andheri", "Subko Andheri", "Watch"]
];

const responseQueue = [
  ["Create comparison page for date-night cafe prompts", "Content", "Today", "Assigned"],
  ["Add proof blocks to work-friendly cafe pages", "Operations", "Tomorrow", "In review"],
  ["Refresh structured data on competitor-contested pages", "Technical", "2 days", "Planned"],
  ["Expand citation assets for coffee-quality prompt set", "Content", "3 days", "Assigned"]
];

const sentimentTrail: Array<[string, number]> = [
  ["Mon", 58],
  ["Tue", 62],
  ["Wed", 64],
  ["Thu", 69],
  ["Fri", 72],
  ["Sat", 70],
  ["Sun", 75]
];

const adminSignals = [
  ["Competitor surge in Mumbai cohort", "Escalate", "7 min ago"],
  ["Model behavior shift in Gemini answer style", "Review", "15 min ago"],
  ["Investor request: competitor snapshot export", "Ready", "24 min ago"]
];

export default function CompetitorAnalysisPage() {
  return (
    <PortalShell
      role="user"
      title="Competitor Intelligence"
      subtitle="Understand which cafes AI systems prefer, where they outrank you, and what optimization responses can close recommendation gaps."
    >
      <div className="grid items-start gap-4 xl:grid-cols-[1.12fr_0.88fr]">
        <div className="grid content-start gap-4 self-start">
          <div className="grid items-start gap-4 md:grid-cols-2 xl:grid-cols-4">
            {competitiveKpis.map((item) => (
              <article key={item.label} className="surface-card self-start rounded-[24px] p-5 min-h-[15rem] flex flex-col">
                <p className="min-h-[4.2rem] font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">{item.label}</p>
                <p className="mt-1 min-h-[3.5rem] text-3xl font-semibold text-ink">{item.value}</p>
                <span className={`mt-auto inline-flex min-h-[3.2rem] items-center rounded-full px-5 py-2 text-[11px] font-semibold ${item.tone}`}>
                  {item.delta}
                </span>
              </article>
            ))}
          </div>

          <article className="surface-card rounded-[28px] p-5">
            <div className="flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Competitor leaderboard</p>
                <p className="mt-2 text-lg font-semibold text-ink">Top cafes recommended across tracked prompt clusters</p>
              </div>
              <Link href="/geo-ranking-check" className="text-sm font-semibold text-electric transition hover:text-ink">
                Open ranking checker
              </Link>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[48rem]">
                <thead>
                  <tr className="border-b border-slate-200 text-left">
                    {["Cafe", "Avg rank", "Answer share", "7d movement"].map((head) => (
                      <th key={head} className="pb-3 pr-4 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {competitorLeaderboard.map(([brand, rank, share, movement], index) => (
                    <tr key={brand} className="border-b border-slate-100 last:border-b-0">
                      <td className="py-4 pr-4 text-sm font-semibold text-ink">{brand}</td>
                      <td className="py-4 pr-4 text-sm text-slate-600">{rank}</td>
                      <td className="py-4 pr-4 text-sm text-slate-600">{share}</td>
                      <td className="py-4 pr-4">
                        <span
                          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                            index === 0
                              ? "bg-rose-50 text-rose-600"
                              : brand === "Your Cafe"
                                ? "bg-emerald-50 text-emerald-600"
                                : "bg-cyan/10 text-electric"
                          }`}
                        >
                          {movement}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-4">
              {[
                ["Top-3 prompt overlap", "224"],
                ["Net gap closed", "+17"],
                ["Citation wins this week", "39"],
                ["Prompt clusters monitored", "52"]
              ].map(([label, value]) => (
                <div key={label} className="rounded-[18px] border border-slate-200 bg-white/85 px-4 py-3">
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="mt-1 text-xl font-semibold text-ink">{value}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="surface-card rounded-[28px] p-5">
            <div className="flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Contested prompt map</p>
                <p className="mt-2 text-lg font-semibold text-ink">Prompts where competitor dominance can be challenged</p>
              </div>
              <Link href="/geo-boost" className="text-sm font-semibold text-electric transition hover:text-ink">
                Open GEO boost
              </Link>
            </div>

            <div className="mt-4 space-y-3">
              {contestedPrompts.map(([prompt, leader, challenger, urgency], index) => (
                <div key={prompt} className="rounded-[22px] border border-slate-200 bg-white/85 px-4 py-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-ink">{prompt}</p>
                      <p className="mt-1 text-sm text-slate-500">
                        Leader: {leader} | Challenger: {challenger}
                      </p>
                    </div>
                    <span
                      className={`w-fit rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                        urgency === "High"
                          ? "bg-rose-50 text-rose-600"
                          : urgency === "Medium"
                            ? "bg-amber-50 text-amber-600"
                            : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {urgency}
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div
                      className={`h-2 rounded-full ${
                        index % 3 === 0
                          ? "bg-gradient-to-r from-cyan to-electric"
                          : index % 3 === 1
                            ? "bg-gradient-to-r from-electric to-violet"
                            : "bg-gradient-to-r from-violet to-pink-400"
                      }`}
                      style={{ width: `${74 - index * 8}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="grid content-start gap-4 self-start">
          <article className="surface-card rounded-[28px] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Engine win distribution</p>
                <p className="mt-2 text-lg font-semibold text-ink">Share of wins by engine and top competitors</p>
              </div>
              <span className="rounded-full bg-cyan/10 px-2.5 py-1 text-[11px] font-semibold text-electric">Live</span>
            </div>

            <div className="mt-4 space-y-4">
              {engineWins.map(([engine, a, b, c, d]) => (
                <div key={engine}>
                  <div className="mb-1 flex items-center justify-between text-sm text-slate-600">
                    <span>{engine}</span>
                    <span className="font-semibold text-ink">{a}% lead share</span>
                  </div>
                  <div className="flex h-3 overflow-hidden rounded-full bg-slate-200">
                    <div className="bg-cyan" style={{ width: `${a}%` }} />
                    <div className="bg-electric" style={{ width: `${b}%` }} />
                    <div className="bg-violet" style={{ width: `${c}%` }} />
                    <div className="bg-pink-400" style={{ width: `${d}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="surface-card rounded-[28px] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Citation source mix</p>
                <p className="mt-2 text-lg font-semibold text-ink">Where competitors are sourcing answer authority</p>
              </div>
              <span className="rounded-full bg-violet/15 px-2.5 py-1 text-[11px] font-semibold text-violet-700">
                Weekly
              </span>
            </div>
            <div className="mt-4 space-y-3">
              {citationSources.map(([source, value], index) => (
                <div key={source}>
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>{source}</span>
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
                              : index === 3
                                ? "bg-gradient-to-r from-pink-400 to-orange-400"
                                : "bg-gradient-to-r from-slate-500 to-slate-400"
                      }`}
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="surface-card rounded-[28px] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Response queue</p>
                <p className="mt-2 text-lg font-semibold text-ink">Action plan to reclaim recommendation share</p>
              </div>
              <Link href="/reports" className="text-sm font-semibold text-electric transition hover:text-ink">
                Export queue
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {responseQueue.map(([task, lane, eta, status]) => (
                <div key={task} className="rounded-[20px] border border-slate-200 bg-white/85 px-4 py-3">
                  <p className="text-sm font-semibold text-ink">{task}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 font-semibold text-slate-600">{lane}</span>
                    <span className="rounded-full bg-cyan/10 px-2.5 py-1 font-semibold text-electric">{eta}</span>
                    <span
                      className={`rounded-full px-2.5 py-1 font-semibold ${
                        status === "Assigned"
                          ? "bg-emerald-50 text-emerald-600"
                          : status === "In review"
                            ? "bg-violet/15 text-violet-700"
                            : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="surface-card rounded-[28px] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Cafe momentum</p>
                <p className="mt-2 text-lg font-semibold text-ink">Sentiment-aligned visibility trajectory</p>
              </div>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
                Positive
              </span>
            </div>
            <div className="mt-4 rounded-[20px] border border-slate-200 bg-white/85 p-4">
              <div className="flex h-28 items-end gap-2">
                {sentimentTrail.map(([day, value], index) => (
                  <div key={day} className="flex w-full flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-md bg-gradient-to-t from-electric to-cyan"
                      style={{ height: `${value}px`, opacity: 0.45 + index * 0.06 }}
                    />
                    <p className="text-[11px] text-slate-400">{day}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="surface-card rounded-[28px] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Admin signal handoff</p>
                <p className="mt-2 text-lg font-semibold text-ink">Internal portal actions tied to competitor movement</p>
              </div>
              <Link href="/onboarding" className="text-sm font-semibold text-electric transition hover:text-ink">
                Open admin portal
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {adminSignals.map(([title, status, time], index) => (
                <div key={title} className="rounded-[20px] border border-slate-200 bg-white/85 px-4 py-3">
                  <p className="text-sm font-semibold text-ink">{title}</p>
                  <div className="mt-2 flex items-center justify-between text-xs">
                    <span
                      className={`rounded-full px-2.5 py-1 font-semibold ${
                        index === 0
                          ? "bg-rose-50 text-rose-600"
                          : index === 1
                            ? "bg-amber-50 text-amber-600"
                            : "bg-emerald-50 text-emerald-600"
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
