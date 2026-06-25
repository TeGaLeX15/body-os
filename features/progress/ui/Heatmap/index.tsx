// features/progress/ui/Heatmap/index.ts
"use client";

import type { WorkoutEntry } from "@/features/workout/model/workout.types";

import { buildHeatmapData } from "../../lib/buildHeatmapData";
import HeatmapGrid from "./HeatmapGrid";

type Props = {
  workouts: WorkoutEntry[];
};

export default function Heatmap({ workouts }: Props) {
  const heatmap = buildHeatmapData(workouts);

  const activeDays = heatmap.days.filter((d) => d.value > 0).length;

  const totalSessions = heatmap.days.reduce((acc, d) => acc + d.value, 0);

  return (
    <div className="rounded-2xl border border-border bg-card p-4 space-y-4">
      <div>
        <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
          Activity Calendar
        </p>

        <p className="text-sm text-muted-foreground mt-1">
          Last 42 days of activity
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-muted/40 p-3">
          <p className="text-[10px] text-muted-foreground">Active Days</p>

          <p className="text-lg font-bold">{activeDays}</p>
        </div>

        <div className="rounded-xl bg-muted/40 p-3">
          <p className="text-[10px] text-muted-foreground">Sessions</p>

          <p className="text-lg font-bold">{totalSessions}</p>
        </div>
      </div>

      <HeatmapGrid days={heatmap.days} offset={heatmap.offset} />
    </div>
  );
}
