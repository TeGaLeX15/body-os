// features/exercise/data/exerciseStorage.ts
import { load, save, remove } from "@/shared/storage/localStorage";

import type {
  ExerciseState,
  ExerciseType,
} from "../model/exercise.types";

export type ExerciseStore = Partial<
  Record<ExerciseType, ExerciseState>
>;

const KEY = "exercise_store";

export function getExerciseStore(): ExerciseStore {
  return load<ExerciseStore>(KEY, {});
}

export function saveExerciseStore(store: ExerciseStore): void {
  save(KEY, store);
}

export function clearExerciseStore(): void {
  remove(KEY);
}