// features/workout/data/storage.ts
import type { WorkoutEntry } from "@/features/workout/model/workout.types";
import { load, save } from "@/shared/storage/localStorage";

const KEY = "body_os_workouts";

export function getWorkouts(): WorkoutEntry[] {
  return load<WorkoutEntry[]>(KEY, []);
}

export function saveWorkouts(workouts: WorkoutEntry[]) {
  save(KEY, workouts);
}

export function onStorageChange(callback: () => void) {
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener("storage", callback);
  };
}