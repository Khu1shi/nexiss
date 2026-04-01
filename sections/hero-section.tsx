import Link from "next/link";

import { DashboardPreview } from "@/components/dashboard-preview";
import { heroMetrics } from "@/lib/placeholders";

export function HeroSection() {
  return (
    <section className="section-shell section-space relative pt-10 md:pt-16">
      <div className="hero-orb left-8 top-14 h-28 w-28 bg-amber-400/25" />
      <div className="hero-orb right-28 top-10 h-44 w-44 bg-cyan/20" />
      <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] xl:gap-16">
        <div>
          <span className="eyebrow">Pre-launch AI search intelligence</span>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-ink md:text-7xl">
            Monitor How AI
            <br />
            <span className="gradient-text">Recommends</span> Your Cafe
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            NexisGEO is the intelligence platform for Generative Engine Optimization,
            helping cafes track and improve how they appear across AI engines like
            ChatGPT, Gemini, Claude, and Perplexity.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/early-access" className="cta-primary">
              Join Early Access
            </Link>
            <Link href="#demo" className="cta-secondary">
              See Platform Preview
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="operator-chip">
              <span className="operator-chip-dot bg-cyan" />
              ChatGPT, Gemini, Claude, Perplexity
            </span>
            <span className="operator-chip">
              <span className="operator-chip-dot bg-amber-300" />
              Mumbai to global roadmap
            </span>
          </div>

          <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
            {[
              ["AI Engines Monitored", "4+", "Live model checks"],
              ["Cafe Queries Benchmarked", "10k+", "Andheri focus"],
              ["Discovery Surface", "Dates + work + coffee", "Answer-layer visibility"]
            ].map(([label, value, footnote]) => (
              <div key={label} className="metric-tile rounded-[24px] p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">
                  {label}
                </p>
                <p className="metric-tile-value mt-3 text-2xl font-semibold leading-tight text-ink">
                  {value}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.16em] text-slate-500">{footnote}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
            <span>Used for concept validation across AI-native discovery workflows.</span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
            <span>Built for operators, agencies, and investor conversations.</span>
          </div>
        </div>

        <DashboardPreview
          title="AI analytics command center"
          subtitle="A serious infrastructure-style preview showing model monitoring, rankings, answer share, and network intelligence."
          metrics={heroMetrics}
          variant="network"
        />
      </div>
    </section>
  );
}
