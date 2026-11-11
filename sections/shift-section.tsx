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
    dotColor: "bg-[#8b5cf6]",
    textColor: "text-[#8b5cf6]"
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
    <section
      id="how-it-works"
      className="relative bg-[linear-gradient(180deg,#f5f8fd_0%,#f4f7fc_100%)] pb-4 pt-3 lg:pb-[14px] lg:pt-[10px]"
    >
      <div className="mx-auto w-full max-w-[84rem] px-5 sm:px-8">
        <div>
          <span className="inline-flex items-center rounded-full border border-blue-200/90 bg-[#f0f6ff] px-3.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#2563eb]">
            SEARCH IS CHANGING
          </span>

          <h2 className="mt-5 max-w-[1030px] text-[2rem] font-bold leading-[1.08] tracking-[-0.028em] text-ink sm:text-[2.5rem] lg:text-[2.95rem]">
            For 20 years, businesses optimized for search engines. Now users ask AI systems directly.
          </h2>

          <p className="mt-5 max-w-[950px] text-[17px] leading-[1.55] text-slate-600 sm:text-[19px] lg:text-[20.5px]">
            Discovery is shifting from blue links to generated answers.{" "}
            <strong className="font-semibold text-ink">
              71% of high-intent evaluations
            </strong>{" "}
            now occur directly inside LLMs. AI systems decide which enterprise
            brands appear, how they are cited, and who gets excluded. Traditional
            SEO tools cannot monitor that response layer.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:mt-[54px] lg:grid-cols-[0.65fr_1fr] lg:gap-[38px]">
          {/* Left Panel Container: Example Queries Widget */}
          <div className="rounded-[30px] border border-slate-200/80 bg-white p-6 shadow-[0_6px_24px_rgba(15,23,42,0.03)] lg:p-[30px]">
            <p className="font-mono text-[12px] font-medium uppercase tracking-[0.16em] text-slate-400">
              Example Queries
            </p>

            <div className="mt-4 space-y-[15px]">
              {queries.map((q) => (
                <div
                  key={q.step}
                  className={`rounded-[20px] bg-white px-5 py-4 transition-all ${
                    q.active
                      ? "border-2 border-[#2563eb] shadow-[0_2px_10px_rgba(37,99,235,0.06)]"
                      : "border border-slate-200/80"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[11.5px] font-medium uppercase tracking-[0.14em] text-slate-400">
                      {q.step}
                    </span>
                    <span
                      className={`rounded-full border px-3 py-0.5 font-mono text-[10.5px] font-medium uppercase tracking-[0.12em] ${
                        q.active
                          ? "border-blue-200 bg-blue-50/70 text-[#2563eb]"
                          : "border-slate-200 bg-slate-50/80 text-slate-500"
                      }`}
                    >
                      Live Prompt
                    </span>
                  </div>
                  <p className="mt-2.5 text-[15px] font-bold leading-snug text-ink lg:text-[15.5px]">
                    {q.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Highlighted AI Answer Layer Insight Box */}
            <div className="mt-6 rounded-2xl border border-blue-200/75 bg-[#f2f7ff] px-5 py-4">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-[#2563eb]">
                AI Answer Layer Insight:
              </p>
              <p className="mt-1.5 text-[13.5px] leading-[1.55] text-slate-600">
                ChatGPT explicitly names 3 vendors in paragraph 1, excluding 89% of traditional Google Page 1 search results.
              </p>
            </div>
          </div>

          {/* Right Panel: Equal-Height Standalone 2x2 Signal Cards Grid */}
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:gap-[20px]">
            {signals.map((item) => (
              <div
                key={item.step}
                className="flex flex-col justify-start rounded-[22px] border border-slate-200/80 bg-white p-6 shadow-[0_4px_18px_rgba(15,23,42,0.03)] lg:min-h-[210px] lg:p-[28px]"
              >
                <div className="flex items-center gap-2.5">
                  <span className={`h-2 w-2 rounded-full ${item.dotColor}`} />
                  <span
                    className={`font-mono text-[12.5px] font-semibold uppercase tracking-[0.15em] ${item.textColor}`}
                  >
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-4 text-[20px] font-bold leading-snug text-ink lg:text-[21px]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-[1.6] text-slate-500 lg:text-[15.5px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}