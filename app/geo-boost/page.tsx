import Link from "next/link";

import { PortalShell } from "@/components/portal-shell";

const boostScorecards = [
  { label: "Opportunities detected", value: "42", delta: "12 high-impact", tone: "bg-[#EEF4FF] text-[#2563EB]" },
  { label: "Projected rank lift", value: "+1.7", delta: "next 14 days", tone: "bg-[#E3F7EE] text-[#15803D]" },
  { label: "Content actions queued", value: "28", delta: "9 awaiting approval", tone: "bg-[#EEEAFE] text-[#7C5CF0]" },
  { label: "Citation gap", value: "18%", delta: "-4.3 this week", tone: "bg-[#FDF3D8] text-[#B45309]" }
] as const;

const opportunityClusters = [
  ["Date-night cafe prompts", "High", "Add ambience photos + couple seating mentions", "+2.1"],
  ["Work-friendly cafe prompts", "High", "Publish Wi-Fi and plug-point availability blocks", "+1.9"],
  ["Coffee quality prompts", "Medium", "Expand bean and roast details on landing pages", "+1.2"],
  ["Friends meetup prompts", "Medium", "Add group seating and reservation proof points", "+1.0"],
  ["Budget cafe prompts", "Low", "Tighten menu metadata and price references", "+0.6"]
] as const;

const modelDelta = [
  ["ChatGPT", 68, "+2.4"],
  ["Gemini", 54, "+1.6"],
  ["Claude", 49, "+1.2"],
  ["Perplexity", 43, "+0.9"]
] as const;

const actionPlan = [
  ["Rewrite date-night cafe comparison section", "Content", "Assigned", "Today"],
  ["Publish citation-rich menu and pricing page", "Web", "In review", "Tomorrow"],
  ["Add FAQ cluster for work-friendly cafe intents", "Content", "Planned", "2 days"],
  ["Update schema on key cafe landing pages", "Technical", "Assigned", "3 days"],
  ["Launch model-specific coffee quality evidence block", "Content", "Planned", "4 days"],
  ["Expand social proof snippets for meetup queries", "Operations", "In review", "5 days"]
] as const;

const rolloutTimeline: ReadonlyArray<readonly [string, number]> = [
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
] as const;

export default function GeoBoostPage() {
  return (
    <PortalShell
      role="user"
      title="GEO Boost"
      subtitle="Turn visibility gaps into prioritized optimization actions with projected rank lift, model-level impact tracking, and execution workflows."
    >
      <div className="grid items-start gap-4 xl:grid-cols-[1.12fr_0.88fr]">
        {/* Left Column */}
        <div className="min-w-0 flex flex-col gap-4">
          {/* 4 Scorecards */}
          <div className="grid gap-3.5 sm:grid-cols-2 xl:grid-cols-4">
            {boostScorecards.map((item) => (
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

          {/* Opportunity Clusters */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex flex-col gap-3 border-b border-[rgba(99,115,160,0.12)] pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Opportunity clusters
                </p>
                <p className="mt-1.5 text-[17px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Where optimization can unlock the fastest visibility gains
                </p>
              </div>
              <Link
                href="/global-monitoring"
                className="shrink-0 text-[13px] font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
              >
                Back to monitoring
              </Link>
            </div>

            <div className="mt-4 space-y-2.5">
              {opportunityClusters.map(([cluster, priority, action, lift], index) => (
                <div
                  key={cluster}
                  className="rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] p-4"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <p className="text-[14.5px] font-semibold text-[#0F172A]">{cluster}</p>
                      <p className="mt-1 text-[13px] text-[#5B6472]">{action}</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
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
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                          index < 2
                            ? "bg-[#E3F7EE] text-[#15803D]"
                            : "bg-[#EEF4FF] text-[#2563EB]"
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

          {/* Action Planner */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex flex-col gap-3 border-b border-[rgba(99,115,160,0.12)] pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Action planner
                </p>
                <p className="mt-1.5 text-[17px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Optimization tasks mapped to execution owners
                </p>
              </div>
              <Link
                href="/reports"
                className="shrink-0 text-[13px] font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
              >
                Export plan
              </Link>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[38rem]">
                <thead>
                  <tr className="border-b border-[rgba(99,115,160,0.14)] text-left">
                    {["Task", "Type", "Status", "ETA"].map((head) => (
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
                  {actionPlan.map(([task, type, status, eta]) => (
                    <tr
                      key={task}
                      className="border-b border-[rgba(99,115,160,0.1)] last:border-b-0"
                    >
                      <td className="py-3.5 pr-4 text-[13.5px] font-semibold text-[#0F172A]">
                        {task}
                      </td>
                      <td className="py-3.5 pr-4 text-[13.5px] text-[#5B6472]">{type}</td>
                      <td className="py-3.5 pr-4">
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                            status === "Assigned"
                              ? "bg-[#EEF4FF] text-[#2563EB]"
                              : status === "In review"
                                ? "bg-[#EEEAFE] text-[#7C5CF0]"
                                : "bg-[#F1F5FD] text-[#64748B]"
                          }`}
                        >
                          {status}
                        </span>
                      </td>
                      <td className="py-3.5 pr-4 text-[13.5px] text-[#5B6472]">{eta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {[
                ["Tasks completed this week", "17"],
                ["Avg cycle time", "2.3d"],
                ["Cross-model wins", "11"],
                ["Pending approvals", "9"]
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] px-3.5 py-3"
                >
                  <p className="text-[11.5px] font-medium text-[#6B7280]">{label}</p>
                  <p className="mt-1 text-[19px] font-extrabold tracking-[-0.02em] text-[#0F172A]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>

        {/* Right Column */}
        <div className="min-w-0 flex flex-col gap-4">
          {/* Model Impact Projection */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Model impact projection
                </p>
                <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Expected improvement by AI engine
                </p>
              </div>
              <Link
                href="/geo-ranking-check"
                className="shrink-0 text-[12.5px] font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
              >
                Open ranking view
              </Link>
            </div>
            <div className="mt-4 space-y-3.5">
              {modelDelta.map(([model, confidence, lift], index) => (
                <div key={model}>
                  <div className="flex items-center justify-between text-[13px] text-[#4B5563]">
                    <span className="font-medium">{model}</span>
                    <span className="font-semibold text-[#0F172A]">
                      +{confidence}% confidence | {lift}
                    </span>
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
                      style={{ width: `${confidence}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Execution Timeline */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Execution timeline
                </p>
                <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Daily optimization output velocity
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[#E3F7EE] px-2.5 py-0.5 text-[11px] font-semibold text-[#15803D]">
                On track
              </span>
            </div>
            <div className="mt-4 rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] p-4">
              <div className="flex h-28 items-end gap-2">
                {rolloutTimeline.map(([day, value], index) => (
                  <div key={day} className="flex w-full flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-[6px] bg-[linear-gradient(180deg,#38A9F2_0%,#2563EB_100%)]"
                      style={{ height: `${value * 8}px`, opacity: 0.45 + index * 0.06 }}
                    />
                    <p className="text-[11px] font-medium text-[#94A3B8]">{day}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Optimization Matrix */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Optimization matrix
                </p>
                <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Coverage by intent and model
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[#EEEAFE] px-2.5 py-0.5 text-[11px] font-semibold text-[#7C5CF0]">
                Live
              </span>
            </div>
            <div className="mt-4 grid grid-cols-6 gap-2">
              {Array.from({ length: 36 }).map((_, index) => (
                <div
                  key={index}
                  className={`h-9 rounded-[10px] ${
                    index % 9 === 0
                      ? "bg-[#38A9F2]/70"
                      : index % 7 === 0
                        ? "bg-[#2563EB]/60"
                        : index % 5 === 0
                          ? "bg-[#7C5CF0]/50"
                          : index % 4 === 0
                            ? "bg-[#A855F7]/35"
                            : "bg-[#EEF4FF]"
                  }`}
                />
              ))}
            </div>
          </article>

          {/* Admin Sync Queue */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Admin sync queue
                </p>
                <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Items awaiting internal portal decisions
                </p>
              </div>
              <Link
                href="/onboarding"
                className="shrink-0 text-[12.5px] font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
              >
                Open admin lane
              </Link>
            </div>
            <div className="mt-4 space-y-2.5">
              {adminSync.map(([title, status, time], index) => (
                <div
                  key={title}
                  className="rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] px-4 py-3"
                >
                  <p className="text-[13.5px] font-semibold text-[#0F172A]">{title}</p>
                  <div className="mt-2 flex items-center justify-between text-[12px]">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                        index === 0
                          ? "bg-rose-50 text-rose-600"
                          : index === 1
                            ? "bg-[#FDF3D8] text-[#B45309]"
                            : "bg-[#E3F7EE] text-[#15803D]"
                      }`}
                    >
                      {status}
                    </span>
                    <span className="text-[#94A3B8]">{time}</span>
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
