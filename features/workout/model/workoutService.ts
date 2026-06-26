// features/workout/model/workoutService.ts
import type { WorkoutEntry } from "./workout.types";

import { workoutRepository } from "../data/workoutRepository";

export type SaveWorkoutInput = Omit<WorkoutEntry, "id" | "date">;

export function buildNewWorkout(
  input: SaveWorkoutInput,
): WorkoutEntry {
  return {
    id: crypto.randomUUID(),
    date: Date.now(),

    pullups: input.pullups,
    dips: input.dips,
    pushups: input.pushups,
    squats: input.squats,
  };
}

export async function saveWorkout(
  input: SaveWorkoutInput,
): Promise<WorkoutEntry[]> {
  const workout = buildNewWorkout(input);

  return workoutRepository.add(workout);
}

export function subscribeToWorkoutChanges(
  callback: () => void,
) {
  return workoutRepository.subscribe(callback);
}