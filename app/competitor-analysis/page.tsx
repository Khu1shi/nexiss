import Link from "next/link";

import { PortalShell } from "@/components/portal-shell";

const competitiveKpis = [
  { label: "Tracked competitors", value: "28", delta: "6 high-priority", tone: "bg-[#EEF4FF] text-[#2563EB]" },
  { label: "Avg rank gap", value: "1.9", delta: "-0.4 narrowed", tone: "bg-[#E3F7EE] text-[#15803D]" },
  { label: "Citation overlap", value: "37%", delta: "+5.2 this week", tone: "bg-[#EEEAFE] text-[#7C5CF0]" },
  { label: "Contested prompts", value: "412", delta: "78 active today", tone: "bg-[#FDF3D8] text-[#B45309]" }
] as const;

const competitorLeaderboard = [
  ["Subko Andheri", "#1.8", "42%", "+2.1"],
  ["Blue Tokai Andheri", "#2.3", "31%", "+1.6"],
  ["Leaping Windows Cafe", "#2.9", "24%", "+1.2"],
  ["Prithvi Cafe Juhu", "#3.6", "18%", "+0.9"],
  ["Your Cafe", "#4.1", "16%", "+1.4"]
] as const;

const engineWins = [
  ["ChatGPT", 44, 26, 18, 12],
  ["Gemini", 39, 28, 21, 12],
  ["Claude", 33, 25, 24, 18],
  ["Perplexity", 35, 22, 26, 17]
] as const;

const citationSources = [
  ["Competitor blogs", 32],
  ["Review sites", 24],
  ["Docs and knowledge bases", 19],
  ["Industry media", 15],
  ["Community threads", 10]
] as const;

const contestedPrompts = [
  ["Best cafes in Andheri for dates", "Subko Andheri", "Blue Tokai Andheri", "Medium"],
  ["Best cafes in Andheri for work", "Leaping Windows Cafe", "Subko Andheri", "High"],
  ["Best coffee in Andheri West", "Blue Tokai Andheri", "Your Cafe", "Medium"],
  ["Top aesthetic cafes near Andheri", "Subko Andheri", "Prithvi Cafe Juhu", "High"],
  ["Best budget cafes in Andheri", "Leaping Windows Cafe", "Blue Tokai Andheri", "Watch"],
  ["Late-night cafes in Andheri", "Blue Tokai Andheri", "Subko Andheri", "Watch"]
] as const;

const responseQueue = [
  ["Create comparison page for date-night cafe prompts", "Content", "Today", "Assigned"],
  ["Add proof blocks to work-friendly cafe pages", "Operations", "Tomorrow", "In review"],
  ["Refresh structured data on competitor-contested pages", "Technical", "2 days", "Planned"],
  ["Expand citation assets for coffee-quality prompt set", "Content", "3 days", "Assigned"]
] as const;

const sentimentTrail: ReadonlyArray<readonly [string, number]> = [
  ["Mon", 58],
  ["Tue", 62],
  ["Wed", 64],
  ["Thu", 69],
  ["Fri", 72],
  ["Sat", 70],
  ["Sun", 75]
];

const adminSignals = [
  ["Competitor surge in Mumbai cohort", "Escalate", "7 min ago"],
  ["Model behavior shift in Gemini answer style", "Review", "15 min ago"],
  ["Investor request: competitor snapshot export", "Ready", "24 min ago"]
] as const;

export default function CompetitorAnalysisPage() {
  return (
    <PortalShell
      role="user"
      title="Competitor Intelligence"
      subtitle="Understand which cafes AI systems prefer, where they outrank you, and what optimization responses can close recommendation gaps."
    >
      <div className="grid items-start gap-4 xl:grid-cols-[1.12fr_0.88fr]">
        {/* Left Column */}
        <div className="min-w-0 flex flex-col gap-4">
          {/* 4 Competitive KPIs */}
          <div className="grid gap-3.5 sm:grid-cols-2 xl:grid-cols-4">
            {competitiveKpis.map((item) => (
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

          {/* Competitor Leaderboard */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex flex-col gap-3 border-b border-[rgba(99,115,160,0.12)] pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Competitor leaderboard
                </p>
                <p className="mt-1.5 text-[17px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Top cafes recommended across tracked prompt clusters
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
                    {["Cafe", "Avg rank", "Answer share", "7d movement"].map((head) => (
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
                  {competitorLeaderboard.map(([brand, rank, share, movement], index) => (
                    <tr
                      key={brand}
                      className="border-b border-[rgba(99,115,160,0.1)] last:border-b-0"
                    >
                      <td className="py-3.5 pr-4 text-[13.5px] font-semibold text-[#0F172A]">
                        {brand}
                      </td>
                      <td className="py-3.5 pr-4 text-[13.5px] text-[#5B6472]">{rank}</td>
                      <td className="py-3.5 pr-4 text-[13.5px] text-[#5B6472]">{share}</td>
                      <td className="py-3.5 pr-4">
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                            index === 0
                              ? "bg-rose-50 text-rose-600"
                              : brand === "Your Cafe"
                                ? "bg-[#E3F7EE] text-[#15803D]"
                                : "bg-[#EEF4FF] text-[#2563EB]"
                          }`}
                        >
                          {movement}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {[
                ["Top-3 prompt overlap", "224"],
                ["Net gap closed", "+17"],
                ["Citation wins this week", "39"],
                ["Prompt clusters monitored", "52"]
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

          {/* Contested Prompt Map */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex flex-col gap-3 border-b border-[rgba(99,115,160,0.12)] pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Contested prompt map
                </p>
                <p className="mt-1.5 text-[17px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Prompts where competitor dominance can be challenged
                </p>
              </div>
              <Link
                href="/geo-boost"
                className="shrink-0 text-[13px] font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
              >
                Open GEO boost
              </Link>
            </div>

            <div className="mt-4 space-y-2.5">
              {contestedPrompts.map(([prompt, leader, challenger, urgency], index) => (
                <div
                  key={prompt}
                  className="rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] px-4 py-3.5"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0">
                      <p className="text-[14px] font-semibold text-[#0F172A]">{prompt}</p>
                      <p className="mt-0.5 text-[12.5px] text-[#6B7280]">
                        Leader: {leader} | Challenger: {challenger}
                      </p>
                    </div>
                    <span
                      className={`w-fit shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                        urgency === "High"
                          ? "bg-rose-50 text-rose-600"
                          : urgency === "Medium"
                            ? "bg-[#FDF3D8] text-[#B45309]"
                            : "bg-[#F1F5FD] text-[#64748B]"
                      }`}
                    >
                      {urgency}
                    </span>
                  </div>
                  <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-[#E5E9F2]">
                    <div
                      className={`h-full rounded-full ${
                        index % 3 === 0
                          ? "bg-[linear-gradient(90deg,#38A9F2_0%,#2563EB_100%)]"
                          : index % 3 === 1
                            ? "bg-[linear-gradient(90deg,#2563EB_0%,#7C5CF0_100%)]"
                            : "bg-[linear-gradient(90deg,#7C5CF0_0%,#A855F7_100%)]"
                      }`}
                      style={{ width: `${74 - index * 8}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>

        {/* Right Column */}
        <div className="min-w-0 flex flex-col gap-4">
          {/* Engine Win Distribution */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Engine win distribution
                </p>
                <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Share of wins by engine and top competitors
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[#EEF4FF] px-2.5 py-0.5 text-[11px] font-semibold text-[#2563EB]">
                Live
              </span>
            </div>

            <div className="mt-4 space-y-3.5">
              {engineWins.map(([engine, a, b, c, d]) => (
                <div key={engine}>
                  <div className="mb-1.5 flex items-center justify-between text-[13px] text-[#4B5563]">
                    <span className="font-medium">{engine}</span>
                    <span className="font-semibold text-[#0F172A]">{a}% lead share</span>
                  </div>
                  <div className="flex h-2.5 overflow-hidden rounded-full bg-[#E5E9F2]">
                    <div className="bg-[#38A9F2]" style={{ width: `${a}%` }} />
                    <div className="bg-[#2563EB]" style={{ width: `${b}%` }} />
                    <div className="bg-[#7C5CF0]" style={{ width: `${c}%` }} />
                    <div className="bg-[#A855F7]" style={{ width: `${d}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Citation Source Mix */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Citation source mix
                </p>
                <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Where competitors are sourcing answer authority
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[#EEEAFE] px-2.5 py-0.5 text-[11px] font-semibold text-[#7C5CF0]">
                Weekly
              </span>
            </div>
            <div className="mt-4 space-y-3">
              {citationSources.map(([source, value], index) => (
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

          {/* Response Queue */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Response queue
                </p>
                <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Action plan to reclaim recommendation share
                </p>
              </div>
              <Link
                href="/reports"
                className="shrink-0 text-[12.5px] font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
              >
                Export queue
              </Link>
            </div>
            <div className="mt-4 space-y-2.5">
              {responseQueue.map(([task, lane, eta, status]) => (
                <div
                  key={task}
                  className="rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] px-4 py-3"
                >
                  <p className="text-[13.5px] font-semibold text-[#0F172A]">{task}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px]">
                    <span className="rounded-full bg-[#F1F5FD] px-2.5 py-0.5 font-semibold text-[#64748B]">
                      {lane}
                    </span>
                    <span className="rounded-full bg-[#EEF4FF] px-2.5 py-0.5 font-semibold text-[#2563EB]">
                      {eta}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 font-semibold ${
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
              ))}
            </div>
          </article>

          {/* Cafe Momentum */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Cafe momentum
                </p>
                <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Sentiment-aligned visibility trajectory
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[#E3F7EE] px-2.5 py-0.5 text-[11px] font-semibold text-[#15803D]">
                Positive
              </span>
            </div>
            <div className="mt-4 rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] p-4">
              <div className="flex h-28 items-end gap-2">
                {sentimentTrail.map(([day, value], index) => (
                  <div key={day} className="flex w-full flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-[6px] bg-[linear-gradient(180deg,#38A9F2_0%,#2563EB_100%)]"
                      style={{ height: `${value}px`, opacity: 0.45 + index * 0.06 }}
                    />
                    <p className="text-[11px] font-medium text-[#94A3B8]">{day}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Admin Signal Handoff */}
          <article className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Admin signal handoff
                </p>
                <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Internal portal actions tied to competitor movement
                </p>
              </div>
              <Link
                href="/onboarding"
                className="shrink-0 text-[12.5px] font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
              >
                Open admin portal
              </Link>
            </div>
            <div className="mt-4 space-y-2.5">
              {adminSignals.map(([title, status, time], index) => (
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
