// features/exercise/model/exercise.types.ts
export const EXERCISE_TYPES = [
  "pullups",
  "dips",
  "pushups",
  "squats",
] as const;

export type ExerciseType = (typeof EXERCISE_TYPES)[number];

export interface ExerciseState {
  type: ExerciseType;
  max: number | null;
  lastTestedAt: number | null;
  week: WeekPlan | null;
}

export interface WeekPlan {
  generatedAt: number;
  days: DayPlan[];
}

export type DayPlan =
  | {
      type: "training";
      dayIndex: number;
      sets: number[];
    }
  | {
      type: "rest";
      dayIndex: number;
    };
    