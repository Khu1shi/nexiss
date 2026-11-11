import Link from "next/link";

import { PortalShell } from "@/components/portal-shell";

const kpis = [
  { label: "GEO score", value: "78.4", delta: "+12.6%" },
  { label: "Tracked prompts", value: "10.2k", delta: "+340" },
  { label: "Citation share", value: "31%", delta: "+4.2%" },
  { label: "Active competitors", value: "18", delta: "Live" }
] as const;

const engineRows = [
  ["ChatGPT", "34%"],
  ["Gemini", "26%"],
  ["Claude", "21%"],
  ["Perplexity", "19%"]
] as const;

const opportunities = [
  ["Date-night cafe queries improving", "High impact", "Andheri West"],
  ["Coffee quality citation gap detected", "Action now", "Andheri East"],
  ["Competitor answer share rising", "Watchlist", "Lokhandwala"]
] as const;

const competitorRankings = [
  ["Subko Andheri", "#1", "38% share"],
  ["Blue Tokai Andheri", "#2", "24% share"],
  ["Leaping Windows Cafe", "#3", "21% share"],
  ["Your Cafe", "#5", "9% share"]
] as const;

const nextSurfaces = [
  ["/global-monitoring", "Global Monitoring"],
  ["/geo-ranking-check", "Ranking Check"],
  ["/geo-boost", "GEO Boost"],
  ["/reports", "Reporting"]
] as const;

export default function DashboardPage() {
  return (
    <PortalShell
      role="user"
      title="Workspace overview"
      subtitle="A user-facing GEO operations dashboard for cafe teams, with room for a separate internal admin portal to manage onboarding, launch ops, and workspace control."
    >
      <div className="grid gap-4 xl:grid-cols-[1.08fr_0.92fr]">
        <div className="min-w-0 flex flex-col gap-4">
          {/* 4 KPI Cards */}
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {kpis.map((item, index) => (
              <div
                key={item.label}
                className="min-w-0 flex flex-col justify-between rounded-[20px] border border-[rgba(99,115,160,0.14)] bg-white p-3.5 shadow-[0_8px_30px_rgba(30,64,175,0.06)] xl:p-4"
              >
                <p className="text-[10px] font-semibold uppercase leading-snug tracking-[0.09em] text-[#6B7280] xl:text-[10.5px]">
                  {item.label}
                </p>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-1.5">
                  <p className="text-[24px] font-extrabold leading-none tracking-[-0.03em] text-[#0F172A] 2xl:text-[26px]">
                    {item.value}
                  </p>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[10.5px] font-semibold ${
                      index === 3
                        ? "bg-[#E3F7EE] text-[#15803D]"
                        : "bg-[#EEF4FF] text-[#2563EB]"
                    }`}
                  >
                    {item.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Visibility Trend Card */}
          <div className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex flex-col gap-3 border-b border-[rgba(99,115,160,0.12)] pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Visibility trend
                </p>
                <p className="mt-1.5 text-[17px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  GEO score and answer share movement
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2.5 text-[12.5px] text-[#94A3B8]">
                <span>30 day trend</span>
                <span className="rounded-full border border-[#D5E2FA] bg-[#EEF4FF] px-3 py-1 text-[11.5px] font-semibold text-[#2563EB]">
                  User portal
                </span>
              </div>
            </div>

            <div className="mt-4 grid gap-4 xl:grid-cols-[1.22fr_0.78fr]">
              <div className="min-w-0 rounded-[18px] border border-[#D5E2FA] bg-[#F4F8FF]/70 p-4">
                <svg viewBox="0 0 520 220" className="h-52 w-full">
                  <line x1="0" y1="55" x2="520" y2="55" stroke="rgba(99,115,160,0.12)" strokeWidth="1" />
                  <line x1="0" y1="110" x2="520" y2="110" stroke="rgba(99,115,160,0.12)" strokeWidth="1" />
                  <line x1="0" y1="165" x2="520" y2="165" stroke="rgba(99,115,160,0.12)" strokeWidth="1" />
                  <path
                    d="M0 156 C52 150, 92 146, 132 128 S218 108, 270 94 S378 76, 520 42"
                    fill="none"
                    stroke="#38A9F2"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0 170 C62 176, 108 170, 160 158 S264 144, 324 126 S420 108, 520 94"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0 182 C62 186, 118 188, 176 180 S296 168, 352 150 S450 132, 520 126"
                    fill="none"
                    stroke="#7C5CF0"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="min-w-0 rounded-[18px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
                  AI engine split
                </p>
                <div className="mt-4 space-y-3.5">
                  {engineRows.map(([label, value]) => (
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
          </div>

          {/* Market Heatmap + Opportunity Queue */}
          <div className="grid gap-4 xl:grid-cols-[0.86fr_1.14fr]">
            <div className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                    Market heatmap
                  </p>
                  <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                    Visibility concentration by region
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-[#F1F5FD] px-2.5 py-0.5 text-[11px] font-semibold text-[#64748B]">
                  Beta
                </span>
              </div>

              <div className="mt-4 grid grid-cols-4 gap-2">
                {Array.from({ length: 16 }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-11 rounded-[12px] ${
                      index % 5 === 0
                        ? "bg-[#38A9F2]/65"
                        : index % 3 === 0
                          ? "bg-[#2563EB]/60"
                          : index % 4 === 0
                            ? "bg-[#7C5CF0]/45"
                            : "bg-[#EEF4FF]"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                    Opportunity queue
                  </p>
                  <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                    What teams should act on next
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
                {opportunities.map(([title, tag, market], index) => (
                  <div
                    key={title}
                    className="rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] px-4 py-3"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-0">
                        <p className="text-[14px] font-semibold text-[#0F172A]">{title}</p>
                        <p className="mt-0.5 text-[12.5px] text-[#6B7280]">{market}</p>
                      </div>
                      <span
                        className={`w-fit shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                          index === 0
                            ? "bg-[#E3F7EE] text-[#15803D]"
                            : index === 1
                              ? "bg-[#FDF3D8] text-[#B45309]"
                              : "bg-[#F1F5FD] text-[#64748B]"
                        }`}
                      >
                        {tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="min-w-0 flex flex-col gap-4">
          {/* Portal Architecture */}
          <div className="rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Portal architecture
                </p>
                <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  User and admin split awareness
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[#F1F5FD] px-2.5 py-0.5 text-[11px] font-semibold text-[#64748B]">
                Planning
              </span>
            </div>

            <div className="mt-4 space-y-2.5">
              <div className="rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] p-3.5">
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Cafe and team portal
                </p>
                <p className="mt-1.5 text-[13px] leading-[1.55] text-[#5B6472]">
                  Dashboards, prompt monitoring, competitor cafe visibility, recommendations, and exports.
                </p>
              </div>
              <div className="rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] p-3.5">
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#7C5CF0]">
                  Internal admin portal
                </p>
                <p className="mt-1.5 text-[13px] leading-[1.55] text-[#5B6472]">
                  Workspace approvals, launch sequencing, access control, investor-facing review, and intake management.
                </p>
              </div>
            </div>
          </div>

          {/* Competitive Rankings */}
          <div className="rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Competitive rankings
                </p>
                <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Cafe position in current answer sets
                </p>
              </div>
              <Link
                href="/competitor-analysis"
                className="shrink-0 text-[12.5px] font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
              >
                Open analysis
              </Link>
            </div>

            <div className="mt-4 space-y-2.5">
              {competitorRankings.map(([brand, rank, share], index) => (
                <div
                  key={brand}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] px-4 py-3"
                >
                  <div className="min-w-0">
                    <p className="truncate text-[14px] font-semibold text-[#0F172A]">{brand}</p>
                    <p className="mt-0.5 text-[12.5px] text-[#6B7280]">{share}</p>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                      index === 0
                        ? "bg-[#EEF4FF] text-[#2563EB]"
                        : "border border-[rgba(99,115,160,0.14)] bg-white text-[#4B5563]"
                    }`}
                  >
                    {rank}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Next Surfaces */}
          <div className="rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                  Next surfaces
                </p>
                <p className="mt-1.5 text-[16.5px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Portal rollout sequence
                </p>
              </div>
              <span className="shrink-0 text-[12px] font-semibold text-[#2563EB]">
                Roadmap aware
              </span>
            </div>

            <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {nextSurfaces.map(([href, label], index) => (
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
