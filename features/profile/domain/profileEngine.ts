// features/profile/domain/profileEngine.ts
import type { Profile } from "../model/profile.types";
import { calculateBMR } from "./calculateBMR";
import { calculateGoalProgress } from "./calculateGoalProgress";

export function getProfileMetrics(profile: Profile) {
  return {
    bmr: calculateBMR(profile),
    goalProgress: calculateGoalProgress(profile),

    waterGoalLiters: +(profile.waterGoalMl / 1000).toFixed(1),
  };
}