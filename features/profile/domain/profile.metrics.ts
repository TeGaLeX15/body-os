// features/profile/domain/profile.metrics.ts
import type { Profile } from "../model/profile.types";
import type { WorkoutEntry } from "@/features/workout/model/workout.types";

import { calculateBMI } from "./calculateBMR";
import { calculateGoalProgress } from "./calculateGoalProgress";
import { calculateBodyScore } from "./calculateBodyScore";

export function getProfileMetrics(profile: Profile, workouts: WorkoutEntry[]) {
  return {
    bmr: calculateBMI(profile),
    goalProgress: calculateGoalProgress(profile),
    waterGoalLiters: +(profile.waterGoalMl / 1000).toFixed(1),
    bodyScore: calculateBodyScore({
      profile,
      workouts,
    }),
  };
}

export type ProfileMetrics = ReturnType<typeof getProfileMetrics>;
