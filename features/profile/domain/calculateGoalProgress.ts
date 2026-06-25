// features/profile/domain/calculateGoalProgress.ts
import type { Profile } from "../model/profile.types";

/**
 * Прогресс к цели веса (0–100%)
 */
export function calculateGoalProgress(profile: Profile) {
  const start = profile.weight;
  const goal = profile.goalWeight;

  if (start === goal) return 100;

  const total = Math.abs(start - goal);
  const current = Math.abs(profile.weight - goal);

  const progress = 1 - current / total;

  return Math.max(0, Math.min(100, Math.round(progress * 100)));
}