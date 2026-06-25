// features/daily-state/lib/water.ts
import type { Profile } from "@/features/profile/model/profile.types";

export function getWaterGoal(profile: Profile) {
  return Math.round(profile.weight * 30);
}