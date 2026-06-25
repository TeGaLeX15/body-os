// features/progress/ui/StatsOverview/StreakCard.tsx
import { Flame } from "lucide-react";

export default function StreakCard({ value }: { value: number }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="flex items-center gap-2 text-[11px] text-white/60">
        <Flame className="text-orange-400" size={14} />
        <span>Streak</span>
      </div>
      <div className="mt-1 text-2xl font-bold text-white">
        {value}d
      </div>
    </div>
  );
}