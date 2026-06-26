// features/exercise/domain/exerciseEngine.ts
import type { ExerciseState, ExerciseType } from "../model/exercise.types";
import { generateWeekPlan } from "./generateProgram";
import { increaseMax } from "./progression";

export function createInitialState(
  type: ExerciseType,
  max: number
): ExerciseState {
  return {
    type,
    max,
    lastTestedAt: Date.now(),
    week: generateWeekPlan(max),
  };
}

export function completeDay(state: ExerciseState, sets: number[]): ExerciseState {
  const gainedXP = sets.reduce((a, b) => a + b, 0);

  const newXP = gainedXP; // пока локально (без store RPG слоя)

  return {
    ...state,
    lastTestedAt: Date.now(),
    // можно позже добавить XP систему сюда
  };
}

export function nextWeek(state: ExerciseState): ExerciseState {
  const newMax = increaseMax(state.max ?? 1);

  return {
    ...state,
    max: newMax,
    lastTestedAt: Date.now(),
    week: generateWeekPlan(newMax),
  };
}