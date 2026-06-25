// features/progress/ui/StatsOverview/TrendCard.tsx
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

export default function TrendCard({ value }: { value: number }) {
  const isUp = value > 0;
  const isDown = value < 0;

  const Icon = isUp ? TrendingUp : isDown ? TrendingDown : Activity;

  const color = isUp
    ? "text-emerald-400"
    : isDown
      ? "text-rose-400"
      : "text-white/30";

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div
        className={`absolute h-10 w-10 rounded-full blur-xl ${
          isUp ? "bg-emerald-400/20" : isDown ? "bg-rose-400/20" : "bg-white/10"
        }`}
      />

      <Icon size={16} className={color} />

      <div className={`text-2xl font-bold leading-none ${color}`}>
        {isUp ? `+${value}` : value}
      </div>

      <span className="text-[10px] text-white/40 mt-1">Trend</span>
      
      {(isUp || isDown) && (
        <div
          className={`absolute -bottom-1 h-[2px] w-8 ${
            isUp ? "bg-emerald-400/60" : "bg-rose-400/60"
          } blur-[1px]`}
        />
      )}
    </div>
  );
}
