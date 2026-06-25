// features/daily-state/lib/goals.ts
import type { Profile } from "@/features/profile/model/profile.types";

export function getGoalType(profile: Profile) {
  const delta = profile.weight - profile.goalWeight;

  if (delta > 0) return "cut";
  if (delta < 0) return "bulk";
  return "maintain";
}

export function getWeightDelta(profile: Profile) {
  return profile.weight - profile.goalWeight;
}