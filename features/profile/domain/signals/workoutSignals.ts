// features/profile/domain/signals/workoutSignals.ts
import type { WorkoutEntry } from "@/features/workout/model/workout.types";

export function getWeeklyWorkouts(workouts: WorkoutEntry[]) {
  const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  return workouts.filter((w) => w.date >= weekAgo).length;
}

export function getStreak(workouts: WorkoutEntry[]) {
  const sorted = [...workouts].sort((a, b) => b.date - a.date);

  let streak = 0;
  let current = Date.now();

  for (const w of sorted) {
    const diffDays = (current - w.date) / (1000 * 60 * 60 * 24);

    if (diffDays <= 1.5) {
      streak++;
      current = w.date;
    } else {
      break;
    }
  }

  return streak;
}

export function getFatigue(workouts: WorkoutEntry[]) {
  const last3 = workouts
    .slice()
    .sort((a, b) => b.date - a.date)
    .slice(0, 3);

  if (last3.length < 3) return 0;

  const diff = (last3[0].date - last3[2].date) / (1000 * 60 * 60 * 24);

  if (diff < 2) return 15;
  if (diff < 4) return 8;

  return 0;
}
