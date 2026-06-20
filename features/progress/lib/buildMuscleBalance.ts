"use client";

import type { WorkoutEntry } from "@/features/workout/model/workout.types";

export type MuscleBalance = {
  push: number;
  pull: number;
  legs: number;

  total: number;

  pushRatio: number;
  pullRatio: number;
  legsRatio: number;

  dominant: "push" | "pull" | "legs" | "balanced";
};

type NumericKeys = "pullups" | "dips" | "pushups" | "squats";

function sum(workouts: WorkoutEntry[], key: NumericKeys): number {
  return workouts.reduce((acc, w) => acc + (w[key] ?? 0), 0);
}

export function buildMuscleBalance(
  workouts: WorkoutEntry[],
): MuscleBalance {
  const push =
    sum(workouts, "pushups") + sum(workouts, "dips");

  const pull = sum(workouts, "pullups");
  const legs = sum(workouts, "squats");

  const total = push + pull + legs || 1;

  const pushRatio = push / total;
  const pullRatio = pull / total;
  const legsRatio = legs / total;

  let dominant: MuscleBalance["dominant"] = "balanced";

  const max = Math.max(pushRatio, pullRatio, legsRatio);

  if (max === pushRatio && pushRatio > 0.45) dominant = "push";
  else if (max === pullRatio && pullRatio > 0.45) dominant = "pull";
  else if (max === legsRatio && legsRatio > 0.45) dominant = "legs";

  return {
    push,
    pull,
    legs,
    total,
    pushRatio,
    pullRatio,
    legsRatio,
    dominant,
  };
}