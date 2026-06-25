// features/home/components/StatTile.tsx
import {
  StatCard,
  StatCardHeader,
  StatCardValue,
  StatCardHint,
} from "@/features/home/components/stat-card";

export function StatTile({
  title,
  value,
  hint,
  icon,
}: {
  title: string;
  value: string | number;
  hint: string;
  icon?: React.ReactNode;
}) {
  return (
    <StatCard>
      <StatCardHeader title={title} icon={icon} />
      <StatCardValue value={value} />
      <StatCardHint hint={hint} />
    </StatCard>
  );
}
