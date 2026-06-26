// features/exercise/model/exercise.routes.ts
export const EXERCISE_TYPES = [
  "pullups",
  "dips",
  "pushups",
  "squats",
] as const;

export type ExerciseType = (typeof EXERCISE_TYPES)[number];

export function isExerciseType(value: unknown): value is ExerciseType {
  return EXERCISE_TYPES.includes(value as ExerciseType);
}