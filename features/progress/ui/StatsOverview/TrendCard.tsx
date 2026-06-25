// features/progress/ui/StatsOverview/TrendCard.tsx
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

export default function TrendCard({ value }: { value: number }) {
  const Icon =
    value > 0 ? TrendingUp : value < 0 ? TrendingDown : Activity;

  const color =
    value > 0
      ? "text-emerald-400"
      : value < 0
      ? "text-rose-400"
      : "text-white/60";

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="flex items-center gap-2 text-[11px] text-white/60">
        <Icon size={14} className={color} />
        <span>Trend</span>
      </div>

      <div className={`mt-1 text-2xl font-bold ${color}`}>
        {value > 0 ? `+${value}` : value}
      </div>
    </div>
  );
}