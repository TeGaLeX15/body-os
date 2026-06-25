// features/progress/ui/InsightCards/CoachCard.tsx
import type { CoachMode } from "@/features/progress/lib/coach";

type Props = {
  coach: CoachMode;
};

export default function CoachCard({ coach }: Props) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="text-[10px] uppercase text-white/40">Coach mode</p>

      <p className="text-sm font-semibold">{coach.title}</p>
      <p className="text-xs text-white/70">{coach.message}</p>
      <p className="text-[11px] text-emerald-300">{coach.actionHint}</p>
    </div>
  );
}
