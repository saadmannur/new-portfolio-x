export default function SectionEyebrow({ index, label }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-sm text-primary">{index}</span>
      <span className="h-px w-8 flex-none bg-border" />
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {label}
      </h2>
    </div>
  );
}
