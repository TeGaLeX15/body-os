// features/progress/repository/progressRepository.ts
import {
  getWorkouts,
  saveWorkouts,
  onStorageChange,
} from "@/features/workout/data/storage";

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
