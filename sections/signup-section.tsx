import { SignupForm } from "@/components/signup-form";

const features = [
  "Priority access to the first GEO monitoring workflows and preview dashboards.",
  "Private launch updates as we move from beta pilots to broader market coverage.",
  "Early invitations for investor briefings, demos, and product feedback sessions."
] as const;

export function SignupSection() {
  return (
    <section
      id="signup"
      className="bg-[#FAFBFE] py-16 font-[family-name:var(--font-jakarta),var(--font-sans),sans-serif] lg:py-20"
    >
      <div className="mx-auto w-[min(100%-40px,1300px)] sm:w-[min(100%-64px,1300px)]">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,510px)_1fr] lg:gap-12">
          <div className="max-w-[560px]">
            <span className="inline-flex items-center rounded-full border border-[#CFE0F7] bg-[#EEF5FF] px-4 py-1.5 font-mono text-[12px] font-semibold uppercase tracking-[0.04em] text-[#2F5BEA]">
              Early Access Signup
            </span>

            <h2 className="mt-5 text-[clamp(1.85rem,3vw,2.65rem)] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#0F172A]">
              Join the Early Access List
            </h2>

            <p className="mt-4 max-w-[540px] text-[16px] font-normal leading-[1.5] text-[#4B5563] sm:text-[17.5px]">
              We are looking for brand leaders, CMOs, operators, and local growth
              teams who want first access to GEO monitoring and AI visibility
              analytics.
            </p>

            {/* Feature Card */}
            <div className="mt-8 max-w-[540px] rounded-[24px] border border-[#E5E7EB] bg-white p-5 shadow-[0_8px_28px_rgba(15,23,42,0.04)] sm:rounded-[28px] sm:p-7">
              <p className="mb-4 font-mono text-[11.5px] font-semibold uppercase tracking-[0.08em] text-[#94A3B8] sm:text-[12px]">
                What you get
              </p>

              <ul className="space-y-3.5">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3.5">
                    <span className="mt-[6px] h-2.5 w-2.5 shrink-0 rounded-full bg-[#4AA3E8]" />
                    <span className="text-[14.5px] font-normal leading-[1.5] text-[#475569] sm:text-[15px]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <SignupForm />
        </div>
      </div>
    </section>
  );
}