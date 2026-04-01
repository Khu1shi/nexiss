import Link from "next/link";

import { PortalShell } from "@/components/portal-shell";

const boostScorecards = [
  { label: "Opportunities detected", value: "42", delta: "12 high-impact", tone: "text-electric bg-cyan/10" },
  { label: "Projected rank lift", value: "+1.7", delta: "next 14 days", tone: "text-emerald-600 bg-emerald-50" },
  { label: "Content actions queued", value: "28", delta: "9 awaiting approval", tone: "text-violet-700 bg-violet/15" },
  { label: "Citation gap", value: "18%", delta: "-4.3 this week", tone: "text-amber-700 bg-amber-50" }
];

const opportunityClusters = [
  ["Date-night cafe prompts", "High", "Add ambience photos + couple seating mentions", "+2.1"],
  ["Work-friendly cafe prompts", "High", "Publish Wi-Fi and plug-point availability blocks", "+1.9"],
  ["Coffee quality prompts", "Medium", "Expand bean and roast details on landing pages", "+1.2"],
  ["Friends meetup prompts", "Medium", "Add group seating and reservation proof points", "+1.0"],
  ["Budget cafe prompts", "Low", "Tighten menu metadata and price references", "+0.6"]
];

const modelDelta = [
  ["ChatGPT", 68, "+2.4"],
  ["Gemini", 54, "+1.6"],
  ["Claude", 49, "+1.2"],
  ["Perplexity", 43, "+0.9"]
];

const actionPlan = [
  ["Rewrite date-night cafe comparison section", "Content", "Assigned", "Today"],
  ["Publish citation-rich menu and pricing page", "Web", "In review", "Tomorrow"],
  ["Add FAQ cluster for work-friendly cafe intents", "Content", "Planned", "2 days"],
  ["Update schema on key cafe landing pages", "Technical", "Assigned", "3 days"],
  ["Launch model-specific coffee quality evidence block", "Content", "Planned", "4 days"],
  ["Expand social proof snippets for meetup queries", "Operations", "In review", "5 days"]
];

const rolloutTimeline: Array<[string, number]> = [
  ["Mon", 5],
  ["Tue", 7],
  ["Wed", 8],
  ["Thu", 9],
  ["Fri", 11],
  ["Sat", 10],
  ["Sun", 12]
];

const adminSync = [
  ["Approval queue aging >24h", "Escalate", "6 min ago"],
  ["New high-impact Andheri cluster detected", "Review", "14 min ago"],
  ["Cafe pilot optimization report", "Ready", "22 min ago"]
];

export default function GeoBoostPage() {
  return (
    <PortalShell
      role="user"
      title="GEO Boost"
      subtitle="Turn visibility gaps into prioritized optimization actions with projected rank lift, model-level impact tracking, and execution workflows."
    >
      <div className="grid items-start gap-4 xl:grid-cols-[1.12fr_0.88fr]">
        <div className="grid content-start gap-4 self-start">
          <div className="grid items-start gap-4 md:grid-cols-2 xl:grid-cols-4">
            {boostScorecards.map((item) => (
              <article
                key={item.label}
                className="surface-card self-start rounded-[24px] p-5 min-h-[15rem] flex flex-col"
              >
                <p className="min-h-[4.2rem] font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-1 min-h-[3.5rem] text-3xl font-semibold text-ink">{item.value}</p>
                <span
                  className={`mt-auto inline-flex min-h-[3.2rem] items-center rounded-full px-5 py-2 text-[11px] font-semibold ${item.tone}`}
                >
                  {item.delta}
                </span>
              </article>
            ))}
          </div>

          <article className="surface-card rounded-[28px] p-5">
            <div className="flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Opportunity clusters</p>
                <p className="mt-2 text-lg font-semibold text-ink">Where optimization can unlock the fastest visibility gains</p>
              </div>
              <Link href="/global-monitoring" className="text-sm font-semibold text-electric transition hover:text-ink">
                Back to monitoring
              </Link>
            </div>

            <div className="mt-4 space-y-3">
              {opportunityClusters.map(([cluster, priority, action, lift], index) => (
                <div key={cluster} className="rounded-[22px] border border-slate-200 bg-white/85 p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-ink">{cluster}</p>
                      <p className="mt-1 text-sm text-slate-600">{action}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                          priority === "High"
                            ? "bg-rose-50 text-rose-600"
                            : priority === "Medium"
                              ? "bg-amber-50 text-amber-600"
                              : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {priority}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                          index < 2 ? "bg-emerald-50 text-emerald-600" : "bg-cyan/10 text-electric"
                        }`}
                      >
                        {lift} est. lift
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="surface-card rounded-[28px] p-5">
            <div className="flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Action planner</p>
                <p className="mt-2 text-lg font-semibold text-ink">Optimization tasks mapped to execution owners</p>
              </div>
              <Link href="/reports" className="text-sm font-semibold text-electric transition hover:text-ink">
                Export plan
              </Link>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[52rem]">
                <thead>
                  <tr className="border-b border-slate-200 text-left">
                    {["Task", "Type", "Status", "ETA"].map((head) => (
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
                  {actionPlan.map(([task, type, status, eta]) => (
                    <tr key={task} className="border-b border-slate-100 last:border-b-0">
                      <td className="py-4 pr-4 text-sm font-medium text-ink">{task}</td>
                      <td className="py-4 pr-4 text-sm text-slate-600">{type}</td>
                      <td className="py-4 pr-4">
                        <span
                          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                            status === "Assigned"
                              ? "bg-cyan/10 text-electric"
                              : status === "In review"
                                ? "bg-violet/15 text-violet-700"
                                : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {status}
                        </span>
                      </td>
                      <td className="py-4 pr-4 text-sm text-slate-600">{eta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-4">
              {[
                ["Tasks completed this week", "17"],
                ["Avg cycle time", "2.3d"],
                ["Cross-model wins", "11"],
                ["Pending approvals", "9"]
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
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Model impact projection</p>
                <p className="mt-2 text-lg font-semibold text-ink">Expected improvement by AI engine</p>
              </div>
              <Link href="/geo-ranking-check" className="text-sm font-semibold text-electric transition hover:text-ink">
                Open ranking view
              </Link>
            </div>
            <div className="mt-5 space-y-4">
              {modelDelta.map(([model, confidence, lift], index) => (
                <div key={model}>
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>{model}</span>
                    <span className="font-semibold text-ink">
                      +{confidence}% confidence | {lift}
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
                      style={{ width: `${confidence}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="surface-card rounded-[28px] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Execution timeline</p>
                <p className="mt-2 text-lg font-semibold text-ink">Daily optimization output velocity</p>
              </div>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
                On track
              </span>
            </div>
            <div className="mt-4 rounded-[22px] border border-slate-200 bg-white/85 p-4">
              <div className="flex h-28 items-end gap-2">
                {rolloutTimeline.map(([day, value], index) => (
                  <div key={day} className="flex w-full flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-md bg-gradient-to-t from-electric to-cyan"
                      style={{ height: `${value * 8}px`, opacity: 0.45 + index * 0.06 }}
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
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Optimization matrix</p>
                <p className="mt-2 text-lg font-semibold text-ink">Coverage by intent and model</p>
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
                    index % 9 === 0
                      ? "bg-cyan/70"
                      : index % 7 === 0
                        ? "bg-electric/60"
                        : index % 5 === 0
                          ? "bg-violet/55"
                          : index % 4 === 0
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
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Admin sync queue</p>
                <p className="mt-2 text-lg font-semibold text-ink">Items awaiting internal portal decisions</p>
              </div>
              <Link href="/onboarding" className="text-sm font-semibold text-electric transition hover:text-ink">
                Open admin lane
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {adminSync.map(([title, status, time], index) => (
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
