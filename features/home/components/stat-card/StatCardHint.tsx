// features/home/components/stat-card/StatCardHint.tsx
type Props = {
  hint: string;
};

export function StatCardHint({ hint }: Props) {
  return <p className="text-[11px] text-foreground/50">{hint}</p>;
}
