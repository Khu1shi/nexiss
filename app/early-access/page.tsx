import Link from "next/link";

import { SignupForm } from "@/components/signup-form";

const accessBenefits = [
  {
    title: "Operator access",
    description: "Priority consideration for workspace invites, pilot dashboards, and product walkthroughs."
  },
  {
    title: "Launch updates",
    description: "Direct communication as NexisGEO moves from concept validation into rollout and product readiness."
  },
  {
    title: "Investor and partner flow",
    description: "A cleaner intake path for agencies, strategic partners, and investors exploring the GEO category."
  }
];

const accessSignals = [
  ["Current stage", "Invite-based waitlist"],
  ["First rollout", "Mumbai pilot operators"],
  ["Primary use case", "AI visibility intelligence"]
];

export default function EarlyAccessPage() {
  return (
    <main className="mx-auto max-w-[104rem] px-4 py-5 sm:px-6 lg:px-8 xl:py-6">
      <div className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr] xl:items-stretch">
        <section className="panel relative overflow-hidden rounded-[36px] p-6 md:p-8 xl:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,209,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(31,111,255,0.08),transparent_28%)]" />
          <div className="relative">
            <span className="eyebrow">Early Access</span>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-ink md:text-[3.6rem] md:leading-[1.02]">
              Request access to the first GEO intelligence workflows.
            </h1>
            <p className="mt-4 max-w-3xl text-[17px] leading-7 text-slate-600">
              NexisGEO is opening access to cafe operators, hospitality teams, local growth partners,
              and early investors who want visibility into how AI systems recommend cafes.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="operator-chip">
                <span className="operator-chip-dot bg-cyan" />
                ChatGPT, Gemini, Claude, Perplexity
              </span>
              <span className="operator-chip">
                <span className="operator-chip-dot bg-amber-300" />
                Launch interest and pilot intake
              </span>
            </div>

            <div className="mt-7 grid gap-3 md:grid-cols-3">
              {accessSignals.map(([label, value]) => (
                <div key={label} className="metric-tile rounded-[24px] p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">
                    {label}
                  </p>
                  <p className="mt-2.5 text-lg font-semibold leading-tight text-ink">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 grid gap-3 xl:grid-cols-3">
              {accessBenefits.map((item) => (
                <div key={item.title} className="surface-card rounded-[24px] p-4">
                  <p className="preview-kicker text-cyan">{item.title}</p>
                  <p className="mt-2.5 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link href="/login" className="font-semibold text-electric transition hover:text-ink">
                View operator login
              </Link>
              <Link href="/" className="text-slate-500 transition hover:text-ink">
                Return to landing page
              </Link>
            </div>
          </div>
        </section>

        <section className="rounded-[36px] xl:self-start">
          <SignupForm />
        </section>
      </div>
    </main>
  );
}
