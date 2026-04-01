import Link from "next/link";

import { PortalShell } from "@/components/portal-shell";

const reportKpis = [
  { label: "Reports generated", value: "184", delta: "+23 this month", tone: "text-electric bg-cyan/10" },
  { label: "Investor briefs", value: "19", delta: "6 scheduled", tone: "text-violet-700 bg-violet/15" },
  { label: "Cafe summaries", value: "78", delta: "+14 week over week", tone: "text-emerald-600 bg-emerald-50" },
  { label: "Export success rate", value: "99.2%", delta: "Stable", tone: "text-amber-700 bg-amber-50" }
];

const reportLibrary = [
  ["Weekly Andheri Cafe Performance", "Cafe teams", "PDF + CSV", "Ready"],
  ["Model Visibility Breakdown", "Growth operators", "PDF", "Ready"],
  ["Competitor Intelligence Snapshot", "Leadership", "PDF + Deck", "Building"],
  ["Investor Local Discovery Brief", "Investors", "Deck", "Ready"],
  ["Regional Signal Report", "Ops team", "CSV", "Queued"],
  ["Cafe Intent Opportunity Map", "Content team", "PDF + CSV", "Ready"]
];

const modelBreakdown = [
  ["ChatGPT", 36],
  ["Gemini", 27],
  ["Claude", 22],
  ["Perplexity", 15]
];

const monthlyExports: Array<[string, number]> = [
  ["Jan", 18],
  ["Feb", 22],
  ["Mar", 27],
  ["Apr", 25],
  ["May", 31],
  ["Jun", 36],
  ["Jul", 38]
];

const distribution = [
  ["Cafe owners and managers", 24],
  ["Marketing and ops teams", 41],
  ["Hospitality partners", 19],
  ["Investor stakeholders", 16]
];

const scheduledReports = [
  ["Weekly cafe visibility digest", "Mon 09:00 IST", "Email + PDF", "Active"],
  ["Competitor change alert report", "Wed 13:00 IST", "Slack + PDF", "Active"],
  ["Investor monthly Andheri brief", "1st of month", "Deck", "Draft"],
  ["Neighborhood ranking movement summary", "Fri 17:00 IST", "CSV", "Active"]
];

export default function ReportsPage() {
  return (
    <PortalShell
      role="admin"
      title="Reports & Exports"
      subtitle="Create cafe-ready, operator-ready, and investor-ready reporting surfaces from GEO monitoring, ranking, and competitor intelligence data."
    >
      <div className="grid items-start gap-4 xl:grid-cols-[1.12fr_0.88fr]">
        <div className="grid content-start gap-4 self-start">
          <div className="grid items-start gap-4 md:grid-cols-2 xl:grid-cols-4">
            {reportKpis.map((item) => (
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
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Report library</p>
                <p className="mt-2 text-lg font-semibold text-ink">Ready-to-export intelligence views for every stakeholder type</p>
              </div>
              <Link href="/dashboard" className="text-sm font-semibold text-electric transition hover:text-ink">
                Back to overview
              </Link>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[50rem]">
                <thead>
                  <tr className="border-b border-slate-200 text-left">
                    {["Report name", "Audience", "Format", "Status"].map((head) => (
                      <th key={head} className="pb-3 pr-4 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {reportLibrary.map(([name, audience, format, status]) => (
                    <tr key={name} className="border-b border-slate-100 last:border-b-0">
                      <td className="py-4 pr-4 text-sm font-semibold text-ink">{name}</td>
                      <td className="py-4 pr-4 text-sm text-slate-600">{audience}</td>
                      <td className="py-4 pr-4 text-sm text-slate-600">{format}</td>
                      <td className="py-4 pr-4">
                        <span
                          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                            status === "Ready"
                              ? "bg-emerald-50 text-emerald-600"
                              : status === "Building"
                                ? "bg-amber-50 text-amber-600"
                                : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {status}
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
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Scheduled report workflows</p>
                <p className="mt-2 text-lg font-semibold text-ink">Automated delivery lanes for teams and investors</p>
              </div>
              <Link href="/contact" className="text-sm font-semibold text-electric transition hover:text-ink">
                Manage recipients
              </Link>
            </div>

            <div className="mt-4 space-y-3">
              {scheduledReports.map(([name, cadence, delivery, status]) => (
                <div key={name} className="rounded-[22px] border border-slate-200 bg-white/85 p-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-ink">{name}</p>
                      <p className="mt-1 text-sm text-slate-500">
                        {cadence} | {delivery}
                      </p>
                    </div>
                    <span
                      className={`w-fit rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                        status === "Active" ? "bg-emerald-50 text-emerald-600" : "bg-violet/15 text-violet-700"
                      }`}
                    >
                      {status}
                    </span>
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
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Monthly export volume</p>
                <p className="mt-2 text-lg font-semibold text-ink">Generated exports over the last 7 months</p>
              </div>
              <span className="rounded-full bg-cyan/10 px-2.5 py-1 text-[11px] font-semibold text-electric">Live</span>
            </div>
            <div className="mt-4 rounded-[20px] border border-slate-200 bg-white/85 p-4">
              <div className="flex h-28 items-end gap-2">
                {monthlyExports.map(([month, value], index) => (
                  <div key={month} className="flex w-full flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-md bg-gradient-to-t from-electric to-cyan"
                      style={{ height: `${value * 2}px`, opacity: 0.45 + index * 0.06 }}
                    />
                    <p className="text-[11px] text-slate-400">{month}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="surface-card rounded-[28px] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Model contribution</p>
                <p className="mt-2 text-lg font-semibold text-ink">Source share feeding report outputs</p>
              </div>
              <Link href="/global-monitoring" className="text-sm font-semibold text-electric transition hover:text-ink">
                Open monitoring
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {modelBreakdown.map(([model, value], index) => (
                <div key={model}>
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>{model}</span>
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
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">Report audience mix</p>
                <p className="mt-2 text-lg font-semibold text-ink">Who consumes exported GEO intelligence</p>
              </div>
              <span className="rounded-full bg-violet/15 px-2.5 py-1 text-[11px] font-semibold text-violet-700">
                Weekly
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {distribution.map(([segment, value], index) => (
                <div key={segment} className="rounded-[18px] border border-slate-200 bg-white/85 p-3">
                  <p className="text-xs text-slate-500">{segment}</p>
                  <p className="mt-1 text-2xl font-semibold text-ink">{value}%</p>
                  <div className="mt-2 h-2 rounded-full bg-slate-200">
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
          </article>
        </div>
      </div>
    </PortalShell>
  );
}
