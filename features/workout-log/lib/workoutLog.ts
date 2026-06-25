// features/workout-log/lib/workoutLog.ts
import { calculateWorkoutXP } from "@/features/workout/domain/workoutXP";
import type { WorkoutEntry } from "@/features/workout/model/workout.types";

export const INITIAL_LIMIT = 5;

export function sortWorkouts(workouts: WorkoutEntry[]) {
  return [...workouts].sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function calculateTotalXP(workouts: WorkoutEntry[]) {
  return workouts.reduce(
    (sum, workout) => sum + calculateWorkoutXP(workout),
    0,
  );
}

export function getVisibleWorkouts(
  workouts: WorkoutEntry[],
  expanded: boolean,
) {
  return expanded ? workouts : workouts.slice(0, INITIAL_LIMIT);
}

export function getWorkoutNumber(total: number, index: number) {
  return total - index;
}
