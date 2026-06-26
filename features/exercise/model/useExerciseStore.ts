// features/exercise/model/useExerciseStore.ts
"use client";

import { useEffect, useState } from "react";

import { exerciseRepository } from "../data/exerciseRepository";

import type { ExerciseState, ExerciseType } from "./exercise.types";

type Store = Partial<Record<ExerciseType, ExerciseState>>;

export function useExerciseStore() {
  const [state, setState] = useState<Store>({});

  useEffect(() => {
    async function load() {
      const store = await exerciseRepository.getStore();

      setState(store);
    }

    void load();
  }, []);

  async function update(type: ExerciseType, patch: Partial<ExerciseState>) {
    const current = state[type];

    const nextState: ExerciseState = {
      ...(current ?? {
        type,
        max: null,
        lastTestedAt: null,
        week: null,
      }),
      ...patch,
    };

    const nextStore = await exerciseRepository.save(type, nextState);

    setState(nextStore);
  }

  return {
    state,
    update,
  };
}
