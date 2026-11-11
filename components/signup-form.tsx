"use client";

import { type FormEvent, useState } from "react";

type SignupFormData = {
  fullName: string;
  workEmail: string;
  company: string;
  role: string;
  cityMarket: string;
  primaryGoal: string;
  optIn: boolean;
};

const initialState: SignupFormData = {
  fullName: "",
  workEmail: "",
  company: "",
  role: "",
  cityMarket: "",
  primaryGoal: "",
  optIn: false
};

const ACCESS_STEPS = [
  {
    step: "01",
    title: "Request",
    description: "Submit your details",
    active: true
  },
  {
    step: "02",
    title: "Review",
    description: "We evaluate fit and needs",
    active: false
  },
  {
    step: "03",
    title: "Invite",
    description: "Get your access",
    active: false
  }
] as const;

type AudienceIconKind = "building" | "users" | "shield";

const TARGET_AUDIENCE: ReadonlyArray<{
  label: string;
  icon: AudienceIconKind;
}> = [
  { label: "Brands & operators", icon: "building" },
  { label: "Agencies & growth teams", icon: "users" },
  { label: "Strategic partners & investors", icon: "shield" }
];

const ROLE_OPTIONS = [
  "Founder / Executive",
  "Marketing / Growth",
  "Agency",
  "Operator",
  "Investor",
  "Other"
] as const;

const PRIMARY_GOAL_OPTIONS = [
  "Track AI visibility",
  "Improve rankings & citations",
  "Benchmark competitors",
  "Explore investment",
  "Other"
] as const;

type FormFieldConfig = {
  key: Exclude<keyof SignupFormData, "optIn">;
  id: string;
  label: string;
  kind: "input" | "select";
  inputType?: "text" | "email";
  placeholder: string;
  required?: boolean;
  options?: readonly string[];
};

const FORM_FIELDS: readonly FormFieldConfig[] = [
  {
    key: "fullName",
    id: "early-access-full-name",
    label: "Full name",
    kind: "input",
    inputType: "text",
    placeholder: "Enter your full name",
    required: true
  },
  {
    key: "workEmail",
    id: "early-access-work-email",
    label: "Work email",
    kind: "input",
    inputType: "email",
    placeholder: "Enter your work email",
    required: true
  },
  {
    key: "company",
    id: "early-access-company",
    label: "Company",
    kind: "input",
    inputType: "text",
    placeholder: "Enter company name"
  },
  {
    key: "role",
    id: "early-access-role",
    label: "Role",
    kind: "select",
    placeholder: "Select your role",
    options: ROLE_OPTIONS
  },
  {
    key: "cityMarket",
    id: "early-access-city-market",
    label: "City / Market",
    kind: "input",
    inputType: "text",
    placeholder: "Enter city or market"
  },
  {
    key: "primaryGoal",
    id: "early-access-primary-goal",
    label: "Primary goal",
    kind: "select",
    placeholder: "Select your primary goal",
    options: PRIMARY_GOAL_OPTIONS
  }
];

function AudienceIcon({ kind }: { kind: AudienceIconKind }) {
  if (kind === "building") {
    return (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        className="h-[18px] w-[18px] shrink-0 text-[#2563EB]"
      >
        <path
          d="M3.5 16.5H16.5M5 16.5V5.25C5 4.56 5.56 4 6.25 4H10.75C11.44 4 12 4.56 12 5.25V16.5M12 8.5H14.25C14.94 8.5 15.5 9.06 15.5 9.75V16.5M7.5 7H9.5M7.5 10H9.5M7.5 13H9.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (kind === "users") {
    return (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        className="h-[18px] w-[18px] shrink-0 text-[#2563EB]"
      >
        <path
          d="M12.5 15.75V14.5C12.5 13.12 11.38 12 10 12H5.5C4.12 12 3 13.12 3 14.5V15.75M10 6.75C10 8.13 8.88 9.25 7.5 9.25C6.12 9.25 5 8.13 5 6.75C5 5.37 6.12 4.25 7.5 4.25C8.88 4.25 10 5.37 10 6.75ZM17 15.75V14.5C17 13.41 16.25 12.49 15.25 12.16M13.5 4.41C14.43 4.74 15.1 5.63 15.1 6.68C15.1 7.73 14.43 8.62 13.5 8.95"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="h-[18px] w-[18px] shrink-0 text-[#2563EB]"
    >
      <path
        d="M10 2.75L15.75 5V9.5C15.75 13.15 13.3 16.32 10 17.25C6.7 16.32 4.25 13.15 4.25 9.5V5L10 2.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 7.25V12.25M7.5 9.75H12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StepConnector() {
  return (
    <div
      aria-hidden="true"
      className="hidden min-[480px]:flex flex-1 items-center px-1.5 sm:px-2"
    >
      <div className="h-px flex-1 bg-[#CBD5E1]" />
      <svg
        viewBox="0 0 8 8"
        fill="none"
        className="-ml-0.5 h-2 w-2 shrink-0 text-[#CBD5E1]"
      >
        <path
          d="M2 1.5L5.5 4L2 6.5"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

const fieldClassName =
  "h-[40px] w-full rounded-[12px] border border-[#E3E8F2] bg-white px-3.5 text-[13.5px] outline-none transition focus:border-[1.5px] focus:border-[#2563EB] focus:ring-[3px] focus:ring-[#2563EB]/12";

export function SignupForm() {
  const [formData, setFormData] = useState<SignupFormData>(initialState);
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
      className="rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 font-[family-name:var(--font-jakarta),var(--font-sans),sans-serif] shadow-[0_12px_40px_rgba(30,64,175,0.08)] md:rounded-[28px] md:p-6"
    >
      {/* Header */}
      <div>
        <p className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#2F4FD8] sm:text-[13px]">
          Request Early Access
        </p>
        <p className="mt-1.5 max-w-[90%] text-[13.5px] leading-[1.45] text-[#6B7280] sm:text-[14px]">
          Tell us a little about your team. We&apos;ll review your request and contact you with next steps.
        </p>
      </div>

      {/* Two Info Panels */}
      <div className="mt-4 grid gap-3.5 md:grid-cols-[1.24fr_1fr] md:items-stretch">
        {/* Left Panel: Access Path */}
        <div className="flex flex-col justify-between rounded-[20px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] px-4 py-3.5 sm:px-4 sm:py-4">
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
            Access Path
          </p>

          <div className="mt-3">
            <div className="grid grid-cols-3 items-center">
              {ACCESS_STEPS.map((item, index) => (
                <div key={item.step} className="flex items-center">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[12px] font-semibold sm:h-10 sm:w-10 sm:text-[12.5px] ${
                      item.active
                        ? "bg-[#2563EB] text-white shadow-[0_6px_16px_rgba(37,99,235,0.24)]"
                        : "border border-[rgba(99,115,160,0.2)] bg-[#F1F5FD] text-[#64748B]"
                    }`}
                  >
                    {item.step}
                  </span>
                  {index < ACCESS_STEPS.length - 1 ? <StepConnector /> : null}
                </div>
              ))}
            </div>

            <div className="mt-2.5 grid grid-cols-3">
              {ACCESS_STEPS.map((item, index) => (
                <div
                  key={item.title}
                  className={
                    index === 0
                      ? "border-r border-[#E5E9F2] pr-2"
                      : index === 1
                        ? "border-r border-[#E5E9F2] px-2"
                        : "pl-2"
                  }
                >
                  <p className="text-[13.5px] font-bold leading-tight text-[#0F172A] sm:text-[14px]">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-[11px] leading-[1.32] text-[#94A3B8] sm:text-[11.5px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel: Who It's For */}
        <div className="flex flex-col justify-between rounded-[20px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] px-3.5 py-3.5 sm:px-4 sm:py-4">
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
            Who It&apos;s For
          </p>

          <div className="mt-3 flex flex-col gap-2">
            {TARGET_AUDIENCE.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-full border border-[rgba(99,115,160,0.14)] bg-white px-3 py-1.5 shadow-[0_2px_8px_rgba(30,64,175,0.03)]"
              >
                <AudienceIcon kind={item.icon} />
                <span className="text-[12px] font-medium leading-tight text-[#0F172A] xl:text-[12.5px]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Fields */}
      <div className="mt-4 grid gap-x-4 gap-y-3 sm:grid-cols-2">
        {FORM_FIELDS.map((field) => {
          const value = formData[field.key];
          return (
            <div key={field.key}>
              <label
                htmlFor={field.id}
                className="mb-1 block text-[13px] font-semibold text-[#374151]"
              >
                {field.label}
              </label>

              {field.kind === "select" ? (
                <div className="relative">
                  <select
                    id={field.id}
                    name={field.key}
                    value={value}
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        [field.key]: event.target.value
                      }))
                    }
                    className={`${fieldClassName} appearance-none pr-9 ${
                      value ? "text-[#0F172A]" : "text-[#9CA3AF]"
                    }`}
                  >
                    <option value="" className="text-[#9CA3AF]">
                      {field.placeholder}
                    </option>
                    {field.options?.map((option) => (
                      <option key={option} value={option} className="text-[#0F172A]">
                        {option}
                      </option>
                    ))}
                  </select>
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7280]"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ) : (
                <input
                  id={field.id}
                  name={field.key}
                  required={field.required}
                  type={field.inputType}
                  value={value}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      [field.key]: event.target.value
                    }))
                  }
                  placeholder={field.placeholder}
                  className={`${fieldClassName} text-[#0F172A] placeholder:text-[#9CA3AF]`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Opt-in Checkbox */}
      <label
        htmlFor="early-access-opt-in"
        className="mt-3.5 flex cursor-pointer select-none items-center gap-2.5"
      >
        <input
          id="early-access-opt-in"
          name="optIn"
          type="checkbox"
          checked={formData.optIn}
          onChange={(event) =>
            setFormData((current) => ({
              ...current,
              optIn: event.target.checked
            }))
          }
          className="peer sr-only"
        />
        <span
          aria-hidden="true"
          className="flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-[5px] border border-[#CBD5E1] bg-white transition peer-checked:border-[#2563EB] peer-checked:bg-[#2563EB] peer-focus-visible:ring-[3px] peer-focus-visible:ring-[#2563EB]/20"
        >
          {formData.optIn ? (
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
        <span className="text-[13px] text-[#374151] sm:text-[13.5px]">
          I&apos;d like launch updates and product news.
        </span>
      </label>

      {/* Full-Width CTA */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-3.5 flex h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(180deg,#2563EB_0%,#1D4ED8_100%)] px-6 text-[14.5px] font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)] transition hover:brightness-105 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 sm:text-[15px]"
      >
        <span>{status === "loading" ? "Submitting..." : "Request Early Access"}</span>
        {status !== "loading" ? (
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-4 w-4">
            <path
              d="M3.33 8H12.67M8.67 4L12.67 8L8.67 12"
              stroke="currentColor"
              strokeWidth="1.65"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
      </button>

      {/* Privacy Note */}
      <p className="mt-2.5 text-[11.5px] leading-snug text-[#94A3B8] xl:text-[12px]">
        We&apos;ll only use your details for NexisGEO access, product updates, and relevant follow-ups.
      </p>

      {message ? (
        <p
          role="status"
          className={`mt-2.5 text-[12.5px] font-medium ${
            status === "success" ? "text-emerald-600" : "text-rose-500"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
