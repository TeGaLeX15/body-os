// features/progress/ui/StatsOverview/StatCard.tsx
export default function StatCard({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="text-[11px] text-white/60">{label}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  );
}