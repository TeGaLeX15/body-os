// features/progress/ui/StatsOverview/RepsCard.tsx
import { Repeat } from "lucide-react";

export function RepsCard({ value }: { value: number }) {
  const active = value > 0;

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* soft energy glow */}
      <div className="absolute h-10 w-10 rounded-full bg-violet-400/10 blur-xl" />

      <Repeat
        size={16}
        className={active ? "text-violet-300" : "text-white/30"}
      />

      <div
        className={
          active
            ? "text-2xl font-bold text-white leading-none"
            : "text-2xl font-bold text-white/40 leading-none"
        }
      >
        {value}
      </div>

      <span className="text-[10px] text-white/40 mt-1">Reps</span>

      {/* slightly stronger baseline */}
      <div className="absolute -bottom-1 h-[2px] w-8 bg-gradient-to-r from-violet-500/0 via-violet-400/60" />
    </div>
  );
}
