import Link from "next/link";

type ToolCardProps = {
  title: string;
  description: string;
  href: string;
  accent?: string;
  variant?: number;
};

const cardTags = [
  { label: "Model coverage", dotClass: "bg-sky-400" },
  { label: "Prompt tracking", dotClass: "bg-blue-600" },
  { label: "Export ready", dotClass: "bg-[#f43f5e]" }
] as const;

function ToolWireframe({ variant }: { variant: number }) {
  if (variant === 1) {
    return (
      <div className="flex h-[154px] flex-col justify-between rounded-[20px] border border-slate-200/80 bg-[#f9fbff] p-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-16 rounded-full bg-sky-400" />
          <span className="h-2 w-6 rounded-full bg-slate-200" />
        </div>
        <div className="space-y-2.5">
          <div className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-white px-3.5 py-3">
            <span className="h-2 w-24 rounded-full bg-slate-200" />
            <span className="h-2.5 w-4 rounded-full bg-emerald-400" />
          </div>
          <div className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-white px-3.5 py-3">
            <span className="h-2 w-20 rounded-full bg-slate-200" />
            <span className="h-2.5 w-4 rounded-full bg-sky-400" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === 2) {
    return (
      <div className="flex h-[154px] flex-col justify-between rounded-[20px] border border-slate-200/80 bg-[#f9fbff] p-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-16 rounded-full bg-sky-400" />
          <span className="h-2 w-8 rounded-full bg-slate-200" />
        </div>
        <div className="rounded-xl border border-slate-200/80 bg-white p-3.5 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="h-2 w-28 rounded-full bg-slate-200" />
            <span className="h-2 w-8 rounded-full bg-blue-100" />
          </div>
          <div className="h-2 w-full rounded-full bg-slate-100">
            <div className="h-2 w-3/4 rounded-full bg-sky-400/80" />
          </div>
          <div className="h-2 w-full rounded-full bg-slate-100">
            <div className="h-2 w-1/2 rounded-full bg-indigo-400/70" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === 3) {
    return (
      <div className="flex h-[154px] flex-col justify-between rounded-[20px] border border-slate-200/80 bg-[#f9fbff] p-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-16 rounded-full bg-sky-400" />
          <span className="h-2 w-8 rounded-full bg-slate-200" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-slate-200/80 bg-white p-3 space-y-2">
            <span className="block h-2 w-14 rounded-full bg-slate-200" />
            <span className="block h-2.5 w-16 rounded-full bg-sky-100" />
            <span className="block h-2 w-10 rounded-full bg-slate-100" />
          </div>
          <div className="rounded-xl border border-slate-200/80 bg-white p-3 space-y-2">
            <span className="block h-2 w-14 rounded-full bg-slate-200" />
            <span className="block h-2.5 w-12 rounded-full bg-rose-100" />
            <span className="block h-2 w-16 rounded-full bg-slate-100" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[154px] flex-col justify-between rounded-[20px] border border-slate-200/80 bg-[#f9fbff] p-4">
      <div className="flex items-center gap-2">
        <span className="h-2 w-16 rounded-full bg-sky-400" />
        <span className="h-2 w-8 rounded-full bg-slate-200" />
      </div>
      <div className="grid flex-1 grid-cols-[1.25fr_0.75fr] gap-3 pt-3">
        <div className="rounded-xl border border-slate-200/80 bg-white p-3.5 space-y-2.5">
          <span className="block h-2 w-10 rounded-full bg-slate-200" />
          <span className="block h-3 w-16 rounded-full bg-sky-100" />
        </div>
        <div className="rounded-xl border border-slate-200/80 bg-white p-3.5 space-y-2.5">
          <span className="block h-2 w-9 rounded-full bg-slate-200" />
          <span className="block h-3 w-14 rounded-full bg-indigo-100" />
        </div>
      </div>
    </div>
  );
}

export function ToolCard({ title, description, href, variant = 0 }: ToolCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-[28px] border border-slate-200/85 bg-white p-6 shadow-[0_6px_24px_rgba(15,23,42,0.035)] transition duration-200 hover:-translate-y-0.5 hover:border-slate-300/90 hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
      <div>
        <ToolWireframe variant={variant} />

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[10.5px] font-medium uppercase tracking-[0.16em] text-slate-400">
              Module Preview
            </p>
            <h3 className="mt-1.5 text-[20px] font-bold leading-snug text-ink">
              {title}
            </h3>
          </div>
          <span className="shrink-0 rounded-full border border-slate-200/90 bg-slate-50/80 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">
            Coming Soon
          </span>
        </div>

        <p className="mt-2 text-[14px] leading-[1.55] text-slate-500">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {cardTags.map((tag) => (
            <span
              key={tag.label}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-3 py-1 text-[11.5px] font-medium text-slate-600"
            >
              <span className={`h-1.5 w-1.5 rounded-full ${tag.dotClass}`} />
              {tag.label}
            </span>
          ))}
        </div>
      </div>

      <Link
        href={href}
        className="link-arrow mt-5 inline-flex w-fit text-[13.5px] font-semibold text-[#2563eb] transition hover:text-ink"
      >
        Explore tool preview
      </Link>
    </div>
  );
}
