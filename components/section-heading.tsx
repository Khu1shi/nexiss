type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-4xl">
      <div className="flex items-center gap-3">
        <span className="eyebrow">{eyebrow}</span>
        <span className="hidden h-px w-20 bg-gradient-to-r from-electric/40 to-transparent sm:block" />
      </div>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
    </div>
  );
}
