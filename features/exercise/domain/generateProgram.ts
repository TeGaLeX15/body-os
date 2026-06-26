// features/exercise/domain/generateProgram.ts
import type { WeekPlan, DayPlan } from "../model/exercise.types";

function clamp(n: number) {
  return Math.max(1, Math.round(n));
}

function buildSets(max: number, multiplier: number): number[] {
  return [
    clamp(max * multiplier),
    clamp(max * (multiplier - 0.1)),
    clamp(max * (multiplier - 0.2)),
    clamp(max * (multiplier - 0.3)),
    clamp(max * (multiplier - 0.4)),
  ];
}

function trainingDay(
  dayIndex: number,
  max: number,
  multiplier: number
): DayPlan {
  return {
    type: "training",
    dayIndex,
    sets: buildSets(max, multiplier),
  };
}

export function generateWeekPlan(max: number): WeekPlan {
  return {
    generatedAt: Date.now(),
    days: [
      trainingDay(1, max, 0.6), // heavy
      { type: "rest", dayIndex: 2 },

      trainingDay(3, max, 0.55), // medium
      { type: "rest", dayIndex: 4 },

      trainingDay(5, max, 0.5), // light
      { type: "rest", dayIndex: 6 },

      trainingDay(7, max, 0.65), // pump / test prep
    ],
  };
}