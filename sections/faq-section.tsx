"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "What does GEO mean?",
    answer:
      "GEO stands for Generative Engine Optimization: monitoring and improving how a brand appears inside AI-generated answers."
  },
  {
    question: "Why is this different from SEO?",
    answer:
      "SEO measures search engine rankings. GEO measures how AI systems recommend, cite, and prioritize brands in direct answers."
  },
  {
    question: "Who is this for?",
    answer:
      "Brand operators, local growth teams, agency partners, and investors who want visibility into AI-native discovery behavior."
  },
  {
    question: "Is the product live?",
    answer:
      "This site validates demand and collects launch interest. Product routes exist as placeholders while the platform vision is being refined."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[#F8FAFD] py-16 lg:py-20">
      <div className="mx-auto w-[min(100%-40px,1320px)] sm:w-[min(100%-48px,1320px)]">
        <div className="grid items-start gap-5 md:grid-cols-2">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-200"
              >
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <h3 className="text-lg font-bold leading-snug text-slate-900">
                    {item.question}
                  </h3>
                  <span className="shrink-0 text-xl font-normal text-slate-400">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4">
                    <p className="text-sm leading-relaxed text-slate-500">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

