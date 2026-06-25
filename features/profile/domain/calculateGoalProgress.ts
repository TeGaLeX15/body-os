// features/profile/domain/calculateGoalProgress.ts
import type { Profile } from "../model/profile.types";

export function calculateGoalProgress(profile: Profile) {
  const start = profile.startWeight;
  const current = profile.currentWeight;
  const goal = profile.goalWeight;

  if (start === goal) return 100;

  const total = Math.abs(start - goal);
  const completed = Math.abs(start - current);

  const progress = (completed / total) * 100;

  return Math.max(0, Math.min(100, Math.round(progress)));
}
