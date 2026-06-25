// features/workout/domain/getWorkoutPreview.ts
import { WorkoutEntry } from "../model/workout.types";
import { sortWorkouts } from "./sortWorkouts";

const PREVIEW_LIMIT = 5;

export function getWorkoutPreview(workouts: WorkoutEntry[]): WorkoutEntry[] {
  return sortWorkouts(workouts).slice(0, PREVIEW_LIMIT);
}
