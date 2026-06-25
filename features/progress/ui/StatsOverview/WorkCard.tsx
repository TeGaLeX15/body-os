// features/progress/ui/StatsOverview/WorkCard.tsx
import { Activity } from "lucide-react";

export function WorkCard({ value }: { value: number }) {
  const active = value > 0;

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="absolute h-10 w-10 rounded-full bg-white/10 blur-xl" />

      <Activity
        size={16}
        className={active ? "text-white/70" : "text-white/30"}
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

      <span className="text-[10px] text-white/40 mt-1">Work</span>

      <div className="absolute -bottom-1 h-[2px] w-6 bg-white/10 blur-[1px]" />
    </div>
  );
}
