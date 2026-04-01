import Link from "next/link";

import { PortalShell } from "@/components/portal-shell";

const inboundKpis = [
  { label: "Inbound requests", value: "126", delta: "34 this week", tone: "text-electric bg-cyan/10" },
  { label: "Investor leads", value: "21", delta: "7 high priority", tone: "text-violet-700 bg-violet/15" },
  { label: "Avg first response", value: "2.1h", delta: "-0.8 improved", tone: "text-emerald-600 bg-emerald-50" },
  { label: "Qualified demos", value: "18", delta: "+5 this week", tone: "text-amber-700 bg-amber-50" }
];

const requestQueue = [
  ["Andheri Cafe Collective", "Investor", "Category thesis + TAM brief", "High", "11 min ago"],
  ["Andheri Foodwalks", "Partner", "Early access + pilot details", "Medium", "23 min ago"],
  ["BrewRoom Andheri", "Cafe", "Cafe onboarding timeline", "Medium", "35 min ago"],
  ["Capital North", "Investor", "Data room request", "High", "48 min ago"],
  ["Love & Latte", "Cafe", "GEO ranking benchmark demo", "Low", "1h ago"],
  ["Mumbai Coffee Trails", "Partner", "Integration collaboration", "Medium", "1h ago"]
];

const sourceMix = [
  ["Website form", 44],
  ["Investor outreach", 22],
  ["Founder referrals", 18],
  ["Agency network", 10],
  ["Social inbound", 6]
];

const regionalLeads: Array<[string, number]> = [
  ["Mumbai", 36],
  ["Delhi NCR", 24],
  ["Bengaluru", 28],
  ["Pune", 14],
  ["USA", 20]
];

const followUpQueue = [
  ["Send investor category brief to Andheri Cafe Collective", "Today", "Assigned"],
  ["Schedule pilot demo with Andheri Foodwalks", "Tomorrow", "Planned"],
  ["Share onboarding checklist with BrewRoom Andheri", "Today", "Assigned"],
  ["Route data room request to investor ops", "Today", "In review"]
];

const touchpoints: Array<[string, number]> = [
  ["Mon", 12],
  ["Tue", 16],
  ["Wed", 14],
  ["Thu", 18],
  ["Fri", 21],
  ["Sat", 17],
  ["Sun", 19]
];

export default function ContactPage() {
  return (
    <PortalShell
      role="admin"
      title="Inbound Contact Operations"
      subtitle="Handle incoming investor, partner, and cafe requests with prioritization, response SLAs, and activation workflows aligned to launch goals."
    >
      <div className="grid items-start gap-4 xl:grid-cols-[1.12fr_0.88fr]">
        <div className="grid content-start gap-4 self-start">
          <div className="grid items-start gap-4 md:grid-cols-2 xl:grid-cols-4">
            {inboundKpis.map((item) => (
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
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Inbound queue</p>
                <p className="mt-2 text-lg font-semibold text-ink">Live requests requiring response and triage</p>
              </div>
              <Link href="/reports" className="text-sm font-semibold text-electric transition hover:text-ink">
                Export inbox
              </Link>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[56rem]">
                <thead>
                  <tr className="border-b border-slate-200 text-left">
                    {["Organization", "Type", "Request", "Priority", "Received"].map((head) => (
                      <th key={head} className="pb-3 pr-4 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {requestQueue.map(([org, type, request, priority, received]) => (
                    <tr key={`${org}-${request}`} className="border-b border-slate-100 last:border-b-0">
                      <td className="py-4 pr-4 text-sm font-semibold text-ink">{org}</td>
                      <td className="py-4 pr-4 text-sm text-slate-600">{type}</td>
                      <td className="py-4 pr-4 text-sm text-slate-600">{request}</td>
                      <td className="py-4 pr-4">
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
                      </td>
                      <td className="py-4 pr-4 text-sm text-slate-600">{received}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="surface-card rounded-[28px] p-5">
            <div className="flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Follow-up actions</p>
                <p className="mt-2 text-lg font-semibold text-ink">Next actions to convert inbound interest to active pipeline</p>
              </div>
              <Link href="/onboarding" className="text-sm font-semibold text-electric transition hover:text-ink">
                Open onboarding queue
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {followUpQueue.map(([task, eta, status]) => (
                <div key={task} className="rounded-[22px] border border-slate-200 bg-white/85 p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm font-semibold text-ink">{task}</p>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-cyan/10 px-2.5 py-1 text-[11px] font-semibold text-electric">{eta}</span>
                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
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
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="grid content-start gap-4 self-start">
          <article className="surface-card rounded-[28px] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Inbound source mix</p>
                <p className="mt-2 text-lg font-semibold text-ink">Where new requests are coming from</p>
              </div>
              <span className="rounded-full bg-cyan/10 px-2.5 py-1 text-[11px] font-semibold text-electric">Weekly</span>
            </div>
            <div className="mt-4 space-y-3">
              {sourceMix.map(([source, value], index) => (
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
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Regional lead heat</p>
                <p className="mt-2 text-lg font-semibold text-ink">Demand concentration by geography</p>
              </div>
              <span className="rounded-full bg-violet/15 px-2.5 py-1 text-[11px] font-semibold text-violet-700">
                Live
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {regionalLeads.map(([region, leads], index) => (
                <div key={region} className="rounded-[18px] border border-slate-200 bg-white/85 p-3">
                  <p className="text-xs text-slate-500">{region}</p>
                  <p className="mt-1 text-2xl font-semibold text-ink">{leads}</p>
                  <div className="mt-2 h-2 rounded-full bg-slate-200">
                    <div
                      className={`h-2 rounded-full ${
                        index % 4 === 0
                          ? "bg-gradient-to-r from-cyan to-electric"
                          : index % 4 === 1
                            ? "bg-gradient-to-r from-electric to-violet"
                            : index % 4 === 2
                              ? "bg-gradient-to-r from-violet to-pink-400"
                              : "bg-gradient-to-r from-pink-400 to-orange-400"
                      }`}
                      style={{ width: `${Math.min(100, leads * 2)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="surface-card rounded-[28px] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Daily touchpoints</p>
                <p className="mt-2 text-lg font-semibold text-ink">Inbound conversations handled by day</p>
              </div>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
                Healthy
              </span>
            </div>
            <div className="mt-4 rounded-[20px] border border-slate-200 bg-white/85 p-4">
              <div className="flex h-28 items-end gap-2">
                {touchpoints.map(([day, value], index) => (
                  <div key={day} className="flex w-full flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-md bg-gradient-to-t from-electric to-cyan"
                      style={{ height: `${value * 4}px`, opacity: 0.45 + index * 0.06 }}
                    />
                    <p className="text-[11px] text-slate-400">{day}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </PortalShell>
  );
}
