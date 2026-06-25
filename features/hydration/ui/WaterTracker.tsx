// features/hydration/ui/WaterTracker.tsx
"use client";

import { useHydration } from "../model/useHydration";
import { useDailyState } from "@/features/daily-state/model/useDailyState";

export function WaterTracker() {
  const { water, add } = useHydration();
  const state = useDailyState();

  if (!state) return null;

  const percent = Math.min(
    100,
    (water / state.waterGoal) * 100
  );

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="flex justify-between text-sm">
        <span>Water</span>
        <span>
          {water} / {state.waterGoal} ml
        </span>
      </div>

      <div className="mt-2 h-2 w-full rounded-full bg-white/10">
        <div
          className="h-2 rounded-full bg-blue-400"
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="mt-3 flex gap-2">
        <button
          onClick={() => add(250)}
          className="rounded bg-white/10 px-3 py-1 text-sm"
        >
          +250ml
        </button>

        <button
          onClick={() => add(500)}
          className="rounded bg-white/10 px-3 py-1 text-sm"
        >
          +500ml
        </button>
      </div>
    </div>
  );
}