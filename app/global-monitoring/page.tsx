import Link from "next/link";

import { PortalShell } from "@/components/portal-shell";

const regionCards = [
  { region: "Andheri West", score: "82.1", movement: "+3.4", status: "Strong" },
  { region: "Andheri East", score: "76.8", movement: "+1.9", status: "Stable" },
  { region: "Lokhandwala", score: "73.2", movement: "-0.8", status: "Watch" },
  { region: "Versova", score: "69.4", movement: "+2.1", status: "Growing" }
] as const;

const modelSplit = [
  ["ChatGPT", "37%"],
  ["Gemini", "24%"],
  ["Claude", "22%"],
  ["Perplexity", "17%"]
] as const;

const dailyTrend = [
  ["Mon", 68, 62],
  ["Tue", 70, 64],
  ["Wed", 72, 66],
  ["Thu", 71, 67],
  ["Fri", 74, 68],
  ["Sat", 77, 71],
  ["Sun", 79, 73]
] as const;

const livePrompts = [
  ["Best cafes in Andheri for dates", "Andheri West", "Your Cafe #3", "Rising"],
  ["Best cafes in Andheri for work", "Andheri East", "Your Cafe #5", "Watch"],
  ["Best coffee in Andheri West", "Lokhandwala", "Your Cafe #6", "Action"],
  ["Best cafes in Andheri for friends meetup", "Versova", "Your Cafe #2", "Strong"]
] as const;

const alerts = [
  ["Gemini dropped date-cafe citation share in Andheri East", "High", "4 min ago"],
  ["Perplexity picked competitor in work-friendly cafe cluster", "Medium", "11 min ago"],
  ["New answer template detected in coffee-quality prompts", "Low", "18 min ago"]
] as const;

const sourceMix = [
  ["Google Maps profile", 41],
  ["Food and cafe directories", 29],
  ["Community reviews", 18],
  ["Lifestyle media", 12]
] as const;

const adminQueue = [
  ["Cafe data quality check", "Andheri Pilot 04", "Pending"],
  ["Onboarding approval", "Cafe Cohort B", "Review"],
  ["Weekly cafe snapshot export", "Andheri visibility pack", "Ready"]
] as const;

const nextTools = [
  ["/geo-ranking-check", "GEO Ranking Check"],
  ["/geo-boost", "GEO Boost"],
  ["/competitor-analysis", "Competitor Analysis"],
  ["/reports", "Reports"]
] as const;

export default function GlobalMonitoringPage() {
  return (
    <PortalShell
      role="user"
      title="Global GEO Monitoring"
      subtitle="Monitor AI visibility for Andheri cafes across regions, intents, and models in one operating surface while retaining an explicit lane for internal admin review and launch control."
    >
      <div className="grid gap-4 xl:grid-cols-[1.08fr_0.92fr]">
        {/* Left Column */}
        <div className="min-w-0 flex flex-col gap-4">
          {/* 4 Region Cards */}
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {regionCards.map((item, index) => (
              <div
                key={item.region}
                className="min-w-0 flex flex-col justify-between rounded-[20px] border border-[rgba(99,115,160,0.14)] bg-white p-3.5 shadow-[0_8px_30px_rgba(30,64,175,0.06)] xl:p-4"
              >
                <p className="text-[10px] font-semibold uppercase leading-snug tracking-[0.09em] text-[#6B7280] xl:text-[10.5px]">
                  {item.region}
                </p>
                <div className="mt-2.5 flex flex-wrap items-center justify-between gap-1.5">
                  <p className="text-[24px] font-extrabold leading-none tracking-[-0.03em] text-[#0F172A] 2xl:text-[26px]">
                    {item.score}
                  </p>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[10.5px] font-semibold ${
                      index === 0
                        ? "bg-[#E3F7EE] text-[#15803D]"
                        : index === 2
                          ? "bg-[#FDF3D8] text-[#B45309]"
                          : "bg-[#EEF4FF] text-[#2563EB]"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <p className="mt-2 text-[12.5px] font-medium text-[#6B7280]">
                  {item.movement} last 7d
                </p>
              </div>
            ))}
          </div>

          {/* Region Visibility Map */}
          <div className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex flex-col gap-3 border-b border-[rgba(99,115,160,0.12)] pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Region visibility map
                </p>
                <p className="mt-1.5 text-[17px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Heat concentration by geo and model coverage
                </p>
              </div>
              <span className="w-fit shrink-0 rounded-full border border-[#D5E2FA] bg-[#EEF4FF] px-3 py-1 text-[11.5px] font-semibold text-[#2563EB]">
                User portal
              </span>
            </div>

            <div className="mt-4 grid gap-4 xl:grid-cols-[1.12fr_0.88fr]">
              <div className="min-w-0 rounded-[18px] border border-[#D5E2FA] bg-[#F4F8FF]/70 p-4">
                <div className="grid grid-cols-5 gap-2">
                  {Array.from({ length: 25 }).map((_, index) => (
                    <div
                      key={index}
                      className={`h-10 rounded-[10px] ${
                        index % 7 === 0
                          ? "bg-[#38A9F2]/70"
                          : index % 5 === 0
                            ? "bg-[#2563EB]/60"
                            : index % 3 === 0
                              ? "bg-[#7C5CF0]/45"
                              : "bg-white"
                      }`}
                    />
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-3.5 text-[12.5px] text-[#5B6472]">
                  <span className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#38A9F2]" />
                    High visibility
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#2563EB]" />
                    Active ranking
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#7C5CF0]" />
                    Expansion signal
                  </span>
                </div>
              </div>

              <div className="min-w-0 rounded-[18px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
                  Model distribution
                </p>
                <div className="mt-4 space-y-3.5">
                  {modelSplit.map(([label, value]) => (
                    <div key={label}>
                      <div className="flex items-center justify-between text-[13px] font-medium text-[#4B5563]">
                        <span>{label}</span>
                        <span className="font-semibold text-[#0F172A]">{value}</span>
                      </div>
                      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-[#E5E9F2]">
                        <div
                          className="h-full rounded-full bg-[linear-gradient(90deg,#38A9F2_0%,#2563EB_100%)]"
                          style={{ width: value }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-4 xl:grid-cols-2">
              <div className="min-w-0 rounded-[18px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] p-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
                    7 day rank trend
                  </p>
                  <span className="text-[11.5px] font-medium text-[#94A3B8]">
                    User vs competitor avg
                  </span>
                </div>
                <div className="mt-3 h-32 overflow-hidden rounded-[14px] border border-[#D5E2FA] bg-[#F4F8FF]/70 px-2">
                  <svg viewBox="0 0 360 120" className="h-full w-full">
                    <path
                      d="M0 80 C32 74, 58 66, 86 62 S144 56, 174 58 S230 46, 262 38 S320 30, 360 22"
                      fill="none"
                      stroke="#38A9F2"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0 92 C34 90, 60 86, 92 82 S152 78, 184 72 S244 66, 276 60 S328 54, 360 50"
                      fill="none"
                      stroke="#2563EB"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="mt-2.5 grid grid-cols-7 text-center text-[11px] font-medium text-[#94A3B8]">
                  {dailyTrend.map(([day]) => (
                    <span key={day}>{day}</span>
                  ))}
                </div>
              </div>

              <div className="min-w-0 rounded-[18px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] p-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
                    Citation source mix
                  </p>
                  <span className="text-[11.5px] font-medium text-[#94A3B8]">
                    Weighted by visibility
                  </span>
                </div>
                <div className="mt-3.5 space-y-3">
                  {sourceMix.map(([label, value], index) => (
                    <div key={label}>
                      <div className="flex items-center justify-between text-[13px] font-medium text-[#4B5563]">
                        <span className="truncate pr-2">{label}</span>
                        <span className="shrink-0 font-semibold text-[#0F172A]">{value}%</span>
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
              </div>
            </div>
          </div>

          {/* Live Prompt Stream */}
          <div className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex flex-col gap-3 border-b border-[rgba(99,115,160,0.12)] pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Live prompt stream
                </p>
                <p className="mt-1.5 text-[17px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  How cafes are currently placed in AI answers
                </p>
              </div>
              <Link
                href="/geo-ranking-check"
                className="shrink-0 text-[13px] font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
              >
                Open ranking checker
              </Link>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[36rem]">
                <thead>
                  <tr className="border-b border-[rgba(99,115,160,0.14)] text-left">
                    {["Prompt", "Region", "Current rank", "Signal"].map((head) => (
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
                  {livePrompts.map(([prompt, region, rank, signal], index) => (
                    <tr
                      key={prompt}
                      className="border-b border-[rgba(99,115,160,0.1)] last:border-b-0"
                    >
                      <td className="py-3.5 pr-4 text-[13.5px] font-semibold text-[#0F172A]">
                        {prompt}
                      </td>
                      <td className="py-3.5 pr-4 text-[13.5px] text-[#5B6472]">{region}</td>
                      <td className="py-3.5 pr-4 text-[13.5px] font-medium text-[#4B5563]">
                        {rank}
                      </td>
                      <td className="py-3.5 pr-4">
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                            index === 0
                              ? "bg-[#E3F7EE] text-[#15803D]"
                              : index === 1
                                ? "bg-[#F1F5FD] text-[#64748B]"
                                : index === 2
                                  ? "bg-[#FDF3D8] text-[#B45309]"
                                  : "bg-[#EEF4FF] text-[#2563EB]"
                          }`}
                        >
                          {signal}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {[
                ["Total prompts monitored", "10,240"],
                ["Answer snapshots today", "1,482"],
                ["Citation events tracked", "3,906"]
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] px-4 py-3"
                >
                  <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#6B7280]">
                    {label}
                  </p>
                  <p className="mt-1.5 text-[20px] font-extrabold tracking-[-0.02em] text-[#0F172A]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="min-w-0 flex flex-col gap-4">
          {/* Alert Queue */}
          <div className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Alert queue
                </p>
                <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Events that need operator action
                </p>
              </div>
              <Link
                href="/geo-boost"
                className="shrink-0 text-[12.5px] font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
              >
                Open GEO Boost
              </Link>
            </div>

            <div className="mt-4 space-y-2.5">
              {alerts.map(([title, priority, time], index) => (
                <div
                  key={title}
                  className="rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] px-4 py-3"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0">
                      <p className="text-[14px] font-semibold leading-snug text-[#0F172A]">
                        {title}
                      </p>
                      <p className="mt-0.5 text-[12.5px] text-[#6B7280]">{time}</p>
                    </div>
                    <span
                      className={`w-fit shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                        index === 0
                          ? "bg-rose-50 text-rose-600"
                          : index === 1
                            ? "bg-[#FDF3D8] text-[#B45309]"
                            : "bg-[#F1F5FD] text-[#64748B]"
                      }`}
                    >
                      {priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-[18px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] p-4">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
                  Alert velocity
                </p>
                <span className="text-[11.5px] font-medium text-[#94A3B8]">Last 24h</span>
              </div>
              <div className="mt-3.5 grid grid-cols-12 items-end gap-1.5">
                {[3, 4, 3, 5, 6, 4, 7, 5, 6, 8, 7, 5].map((bar, idx) => (
                  <div
                    key={idx}
                    className="rounded-[6px] bg-[linear-gradient(180deg,#38A9F2_0%,#2563EB_100%)]"
                    style={{ height: `${bar * 7}px` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Admin Bridge */}
          <div className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7C5CF0]">
                  Admin bridge
                </p>
                <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Internal checks for portal admins
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[#F1F5FD] px-2.5 py-0.5 text-[11px] font-semibold text-[#64748B]">
                Internal
              </span>
            </div>

            <div className="mt-4 space-y-2.5">
              {adminQueue.map(([title, owner, status], index) => (
                <div
                  key={title}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] px-4 py-3"
                >
                  <div className="min-w-0">
                    <p className="truncate text-[14px] font-semibold text-[#0F172A]">{title}</p>
                    <p className="mt-0.5 text-[12.5px] text-[#6B7280]">{owner}</p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                      index === 0
                        ? "bg-[#FDF3D8] text-[#B45309]"
                        : index === 1
                          ? "bg-[#EEF4FF] text-[#2563EB]"
                          : "bg-[#E3F7EE] text-[#15803D]"
                    }`}
                  >
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Next Tools */}
          <div className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                Next tools
              </p>
              <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                Move from monitoring to action
              </p>
            </div>

            <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {nextTools.map(([href, label], index) => (
                <Link
                  key={label}
                  href={href}
                  className="rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] p-3.5 transition hover:border-[#C7D7F7] hover:bg-white"
                >
                  <span
                    className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-semibold ${
                      index === 0
                        ? "bg-[#2563EB] text-white shadow-[0_4px_12px_rgba(37,99,235,0.22)]"
                        : "border border-[rgba(99,115,160,0.2)] bg-[#F1F5FD] text-[#64748B]"
                    }`}
                  >
                    {`0${index + 1}`}
                  </span>
                  <p className="mt-2 text-[14px] font-bold text-[#0F172A]">{label}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PortalShell>
  );
}
