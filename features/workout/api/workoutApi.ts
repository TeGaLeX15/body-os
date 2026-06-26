// features/workout/api/workoutApi.ts
import type { WorkoutEntry } from "../model/workout.types";

import {
  getWorkouts,
  saveWorkouts,
  onStorageChange,
} from "../data/storage";

export const workoutApi = {
  async get(): Promise<WorkoutEntry[]> {
    return getWorkouts();
  },

  async save(workouts: WorkoutEntry[]): Promise<void> {
    saveWorkouts(workouts);
  },

  subscribe(callback: () => void) {
    return onStorageChange(callback);
  },
};