// features/progress/ui/StatsOverview/DominantCard.tsx
import { Activity } from "lucide-react";

export default function DominantCard({ value }: { value: string }) {
  return (
    <div className="relative flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-3 overflow-hidden">
      {/* soft ambient glow */}
      <div className="absolute -top-6 -right-6 h-14 w-14 rounded-full bg-violet-400/10 blur-2xl" />

      {/* LEFT SIDE */}
      <div className="flex items-center gap-2">
        <div className="relative">
          <Activity size={16} className="text-violet-300" />

          {/* micro pulse dot */}
          <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-violet-400/40 animate-pulse" />
        </div>

        <div className="flex flex-col leading-none">
          <span className="text-[10px] text-white/40">Dominant</span>

          <span className="text-xs text-white/60">movement</span>
        </div>
      </div>

      {/* RIGHT SIDE (MAIN VALUE) */}
      <div className="text-sm font-bold text-white tracking-wide">
        {value.toUpperCase()}
      </div>

      {/* bottom energy line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-violet-500/0 via-violet-400/40 to-violet-500/0 blur-[1px]" />
    </div>
  );
}
