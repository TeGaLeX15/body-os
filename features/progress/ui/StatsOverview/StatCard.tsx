// features/progress/ui/StatsOverview/StatCard.tsx
type Props = {
  label: string;
  value: string | number;
  className?: string;
};

export default function StatCard({ label, value, className }: Props) {
  return (
    <div
      className={`
        rounded-xl border border-white/10 bg-white/5 p-3
        flex flex-col gap-1
        ${className ?? ""}
      `}
    >
      <span className="text-[11px] text-white/50">{label}</span>
      <span className="text-lg font-semibold text-white">{value}</span>
    </div>
  );
}
