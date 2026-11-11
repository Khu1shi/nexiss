import Link from "next/link";

import { DashboardPreview } from "@/components/dashboard-preview";
import { investorMetrics } from "@/lib/placeholders";

export function InvestorSection() {
  return (
    <section id="investors" className="bg-[#F8FAFD] py-20 lg:py-24">
      <div className="mx-auto w-[min(100%-40px,1320px)] sm:w-[min(100%-48px,1320px)]">
        <div className="grid items-center gap-10 lg:grid-cols-[420px_1fr] lg:gap-14 xl:grid-cols-[450px_1fr] xl:gap-16">
          <div className="max-w-[500px]">
            <span className="inline-flex items-center rounded-full border border-[#D6E2FF] bg-[#EEF3FF] px-3 py-1 font-mono text-[12px] font-semibold uppercase tracking-[0.04em] text-[#2F5BEA]">
              For Investors
            </span>

            <h2 className="mt-5 max-w-[420px] text-[clamp(1.75rem,3vw,2.65rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-[#0F172A]">
              NexisGEO is building the intelligence layer for Generative Engine Optimization.
            </h2>

            <p className="mt-5 max-w-[450px] text-[17px] font-normal leading-[1.5] text-[#475569] sm:text-[18px]">
              GEO is emerging as a new category in AI search analytics. Early
              investors can participate in defining the future of AI search
              visibility.
            </p>

            <Link
              href="/investors"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[linear-gradient(180deg,#3B63E8_0%,#2748C9_100%)] px-6 py-3 text-[14px] font-semibold text-white shadow-[0_6px_16px_rgba(47,91,234,0.22)] transition hover:-translate-y-0.5 hover:brightness-105"
            >
              Request Investor Brief
            </Link>
          </div>

          <DashboardPreview
            title="Market intelligence snapshot"
            subtitle="Category signals, launch sequencing, and AI recommendation market mapping."
            metrics={investorMetrics}
            variant="market"
          />
        </div>
      </div>
    </section>
  );
}