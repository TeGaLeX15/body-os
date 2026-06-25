// features/workout/lib/streak.ts
import type { WorkoutEntry } from "../model/workout.types";

export function calculateStreak(workouts: WorkoutEntry[]): number {
  if (!workouts.length) return 0;

  const days = new Set(
    workouts.map(w => new Date(w.date).toDateString())
  );

  let streak = 0;
  const current = new Date();

  while (true) {
    const day = current.toDateString();

    if (days.has(day)) {
      streak++;
      current.setDate(current.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}