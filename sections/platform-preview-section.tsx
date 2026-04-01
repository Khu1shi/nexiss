import { SectionHeading } from "@/components/section-heading";
import { ToolCard } from "@/components/tool-card";
import { toolLinks } from "@/lib/navigation";

const accents = [
  "from-electric/25 via-cyan/12 to-transparent",
  "from-violet/24 via-electric/12 to-transparent",
  "from-amber-400/24 via-rose/10 to-transparent",
  "from-cyan/22 via-violet/12 to-transparent"
];

export function PlatformPreviewSection() {
  return (
    <section id="product" className="section-band">
      <div className="section-shell section-space">
      <SectionHeading
        eyebrow="Platform Overview"
        title="NexisGEO helps cafes understand how AI models recommend places for dates, work, coffee, and meetups."
        description="The initial product suite is designed like an AI infrastructure dashboard: local monitoring, ranking diagnostics, optimization workflows, and competitor intelligence."
      />

      <div className="mt-6 flex flex-wrap gap-3">
        {["Dashboard-first UX", "Built for cafe operators", "AI answer intelligence"].map((item, index) => (
          <span key={item} className="operator-chip">
            <span
              className={`operator-chip-dot ${
                index === 0 ? "bg-cyan" : index === 1 ? "bg-violet-300" : "bg-amber-300"
              }`}
            />
            {item}
          </span>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {toolLinks.map((tool, index) => (
          <ToolCard
            key={tool.href}
            title={tool.title}
            description={tool.description}
            href={tool.href}
            accent={accents[index] ?? accents[0]}
          />
        ))}
      </div>
      </div>
    </section>
  );
}
