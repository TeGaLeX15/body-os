// features/home/components/stat-card/StatCardValue.tsx
type Props = {
  value: string | number;
};

export function StatCardValue({ value }: Props) {
  return (
    <p className="text-4xl font-bold tabular-nums text-foreground">
      {value}
    </p>
  );
}