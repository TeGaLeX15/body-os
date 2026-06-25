// features/workout/domain/workoutLevel.ts
export function calculateLevel(totalXP: number) {
  const xpPerLevel = 100;

  return {
    level: Math.floor(totalXP / xpPerLevel) + 1,
    currentXP: totalXP % xpPerLevel,
    xpToNextLevel: xpPerLevel,
  };
}
