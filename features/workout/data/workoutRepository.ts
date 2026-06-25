// features/workout/data/workoutRepository.ts
import type { WorkoutEntry } from "../model/workout.types";
import * as storage from "@/features/workout/data/storage";

export const workoutRepository = {
  get(): WorkoutEntry[] {
    return storage.getWorkouts();
  },

  save(data: WorkoutEntry[]) {
    storage.saveWorkouts(data);
  },

  subscribe(cb: () => void) {
    return storage.onStorageChange(cb);
  },
};
