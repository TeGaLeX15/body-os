// features/daily-state/model/useDailyState.ts
"use client";

import { useMemo } from "react";

import { useProfile } from "@/features/profile/model/useProfile";
import { useWorkouts } from "@/features/workout/hooks/useWorkouts";

import { getWaterGoal } from "../lib/water";
import { getWorkoutLoad, estimateFatigue } from "../lib/workout";
import { getGoalType, getWeightDelta } from "../lib/goals";
import { getWorkoutStreak } from "../lib/streak";

import type { DailyState } from "./dailyState.types";

export function useDailyState(): DailyState | null {
  const { profile } = useProfile();
  const { workouts } = useWorkouts();

  return useMemo(() => {
    if (!profile) return null;

    const recommendedWater = getWaterGoal(profile);

    const waterGoal =
      profile.waterGoalMl ?? recommendedWater;

    const waterConsumed = 0;

    const workoutLoad = getWorkoutLoad(workouts);
    const fatigue = estimateFatigue(workoutLoad);

    const streak = getWorkoutStreak(workouts);

    const weightDelta = getWeightDelta(profile);
    const goalType = getGoalType(profile);

    return {
      waterGoal,

      waterConsumed,
      workoutLoad,
      fatigue,
      streak,
      weightDelta,
      goalType,
    };
  }, [profile, workouts]);
}