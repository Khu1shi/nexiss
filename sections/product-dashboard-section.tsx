import { DashboardPreview } from "@/components/dashboard-preview";
import { productMetrics } from "@/lib/placeholders";

export function ProductDashboardSection() {
  return (
    <section id="platform" className="bg-[#F6F8FC] py-20 lg:py-24">
      <div className="mx-auto w-[min(100%-40px,1240px)] sm:w-[min(100%-48px,1240px)]">
        <div>
          <span className="inline-flex items-center rounded-full border border-[#C7D7FE] bg-[#EEF3FF] px-3 py-1 font-mono text-[12px] font-medium uppercase tracking-[0.04em] text-[#2F5BEA]">
            Built For AI Search Intelligence
          </span>

          <h2 className="mt-5 max-w-[880px] text-[clamp(1.85rem,3vw,2.65rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-[#0F172A]">
            A command layer for GEO score, AI engine breakdown, ranking charts,
            heatmaps, and competitor comparison.
          </h2>

          <p className="mt-5 max-w-[700px] text-[16.5px] font-normal leading-[1.5] text-[#64748B] sm:text-[18px]">
            This preview shows what a real GEO operating console could look like for
            teams that need to understand how AI systems talk about their market.
          </p>
        </div>

        <div className="mt-14 lg:mt-16">
          <DashboardPreview
            title="Product dashboard preview"
            subtitle="Large-format intelligence surface with regional heatmaps, ranking charts, engine splits, and competitor comparison."
            metrics={productMetrics}
            variant="product"
          />
        </div>
      </div>
    </section>
  );
}
