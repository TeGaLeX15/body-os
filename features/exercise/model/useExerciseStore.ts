// features/exercise/model/useExerciseStore.ts
"use client";

import { useEffect, useState } from "react";

import { exerciseRepository } from "../data/exerciseRepository";

import type {
  ExerciseState,
  ExerciseType,
} from "./exercise.types";

type Store = Partial<
  Record<ExerciseType, ExerciseState>
>;

export function useExerciseStore() {
  const [state, setState] = useState<Store>({});

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState(exerciseRepository.get());
  }, []);

  function update(
    type: ExerciseType,
    patch: Partial<ExerciseState>,
  ) {
    const next = exerciseRepository.update(type, patch);

    setState(next);
  }

  return {
    state,
    update,
  };
}