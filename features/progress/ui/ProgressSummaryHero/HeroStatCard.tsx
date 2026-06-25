// features/progress/ui/ProgressSummaryHero/HeroStatCard.tsx
type Props = {
  label: string;
  value: React.ReactNode;
};

export default function HeroStatCard({
  label,
  value,
}: Props) {
  return (
    <div className="rounded-xl border border-border bg-background p-3">
      <p className="text-[11px] text-muted-foreground">
        {label}
      </p>

      <p className="text-lg font-bold">
        {value}
      </p>
    </div>
  );
}