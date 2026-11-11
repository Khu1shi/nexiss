import Link from "next/link";

import { PortalShell } from "@/components/portal-shell";

const inboundKpis = [
  { label: "Inbound requests", value: "126", delta: "34 this week", tone: "bg-[#EEF4FF] text-[#2563EB]" },
  { label: "Investor leads", value: "21", delta: "7 high priority", tone: "bg-[#EEEAFE] text-[#7C5CF0]" },
  { label: "Avg first response", value: "2.1h", delta: "-0.8 improved", tone: "bg-[#E3F7EE] text-[#15803D]" },
  { label: "Qualified demos", value: "18", delta: "+5 this week", tone: "bg-[#FDF3D8] text-[#B45309]" }
] as const;

const requestQueue = [
  ["Andheri Cafe Collective", "Investor", "Category thesis + TAM brief", "High", "11 min ago"],
  ["Andheri Foodwalks", "Partner", "Early access + pilot details", "Medium", "23 min ago"],
  ["BrewRoom Andheri", "Cafe", "Cafe onboarding timeline", "Medium", "35 min ago"],
  ["Capital North", "Investor", "Data room request", "High", "48 min ago"],
  ["Love & Latte", "Cafe", "GEO ranking benchmark demo", "Low", "1h ago"],
  ["Mumbai Coffee Trails", "Partner", "Integration collaboration", "Medium", "1h ago"]
] as const;

const sourceMix = [
  ["Website form", 44],
  ["Investor outreach", 22],
  ["Founder referrals", 18],
  ["Agency network", 10],
  ["Social inbound", 6]
] as const;

const regionalLeads: ReadonlyArray<readonly [string, number]> = [
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
] as const;

const touchpoints: ReadonlyArray<readonly [string, number]> = [
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
        {/* Left Column */}
        <div className="min-w-0 flex flex-col gap-4">
          {/* 4 Inbound KPIs */}
          <div className="grid gap-3.5 sm:grid-cols-2 xl:grid-cols-4">
            {inboundKpis.map((item) => (
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

          {/* Inbound Queue */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex flex-col gap-3 border-b border-[rgba(99,115,160,0.12)] pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Inbound queue
                </p>
                <p className="mt-1.5 text-[17px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Live requests requiring response and triage
                </p>
              </div>
              <Link
                href="/reports"
                className="shrink-0 text-[13px] font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
              >
                Export inbox
              </Link>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[42rem]">
                <thead>
                  <tr className="border-b border-[rgba(99,115,160,0.14)] text-left">
                    {["Organization", "Type", "Request", "Priority", "Received"].map((head) => (
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
                  {requestQueue.map(([org, type, request, priority, received]) => (
                    <tr
                      key={`${org}-${request}`}
                      className="border-b border-[rgba(99,115,160,0.1)] last:border-b-0"
                    >
                      <td className="py-3.5 pr-4 text-[13.5px] font-semibold text-[#0F172A]">
                        {org}
                      </td>
                      <td className="py-3.5 pr-4 text-[13.5px] text-[#5B6472]">{type}</td>
                      <td className="py-3.5 pr-4 text-[13.5px] text-[#5B6472]">{request}</td>
                      <td className="py-3.5 pr-4">
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                            priority === "High"
                              ? "bg-rose-50 text-rose-600"
                              : priority === "Medium"
                                ? "bg-[#FDF3D8] text-[#B45309]"
                                : "bg-[#F1F5FD] text-[#64748B]"
                          }`}
                        >
                          {priority}
                        </span>
                      </td>
                      <td className="py-3.5 pr-4 text-[13.5px] text-[#5B6472]">{received}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {/* Follow-up Actions */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex flex-col gap-3 border-b border-[rgba(99,115,160,0.12)] pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Follow-up actions
                </p>
                <p className="mt-1.5 text-[17px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Next actions to convert inbound interest to active pipeline
                </p>
              </div>
              <Link
                href="/onboarding"
                className="shrink-0 text-[13px] font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
              >
                Open onboarding queue
              </Link>
            </div>
            <div className="mt-4 space-y-2.5">
              {followUpQueue.map(([task, eta, status]) => (
                <div
                  key={task}
                  className="rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] p-4"
                >
                  <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[13.5px] font-semibold text-[#0F172A]">{task}</p>
                    <div className="flex shrink-0 items-center gap-2">
                      <span className="rounded-full bg-[#EEF4FF] px-2.5 py-0.5 text-[11px] font-semibold text-[#2563EB]">
                        {eta}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                          status === "Assigned"
                            ? "bg-[#E3F7EE] text-[#15803D]"
                            : status === "In review"
                              ? "bg-[#EEEAFE] text-[#7C5CF0]"
                              : "bg-[#F1F5FD] text-[#64748B]"
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

        {/* Right Column */}
        <div className="min-w-0 flex flex-col gap-4">
          {/* Inbound Source Mix */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Inbound source mix
                </p>
                <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Where new requests are coming from
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[#EEF4FF] px-2.5 py-0.5 text-[11px] font-semibold text-[#2563EB]">
                Weekly
              </span>
            </div>
            <div className="mt-4 space-y-3">
              {sourceMix.map(([source, value], index) => (
                <div key={source}>
                  <div className="flex items-center justify-between text-[13px] text-[#4B5563]">
                    <span className="font-medium">{source}</span>
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
                              : index === 3
                                ? "bg-[#F4B63F]"
                                : "bg-[#94A3B8]"
                      }`}
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Regional Lead Heat */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Regional lead heat
                </p>
                <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Demand concentration by geography
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[#EEEAFE] px-2.5 py-0.5 text-[11px] font-semibold text-[#7C5CF0]">
                Live
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {regionalLeads.map(([region, leads], index) => (
                <div
                  key={region}
                  className="rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] p-3.5"
                >
                  <p className="text-[12px] font-medium text-[#6B7280]">{region}</p>
                  <p className="mt-1.5 text-[22px] font-extrabold leading-none text-[#0F172A]">
                    {leads}
                  </p>
                  <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-[#E5E9F2]">
                    <div
                      className={`h-full rounded-full ${
                        index % 4 === 0
                          ? "bg-[linear-gradient(90deg,#38A9F2_0%,#2563EB_100%)]"
                          : index % 4 === 1
                            ? "bg-[linear-gradient(90deg,#2563EB_0%,#7C5CF0_100%)]"
                            : index % 4 === 2
                              ? "bg-[linear-gradient(90deg,#7C5CF0_0%,#A855F7_100%)]"
                              : "bg-[#F4B63F]"
                      }`}
                      style={{ width: `${Math.min(100, leads * 2)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Daily Touchpoints */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Daily touchpoints
                </p>
                <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Inbound conversations handled by day
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[#E3F7EE] px-2.5 py-0.5 text-[11px] font-semibold text-[#15803D]">
                Healthy
              </span>
            </div>
            <div className="mt-4 rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] p-4">
              <div className="flex h-28 items-end gap-2">
                {touchpoints.map(([day, value], index) => (
                  <div key={day} className="flex w-full flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-[6px] bg-[linear-gradient(180deg,#38A9F2_0%,#2563EB_100%)]"
                      style={{ height: `${value * 4}px`, opacity: 0.45 + index * 0.06 }}
                    />
                    <p className="text-[11px] font-medium text-[#94A3B8]">{day}</p>
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
