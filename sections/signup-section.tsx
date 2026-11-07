import { SectionHeading } from "@/components/section-heading";
import { SignupForm } from "@/components/signup-form";

const features = [
  "Priority access to the first GEO monitoring workflows and preview dashboards.",
  "Private launch updates as we move from beta pilots to broader market coverage.",
  "Early invitations for investor briefings, demos, and product feedback sessions."
];

export function SignupSection() {
  return (
    <section id="signup" className="section-band py-12">
      <div className="section-shell section-space">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <div className="[&_p]:leading-snug">
  <SectionHeading
    eyebrow="EARLY ACCESS SIGNUP"
    title="Join the Early Access List"
    description="We are looking for brand leaders, CMOs, operators, and local growth teams who want first access to GEO monitoring and AI visibility analytics."
  />
</div>

            {/* Feature Card */}
            <div className="mt-6 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                What you get
              </p>

              <ul className="mt-4 space-y-3">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-[5px] h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500" />
                    <span className="text-sm leading-snug text-slate-600">
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