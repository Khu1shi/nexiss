import { SectionHeading } from "@/components/section-heading";

const queries = [
  "Best cafes in Andheri for dates",
  "Best cafes in Andheri for work",
  "Best cafes in Andheri for friends meetup"
];

export function ShiftSection() {
  return (
    <section id="how-it-works" className="section-shell section-space">
      <SectionHeading
        eyebrow="Search Is Changing"
        title="For 20 years, local businesses optimized for search engines. Now users ask AI systems directly."
        description="Discovery is shifting from blue links to generated answers. AI systems now decide which cafes appear, how they are cited, and who gets excluded. Traditional SEO tools cannot monitor that response layer."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="panel rounded-[30px] p-6">
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-cyan">Example queries</p>
          <div className="mt-6 space-y-4">
            {queries.map((query, index) => (
              <div
                key={query}
                className="surface-card interactive-surface rounded-[24px] px-5 py-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{`Query ${index + 1}`}</p>
                  <span className="rounded-full border border-cyan/20 bg-cyan/10 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.16em] text-cyan">
                    Live prompt
                  </span>
                </div>
                <p className="mt-3 text-xl leading-8 text-ink">{query}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel rounded-[30px] p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "AI-first discovery",
                description: "Users increasingly trust direct model answers instead of scanning ten blue links."
              },
              {
                title: "Opaque cafe inclusion",
                description: "AI systems decide which cafes appear in answers and which ones are ignored."
              },
              {
                title: "Legacy tooling gap",
                description: "Traditional SEO tools cannot monitor AI responses, rankings, or recommendation logic."
              },
              {
                title: "Why GEO matters",
                description: "Winning AI search visibility requires prompt intelligence, model comparison, and answer analysis."
              }
            ].map((item, index) => (
              <div key={item.title} className="surface-card interactive-surface rounded-[24px] p-5">
                <div className="flex items-center gap-3">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      index === 0
                        ? "bg-cyan"
                        : index === 1
                          ? "bg-electric"
                          : index === 2
                            ? "bg-violet-300"
                            : "bg-amber-300"
                    }`}
                  />
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    Signal {index + 1}
                  </p>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
