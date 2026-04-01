import { DashboardPreview } from "@/components/dashboard-preview";
import { SectionHeading } from "@/components/section-heading";
import { productMetrics } from "@/lib/placeholders";

export function ProductDashboardSection() {
  return (
    <section className="section-shell section-space">
      <SectionHeading
        eyebrow="Built For AI Search Intelligence"
        title="A command layer for GEO score, AI engine breakdown, ranking charts, heatmaps, and competitor comparison."
        description="This preview shows what a real GEO operating console could look like for teams that need to understand how AI systems talk about their market."
      />

      <div className="mt-12">
        <DashboardPreview
          title="Product dashboard preview"
          subtitle="Large-format intelligence surface with regional heatmaps, ranking charts, engine splits, and competitor comparison."
          metrics={productMetrics}
          variant="product"
        />
      </div>
    </section>
  );
}
