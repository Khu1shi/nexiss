import { SectionHeading } from "@/components/section-heading";

const queries = [
  {
    step: "QUERY 1",
    text: '"Best enterprise CRM for fast-scaling startups"',
    active: true
  },
  {
    step: "QUERY 2",
    text: '"Top corporate tax advisory firms for APAC expansion"',
    active: false
  },
  {
    step: "QUERY 3",
    text: '"Best SOC2-compliant customer support platform"',
    active: false
  }
];

const signals = [
  {
    step: "SIGNAL 1",
    title: "AI-first discovery",
    description:
      "Users increasingly trust direct model answers instead of scanning ten blue links. Over 68% of high-intent evaluations conclude with zero clicks.",
    dotColor: "bg-sky-400",
    textColor: "text-sky-500"
  },
  {
    step: "SIGNAL 2",
    title: "Opaque brand inclusion",
    description:
      "AI systems decide which brands appear in answers and which ones are ignored based on knowledge graphs, citation depth, and entity embeddings.",
    dotColor: "bg-blue-600",
    textColor: "text-blue-600"
  },
  {
    step: "SIGNAL 3",
    title: "Legacy tooling gap",
    description:
      "Traditional SEO tools cannot monitor AI responses, probabilistic neural rankings, multi-turn contexts, or recommendation logic.",
    dotColor: "bg-purple-500",
    textColor: "text-purple-500"
  },
  {
    step: "SIGNAL 4",
    title: "Why GEO matters",
    description:
      "Winning AI search visibility requires prompt intelligence, model comparison, structured entity authority, and real-time answer analysis.",
    dotColor: "bg-amber-400",
    textColor: "text-amber-500"
  }
];

export function ShiftSection() {
  return (
    <section id="how-it-works" className="section-shell section-space">
      <SectionHeading
        eyebrow="SEARCH IS CHANGING"
        title="For 20 years, businesses optimized for search engines. Now users ask AI systems directly."
        description={
          <>
            Discovery is shifting from blue links to generated answers.{" "}
            <strong className="font-semibold text-slate-900">
              71% of high-intent evaluations
            </strong>{" "}
            now occur directly inside LLMs. AI systems decide which enterprise
            brands appear, how they are cited, and who gets excluded. Traditional
            SEO tools cannot monitor that response layer.
          </>
        }
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left Panel Container: Example Queries Widget */}
        <div className="flex flex-col justify-between rounded-[32px] border border-slate-100 bg-white p-6 shadow-sm md:p-8">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Example Queries
            </p>

            <div className="mt-5 space-y-3.5">
              {queries.map((q) => (
                <div
                  key={q.step}
                  className={`rounded-2xl bg-white p-4 transition-all ${
                    q.active
                      ? "border-2 border-sky-400 shadow-xs"
                      : "border border-slate-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-slate-400">
                      {q.step}
                    </span>
                    <span className="rounded-full border border-sky-100 bg-sky-50/60 px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-sky-500">
                      Live Prompt
                    </span>
                  </div>
                  <p className="mt-2.5 text-sm font-bold text-slate-900 leading-snug">
                    {q.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Highlighted AI Answer Layer Insight Box */}
          <div className="mt-5 rounded-2xl border border-sky-100 bg-sky-50/40 p-4">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-600">
              AI Answer Layer Insight:
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
              ChatGPT explicitly names 3 vendors in paragraph 1, excluding 89% of traditional Google Page 1 search results.
            </p>
          </div>
        </div>

        {/* Right Panel: Equal-Height Standalone 2x2 Signal Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2 sm:grid-rows-2">
          {signals.map((item) => (
            <div
              key={item.step}
              className="flex h-full flex-col justify-between rounded-[32px] border border-slate-100 bg-white p-7 shadow-sm transition-all hover:shadow-md"
            >
              <div>
                <div className="flex items-center gap-2.5">
                  <span className={`h-2 w-2 rounded-full ${item.dotColor}`} />
                  <span className={`font-mono text-[11px] font-semibold uppercase tracking-[0.18em] ${item.textColor}`}>
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}