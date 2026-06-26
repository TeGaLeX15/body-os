// features/exercise/data/exerciseRepository.ts
import { exerciseApi } from "../api/exerciseApi";

import type { ExerciseState, ExerciseType } from "../model/exercise.types";

import type { ExerciseStore } from "./exerciseStorage";

export const exerciseRepository = {
  getStore(): Promise<ExerciseStore> {
    return exerciseApi.getStore();
  },

  saveStore(store: ExerciseStore): Promise<void> {
    return exerciseApi.saveStore(store);
  },

  async get(type: ExerciseType): Promise<ExerciseState | undefined> {
    return exerciseApi.get(type);
  },

  async save(type: ExerciseType, state: ExerciseState): Promise<ExerciseStore> {
    const store = await exerciseApi.getStore();

    const next = {
      ...store,
      [type]: state,
    };

    await exerciseApi.saveStore(next);

    return next;
  },

  clear(): Promise<void> {
    return exerciseApi.clear();
  },
};
