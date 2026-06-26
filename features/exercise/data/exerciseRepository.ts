// features/exercise/data/exerciseRepository.ts
import type {
  ExerciseState,
  ExerciseType,
} from "../model/exercise.types";

import {
  getExerciseStore,
  saveExerciseStore,
  clearExerciseStore,
  type ExerciseStore,
} from "./exerciseStorage";

export const exerciseRepository = {
  get(): ExerciseStore {
    return getExerciseStore();
  },

  save(store: ExerciseStore): void {
    saveExerciseStore(store);
  },

  clear(): void {
    clearExerciseStore();
  },

  getExercise(
    type: ExerciseType,
  ): ExerciseState | undefined {
    return this.get()[type];
  },

  update(
    type: ExerciseType,
    patch: Partial<ExerciseState>,
  ): ExerciseStore {
    const current = this.get();

    const next: ExerciseStore = {
      ...current,
      [type]: {
        ...(current[type] ?? {
          type,
          max: null,
          lastTestedAt: null,
          week: null,
        }),
        ...patch,
      },
    };

    this.save(next);

    return next;
  },
};