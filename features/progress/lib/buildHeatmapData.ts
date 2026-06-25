// features/progress/lib/buildHeatmapData.ts
import type { WorkoutEntry } from "@/features/workout/model/workout.types";

export type HeatmapDay = {
  key: string;
  value: number;
};

export type HeatmapData = {
  days: HeatmapDay[];
  offset: number;
};

function getKey(date: Date) {
  return date.toISOString().split("T")[0];
}

export function buildHeatmapData(workouts: WorkoutEntry[]): HeatmapData {
  const map = new Map<string, number>();

  for (const workout of workouts) {
    const key = getKey(new Date(workout.date));

    map.set(key, (map.get(key) ?? 0) + 1);
  }

  const days: HeatmapDay[] = [];

  for (let i = 41; i >= 0; i--) {
    const date = new Date();

    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() - i);

    const key = getKey(date);

    days.push({
      key,
      value: map.get(key) ?? 0,
    });
  }

  const firstDate = new Date(days[0].key);

  const offset = firstDate.getDay() === 0 ? 6 : firstDate.getDay() - 1;

  return {
    days,
    offset,
  };
}
