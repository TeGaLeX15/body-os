// features/daily-state/lib/streak.ts
import type { WorkoutEntry } from "@/features/workout/model/workout.types";

export function getWorkoutStreak(workouts: WorkoutEntry[]) {
  if (workouts.length === 0) return 0;

  const sorted = [...workouts].sort(
    (a, b) => +new Date(b.date) - +new Date(a.date),
  );

  let streak = 1;

  for (let i = 1; i < sorted.length; i++) {
    const prev = new Date(sorted[i - 1].date);
    const curr = new Date(sorted[i].date);

    const diff = (prev.getTime() - curr.getTime()) / (1000 * 60 * 60 * 24);

    if (diff <= 1.5) streak++;
    else break;
  }

  return streak;
}
