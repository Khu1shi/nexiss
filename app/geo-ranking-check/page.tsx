import Link from "next/link";

import { PortalShell } from "@/components/portal-shell";

const scoreCards = [
  { label: "Average rank", value: "#3.2", delta: "+0.8 this week", tone: "bg-[#E3F7EE] text-[#15803D]" },
  { label: "Tracked prompts", value: "1,284", delta: "+74 added", tone: "bg-[#EEF4FF] text-[#2563EB]" },
  { label: "Top 3 coverage", value: "46%", delta: "+6.1%", tone: "bg-[#EEEAFE] text-[#7C5CF0]" },
  { label: "Volatility index", value: "18.4", delta: "-2.3 stable", tone: "bg-[#FDF3D8] text-[#B45309]" }
] as const;

const trendSeries = [
  ["Mon", 5.8, 4.6],
  ["Tue", 5.4, 4.4],
  ["Wed", 4.9, 4.2],
  ["Thu", 4.8, 4.0],
  ["Fri", 4.4, 3.9],
  ["Sat", 4.1, 3.8],
  ["Sun", 3.8, 3.6]
] as const;

const engineRanks = [
  ["ChatGPT", 42, "#2.9"],
  ["Gemini", 26, "#3.5"],
  ["Claude", 19, "#3.9"],
  ["Perplexity", 13, "#4.2"]
] as const;

const trackedPrompts = [
  ["Best cafes in Andheri for dates", "#3", "#4", "#4", "#5", "+2"],
  ["Best cafes in Andheri for work", "#5", "#6", "#5", "#7", "+1"],
  ["Best cafes in Andheri for friends meetup", "#2", "#3", "#2", "#4", "+3"],
  ["Best coffee in Andheri West", "#6", "#8", "#7", "#9", "-1"],
  ["Best quiet cafes in Andheri East", "#4", "#5", "#6", "#6", "+1"],
  ["Best rooftop cafes in Andheri", "#7", "#9", "#7", "#8", "+2"],
  ["Best budget cafes in Andheri", "#8", "#10", "#8", "#9", "+1"],
  ["Best late-night cafes in Andheri", "#3", "#4", "#3", "#4", "+2"]
] as const;

const rankBuckets = [
  ["#1-3", 46],
  ["#4-6", 31],
  ["#7-10", 17],
  ["#11+", 6]
] as const;

const adminQueue = [
  ["Prompt cluster anomaly", "Need review", "3 min ago"],
  ["Competitor jump in India cohort", "Escalate", "12 min ago"],
  ["Citation pattern changed in Claude", "Monitor", "21 min ago"]
] as const;

const topMovers = [
  ["Best cafes in Andheri for friends meetup", "+3", "High intent"],
  ["Best cafes in Andheri for dates", "+2", "Core category"],
  ["Best late-night cafes in Andheri", "+2", "Weekend traffic"],
  ["Best cafes in Andheri for work", "+1", "Category wide"]
] as const;

const clusterMix = [
  ["Date and ambience prompts", 38],
  ["Work-friendly prompts", 27],
  ["Coffee quality comparisons", 21],
  ["Late-night long-tail prompts", 14]
] as const;

const hourlySignals = [58, 64, 62, 70, 76, 82, 88, 91, 86, 79, 74, 68] as const;

export default function GeoRankingCheckPage() {
  return (
    <PortalShell
      role="user"
      title="GEO Ranking Checker"
      subtitle="Track cafe-intent prompt ranking, compare model performance, and identify movement signals before customer perception locks in."
    >
      <div className="grid items-start gap-4 xl:grid-cols-[1.12fr_0.88fr]">
        {/* Left Column */}
        <div className="min-w-0 flex flex-col gap-4">
          {/* 4 KPI Cards (equal height, aligned bottom pills) */}
          <div className="grid gap-3.5 sm:grid-cols-2 xl:grid-cols-4">
            {scoreCards.map((item) => (
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

          {/* Prompt Ranking Timeline */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex flex-col gap-3 border-b border-[rgba(99,115,160,0.12)] pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Prompt ranking timeline
                </p>
                <p className="mt-1.5 text-[17px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  7-day movement of your cafe against competitor median
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-1.5">
                {["Dates", "Work", "Coffee", "Meetup"].map((tag, index) => (
                  <button
                    key={tag}
                    type="button"
                    className={`rounded-full px-3 py-1 text-[12px] font-semibold transition ${
                      index === 0
                        ? "bg-[#2563EB] text-white shadow-[0_4px_12px_rgba(37,99,235,0.22)]"
                        : "border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] text-[#4B5563] hover:bg-[#EEF4FF] hover:text-[#2563EB]"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-[18px] border border-[#D5E2FA] bg-[#F4F8FF]/70 p-4">
              <svg viewBox="0 0 720 260" className="h-48 w-full">
                <defs>
                  <linearGradient id="youLine" x1="0%" x2="100%">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#38A9F2" />
                  </linearGradient>
                  <linearGradient id="peerLine" x1="0%" x2="100%">
                    <stop offset="0%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#7C5CF0" />
                  </linearGradient>
                </defs>
                <g stroke="rgba(99,115,160,0.14)" strokeWidth="1">
                  <line x1="40" y1="30" x2="680" y2="30" />
                  <line x1="40" y1="85" x2="680" y2="85" />
                  <line x1="40" y1="140" x2="680" y2="140" />
                  <line x1="40" y1="195" x2="680" y2="195" />
                </g>
                <path
                  d="M40 188 C120 178, 180 170, 240 154 C300 138, 360 128, 420 116 C480 104, 560 92, 680 74"
                  fill="none"
                  stroke="url(#youLine)"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
                <path
                  d="M40 206 C130 200, 190 190, 250 178 C310 166, 380 158, 440 148 C510 136, 580 126, 680 118"
                  fill="none"
                  stroke="url(#peerLine)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
              <div className="mt-2 grid grid-cols-7 text-center text-[11px] font-medium text-[#94A3B8]">
                {trendSeries.map(([day]) => (
                  <span key={day}>{day}</span>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {[
                ["Best rank day", "Sunday", "Avg #3.6"],
                ["Most improved model", "ChatGPT", "+1.2 rank"],
                ["Signal confidence", "93%", "Stable direction"]
              ].map(([label, value, sub]) => (
                <div
                  key={label}
                  className="rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] p-3.5"
                >
                  <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#6B7280]">
                    {label}
                  </p>
                  <p className="mt-1.5 text-[18px] font-bold text-[#0F172A]">{value}</p>
                  <p className="mt-0.5 text-[12px] text-[#94A3B8]">{sub}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] p-4">
              <div className="flex items-center justify-between">
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
                  Hourly capture volume
                </p>
                <p className="text-[12px] font-medium text-[#94A3B8]">Last 12 hours</p>
              </div>
              <div className="mt-3 flex h-16 items-end gap-1.5">
                {hourlySignals.map((value, index) => (
                  <div
                    key={`signal-${index}`}
                    className="w-full rounded-t-[6px] bg-[linear-gradient(180deg,#38A9F2_0%,#2563EB_100%)]"
                    style={{ height: `${Math.max(16, value * 0.6)}%`, opacity: 0.45 + index * 0.045 }}
                  />
                ))}
              </div>
            </div>
          </article>

          {/* Tracked Prompt Table */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex flex-col gap-3 border-b border-[rgba(99,115,160,0.12)] pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Tracked prompt table
                </p>
                <p className="mt-1.5 text-[17px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Rank snapshots across AI engines
                </p>
              </div>
              <Link
                href="/reports"
                className="shrink-0 text-[13px] font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
              >
                Export to report
              </Link>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[40rem]">
                <thead>
                  <tr className="border-b border-[rgba(99,115,160,0.14)] text-left">
                    {["Prompt", "Overall", "ChatGPT", "Gemini", "Claude", "7d delta"].map((head) => (
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
                  {trackedPrompts.map(([prompt, overall, chatgpt, gemini, claude, delta], index) => (
                    <tr
                      key={prompt}
                      className="border-b border-[rgba(99,115,160,0.1)] last:border-b-0"
                    >
                      <td className="py-3.5 pr-4 text-[13.5px] font-semibold text-[#0F172A]">
                        {prompt}
                      </td>
                      <td className="py-3.5 pr-4 text-[13.5px] text-[#5B6472]">{overall}</td>
                      <td className="py-3.5 pr-4 text-[13.5px] text-[#5B6472]">{chatgpt}</td>
                      <td className="py-3.5 pr-4 text-[13.5px] text-[#5B6472]">{gemini}</td>
                      <td className="py-3.5 pr-4 text-[13.5px] text-[#5B6472]">{claude}</td>
                      <td className="py-3.5 pr-4">
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                            delta.startsWith("+")
                              ? "bg-[#E3F7EE] text-[#15803D]"
                              : index % 2 === 0
                                ? "bg-[#FDF3D8] text-[#B45309]"
                                : "bg-[#F1F5FD] text-[#64748B]"
                          }`}
                        >
                          {delta}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {[
                ["Prompts in top 3", "589"],
                ["Prompts climbed this week", "312"],
                ["Prompts dropped", "74"],
                ["Net movement", "+238"]
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
          {/* Engine Rank Share */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Engine rank share
                </p>
                <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Where top-rank wins are concentrated
                </p>
              </div>
              <Link
                href="/competitor-analysis"
                className="shrink-0 text-[12.5px] font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
              >
                Compare competitors
              </Link>
            </div>

            <div className="mt-4 space-y-3.5">
              {engineRanks.map(([engine, share, rank], index) => (
                <div key={engine}>
                  <div className="flex items-center justify-between text-[13px] text-[#4B5563]">
                    <span className="font-medium">{engine}</span>
                    <span className="font-semibold text-[#0F172A]">
                      {share}% top-3 | {rank}
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
                      style={{ width: `${share}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Top Moving Prompts */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Top moving prompts
                </p>
                <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Queries gaining recommendation momentum
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[#E3F7EE] px-2.5 py-0.5 text-[11px] font-semibold text-[#15803D]">
                Updated now
              </span>
            </div>

            <div className="mt-4 space-y-2.5">
              {topMovers.map(([prompt, lift, intent]) => (
                <div
                  key={prompt}
                  className="rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] px-4 py-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-[13.5px] font-semibold leading-snug text-[#0F172A]">
                      {prompt}
                    </p>
                    <span className="shrink-0 rounded-full bg-[#E3F7EE] px-2 py-0.5 text-[11px] font-semibold text-[#15803D]">
                      {lift}
                    </span>
                  </div>
                  <p className="mt-1 text-[12px] text-[#6B7280]">{intent}</p>
                </div>
              ))}
            </div>
          </article>

          {/* Rank Bucket Distribution */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
              Rank bucket distribution
            </p>
            <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
              Prompt coverage by recommendation tier
            </p>

            <div className="mt-4 space-y-2.5">
              {rankBuckets.map(([bucket, value], index) => (
                <div
                  key={bucket}
                  className="rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] px-4 py-3"
                >
                  <div className="flex items-center justify-between text-[13px]">
                    <span className="font-semibold text-[#4B5563]">{bucket}</span>
                    <span className="font-bold text-[#0F172A]">{value}%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#E5E9F2]">
                    <div
                      className={`h-full rounded-full ${
                        index === 0
                          ? "bg-[linear-gradient(90deg,#34C38F_0%,#38A9F2_100%)]"
                          : index === 1
                            ? "bg-[linear-gradient(90deg,#38A9F2_0%,#2563EB_100%)]"
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

            <div className="mt-4 rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] p-4">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
                Cluster mix
              </p>
              <div className="mt-3 space-y-3">
                {clusterMix.map(([cluster, value], index) => (
                  <div key={cluster}>
                    <div className="flex items-center justify-between text-[13px] text-[#4B5563]">
                      <span>{cluster}</span>
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
                                : "bg-[#F4B63F]"
                        }`}
                        style={{ width: `${value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Movement Matrix */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Movement matrix
                </p>
                <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Prompt cluster velocity heatmap
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

          {/* Admin Handoff Queue */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Admin handoff queue
                </p>
                <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Items routed to internal operations
                </p>
              </div>
              <Link
                href="/onboarding"
                className="shrink-0 text-[12.5px] font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
              >
                Open admin queue
              </Link>
            </div>
            <div className="mt-4 space-y-2.5">
              {adminQueue.map(([title, status, time], index) => (
                <div
                  key={title}
                  className="rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] px-4 py-3"
                >
                  <p className="text-[13.5px] font-semibold text-[#0F172A]">{title}</p>
                  <div className="mt-2 flex items-center justify-between text-[12px]">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                        index === 0
                          ? "bg-[#FDF3D8] text-[#B45309]"
                          : index === 1
                            ? "bg-rose-50 text-rose-600"
                            : "bg-[#F1F5FD] text-[#64748B]"
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
