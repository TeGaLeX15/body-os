import type { WorkoutEntry } from "@/features/workout/model/workout.types";

export function calculateWorkoutXP(workout: WorkoutEntry) {
  return (
    workout.pullups * 5 +
    workout.dips * 4 +
    workout.pushups * 2 +
    workout.squats
  );
}

export function calculateTotalXP(workouts: WorkoutEntry[]) {
  return workouts.reduce(
    (sum, workout) => sum + calculateWorkoutXP(workout),
    0,
  );
}
