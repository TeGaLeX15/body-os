import type { WorkoutEntry } from "@/features/workout/model/workout.types";

/* ---------------- TYPES ---------------- */

export type InsightType = "good" | "warning" | "neutral";

export type InsightIntent =
  | "progress"
  | "risk"
  | "balance"
  | "achievement";

export type InsightSeverity = "high" | "medium" | "low";

export type AthleteState =
  | "cruising"
  | "progressing"
  | "overreaching"
  | "detraining"
  | "recovering";

export type Insight = {
  id: string;
  type: InsightType;
  intent: InsightIntent;
  severity: InsightSeverity;

  title: string;
  description: string;
  value?: number;

  score: number;
};

export type CoachMode = {
  title: string;
  message: string;
  actionHint: string;
};

/* ---------------- HELPERS ---------------- */

function sum(workouts: WorkoutEntry[], key: keyof WorkoutEntry): number {
  return workouts.reduce((acc, w) => {
    const val = Number(w[key]);
    return acc + (Number.isFinite(val) ? val : 0);
  }, 0);
}

/* ---------------- ENGINE ---------------- */

export function buildInsights(workouts: WorkoutEntry[]): Insight[] {
  if (!workouts.length) {
    return [
      {
        id: "empty",
        type: "neutral",
        intent: "progress",
        severity: "low",
        title: "No data yet",
        description: "Start your first workout",
        score: 0,
      },
    ];
  }

  const insights: Insight[] = [];

  const pull = sum(workouts, "pullups");
  const push = sum(workouts, "pushups") + sum(workouts, "dips");
  const legs = sum(workouts, "squats");

  const total = pull + push + legs;

  const pullRatio = pull / total;
  const pushRatio = push / total;

  /* ---------------- BALANCE ---------------- */

  if (pushRatio > 0.55) {
    insights.push({
      id: "push-dominance",
      type: "warning",
      intent: "risk",
      severity: "high",
      title: "Push dominance",
      description: "Too much pushing vs pulling",
      value: Math.round(pushRatio * 100),
      score: 85,
    });
  }

  if (pullRatio < 0.25) {
    insights.push({
      id: "pull-lagging",
      type: "warning",
      intent: "balance",
      severity: "high",
      title: "Pull lagging",
      description: "Pull strength needs attention",
      value: Math.round(pullRatio * 100),
      score: 90,
    });
  }

  /* ---------------- STREAK ---------------- */

  const streak = getStreak(workouts);

  if (streak >= 3) {
    insights.push({
      id: "streak",
      type: "good",
      intent: "achievement",
      severity: streak > 7 ? "high" : "medium",
      title: "Consistency streak",
      description: `${streak} days in a row`,
      value: streak,
      score: streak * 10,
    });
  }

  if (streak === 0) {
    insights.push({
      id: "streak-broken",
      type: "warning",
      intent: "risk",
      severity: "high",
      title: "No activity",
      description: "You haven't trained recently",
      score: 95,
    });
  }

  /* ---------------- SORT ---------------- */

  return insights.sort((a, b) => b.score - a.score);
}

/* ---------------- COACH MODE ---------------- */

export function getCoachMode(insights: Insight[]): CoachMode {
  const topRisk = insights.find(i => i.intent === "risk");
  const progress = insights.filter(i => i.intent === "progress").length;

  if (topRisk?.id === "push-dominance") {
    return {
      title: "Balance correction needed",
      message: "You’re overloading push muscles. Add pull work today.",
      actionHint: "Focus: Pull-ups + rows",
    };
  }

  if (topRisk?.id === "pull-lagging") {
    return {
      title: "Pull weakness detected",
      message: "Your back chain is behind pushing strength.",
      actionHint: "Focus: Pull-ups, negatives",
    };
  }

  if (progress >= 2) {
    return {
      title: "Great momentum",
      message: "Your volume is improving consistently.",
      actionHint: "Keep current load",
    };
  }

  return {
    title: "Steady state",
    message: "Maintain consistency today.",
    actionHint: "Light full-body session",
  };
}

/* ---------------- STREAK ---------------- */

function getStreak(workouts: WorkoutEntry[]): number {
  if (!workouts.length) return 0;

  const sorted = [...workouts].sort(
    (a, b) => +new Date(b.date) - +new Date(a.date),
  );

  let streak = 0;
  let current = new Date();

  for (const w of sorted) {
    const d = new Date(w.date);
    const diff = (current.getTime() - d.getTime()) / (1000 * 60 * 60 * 24);

    if (diff <= 1.5) {
      streak++;
      current = d;
    } else break;
  }

  return streak;
}