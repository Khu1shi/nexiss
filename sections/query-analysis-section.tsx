import { DashboardPreview } from "@/components/dashboard-preview";
import { queryMetrics } from "@/lib/placeholders";

const mockRecommendations = [
  "Linear Solutions",
  "Stripe Billing",
  "Datadog Cloud"
] as const;

export function QueryAnalysisSection() {
  return (
    <section
      id="demo"
      className="relative bg-[#f8fafc] py-10 lg:py-14"
    >
      <div className="mx-auto w-[min(100%-48px,1350px)]">
        <div>
          <span className="inline-flex h-[30px] items-center rounded-full border border-blue-200/90 bg-[#eaf4ff] px-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#2563eb]">
            How AI Answers A Query
          </span>

          <h2 className="mt-4 max-w-[820px] text-[1.9rem] font-bold leading-[1.08] tracking-[-0.025em] text-ink sm:text-[2.35rem] lg:text-[2.75rem]">
            Why &ldquo;Best enterprise platform for compliance&rdquo; becomes a visibility problem for modern brands.
          </h2>

          <p className="mt-4 max-w-[930px] text-[17px] leading-[1.5] text-[#52627a] lg:text-[19.5px]">
            A single generated answer can shape enterprise deals instantly.{" "}
            <strong className="font-semibold text-ink">
              Over 82% of decision-makers
            </strong>{" "}
            do not look beyond the top 3 AI recommendations. NexisGEO turns that
            opaque answer into measurable ranking shifts, citation patterns, and
            model-by-model comparison.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-7 lg:mt-[54px] lg:grid-cols-[0.72fr_1fr] lg:gap-[36px]">
          <div className="rounded-[32px] border border-slate-200/90 bg-white p-6 shadow-[0_6px_24px_rgba(15,23,42,0.035)] lg:p-9">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400">
              Mock AI answer
            </p>

            <div className="mt-5 space-y-3.5">
              {mockRecommendations.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between gap-3 rounded-[22px] border border-slate-200/90 bg-white px-5 py-4"
                >
                  <div className="min-w-0">
                    <p className="font-mono text-[10.5px] font-medium uppercase tracking-[0.14em] text-slate-400">
                      {`Rank ${index + 1}`}
                    </p>
                    <p className="mt-1 text-[18px] font-semibold leading-snug text-ink lg:text-[19.5px]">
                      {item}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-sky-200/90 bg-[#eaf4ff] px-3 py-1 text-[12px] font-medium text-[#2563eb]">
                    Recommended
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-[14.5px] leading-[1.65] text-[#71829d]">
              AI assistants are already curating local and global winners. Brand
              operators need to measure visibility score, ranking changes, and AI
              engine comparison before those answers harden into customer perception.
            </p>
          </div>

          <DashboardPreview
            title="NexisGEO Analysis Dashboard"
            subtitle="Brand visibility score, ranking changes, competitor overlap, and engine comparison."
            metrics={queryMetrics}
            variant="query"
          />
        </div>
      </div>
    </section>
  );
}
