import { SectionHeading } from "@/components/section-heading";

const phases = [
  "Andheri - selected cafes",
  "Andheri - full cafe coverage",
  "Mumbai - high footfall zones",
  "Mumbai - all neighborhoods",
  "India metros",
  "Global local discovery"
];

export function RoadmapSection() {
  return (
    <section id="case-studies" className="section-shell section-space">
      <SectionHeading
        eyebrow="Launch Plan"
        title="Roll out GEO intelligence market-by-market, validate demand, then scale globally."
        description="NexisGEO starts with a focused Andheri cafe launch, expands across Mumbai and India, and then moves into global local-discovery visibility infrastructure."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {phases.map((phase, index) => (
          <div key={phase} className="roadmap-tile rounded-3xl p-5">
            <div className="relative z-[1] flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">{`0${index}`}</span>
              <span className="h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_20px_rgba(79,209,255,0.9)]" />
            </div>
            <p className="relative z-[1] mt-6 text-sm uppercase tracking-[0.22em] text-slate-500">{`Phase ${index}`}</p>
            <p className="relative z-[1] mt-2 text-2xl font-semibold leading-tight text-ink">{phase}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
