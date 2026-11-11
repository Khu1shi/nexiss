import Link from "next/link";

import { SignupForm } from "@/components/signup-form";

const HERO_CHIPS = [
  { label: "ChatGPT · Gemini · Claude · Perplexity", dotColor: "bg-[#38A9F2]" },
  { label: "Invite-only pilot", dotColor: "bg-[#5B5BD6]" },
  { label: "Early product access", dotColor: "bg-[#F4B63F]" }
] as const;

type InfoIconKind = "sparkle" | "users" | "target";

const INFO_CARDS: ReadonlyArray<{
  eyebrow: string;
  icon: InfoIconKind;
  title: string;
  description: string;
}> = [
  {
    eyebrow: "WHAT YOU GET",
    icon: "sparkle",
    title: "AI visibility baseline",
    description:
      "See how your brand shows up, ranks, and gets cited across AI answer engines."
  },
  {
    eyebrow: "FIRST COHORT",
    icon: "users",
    title: "Selected pilot teams",
    description: "Limited seats for focused teams ready to put insights into action."
  },
  {
    eyebrow: "PRIMARY OUTCOME",
    icon: "target",
    title: "Know where to improve",
    description:
      "Get clear, actionable insights to strengthen your presence in AI answers."
  }
];

type MiniIconKind = "bolt" | "layers" | "mail";

const MINI_CARDS: ReadonlyArray<{
  icon: MiniIconKind;
  title: string;
  subtitle: string;
  badgeClassName: string;
}> = [
  {
    icon: "bolt",
    title: "Priority onboarding",
    subtitle: "Get set up, fast.",
    badgeClassName: "bg-[#E6F0FF] text-[#2563EB]"
  },
  {
    icon: "layers",
    title: "Product previews",
    subtitle: "See what's coming.",
    badgeClassName: "bg-[#EEEAFE] text-[#7C5CF0]"
  },
  {
    icon: "mail",
    title: "Direct launch updates",
    subtitle: "Be the first to know.",
    badgeClassName: "bg-[#FDF3D8] text-[#E5A01D]"
  }
];

function InfoCardIcon({ kind }: { kind: InfoIconKind }) {
  if (kind === "sparkle") {
    return (
      <div className="flex h-9 w-9 items-center justify-start text-[#2F6BEA]">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
          <path
            d="M12 3.5L13.95 9.05L19.5 11L13.95 12.95L12 18.5L10.05 12.95L4.5 11L10.05 9.05L12 3.5Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  if (kind === "users") {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEEAFE] text-[#7C5CF0]">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-[19px] w-[19px]">
          <path
            d="M15 19V17.5C15 15.84 13.66 14.5 12 14.5H7.5C5.84 14.5 4.5 15.84 4.5 17.5V19M12.25 8.25C12.25 9.77 11.02 11 9.5 11C7.98 11 6.75 9.77 6.75 8.25C6.75 6.73 7.98 5.5 9.5 5.5C11.02 5.5 12.25 6.73 12.25 8.25ZM19.5 19V17.5C19.5 16.17 18.59 15.05 17.35 14.72M15.4 5.72C16.54 6.08 17.35 7.14 17.35 8.4C17.35 9.66 16.54 10.72 15.4 11.08"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E3F7EE] text-[#34C38F]">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-[19px] w-[19px]">
        <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="12" cy="12" r="1.25" fill="currentColor" />
      </svg>
    </div>
  );
}

function MiniCardIcon({ kind }: { kind: MiniIconKind }) {
  if (kind === "bolt") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
        <path
          d="M13 3.5L6.5 13H12L11 20.5L17.5 11H12L13 3.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (kind === "layers") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
        <path
          d="M12 4.5L4.5 8.5L12 12.5L19.5 8.5L12 4.5Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 12.25L12 16.25L19.5 12.25"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 16L12 20L19.5 16"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <rect
        x="4"
        y="5.75"
        width="16"
        height="12.5"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M5.5 7.5L12 12.25L18.5 7.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function EarlyAccessPage() {
  return (
    <main className="relative z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(59,130,246,0.06),transparent_44%),linear-gradient(135deg,#F1F5FD_0%,#FAFBFF_65%,#F7F9FF_100%)] font-[family-name:var(--font-jakarta),var(--font-sans),sans-serif]">
      <section className="mx-auto max-w-[1440px] px-6 py-6 sm:px-8 lg:px-10 lg:py-8">
        <div className="grid grid-cols-1 items-start gap-8 min-[1100px]:grid-cols-[1.16fr_1fr] min-[1100px]:items-center min-[1100px]:gap-10 xl:gap-12">
          {/* Left Column (no outer card) */}
          <div className="flex flex-col">
            <div>
              <span className="inline-flex w-fit items-center rounded-full border border-[#D5E2FA] bg-[#EEF4FF] px-4 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.12em] text-[#2563EB]">
                Early Access Program
              </span>

              <h1 className="mt-4 text-[clamp(32px,3.35vw,50px)] font-extrabold leading-[1.06] tracking-[-0.035em] text-[#0F172A]">
                Get visibility into how AI
                <br className="hidden sm:inline" />{" "}
                <span className="bg-[linear-gradient(90deg,#3B82F6_0%,#7C5CF0_60%,#A855F7_100%)] bg-clip-text text-transparent">
                  recommends
                </span>{" "}
                your brand.
              </h1>

              <p className="mt-3.5 max-w-[520px] text-[16px] font-normal leading-[1.55] text-[#5B6472] sm:text-[17px]">
                Join the first NexisGEO cohort and see how your brand appears, ranks, and gets cited across AI answer engines.
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {HERO_CHIPS.map((chip) => (
                  <span
                    key={chip.label}
                    className="inline-flex items-center gap-2 rounded-full border border-[rgba(99,115,160,0.14)] bg-white px-3.5 py-1.5 text-[12.5px] font-medium text-[#1F2937] shadow-[0_4px_14px_rgba(30,64,175,0.04)] xl:px-4 xl:py-2 xl:text-[13px]"
                  >
                    <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${chip.dotColor}`} />
                    <span>{chip.label}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="grid grid-cols-1 gap-3.5 md:grid-cols-3">
                {INFO_CARDS.map((card) => (
                  <div
                    key={card.eyebrow}
                    className="flex h-full flex-col rounded-[22px] border border-[rgba(99,115,160,0.14)] bg-white p-4 shadow-[0_8px_30px_rgba(30,64,175,0.06)] xl:px-[18px] xl:py-[18px]"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
                      {card.eyebrow}
                    </p>
                    <div className="mt-2.5">
                      <InfoCardIcon kind={card.icon} />
                    </div>
                    <h2 className="mt-2.5 text-[16px] font-bold leading-snug tracking-[-0.025em] text-[#0F172A] xl:text-[17px]">
                      {card.title}
                    </h2>
                    <p className="mt-1.5 text-[13px] leading-[1.52] text-[#6B7280] xl:text-[13.5px]">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-3.5 grid grid-cols-1 gap-3.5 md:grid-cols-3">
                {MINI_CARDS.map((card) => (
                  <div
                    key={card.title}
                    className="flex items-center gap-3 rounded-[20px] border border-[rgba(99,115,160,0.14)] bg-white px-3.5 py-3 shadow-[0_8px_30px_rgba(30,64,175,0.06)] xl:px-4 xl:py-3.5"
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${card.badgeClassName}`}
                    >
                      <MiniCardIcon kind={card.icon} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[13.5px] font-semibold leading-tight text-[#0F172A] xl:text-[14px]">
                        {card.title}
                      </p>
                      <p className="mt-0.5 text-[12px] leading-snug text-[#94A3B8] xl:text-[12.5px]">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div>
            <SignupForm />
          </div>
        </div>

        {/* Utility navigation links moved outside the 2-column Early Access block */}
        <div className="mt-4 flex flex-wrap items-center gap-6 text-[13px] text-[#94A3B8]">
          <Link href="/login" className="transition hover:text-[#2563EB]">
            View operator login
          </Link>
          <Link href="/" className="transition hover:text-[#0F172A]">
            Return to landing page
          </Link>
        </div>
      </section>
    </main>
  );
}
