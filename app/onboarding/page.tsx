import Link from "next/link";

import { PortalShell } from "@/components/portal-shell";

const onboardingKpis = [
  { label: "Cafes in queue", value: "34", delta: "11 priority", tone: "bg-[#EEF4FF] text-[#2563EB]" },
  { label: "Avg setup completion", value: "72%", delta: "+8 this week", tone: "bg-[#E3F7EE] text-[#15803D]" },
  { label: "Pilot cafe approvals", value: "19", delta: "6 pending review", tone: "bg-[#EEEAFE] text-[#7C5CF0]" },
  { label: "Time to activate", value: "2.4d", delta: "-0.6 improved", tone: "bg-[#FDF3D8] text-[#B45309]" }
] as const;

const workspaceQueue = [
  ["BrewRoom Andheri", "Cafe", "Andheri West", "84%", "Review"],
  ["Third Wave Andheri", "Cafe", "Andheri East", "76%", "Approve"],
  ["Leaping Windows Cafe", "Cafe", "Andheri West", "68%", "Needs info"],
  ["Subko Andheri", "Cafe", "Lokhandwala", "82%", "Approve"],
  ["Love & Latte", "Cafe", "Versova", "63%", "Needs info"],
  ["Cafe Noir MIDC", "Cafe", "Andheri East", "79%", "Review"]
] as const;

const checklistCoverage = [
  ["Cafe entity profile", 91],
  ["Prompt universe mapping", 73],
  ["Competitor baseline", 67],
  ["Citation source validation", 58],
  ["Model QA checks", 81]
] as const;

const cohortFlow: ReadonlyArray<readonly [string, number]> = [
  ["Request", 46],
  ["Review", 34],
  ["Approved", 22],
  ["Live", 19]
];

const launchCalendar: ReadonlyArray<readonly [string, number]> = [
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
] as const;

export default function OnboardingPage() {
  return (
    <PortalShell
      role="admin"
      title="Cafe Onboarding Queue"
      subtitle="Manage intake, readiness checks, and activation workflows for new Andheri cafes while coordinating launch quality across internal operations."
    >
      <div className="grid items-start gap-4 xl:grid-cols-[1.12fr_0.88fr]">
        {/* Left Column */}
        <div className="min-w-0 flex flex-col gap-4">
          {/* 4 Onboarding KPIs */}
          <div className="grid gap-3.5 sm:grid-cols-2 xl:grid-cols-4">
            {onboardingKpis.map((item) => (
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

          {/* Workspace Intake Table */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex flex-col gap-3 border-b border-[rgba(99,115,160,0.12)] pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Workspace intake table
                </p>
                <p className="mt-1.5 text-[17px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Current cafe onboarding candidates and readiness status
                </p>
              </div>
              <Link
                href="/reports"
                className="shrink-0 text-[13px] font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
              >
                Export queue
              </Link>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[38rem]">
                <thead>
                  <tr className="border-b border-[rgba(99,115,160,0.14)] text-left">
                    {["Cafe", "Type", "City", "Setup score", "Action"].map((head) => (
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
                  {workspaceQueue.map(([workspace, type, city, score, action]) => (
                    <tr
                      key={workspace}
                      className="border-b border-[rgba(99,115,160,0.1)] last:border-b-0"
                    >
                      <td className="py-3.5 pr-4 text-[13.5px] font-semibold text-[#0F172A]">
                        {workspace}
                      </td>
                      <td className="py-3.5 pr-4 text-[13.5px] text-[#5B6472]">{type}</td>
                      <td className="py-3.5 pr-4 text-[13.5px] text-[#5B6472]">{city}</td>
                      <td className="py-3.5 pr-4 text-[13.5px] text-[#5B6472]">{score}</td>
                      <td className="py-3.5 pr-4">
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                            action === "Approve"
                              ? "bg-[#E3F7EE] text-[#15803D]"
                              : action === "Review"
                                ? "bg-[#EEF4FF] text-[#2563EB]"
                                : "bg-[#FDF3D8] text-[#B45309]"
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

          {/* Checklist Coverage */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex flex-col gap-3 border-b border-[rgba(99,115,160,0.12)] pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Checklist coverage
                </p>
                <p className="mt-1.5 text-[17px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Operational readiness across onboarding requirements
                </p>
              </div>
              <Link
                href="/global-monitoring"
                className="shrink-0 text-[13px] font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
              >
                Open monitoring
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {checklistCoverage.map(([label, value], index) => (
                <div key={label}>
                  <div className="flex items-center justify-between text-[13px] text-[#4B5563]">
                    <span className="font-medium">{label}</span>
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
                                : "bg-[linear-gradient(90deg,#34C38F_0%,#38A9F2_100%)]"
                      }`}
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>

        {/* Right Column */}
        <div className="min-w-0 flex flex-col gap-4">
          {/* Cohort Funnel */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Cohort funnel
                </p>
                <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Pipeline from request to activation
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[#EEF4FF] px-2.5 py-0.5 text-[11px] font-semibold text-[#2563EB]">
                Live
              </span>
            </div>
            <div className="mt-4 space-y-2.5">
              {cohortFlow.map(([step, value], index) => (
                <div
                  key={step}
                  className="rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] px-4 py-3"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] font-semibold text-[#4B5563]">{step}</p>
                    <p className="text-[17px] font-extrabold text-[#0F172A]">{value}</p>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#E5E9F2]">
                    <div
                      className={`h-full rounded-full ${
                        index === 0
                          ? "bg-[linear-gradient(90deg,#38A9F2_0%,#2563EB_100%)]"
                          : index === 1
                            ? "bg-[linear-gradient(90deg,#2563EB_0%,#7C5CF0_100%)]"
                            : index === 2
                              ? "bg-[linear-gradient(90deg,#7C5CF0_0%,#A855F7_100%)]"
                              : "bg-[linear-gradient(90deg,#34C38F_0%,#38A9F2_100%)]"
                      }`}
                      style={{ width: `${Math.min(100, value * 2)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Launch Schedule */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Launch schedule
                </p>
                <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Planned cafe go-lives by day
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[#EEEAFE] px-2.5 py-0.5 text-[11px] font-semibold text-[#7C5CF0]">
                Week view
              </span>
            </div>
            <div className="mt-4 rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] p-4">
              <div className="flex h-28 items-end gap-2">
                {launchCalendar.map(([day, value], index) => (
                  <div key={day} className="flex w-full flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-[6px] bg-[linear-gradient(180deg,#38A9F2_0%,#2563EB_100%)]"
                      style={{ height: `${value * 16}px`, opacity: 0.45 + index * 0.06 }}
                    />
                    <p className="text-[11px] font-medium text-[#94A3B8]">{day}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Activation Matrix */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Activation matrix
                </p>
                <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Readiness heatmap by cafe and model
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[#E3F7EE] px-2.5 py-0.5 text-[11px] font-semibold text-[#15803D]">
                Healthy
              </span>
            </div>
            <div className="mt-4 grid grid-cols-6 gap-2">
              {Array.from({ length: 36 }).map((_, index) => (
                <div
                  key={index}
                  className={`h-9 rounded-[10px] ${
                    index % 8 === 0
                      ? "bg-[#38A9F2]/70"
                      : index % 7 === 0
                        ? "bg-[#2563EB]/60"
                        : index % 6 === 0
                          ? "bg-[#7C5CF0]/50"
                          : index % 5 === 0
                            ? "bg-[#A855F7]/35"
                            : "bg-[#EEF4FF]"
                  }`}
                />
              ))}
            </div>
          </article>

          {/* Admin Notes */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Admin notes
                </p>
                <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Operational updates and escalation items
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 text-[12.5px] font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
              >
                Open contact queue
              </Link>
            </div>
            <div className="mt-4 space-y-2.5">
              {adminNotes.map(([title, status, time], index) => (
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
