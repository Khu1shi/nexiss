"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const TRUST_SIGNALS = [
  { label: "Multi-model AI visibility monitoring", dotColor: "bg-[#38A9F2]" },
  { label: "Brand ranking and citation intelligence", dotColor: "bg-[#5B5BD6]" },
  { label: "Global rollout from Mumbai to international markets", dotColor: "bg-[#34C38F]" }
] as const;

const PREVIEW_STATS = [
  { label: "Workspaces", value: "12" },
  { label: "Models connected", value: "04" },
  { label: "Tracked prompts", value: "10k+" }
] as const;

const MODEL_SPLIT = [
  { label: "ChatGPT", value: "34%" },
  { label: "Gemini", value: "26%" },
  { label: "Claude", value: "21%" }
] as const;

const UPCOMING_SURFACES = [
  { step: "01", title: "Dashboard Home", active: true },
  { step: "02", title: "Global Monitoring", active: false },
  { step: "03", title: "Competitor Intel", active: false }
] as const;

const RECENT_ACCESS = [
  { label: "Mumbai workspace", time: "2 mins ago" },
  { label: "Growth operator", time: "7 mins ago" },
  { label: "Investor brief room", time: "14 mins ago" }
] as const;

const inputClassName =
  "h-[40px] w-full rounded-[12px] border border-[#E3E8F2] bg-white px-3.5 text-[13.5px] text-[#0F172A] outline-none transition placeholder:text-[#9CA3AF] focus:border-[1.5px] focus:border-[#2563EB] focus:ring-[3px] focus:ring-[#2563EB]/12";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [notice, setNotice] = useState("Authentication is being enabled in phased rollout.");

  return (
    <main className="relative z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(59,130,246,0.06),transparent_44%),linear-gradient(135deg,#F1F5FD_0%,#FAFBFF_65%,#F7F9FF_100%)] font-[family-name:var(--font-jakarta),var(--font-sans),sans-serif]">
      <section className="mx-auto max-w-[1440px] px-6 py-5 sm:px-8 lg:px-10 lg:py-6">
        <div className="grid grid-cols-1 items-start gap-8 min-[1100px]:grid-cols-[minmax(380px,430px)_1fr] min-[1100px]:items-center xl:gap-10">
          {/* Left Column: Operator Login Card */}
          <section className="rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_12px_40px_rgba(30,64,175,0.08)] md:rounded-[28px] md:p-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-[rgba(99,115,160,0.18)] bg-[#F8FAFF] shadow-[0_4px_14px_rgba(30,64,175,0.08)]">
                <Image
                  src="/brand/nexisgeo-logo.png"
                  alt="NexisGEO logo"
                  width={36}
                  height={36}
                  className="h-7 w-7 object-contain"
                  priority
                />
              </div>
              <div>
                <p className="text-[13px] font-bold tracking-[0.22em] text-[#0F172A]">NEXISGEO</p>
                <p className="text-[11.5px] font-medium text-[#6B7280]">AI search intelligence</p>
              </div>
            </Link>

            <div className="mt-4">
              <span className="inline-flex w-fit items-center rounded-full border border-[#D5E2FA] bg-[#EEF4FF] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2563EB]">
                Operator Login
              </span>
              <h1 className="mt-3 text-[clamp(28px,2.5vw,38px)] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#0F172A]">
                Access the GEO{" "}
                <span className="bg-[linear-gradient(90deg,#3B82F6_0%,#7C5CF0_60%,#A855F7_100%)] bg-clip-text text-transparent">
                  command layer.
                </span>
              </h1>
              <p className="mt-2.5 text-[13.5px] leading-[1.55] text-[#5B6472]">
                Sign in to review AI visibility signals, ranking changes, prompt coverage,
                and workspace activity. Authentication is being staged for launch.
              </p>
            </div>

            <div className="mt-4 space-y-3">
              <button
                type="button"
                onClick={() =>
                  setNotice("SSO will be activated for launch partners and invited workspaces first.")
                }
                className="flex h-[42px] w-full items-center justify-center gap-2.5 rounded-[12px] border border-[#E3E8F2] bg-white px-4 text-[13.5px] font-semibold text-[#1F2937] shadow-[0_2px_10px_rgba(30,64,175,0.04)] transition hover:border-[#C7D7F7] hover:bg-[#FBFCFF]"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#4285F4_0deg,#34A853_105deg,#FBBC05_215deg,#EA4335_300deg,#4285F4_360deg)] p-[1px]">
                  <span className="grid h-full w-full place-items-center rounded-full bg-white text-[11px] font-bold text-[#1F2937]">
                    G
                  </span>
                </span>
                Continue with Google
              </button>

              <div className="relative">
                <div className="absolute inset-y-1/2 left-0 right-0 h-px bg-[#E5E9F2]" />
                <div className="relative mx-auto w-fit bg-white px-3 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#94A3B8]">
                  or continue with email
                </div>
              </div>

              <div className="space-y-2.5">
                <div>
                  <label
                    htmlFor="login-work-email"
                    className="mb-1 block text-[13px] font-semibold text-[#374151]"
                  >
                    Work email
                  </label>
                  <input
                    id="login-work-email"
                    type="email"
                    placeholder="team@nexisgeo.com"
                    className={inputClassName}
                  />
                </div>

                <div>
                  <div className="mb-1 flex items-center justify-between gap-4">
                    <label
                      htmlFor="login-password"
                      className="text-[13px] font-semibold text-[#374151]"
                    >
                      Password
                    </label>
                    <button
                      type="button"
                      className="text-[12px] font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
                      onClick={() =>
                        setNotice("Password reset will be enabled once account provisioning goes live.")
                      }
                    >
                      Forgot password
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      id="login-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className={`${inputClassName} pr-20`}
                    />
                    <button
                      type="button"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full border border-[#E3E8F2] bg-[#FBFCFF] px-2.5 py-0.5 text-[11.5px] font-semibold text-[#4B5563] transition hover:border-[#CBD5E1] hover:text-[#0F172A]"
                      onClick={() => setShowPassword((current) => !current)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
                <label
                  htmlFor="login-remember-me"
                  className="inline-flex cursor-pointer select-none items-center gap-2"
                >
                  <input
                    id="login-remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe((current) => !current)}
                    className="peer sr-only"
                  />
                  <span
                    aria-hidden="true"
                    className="flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-[5px] border border-[#CBD5E1] bg-white transition peer-checked:border-[#2563EB] peer-checked:bg-[#2563EB] peer-focus-visible:ring-[3px] peer-focus-visible:ring-[#2563EB]/20"
                  >
                    {rememberMe ? (
                      <svg viewBox="0 0 12 10" fill="none" className="h-2.5 w-2.5 text-white">
                        <path
                          d="M1.5 5L4.5 8L10.5 2"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : null}
                  </span>
                  <span className="text-[12.5px] font-medium text-[#374151]">
                    Remember this workspace
                  </span>
                </label>
                <span className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#94A3B8]">
                  Secure invite-only access
                </span>
              </div>

              <button
                type="button"
                className="flex h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(180deg,#2563EB_0%,#1D4ED8_100%)] px-6 text-[14.5px] font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)] transition hover:brightness-105 active:scale-[0.99]"
                onClick={() =>
                  setNotice("Live auth is not enabled yet. Use early access to request an operator invite.")
                }
              >
                <span>Sign In</span>
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-4 w-4">
                  <path
                    d="M3.33 8H12.67M8.67 4L12.67 8L8.67 12"
                    stroke="currentColor"
                    strokeWidth="1.65"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                role="status"
                className="rounded-[12px] border border-[#D5E2FA] bg-[#F1F5FD] px-3.5 py-2.5 text-[12.5px] leading-[1.45] text-[#475569]"
              >
                {notice}
              </div>

              <div className="space-y-2 pt-0.5">
                <div className="grid gap-2.5 sm:grid-cols-[1fr_auto] sm:items-center">
                  <Link
                    href="/early-access"
                    className="flex h-[38px] items-center justify-center rounded-full border border-[rgba(99,115,160,0.2)] bg-white px-4 text-[13px] font-semibold text-[#1F2937] shadow-[0_2px_10px_rgba(30,64,175,0.04)] transition hover:border-[#2563EB]/40 hover:text-[#2563EB]"
                  >
                    Request Early Access
                  </Link>
                  <Link
                    href="/dashboard"
                    className="text-center text-[13px] font-semibold text-[#2563EB] transition hover:text-[#0F172A]"
                  >
                    View dashboard route
                  </Link>
                </div>
                <a
                  href="mailto:founders@nexisgeo.com"
                  className="inline-block text-[12.5px] text-[#94A3B8] transition hover:text-[#0F172A]"
                >
                  founders@nexisgeo.com
                </a>
              </div>
            </div>
          </section>

          {/* Right Column: Workspace Preview (sits cleanly on the page background like Early Access left column) */}
          <section className="flex flex-col">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex w-fit items-center rounded-full border border-[#D5E2FA] bg-[#EEF4FF] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2563EB]">
                  Workspace Preview
                </span>
                <h2 className="mt-3 max-w-[680px] text-[clamp(24px,2.2vw,34px)] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0F172A]">
                  A finished AI product entry point, not just a placeholder screen.
                </h2>
              </div>
              <span className="shrink-0 rounded-full border border-[rgba(99,115,160,0.16)] bg-white px-3.5 py-1 text-[11.5px] font-semibold text-[#2563EB] shadow-[0_4px_14px_rgba(30,64,175,0.04)]">
                Preview
              </span>
            </div>

            {/* 3 KPI Stat Cards */}
            <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
              {PREVIEW_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[20px] border border-[rgba(99,115,160,0.14)] bg-white px-4 py-3.5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
                    {stat.label}
                  </p>
                  <p className="mt-1.5 text-[26px] font-extrabold leading-none tracking-[-0.03em] text-[#0F172A]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Preview Bento Grid */}
            <div className="mt-3.5 grid gap-3.5 lg:grid-cols-[0.76fr_1.24fr]">
              {/* Left Sub-column */}
              <div className="flex flex-col gap-3.5">
                <div className="rounded-[22px] border border-[rgba(99,115,160,0.14)] bg-white p-4 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                    Account State
                  </p>
                  <p className="mt-2 text-[20px] font-bold leading-tight tracking-[-0.02em] text-[#0F172A]">
                    Invite-only rollout
                  </p>
                  <p className="mt-2 text-[13px] leading-[1.55] text-[#6B7280]">
                    Workspace access is being granted to early operators, pilot cafes, and
                    strategic partners.
                  </p>
                </div>

                <div className="flex-1 rounded-[22px] border border-[rgba(99,115,160,0.14)] bg-white p-4 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
                    Included in access
                  </p>
                  <div className="mt-3 space-y-2.5">
                    {TRUST_SIGNALS.map((item) => (
                      <div key={item.label} className="flex items-start gap-2.5">
                        <span
                          className={`mt-[6px] h-2 w-2 shrink-0 rounded-full ${item.dotColor}`}
                        />
                        <span className="text-[13px] leading-[1.48] text-[#4B5563]">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Sub-column */}
              <div className="flex flex-col gap-3.5">
                {/* Workspace Activity */}
                <div className="rounded-[22px] border border-[rgba(99,115,160,0.14)] bg-white p-4 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
                      Workspace activity
                    </p>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E3F7EE] px-2.5 py-0.5 text-[11px] font-semibold text-[#15803D]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#34C38F]" />
                      Live signals
                    </span>
                  </div>

                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <div className="flex flex-col justify-between rounded-[16px] border border-[#D5E2FA] bg-[#F4F8FF] p-3.5">
                      <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
                        Prompt Visibility
                      </p>
                      <div className="mt-2">
                        <p className="text-[28px] font-extrabold leading-none tracking-[-0.03em] text-[#0F172A]">
                          78.4
                        </p>
                        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
                          <div className="h-full w-[78%] rounded-full bg-[linear-gradient(90deg,#3B82F6_0%,#7C5CF0_60%,#A855F7_100%)]" />
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] p-3.5">
                      <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
                        Model Split
                      </p>
                      <div className="mt-2.5 space-y-2">
                        {MODEL_SPLIT.map((item) => (
                          <div key={item.label}>
                            <div className="flex items-center justify-between text-[12px] font-medium text-[#4B5563]">
                              <span>{item.label}</span>
                              <span className="font-semibold text-[#0F172A]">{item.value}</span>
                            </div>
                            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-[#E5E9F2]">
                              <div
                                className="h-full rounded-full bg-[linear-gradient(90deg,#38A9F2_0%,#2563EB_100%)]"
                                style={{ width: item.value }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Upcoming Portal Surfaces */}
                <div className="rounded-[22px] border border-[rgba(99,115,160,0.14)] bg-white p-4 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
                      Upcoming portal surfaces
                    </p>
                    <span className="text-[12px] font-semibold text-[#2563EB]">
                      Next build phase
                    </span>
                  </div>

                  <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
                    {UPCOMING_SURFACES.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] p-3"
                      >
                        <span
                          className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-semibold ${
                            item.active
                              ? "bg-[#2563EB] text-white shadow-[0_4px_12px_rgba(37,99,235,0.22)]"
                              : "border border-[rgba(99,115,160,0.2)] bg-[#F1F5FD] text-[#64748B]"
                          }`}
                        >
                          {item.step}
                        </span>
                        <p className="mt-2 text-[13.5px] font-bold leading-snug text-[#0F172A]">
                          {item.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Operator Access */}
                <div className="rounded-[22px] border border-[rgba(99,115,160,0.14)] bg-white p-4 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
                      Recent operator access
                    </p>
                    <span className="text-[12px] font-medium text-[#94A3B8]">
                      Sample activity
                    </span>
                  </div>

                  <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
                    {RECENT_ACCESS.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[16px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] px-3.5 py-2.5"
                      >
                        <p className="text-[13px] font-semibold leading-snug text-[#0F172A]">
                          {item.label}
                        </p>
                        <p className="mt-0.5 text-[12px] text-[#94A3B8]">{item.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
