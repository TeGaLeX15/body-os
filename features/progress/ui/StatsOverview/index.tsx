// features/progress/ui/StatsOverview/index.tsx
"use client";

import type { WorkoutAnalytics } from "@/features/workout/domain/workoutAnalytics";
import {
  getTotalReps,
  getDominantMovement,
  getTrend,
  getStreak,
} from "@/features/progress/domain/progressDerived";

import StreakCard from "./StreakCard";
import TrendCard from "./TrendCard";
import StatCard from "./StatCard";
import DominantCard from "./DominantCard";

type Props = {
  analytics: WorkoutAnalytics;
};

export default function StatsOverview({ analytics }: Props) {
  const streak = getStreak(analytics);
  const trend = getTrend(analytics);
  const totalReps = getTotalReps(analytics);
  const dominant = getDominantMovement(analytics);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2">
        <StreakCard value={streak} />
        <TrendCard value={trend} />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <StatCard label="Workouts" value={analytics.workouts.length} />
        <StatCard label="Total reps" value={totalReps} />
      </div>

      <DominantCard value={dominant} />
    </div>
  );
}