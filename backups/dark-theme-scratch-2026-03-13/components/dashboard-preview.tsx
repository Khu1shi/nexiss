import type { Metric } from "@/lib/placeholders";

type DashboardPreviewProps = {
  title: string;
  subtitle: string;
  metrics: Metric[];
  variant: "network" | "workflow" | "query" | "product" | "market";
};

export function DashboardPreview({
  title,
  subtitle,
  metrics,
  variant
}: DashboardPreviewProps) {
  return (
    <div className="panel relative overflow-hidden rounded-[32px] p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,209,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(138,92,255,0.12),transparent_26%)]" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">{title}</p>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">{subtitle}</p>
          </div>
          <div className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 font-mono text-xs text-cyan">
            Preview
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-500">
                {metric.label}
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[28px] border border-white/10 bg-slate-950/70 p-5">
          {variant === "network" ? <NetworkGraphic /> : null}
          {variant === "workflow" ? <WorkflowGraphic /> : null}
          {variant === "query" ? <QueryGraphic /> : null}
          {variant === "product" ? <ProductGraphic /> : null}
          {variant === "market" ? <MarketGraphic /> : null}
        </div>
      </div>
    </div>
  );
}

function NetworkGraphic() {
  return (
    <div className="grid min-h-[24rem] gap-4 rounded-[24px] border border-cyan/10 bg-[linear-gradient(180deg,rgba(6,22,51,0.88),rgba(2,6,23,0.95))] p-4 xl:grid-cols-[0.82fr_1.18fr]">
      <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan">Live prompt surfaces</p>
        <div className="mt-4 space-y-3">
          {[
            ["ChatGPT", "High citation share"],
            ["Gemini", "Visibility improving"],
            ["Claude", "Stable answers"]
          ].map(([label, status], index) => (
            <div key={label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-3">
              <div>
                <p className="text-sm font-medium text-white">{label}</p>
                <p className="mt-1 text-xs text-slate-500">{status}</p>
              </div>
              <span
                className={`operator-chip-dot ${
                  index === 0 ? "bg-cyan" : index === 1 ? "bg-amber-300" : "bg-violet-300"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="soft-grid grid place-items-center rounded-[20px] border border-cyan/10 bg-slate-950/70">
        <div className="relative h-56 w-full max-w-lg">
          <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/50 bg-cyan/10 shadow-electric" />
          <div className="absolute left-6 top-10 h-16 w-16 rounded-full border border-electric/40 bg-electric/10" />
          <div className="absolute right-8 top-12 h-16 w-16 rounded-full border border-rose/40 bg-rose/10" />
          <div className="absolute bottom-5 left-16 h-16 w-16 rounded-full border border-violet/40 bg-violet/10" />
          <div className="absolute bottom-8 right-20 h-16 w-16 rounded-full border border-amber-400/40 bg-amber-400/10" />
          <div className="absolute left-1/2 top-1/2 h-px w-40 -translate-x-[165px] -translate-y-6 bg-gradient-to-r from-electric to-cyan" />
          <div className="absolute left-1/2 top-1/2 h-px w-36 translate-x-12 -translate-y-8 bg-gradient-to-r from-cyan to-rose" />
          <div className="absolute left-1/2 top-1/2 h-px w-32 -translate-x-[120px] translate-y-14 rotate-[35deg] bg-gradient-to-r from-violet to-cyan" />
          <div className="absolute left-1/2 top-1/2 h-px w-32 translate-x-4 translate-y-16 rotate-[-35deg] bg-gradient-to-r from-cyan to-amber-400" />
        </div>
      </div>
    </div>
  );
}

function WorkflowGraphic() {
  const steps = [
    {
      step: "01",
      title: "Brand",
      note: "Entities, pages, categories"
    },
    {
      step: "02",
      title: "AI Model",
      note: "ChatGPT, Gemini, Claude"
    },
    {
      step: "03",
      title: "AI Response",
      note: "Mentions, citations, answer framing"
    },
    {
      step: "04",
      title: "GEO Ranking",
      note: "Visibility score and movement"
    }
  ];

  return (
    <div className="rounded-[24px] border border-cyan/10 bg-[linear-gradient(180deg,rgba(6,22,51,0.88),rgba(2,6,23,0.95))] p-4">
      <div className="grid gap-4 md:grid-cols-4">
        {steps.map((item, index) => (
          <div key={item.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">
                {item.step}
              </p>
              <span className="h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_16px_rgba(79,209,255,0.9)]" />
            </div>
            <p className="mt-4 text-lg font-semibold text-white">{item.title}</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">{item.note}</p>
            {index < steps.length - 1 ? (
              <div className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-cyan to-electric md:block" />
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-cyan/10 p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan">
            Signal Captured
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Prompt frequency, answer placement, citations, and competitor presence.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-violet/10 p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-violet-300">
            Optimization Output
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Ranked visibility opportunities with impact and confidence.
          </p>
        </div>
      </div>
    </div>
  );
}

function QueryGraphic() {
  const rows = [
    ["Jasper", "#1", "38%"],
    ["Copy.ai", "#2", "24%"],
    ["HubSpot", "#3", "21%"],
    ["Your Brand", "#5", "9%"]
  ];

  return (
    <div className="rounded-[24px] border border-cyan/10 bg-[linear-gradient(180deg,rgba(6,22,51,0.88),rgba(2,6,23,0.95))] p-4">
      <div className="grid grid-cols-[1.6fr_0.6fr_0.8fr] gap-3 border-b border-white/10 pb-3 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
        <span>Brand</span>
        <span>Rank</span>
        <span>Share</span>
      </div>
      <div className="mt-2 space-y-2">
        {rows.map((row, index) => (
          <div
            key={row[0]}
            className="grid grid-cols-[1.6fr_0.6fr_0.8fr] items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-slate-300"
          >
            <span className="font-medium">{row[0]}</span>
            <span
              className={`inline-flex w-fit rounded-full px-2 py-0.5 text-xs font-semibold ${
                index === 0
                  ? "bg-emerald-500/15 text-emerald-300"
                  : index === 1
                    ? "bg-cyan/15 text-cyan"
                    : index === 2
                      ? "bg-violet/15 text-violet-300"
                      : "bg-slate-700 text-slate-200"
              }`}
            >
              {row[1]}
            </span>
            <span>{row[2]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductGraphic() {
  const engines = [
    ["ChatGPT", "34%"],
    ["Gemini", "26%"],
    ["Claude", "21%"],
    ["Perplexity", "19%"]
  ];

  return (
    <div className="grid gap-4 xl:grid-cols-12">
      <div className="space-y-4 xl:col-span-7">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-500">
                GEO Score
              </p>
              <p className="mt-2 text-3xl font-semibold text-white">78.4</p>
            </div>
            <div className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-xs text-cyan">
              +12.6%
            </div>
          </div>
          <div className="mt-5 h-2 rounded-full bg-white/10">
            <div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-electric via-cyan to-rose" />
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-500">
              Ranking Chart
            </p>
            <p className="text-xs text-slate-500">30 day trend</p>
          </div>
          <div className="h-32 overflow-hidden rounded-2xl bg-slate-950/70">
            <svg viewBox="0 0 320 120" className="h-full w-full">
              <path
                d="M0 90 C30 88, 50 80, 80 82 S140 68, 180 60 S240 48, 320 28"
                fill="none"
                stroke="rgba(79,209,255,0.95)"
                strokeWidth="3"
              />
              <path
                d="M0 94 C34 96, 70 98, 110 90 S180 82, 220 74 S280 60, 320 56"
                fill="none"
                stroke="rgba(255,79,163,0.75)"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-500">
            Opportunity Feed
          </p>
          <div className="mt-4 space-y-3">
            {[
              ["Citation loss in CRM prompts", "High impact"],
              ["Gemini answer rank drop in Mumbai", "Action now"],
              ["Competitor surge in GPT recommendations", "Watchlist"]
            ].map(([label, tag], index) => (
              <div
                key={label}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2"
              >
                <span className="truncate text-sm text-slate-300">{label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                    index === 0
                      ? "bg-rose-500/15 text-rose-300"
                      : index === 1
                        ? "bg-amber-400/15 text-amber-300"
                        : "bg-cyan/15 text-cyan"
                  }`}
                >
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4 xl:col-span-5">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-500">
            AI Engine Breakdown
          </p>
          <div className="mt-4 space-y-3">
            {engines.map(([label, value]) => (
              <div key={label}>
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-white/10">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-cyan to-electric"
                    style={{ width: value }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-500">
              Region Heatmap
            </p>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {Array.from({ length: 16 }).map((_, index) => (
                <div
                  key={index}
                  className={`h-10 rounded-md ${
                    index % 5 === 0
                      ? "bg-cyan/70"
                      : index % 3 === 0
                        ? "bg-electric/50"
                        : "bg-white/10"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-500">
              Competitor Pulse
            </p>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              {[
                ["Jasper", "#1", "+4.1"],
                ["Copy.ai", "#2", "+2.2"],
                ["Your Brand", "#4", "-0.8"]
              ].map(([name, rank, delta]) => (
                <div
                  key={name}
                  className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-2 rounded-lg border border-white/10 bg-slate-950/60 px-2 py-2"
                >
                  <span className="truncate">{name}</span>
                  <span className="text-xs text-slate-500">{rank}</span>
                  <span className={`text-xs font-semibold ${delta.startsWith("-") ? "text-rose-300" : "text-emerald-300"}`}>
                    {delta}
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

function MarketGraphic() {
  return (
    <div className="relative min-h-[21rem] overflow-hidden rounded-[24px] border border-cyan/10 bg-[linear-gradient(180deg,rgba(6,22,51,0.9),rgba(2,6,23,0.95))]">
      <div className="absolute inset-0 bg-hero-grid bg-[size:40px_40px] opacity-25" />
      <div className="absolute left-[18%] top-[30%] h-4 w-4 rounded-full bg-cyan shadow-[0_0_25px_rgba(79,209,255,0.9)]" />
      <div className="absolute left-[40%] top-[20%] h-4 w-4 rounded-full bg-electric shadow-[0_0_25px_rgba(31,111,255,0.9)]" />
      <div className="absolute right-[24%] top-[35%] h-4 w-4 rounded-full bg-rose shadow-[0_0_25px_rgba(255,79,163,0.9)]" />
      <div className="absolute bottom-[28%] left-[35%] h-4 w-4 rounded-full bg-violet shadow-[0_0_25px_rgba(138,92,255,0.9)]" />
      <div className="absolute bottom-[20%] right-[30%] h-4 w-4 rounded-full bg-amber-400 shadow-[0_0_25px_rgba(255,138,61,0.9)]" />
      <svg viewBox="0 0 400 220" className="absolute inset-0 h-full w-full opacity-75">
        <path
          d="M72 70 C126 38, 150 122, 164 110 S220 58, 262 74 S322 154, 340 140"
          fill="none"
          stroke="rgba(79,209,255,0.8)"
          strokeWidth="2"
        />
        <path
          d="M100 160 C156 138, 194 188, 252 150 S312 112, 340 116"
          fill="none"
          stroke="rgba(31,111,255,0.7)"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
