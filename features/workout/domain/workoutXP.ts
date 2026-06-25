// features/workout/domain/workoutXP.ts
import type { WorkoutEntry } from "../model/workout.types";

export function calculateWorkoutXP(workout: WorkoutEntry) {
  return (
    workout.pullups * 5 +
    workout.dips * 4 +
    workout.pushups * 2 +
    workout.squats
  );
}

export function calculateXP(workouts: WorkoutEntry[]) {
  return workouts.reduce(
    (sum, w) => sum + calculateWorkoutXP(w),
    0,
  );
}