import { SectionHeading } from "@/components/section-heading";

export function WhySection() {
  const cards = [
    {
      title: "First GEO Intelligence Platform",
      desc: "Purpose-built to define and lead the category around AI recommendation monitoring and optimization.",
      topBorderColor: "border-t-blue-600",
      glowColor: "group-hover:bg-blue-600/20"
    },
    {
      title: "Multi-Model Monitoring",
      desc: "Track brand visibility patterns across leading AI engines instead of relying on a single search surface.",
      topBorderColor: "border-t-sky-400",
      glowColor: "group-hover:bg-sky-400/20"
    },
    {
      title: "Brand Visibility Analytics",
      desc: "Translate prompt behavior into dashboards that brand teams, founders can understand quickly.",
      topBorderColor: "border-t-pink-500",
      glowColor: "group-hover:bg-pink-500/20"
    }
  ];

  return (
    <section className="section-shell section-space">
      <SectionHeading
        eyebrow="WHY NEXISGEO"
        title="Positioned to become the category-defining platform for AI search visibility."
        description="NexisGEO is being designed as infrastructure for teams that need to understand how brands are surfaced, compared, and recommended by generative systems."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <div key={card.title} className="group relative">
            {/* Soft Blurred Glow Layer behind the card */}
            <div
              className={`absolute -inset-1 rounded-3xl bg-transparent blur-xl transition-all duration-300 ${card.glowColor}`}
            />

            {/* Card Content Surface */}
            <div
              className={`relative rounded-3xl border border-slate-100 bg-white p-7 shadow-xs transition-all duration-300 border-t-[3.5px] ${card.topBorderColor} group-hover:-translate-y-1 group-hover:shadow-md`}
            >
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}