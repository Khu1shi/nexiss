import Link from "next/link";

type PlaceholderPageProps = {
  title: string;
  description: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <main className="section-shell section-space">
      <div className="mx-auto max-w-3xl rounded-[32px] border border-slate-200 bg-white/80 p-10 text-center shadow-[0_26px_80px_rgba(71,98,145,0.14)] backdrop-blur-xl">
        <span className="eyebrow">Coming Soon</span>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink">{title}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-electric px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan hover:text-slate-950"
          >
            Back to Landing Page
          </Link>
          <Link
            href="/dashboard"
            className="rounded-full border border-slate-200 bg-white/85 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan/40 hover:text-electric"
          >
            View Platform Overview
          </Link>
        </div>
      </div>
    </main>
  );
}
