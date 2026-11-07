"use client";

import Link from "next/link";
import { useState } from "react";

import { DashboardPreview } from "@/components/dashboard-preview";
import { SectionHeading } from "@/components/section-heading";
import { heroMetrics } from "@/lib/placeholders";

const faqItems = [
  {
    question: "What does GEO mean?",
    answer:
      "GEO stands for Generative Engine Optimization: monitoring and improving how a brand appears inside AI-generated answers."
  },
  {
    question: "Why is this different from SEO?",
    answer:
      "SEO measures search engine rankings. GEO measures how AI systems recommend, cite, and prioritize cafes in direct answers."
  },
  {
    question: "Who is this for?",
    answer:
      "Cafe operators, local growth teams, hospitality partners, and investors who want visibility into AI-native discovery behavior."
  },
  {
    question: "Is the product live?",
    answer:
      "This site validates demand and collects launch interest. Product routes exist as placeholders while the platform vision is being refined."
  }
];

export function InvestorSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="investors" className="section-shell section-space">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <SectionHeading
            eyebrow="For Investors"
            title="NexisGEO is building the intelligence layer for Generative Engine Optimization."
            description="GEO is emerging as a new category in AI search analytics. Early investors can participate in defining the future of AI search visibility."
          />
          <Link
            href="/investors"
            className="mt-8 inline-flex rounded-full bg-electric px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(31,111,255,0.18)] transition hover:bg-cyan hover:text-ink"
          >
            Request Investor Brief
          </Link>
        </div>

        <DashboardPreview
          title="Market intelligence snapshot"
          subtitle="Category signals, launch sequencing, and AI recommendation market mapping."
          metrics={heroMetrics}
          variant="market"
        />
      </div>

      <div id="faq" className="mt-16 grid items-start gap-5 md:grid-cols-2">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.question}
              className="rounded-3xl bg-white p-7 shadow-sm transition-all duration-200 border border-slate-100"
            >
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 text-left focus:outline-none"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {item.question}
                </h3>
                <span className="text-xl font-normal text-slate-400 shrink-0">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              
              {isOpen && (
                <div className="mt-4">
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}