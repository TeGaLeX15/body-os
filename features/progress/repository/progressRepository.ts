import { getWorkouts, saveWorkouts, onStorageChange } from "@/shared/lib/storage";
import type { WorkoutEntry } from "@/features/workout/model/workout.types";

export function getWorkoutsRepo(): WorkoutEntry[] {
  return getWorkouts();
}

export function saveWorkoutsRepo(workouts: WorkoutEntry[]) {
  return saveWorkouts(workouts);
}

export function onWorkoutsStorageChange(callback: () => void) {
  return onStorageChange(callback);
}



