import type { WorkoutEntry } from "@/features/workout/model/workout.types";
import {
  getWorkoutsRepo,
  onWorkoutsStorageChange,
  saveWorkoutsRepo,
} from "@/shared/repository/workoutRepository";

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
  const existing = getWorkoutsRepo();
  const nextWorkout = buildNewWorkout(input);
  const updated = [nextWorkout, ...existing];
  saveWorkoutsRepo(updated);
  return updated;
}

export function subscribeToWorkoutChanges(callback: () => void): () => void {
  return onWorkoutsStorageChange(callback);
}

