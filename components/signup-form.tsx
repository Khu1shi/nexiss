"use client";

import { type FormEvent, useState } from "react";

const initialState = {
  name: "",
  email: "",
  company: "",
  industry: "",
  city: ""
};

const pipelineSteps = [
  {
    step: "01",
    title: "Request",
    desc: "Domain submitted",
    dot: "bg-[#5BB8F5]",
    active: true
  },
  {
    step: "02",
    title: "Review",
    desc: "Fit & market",
    dot: "bg-[#2F5BEA]",
    active: false
  },
  {
    step: "03",
    title: "Invite",
    desc: "Follow-up",
    dot: "bg-[#A855F7]",
    active: false
  }
] as const;

const prioritySegments = [
  { label: "Founders", tag: "Pilot-ready", dot: "bg-[#5BB8F5]" },
  { label: "Agencies", tag: "High fit", dot: "bg-[#2F5BEA]" },
  { label: "Investors", tag: "Briefing", dot: "bg-[#A855F7]" }
] as const;

const formFields = [
  { key: "name", label: "Name", type: "text", span: false },
  { key: "email", label: "Email", type: "email", span: false },
  { key: "company", label: "Company", type: "text", span: false },
  { key: "industry", label: "Industry", type: "text", span: false },
  { key: "city", label: "City", type: "text", span: true }
] as const;

export function SignupForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Failed request");
      }

      setStatus("success");
      setMessage("Thanks, you are on the early access list.");
      setFormData(initialState);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 font-[family-name:var(--font-jakarta),var(--font-sans),sans-serif] shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:rounded-[36px] sm:p-8 lg:p-9"
    >
      {/* Form Header */}
      <div className="flex flex-col gap-3 border-b border-[#EEF0F5] pb-5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="min-w-0">
          <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.1em] text-[#64748B]">
            Request Access
          </p>
          <p className="mt-1.5 text-[13px] leading-[1.4] text-[#64748B] xl:text-[13.5px]">
            Share a few details and we&apos;ll follow up with launch updates, demos, and invite availability.
          </p>
        </div>
        <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-[#BFDBFE] bg-[#EAF4FF] px-3.5 py-1 font-mono text-[12px] font-semibold text-[#1D4E89]">
          Beta
        </span>
      </div>

      {/* Dashboard Graphic Widget Panel */}
      <div className="mt-5 rounded-[24px] border border-[#E5E7EB] bg-[#FCFCFD] p-4 sm:rounded-[28px] sm:p-6">
        {/* Top Grid: Access Pipeline (Left) & Priority Segments (Right) */}
        <div className="grid items-start gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6">
          {/* Left Side: Access Pipeline */}
          <div className="min-w-0">
            <div className="flex min-h-[28px] items-center justify-between gap-2">
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-[#94A3B8]">
                Access Pipeline
              </span>
              <span className="rounded-full border border-[#D1D5DB] bg-white px-3 py-0.5 font-mono text-[10.5px] font-semibold uppercase tracking-[0.04em] text-[#1F2937]">
                Invite-based
              </span>
            </div>

            <div className="mt-3.5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              {pipelineSteps.map((item) => (
                <div
                  key={item.title}
                  className={`flex min-h-[104px] flex-col justify-start rounded-[16px] px-3 py-3 transition-colors ${
                    item.active
                      ? "border-[1.5px] border-[#7DC6F5] bg-[#F5FAFF]"
                      : "border border-[#E5E7EB] bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] tracking-normal text-[#94A3B8]">
                      {item.step}
                    </span>
                    <span className={`h-2 w-2 rounded-full ${item.dot}`} />
                  </div>
                  <p className="mt-2 text-[14.5px] font-semibold leading-tight text-[#0F172A]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[11.5px] leading-[1.35] text-[#94A3B8]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Priority Segments */}
          <div className="min-w-0">
            <div className="flex min-h-[28px] items-center">
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-[#94A3B8]">
                Priority Segments
              </span>
            </div>

            <div className="mt-3.5 space-y-2.5">
              {prioritySegments.map((segment) => (
                <div
                  key={segment.label}
                  className="flex items-center justify-between gap-2 rounded-[16px] border border-[#E5E7EB] bg-white px-3.5 py-2.5"
                >
                  <div className="flex min-w-0 items-center gap-2.5">
                    <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${segment.dot}`} />
                    <span className="truncate text-[14.5px] font-normal text-[#0F172A]">
                      {segment.label}
                    </span>
                  </div>
                  <span className="shrink-0 rounded-[8px] border border-[#D1D5DB] bg-[#F3F4F6] px-2.5 py-0.5 font-mono text-[11px] text-[#6B7280]">
                    {segment.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full-Width Bottom Section: Waitlist Quality Bar */}
        <div className="mt-5 border-t border-[#EEF0F5] pt-4">
          <div className="flex items-center justify-between gap-2 text-[11px]">
            <span className="font-mono font-medium uppercase tracking-[0.08em] text-[#94A3B8]">
              Waitlist Quality
            </span>
            <span className="font-mono font-bold uppercase tracking-[0.04em] text-[#2F5BEA]">
              Prioritized Review
            </span>
          </div>
          <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-[#E2E8F0]">
            <div className="h-full w-[60%] rounded-full bg-[linear-gradient(90deg,#5BB8F5_0%,#2F5BEA_100%)]" />
          </div>
        </div>
      </div>

      {/* Input Fields */}
      <div className="mt-5 grid gap-x-5 gap-y-4 sm:grid-cols-2">
        {formFields.map((field) => (
          <label key={field.key} className={field.span ? "sm:col-span-2" : ""}>
            <span className="mb-1.5 block text-[14.5px] font-medium text-[#1F2937]">
              {field.label}
            </span>
            <input
              required={field.key === "name" || field.key === "email"}
              type={field.type}
              value={formData[field.key as keyof typeof formData]}
              onChange={(event) =>
                setFormData((current) => ({
                  ...current,
                  [field.key]: event.target.value
                }))
              }
              placeholder={`Enter ${field.label.toLowerCase()}`}
              className="h-[46px] w-full rounded-full border border-[#E5E7EB] bg-white px-5 text-[14.5px] text-[#0F172A] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#2F5BEA] focus:ring-[3px] focus:ring-[#2F5BEA]/15 sm:h-[50px]"
            />
          </label>
        ))}
      </div>

      {/* Footer Action Row */}
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[12.5px] leading-snug text-[#9CA3AF] xl:text-[13px]">
          We will only use this for launch updates, demos, and investor follow-ups.
        </p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="h-[48px] shrink-0 rounded-full bg-[linear-gradient(180deg,#3B63E8_0%,#2748C9_100%)] px-7 text-[14.5px] font-semibold text-white shadow-[0_8px_20px_rgba(47,91,234,0.26)] transition hover:brightness-105 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Submitting..." : "Request Early Access"}
        </button>
      </div>

      {message ? (
        <p className={`mt-4 text-xs font-medium ${status === "success" ? "text-emerald-600" : "text-rose-500"}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}