// features/progress/domain/buildWeeklyBreakdown.ts
import type { WorkoutEntry } from "@/features/workout/model/workout.types";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export type WeeklyDay = {
  day: string;
  volume: number;
};

export function buildWeeklyBreakdown(workouts: WorkoutEntry[]): WeeklyDay[] {
  const map: Record<string, number> = {
    Mon: 0,
    Tue: 0,
    Wed: 0,
    Thu: 0,
    Fri: 0,
    Sat: 0,
    Sun: 0,
  };

  for (const workout of workouts) {
    const date = new Date(workout.date);

    const dayIndex = date.getDay();

    const key = days[dayIndex === 0 ? 6 : dayIndex - 1];

    const volume =
      (workout.pullups ?? 0) +
      (workout.pushups ?? 0) +
      (workout.dips ?? 0) +
      (workout.squats ?? 0);

    map[key] += volume;
  }

  return days.map((day) => ({
    day,
    volume: map[day],
  }));
}
