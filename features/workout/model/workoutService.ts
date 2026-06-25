// features/workout/model/workoutService.ts
import type { WorkoutEntry } from "../model/workout.types";
import { workoutRepository } from "../data/workoutRepository";

export type SaveWorkoutInput = Omit<WorkoutEntry, "id" | "date">;

export function buildNewWorkout(input: SaveWorkoutInput): WorkoutEntry {
  return {
    id: crypto.randomUUID(),
    date: new Date().toISOString(),
    pullups: input.pullups,
    dips: input.dips,
    pushups: input.pushups,
    squats: input.squats,
  };
}

export function saveWorkout(input: SaveWorkoutInput): WorkoutEntry[] {
  const existing = workoutRepository.get();
  const nextWorkout = buildNewWorkout(input);

  const updated = [nextWorkout, ...existing];
  workoutRepository.save(updated);

  return updated;
}

export function subscribeToWorkoutChanges(callback: () => void) {
  return workoutRepository.subscribe(callback);
}
