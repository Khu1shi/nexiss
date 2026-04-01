import Link from "next/link";

import { PortalShell } from "@/components/portal-shell";

const onboardingKpis = [
  { label: "Cafes in queue", value: "34", delta: "11 priority", tone: "text-electric bg-cyan/10" },
  { label: "Avg setup completion", value: "72%", delta: "+8 this week", tone: "text-emerald-600 bg-emerald-50" },
  { label: "Pilot cafe approvals", value: "19", delta: "6 pending review", tone: "text-violet-700 bg-violet/15" },
  { label: "Time to activate", value: "2.4d", delta: "-0.6 improved", tone: "text-amber-700 bg-amber-50" }
];

const workspaceQueue = [
  ["BrewRoom Andheri", "Cafe", "Andheri West", "84%", "Review"],
  ["Third Wave Andheri", "Cafe", "Andheri East", "76%", "Approve"],
  ["Leaping Windows Cafe", "Cafe", "Andheri West", "68%", "Needs info"],
  ["Subko Andheri", "Cafe", "Lokhandwala", "82%", "Approve"],
  ["Love & Latte", "Cafe", "Versova", "63%", "Needs info"],
  ["Cafe Noir MIDC", "Cafe", "Andheri East", "79%", "Review"]
];

const checklistCoverage = [
  ["Cafe entity profile", 91],
  ["Prompt universe mapping", 73],
  ["Competitor baseline", 67],
  ["Citation source validation", 58],
  ["Model QA checks", 81]
];

const cohortFlow: Array<[string, number]> = [
  ["Request", 46],
  ["Review", 34],
  ["Approved", 22],
  ["Live", 19]
];

const launchCalendar: Array<[string, number]> = [
  ["Mon", 2],
  ["Tue", 4],
  ["Wed", 3],
  ["Thu", 5],
  ["Fri", 4],
  ["Sat", 2],
  ["Sun", 3]
];

const adminNotes = [
  ["Investor-priority cafe flagged", "Escalate", "8 min ago"],
  ["Missing citation baseline documents", "Follow-up", "17 min ago"],
  ["Pilot cohort ready for invite wave", "Ready", "25 min ago"]
];

export default function OnboardingPage() {
  return (
    <PortalShell
      role="admin"
      title="Cafe Onboarding Queue"
      subtitle="Manage intake, readiness checks, and activation workflows for new Andheri cafes while coordinating launch quality across internal operations."
    >
      <div className="grid items-start gap-4 xl:grid-cols-[1.12fr_0.88fr]">
        <div className="grid content-start gap-4 self-start">
          <div className="grid items-start gap-4 md:grid-cols-2 xl:grid-cols-4">
            {onboardingKpis.map((item) => (
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
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Workspace intake table</p>
                <p className="mt-2 text-lg font-semibold text-ink">Current cafe onboarding candidates and readiness status</p>
              </div>
              <Link href="/reports" className="text-sm font-semibold text-electric transition hover:text-ink">
                Export queue
              </Link>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[52rem]">
                <thead>
                  <tr className="border-b border-slate-200 text-left">
                    {["Cafe", "Type", "City", "Setup score", "Action"].map((head) => (
                      <th key={head} className="pb-3 pr-4 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {workspaceQueue.map(([workspace, type, city, score, action]) => (
                    <tr key={workspace} className="border-b border-slate-100 last:border-b-0">
                      <td className="py-4 pr-4 text-sm font-semibold text-ink">{workspace}</td>
                      <td className="py-4 pr-4 text-sm text-slate-600">{type}</td>
                      <td className="py-4 pr-4 text-sm text-slate-600">{city}</td>
                      <td className="py-4 pr-4 text-sm text-slate-600">{score}</td>
                      <td className="py-4 pr-4">
                        <span
                          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                            action === "Approve"
                              ? "bg-emerald-50 text-emerald-600"
                              : action === "Review"
                                ? "bg-cyan/10 text-electric"
                                : "bg-amber-50 text-amber-600"
                          }`}
                        >
                          {action}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="surface-card rounded-[28px] p-5">
            <div className="flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Checklist coverage</p>
                <p className="mt-2 text-lg font-semibold text-ink">Operational readiness across onboarding requirements</p>
              </div>
              <Link href="/global-monitoring" className="text-sm font-semibold text-electric transition hover:text-ink">
                Open monitoring
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {checklistCoverage.map(([label, value], index) => (
                <div key={label}>
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>{label}</span>
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
                                : "bg-gradient-to-r from-emerald-400 to-cyan"
                      }`}
                      style={{ width: `${value}%` }}
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
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Cohort funnel</p>
                <p className="mt-2 text-lg font-semibold text-ink">Pipeline from request to activation</p>
              </div>
              <span className="rounded-full bg-cyan/10 px-2.5 py-1 text-[11px] font-semibold text-electric">Live</span>
            </div>
            <div className="mt-4 space-y-3">
              {cohortFlow.map(([step, value], index) => (
                <div key={step} className="rounded-[20px] border border-slate-200 bg-white/85 px-4 py-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-600">{step}</p>
                    <p className="text-lg font-semibold text-ink">{value}</p>
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
                              : "bg-gradient-to-r from-emerald-400 to-cyan"
                      }`}
                      style={{ width: `${Math.min(100, value * 2)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="surface-card rounded-[28px] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Launch schedule</p>
                <p className="mt-2 text-lg font-semibold text-ink">Planned cafe go-lives by day</p>
              </div>
              <span className="rounded-full bg-violet/15 px-2.5 py-1 text-[11px] font-semibold text-violet-700">
                Week view
              </span>
            </div>
            <div className="mt-4 rounded-[20px] border border-slate-200 bg-white/85 p-4">
              <div className="flex h-28 items-end gap-2">
                {launchCalendar.map(([day, value], index) => (
                  <div key={day} className="flex w-full flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-md bg-gradient-to-t from-electric to-cyan"
                      style={{ height: `${value * 16}px`, opacity: 0.45 + index * 0.06 }}
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
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Activation matrix</p>
                <p className="mt-2 text-lg font-semibold text-ink">Readiness heatmap by cafe and model</p>
              </div>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
                Healthy
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
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Admin notes</p>
                <p className="mt-2 text-lg font-semibold text-ink">Operational updates and escalation items</p>
              </div>
              <Link href="/contact" className="text-sm font-semibold text-electric transition hover:text-ink">
                Open contact queue
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {adminNotes.map(([title, status, time], index) => (
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
