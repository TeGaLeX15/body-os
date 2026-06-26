// features/workout/data/workoutRepository.ts
import type { WorkoutEntry } from "../model/workout.types";

import { workoutApi } from "../api/workoutApi";

export const workoutRepository = {
  get(): Promise<WorkoutEntry[]> {
    return workoutApi.get();
  },

  save(workouts: WorkoutEntry[]): Promise<void> {
    return workoutApi.save(workouts);
  },

  async add(workout: WorkoutEntry): Promise<WorkoutEntry[]> {
    const current = await workoutApi.get();

    const next = [workout, ...current];

    await workoutApi.save(next);

    return next;
  },

  async clear(): Promise<void> {
    await workoutApi.save([]);
  },

  subscribe(callback: () => void) {
    return workoutApi.subscribe(callback);
  },
};