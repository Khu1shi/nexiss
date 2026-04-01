import Link from "next/link";

type ToolCardProps = {
  title: string;
  description: string;
  href: string;
  accent: string;
};

export function ToolCard({ title, description, href, accent }: ToolCardProps) {
  return (
    <div className="panel interactive-surface group rounded-[28px] p-6">
      <div
        className={`h-52 overflow-hidden rounded-[24px] border border-slate-200/80 bg-gradient-to-br ${accent} p-4`}
      >
        <div className="grid h-full grid-cols-[1.12fr_0.88fr] gap-3">
          <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-3">
            <div className="space-y-2">
              <div className="h-2 w-20 rounded-full bg-cyan/80" />
              <div className="h-2 w-full rounded-full bg-slate-200" />
              <div className="h-2 w-4/5 rounded-full bg-slate-200" />
              <div className="mt-3 grid grid-cols-3 gap-2">
                <div className="h-8 rounded-xl bg-slate-100" />
                <div className="h-8 rounded-xl bg-slate-100" />
                <div className="h-8 rounded-xl bg-slate-100" />
              </div>
            </div>
          </div>
          <div className="space-y-3 rounded-2xl border border-slate-200/80 bg-white/70 p-3">
            <div className="h-16 rounded-2xl bg-[linear-gradient(180deg,rgba(79,209,255,0.22),rgba(31,111,255,0.08))]" />
            <div className="grid grid-cols-2 gap-2">
              <div className="h-8 rounded-xl bg-slate-100" />
              <div className="h-8 rounded-xl bg-slate-100" />
            </div>
            <div className="h-9 rounded-2xl bg-slate-100" />
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white/70 px-3 py-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Signal coverage</span>
          <span className="text-xs font-semibold text-electric">Live preview</span>
        </div>
      </div>

      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan/80">Module Preview</p>
          <h3 className="mt-2 text-xl font-semibold text-ink">{title}</h3>
        </div>
        <span className="rounded-full border border-slate-200 bg-white/90 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
          Coming Soon
        </span>
      </div>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {[
          "Model coverage",
          "Prompt tracking",
          "Export ready"
        ].map((item, index) => (
          <span key={item} className="operator-chip">
            <span
              className={`operator-chip-dot ${
                index === 0 ? "bg-cyan" : index === 1 ? "bg-electric" : "bg-rose"
              }`}
            />
            {item}
          </span>
        ))}
      </div>
      <Link
        href={href}
        className="link-arrow mt-5 inline-flex text-sm font-semibold text-electric transition hover:text-ink"
      >
        Explore tool preview
      </Link>
    </div>
  );
}
