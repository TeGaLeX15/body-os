import type { WorkoutEntry } from "@/features/workout/model/workout.types";
import {
  getWorkouts,
  saveWorkouts,
  onStorageChange,
} from "@/shared/lib/storage";

export function getWorkoutsRepo(): WorkoutEntry[] {
  return getWorkouts();
}

export function saveWorkoutsRepo(workouts: WorkoutEntry[]): void {
  saveWorkouts(workouts);
}

export function onWorkoutsStorageChange(callback: () => void): () => void {
  return onStorageChange(callback);
}

