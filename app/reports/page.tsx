import Link from "next/link";

import { PortalShell } from "@/components/portal-shell";

const reportKpis = [
  { label: "Reports generated", value: "184", delta: "+23 this month", tone: "bg-[#EEF4FF] text-[#2563EB]" },
  { label: "Investor briefs", value: "19", delta: "6 scheduled", tone: "bg-[#EEEAFE] text-[#7C5CF0]" },
  { label: "Cafe summaries", value: "78", delta: "+14 week over week", tone: "bg-[#E3F7EE] text-[#15803D]" },
  { label: "Export success rate", value: "99.2%", delta: "Stable", tone: "bg-[#FDF3D8] text-[#B45309]" }
] as const;

const reportLibrary = [
  ["Weekly Andheri Cafe Performance", "Cafe teams", "PDF + CSV", "Ready"],
  ["Model Visibility Breakdown", "Growth operators", "PDF", "Ready"],
  ["Competitor Intelligence Snapshot", "Leadership", "PDF + Deck", "Building"],
  ["Investor Local Discovery Brief", "Investors", "Deck", "Ready"],
  ["Regional Signal Report", "Ops team", "CSV", "Queued"],
  ["Cafe Intent Opportunity Map", "Content team", "PDF + CSV", "Ready"]
] as const;

const modelBreakdown = [
  ["ChatGPT", 36],
  ["Gemini", 27],
  ["Claude", 22],
  ["Perplexity", 15]
] as const;

const monthlyExports: ReadonlyArray<readonly [string, number]> = [
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
] as const;

const scheduledReports = [
  ["Weekly cafe visibility digest", "Mon 09:00 IST", "Email + PDF", "Active"],
  ["Competitor change alert report", "Wed 13:00 IST", "Slack + PDF", "Active"],
  ["Investor monthly Andheri brief", "1st of month", "Deck", "Draft"],
  ["Neighborhood ranking movement summary", "Fri 17:00 IST", "CSV", "Active"]
] as const;

export default function ReportsPage() {
  return (
    <PortalShell
      role="admin"
      title="Reports & Exports"
      subtitle="Create cafe-ready, operator-ready, and investor-ready reporting surfaces from GEO monitoring, ranking, and competitor intelligence data."
    >
      <div className="grid items-start gap-4 xl:grid-cols-[1.12fr_0.88fr]">
        {/* Left Column */}
        <div className="min-w-0 flex flex-col gap-4">
          {/* 4 Report KPIs */}
          <div className="grid gap-3.5 sm:grid-cols-2 xl:grid-cols-4">
            {reportKpis.map((item) => (
              <article
                key={item.label}
                className="min-w-0 flex h-full flex-col justify-between rounded-[20px] border border-[rgba(99,115,160,0.14)] bg-white p-4 shadow-[0_8px_30px_rgba(30,64,175,0.06)]"
              >
                <p className="text-[10.5px] font-semibold uppercase leading-snug tracking-[0.11em] text-[#6B7280]">
                  {item.label}
                </p>
                <div className="mt-3">
                  <p className="text-[26px] font-extrabold leading-none tracking-[-0.03em] text-[#0F172A] xl:text-[28px]">
                    {item.value}
                  </p>
                  <span
                    className={`mt-2.5 inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${item.tone}`}
                  >
                    {item.delta}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Report Library */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex flex-col gap-3 border-b border-[rgba(99,115,160,0.12)] pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Report library
                </p>
                <p className="mt-1.5 text-[17px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Ready-to-export intelligence views for every stakeholder type
                </p>
              </div>
              <Link
                href="/dashboard"
                className="shrink-0 text-[13px] font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
              >
                Back to overview
              </Link>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[38rem]">
                <thead>
                  <tr className="border-b border-[rgba(99,115,160,0.14)] text-left">
                    {["Report name", "Audience", "Format", "Status"].map((head) => (
                      <th
                        key={head}
                        className="pb-3 pr-4 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#6B7280]"
                      >
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {reportLibrary.map(([name, audience, format, status]) => (
                    <tr
                      key={name}
                      className="border-b border-[rgba(99,115,160,0.1)] last:border-b-0"
                    >
                      <td className="py-3.5 pr-4 text-[13.5px] font-semibold text-[#0F172A]">
                        {name}
                      </td>
                      <td className="py-3.5 pr-4 text-[13.5px] text-[#5B6472]">{audience}</td>
                      <td className="py-3.5 pr-4 text-[13.5px] text-[#5B6472]">{format}</td>
                      <td className="py-3.5 pr-4">
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                            status === "Ready"
                              ? "bg-[#E3F7EE] text-[#15803D]"
                              : status === "Building"
                                ? "bg-[#FDF3D8] text-[#B45309]"
                                : "bg-[#F1F5FD] text-[#64748B]"
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

          {/* Scheduled Report Workflows */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex flex-col gap-3 border-b border-[rgba(99,115,160,0.12)] pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Scheduled report workflows
                </p>
                <p className="mt-1.5 text-[17px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Automated delivery lanes for teams and investors
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 text-[13px] font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
              >
                Manage recipients
              </Link>
            </div>

            <div className="mt-4 space-y-2.5">
              {scheduledReports.map(([name, cadence, delivery, status]) => (
                <div
                  key={name}
                  className="rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] p-4"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0">
                      <p className="text-[14px] font-semibold text-[#0F172A]">{name}</p>
                      <p className="mt-0.5 text-[12.5px] text-[#6B7280]">
                        {cadence} | {delivery}
                      </p>
                    </div>
                    <span
                      className={`w-fit shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                        status === "Active"
                          ? "bg-[#E3F7EE] text-[#15803D]"
                          : "bg-[#EEEAFE] text-[#7C5CF0]"
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

        {/* Right Column */}
        <div className="min-w-0 flex flex-col gap-4">
          {/* Monthly Export Volume */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Monthly export volume
                </p>
                <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Generated exports over the last 7 months
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[#EEF4FF] px-2.5 py-0.5 text-[11px] font-semibold text-[#2563EB]">
                Live
              </span>
            </div>
            <div className="mt-4 rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] p-4">
              <div className="flex h-28 items-end gap-2">
                {monthlyExports.map(([month, value], index) => (
                  <div key={month} className="flex w-full flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-[6px] bg-[linear-gradient(180deg,#38A9F2_0%,#2563EB_100%)]"
                      style={{ height: `${value * 2}px`, opacity: 0.45 + index * 0.06 }}
                    />
                    <p className="text-[11px] font-medium text-[#94A3B8]">{month}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Model Contribution */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Model contribution
                </p>
                <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Source share feeding report outputs
                </p>
              </div>
              <Link
                href="/global-monitoring"
                className="shrink-0 text-[12.5px] font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
              >
                Open monitoring
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {modelBreakdown.map(([model, value], index) => (
                <div key={model}>
                  <div className="flex items-center justify-between text-[13px] text-[#4B5563]">
                    <span className="font-medium">{model}</span>
                    <span className="font-semibold text-[#0F172A]">{value}%</span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-[#E5E9F2]">
                    <div
                      className={`h-full rounded-full ${
                        index === 0
                          ? "bg-[linear-gradient(90deg,#38A9F2_0%,#2563EB_100%)]"
                          : index === 1
                            ? "bg-[linear-gradient(90deg,#2563EB_0%,#7C5CF0_100%)]"
                            : index === 2
                              ? "bg-[linear-gradient(90deg,#7C5CF0_0%,#A855F7_100%)]"
                              : "bg-[#94A3B8]"
                      }`}
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Report Audience Mix */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Report audience mix
                </p>
                <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Who consumes exported GEO intelligence
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[#EEEAFE] px-2.5 py-0.5 text-[11px] font-semibold text-[#7C5CF0]">
                Weekly
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {distribution.map(([segment, value], index) => (
                <div
                  key={segment}
                  className="rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] p-3.5"
                >
                  <p className="text-[12px] font-medium text-[#6B7280]">{segment}</p>
                  <p className="mt-1.5 text-[22px] font-extrabold leading-none text-[#0F172A]">
                    {value}%
                  </p>
                  <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-[#E5E9F2]">
                    <div
                      className={`h-full rounded-full ${
                        index === 0
                          ? "bg-[linear-gradient(90deg,#38A9F2_0%,#2563EB_100%)]"
                          : index === 1
                            ? "bg-[linear-gradient(90deg,#2563EB_0%,#7C5CF0_100%)]"
                            : index === 2
                              ? "bg-[linear-gradient(90deg,#7C5CF0_0%,#A855F7_100%)]"
                              : "bg-[#F4B63F]"
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
