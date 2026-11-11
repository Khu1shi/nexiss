const phases = [
  {
    code: "00",
    label: "Phase 0",
    title: "Enterprise Beta Cohort",
    featured: false
  },
  {
    code: "01",
    label: "Phase 1",
    title: "Full SaaS & B2B Coverage",
    featured: true
  },
  {
    code: "02",
    label: "Phase 2",
    title: "High-Intent Service Corridors",
    featured: false
  },
  {
    code: "03",
    label: "Phase 3",
    title: "Tier-1 Metro Hubs",
    featured: false
  },
  {
    code: "04",
    label: "Phase 4",
    title: "Pan-Regional Ecosystems",
    featured: false
  },
  {
    code: "05",
    label: "Phase 5",
    title: "Global Local Discovery Standard",
    featured: false
  }
] as const;

export function RoadmapSection() {
  return (
    <section id="roadmap" className="bg-[#F8FAFD] py-20 lg:py-24">
      <div className="mx-auto w-[min(100%-40px,1300px)] sm:w-[min(100%-48px,1300px)]">
        <div>
          <span className="inline-flex items-center rounded-full border border-[#D6E2FF] bg-[#EEF3FF] px-3 py-1 font-mono text-[12px] font-semibold uppercase tracking-[0.04em] text-[#2F5BEA]">
            Launch Plan
          </span>

          <h2 className="mt-5 max-w-[900px] text-[clamp(1.75rem,3vw,2.75rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#0F172A]">
            Roll out GEO intelligence market-by-market, validate demand, then scale globally.
          </h2>

          <p className="mt-5 max-w-[780px] text-[17px] font-normal leading-[1.5] text-[#475569] sm:text-[18px]">
            NexisGEO starts with a focused pilot launch across top enterprise
            software hubs, expands across Tier-1 metros and industries, and then
            scales into global local-discovery visibility infrastructure.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {phases.map((phase) => (
            <div
              key={phase.code}
              className={`flex flex-col justify-between rounded-[24px] bg-white p-5 sm:rounded-[28px] sm:px-7 sm:py-7 lg:min-h-[168px] ${
                phase.featured
                  ? "border border-[#C7D2FE] border-t-2 border-t-[#C7D2FE] shadow-[0_4px_16px_rgba(99,102,241,0.08)]"
                  : "border border-[#E5E7EB] border-t-2 border-t-[#5BB8F5] shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[15px] font-medium tracking-normal text-[#94A3B8]">
                  {phase.code}
                </span>
                <span className="h-3 w-3 rounded-full bg-[#5BB8F5]" />
              </div>

              <div className="mt-3">
                <p className="font-mono text-[12px] font-medium uppercase tracking-[0.04em] text-[#94A3B8]">
                  {phase.label}
                </p>
                <p className="mt-2 text-[18.5px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#0F172A] sm:text-[19.5px]">
                  {phase.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
