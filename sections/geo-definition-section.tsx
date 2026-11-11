import { DashboardPreview } from "@/components/dashboard-preview";
import { workflowMetrics } from "@/lib/placeholders";

const definitionFeatures = [
  {
    text: "Track answer presence across ChatGPT, Gemini, Claude, and Perplexity.",
    highlighted: false
  },
  {
    text: "Analyze why competitor brands win recommendations and where your entity gets ignored.",
    highlighted: true
  },
  {
    text: "Turn prompt intelligence into actionable content and visibility improvements.",
    highlighted: false
  }
] as const;

export function GeoDefinitionSection() {
  return (
    <section className="relative bg-[linear-gradient(180deg,#f7faff_0%,#f4f8ff_100%)] py-10 lg:py-12">
      <div className="mx-auto w-[min(100%-48px,1350px)]">
        <div>
          <span className="inline-flex h-[27px] items-center rounded-full border border-blue-200/90 bg-[#f0f6ff] px-3.5 font-mono text-[10.5px] font-medium uppercase tracking-[0.14em] text-[#2563eb]">
            Introducing Generative Engine Optimization
          </span>

          <h2 className="mt-4 max-w-[940px] text-[1.95rem] font-bold leading-[1.08] tracking-[-0.025em] text-ink sm:text-[2.35rem] lg:text-[2.55rem]">
            NexisGEO is defining the intelligence layer for Generative Engine Optimization.
          </h2>

          <p className="mt-3.5 max-w-[850px] text-[16px] leading-[1.45] text-slate-600 lg:text-[18px]">
            Generative Engine Optimization (GEO) is the process of monitoring and
            improving how brands appear inside AI-generated responses. NexisGEO is
            building the first intelligence platform for GEO.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-7 lg:mt-[46px] lg:grid-cols-[543fr_773fr] lg:gap-[34px]">
          <div className="flex flex-col gap-3">
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200/90 bg-white p-6 shadow-[0_4px_18px_rgba(15,23,42,0.03)] lg:px-7 lg:py-6">
              <div className="absolute inset-x-0 top-0 h-[2.5px] bg-[#2563eb]" />
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
                Definition
              </p>
              <p className="mt-3.5 text-[22px] font-bold leading-[1.3] tracking-[-0.02em] text-ink sm:text-[25px] lg:text-[26.5px]">
                Generative Engine Optimization (GEO) is the process of monitoring and
                improving how brands appear inside AI-generated responses.
              </p>
            </div>

            {definitionFeatures.map((feature) => (
              <div
                key={feature.text}
                className={`rounded-[17px] bg-white px-[18px] py-3.5 shadow-[0_2px_8px_rgba(15,23,42,0.025)] ${
                  feature.highlighted
                    ? "border border-blue-200/90 ring-1 ring-blue-100/80"
                    : "border border-slate-200/85"
                }`}
              >
                <p className="text-[14px] leading-[1.45] text-slate-600 lg:text-[14.5px]">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          <DashboardPreview
            title="GEO workflow"
            subtitle="Brand → AI Model → AI Response → GEO Ranking. A clear operating model for AI answer visibility."
            metrics={workflowMetrics}
            variant="workflow"
          />
        </div>
      </div>
    </section>
  );
}
