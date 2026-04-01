"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const investorSignals = [
  { label: "Category stage", value: "Pre-standard", detail: "GEO tooling market is early and fragmented" },
  { label: "Pilot demand", value: "Andheri live", detail: "Cafe operators and investor-led inbound interest" },
  { label: "Coverage scope", value: "4 AI engines", detail: "ChatGPT, Gemini, Claude, and Perplexity" },
  { label: "Current thesis", value: "Intelligence layer", detail: "Visibility analytics for AI-native discovery" }
];

const investmentHighlights = [
  {
    title: "New category creation",
    description:
      "GEO is a new operating category where cafes need visibility into how AI systems recommend places for dates, work, coffee, and meetups."
  },
  {
    title: "Behavioral shift underway",
    description:
      "User behavior is moving from traditional search links to direct AI answers, changing where local cafe inclusion is won or lost."
  },
  {
    title: "Infrastructure opportunity",
    description:
      "NexisGEO is positioned as a cross-model intelligence layer rather than a single-channel listing tool."
  }
];

const geoRollout = [
  ["Phase 0", "Andheri selected cafes", "Completed pilot intake"],
  ["Phase 1", "Andheri full cafe coverage", "Onboarding expansion"],
  ["Phase 2", "Mumbai high-footfall zones", "Data coverage scaling"],
  ["Phase 3", "Mumbai full coverage", "Operational expansion"],
  ["Phase 4", "USA launch", "Cross-region go-to-market"],
  ["Phase 5", "Global", "Multi-market intelligence surface"]
];

const capitalUseMix: Array<[string, number]> = [
  ["Model data pipelines", 34],
  ["Product and design", 26],
  ["Go-to-market pilots", 22],
  ["Category education", 10],
  ["Ops and legal", 8]
];

const diligencePack = [
  "Category thesis and problem framing",
  "Pilot market rollout plan",
  "Product architecture direction",
  "Initial demand and partner segments",
  "Execution roadmap and milestones"
];

type InvestorFormState = {
  name: string;
  email: string;
  company: string;
  industry: string;
  city: string;
};

const initialForm: InvestorFormState = {
  name: "",
  email: "",
  company: "",
  industry: "Investor",
  city: ""
};

export default function InvestorsPage() {
  const [form, setForm] = useState<InvestorFormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({
    type: "idle",
    message: ""
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const result = (await response.json()) as { success: boolean; message: string };

      if (!response.ok || !result.success) {
        setStatus({
          type: "error",
          message: result.message || "We could not submit your request right now."
        });
        return;
      }

      setStatus({
        type: "success",
        message: "Investor request captured. We will share the brief with you shortly."
      });
      setForm(initialForm);
    } catch {
      setStatus({
        type: "error",
        message: "Network issue while submitting. Please retry in a moment."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="mx-auto max-w-[104rem] px-4 py-5 sm:px-6 lg:px-8 xl:py-6">
      <div className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
        <section className="panel relative overflow-hidden rounded-[36px] p-6 md:p-8 xl:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,209,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(138,92,255,0.12),transparent_30%)]" />
          <div className="relative">
            <span className="eyebrow">Investor Brief</span>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-ink md:text-[3.2rem] md:leading-[1.04]">
              Back the intelligence layer for Generative Engine Optimization.
            </h1>
            <p className="mt-4 max-w-3xl text-[17px] leading-7 text-slate-600">
              NexisGEO helps cafes monitor and improve how they appear in AI-generated answers.
              This page shares the category thesis, rollout intent, and investor request flow.
            </p>

            <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {investorSignals.map((item) => (
                <article key={item.label} className="metric-tile rounded-[24px] p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-ink">{item.value}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{item.detail}</p>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-3 xl:grid-cols-3">
              {investmentHighlights.map((item) => (
                <article key={item.title} className="surface-card rounded-[24px] p-4">
                  <p className="preview-kicker text-cyan">{item.title}</p>
                  <p className="mt-2.5 text-sm leading-6 text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>

            <article className="mt-6 surface-card rounded-[24px] p-5">
              <div className="flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="preview-kicker text-cyan">Rollout visibility</p>
                  <p className="mt-2 text-lg font-semibold text-ink">Go-to-market and expansion phases</p>
                </div>
                <Link href="/reports" className="text-sm font-semibold text-electric transition hover:text-ink">
                  View reporting surface
                </Link>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {geoRollout.map(([phase, market, state], index) => (
                  <div key={phase} className="rounded-[20px] border border-slate-200 bg-white/85 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">{phase}</p>
                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                          index === 0
                            ? "bg-emerald-50 text-emerald-600"
                            : index < 3
                              ? "bg-cyan/10 text-electric"
                              : "bg-violet/15 text-violet-700"
                        }`}
                      >
                        {state}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-ink">{market}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="grid gap-5 xl:content-start">
          <article className="panel relative overflow-hidden rounded-[36px] p-6 md:p-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,209,255,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(31,111,255,0.08),transparent_30%)]" />
            <div className="relative">
              <p className="preview-kicker text-cyan">Request Investor Brief</p>
              <h2 className="mt-3 text-2xl font-semibold text-ink">Receive the current category memo and product outlook.</h2>

              <form className="mt-5 space-y-3" onSubmit={handleSubmit}>
                <label className="block">
                  <span className="text-sm text-slate-600">Name</span>
                  <input
                    value={form.name}
                    onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                    className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 text-sm text-ink outline-none transition focus:border-electric/40"
                    placeholder="Your full name"
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-slate-600">Work email</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                    className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 text-sm text-ink outline-none transition focus:border-electric/40"
                    placeholder="name@fund.com"
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-slate-600">Firm or organization</span>
                  <input
                    value={form.company}
                    onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
                    className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 text-sm text-ink outline-none transition focus:border-electric/40"
                    placeholder="Fund / Family Office / Strategic Investor"
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-slate-600">City</span>
                  <input
                    value={form.city}
                    onChange={(event) => setForm((prev) => ({ ...prev, city: event.target.value }))}
                    className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 text-sm text-ink outline-none transition focus:border-electric/40"
                    placeholder="Mumbai"
                  />
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-1 w-full rounded-2xl bg-gradient-to-r from-electric to-cyan px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(31,111,255,0.24)] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Request Investor Brief"}
                </button>
              </form>

              {status.type !== "idle" ? (
                <p className={`mt-3 text-sm ${status.type === "success" ? "text-emerald-600" : "text-rose-600"}`}>
                  {status.message}
                </p>
              ) : null}
            </div>
          </article>

          <article className="surface-card rounded-[28px] p-5">
            <p className="preview-kicker text-cyan">Capital Use View</p>
            <p className="mt-2 text-lg font-semibold text-ink">Indicative allocation focus</p>
            <div className="mt-4 space-y-3">
              {capitalUseMix.map(([label, value], index) => (
                <div key={label}>
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>{label}</span>
                    <span className="font-semibold text-ink">{value}%</span>
                  </div>
                  <div className="mt-1.5 h-2 rounded-full bg-slate-200">
                    <div
                      className={`h-2 rounded-full ${
                        index === 0
                          ? "bg-gradient-to-r from-cyan to-electric"
                          : index === 1
                            ? "bg-gradient-to-r from-electric to-violet"
                            : index === 2
                              ? "bg-gradient-to-r from-violet to-pink-400"
                              : index === 3
                                ? "bg-gradient-to-r from-pink-400 to-orange-400"
                                : "bg-gradient-to-r from-slate-500 to-slate-400"
                      }`}
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="surface-card rounded-[28px] p-5">
            <p className="preview-kicker text-cyan">Diligence Pack</p>
            <p className="mt-2 text-lg font-semibold text-ink">Included in the initial investor share</p>
            <div className="mt-4 space-y-2.5">
              {diligencePack.map((item) => (
                <div key={item} className="rounded-[16px] border border-slate-200 bg-white/85 px-3 py-2.5 text-sm text-slate-600">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link href="/early-access" className="font-semibold text-electric transition hover:text-ink">
                Join early access
              </Link>
              <Link href="/contact" className="text-slate-500 transition hover:text-ink">
                View inbound ops
              </Link>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
