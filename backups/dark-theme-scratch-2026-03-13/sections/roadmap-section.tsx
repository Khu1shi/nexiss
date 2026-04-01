import { SectionHeading } from "@/components/section-heading";

const phases = [
  "Mumbai - selected brands",
  "Mumbai - all sectors",
  "India - high impact sectors",
  "India - full coverage",
  "USA",
  "Global"
];

export function RoadmapSection() {
  return (
    <section id="case-studies" className="section-shell section-space">
      <SectionHeading
        eyebrow="Launch Plan"
        title="Roll out GEO intelligence market-by-market, validate demand, then scale globally."
        description="NexisGEO starts with a focused market launch in Mumbai, expands across India, and then moves into US and global visibility infrastructure."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {phases.map((phase, index) => (
          <div key={phase} className="roadmap-tile rounded-3xl p-5">
            <div className="relative z-[1] flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">{`0${index}`}</span>
              <span className="h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_20px_rgba(79,209,255,0.9)]" />
            </div>
            <p className="relative z-[1] mt-6 text-sm uppercase tracking-[0.22em] text-slate-500">{`Phase ${index}`}</p>
            <p className="relative z-[1] mt-2 text-2xl font-semibold leading-tight text-white">{phase}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
