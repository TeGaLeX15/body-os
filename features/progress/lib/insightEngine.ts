import type { WorkoutEntry } from "@/features/workout/model/workout.types";

type InsightType = "good" | "warning" | "neutral";

export type Insight = {
  id: string;
  type: InsightType;
  title: string;
  description: string;
  value?: number;
};

/* ---------------- STRICT HELPERS ---------------- */

type NumericKeys = {
  [K in keyof WorkoutEntry]: WorkoutEntry[K] extends number ? K : never;
}[keyof WorkoutEntry];

function sum(workouts: WorkoutEntry[], key: NumericKeys): number {
  return workouts.reduce((acc, w) => acc + (w[key] ?? 0), 0);
}

/* ---------------- MAIN ENGINE ---------------- */

export function buildInsights(workouts: WorkoutEntry[]): Insight[] {
  if (workouts.length === 0) {
    return [
      {
        id: "empty",
        type: "neutral",
        title: "No data yet",
        description: "Start your first workout to unlock insights",
      },
    ];
  }

  const insights: Insight[] = [];

  /* ---------------- VOLUME ---------------- */

  const totalPull = sum(workouts, "pullups");
  const totalPush =
    sum(workouts, "pushups") + sum(workouts, "dips");
  const totalLegs = sum(workouts, "squats");

  const total = totalPull + totalPush + totalLegs;

  if (total === 0) {
    return insights;
  }

  const pullRatio = totalPull / total;
  const pushRatio = totalPush / total;
  const legsRatio = totalLegs / total;

  /* ---------------- MUSCLE BALANCE ---------------- */

  if (pushRatio > 0.55) {
    insights.push({
      id: "push-dominance",
      type: "warning",
      title: "Push dominance",
      description: "Push volume is higher than optimal balance",
      value: Math.round(pushRatio * 100),
    });
  }

  if (pullRatio < 0.25) {
    insights.push({
      id: "pull-lagging",
      type: "warning",
      title: "Pull lagging",
      description: "Increase pull-up volume for balance",
      value: Math.round(pullRatio * 100),
    });
  }

  if (
    Math.abs(pushRatio - pullRatio) < 0.1 &&
    legsRatio > 0.15
  ) {
    insights.push({
      id: "balanced",
      type: "good",
      title: "Balanced physique",
      description: "Push and pull are well aligned",
    });
  }

  /* ---------------- VOLUME TREND ---------------- */

  const last5 = workouts.slice(0, 5);
  const prev5 = workouts.slice(5, 10);

  const lastVolume = last5.reduce(
    (acc, w) =>
      acc +
      w.pullups +
      w.pushups +
      w.dips +
      w.squats,
    0,
  );

  const prevVolume = prev5.reduce(
    (acc, w) =>
      acc +
      w.pullups +
      w.pushups +
      w.dips +
      w.squats,
    0,
  );

  if (prevVolume > 0) {
    const change =
      ((lastVolume - prevVolume) / prevVolume) * 100;

    insights.push({
      id: "volume-trend",
      type: change >= 0 ? "good" : "warning",
      title: "Weekly volume trend",
      description:
        change >= 0
          ? `Increased by ${Math.round(change)}%`
          : `Decreased by ${Math.round(change)}%`,
      value: Math.round(change),
    });
  }

  /* ---------------- CONSISTENCY ---------------- */

  const streak = getStreak(workouts);

  if (streak >= 3) {
    insights.push({
      id: "streak-good",
      type: "good",
      title: "Consistency streak",
      description: `${streak} days in a row`,
      value: streak,
    });
  }

  if (streak === 0) {
    insights.push({
      id: "streak-broken",
      type: "warning",
      title: "No recent activity",
      description: "You haven't trained recently",
    });
  }

  return insights;
}

/* ---------------- STREAK ---------------- */

function getStreak(workouts: WorkoutEntry[]): number {
  if (workouts.length === 0) return 0;

  const sorted = [...workouts].sort(
    (a, b) =>
      +new Date(b.date) - +new Date(a.date),
  );

  let streak = 0;
  let current = new Date();

  for (const w of sorted) {
    const d = new Date(w.date);

    const diff =
      (current.getTime() - d.getTime()) /
      (1000 * 60 * 60 * 24);

    if (diff <= 1.5) {
      streak++;
      current = d;
    } else {
      break;
    }
  }

  return streak;
}