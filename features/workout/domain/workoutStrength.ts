// features/workout/lib/strengthIndex.ts
import type { WorkoutEntry } from "../model/workout.types";

export function calculateStrengthIndex(workouts: WorkoutEntry[]) {
  return Math.round(
    workouts.reduce((acc, w) => {
      return (
        acc +
        w.pullups * 2 +
        w.dips * 1.5 +
        w.pushups * 0.5 +
        w.squats * 0.2
      );
    }, 0)
  );
}