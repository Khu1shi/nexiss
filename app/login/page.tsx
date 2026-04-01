"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const trustSignals = [
  "Multi-model AI visibility monitoring",
  "Brand ranking and citation intelligence",
  "Global rollout from Mumbai to international markets"
];

const previewStats = [
  { label: "Workspaces", value: "12" },
  { label: "Models connected", value: "04" },
  { label: "Tracked prompts", value: "10k+" }
];

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [notice, setNotice] = useState("Authentication is being enabled in phased rollout.");

  return (
    <main className="mx-auto max-w-[104rem] px-4 py-5 sm:px-6 lg:px-8 xl:py-6">
      <div className="grid gap-5 xl:grid-cols-[minmax(28rem,1.18fr)_minmax(0,2.82fr)] xl:items-stretch">
        <section className="panel relative overflow-hidden rounded-[36px] p-6 md:p-8 xl:mr-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,209,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(31,111,255,0.08),transparent_28%)]" />
          <div className="relative">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-cyan/20 bg-white/90 shadow-[0_12px_30px_rgba(31,111,255,0.12)]">
                <Image
                  src="/brand/nexisgeo-logo.png"
                  alt="NexisGEO logo"
                  width={40}
                  height={40}
                  className="h-9 w-9 object-contain"
                  priority
                />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-[0.3em] text-ink">NEXISGEO</p>
                <p className="font-mono text-xs text-slate-500">AI search intelligence</p>
              </div>
            </Link>

            <div className="mt-6 max-w-lg">
              <span className="eyebrow">Operator Login</span>
              <h1 className="mt-4 max-w-[13ch] text-[3.35rem] font-semibold tracking-tight text-ink leading-[0.98]">
                Access the GEO command layer.
              </h1>
              <p className="mt-3.5 max-w-[34rem] text-[15px] leading-6 text-slate-600">
                Sign in to review AI visibility signals, ranking changes, prompt coverage,
                and workspace activity. Authentication is being staged for launch.
              </p>
            </div>

            <div className="mt-5 grid gap-3">
              <button
                type="button"
                onClick={() => setNotice("SSO will be activated for launch partners and invited workspaces first.")}
                className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(248,250,255,0.96))] px-5 py-3 text-sm font-semibold text-slate-700 shadow-[0_14px_32px_rgba(71,98,145,0.1)] transition hover:border-cyan/30 hover:text-ink"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#4285F4_0deg,#34A853_105deg,#FBBC05_215deg,#EA4335_300deg,#4285F4_360deg)] p-[1px] shadow-[0_10px_24px_rgba(66,133,244,0.18)]">
                  <span className="grid h-full w-full place-items-center rounded-full bg-white text-[13px] font-bold text-slate-700">
                    G
                  </span>
                </span>
                Continue with Google
              </button>

              <div className="relative">
                <div className="absolute inset-y-1/2 left-0 right-0 h-px bg-slate-200" />
                <div className="relative mx-auto w-fit bg-white px-3 font-mono text-xs uppercase tracking-[0.22em] text-slate-400">
                  or continue with email
                </div>
              </div>

              <div className="grid gap-3">
                <label>
                  <span className="mb-2 block text-sm text-slate-600">Work email</span>
                  <input
                    type="email"
                    placeholder="team@nexisgeo.com"
                    className="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-ink outline-none transition placeholder:text-slate-400 focus:border-cyan/40 focus:bg-white"
                  />
                </label>
                <label>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <span className="text-sm text-slate-600">Password</span>
                    <button
                      type="button"
                      className="text-xs font-medium text-electric transition hover:text-ink"
                      onClick={() => setNotice("Password reset will be enabled once account provisioning goes live.")}
                    >
                      Forgot password
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 pr-24 text-ink outline-none transition placeholder:text-slate-400 focus:border-cyan/40 focus:bg-white"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-cyan/30 hover:text-ink"
                      onClick={() => setShowPassword((current) => !current)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </label>
              </div>

              <div className="flex flex-col gap-2.5 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
                <label className="inline-flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe((current) => !current)}
                    className="h-4 w-4 rounded border-slate-300 text-electric focus:ring-cyan/30"
                  />
                  <span>Remember this workspace</span>
                </label>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  Secure invite-only access
                </span>
              </div>

              <button
                type="button"
                className="cta-primary mt-1.5 w-full text-center"
                onClick={() => setNotice("Live auth is not enabled yet. Use early access to request an operator invite.")}
              >
                Sign In
              </button>

              <div className="rounded-2xl border border-cyan/15 bg-cyan/10 px-4 py-3 text-sm leading-6 text-slate-600">
                {notice}
              </div>

              <div className="grid gap-2.5 pt-1.5">
                <div className="grid gap-2.5 sm:grid-cols-[1fr_auto] sm:items-center">
                  <Link href="/early-access" className="cta-secondary text-center">
                    Request Early Access
                  </Link>
                  <Link href="/dashboard" className="font-semibold text-electric transition hover:text-ink">
                    View dashboard route
                  </Link>
                </div>
                <a href="mailto:founders@nexisgeo.com" className="text-sm text-slate-500 transition hover:text-ink">
                  founders@nexisgeo.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="panel relative overflow-hidden rounded-[36px] p-6 md:p-8 xl:min-h-[calc(100vh-6.5rem)] xl:px-10 xl:py-7">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,209,255,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(138,92,255,0.06),transparent_26%)]" />
          <div className="relative">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
                  Workspace Preview
                </p>
                <h2 className="mt-3 max-w-2xl text-[2rem] font-semibold tracking-tight text-ink 2xl:text-[2.35rem] 2xl:leading-[1.08]">
                  A finished AI product entry point, not just a placeholder screen.
                </h2>
              </div>
              <span className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 font-mono text-xs text-cyan">
                Preview
              </span>
            </div>

            <div className="mt-6 grid gap-3 lg:grid-cols-3">
              {previewStats.map((stat) => (
                <div key={stat.label} className="surface-card rounded-2xl p-4">
                  <p className="preview-kicker">{stat.label}</p>
                  <p className="mt-2.5 text-2xl font-semibold text-ink">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[28px] border border-slate-200 bg-white/75 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] xl:p-6">
              <div className="grid gap-3.5 2xl:grid-cols-[0.66fr_1.34fr]">
                <div className="min-w-0 space-y-3.5">
                  <div className="surface-card rounded-2xl p-4">
                    <p className="preview-kicker text-cyan">Account State</p>
                    <p className="mt-2.5 text-2xl font-semibold text-ink">Invite-only rollout</p>
                    <p className="mt-2.5 text-sm leading-6 text-slate-600">
                      Workspace access is being granted to early operators, pilot cafes, and
                      strategic partners.
                    </p>
                  </div>

                  <div className="surface-card rounded-2xl p-4">
                    <p className="preview-kicker">Included in access</p>
                    <div className="mt-3.5 space-y-2.5">
                      {trustSignals.map((item) => (
                        <div key={item} className="list-check">
                          <span className="list-check-dot" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="min-w-0 grid gap-3.5">
                  <div className="surface-card rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <p className="preview-kicker">Workspace activity</p>
                      <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
                        Live signals
                      </span>
                    </div>
                    <div className="mt-4 grid gap-3.5 2xl:grid-cols-2">
                      <div className="min-w-0 rounded-2xl bg-[linear-gradient(180deg,rgba(79,209,255,0.18),rgba(31,111,255,0.06))] p-4">
                        <p className="preview-kicker">Prompt Visibility</p>
                        <p className="mt-2.5 text-3xl font-semibold text-ink">78.4</p>
                        <div className="mt-3.5 h-2 rounded-full bg-white/70">
                          <div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-electric via-cyan to-violet" />
                        </div>
                      </div>
                      <div className="min-w-0 rounded-2xl border border-slate-200 bg-white/85 p-4">
                        <p className="preview-kicker">Model Split</p>
                        <div className="mt-3.5 space-y-2.5">
                          {[
                            ["ChatGPT", "34%"],
                            ["Gemini", "26%"],
                            ["Claude", "21%"]
                          ].map(([label, value]) => (
                            <div key={label}>
                              <div className="flex items-center justify-between text-sm text-slate-600">
                                <span>{label}</span>
                                <span>{value}</span>
                              </div>
                              <div className="mt-2 h-2 rounded-full bg-slate-200">
                                <div
                                  className="h-2 rounded-full bg-gradient-to-r from-cyan to-electric"
                                  style={{ width: value }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="surface-card rounded-2xl p-4">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="preview-kicker max-w-[16rem]">Upcoming portal surfaces</p>
                      <span className="text-xs font-semibold text-electric">Next build phase</span>
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                      {["Dashboard Home", "Global Monitoring", "Competitor Intel"].map((item, index) => (
                        <div key={item} className="min-w-0 rounded-2xl border border-slate-200 bg-white/85 p-4">
                          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                            {`0${index + 1}`}
                          </p>
                          <p className="mt-2.5 text-base font-semibold leading-8 text-ink">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="surface-card rounded-2xl p-4">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="preview-kicker">Recent operator access</p>
                      <span className="text-xs font-semibold text-slate-500">Sample activity</span>
                    </div>
                    <div className="mt-4 grid gap-3 xl:grid-cols-3">
                      {[
                        ["Mumbai workspace", "2 mins ago"],
                        ["Growth operator", "7 mins ago"],
                        ["Investor brief room", "14 mins ago"]
                      ].map(([label, time]) => (
                        <div key={label} className="rounded-2xl border border-slate-200 bg-white/85 p-3.5">
                          <p className="text-sm font-semibold text-ink">{label}</p>
                          <p className="mt-2 text-sm text-slate-500">{time}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
