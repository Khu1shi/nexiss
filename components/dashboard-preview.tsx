"use client";

import { useState } from "react";

import type { Metric } from "@/lib/placeholders";

type DashboardPreviewProps = {
  title: string;
  subtitle: string;
  metrics: Metric[];
  variant: "network" | "workflow" | "query" | "product" | "market";
};

const promptSurfaces = [
  {
    name: "ChatGPT",
    description: "High citation share",
    dotClass: "bg-sky-400"
  },
  {
    name: "Gemini",
    description: "Visibility improving",
    dotClass: "bg-amber-400"
  },
  {
    name: "Claude",
    description: "Strong date-cafe picks",
    dotClass: "bg-[#a855f7]"
  }
] as const;

export function DashboardPreview({
  title,
  subtitle,
  metrics,
  variant
}: DashboardPreviewProps) {
  if (variant === "network") {
    return (
      <CommandCenterPreview title={title} subtitle={subtitle} metrics={metrics} />
    );
  }

  if (variant === "workflow") {
    return (
      <WorkflowCommandPreview title={title} subtitle={subtitle} metrics={metrics} />
    );
  }

  if (variant === "query") {
    return (
      <QueryCommandPreview title={title} subtitle={subtitle} metrics={metrics} />
    );
  }

  if (variant === "product") {
    return (
      <ProductCommandPreview title={title} subtitle={subtitle} metrics={metrics} />
    );
  }

  return (
    <MarketCommandPreview title={title} subtitle={subtitle} metrics={metrics} />
  );
}

function CommandCenterPreview({
  title,
  subtitle,
  metrics
}: Omit<DashboardPreviewProps, "variant">) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedSurface = promptSurfaces[selectedIndex] ?? promptSurfaces[0];

  return (
    <div className="w-full rounded-[30px] border border-slate-200/90 bg-white p-5 shadow-[0_14px_40px_rgba(31,111,255,0.06),0_2px_8px_rgba(15,23,42,0.03)] sm:p-6 xl:rounded-[40px] xl:p-7">
      <div className="flex flex-col gap-3 border-b border-slate-200/80 pb-5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="min-w-0">
          <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            {title}
          </p>
          <p className="mt-2 max-w-xl text-[14px] leading-[1.55] text-slate-600">
            {subtitle}
          </p>
        </div>
        <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-sky-200/90 bg-[#f0f7ff] px-3.5 py-1 font-mono text-xs font-medium text-[#2563eb]">
          Preview
        </span>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
        {metrics.map((metric) => {
          const isPositive = metric.value.trim().startsWith("+");
          return (
            <div
              key={metric.label}
              className="flex flex-col justify-between rounded-[22px] border border-slate-200/90 bg-white px-4 py-4 shadow-[0_1px_2px_rgba(15,23,42,0.02)] sm:min-h-[116px] xl:rounded-[26px] xl:px-5 xl:py-5"
            >
              <p className="font-mono text-[10.5px] font-medium uppercase tracking-[0.12em] text-slate-400">
                {metric.label}
              </p>
              <p
                className={`mt-3 text-[1.9rem] font-bold leading-none tracking-tight xl:text-[2.25rem] ${
                  isPositive ? "text-[#16a34a]" : "text-ink"
                }`}
              >
                {metric.value}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-5 rounded-[24px] border border-slate-200/90 bg-[#fcfdff] p-4 sm:p-5 xl:rounded-[28px]">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
          Live prompt surfaces
        </p>

        <div className="mt-3.5 grid gap-3.5 md:grid-cols-[0.41fr_0.59fr] md:items-stretch lg:grid-cols-1 xl:grid-cols-[0.41fr_0.59fr] xl:gap-3 2xl:gap-4">
          <div className="flex flex-col justify-between gap-2.5">
            {promptSurfaces.map((surface, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={surface.name}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  aria-pressed={isSelected}
                  className={`flex w-full items-center justify-between gap-2 rounded-2xl border bg-white px-3 py-2.5 text-left transition 2xl:px-3.5 2xl:py-3 ${
                    isSelected
                      ? "border-sky-300 shadow-[0_2px_10px_rgba(56,189,248,0.12)]"
                      : "border-slate-200/90 hover:border-slate-300"
                  }`}
                >
                  <div className="min-w-0">
                    <p className="text-[13.5px] font-bold leading-tight text-ink 2xl:text-[14px]">
                      {surface.name}
                    </p>
                    <p className="mt-1 text-[11px] leading-snug text-slate-500 2xl:text-[11.5px]">
                      {surface.description}
                    </p>
                  </div>
                  <span
                    className={`h-2.5 w-2.5 shrink-0 rounded-full ${surface.dotClass}`}
                  />
                </button>
              );
            })}
          </div>

          <div
            className="relative flex min-h-[215px] items-center justify-center overflow-hidden rounded-[20px] border border-slate-200/90 bg-white sm:min-h-[240px]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)",
              backgroundSize: "22px 22px"
            }}
          >
            <svg
              viewBox="16 24 376 220"
              aria-hidden="true"
              className="h-full w-full"
            >
              {/* Translucent pastel circle fills */}
              <circle cx="168" cy="110" r="56" fill="rgba(56, 189, 248, 0.15)" />
              <circle cx="240" cy="110" r="56" fill="rgba(244, 114, 182, 0.15)" />
              <circle cx="204" cy="158" r="56" fill="rgba(129, 140, 248, 0.17)" />

              {/* Connecting lines aligned cleanly to intersection boundaries */}
              <line
                x1="28"
                y1="110"
                x2="184"
                y2="110"
                stroke="#60A5FA"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="224"
                y1="110"
                x2="376"
                y2="110"
                stroke="#F472B6"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="204"
                y1="153"
                x2="134"
                y2="223"
                stroke="#818CF8"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              {/* Dashed circle outlines */}
              <circle
                cx="168"
                cy="110"
                r="56"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="1.5"
                strokeDasharray="3.5 3.5"
                strokeLinecap="round"
              />
              <circle
                cx="240"
                cy="110"
                r="56"
                fill="none"
                stroke="#F472B6"
                strokeWidth="1.5"
                strokeDasharray="3.5 3.5"
                strokeLinecap="round"
              />
              <circle
                cx="204"
                cy="158"
                r="56"
                fill="none"
                stroke="#818CF8"
                strokeWidth="1.5"
                strokeDasharray="3.5 3.5"
                strokeLinecap="round"
              />

              {/* Center intersection point */}
              <circle cx="204" cy="126" r="6.5" fill="#4F7CFF" />
            </svg>

            <div className="pointer-events-none absolute bottom-2.5 right-2.5 rounded-xl border border-slate-200/90 bg-white/95 px-2.5 py-1.5 font-mono text-[10px] font-medium text-slate-700 shadow-[0_4px_12px_rgba(15,23,42,0.06)] 2xl:bottom-3 2xl:right-3 2xl:px-3 2xl:text-[11px]">
              {selectedSurface.name}: {selectedSurface.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkflowCommandPreview({
  title,
  subtitle,
  metrics
}: Omit<DashboardPreviewProps, "variant">) {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      step: "01",
      title: "Brand",
      note: "Entities, solutions, categories"
    },
    {
      step: "02",
      title: "AI Model",
      note: "ChatGPT, Gemini, Claude"
    },
    {
      step: "03",
      title: "AI Response",
      note: "Mentions, citations, framing"
    },
    {
      step: "04",
      title: "GEO Ranking",
      note: "Brand visibility score & movement"
    }
  ];

  return (
    <div className="w-full rounded-[28px] border border-slate-200/90 bg-white p-6 shadow-[0_6px_24px_rgba(15,23,42,0.03)] lg:p-[28px]">
      <div className="flex flex-col gap-3 border-b border-slate-200/80 pb-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="min-w-0">
          <p className="font-mono text-[11.5px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            {title}
          </p>
          <p className="mt-1 text-[12.5px] leading-[1.4] text-slate-600 lg:text-[13px]">
            {subtitle}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
          className="inline-flex w-fit shrink-0 items-center rounded-full border border-sky-200/90 bg-[#f0f7ff] px-3.5 py-1 font-mono text-[11px] font-medium text-[#2563eb] transition hover:border-sky-300 hover:bg-sky-50"
        >
          Preview
        </button>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
        {metrics.map((metric) => {
          const isPositiveOrLive =
            metric.value.trim().startsWith("+") ||
            metric.value.trim().toLowerCase() === "live";
          return (
            <div
              key={metric.label}
              className="flex flex-col justify-between rounded-[19px] border border-slate-200/85 bg-white px-4 py-3.5 sm:min-h-[94px] lg:px-5 lg:py-4"
            >
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400">
                {metric.label}
              </p>
              <p
                className={`mt-2 text-[26px] font-bold leading-none tracking-tight lg:text-[28px] ${
                  isPositiveOrLive ? "text-[#16a34a]" : "text-ink"
                }`}
              >
                {metric.value}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-4 rounded-[18px] border border-slate-200/85 bg-white p-3.5 lg:p-4">
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
          {steps.map((item, index) => {
            const isActive = index === activeStep;
            return (
              <div
                key={item.title}
                onClick={() => setActiveStep(index)}
                className={`relative flex cursor-pointer flex-col justify-start rounded-[14px] border bg-white p-3.5 shadow-[0_2px_8px_rgba(15,23,42,0.02)] transition lg:min-h-[107px] ${
                  isActive
                    ? "border-sky-300/90 shadow-[0_4px_12px_rgba(56,189,248,0.1)]"
                    : "border-slate-200/85 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10.5px] font-medium text-slate-400">
                    {item.step}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                </div>
                <p className="mt-2.5 text-[13.5px] font-semibold leading-tight text-ink">
                  {item.title}
                </p>
                <p className="mt-1 text-[11.5px] leading-[1.35] text-slate-500">
                  {item.note}
                </p>
                {index < steps.length - 1 ? (
                  <div className="pointer-events-none absolute -right-3 top-1/2 hidden h-px w-3 -translate-y-1/2 bg-sky-300/80 lg:block" />
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mt-3 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <div className="rounded-[12px] border border-sky-200/80 bg-[#f0f9ff] px-4 py-3.5 lg:min-h-[96px]">
            <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#0284c7]">
              Signal Captured
            </p>
            <p className="mt-1.5 text-[12.5px] leading-[1.45] text-slate-600">
              Prompt frequency, answer placement, citations, and competitor presence.
            </p>
          </div>
          <div className="rounded-[12px] border border-purple-200/80 bg-[#f7f4ff] px-4 py-3.5 lg:min-h-[96px]">
            <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#7c3aed]">
              Optimization Output
            </p>
            <p className="mt-1.5 text-[12.5px] leading-[1.45] text-slate-600">
              Ranked visibility opportunities with impact and confidence scores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QueryCommandPreview({
  title,
  subtitle,
  metrics
}: Omit<DashboardPreviewProps, "variant">) {
  const rows = [
    { brand: "Linear Solutions", rank: "#1", share: "38%", badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200/70" },
    { brand: "Stripe Billing", rank: "#2", share: "24%", badgeClass: "bg-sky-50 text-sky-700 border-sky-200/70" },
    { brand: "Datadog Cloud", rank: "#3", share: "21%", badgeClass: "bg-purple-50 text-purple-700 border-purple-200/70" },
    { brand: "Your Brand", rank: "#5", share: "9%", badgeClass: "bg-slate-100 text-slate-600 border-slate-200/80" }
  ] as const;

  return (
    <div className="w-full rounded-[32px] border border-slate-200/90 bg-white p-6 shadow-[0_6px_24px_rgba(15,23,42,0.035)] lg:p-9">
      <div className="flex flex-col gap-3 border-b border-slate-200/80 pb-5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="min-w-0">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.13em] text-slate-400">
            {title}
          </p>
          <p className="mt-1.5 text-[14.5px] leading-[1.5] text-[#52627a]">
            {subtitle}
          </p>
        </div>
        <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-sky-200/90 bg-[#eaf4ff] px-3.5 py-1 font-mono text-[11px] font-medium text-[#2563eb]">
          Preview
        </span>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-3 lg:gap-4">
        {metrics.map((metric) => {
          const isPositive = metric.value.trim().startsWith("+");
          return (
            <div
              key={metric.label}
              className="flex flex-col justify-between rounded-[22px] border border-[#dfe6f0] bg-white px-4 py-4 sm:min-h-[104px] lg:px-5"
            >
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400">
                {metric.label}
              </p>
              <p
                className={`mt-2 text-[28px] font-bold leading-none tracking-tight lg:text-[31px] ${
                  isPositive ? "text-[#059669]" : "text-ink"
                }`}
              >
                {metric.value}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-5 rounded-[24px] border border-[#dfe6f0] bg-white p-4 sm:p-6">
        <div className="overflow-x-auto">
          <div className="min-w-[340px]">
            <div className="grid grid-cols-[1.7fr_0.6fr_0.6fr] items-center gap-3 pb-3.5 font-mono text-[10.5px] font-medium uppercase tracking-[0.14em] text-slate-400">
              <span>Brand</span>
              <span className="text-center">Rank</span>
              <span className="text-right">Share</span>
            </div>
            <div className="space-y-2.5">
              {rows.map((row) => (
                <div
                  key={row.brand}
                  className="grid min-h-[54px] grid-cols-[1.7fr_0.6fr_0.6fr] items-center gap-3 rounded-[15px] border border-slate-200/90 bg-white px-4"
                >
                  <span className="text-[14.5px] font-semibold text-ink">
                    {row.brand}
                  </span>
                  <div className="flex justify-center">
                    <span
                      className={`inline-flex rounded-full border px-2.5 py-0.5 text-[11.5px] font-semibold ${row.badgeClass}`}
                    >
                      {row.rank}
                    </span>
                  </div>
                  <span className="text-right text-[14px] font-medium text-slate-600">
                    {row.share}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const productEngines = [
  { name: "ChatGPT", share: "34%" },
  { name: "Gemini", share: "26%" },
  { name: "Claude", share: "21%" },
  { name: "Perplexity", share: "19%" }
] as const;

const productFeedItems = [
  {
    label: "Citation loss in high-intent enterprise prompt series",
    tag: "High impact",
    tagClass: "border border-[#E2E8F0] bg-white text-[#0F172A]"
  },
  {
    label: "Gemini rank drop for SOC2 advisory queries",
    tag: "Action now",
    tagClass: "border border-[#FCD34D] bg-[#FEF3C7] text-[#B45309]"
  },
  {
    label: "Competitor surge in multi-agent governance queries",
    tag: "Watchlist",
    tagClass: "border border-[#BFDBFE] bg-[#EAF4FF] text-[#2563EB]"
  }
] as const;

const productHeatmapTiles = Array.from({ length: 16 }, (_, index) => {
  if (index % 5 === 0) return "bg-[#93D3F8]";
  if (index % 3 === 0) return "bg-[#6FA0F5]";
  return "bg-[#E2E8F0]";
});

const productCompetitors = [
  { name: "Category Incumbent A", rank: "#1", delta: "+4.1", negative: false },
  { name: "Challenger Solution B", rank: "#2", delta: "+2.2", negative: false },
  { name: "Your Brand", rank: "#4", delta: "-0.8", negative: true }
] as const;

function ProductCommandPreview({
  title,
  subtitle,
  metrics
}: Omit<DashboardPreviewProps, "variant">) {
  return (
    <div className="w-full rounded-[24px] border border-[#DDE3FA] bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:rounded-[40px] sm:p-8 lg:p-10">
      <div className="flex flex-col gap-3 border-b border-[#EEF0F5] pb-5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="min-w-0">
          <p className="font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-[#64748B]">
            {title}
          </p>
          <p className="mt-1.5 text-[13.5px] leading-[1.45] text-[#64748B] lg:text-[14px]">
            {subtitle}
          </p>
        </div>
        <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-[#BFDBFE] bg-[#EAF4FF] px-3.5 py-1 font-mono text-[12px] font-medium text-[#1D4E89]">
          Preview
        </span>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-5">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-[20px] border border-[#E5E7EB] bg-white p-5 sm:rounded-[28px] lg:p-6"
          >
            <p className="font-mono text-[12px] font-medium uppercase tracking-[0.06em] text-[#94A3B8]">
              {metric.label}
            </p>
            <p className="mt-2.5 text-[34px] font-bold leading-none tracking-tight text-[#0F172A] lg:text-[38px]">
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.45fr_1fr] lg:items-stretch lg:gap-9">
        <div className="flex flex-col gap-6">
          <div className="rounded-[20px] border border-[#E5E7EB] bg-white p-5 sm:rounded-[28px] lg:p-6">
            <div className="flex items-center justify-between gap-3">
              <p className="font-mono text-[12px] font-medium uppercase tracking-[0.06em] text-[#94A3B8]">
                GEO Score
              </p>
              <span className="rounded-full bg-[#E8F7EE] px-2.5 py-1 font-mono text-[12px] font-medium text-[#15803D]">
                +12.6%
              </span>
            </div>
            <p className="mt-2 text-[34px] font-bold leading-none tracking-tight text-[#0F172A] lg:text-[38px]">
              78.4
            </p>
            <div className="mt-5 h-2.5 w-full overflow-hidden rounded-full bg-[#EEF0F4]">
              <div className="h-full w-[78.4%] rounded-full bg-[linear-gradient(90deg,#3B5BDB_0%,#5BB8F5_55%,#D4559B_100%)]" />
            </div>
          </div>

          <div className="rounded-[20px] border border-[#E5E7EB] bg-white p-5 sm:rounded-[28px] lg:p-6">
            <div className="flex items-center justify-between gap-3">
              <p className="font-mono text-[12px] font-medium uppercase tracking-[0.06em] text-[#94A3B8]">
                Ranking Chart
              </p>
              <p className="font-mono text-[12px] text-[#94A3B8]">30 day trend</p>
            </div>
            <div className="mt-4 h-[130px] w-full bg-white">
              <svg
                viewBox="0 0 460 130"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="h-full w-full"
              >
                <line
                  x1="0"
                  y1="28"
                  x2="460"
                  y2="28"
                  stroke="#E2E8F0"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <line
                  x1="0"
                  y1="65"
                  x2="460"
                  y2="65"
                  stroke="#E2E8F0"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <line
                  x1="0"
                  y1="102"
                  x2="460"
                  y2="102"
                  stroke="#E2E8F0"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <path
                  d="M 55 96 C 145 94, 210 92, 265 76 C 325 58, 360 32, 414 28"
                  fill="none"
                  stroke="#5BB8F5"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 55 104 C 150 103, 220 101, 280 90 C 335 80, 370 64, 414 52"
                  fill="none"
                  stroke="#E879B9"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-start rounded-[20px] border border-[#E5E7EB] bg-white p-5 sm:rounded-[28px] lg:p-6">
            <p className="font-mono text-[12px] font-medium uppercase tracking-[0.06em] text-[#94A3B8]">
              Opportunity Feed
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {productFeedItems.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-[16px] bg-[#F8FAFC] px-4 py-3.5"
                >
                  <span className="text-[13.5px] font-normal text-[#0F172A]">
                    {item.label}
                  </span>
                  <span
                    className={`shrink-0 rounded-[8px] px-2.5 py-1 font-mono text-[12px] font-medium ${item.tagClass}`}
                  >
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-[20px] border border-[#E5E7EB] bg-white p-5 sm:rounded-[28px] lg:p-6">
            <p className="font-mono text-[12px] font-medium uppercase tracking-[0.06em] text-[#94A3B8]">
              AI Engine Breakdown
            </p>
            <div className="mt-4 space-y-4">
              {productEngines.map((engine) => (
                <div key={engine.name}>
                  <div className="flex items-center justify-between text-[14px]">
                    <span className="font-normal text-[#0F172A]">{engine.name}</span>
                    <span className="font-mono text-[13.5px] font-semibold text-[#0F172A]">
                      {engine.share}
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 w-full rounded-full bg-[#EEF0F4]">
                    <div
                      className="h-2 rounded-full bg-[#3B5BDB]"
                      style={{ width: engine.share }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[20px] border border-[#E5E7EB] bg-white p-5 sm:rounded-[28px] lg:p-6">
            <p className="font-mono text-[12px] font-medium uppercase tracking-[0.06em] text-[#94A3B8]">
              Region Heatmap
            </p>
            <div className="mt-4 grid grid-cols-4 gap-2.5">
              {productHeatmapTiles.map((tileClass, index) => (
                <div key={index} className={`h-11 rounded-[12px] ${tileClass}`} />
              ))}
            </div>
          </div>

          <div className="rounded-[20px] border border-[#E5E7EB] bg-white p-5 sm:rounded-[28px] lg:p-6">
            <p className="font-mono text-[12px] font-medium uppercase tracking-[0.06em] text-[#94A3B8]">
              Competitor Pulse
            </p>
            <div className="mt-4 space-y-2.5">
              {productCompetitors.map((comp) => (
                <div
                  key={comp.name}
                  className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 rounded-[16px] bg-[#F8FAFC] px-4 py-3"
                >
                  <span className="truncate text-[14px] font-semibold text-[#0F172A]">
                    {comp.name}
                  </span>
                  <span className="font-mono text-[12.5px] text-[#94A3B8]">
                    {comp.rank}
                  </span>
                  <span
                    className={`font-mono text-[13px] font-semibold ${
                      comp.negative ? "text-[#E11D48]" : "text-[#15803D]"
                    }`}
                  >
                    {comp.delta}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const marketChartDots = [
  { cx: 212, cy: 82, color: "#5BB8F5" },
  { cx: 344, cy: 64, color: "#2F5BEA" },
  { cx: 464, cy: 92, color: "#D4559B" },
  { cx: 332, cy: 162, color: "#7C5CE6" },
  { cx: 452, cy: 166, color: "#F0A93B" }
] as const;

function MarketCommandPreview({
  title,
  subtitle,
  metrics
}: Omit<DashboardPreviewProps, "variant">) {
  return (
    <div className="w-full rounded-[28px] border border-[#E3E8F5] bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:rounded-[36px] sm:p-8">
      <div className="flex flex-col gap-3 border-b border-[#EEF0F5] pb-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="min-w-0">
          <p className="font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-[#64748B]">
            {title}
          </p>
          <p className="mt-1 text-[13.5px] leading-[1.4] text-[#64748B] lg:text-[14px]">
            {subtitle}
          </p>
        </div>
        <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-[#BFDBFE] bg-[#EAF4FF] px-3.5 py-1 font-mono text-[12px] font-medium text-[#1D4E89]">
          Preview
        </span>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-3 lg:gap-4">
        {metrics.map((metric) => {
          const isPositive = metric.value.trim().startsWith("+");
          return (
            <div
              key={metric.label}
              className="flex flex-col justify-between rounded-[20px] border border-[#E5E7EB] bg-white px-5 py-4 sm:rounded-[24px]"
            >
              <p className="whitespace-nowrap font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-[#94A3B8]">
                {metric.label}
              </p>
              <p
                className={`mt-2.5 text-[30px] font-bold leading-none tracking-tight lg:text-[34px] ${
                  isPositive ? "text-[#2F8F5B]" : "text-[#0F172A]"
                }`}
              >
                {metric.value}
              </p>
            </div>
          );
        })}
      </div>

      <div
        className="mt-5 h-[180px] overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-[#FAFBFD] sm:h-[195px]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #EEF0F5 1px, transparent 1px), linear-gradient(to bottom, #EEF0F5 1px, transparent 1px)",
          backgroundSize: "26px 26px"
        }}
      >
        <svg
          viewBox="0 0 700 195"
          aria-hidden="true"
          className="h-full w-full"
        >
          <path
            d="M 175 108 C 215 74, 265 74, 320 132 C 365 182, 390 208, 430 196 C 468 184, 498 140, 525 104"
            fill="none"
            stroke="#5BB8F5"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M 175 154 C 245 152, 285 146, 335 130 C 380 116, 420 110, 462 118 C 488 123, 508 130, 525 138"
            fill="none"
            stroke="#8B7CF0"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {marketChartDots.map((dot) => (
            <circle
              key={`${dot.cx}-${dot.cy}`}
              cx={dot.cx}
              cy={dot.cy}
              r="5"
              fill={dot.color}
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
