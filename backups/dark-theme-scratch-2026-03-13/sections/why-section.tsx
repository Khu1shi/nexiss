import { SectionHeading } from "@/components/section-heading";

export function WhySection() {
  const cards = [
    {
      title: "First GEO Intelligence Platform",
      desc: "Purpose-built to define and lead the category around AI recommendation monitoring and optimization."
    },
    {
      title: "Multi-Model Monitoring",
      desc: "Track brand visibility patterns across leading AI engines instead of relying on a single search surface."
    },
    {
      title: "Brand Visibility Analytics",
      desc: "Translate prompt behavior into dashboards that marketers, founders, and investors can understand quickly."
    }
  ];

  return (
    <section className="section-shell section-space">
      <SectionHeading
        eyebrow="Why NexisGEO"
        title="Positioned to become the category-defining platform for AI search visibility."
        description="NexisGEO is being designed as infrastructure for teams that need to understand how brands are surfaced, compared, and recommended by generative systems."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cards.map((card, index) => (
          <div key={card.title} className="panel rounded-[28px] p-6">
            <div
              className={`h-1.5 w-20 rounded-full ${
                index === 0 ? "bg-electric" : index === 1 ? "bg-cyan" : "bg-rose"
              }`}
            />
            <h3 className="mt-6 text-2xl font-semibold text-white">{card.title}</h3>
            <p className="mt-4 text-base leading-8 text-slate-300">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
