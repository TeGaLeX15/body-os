// features/progress/ui/StatsOverview/StreakCard.tsx
import { Flame } from "lucide-react";

export default function StreakCard({ value }: { value: number }) {
  const active = value > 0;

  return (
    <div className="relative flex flex-col items-center justify-center">
      {active && (
        <div className="absolute h-10 w-10 rounded-full bg-orange-400/20 blur-xl animate-pulse" />
      )}

      <Flame
        size={16}
        className={active ? "text-orange-400 animate-pulse" : "text-white/30"}
      />

      <div
        className={
          active
            ? "text-2xl font-bold text-orange-300 leading-none"
            : "text-2xl font-bold text-white/40 leading-none"
        }
      >
        {value}d
      </div>

      <span className="text-[10px] text-white/40 mt-1">Streak</span>

      {active && (
        <div className="absolute -bottom-1 h-[2px] w-8 bg-gradient-to-r from-orange-500/0 via-orange-400/60 to-orange-500/0 animate-pulse" />
      )}
    </div>
  );
}
