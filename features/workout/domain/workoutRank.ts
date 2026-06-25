// features/workout/domain/workoutRank.ts
export type WorkoutRank =
  | "Bronze"
  | "Silver"
  | "Gold"
  | "Platinum"
  | "Diamond"
  | "Master"
  | "Legend";

export function calculateRank(level: number): WorkoutRank {
  if (level >= 50) return "Legend";
  if (level >= 40) return "Master";
  if (level >= 30) return "Diamond";
  if (level >= 20) return "Platinum";
  if (level >= 10) return "Gold";
  if (level >= 5) return "Silver";

  return "Bronze";
}
