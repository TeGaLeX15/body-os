// features/progress/ui/MuscleBalance/index.tsx
"use client";

import type { WorkoutAnalytics } from "@/features/workout/domain/workoutAnalytics";

import { buildMovementBalance } from "../../domain/buildMovementBalance";

type Props = {
  analytics: WorkoutAnalytics;
};

export default function MuscleBalance({
  analytics,
}: Props) {
  const data =
    buildMovementBalance(analytics);

  return (
    <div className="rounded-xl border border-border bg-card p-4 space-y-4">
      {/* HEADER */}
      <div>
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
          Movement balance
        </p>

        <p className="text-xs text-muted-foreground">
          Weekly training distribution
        </p>
      </div>

      {/* SCORE */}
      <div className="rounded-xl bg-background border border-border p-3">
        <p className="text-[11px] text-muted-foreground">
          Balance score
        </p>

        <p className="text-2xl font-bold">
          {data.balanceScore}
        </p>

        <p className="text-[11px] text-muted-foreground">
          out of 100
        </p>
      </div>

      {/* PUSH */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs">
          <span>Push</span>

          <span>
            {data.push} reps · {data.pushPercent}%
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-violet-500"
            style={{
              width: `${data.pushPercent}%`,
            }}
          />
        </div>
      </div>

      {/* PULL */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs">
          <span>Pull</span>

          <span>
            {data.pull} reps · {data.pullPercent}%
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-emerald-500"
            style={{
              width: `${data.pullPercent}%`,
            }}
          />
        </div>
      </div>

      {/* LEGS */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs">
          <span>Legs</span>

          <span>
            {data.legs} reps · {data.legsPercent}%
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-amber-500"
            style={{
              width: `${data.legsPercent}%`,
            }}
          />
        </div>
      </div>

      {/* INSIGHT */}
      <div className="rounded-xl border border-border bg-background p-3">
        <p className="text-[11px] text-muted-foreground">
          Coach note
        </p>

        <p className="text-sm font-medium mt-1">
          {data.dominant} is currently your dominant movement.
        </p>

        <p className="text-xs text-muted-foreground mt-1">
          Increase {data.weakest.toLowerCase()} volume to
          improve overall balance.
        </p>
      </div>
    </div>
  );
}