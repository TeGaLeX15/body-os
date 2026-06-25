// features/profile/model/profile.types.ts
export type GoalType = "lose" | "gain" | "maintain";
export type ActivityLevel = "low" | "medium" | "high";

export interface WeightHistoryEntry {
  weight: number;
  date: number;
}

export interface Profile {
  goal: GoalType;

  height: number;
  age: number;

  activity: ActivityLevel;

  startWeight: number;
  currentWeight: number;
  goalWeight: number;

  waterGoalMl: number;

  weightHistory: WeightHistoryEntry[];

  createdAt: number;
  updatedAt: number;
}
