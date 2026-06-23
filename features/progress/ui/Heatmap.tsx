"use client";

import type { WorkoutEntry } from "@/features/workout/model/workout.types";


function getKey(date: Date) {
  return date.toISOString().split("T")[0];
}

function intensity(v: number) {
  if (v === 0) return "bg-white/5";
  if (v === 1) return "bg-emerald-500/20";
  if (v === 2) return "bg-emerald-500/40";
  return "bg-emerald-500/70";
}

type HeatmapProps = {
  workouts: WorkoutEntry[];
};

export default function Heatmap({ workouts }: HeatmapProps) {


  const map = new Map<string, number>();

  for (const w of workouts) {
    const key = getKey(new Date(w.date));
    map.set(key, (map.get(key) ?? 0) + 1);
  }

  const days = Array.from({ length: 42 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - i);

    const key = getKey(d);

    return {
      key,
      value: map.get(key) ?? 0,
    };
  });

  return (
    <div className="space-y-2">
      <p className="text-[9px] uppercase tracking-wider text-white/35">
        Activity heatmap
      </p>

      <div className="grid grid-cols-7 gap-1">
        {days.reverse().map((d) => (
          <div
            key={d.key}
            className={`aspect-square rounded-[4px] transition ${intensity(
              d.value,
            )}`}
            title={`${d.key}: ${d.value} workouts`}
          />
        ))}
      </div>
    </div>
  );
}