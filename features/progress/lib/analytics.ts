import type { WorkoutEntry } from "@/features/workout/model/workout.types";

/* ---------------- TYPES ---------------- */

export type MuscleType = "push" | "pull" | "legs";

export type Insight = {
  title: string;
  value: string;
  tone?: "good" | "neutral" | "warning";
};

/* ---------------- HELPERS ---------------- */

function sum(workouts: WorkoutEntry[], key: keyof WorkoutEntry): number {
  return workouts.reduce((acc, w) => acc + (w[key] as number), 0);
}

function lastNDays(workouts: WorkoutEntry[], days: number) {
  const now = Date.now();
  const ms = days * 86400000;

  return workouts.filter((w) => now - new Date(w.date).getTime() <= ms);
}

/* ---------------- MUSCLE SPLIT ---------------- */

export function getMuscleBalance(workouts: WorkoutEntry[]) {
  const push = sum(workouts, "pushups") + sum(workouts, "dips");
  const pull = sum(workouts, "pullups");
  const legs = sum(workouts, "squats");

  const total = push + pull + legs || 1;

  return {
    push: Math.round((push / total) * 100),
    pull: Math.round((pull / total) * 100),
    legs: Math.round((legs / total) * 100),
  };
}

/* ---------------- WEEKLY ---------------- */

export function getWeeklyStats(workouts: WorkoutEntry[]) {
  const last7 = lastNDays(workouts, 7);
  const prev7 = lastNDays(workouts, 14).filter(
    (w) => !last7.includes(w),
  );

  const sumReps = (arr: WorkoutEntry[]) =>
    arr.reduce(
      (acc, w) =>
        acc +
        w.pullups +
        w.dips +
        w.pushups +
        w.squats,
      0,
    );

  const current = sumReps(last7);
  const previous = sumReps(prev7);

  const diff = current - previous;

  return {
    current,
    previous,
    diff,
  };
}

/* ---------------- INSIGHTS ---------------- */

export function buildInsights(workouts: WorkoutEntry[]): Insight[] {
  const insights: Insight[] = [];

  const total = workouts.length;

  const last7 = lastNDays(workouts, 7);

  if (last7.length >= 3) {
    insights.push({
      title: "Consistency",
      value: `You trained ${last7.length} days this week`,
      tone: "good",
    });
  }

  if (total >= 10) {
    insights.push({
      title: "Momentum",
      value: "You’ve built a stable training habit",
      tone: "good",
    });
  }

  const pull = sum(workouts, "pullups");
  const push = sum(workouts, "pushups") + sum(workouts, "dips");

  if (pull > push) {
    insights.push({
      title: "Strength bias",
      value: "Pull strength is leading",
      tone: "neutral",
    });
  } else {
    insights.push({
      title: "Strength bias",
      value: "Push strength is leading",
      tone: "neutral",
    });
  }

  return insights;
}