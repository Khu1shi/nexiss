"use client";

import { type FormEvent, useState } from "react";

const initialState = {
  name: "",
  email: "",
  company: "",
  industry: "",
  city: ""
};

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
      className="rounded-[32px] border border-slate-100 bg-white p-6 shadow-sm md:p-8"
    >
      {/* Form Header */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
            Request Access
          </p>
          <p className="mt-2 text-sm leading-snug text-slate-500">
            Share a few details and we&apos;ll follow up with launch updates, demos, and invite availability.
          </p>
        </div>
        <span className="shrink-0 rounded-full border border-sky-200 bg-sky-50/50 px-3 py-1 text-xs font-medium text-sky-500">
          Beta
        </span>
      </div>

      {/* Dashboard Graphic Widget Panel */}
      <div className="mb-8 rounded-3xl border border-slate-100 bg-slate-50/50 p-5 md:p-6">
        {/* Top Grid: Access Pipeline (Left) & Priority Segments (Right) */}
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          {/* Left Side: Access Pipeline */}
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Access Pipeline
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-slate-500">
                Invite-based
              </span>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { step: "01", title: "Request", desc: "Domain submitted", dot: "bg-sky-400", active: true },
                { step: "02", title: "Review", desc: "Fit & market", dot: "bg-blue-600", active: false },
                { step: "03", title: "Invite", desc: "Follow-up", dot: "bg-purple-500", active: false }
              ].map((item) => (
                <div
                  key={item.title}
                  className={`rounded-2xl bg-white px-3.5 py-3 transition-all ${
                    item.active
                      ? "border-2 border-sky-300 shadow-xs"
                      : "border border-slate-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-slate-400">{item.step}</span>
                    <span className={`h-2 w-2 rounded-full ${item.dot}`} />
                  </div>
                  <p className="mt-2 text-sm font-bold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-[11px] leading-tight text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Priority Segments */}
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Priority Segments
            </span>

            <div className="mt-4 space-y-3">
              {[
                { label: "Founders", tag: "Pilot-ready", dot: "bg-sky-400" },
                { label: "Agencies", tag: "High fit", dot: "bg-blue-600" },
                { label: "Investors", tag: "Briefing", dot: "bg-purple-500" }
              ].map((segment) => (
                <div
                  key={segment.label}
                  className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white px-4 py-3.5 shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <span className={`h-2.5 w-2.5 rounded-full ${segment.dot}`} />
                    <span className="text-sm font-bold text-slate-800">{segment.label}</span>
                  </div>
                  <span className="rounded-xl border border-slate-100 bg-slate-50/80 px-3 py-1 font-mono text-[11px] text-slate-400">
                    {segment.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full-Width Bottom Section: Waitlist Quality Bar */}
        <div className="mt-6 border-t border-slate-200/50 pt-4">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-mono font-semibold uppercase tracking-[0.2em] text-slate-400">
              Waitlist Quality
            </span>
            <span className="font-mono font-semibold uppercase tracking-wider text-blue-600">
              Prioritized Review
            </span>
          </div>
          <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-200/60">
            <div className="h-full w-[60%] rounded-full bg-blue-500" />
          </div>
        </div>
      </div>

      {/* Input Fields */}
      <div className="grid gap-4 md:grid-cols-2">
        {[
          { key: "name", label: "Name", type: "text" },
          { key: "email", label: "Email", type: "email" },
          { key: "company", label: "Company", type: "text" },
          { key: "industry", label: "Industry", type: "text" },
          { key: "city", label: "City", type: "text", span: true }
        ].map((field) => (
          <label key={field.key} className={field.span ? "md:col-span-2" : ""}>
            <span className="mb-1.5 block text-xs font-semibold text-slate-700">
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
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </label>
        ))}
      </div>

      {/* Footer Action Row */}
      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-xs text-xs text-slate-400 leading-snug">
          We will only use this for launch updates, demos, and investor follow-ups.
        </p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition hover:bg-blue-700 active:scale-98 disabled:cursor-not-allowed disabled:opacity-60"
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