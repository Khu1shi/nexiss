import { DashboardPreview } from "@/components/dashboard-preview";
import { SectionHeading } from "@/components/section-heading";
import { queryMetrics } from "@/lib/placeholders";

export function QueryAnalysisSection() {
  return (
    <section id="demo" className="section-shell section-space">
      <SectionHeading
        eyebrow="How AI Answers A Query"
        title='Why "Best cafes in Andheri for dates" becomes a visibility problem for local cafes.'
        description="A single generated answer can shape real footfall instantly. NexisGEO turns that opaque answer into measurable ranking shifts, citation patterns, and model-by-model comparison."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="panel rounded-[30px] p-6">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan">Mock AI answer</p>
          <div className="mt-6 space-y-4">
            {["Subko Andheri", "Blue Tokai Andheri", "Leaping Windows Cafe"].map((item, index) => (
              <div key={item} className="surface-card flex items-center justify-between rounded-2xl px-4 py-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{`Rank ${index + 1}`}</p>
                  <p className="mt-1 text-2xl font-semibold text-ink">{item}</p>
                </div>
                <div className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
                  Recommended
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-600">
            AI assistants are already curating local winners. Cafe operators need to measure
            visibility score, ranking changes, and AI engine comparison before those
            answers harden into customer perception.
          </p>
        </div>

        <DashboardPreview
          title="NexisGEO Analysis Dashboard"
          subtitle="Cafe visibility score, ranking changes, competitor overlap, and engine comparison."
          metrics={queryMetrics}
          variant="query"
        />
      </div>
    </section>
  );
}
