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
      "SEO measures search engine rankings. GEO measures how AI systems recommend, cite, and prioritize brands in direct answers."
  },
  {
    question: "Who is this for?",
    answer:
      "Growth teams, agencies, category leaders, and investors who want visibility into AI-native discovery behavior."
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
            className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan"
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

      <div id="faq" className="mt-16 grid gap-4 md:grid-cols-2">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.question}
              className={`panel rounded-[28px] p-6 transition ${isOpen ? "border-cyan/25" : ""}`}
            >
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 text-left"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <h3 className="text-xl font-semibold text-white">{item.question}</h3>
                <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/5 text-cyan">
                  {isOpen ? "-" : "+"}
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-70"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-base leading-8 text-slate-300">{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
