// features/daily-state/lib/water.ts
import type { Profile } from "@/features/profile/model/profile.types";

export function getActivityBonus(activity: Profile["activity"]) {
  switch (activity) {
    case "high":
      return 500;
    case "medium":
      return 250;
    case "low":
    default:
      return 0;
  }
}

export function getWaterGoal(profile: Profile) {
  const base = profile.currentWeight * 30;
  return Math.round(base + getActivityBonus(profile.activity));
}

export function getRecommendedWater(profile: Profile) {
  return getWaterGoal(profile);
}