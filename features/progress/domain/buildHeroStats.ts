// features/progress/domain/buildHeroStats.ts
import type { WorkoutAnalytics } from "@/features/workout/domain/workoutAnalytics";

export function buildHeroStats(analytics: WorkoutAnalytics) {
  const levelProgress =
    analytics.xpToNextLevel > 0
      ? (analytics.currentXP / analytics.xpToNextLevel) * 100
      : 0;

  return {
    level: analytics.level,

    xp: analytics.xp,

    currentXP: analytics.currentXP,

    xpToNextLevel: analytics.xpToNextLevel,

    strength: analytics.strength,

    streak: analytics.streak,

    lastWorkout: analytics.lastWorkout,

    levelProgress,
  };
}
