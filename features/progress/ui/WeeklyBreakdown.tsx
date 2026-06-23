"use client";

import type { WorkoutEntry } from "@/features/workout/model/workout.types";

import { buildWeeklyBreakdown } from "../lib/buildWeeklyBreakdown";

type WeeklyBreakdownProps = {
  workouts: WorkoutEntry[];
};

export default function WeeklyBreakdown({ workouts }: WeeklyBreakdownProps) {

  const data = buildWeeklyBreakdown(workouts);

  const max = Math.max(...data.map((d) => d.volume), 1);

  const bestDay = data.reduce((a, b) =>
    a.volume > b.volume ? a : b,
  );

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3 space-y-3">
      {/* header */}
      <div className="flex items-center justify-between">
        <p className="text-[10px] uppercase tracking-wider text-white/40">
          Weekly activity
        </p>

        <p className="text-[10px] text-emerald-300 font-semibold">
          Best: {bestDay.day}
        </p>
      </div>

      {/* chart */}
      <div className="space-y-2">
        {data.map((d) => {
          const percent = (d.volume / max) * 100;

          return (
            <div key={d.day} className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-white/60">
                  {d.day}
                </span>

                <span className="text-[11px] text-white tabular-nums">
                  {d.volume}
                </span>
              </div>

              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-violet-500/60 rounded-full transition-all"
                  style={{ width: `${percent}%` }}
                />
              </div>

              <div className="text-[9px] text-muted-foreground">
                {d.workouts} sessions
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}