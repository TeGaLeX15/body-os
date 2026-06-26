// features/workout/data/workoutRepository.ts
import type { WorkoutEntry } from "../model/workout.types";

import * as storage from "./storage";

export const workoutRepository = {
  get(): WorkoutEntry[] {
    return storage.getWorkouts();
  },

  save(workouts: WorkoutEntry[]): void {
    storage.saveWorkouts(workouts);
  },

  add(workout: WorkoutEntry): WorkoutEntry[] {
    const current = storage.getWorkouts();

    const next = [workout, ...current];

    storage.saveWorkouts(next);

    return next;
  },

  update(workout: WorkoutEntry): WorkoutEntry[] {
    const next = this.get().map((w) => (w.id === workout.id ? workout : w));

    this.save(next);

    return next;
  },

  remove(id: string): WorkoutEntry[] {
    const next = this.get().filter((w) => w.id !== id);

    this.save(next);

    return next;
  },

  clear(): void {
    this.save([]);
  },

  subscribe(callback: () => void) {
    return storage.onStorageChange(callback);
  },
};
