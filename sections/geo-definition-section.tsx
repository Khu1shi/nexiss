import { DashboardPreview } from "@/components/dashboard-preview";
import { SectionHeading } from "@/components/section-heading";
import { workflowMetrics } from "@/lib/placeholders";

export function GeoDefinitionSection() {
  return (
    <section className="section-shell section-space">
      <div className="panel rounded-[32px] p-8 md:p-12">
        <SectionHeading
          eyebrow="Introducing Generative Engine Optimization"
          title="NexisGEO is defining the intelligence layer for Generative Engine Optimization."
          description="Generative Engine Optimization (GEO) is the process of monitoring and improving how cafes appear inside AI-generated responses. NexisGEO is building the first intelligence platform for GEO."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.94fr_1.06fr]">
          <div className="glass-tile rounded-[28px] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.26em] text-cyan">Definition</p>
            <p className="mt-5 text-2xl font-semibold leading-10 text-ink">
              Generative Engine Optimization (GEO) is the process of monitoring and
              improving how cafes appear inside AI-generated responses.
            </p>
            <div className="section-divider" />
            <div className="mt-6 grid gap-4">
              {[
                "Track answer presence across ChatGPT, Gemini, Claude, and Perplexity.",
                "Analyze why competitor cafes win recommendations and where your cafe gets ignored.",
                "Turn prompt intelligence into actionable content and visibility improvements."
              ].map((item) => (
                <div key={item} className="surface-card rounded-2xl p-4">
                  <p className="text-sm leading-7 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <DashboardPreview
            title="GEO workflow"
            subtitle="Cafe -> AI Model -> AI Response -> GEO Ranking. A clear operating model for AI answer visibility."
            metrics={workflowMetrics}
            variant="workflow"
          />
        </div>
      </div>
    </section>
  );
}
