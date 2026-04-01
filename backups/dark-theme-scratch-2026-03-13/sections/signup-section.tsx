import { SectionHeading } from "@/components/section-heading";
import { SignupForm } from "@/components/signup-form";

export function SignupSection() {
  return (
    <section id="signup" className="section-shell section-space">
      <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <div>
          <SectionHeading
            eyebrow="Early Access Signup"
            title="Join the Early Access List"
            description="We are looking for founders, agencies, operators, and brand teams who want first access to GEO monitoring and AI visibility analytics."
          />
        </div>
        <SignupForm />
      </div>
    </section>
  );
}
