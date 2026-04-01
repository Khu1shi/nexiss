import { SectionHeading } from "@/components/section-heading";
import { SignupForm } from "@/components/signup-form";

export function SignupSection() {
  return (
    <section id="signup" className="section-band">
      <div className="section-shell section-space">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <div>
          <SectionHeading
            eyebrow="Early Access Signup"
            title="Join the Early Access List"
            description="We are looking for cafe owners, operators, and local growth teams who want first access to GEO monitoring and AI visibility analytics."
          />

          <div className="mt-8 rounded-[28px] border border-slate-200 bg-white/75 p-6 shadow-[0_22px_60px_rgba(71,98,145,0.12)] backdrop-blur-xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">What you get</p>
            <div className="mt-5 space-y-3">
              <div className="list-check">
                <span className="list-check-dot" />
                <span>Priority access to the first GEO monitoring workflows and preview dashboards.</span>
              </div>
              <div className="list-check">
                <span className="list-check-dot" />
                <span>Private launch updates as we move from Mumbai pilots to broader market coverage.</span>
              </div>
              <div className="list-check">
                <span className="list-check-dot" />
                <span>Early invitations for investor briefings, demos, and product feedback sessions.</span>
              </div>
            </div>
          </div>
        </div>
        <SignupForm />
      </div>
      </div>
    </section>
  );
}
