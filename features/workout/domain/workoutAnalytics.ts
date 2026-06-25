// features/workout/domain/workoutAnalytics.ts
import type { WorkoutEntry } from "@/features/workout/model/workout.types";

import { calculateXP } from "./workoutXP";
import { calculateLevel } from "./workoutLevel";
import { calculateStrengthIndex } from "./workoutStrength";
import { calculateStreak } from "./workoutStreak";
import { calculateWeeklyVolume, calculatePR } from "./workoutStats";

export type WorkoutAnalytics = {
  workouts: WorkoutEntry[];

  xp: number;

  level: number;
  currentXP: number;
  xpToNextLevel: number;

  strength: number;
  streak: number;

  weekly: {
    pullups: number;
    dips: number;
    pushups: number;
    squats: number;
  };

  pr: {
    pullups: number;
    dips: number;
    pushups: number;
    squats: number;
  };

  lastWorkout: WorkoutEntry | null;
};

export function buildWorkoutAnalytics(
  workouts: WorkoutEntry[],
): WorkoutAnalytics {
  const sorted = [...workouts].sort(
    (a, b) => +new Date(b.date) - +new Date(a.date),
  );

  const xp = calculateXP(workouts);
  const levelData = calculateLevel(xp);

  return {
    workouts,

    xp,

    ...levelData,

    strength: calculateStrengthIndex(workouts),
    streak: calculateStreak(workouts),

    weekly: calculateWeeklyVolume(workouts),
    pr: calculatePR(workouts),

    lastWorkout: sorted[0] ?? null,
  };
}