interface SectionLabelProps {
  index: string;
  title: string;
  total?: string;
}

export default function SectionLabel({ index, title, total = "03" }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-500 sm:gap-4 sm:text-xs">
      <span className="text-white">{index}</span>
      <span className="text-neutral-700">/</span>
      <span>{title}</span>
      <span aria-hidden className="h-px flex-1 bg-white/10" />
      <span>
        {index} — {total}
      </span>
    </div>
  );
}
