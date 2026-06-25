// features/workout/domain/sortWorkouts.ts
import { WorkoutEntry } from "../model/workout.types";

export function sortWorkouts(workouts: WorkoutEntry[]): WorkoutEntry[] {
  return [...workouts].sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
