// features/exercise/api/exerciseApi.ts
import type { ExerciseType, ExerciseState } from "../model/exercise.types";

import {
  getExerciseStore,
  saveExerciseStore,
  clearExerciseStore,
  type ExerciseStore,
} from "../data/exerciseStorage";

export const exerciseApi = {
  async getStore(): Promise<ExerciseStore> {
    return getExerciseStore();
  },

  async saveStore(store: ExerciseStore): Promise<void> {
    saveExerciseStore(store);
  },

  async clear(): Promise<void> {
    clearExerciseStore();
  },

  async get(type: ExerciseType): Promise<ExerciseState | undefined> {
    const store = getExerciseStore();

    return store[type];
  },
};
