import { ToolCard } from "@/components/tool-card";
import { toolLinks } from "@/lib/navigation";

const platformChips = [
  { label: "Dashboard-first UX", dotClass: "bg-sky-400" },
  { label: "Built for brand operators", dotClass: "bg-[#8b5cf6]" },
  { label: "AI answer intelligence", dotClass: "bg-amber-400" }
] as const;

export function PlatformPreviewSection() {
  return (
    <section
      id="product"
      className="relative bg-[linear-gradient(180deg,#f5f8fd_0%,#f7faff_100%)] py-12 lg:py-16"
    >
      <div className="mx-auto w-[min(100%-48px,1350px)]">
        <div>
          <span className="inline-flex h-[27px] items-center rounded-full border border-blue-200/90 bg-[#f0f6ff] px-3.5 font-mono text-[10.5px] font-medium uppercase tracking-[0.14em] text-[#2563eb]">
            Platform Overview
          </span>

          <h2 className="mt-4 max-w-[780px] text-[1.9rem] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[2.3rem] lg:text-[2.55rem]">
            NexisGEO helps brands understand how AI models recommend solutions for enterprise, commerce, and advisory.
          </h2>

          <p className="mt-4 max-w-[660px] text-[15.5px] leading-[1.55] text-slate-600 lg:text-[17px]">
            The initial product suite is designed like an AI infrastructure dashboard:
            local monitoring, ranking diagnostics, optimization workflows, and
            competitor intelligence.
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {platformChips.map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-3.5 py-1.5 text-[12px] font-medium text-slate-600 shadow-[0_1px_4px_rgba(15,23,42,0.03)]"
              >
                <span className={`h-2 w-2 rounded-full ${chip.dotClass}`} />
                {chip.label}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-9 grid gap-6 lg:grid-cols-2">
          {toolLinks.map((tool, index) => (
            <ToolCard
              key={tool.href}
              title={tool.title}
              description={tool.description}
              href={tool.href}
              variant={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
