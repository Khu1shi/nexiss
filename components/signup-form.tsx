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
    <form onSubmit={handleSubmit} className="panel rounded-[32px] p-5 md:p-6 xl:p-7">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">Request Access</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Share a few details and we&apos;ll follow up with launch updates, demos, and invite availability.
          </p>
        </div>
        <span className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-[11px] font-semibold text-cyan">
          Beta
        </span>
      </div>

      <div className="access-graphic mb-5 rounded-[24px] p-4">
        <div className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-2xl border border-white/60 bg-white/70 p-4">
            <div className="flex items-center justify-between gap-4">
              <p className="preview-kicker text-cyan">Access pipeline</p>
              <span className="rounded-full border border-electric/15 bg-electric/5 px-2.5 py-1 text-[11px] font-semibold text-electric">
                Invite-based
              </span>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                ["01", "Request", "Application submitted"],
                ["02", "Review", "Fit and market relevance"],
                ["03", "Invite", "Workspace follow-up"]
              ].map(([step, title, note], index) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white/85 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
                      {step}
                    </span>
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        index === 0 ? "bg-cyan" : index === 1 ? "bg-electric" : "bg-violet"
                      }`}
                    />
                  </div>
                  <p className="mt-3 text-base font-semibold text-ink">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{note}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-white/85 p-4">
              <div className="flex items-center justify-between gap-4">
                <p className="preview-kicker">Waitlist quality</p>
                <span className="text-xs font-semibold text-electric">Prioritized review</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-slate-200">
                <div className="h-2 w-[72%] rounded-full bg-gradient-to-r from-electric via-cyan to-violet" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(243,248,255,0.88))] p-4">
            <p className="preview-kicker">Priority segments</p>
            <div className="mt-4 space-y-3">
              {[
                ["Founders", "Pilot-ready"],
                ["Agencies", "High fit"],
                ["Investors", "Briefing"]
              ].map(([label, tag], index) => (
                <div key={label} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-slate-200 bg-white/85 px-4 py-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        index === 0 ? "bg-cyan" : index === 1 ? "bg-electric" : "bg-violet"
                      }`}
                    />
                    <span className="truncate text-sm font-medium text-slate-700">{label}</span>
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-500">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {[
          { key: "name", label: "Name", type: "text" },
          { key: "email", label: "Email", type: "email" },
          { key: "company", label: "Company", type: "text" },
          { key: "industry", label: "Industry", type: "text" },
          { key: "city", label: "City", type: "text", span: true }
        ].map((field) => (
          <label key={field.key} className={field.span ? "md:col-span-2" : ""}>
            <span className="mb-1.5 block text-sm text-slate-600">{field.label}</span>
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
              className="w-full rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 text-ink outline-none transition placeholder:text-slate-400 focus:border-cyan/40 focus:bg-white"
            />
          </label>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="max-w-md text-sm leading-6 text-slate-600">
          We will only use this for launch updates, demos, and investor follow-ups.
        </p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-electric px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Submitting..." : "Request Early Access"}
        </button>
      </div>

      {message ? (
        <p className={`mt-4 text-sm ${status === "success" ? "text-cyan" : "text-rose-300"}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
