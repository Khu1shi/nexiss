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
    <form onSubmit={handleSubmit} className="panel rounded-[32px] p-6 md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        {[
          { key: "name", label: "Name", type: "text" },
          { key: "email", label: "Email", type: "email" },
          { key: "company", label: "Company", type: "text" },
          { key: "industry", label: "Industry", type: "text" },
          { key: "city", label: "City", type: "text", span: true }
        ].map((field) => (
          <label key={field.key} className={field.span ? "md:col-span-2" : ""}>
            <span className="mb-2 block text-sm text-slate-300">{field.label}</span>
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
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan/40"
            />
          </label>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-400">
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
